import React from "react";
import "./styles.css";
import ErrorBoundary from "./ErrorBoundries";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Comp1 />
      <ErrorBoundary>
        <Comp2 />
      </ErrorBoundary>
      <Comp3 />
      <ErrorBoundary>
        <Comp4 />
      </ErrorBoundary>
    </div>
  );
}
const Comp1 = () => <h3>Component 1</h3>;

class Comp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {}

  handle = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    if (this.state.counter === 3) {
      throw null;
    }
    return <h3 onClick={this.handle}>Component {this.state.counter}</h3>;
  }
}
const Comp3 = () => <h3>Component 3 </h3>;

const Comp4 = () => {
  throw null;
  return <h3>Component 4</h3>;
};
