import { createResponse } from "../utils/response.js";

export default class TaskController {
  constructor(service) {
    this.service = service;
  }
  getAll = async (req, res, next) => {
    try {
      const data = await this.service.getAll();
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const data = await this.service.create(req.body);
      req.io.emit('tasksUpdated');
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.service.update(id, req.body);
      req.io.emit('tasksUpdated');
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  updateStatus = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const data = await this.service.updateStatus(id, status);

      req.io.emit('tasksUpdated');
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.service.delete(id);
      req.io.emit('tasksUpdated');
      createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };
}
