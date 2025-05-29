export const getDbDisplayName = (dbType) => {
  const type = dbType?.toLowerCase();

  switch (type) {
    case "postgres":
      return { name: "PostgreSQL", emoji: "🐘" };
    case "sqlite":
    default:
      return { name: "SQLite", emoji: "🐿️" };
  }
};