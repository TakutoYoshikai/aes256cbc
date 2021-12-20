const assert = require("assert");
const { encrypt, decrypt } = require("./index");

describe("encrypt and decrypt", () => {
  it("decryption works", () => {
    const message = "Hello World";
    const buffer = encrypt(Buffer.from(message), "password");
    const decryptedMessage = decrypt(buffer, "password");
    assert.equal(message, decryptedMessage);
  });
});
