import  { Children } from "react";
function customRender(reactElement, Container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute = ('href', reactElement.props.href)
    domElement.setAttribute = ('target', reactElement.props.target)

    container.appendChild('document')
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children;
    for(const prop in props){
        // if(prop == Children) continue;
        domElement.setAttribue(prop, reactElement.props[prop]);
    }
    Container.appendChild(domElement);

}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target: '_blank'
    },
    Children: "click me visit google"
}

// document.getElementById
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)