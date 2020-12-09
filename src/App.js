import "./App.css";
import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import React, { useState } from "react";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

function App() {
  const [users, setUsers] = useState(testData);

  const handleUserSearch = (username) => {
    const filterUsers = users.filter(user => user.name.toLowerCase().includes(username.toLowerCase()))
    setUsers(filterUsers)
  };

  return (
    <div className="App">
      <NavBar handleUserSearch={handleUserSearch}/>
      <CardList users={users} />
    </div>
  );
}

export default App;