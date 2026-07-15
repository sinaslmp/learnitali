// pdfjs-dist (all versions through at least 6.1.x) calls several still-new
// native JS APIs with no fallback, so it crashes on browsers that haven't
// shipped them yet:
//   - Uint8Array to/from base64/hex (Chrome ~May 2025)
//     https://github.com/mozilla/pdf.js/issues/20759
//   - Map.prototype.getOrInsertComputed, used throughout WorkerTransport
//     (an even newer "Map upsert" proposal)
// Must run in both the main thread and the pdf.js worker realm, since each
// has its own isolated set of intrinsics.
export function applyPdfjsPolyfills() {
  if (typeof Uint8Array.prototype.toHex !== 'function') {
    Uint8Array.prototype.toHex = function toHex() {
      return Array.from(this, (b) => b.toString(16).padStart(2, '0')).join('');
    };
  }
  if (typeof Uint8Array.fromHex !== 'function') {
    Uint8Array.fromHex = function fromHex(hex) {
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
      }
      return bytes;
    };
  }
  if (typeof Uint8Array.prototype.toBase64 !== 'function') {
    Uint8Array.prototype.toBase64 = function toBase64() {
      let binary = '';
      for (const b of this) binary += String.fromCharCode(b);
      return btoa(binary);
    };
  }
  if (typeof Uint8Array.fromBase64 !== 'function') {
    Uint8Array.fromBase64 = function fromBase64(base64) {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return bytes;
    };
  }

  for (const ctor of [Map, WeakMap]) {
    if (typeof ctor.prototype.getOrInsert !== 'function') {
      ctor.prototype.getOrInsert = function getOrInsert(key, value) {
        if (!this.has(key)) this.set(key, value);
        return this.get(key);
      };
    }
    if (typeof ctor.prototype.getOrInsertComputed !== 'function') {
      ctor.prototype.getOrInsertComputed = function getOrInsertComputed(key, callbackfn) {
        if (!this.has(key)) this.set(key, callbackfn(key));
        return this.get(key);
      };
    }
  }
}
