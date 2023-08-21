import React from "react"
import ReactDOM from "react-dom/client"
const head = React.createElement("div",{id:"parent"} ,
React.createElement("div",{id:"nestedDemo"},
[React.createElement("h1",{id:"child",key:"sibling1"},"This is your JS demonstrated by REACT!"),React.createElement("h2",{id:"sibling",key:"sibling2"},"You are safe brother")]))
const dadu = ReactDOM.createRoot(document.getElementById("container"))
console.log(head)
/*{ it only logs a javascript object and not a h1 tag and the curly braces indicates the props thats how react works }*/
dadu.render(head)