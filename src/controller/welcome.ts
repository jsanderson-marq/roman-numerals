import { getSession } from "../cmd/session";

export function getWelcomeMessage() {
  const session = getSession();

  if (!!session.user?.name && !!session.host) {
    return `Welcome ${session.user.name} at ${session.host}!`
  }

  return "Hey, stranger, introduce yourself by setting your machine hostname and username";
}
