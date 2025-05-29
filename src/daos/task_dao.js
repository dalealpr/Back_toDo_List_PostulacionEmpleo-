import BaseDao from "./base_dao.js";

export default class TaskDao extends BaseDao {
  constructor(model) {
    super(model);
  }

updateStatus = async (id, status) => {
  try {
    const task = await this.model.findByPk(id);
    if (!task) {
      throw new Error('No se encontró la tarea con el ID proporcionado');
    }

    await task.update({ status }); // actualiza solo el campo status
    return task; // devuelve la tarea actualizada
  } catch (error) {
    throw new Error(error.message || error);
  }
};
}