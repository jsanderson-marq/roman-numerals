export interface User {
  id: string,
  name: string,
  known_hosts: string[],
}

export interface Session {
  id: string,
  user: User,
  host: string | null,
}
