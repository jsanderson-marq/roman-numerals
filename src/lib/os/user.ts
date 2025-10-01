import os from 'os';

export function getUsername(): string {
  return os.userInfo().username;
}
