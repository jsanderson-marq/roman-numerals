const mappings = [
  { arabic: 1000, roman: "M" },
  { arabic: 900, roman: "DM"},
  { arabic: 500, roman: "D" },
  { arabic: 400, roman: "CD"},
  { arabic: 100, roman: "C" },
  { arabic: 90, roman: "XC"},
  { arabic: 50, roman: "L" },
  { arabic: 10, roman: "X" },
  { arabic: 9, roman: "IX"},
  { arabic: 5, roman: "V" },
  { arabic: 4, roman: "IV"},
  { arabic: 1, roman: "I" },
];

export function convertArabicToRoman(arabic: number): string {
  if (arabic === 0) return "";

  const mapped = mappings.find(p => p.arabic <= arabic);
  return mapped!.roman + convertArabicToRoman(arabic - mapped!.arabic);
}
