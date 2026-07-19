export default () => ({
  app: {
    env: process.env.NODE_ENV ?? 'development',
    port: parseInt(process.env.PORT ?? '4000', 10),
    prefix: process.env.API_PREFIX ?? 'api',
    version: process.env.API_VERSION ?? 'v1',
    name: process.env.APP_NAME ?? 'Learnitali',
    frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3001',
    allowedOrigins: (process.env.ALLOWED_ORIGINS ?? '').split(',').filter(Boolean),
  },
  database: {
    url: process.env.DATABASE_URL,
    poolMin: parseInt(process.env.DATABASE_POOL_MIN ?? '2', 10),
    poolMax: parseInt(process.env.DATABASE_POOL_MAX ?? '10', 10),
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
  },
  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    password: process.env.REDIS_PASSWORD ?? undefined,
    ttl: parseInt(process.env.REDIS_TTL ?? '300', 10),
    db: parseInt(process.env.REDIS_DB ?? '0', 10),
  },
  storage: {
    provider: process.env.STORAGE_PROVIDER ?? 's3',
    region: process.env.AWS_REGION ?? 'eu-central-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_S3_BUCKET ?? 'learnitali-media',
    endpoint: process.env.AWS_S3_ENDPOINT ?? undefined,
    cdnUrl: process.env.CDN_URL ?? '',
  },
  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM ?? 'noreply@learnitali.com',
    fromName: process.env.SMTP_FROM_NAME ?? 'Learnitali',
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackUrl: process.env.GOOGLE_CALLBACK_URL,
  },
  throttle: {
    ttl: parseInt(process.env.THROTTLE_TTL ?? '60', 10),
    limit: parseInt(process.env.THROTTLE_LIMIT ?? '100', 10),
    authLimit: parseInt(process.env.THROTTLE_AUTH_LIMIT ?? '5', 10),
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  gemini: {
    apiKey: process.env.GEMINI_API_KEY,
    // "-latest" tracks Google's current recommended flash model, so this
    // stays valid as older dated models (gemini-2.5-flash, etc.) get retired.
    chatModel: process.env.GEMINI_CHAT_MODEL ?? 'gemini-flash-latest',
    ttsModel: process.env.GEMINI_TTS_MODEL ?? 'gemini-3.1-flash-tts-preview',
  },
});
