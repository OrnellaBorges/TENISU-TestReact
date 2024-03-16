import { Users } from "../../api/usersApi";

export default function UserList({ state }: { state: string }) {
  const filteredUsers = Users.filter((user) =>
    user.first_name.toLowerCase().includes(state)
  );

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </ul>
  );
}
