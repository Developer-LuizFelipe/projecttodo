import { useEffect, useState, useRef } from "react";
import "./style.css";
import api from '../../services/api'
import Card from "../../components/card";
import FormTask from "../../components/form";
import FormEdit from "../../components/formEdit";
import Toast from "../../components/toast";

function Home() {

  const [editTask, setEditTask] = useState("");
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const inputNameEdit = useRef();
  const inputName = useRef();
  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: ""
  });

  const handleToastMessage = (message) => {
    setShowToastMsg({
      isShown: true,
      message,
    })
  }

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    })
  }

  function handleShowEdit(id) {
    setEditTask(id);
    getTasks();
  }



  async function getTasks() {
    const tasksApi = await api.get('/task');
    setTasks(tasksApi.data);
    }

  const handlePostTask = async (e) => {
    e.preventDefault();
    if (inputName.current.value == "") {
      setError("O campo nome esta vazio!");
    }
    else {
      await api.post('/task', {
        nome: inputName.current.value
      });
      setError("");
      inputName.current.value = null;
      handleToastMessage("Tarefa Adicionada!");
      getTasks();
    }
  }

  const handleUpdateTask = async (e,id) => {
     e.preventDefault();
    if (inputNameEdit.current.value == "") {
      setError("O campo esta vazio!");
    }
    else {
      await api.put(`/task/${id}`, {
        nome: inputNameEdit.current.value
      });
      setError("");
      setEditTask("");
      handleToastMessage("Tarefa Alterada!");
      getTasks();
    }
  }

  async function deleteTask(id) {
    await api.delete(`/task/${id}`);
    handleToastMessage("Tarefa Concluida!");
    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, [])


  return (
    <div className="container">
      <FormTask onPostTask={handlePostTask} inputNames={inputName} errors={error} />
      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        onClose={handleCloseToast}
      />

      {tasks.map((task) => (
        task._id === editTask ? (

          <FormEdit
            task={task}
            updateTask={(e) => handleUpdateTask(e,task._id)}
            inputName={inputNameEdit}
            errors={error}
          />

        )
          : (
            <Card
              task={task}
              onDeleteTask={() => deleteTask(task._id)}
              onEditTask={() => handleShowEdit(task._id)}
            />
          )
      ))}
    </div>
  );
}

export default Home;
