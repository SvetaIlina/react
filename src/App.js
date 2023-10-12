import React, {StrictMode} from 'react';
import './App.css';


const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here'
//   const styleField = {
//       width: '300px'
//     }
//   return <input 
//     type="text" 
//     placeholder={holder} 
//     style={styleField}/>
// }

class Field extends React.Component{
  render() {
    const holder = 'Enter here'
    const styleField = {
      width: '300px'
    }
    return <input 
              type="text" 
              placeholder={holder} 
              style={styleField}/>
  }
}

function Btn() {
  const text = 'Log in'
  const logged = true
  // const p = <p>LOG IN</p>
  // const res = () => {
  //   return 'Log in'
  // }
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}
export {Header};
export default App;
