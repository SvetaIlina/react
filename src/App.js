
import './App.css';

// можно использовать деструктуризацию
// function WhoAmI({name, surname, link}) {...

function WhoAmI(props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname} </h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <WhoAmI name="John" surname="Smith" link="ya.ru"/>
        <WhoAmI name="Alex" surname="Shepard" link="vk.ru"/>
    </div>
  );
}



// в пропс можем передавать все, что угодно: объекты 

// function App() {
//   return (
//     <div className="App">
//         <WhoAmI name={{firstName:'John'}} surname="Smith" link="ya.ru"/>
//         <WhoAmI name={{firstName:'Alex'}} surname="Shepard" link="vk.ru"/>
//     </div>
//   );
// }

// {/* <h1>My name is {name.firstName}, surname - {props.surname} </h1> */}

// функции

// function App() {
//   return (
//     <div className="App">
//         <WhoAmI name={() => { return 'John'}} surname="Smith" link="ya.ru"/>
//         <WhoAmI name={() => { return 'Alex'}} surname="Shepard" link="vk.ru"/>
//     </div>
//   );
// }

//{/* <h1>My name is {name()}, surname - {props.surname} </h1> */}

export default App;
