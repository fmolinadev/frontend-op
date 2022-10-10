import { TaskComponent } from "../pure/task"
import { Task } from "../../models/task.class"
import { PRIORITY } from "../../models/priority.enum"

const TasklistComponent = () => {

    const defaulTask = new Task("Estudiar", "Repasar conceptos de React en Open Bootcamp", "false", PRIORITY.LOW)

    return (
        <div>
            <div>
                <h1>Tus tareas:</h1>
                <TaskComponent task={defaulTask} />
            </div>
        </div>
    )
}

export default TasklistComponent