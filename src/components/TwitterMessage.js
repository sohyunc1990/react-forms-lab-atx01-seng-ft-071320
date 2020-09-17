import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
        message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainChar = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} value={this.state.message} onChange={this.handleChange}/>
        {remainChar}
      </div>
    );
  }
}

export default TwitterMessage;
