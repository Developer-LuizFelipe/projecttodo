const Task = require('../models/taskModel.js');


const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const putTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndUpdate(id, req.body.nome);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const updateTask = await Task.findById(id);
        res.status(200).json(updateTask);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted Successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postTash = async (req, res) => {

    try {
        const task = new Task({
            nome: req.body.nome
        }) 
        await task.save();
        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTask,
    getTasks,
    postTash,
    putTask,
    deleteTask
}