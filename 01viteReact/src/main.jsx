import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
      <>
        <h2>Hii This is from MYAPP !</h2>
      </>
    )
}

const reactElement = React.createElement(
  'a', {href : "https://google.com", target : '_blank' }, 'Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

      // reactElement
    // <MyApp />
    <App />
)
