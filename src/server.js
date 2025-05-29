import express from "express"
import cors from "cors"
import http from "http";
import { Server as SocketIOServer } from "socket.io";
// Config DB
import connectDB from "./config/db/db_config.js"
// loaders
import loadModules from "./loaders/index_loader.js";
// Utils
import { getDbDisplayName } from "./utils/dbDisplayName.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(
    cors({
        origin: "http://localhost:4200", // Cambia esto al origen correcto de tu frontend
        credentials: true, // Permitir el envío de cookies y credenciales
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Métodos permitidos
        allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
    })
);

const server = http.createServer(app);

const io = new SocketIOServer(server, {
    cors: {
        origin: "http://localhost:4200", // Tu frontend
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    },
})


app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello to do list App")
})


const startServer = async () => {
    try {
        const sequelize = await connectDB();
        await sequelize.authenticate();

        const { name, emoji } = getDbDisplayName(process.env.DB_TYPE);
        console.log(`\nConectado a ${name} ${emoji}`);

        // Carga dinámica de rutas desde loaders
        const modules = loadModules(sequelize);
        await sequelize.sync({ alter: true });
        app.use((req, res, next) => {
            req.io = io;
            next();
        });

        // Luego monta las rutas normalmente
        modules.forEach(({ path, router }) => {
            app.use(`/api/v1${path}`, router);
        });

        const PORT = process.env.PORT || 8080;
        server.listen(PORT, () =>
            console.log(`Servidor corriendo en puerto ${PORT} 🌎\n`)
        )

        io.on("connection", (socket) => {
            console.log("🟢 Cliente conectado vía WebSocket");

            // Emitir evento test después de 3 segundos
            // setTimeout(() => {
            //     socket.emit("taskUpdated", {
            //         id: 123,
            //         title: "Tarea de prueba actualizada desde backend"
            //     });
            // }, 3000);

            socket.on("disconnect", () => {
                console.log("🔴 Cliente desconectado");
            });
        });
    } catch (err) {
        console.error("❌ Error al conectar a la base de datos:", err.message);
        process.exit(1);
    }
};

startServer();