import React from 'react';
import {useState, useEffect} from 'react';
import './css/style.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



function App() {


const [tasks, setTasks] = useState([]);



useEffect(() => {
    
    fetchData();
    
}, [])
    

const fetchData = async()=>{

    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    setTasks(data)

}

const fetchTask = async(id)=>{

    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;

}




const toggleReminder = async (id)=>{

    const taskToToggle = await fetchTask(id)
    const updatedData = {...taskToToggle, reminder:!taskToToggle.reminder};


    console.log(updatedData)

    await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedData)

    });

    fetchData()
}


const deleteTask = async(id)=>{

    console.log(id)

    await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'DELETE',      
    })

    fetchData()
}

const addTask = async(newTask)=>{


    console.log(newTask)


    await fetch(`http://localhost:5000/tasks`,{
        method:'POST', 
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)     
    })



    fetchData()
}



    return (
      <Router>
        <div className='appWrapper'> 
            <Header />
            <Route exact path='/' render={()=>(
                <>
                <AddTask addTask={addTask}/>
                <Tasks 
                    tasks={tasks}
                    toggleReminder={toggleReminder}
                    deleteTask={deleteTask}
                />
                </>
            )}/>
            <Route path='/about' component={About}/>
            <Footer />
        </div>
        </Router>
    )
}

export default App

