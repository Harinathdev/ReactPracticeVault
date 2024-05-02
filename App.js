/* let Elements = React.createElement(
                "div",
                { id: "parent"},
                [React.createElement(
                    "div",
                    {id: "child"},
                    [React.createElement("h1",{},"child h11"),
                    React.createElement("h1",{},"child h12")]),
                React.createElement(
                    "div",
                    {id: "child2"},
                    [React.createElement("h1",{},"child h11"),
                        React.createElement("h1",{},"child h12")])
                ]) */

                let Elements = React.createElement(
                    "div",
                    { id: "parent"},
                    "a")


let a = React.createElement(
    "h1", 
    {id: "head", test: "UDAV"}, 
    "Hello World react"
);
console.log(a)
let b = ReactDOM.createRoot(document.getElementById("root"));
console.log(b)
b.render(Elements)