import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import Navbar from "./components/nav"
import DescriptionArea from "./components/descriptions"
import Footering from "./components/Footer";
import AreaDev from "./components/AreaDev"

import Contact from "./components/Contact";

import { useState } from "react";

function App() {

  const [tasks,setTasks ] = useState([{
    id:2,
    tittle: "estudar progamação",
    description: "estudar bastante",
    isCompleted: false,
  },
{
    id:3,
    tittle: "estudar matematica",
    description: "estudar bastante",
    isCompleted: false,
  },
])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (tasks.id === taskId) {
        return {...task, isCompleted: !tasks.isCompleted}
      }

      return tasks
    });

    setTasks(newTasks)
  }
 
  
  return (
    
      

    <div>
      <Navbar/>
      <AddTask/>
      <DescriptionArea/>
      <AreaDev/>
      <Contact/>
      <Footering/>
      
      
    </div>

    

    

    
    
  )
}

export default App