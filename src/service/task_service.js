import CustomError from "../utils/custom_error.js";

export default class TaskService {
    constructor(dao) {
        this.dao = dao
    }

    getAll = async () => {
        try {
            return await this.dao.getAll();
        } catch (error) {
            throw new Error(error);
        }
    };

    getById = async (id) => {
        try {
            const response = await this.dao.getById(id);
            if (!response) throw new CustomError("Tarea no encontrada", 404);
            return response;
        } catch (error) {
            throw error;
        }
    };

    create = async (body) => {
        try {
            const response = await this.dao.create(body);
            if (!response) throw new CustomError("Error al crear una Tarea", 404);
            return response;
        } catch (error) {
            throw error;
        }
    };

    update = async (id, body) => {
        try {
            const response = await this.dao.update(id, body);
            if (!response) throw new CustomError("Tarea no encontrada", 404);
            return response;
        } catch (error) {
            throw error;
        }
    };

    updateStatus = async (id, status) => {
        try {
            const response = await this.dao.updateStatus(id, status);
            if (!response) throw new CustomError("No se pudo actualizar el estado de la tarea", 404);
            return response;
        } catch (error) {
            throw error;
        }
    };

    delete = async (id) => {
        try {
            const response = await this.dao.delete(id);
            if (!response) throw new CustomError("Tarea no encontrada", 404);
            return response;
        } catch (error) {
            throw error;
        }
    };
}

