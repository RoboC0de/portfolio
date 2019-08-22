import React from "react";
import "./Typer.css";

class Typer extends React.Component {
  static defaultProps = {
    heading: "I am",
    dataText: [
      "Sawiz Ahmadi",
      "a Developer",
      "an Architect",
      "Eager to Learn",
      "Sawiz Ahmadi",
      "a Professional",
      "Ambitious",
      "Self-Disciplined",
      "a Designer"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    };
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 150
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <h1 className="headline">
        {this.props.heading}&nbsp;
        <span id="cursor">{this.state.text}</span>
      </h1>
    );
  }
}

export default Typer;
