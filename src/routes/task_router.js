import { Router } from "express";
import { validate } from '../middlewares/validate.js';
import { createTaskSchema, updateStatusSchema, updateTaskSchema } from "../validatos/task_validator.js";


export default function taskRoutes(taskController) {
  const router = Router();

  router
    .route("/")
    .get(taskController.getAll)
    .post(validate(createTaskSchema),taskController.create);

  router
    .route("/:id")
    .get(taskController.getById)
    .put(validate(updateTaskSchema),taskController.update)
    .delete(taskController.delete);

  router.patch('/:id/status',validate(updateStatusSchema), taskController.updateStatus);

  return router;
}