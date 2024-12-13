const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
}
);

const Tasks = mongoose.model("Task", TaskSchema);

module.exports = Tasks;
