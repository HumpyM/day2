
import './App.css';
import Child from './Child';
import CurrentDate from './CurrentDate';
import Component from './Component';
import ToDo from './ToDo';
function App() {
  return (
    <div className="App">
      <Child state='default'></Child>
      <Child state='bar'></Child>
      <Child state='foo'></Child>
      <h3>What date is it?</h3>
      <CurrentDate date={Date()}/>
      <Component/>
      <ToDo/>
      
    </div>
  );
}

export default App;
