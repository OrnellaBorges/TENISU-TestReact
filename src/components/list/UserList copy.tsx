import { Users } from "../../api/usersApi";

export default function UserList({ state }: { state: string }) {
  return (
    <ul>
      {Users.filter((user) =>
        user.first_name.toLowerCase().includes(state)
      ).map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </ul>
  );
}
