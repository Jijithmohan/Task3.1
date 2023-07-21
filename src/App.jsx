import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { UserList } from "./components/UserList";

function App() {
  
  const [userList, setUserList] = useState([]);
  const fetchUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    setUserList(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userList);
  return (
    <>
      <UserList userList={userList} setUserList={setUserList}/>
    </>
  );
}

export default App;
