import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {

const [list, setList] = useState("");
const [store, setStore] = useState([]);

const itemEvent = (event) =>{
  setList(event.target.value);
  console.log(event.target.value);
};
const printItem = () =>{
  setStore((oldItems) => {
    return [...oldItems, list];
  });
  setList("");
};

const deleteItems = (id) =>{
  console.log("deleted");
  setStore((oldItems) =>{
    return oldItems.filter((arrElement, index) =>{
      return index !== id;
    });
  });
};

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder="Add a Items" onChange={itemEvent} value={list}/>
            <button onClick={printItem} className='button'> + </button>
            <br/>
            <ol>
              {/* <li>{list}</li> */}
              {
                store.map((itemValue, index) => {
                  return <ToDoList key={index} id={index} text={itemValue} onSelect={deleteItems} />
                })
              }
            </ol>
          </div>       
      </div>
    </>
  );
};

export default App;