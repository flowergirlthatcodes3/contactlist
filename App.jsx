import { useEffect, useState } from "react";
import AllUsers from "./AllUsers";
import "./App.css";
import SingleUser from "./SingleUser";

function App() {
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1) * 1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1) * 1);
    });
  }, []);

  const user = users.find((user) => {
    return hash === user.id;
  });
  console.log(user);

  return (
    <div>
      <h1> Contact List ({users.length}) </h1>
      {user ? <SingleUser user={user} /> : ""}

      <AllUsers users={users} hash={hash} />
    </div>
  );
}

export default App;
