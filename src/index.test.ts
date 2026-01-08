import { convertArabicToRoman } from "@/index";

const testCases: { input: number; output: string }[] = [
  { input: 0, output: "" },
  { input: 1, output: "I" },
  { input: 2, output: "II" },
  { input: 3, output: "III" },
  { input: 4, output: "IV"},
  { input: 5, output: "V" },
  { input: 6, output: "VI" },
  { input: 7, output: "VII" },
  { input: 8, output: "VIII" },
  { input: 9, output: "IX" },
  { input: 10, output: "X" },
  { input: 11, output: "XI" },
  { input: 36, output: "XXXVI" },
  { input: 50, output: "L"},
  { input: 67, output: "LXVII"},
  { input: 90, output: "XC"},
  { input: 100, output: "C"},
  { input: 400, output: "CD"},
  { input: 500, output: "D"},
  { input: 900, output: "DM"},
  { input: 1000, output: "M"},
  { input: 1776, output: "MDCCLXXVI"},
  { input: 1978, output: "MDMLXXVIII"},
];

describe("Work", () => {
  describe("convertArabicToRoman", () => {
    test.each(testCases)("$input should return $output", ({ input, output }) =>
      expect(convertArabicToRoman(input)).toEqual(output)
    );
  });
});
