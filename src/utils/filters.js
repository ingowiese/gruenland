import { LOCATIONS } from '../constants.js';

export function isRelevantLocation(location) {
  return LOCATIONS.some(loc => location.includes(loc));
}