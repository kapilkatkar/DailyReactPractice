import { Component } from "react";

class InputForm extends Component {
  state = {
    uname1: "KK",
    radioV: "",
    checkBoxV: Boolean,
  };

  render() {
    return (
      <div>
        <div className="form-elements">
          <p>Name :</p>
          <input
            type="text"
            placeholder="please Enter name"
            id="name"
            value={this.state.uname1}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ uname1: e.target.value });
            }}
          />
        </div>
        <div>
          <p>gender</p>
          <p>Male</p>
          <input
            type="radio"
            onChange={(e) => {
              this.setState({ radioV: e.target.value });
            }}
          />
          <p>Female</p>
          <input type="radio" />
          <p>Others</p>
          <input type="radio" />
        </div>

        <div>
          <p>isMarried :</p>
          <p>Yes</p>
          <input type="checkbox" />
          <p>No</p>
          <input type="checkbox" />
        </div>
        <div>
          <p>name1 : {this.state.uname1}</p>
          <p>radio : {this.state.radioV}</p>
        </div>
      </div>
    );
  }
}

export default InputForm;
