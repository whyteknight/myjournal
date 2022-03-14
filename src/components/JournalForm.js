import React, { useState, useRef, useEffect } from 'react'
import JournalList from './JournalList';
import './diary.css';

//const chk = (localStorage.getItem('Thoughts')) ? JSON.parse(localStorage.getItem('Thoughts')): [];

const JournalForm = () => {
    const[id, setId] = useState(Date.now()) 
    const dateRef = useRef(null);
    const messageRef = useRef(null);
    const taskRef = useRef(null);
    const [journalList, setJournalList] = useState([])
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
    const journalObject = {
      id: id,
      date: dateRef.current.value,
      message: messageRef.current.value,
      task: taskRef.current.value,
    }
    
      //alert(JSON.stringify(thoughtObject));
      //localStorage.setItem('Thoughts', JSON.stringify(thoughtObject));
  
      setJournalList([...journalList, journalObject]);
  
      dateRef.current.value = null;
      messageRef.current.value = null;
      taskRef.current.value = null;
      setId(Date.now());
  
    }
  
      useEffect(() => {
        localStorage.setItem('Thoughts', JSON.stringify(journalList))
      }, [journalList]  
      );

      //   const deleteAll = () => {
      //   setJournalList([]);
      // }
        function handleDeleteClick(id) {
        const removeItem = journalList.filter((todo) => {
          return todo.id !== id;
        });
        setJournalList(removeItem);
      }
  
    return (
      <div className = "container" style={{backgroundColor: "lightblue"}}>
      <div className="row mb-5 text-center">
      <h2>My Journal</h2>
      <form action ="" onSubmit = {handleSubmit}> 
      <div className="col sm-6 text-center">    
      <label for="date">Date</label>
      <input type="date" name="date" className ="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm 
           border-0 shadow outline-none focus:outline-none focus:ring w-full" 
           placeholder="dd/mm/yyyy" ref={dateRef}/>
       </div><br/>
       <div className="col sm-6 text-center">
       <h4>Thoughts for the Day</h4>   
      <textarea placeholder="Type your thoughts here"
       className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm 
       border-0 shadow outline-none focus:outline-none focus:ring w-full" cols = "30" rows = "5" name="message" ref={messageRef}>
      </textarea>
      </div>
      <div className="col sm-6 text-center">
       <h4>Task</h4>   
      <textarea placeholder="Type your task here"
       className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm 
       border-0 shadow outline-none focus:outline-none focus:ring w-full" cols = "30" rows = "5" name="message" ref={taskRef}>
      </textarea>
      </div><br/>
      <button type ="submit" 
      className="bg-blue-500 text-black active:bg-blue-600 font-bold uppercase text-sm 
      rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-25"
      value = "Submit" name="submit" 
      >Save</button><br/>
      </form>
       <JournalList journalList={journalList} handleDeleteClick={handleDeleteClick}/>
      </div>
     
       </div>   
    )
  }

export default JournalForm