import { describe, expect, it } from "@jest/globals";
import os from "os";
import { getWelcomeMessage } from "~sut";

describe("Smoke Tests", () => {
  describe("When getting a welcome message", () => {
    let message = getWelcomeMessage();

    beforeAll(() => {
      message = getWelcomeMessage();
    });

    it(`should generate welcome message with correct username`, () => {
      const expected = os.userInfo().username;
      expect(message).toContain(expected);
    });

    it(`should generate welcome message with correct hostname`, () => {
      const expected = os.hostname();
      expect(message).toContain(expected);
    });
  });
});
