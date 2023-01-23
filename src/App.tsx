import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import PostsList from "./pages/PostsList";
import UsersList from "./pages/UsersList";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
