import { Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/users/create" element={<CreateUser />} />
      <Route path="/users/update/:id" element={<UpdateUser />} />
    </Routes>
  );
};

export default App;