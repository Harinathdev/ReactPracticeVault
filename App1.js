let a = React.createElement("div", { id: "heades"},[React.createElement("div",{}, 
[React.createElement("h1", { id: "headers"},"hello world"),
React.createElement("h1", { id: "headers"},"hello world")]),React.createElement("div",{},
[React.createElement("h1", { id: "headers"},"hello world"),
React.createElement("h1", { id: "headers"},"hello world")])]);
let b = ReactDOM.createRoot(document.getElementById("root"));
let b1 = ReactDOM.createRoot(document.getElementById("root1"));
b.render(a)
b1.render(a)