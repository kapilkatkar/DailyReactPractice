import { Component } from "react";

class InputExample extends Component {
  state = {
    uName: "Kapil",
    uEmail: "kapilkatkar@gamil.com",
    uState: "Maharashtra",
  };

  render() {
    return (
      <div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            value={this.state.uName}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uName: e.target.value });
            }}
          />
        </div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={this.state.uEmail}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uEmail: e.target.value });
            }}
          />
        </div>
        <div>
          <p>State</p>
          <input
            type="text"
            placeholder="type your state"
            value={this.state.uState}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uState: e.target.value });
            }}
          />
        </div>

        <div>
          <p>Name: {this.state.uName}</p>
          <p>Email: {this.state.uEmail}</p>
          <p>uState: {this.state.uState}</p>
        </div>
      </div>
    );
  }
}

export default InputExample;
