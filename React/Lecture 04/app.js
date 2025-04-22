import React from "react";
import ReactDOM from "react-dom/client";

const names = "Ritesh Singh"
const obj = {
    age : "24",
    cast : "Rajput"

}

const obj2 =
{
    backgroundColor:"yellow",
    fontSize:"27px",
    color:"red"
}
// this is the JSX : It allow to write the html code in js;
// Element
const newElemet = (
    <>
        <h1>Hello Dipu Singh {names} {obj.age}</h1>
        <h2 id="dipu">Hello Aditya Singh</h2>
        <h3 style = {obj2}> Hello Ritesh Singh</h3>
    </>
)


// function
function greed()
{
    return <h1>Hello jii React try kar rahy ho</h1>
}


function meet()
{
    return <h1>Ha Bhai koi option nahi hai🤣</h1>
}
const newElem = greed();
const newElem2 = meet();

const newElem3 = <>{greed()},{meet()}</>

const root = ReactDOM.createRoot(document.getElementById('start'));






root.render(newElem3);
