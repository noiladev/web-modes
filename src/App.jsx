import './App.css';
import Header from './components/Header/Header';
import {useState} from 'react' 
function App() {
  const [count, setCount] = useState(0)
  console.log();
  return (
    <div className="App">
       <Header data={count}/>
       {/* <h1>{count}</h1> */}
       <button className='btn__add' onClick={()=> count < 10 ? setCount(count+1): setCount(10)}>Add</button>
       <button className='btn__remove' onClick={()=> count >=1?  setCount(count-1): setCount(0)}>Remove</button>
    </div>
  );
}

export default App;
