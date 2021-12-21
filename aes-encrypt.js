#!/usr/bin/env node

const { encrypt } = require("./index");

const file = process.argv[2];
const fs = require("fs");
const reader = require("readline").createInterface({
  input: process.stdin,
});

process.stdout.write("password: ");
reader.on("line", (password) => {
  const data = fs.readFileSync(file);
  const encryptedData = encrypt(data, password);
  fs.writeFileSync(file + ".enc", encryptedData);
  process.exit();
});
