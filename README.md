# Takuto
AES-256-CBC encryption library

### Requirements
* Node.js
* npm

### Usage
**install**
```bash
npm install --save TakutoYoshikai/aes256cbc
```

**encrypt and decrypt**
```javascript
const { encrypt, decrypt } = require("aes256cbc");

const data = Buffer.from("Hello world!");
const password = "password123";

const encryptedData = encrypt(data, password);

const decryptedData = decrypt(encryptedData, password);
```

### License
MIT License
