import { IUser } from "../types/usersTypes";
import classes from "./User.module.scss";

interface IUserProps {
  user: IUser;
}

const User = ({ user }: IUserProps) => {
  return (
    <div className={classes.userBox}>
      <div style={{ marginLeft: "10px" }}>
        <p className="">
          <b>Name:</b> {user.name}
        </p>
        <p className="">
          <b>Username:</b> {user.username}
        </p>
      </div>
    </div>
  );
};

export default User;
