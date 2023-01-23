import User from "../components/User";
import { useEffect } from "react";
import { IUser } from "../types/usersTypes";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import { fetchUsers } from "../reducers/UsersReducer";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Users</h2>
      <div>
        {users.map((user: IUser) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
