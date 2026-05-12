#!/usr/bin/env node
// Uploads a local file to Vercel Blob (public) and prints the resulting URL.
// Usage: BLOB_READ_WRITE_TOKEN=... node scripts/upload-blob.mjs <local-path> [<remote-pathname>]

import {readFile} from "node:fs/promises";
import {basename} from "node:path";
import {put} from "@vercel/blob";

const [, , localPath, remotePathArg] = process.argv;

if (!localPath) {
  console.error(
    "Usage: BLOB_READ_WRITE_TOKEN=... node scripts/upload-blob.mjs <local-path> [<remote-pathname>]",
  );
  process.exit(1);
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Run `vercel env pull .env.local` after creating a Blob store, then `export $(grep -v '^#' .env.local | xargs)`.",
  );
  process.exit(1);
}

const remotePath = remotePathArg ?? basename(localPath);

const data = await readFile(localPath);
const {url, downloadUrl} = await put(remotePath, data, {
  access: "public",
  addRandomSuffix: false,
  allowOverwrite: true,
});

console.log("Uploaded:", remotePath, "(" + (data.byteLength / 1024 / 1024).toFixed(2) + " MB)");
console.log("Public URL:", url);
console.log("Download URL:", downloadUrl);
