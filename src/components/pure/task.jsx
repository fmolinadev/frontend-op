import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Nombre: {task.name}</h2>
            <h4>Descripcion: {task.description}</h4>
            <h5>Estado: {task.complete ? "Completada" : "Pendiente"}</h5>
            <h5>Prioridad: {task.priority}</h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent