import { PrismaClient, UserRole, Difficulty, AchievementType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Learnitali database...');

  // ─── Roles & Permissions ─────────────────────────────────────
  const permissions = [
    { name: 'course:create', resource: 'course', action: 'create' },
    { name: 'course:update', resource: 'course', action: 'update' },
    { name: 'course:delete', resource: 'course', action: 'delete' },
    { name: 'user:ban', resource: 'user', action: 'ban' },
    { name: 'user:read', resource: 'user', action: 'read' },
    { name: 'content:upload', resource: 'content', action: 'upload' },
  ];

  for (const perm of permissions) {
    await prisma.permission.upsert({
      where: { name: perm.name },
      create: perm,
      update: perm,
    });
  }

  // ─── Super Admin ──────────────────────────────────────────────
  const adminHash = await bcrypt.hash('Admin@123456', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@learnitali.com' },
    create: {
      email: 'admin@learnitali.com',
      passwordHash: adminHash,
      role: UserRole.SUPER_ADMIN,
      status: 'ACTIVE',
      emailVerified: true,
      emailVerifiedAt: new Date(),
      profile: { create: { firstName: 'Super', lastName: 'Admin' } },
      settings: { create: {} },
      subscription: { create: { plan: 'ENTERPRISE', status: 'ACTIVE' } },
    },
    update: {},
  });
  console.log(`✅ Admin created: ${admin.email}`);

  // ─── Demo Student ─────────────────────────────────────────────
  const studentHash = await bcrypt.hash('Student@123456', 12);
  const student = await prisma.user.upsert({
    where: { email: 'student@learnitali.com' },
    create: {
      email: 'student@learnitali.com',
      passwordHash: studentHash,
      role: UserRole.STUDENT,
      status: 'ACTIVE',
      emailVerified: true,
      emailVerifiedAt: new Date(),
      profile: { create: { firstName: 'دانشجو', lastName: 'آزمایشی', nativeLanguage: 'fa', targetLanguage: 'it' } },
      settings: { create: { language: 'fa', showTranslations: true } },
      subscription: { create: { plan: 'FREE', status: 'ACTIVE' } },
    },
    update: {},
  });
  console.log(`✅ Student created: ${student.email}`);

  // ─── Nuovo Espresso 1 Course ──────────────────────────────────
  const course = await prisma.course.upsert({
    where: { slug: 'nuovo-espresso-1' },
    create: {
      slug: 'nuovo-espresso-1',
      title: 'Nuovo Espresso 1',
      titleFa: 'نوئو اسپرسو ۱',
      description: 'Complete beginner Italian course for Persian speakers based on Nuovo Espresso 1 textbook.',
      descriptionFa: 'دوره کامل ایتالیایی مقدماتی برای فارسی‌زبانان بر اساس کتاب نوئو اسپرسو ۱.',
      language: 'it',
      nativeLanguage: 'fa',
      level: Difficulty.BEGINNER,
      isPublished: true,
      isFeatured: true,
      totalLessons: 10,
      estimatedHours: 8,
      creatorId: admin.id,
      tags: { create: [{ tag: 'italian' }, { tag: 'beginner' }, { tag: 'persian' }] },
    },
    update: { isPublished: true },
  });
  console.log(`✅ Course created: ${course.slug}`);

  // ─── Nuovo Espresso 2, 3, 4 Courses ──────────────────────────
  const additionalCourses = [
    {
      slug: 'nuovo-espresso-2',
      title: 'Nuovo Espresso 2',
      titleFa: 'نوئو اسپرسو ۲',
      description: 'Elementary Italian course for Persian speakers based on Nuovo Espresso 2 textbook.',
      descriptionFa: 'دوره ایتالیایی پایه برای فارسی‌زبانان بر اساس کتاب نوئو اسپرسو ۲.',
      level: Difficulty.BEGINNER,
      totalLessons: 10,
      estimatedHours: 10,
    },
    {
      slug: 'nuovo-espresso-3',
      title: 'Nuovo Espresso 3',
      titleFa: 'نوئو اسپرسو ۳',
      description: 'Intermediate Italian course for Persian speakers based on Nuovo Espresso 3 textbook.',
      descriptionFa: 'دوره ایتالیایی متوسط برای فارسی‌زبانان بر اساس کتاب نوئو اسپرسو ۳.',
      level: Difficulty.INTERMEDIATE,
      totalLessons: 10,
      estimatedHours: 12,
    },
    {
      slug: 'nuovo-espresso-4',
      title: 'Nuovo Espresso 4',
      titleFa: 'نوئو اسپرسو ۴',
      description: 'Upper-intermediate Italian course for Persian speakers based on Nuovo Espresso 4 textbook.',
      descriptionFa: 'دوره ایتالیایی بالاتر از متوسط برای فارسی‌زبانان بر اساس کتاب نوئو اسپرسو ۴.',
      level: Difficulty.ADVANCED,
      totalLessons: 10,
      estimatedHours: 14,
    },
  ];

  for (const c of additionalCourses) {
    await prisma.course.upsert({
      where: { slug: c.slug },
      create: {
        ...c,
        language: 'it',
        nativeLanguage: 'fa',
        isPublished: true,
        isFeatured: false,
        creatorId: admin.id,
        tags: { create: [{ tag: 'italian' }, { tag: c.level.toLowerCase() }, { tag: 'persian' }] },
      },
      update: { isPublished: true },
    });
    console.log(`✅ Course created: ${c.slug}`);
  }

  // ─── Achievements ─────────────────────────────────────────────
  const achievements = [
    { slug: 'first-lesson', name: 'First Lesson', nameFa: 'اولین درس', description: 'Complete your first lesson', descFa: 'اولین درس را تموم کن', type: AchievementType.LESSONS_COMPLETED, condition: { threshold: 1 }, xpReward: 50 },
    { slug: 'streak-7', name: '7-Day Streak', nameFa: '۷ روز متوالی', description: 'Study 7 days in a row', descFa: '۷ روز متوالی درس بخون', type: AchievementType.STREAK, condition: { threshold: 7 }, xpReward: 100 },
    { slug: 'streak-30', name: '30-Day Streak', nameFa: '۳۰ روز متوالی', description: 'Study 30 days in a row', descFa: '۳۰ روز متوالی درس بخون', type: AchievementType.STREAK, condition: { threshold: 30 }, xpReward: 500 },
    { slug: 'vocab-50', name: 'Word Master 50', nameFa: '۵۰ لغت', description: 'Learn 50 vocabulary items', descFa: '۵۰ تا لغت یاد بگیر', type: AchievementType.VOCABULARY, condition: { threshold: 50 }, xpReward: 150 },
    { slug: 'vocab-100', name: 'Word Master 100', nameFa: '۱۰۰ لغت', description: 'Learn 100 vocabulary items', descFa: '۱۰۰ تا لغت یاد بگیر', type: AchievementType.VOCABULARY, condition: { threshold: 100 }, xpReward: 300 },
    { slug: 'lessons-5', name: 'Halfway There', nameFa: 'نیمه راه', description: 'Complete 5 lessons', descFa: '۵ درس را تموم کن', type: AchievementType.LESSONS_COMPLETED, condition: { threshold: 5 }, xpReward: 200 },
    { slug: 'lessons-10', name: 'Course Champion', nameFa: 'قهرمان دوره', description: 'Complete all 10 lessons', descFa: 'همه ۱۰ درس را تموم کن', type: AchievementType.LESSONS_COMPLETED, condition: { threshold: 10 }, xpReward: 1000 },
  ];

  for (const ach of achievements) {
    await prisma.achievement.upsert({
      where: { slug: ach.slug },
      create: ach,
      update: ach,
    });
  }
  console.log(`✅ ${achievements.length} achievements seeded`);

  console.log('\n🎉 Seeding complete!');
  console.log('Admin: admin@learnitali.com / Admin@123456');
  console.log('Student: student@learnitali.com / Student@123456');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
