import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
import lottery from "./lottery";
import { useImperativeHandle } from "react/cjs/react.production.min";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { manager: "" };
  // }
  state = {
    manager: "",
    players: [],
    balance: "0",
    value: "",
    message: "",
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether"),
    });

    this.setState({ message: "You have been entered" });
  };

  onClick = async () => {
    this.setState({ message: "Waiting on transaction success..." });

    const accounts = await web3.eth.getAccounts();

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    const lastWinner = await lottery.methods.lastwinner().call();
    this.setState({ message: `Winner is ${lastWinner}!` });
  };

  checkLastWinner = async () => {
    const lastWinner = await lottery.methods.lastwinner().call();
    this.setState({ message: `Winner is ${lastWinner}!` });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. Therer are current{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>
        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter </label>
            <input
              value={this.state.value}
              onChange={(event) => {
                this.setState({ value: event.target.value });
              }}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />
        <h1>{this.state.message}</h1>
        <button onClick={this.checkLastWinner}>Check winner!</button>
      </div>
    );
  }
}
export default App;
