import PropTypes from "prop-types";
import { useEffect } from "react";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task, status, erase }) => {
  useEffect(() => {
    console.log(`//COMPONENTE TAREA`);
    return () => {
      console.log(`La tarea ${task.name} fue creada y se esta desmontando.`);
    };
  }, [task]);

  const taskStatusIcon = () => {
    if (task.complete === true) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          color="green"
          onClick={() => {
            status(task);
          }}
        >
          <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
          color="red"
          onClick={() => {
            status(task);
          }}
        >
          <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    }
  };

  const taskLevelBadge = () => {
    switch (task.priority) {
      case "Baja":
        return <span class="text-blue-400">{task.priority}</span>;
      case "Media":
        return <span class="text-yellow-500">{task.priority}</span>;
      case "Alta":
        return <span class="text-red-500">{task.priority}</span>;
      default:
        break;
    }
  };

  return (
    <tr class="text-center justify-center items-center">
      <td class="h-10">
        <span>{task.name}</span>
      </td>
      <td class="h-10">
        <span>{task.description}</span>
      </td>
      <td class="h-10">
        <span class="font-medium tracking-wide w-80">{taskLevelBadge()}</span>
      </td>
      <td class="h-10 flex">
        <span class="px-1">{taskStatusIcon()}</span>
        <span class="px-1" onClick={() => erase(task)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 cursor-pointer"
            color="red"
          >
            <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  status: PropTypes.func.isRequired,
  erase: PropTypes.func.isRequired,
};

export default TaskComponent;
