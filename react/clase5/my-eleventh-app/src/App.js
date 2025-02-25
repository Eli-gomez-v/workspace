import React from 'react';
import './App.css'; // Importa el archivo CSS

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: "Hello there! This is some text in a textarea.",
      select: "coconut",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("textarea submitted: " + this.state.textArea);
    alert("select submitted: " + this.state.select);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">My Eleventh App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Textarea:
            <textarea
              name="textArea"
              value={this.state.textArea}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Pick your favorite flavor:
            <select
              name="select"
              value={this.state.select}
              onChange={this.handleChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;