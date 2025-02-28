import path from 'path';
import { generateHTML } from '../templates/htmlTemplate.js';
import { ensureDirectoryExists, writeFile } from './fileUtils.js';

export async function writeDataToHTML(data, outputPath = 'output') {
  try {
    await ensureDirectoryExists(outputPath);
    
    const htmlContent = generateHTML(data);
    const filePath = path.join(outputPath, 'weather-data.html');
    
    await writeFile(filePath, htmlContent);
    console.log(`Data written to ${filePath}`);
  } catch (error) {
    console.error('Error writing HTML file:', error.message);
    throw error;
  }
}