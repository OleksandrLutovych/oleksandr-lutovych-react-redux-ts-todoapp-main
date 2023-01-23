import { Link } from "react-router-dom";
import { IconHome } from "./UI/IconHome";
import classes from "../components/Todo.module.scss";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="header">
          <div className="container menu1">
            <ul className="menu">
              <li>
                <Link to="/" className="btn">
                  <IconHome />
                </Link>
              </li>
              <li>
                <Link to="/posts">PostsList</Link>
              </li>
              <li>
                <Link to="/userslist">UsersList</Link>
              </li>
              <li>
                <Link to="/todo">TodoList</Link>
              </li>
            </ul>
            <div className="menu1">
              <input
                type="search"
                placeholder="Search..."
                className={classes.inputSearch}
                onChange={(e)=> { console.log(e.target.value)}}
              />
              <button className="btn">☾</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
