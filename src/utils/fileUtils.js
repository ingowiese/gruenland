import fs from 'fs/promises';
import path from 'path';

export async function ensureDirectoryExists(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

export async function writeFile(filePath, content) {
  await fs.writeFile(filePath, content, 'utf-8');
}