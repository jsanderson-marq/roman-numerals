import { getWelcomeMessage } from "./welcome";
import * as Session from "../cmd/session";

function mockSession(user: string, host: string) {
  return jest.spyOn(Session, 'getSession').mockReturnValue({
    id: '',
    host: host || null,
    user: {
      id: '',
      name: user,
      known_hosts: host ? [host] : [],
    }
  });
}

describe('When getting a welcome message', () => {
  describe("and user is undefined", () => {

    let spy: jest.SpyInstance;
    beforeAll(() => {
      spy = mockSession('', '');
    })

    afterAll(() => {
      spy.mockRestore();
      jest.resetAllMocks();
    })

    it("should return a call to action", () => {
      const expected = "Hey, stranger, introduce yourself by setting your machine hostname and username";
      const actual = getWelcomeMessage();

      expect(actual).toBe(expected);
    });
  })

  describe("and user is defined", () => {
    let spy: jest.SpyInstance;
    beforeAll(() => {
      spy = mockSession('test-user', 'test-host');
    })

    afterAll(() => {
      spy.mockRestore();
      jest.resetAllMocks();
    })

    it("should return a greeting", () => {
      const expected = "Welcome test-user at test-host!";
      const actual = getWelcomeMessage();

      expect(actual).toBe(expected);
    })
  })
});
