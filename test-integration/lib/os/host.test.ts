import { getHostname } from "~sut/lib/os/host";
import os from "os";

describe('When getting hostname from machine', () => {
  test('it should return the correct hostname', () => {
    const expected = os.hostname();
    const actual = getHostname();
    expect(actual).toBe(expected);
  } )
});
