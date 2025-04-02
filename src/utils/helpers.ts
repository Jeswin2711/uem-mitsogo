export function keyGenerator(text: string, separator = "_"): string {
  return text.replace(" ", separator);
}
