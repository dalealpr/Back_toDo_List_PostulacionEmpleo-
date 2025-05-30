# Todo List Backend

Backend para una aplicación de lista de tareas (todo list) construido con Node.js, Express, Socket.IO y Sequelize.  
Soporta conexión dinámica a dos tipos de bases de datos: **PostgreSQL** y **SQLite** mediante configuración por scripts.

---
## Comandos para arrancar Backend
DB [SQLite] 
```bash
npm run dev:sqlite
```

DB [PostgresSQL] 
```bash
npm run dev:postgres
```

## Características principales

- API REST con Express para gestionar tareas.
- Soporte para WebSockets usando Socket.IO para comunicación en tiempo real.
- ORM Sequelize para manejo y sincronización de modelos con la base de datos.
- Conexión a base de datos configurable entre PostgreSQL y SQLite.
- Sincronización automática de modelos con la base de datos usando Sequelize.
- Joi Validaciones.
- Carga dinámica de módulos/rutas.
- CORS configurado para permitir peticiones desde frontend en `http://localhost:4200`.

---

## Tecnologías usadas

- Node.js
- Express 5
- Sequelize ORM
- PostgreSQL (pg)
- SQLite3
- Socket.IO
- Joi
- cross-env para manejar variables de entorno en scripts npm
- dotenv para configuración de variables de entorno

---

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd todo_list_backend