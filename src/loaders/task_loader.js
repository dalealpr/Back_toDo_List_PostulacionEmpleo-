import TaskDao  from "../daos/task_dao.js";
import TaskService from "../service/task_service.js";
import TaskController from "../controllers/task_controller.js";
import taskRoutes from "../routes/task_router.js";
import TaskModel from "../models/task_model.js";

export default function taskLoader(sequelize) {
  const taskModel = TaskModel(sequelize)
  const taskDao = new TaskDao(taskModel);
  const taskService = new TaskService(taskDao);
  const taskController = new TaskController(taskService);
  const taskRouter = taskRoutes(taskController);

  return { path: "/tasks", router: taskRouter };
}