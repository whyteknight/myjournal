import React from 'react';
import './diary.css';

const JournalList = ({journalList, handleDeleteClick}) => {

    const handleCheck = (e) => {
        const checked = e.target.checked;
        const tID = e.target.getAttribute("aria-describedby");
        const tList = document.getElementById(tID);
        if (checked)
        {
            tList.children.item(0).style.textDecoration = "line-through"; 
            tList.children.item(1).style.textDecoration = "line-through"; 
            tList.children.item(2).style.textDecoration = "line-through";
            tList.children.item(3).style.textDecoration = "line-through";
        } else 
        {   
            tList.children.item(0).style.textDecoration = "none";
            tList.children.item(1).style.textDecoration = "none"; 
            tList.children.item(2).style.textDecoration = "none";
            tList.children.item(3).style.textDecoration = "none";   
        }
      };
   
    return (

      <div className="container">
         <h2>To-Do List</h2>
      <table className="table table-bordered table-striped">
              <tr>
                  <th></th>
                  <th>Date</th>
                  <th>Thoughts for the Day</th>
                  <th>Daily Task</th>
              </tr>
                {journalList.map((item) => {
                return (
                <tr key={item.id} id={item.id}>
                <input type="checkbox" aria-describedby={item.id} onClick={(e) => {handleCheck(e)}}/>   
                <td>{item.date}</td>
                <td>{(item.message  === "") ?  "None" : (item.message)}</td>
                <td>{(item.task === "") ? "None" : (item.task)}</td>
                <button onClick={() => handleDeleteClick(item.id)} class="btn bg-transparent"><i class="bi bi-trash"></i></button></tr> )
            
                })}
      </table>
      
      </div>
    )
  }
  

export default JournalList