
// object
const React = {
    creatElement: function (tag, styles, childred) {
        const element = document.createElement(tag);

        if (typeof childred === 'object') {
            for (let val of childred) {
                element.append(val);
            }
        }
        else
            element.innerText = childred;
        for (let key in styles) {
            element.style[key] = styles[key];
        }
        return element;
    }
}

// creat a new object;  for DOM Mainpulations
const ReactDom =
{
    render: function (element, root) {
        root.append(element);
    }
}

const header1 = React.creatElement('h1', { fontSize: "30px", backgroundColor: "blue", color: "white" }, "Hii Dipu kumar");
const header2 = React.creatElement('h2', { fontSize: "26px", backgroundColor: "red", color: "white" }, "Kay karo bahi");
const header3 = React.creatElement('p', { fontSize: "26px", backgroundColor: "yellow", color: "black" }, "All is good but somethig is bad");

// create the li;
const li1 = React.creatElement('li', {}, "HTML");
const li2 = React.creatElement('li', {}, "CSS");
const li3 = React.creatElement('li', {}, "JS");

const ul = React.creatElement('ul', { fontSize: "26px", backgroundColor: "yellow", color: "black" }, [li1, li2, li3]);

// const root = document.getElementById('start');
// start.append(header1);
// start.append(header2);
// start.append(header3);

// 
ReactDom.render(header1, document.getElementById('start'));
ReactDom.render(header2, document.getElementById('start'));
ReactDom.render(header3, document.getElementById('start'));
ReactDom.render(ul, document.getElementById('start'));