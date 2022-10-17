import { useState, useEffect } from "react";
import TaskComponent from "../pure/task";
import AddTask from "../pure/forms/add_task";
import { Task } from "../../models/task.class";
import { PRIORITY } from "../../models/priority.enum";

const TasklistComponent = () => {
  const defaulTask = new Task(
    "Estudiar",
    "Repasar conceptos de React en Open Bootcamp",
    false,
    PRIORITY.LOW
  );

  const defaulTask1 = new Task(
    "Cocinar",
    "Hacer el almuerzo",
    true,
    PRIORITY.HIGHT
  );
  const [tasks, setTask] = useState([defaulTask, defaulTask1]);

  const changeStatusTask = (task) => {
    console.log("Task statuus -->", task);
    const indexTask = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[indexTask].complete = !tempTask[indexTask].complete;
    setTask(tempTask);
  };

  const deleteTask = (task) => {
    const taskErased = task;
    console.log("Task to delete -->", taskErased);
    const indexTask = tasks.indexOf(task);
    const tempTaskDelete = [...tasks];
    tempTaskDelete.splice(indexTask, 1);
    setTask(tempTaskDelete);
  };

  const makeTask = (task) => {
    console.log("Task to create -->", task);
    const tempTaskAdd = [...tasks];
    tempTaskAdd.push(task);
    setTask(tempTaskAdd);
  };

  const viewTable = () => {
    return (
      <table>
        <thead class="text-center ">
          <tr class="columns-4 m-3 justify-center">
            <th scope="col" class="w-50 h-10">
              Titulo
            </th>
            <th scope="col" class="w-96 h-10">
              Descripcion
            </th>
            <th scope="col" class="w-50 h-10 px-7">
              Prioridad
            </th>
            <th scope="col" class="w-50 h-10">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              task={task}
              status={changeStatusTask}
              erase={deleteTask}
            />
          ))}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    console.log(`Componente de TaskList.`);
    return () => {
      console.log(`Sale del useEffect.`);
    };
  }, []);

  return (
    <div>
      <div class="container mx-auto px-9">
        <div>
          <h1 class="font-semibold text-2xl">Tus tareas:</h1>
        </div>
        <div>
          {tasks.length < 1 ? <h3>No hay tareas para mostrar</h3> : viewTable()}
        </div>
        <div>
          <h1 class="font-semibold text-2xl">Crear nueva tarea:</h1>
          <AddTask add={makeTask} total={tasks.length} />
        </div>
      </div>
    </div>
  );
};

export default TasklistComponent;
