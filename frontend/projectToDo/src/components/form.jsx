import React, {useState} from 'react'

const form = ({onPostTask, inputNames, errors}) => {
    const [error, setError] = useState(null);
  return (
    <form onSubmit={onPostTask}>
    <h1>Cadatro de Tarefas</h1>
    <input placeholder="Nome da Tarrefa" name="name" type="text" ref={inputNames} />
    <p>{errors}</p>
    <button type="submit">Salvar</button>
  </form>
  )
}

export default form