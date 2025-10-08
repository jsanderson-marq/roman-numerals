import { placeholder } from "@/index";

describe("index", () => {
  describe("when calling placeholder with input", () => {
    it("should fail", () => {
      expect(placeholder("input")).toBe("input");
    });
  });
});
