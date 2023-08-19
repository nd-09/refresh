const head = React.createElement("div",{id:"parent"} ,
React.createElement("div",{id:"nestedDemo"},
React.createElement("h1",{id:"child"},"This is your JS demonstrated by REACT!")))
const dadu = ReactDOM.createRoot(document.getElementById("container"))
console.log(head)
/*{ it only logs a javascript object and not a h1 tag and the curly braces indicates the props thats how react works }*/
dadu.render(head)
