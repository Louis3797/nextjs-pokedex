export function capitalizeFirstLetter(word: string): string {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
