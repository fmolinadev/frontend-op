import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log(`Creando tarea.`)
        return () => {
            console.log(`La tarea ${task.name} fue creada y se esta desmontando.`)
        };
    }, [task]);

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