import React from "react";
import "./App.css";
const data = {
  users: [
    {
      id: 1,
      age: 23,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 33,
      name: "Marek",
      sex: "male"
    },
    {
      id: 3,
      age: 43,
      name: "Garek",
      sex: "male"
    },
    {
      id: 4,
      age: 143,
      name: "Asia",
      sex: "female"
    }
  ]
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>Użytkownik {user.name}</h1>
    <p>Informacje o użytkowniku:</p>
    <h2>Wiek: {user.age}</h2>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

class App extends React.Component {
  render() {
    let users = this.props.data.users;
    users = users.filter(user => user.sex === "female");
    const Items = users.map(user => <Item key={user.id} user={user} />);
    return <div>{Items}</div>;
  }
}

export default <App data={data} />;
