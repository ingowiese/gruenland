import { DATA_INDICES } from '../constants.js';

export function parseTableRow($, element) {
  const cells = $(element).find('td');
  const firstCell = cells.first();
  const dataCell = $(cells[2]);
  
  return {
    location: firstCell.text().trim(),
    ...parseDataCell(dataCell.text().trim())
  };
}

export function parseDataCell(cellText) {
  const parts = cellText.split('|');
  return {
    temperature: parts[DATA_INDICES.TEMPERATURE].trim(),
    date: parts[DATA_INDICES.DATE].trim()
  };
}