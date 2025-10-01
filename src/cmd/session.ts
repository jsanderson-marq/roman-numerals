import crypto from 'crypto';
import { Session } from "../lib/models/session";
import { getUsername } from "../lib/os/user";
import { getHostname } from "../lib/os/host";

export function getSession(): Session {

  const hostname = getHostname();
  const username = getUsername()

  return {
    id: crypto.randomBytes(5).toString("hex"),
    user: {
      id: crypto.randomBytes(5).toString("hex"),
      name: username === '' ? '' : username,
      known_hosts: hostname === '' ? [] : [hostname],
    },
    host: hostname === '' ? null : hostname,
  };
}
