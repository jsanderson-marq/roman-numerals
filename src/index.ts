const mappings = [
  { arabic: 1000, roman: "M" },
  { arabic: 500, roman: "D" },
  { arabic: 100, roman: "C" },
  { arabic: 50, roman: "L" },
  { arabic: 10, roman: "X" },
  { arabic: 5, roman: "V" },
  { arabic: 1, roman: "I" },
];

export function convertArabicToRoman(arabic: number): string {
  if (arabic === 0) return "";

  const mapped = mappings.find(p => p.arabic <= arabic);
  return mapped!.roman + convertArabicToRoman(arabic - mapped!.arabic);
}
