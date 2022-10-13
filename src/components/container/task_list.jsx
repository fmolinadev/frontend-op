import { useState } from "react"
import TaskComponent from "../pure/task"
import { Task } from "../../models/task.class"
import { PRIORITY } from "../../models/priority.enum"

const TasklistComponent = () => {


    const defaulTask = new Task("Estudiar", "Repasar conceptos de React en Open Bootcamp", false, PRIORITY.LOW)
    const defaulTask1 = new Task("Correr", "Salir a trotar al parque 1 hora", false, PRIORITY.MID)
    const defaulTask2 = new Task("Cocinar", "Hacer el almuerzo", true, PRIORITY.HIGHT)
    const [tasks, /* setTask */] = useState([defaulTask, defaulTask1, defaulTask2])

    const completeTask = () => {
        console.log("Tarea completada")
    }


    return (
        <div>
            <div class="container mx-auto px-9">
                <div>
                    <h1 class="font-semibold text-2xl">Tus tareas:</h1>
                </div>
                <div >
                    <table>
                        <thead class="text-center ">
                            <tr class="columns-4 m-3 justify-center" >
                                <th scope="col" class="w-50 h-10">Titulo</th>
                                <th scope="col" class="w-96 h-10">Descripcion</th>
                                <th scope="col" class="w-50 h-10 px-7">Prioridad</th>
                                <th scope="col" class="w-50 h-10">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => <TaskComponent key={index} task={task} complete={completeTask} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TasklistComponent