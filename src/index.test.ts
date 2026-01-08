import { convertArabicToRoman } from "@/index";

const testCases: { input: number; output: string }[] = [
  { input: 0, output: "" },
  { input: 1, output: "I" },
  { input: 2, output: "II" },
  { input: 3, output: "III" },
  { input: 5, output: "V" },
  { input: 6, output: "VI" },
  { input: 7, output: "VII" },
  { input: 8, output: "VIII" },
  { input: 10, output: "X" },
  { input: 11, output: "XI" },
  { input: 36, output: "XXXVI" },
  { input: 50, output: "L"},
  { input: 67, output: "LXVII"},
  { input: 100, output: "C"},
  { input: 500, output: "D"},
  { input: 1000, output: "M"},
  { input: 1776, output: "MDCCLXXVI"},
];

describe("Work", () => {
  describe("convertArabicToRoman", () => {
    test.each(testCases)("$input should return $output", ({ input, output }) =>
      expect(convertArabicToRoman(input)).toEqual(output)
    );
  });
});
