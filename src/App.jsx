import './App.css';
import Edit from './ToDoList/Edit/index.jsx';
import List from './ToDoList/List/List';
import { useState, useEffect } from 'react';


function App() {
  const [affairList, setAffairList] = useState([])
  useEffect(()=>{
    console.log('执行副作用');
  },[affairList])
  return (
    <div className='background'>
      <div className="App">
        <Edit setAffairList={setAffairList} />
        <List affairList={affairList} setAffairList={setAffairList} />
      </div>
    </div>
  );
}

export default App;
