import { scrapeData } from './services/weatherService.js';
import { writeDataToHTML } from './utils/writer.js';

async function main() {
  try {
    const results = await scrapeData();
    await writeDataToHTML(results);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();