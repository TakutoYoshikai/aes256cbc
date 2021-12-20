const crypto = require("crypto");

function encrypt(buffer, password) {
  const salt = crypto.randomBytes(16).toString("base64");
  const key = crypto.scryptSync(password, salt, 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encryptedData = cipher.update(buffer);
  encryptedData = Buffer.concat([iv, Buffer.from(salt), encryptedData, cipher.final()]);
  return encryptedData;
}

function decrypt(buffer, password) {
  const iv = buffer.slice(0, 16);
  const salt = buffer.slice(16, 16 + 24);
  const encryptedData = buffer.slice(16 + 24);
  const key = crypto.scryptSync(password, salt, 32);
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decryptedData = decipher.update(encryptedData);
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);
  return decryptedData;
}

module.exports = {
  encrypt,
  decrypt,
}
