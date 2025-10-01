import { getSession } from "./session";
import { getHostname } from "../lib/os/host";
import { getUsername } from "../lib/os/user";

jest.mock("../lib/os/host");
jest.mock("../lib/os/user");
const mockedGetHostname = jest.mocked(getHostname);
const mockedGetUsername = jest.mocked(getUsername);

describe('When getting the session', () => {
  describe("and hostname is not set", () => {
    it("should return null", () => {
      mockedGetHostname.mockReturnValue('');
      const actual = getSession().host;
      expect(actual).toBeNull();
    });
  });
  describe("and hostname is set", () => {
    [
      {hostname: "h", host: "h"},
      {hostname: "host", host: "host"},
      {hostname: "localhost", host: "localhost"},
      {hostname: "avesta.dev.lucidpressvpc.com", host: "avesta.dev.lucidpressvpc.com"},
    ].forEach(({hostname, host}) => {
      it(`should return the correct host for ${hostname}`, () => {
        mockedGetHostname.mockReturnValue(hostname);
        const actual = getSession().host;
        expect(actual).toBe(host);
      });
    });
  })
  describe("and username is set", () => {
    [
      {username: "u"},
      {username: "user"},
      {username: "user-name"},
      {username: "user.name"},
    ].forEach(({username}) => {
      it(`should return the correct username for ${username}`, () => {
        mockedGetUsername.mockReturnValue(username);
        const actual = getSession().user.name;
        expect(actual).toBe(username);
      });
    });
  })
});
