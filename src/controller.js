var { Tasks } = require("./models");


const create = async (request, response) => {
    var task = request.body;
    await Tasks.create(task);
    response.json({ status: "Task created" });
}

const read = async (request, response) => {
    var tasks = await Tasks.find();
    response.json({ data: tasks });
}

const update = async (request, response) => {
    var _id = request.query.id;
    var task = request.body;
    await Tasks.findByIdAndUpdate(_id, task);
    response.json({ status: "Task updated" });
}

const _delete = async (request, response) => {
    var _id = request.query.id;
    var task = request.body;
    await Tasks.findByIdAndDelete(_id, task);
    response.json({ status: "Task deleted" });
}

module.exports = { create, read, update, _delete };