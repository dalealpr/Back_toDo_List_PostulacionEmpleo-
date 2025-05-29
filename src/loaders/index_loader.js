import taskLoader from "./task_loader.js";

export default function loadModules(sequelize) {
  return [
    taskLoader(sequelize),
  ];
}