import { useEffect, useState } from "react";

type UsersType = { id: number; name: string };

/* presenter */
const UserListPresenter = ({ users }: { users: UsersType[] | undefined }) => {
  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

/* container */
const UserListContainer = () => {
  const [users, setUsers] = useState<UsersType[]>();

  useEffect(() => {
    // data fetching
    setUsers([
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ]);
  }, []);

  return <UserListPresenter users={users} />;
};

export default UserListContainer;
