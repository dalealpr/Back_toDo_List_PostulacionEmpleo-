import { Router } from "express";

export default function taskRoutes(taskController) {
  const router = Router();

  router
    .route("/")
    .get(taskController.getAll)
    .post(taskController.create);

  router
    .route("/:id")
    .get(taskController.getById)
    .put(taskController.update)
    .delete(taskController.delete);

  router.patch('/:id/status', taskController.updateStatus);

  return router;
}