import React, { useRef } from "react";
import PropTypes from "prop-types";
import { PRIORITY } from "../../../models/priority.enum";
import { Task } from "../../../models/task.class";

const AddTask = ({ add, total }) => {
  const nameRef = useRef("");
  const descriptonRef = useRef("");
  const priorityRef = useRef(PRIORITY.MID);

  const createTask = (e) => {
    e.preventDefault();
    const createNewTask = new Task(
      nameRef.current.value,
      descriptonRef.current.value,
      false,
      priorityRef.current.value
    );
    add(createNewTask);
  };

  return (
    <form
      onSubmit={createTask}
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <div class="-mx-3 md:flex mb-6">
        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
            Nombre de la tarea:*
          </label>
          <input
            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="inputName"
            ref={nameRef}
            type="text"
            placeholder="¿Qué tenés pendiente?"
            required
            autoFocus
          />
          <div>
            <span class="text-red-500 text-xs italic">
              El nombre es obligatorio.
            </span>
          </div>
        </div>
        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
            Descripcion:*
          </label>
          <input
            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="inputDescription"
            ref={descriptonRef}
            type="text"
            placeholder="Tengo que hacer..."
            required
          />
          <div>
            <span class="text-red-500 text-xs italic">
              La descripción es obligatoria.
            </span>
          </div>
        </div>
        <div>
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2">
            Priodidad:*
          </label>
          <select
            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="inputPriority"
            ref={priorityRef}
            type="text"
            defaultValue={PRIORITY.MID}
            placeholder="Elegir"
          >
            <option value={PRIORITY.LOW}>Baja</option>
            <option value={PRIORITY.MID}>Media</option>
            <option value={PRIORITY.HIGHT}>Alta</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        class="md:w-full bg-green-600 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
      >
        {total > 0 ? "Agregar tarea" : "Crear tarea"}
      </button>
    </form>
  );
};

AddTask.propTypes = {
  add: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default AddTask;
