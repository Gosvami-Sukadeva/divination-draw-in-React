class GetDivination extends React.Component {
  state = {
    options: [
      "wylosowałeś wróżbę numer 1",

      "Wylosowałeś wróżbę numer 2",

      "Wylosowałeś wróżbę numer 3",
    ],
    option: null,
    value: "",
  };

  handleDrawDivination = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("wpisz coś!");
    // const options = [...this.state.options]; - 1 sposob
    // options.push(this.state.value); - 1 sposob
    const options = this.state.options.concat(this.state.value); // - 2 sposób
    this.setState({
      options,
      value: "",
    });
    alert(`wróżba dodana. Aktualne wróżby: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDrawDivination}>Wylosuj wróżbę</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
        <br />
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<GetDivination />, document.getElementById("root"));
