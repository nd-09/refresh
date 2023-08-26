import React from "react";
import ReactDOM from "react-dom/client";
import HeaderGoGreen from "./components/HeaderGoGreen.js";
import GoGreenBody from "./components/GoGreenBody.js";
{
  /* this is your react element */
}
const elem = <h2>I am react element</h2>;
const Head = () => (
  <h1 className="child">Component composition using React Components</h1>
);
{
  /* And this is a react component */
}
const HeaderComponent = () => (
  <>
    <h1 className="parent">This is a React Functional component</h1>
    <Head />
    Haven't use this way of calling a react component(see the console) something
    that i didn't knew prior Now I know I know! ONE LEARNS NEW THING EVERYDAY.
    {console.log("{ Head() },", "One way to call react component")}
    {Head()}
    {elem}
  </>
);



const GoGreenComponent = () => {
  return (
    <>
      <HeaderGoGreen />
      <GoGreenBody />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<GoGreenComponent />);
