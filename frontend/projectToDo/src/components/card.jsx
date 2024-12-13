import React from 'react';
import Check from "../assets/check.png";
import Edit from "../assets/edit.png";


const card = ({ task, onDeleteTask, onEditTask}) => {
    return (
    <div className="card" key={task._id}>
      <div>
        <p>Nome: <span>{task.nome}</span></p>
        <p><span>criado: {new Date(task.createdAt).toLocaleString('pt-BR')}</span></p>
      </div>
      <div>
        <button onClick={onEditTask}>
          <img src={Edit}/>
        </button>
        <button onClick={onDeleteTask}>
          <img src={Check} />
        </button>
      </div>
    </div>

  )
}

export default card;