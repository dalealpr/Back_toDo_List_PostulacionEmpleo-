export default class BaseDao {
    constructor(model) {
        this.model = model;
    }

    create = async (body) => {
        try {
            return await this.model.create(body);
        } catch (error) {
            throw new Error(error);
        }
    };

    getAll = async () => {
        try {
            return await this.model.findAll(
                {
                    order: [['id', 'ASC']] // Ordenar por ID ascendente
                }
            );
        } catch (error) {
            throw new Error(error);
        }
    };

    getById = async (id) => {
        try {
            return await this.model.findByPk(id);
        } catch (error) {
            throw new Error(error);
        }
    };

    update = async (id, data) => {
        try {
            const task = await this.model.findByPk(id);
            if (!task) throw new Error('No se encontró el registro');
            await task.update(data);
            return task;
        } catch (error) {
            throw new Error(error);
        }
    };

    delete = async (id) => {
        try {
            const task = await this.model.findByPk(id);
            if (!task) throw new Error('No se encontró el registro');
            await task.destroy();
            return task;
        } catch (error) {
            throw new Error(error);
        }
    };
}