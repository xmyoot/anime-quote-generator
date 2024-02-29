import { Quote } from '../types/Quote';

export function generateQuotes(data: Quote[], quoteNumber: number): Quote[] {
  const newQuotes: Quote[] = []; // Explicitly declare newQuotes as Quote[]
  for (let i = 0; i < quoteNumber; i++) {
    const randomIndex: number = Math.floor(Math.random() * data.length);
    newQuotes.push(data[randomIndex]);
  }
  return newQuotes;
}
