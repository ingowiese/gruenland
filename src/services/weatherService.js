import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from '../config.js';
import { parseTableRow } from '../utils/parsers.js';
import { isRelevantLocation } from '../utils/filters.js';

export async function scrapeData() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    const results = [];

    $('tr:not(:has(tr))').each((_, element) => {
      const location = $(element).find('td').first().text().trim();
      
      if (isRelevantLocation(location)) {
        results.push(parseTableRow($, element));
      }
    });

    return results;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}