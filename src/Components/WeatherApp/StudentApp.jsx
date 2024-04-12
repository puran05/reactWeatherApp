import React from "react";
import './StudentApp.css';

const StudentApp=()=>{
   

    const search=async ()=>{
       const element = document.getElementsByClassName('idInput')    
       if(element[0] === ""){
        return 0;
       }
       let url = `https://jsonplaceholder.typicode.com/todos/${element[0].value}`;
       let response = await fetch(url);
       console.log(response);
       let data = await response.json();
       const id = document.getElementsByClassName("id");
       const title = document.getElementsByClassName("title");
       const status = document.getElementsByClassName("status");

       id[0].innerHTML= data.id;
       title[0].innerHTML=data.title;
       status[0].innerHTML=data.completed;

    }
    return(
        <div className="student-container">
                <div className="id">Id: </div>
                <div className="title">Title: delactis</div>
                <div className="status">Completion Status:false</div>
                <input type="text" className="idInput" placeholder="searchId"/>
                <div className="search-button" onClick={()=>search()}>+</div>
        </div>
    )
}

export default StudentApp;