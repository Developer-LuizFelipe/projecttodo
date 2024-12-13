import React,{useRef} from 'react'

const formEdit = ({task, updateTask, errors, inputName}) => {
    return (
        <form onSubmit={updateTask} className='FormEdit' key={task._id}>
            <input placeholder={errors} defaultValue={task.nome} name="name" type="text" ref={inputName} />
            <button type="submit">Alterar</button>
        </form>
    )
}

export default formEdit