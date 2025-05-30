import Joi from 'joi'

export const createTaskSchema = Joi.object({
  titulo: Joi.string().max(100).required(),
  descripcion: Joi.string().max(500).optional().allow('', null)
});


export const updateTaskSchema = Joi.object({
  titulo: Joi.string().max(100).required(),
  descripcion: Joi.string().max(500).optional().allow('', null),
  status: Joi.string().valid('pendiente', 'en progreso', 'completada').required()
});


export const updateStatusSchema = Joi.object({
  status: Joi.string().valid('pendiente', 'en progreso', 'completada').required()
});