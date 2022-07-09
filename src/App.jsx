import { useState } from "react"
import Header from './components/Header'
import Tareas from './components/tareas'


function App() {

  const [tareas,setTareas] = useState( [
    {
        id: 1,
        texto: 'Ir al doctor',
        fecha: '5 de Julio de 2022',
        terminada: true,
    },
    {
        id: 2,
        texto: 'Ir al cine',
        fecha: '10 de Julio de 2022',
        terminada: false,
    },
    {
        id: 3,
        texto: 'Ir al supermercado',
        fecha: '11 de Julio de 2022',
        terminada: false,
    }
]
);


//Borrar Tarea
const deleteTarea = (id) =>{
  // console.log('borrar',id)
  setTareas(tareas.filter((tarea)=>tarea.id !==id))
}

//Toggle terminado
const toggleTerminado = (id)=>{
  // console.log(id)
setTareas(tareas.map((tarea)=> tarea.id === id ? {...tarea, terminada: !tarea.terminada}: tarea))
}

  return (
    <div className='container'>
      <Header titulo={'Administrador de Tareas'} />
      {tareas.length > 0 ? 
      (<Tareas 
        tareas= {tareas} 
        onDelete= {deleteTarea} 
        onToggle={toggleTerminado}/>)
      : ('No hay tareas para mostrar')}
    </div>
  )
}

export default App
