import React from "react";
import ReactDOM from "react-dom/client";

let a = React.createElement("h1", {id: "heads"}, "hello world");
let b = ReactDOM.createRoot(document.getElementById("root"));
console.log(a)
// babel conver this jsx into reaact element
var C= () =>  (
        <h1 id="heads">
            hello world jsx
        </h1>
        )
var Fc = () =>{
    return (<div id="heads">
                hello world jsx return
                <C/>
            </div>)
}
//react element into functional component

const heading1 = (
    <h1>
        heading
    </h1>
)

const Fc1 = () => (
    <div>{heading1}</div>
)

//react element inside a react element
const heading2 = (
    <h1>
        heading
    </h1>
)
const heading3 = (
    <div>
        {heading2}
        heading
    </div>
)
const heading5 = (
    <div>

        {heading2}
    </div>
)
// functional component inside a react element

const Fc2 = () => (
    <div>Fc2</div>
)

const heading4 = (
    <Fc2></Fc2>
)

const heading6 = (
    <div>

        <Fc2></Fc2>
    </div>
)

//functional component inside the functional component
const Fc3 = () => (
    <div>Fc2</div>
)

const Fc4 = () => (
    <Fc2></Fc2>
)

const Fc5 = () => (
    <div><Fc2/></div>
)
let b1 = ReactDOM.createRoot(document.getElementById("root1"));
let b2 = ReactDOM.createRoot(document.getElementById("root2"));
b.render(<Fc></Fc>) 
b.render(<Fc/>) 
b.render(Fc()) 