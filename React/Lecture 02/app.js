const element = React.createElement("h1",{}, " Hii Dipu Singh");



// ReactDOM.render(element, document.getElementById('start'));  // React @17 

const root = ReactDOM.createRoot(document.getElementById('start'));
// React Root contaner;
root.render(element);