import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo App API",
      version: "1.0.0",
      description: "API documentation for Users, Auth, and Todos",
    },
    servers: [
      {
        url: "https://todo-app-api-production-4045.up.railway.app",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    "src/routes/auth.route.js",
    "src/routes/todo.route.js",
    "src/routes/user.route.js"
  ],
};

const swaggerSpec = swaggerJsDoc(options);

export const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};
