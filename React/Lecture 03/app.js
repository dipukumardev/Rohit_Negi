const element = React.createElement("h1",{id:"first",className:"Dipu", style:{backgroundColor:"red", fontSize:"30px", color:"white"}},"Hii Aditya Singh");
const element2 = React.createElement("h2",{id:"Aditya", className:"nameed", style:{backgroundColor:"blue", fontSize:"39", color:"red"}}, " Aaj maja aaya");


const div1 = React.createElement("div", {}, [element, element2]);

// ([div[div[h1[p]]]], {}, "hii dipu");

const root = ReactDOM.createRoot(document.getElementById('start'));
// root.render(element);  // it is replace by element2; solution:  in this condition do not show both so i crete a div1 and put in both childer in one div childer;
// root.render(element2);

// render the div 1 to show the both element  && element2;

root.render(div1);
