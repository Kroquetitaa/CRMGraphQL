const cursos = [
  {
    titulo: "JavaScript moderno guia definitiva construye +10 proyectos",
    tecnologia: "JavaScript ES6",
  },
  {
    titulo: "React - La guía completa: Hooks, Redux, Context +15 proyectos",
    tecnologia: "React",
  },
];

export const resolvers = {
  Query: {
    obtenerCursos: () => cursos,
    obtenerTecnologia: () => cursos,
  },
};
