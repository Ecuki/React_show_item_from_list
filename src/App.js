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
  state = {
    select: "all"
  };

  handleUserFilter = option => {
    this.setState({
      select: option
    });
  };

  usersList = props => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />);
      default:
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />);
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleUserFilter.bind(this, "all")}>All</button>
        <button onClick={this.handleUserFilter.bind(this, "female")}>
          Women
        </button>
        <button onClick={this.handleUserFilter.bind(this, "male")}>Men</button>
        {this.usersList()}
      </div>
    );
  }
}

export default <App data={data} />;
