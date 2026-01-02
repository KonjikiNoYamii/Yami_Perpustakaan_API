import swaggerJSDoc from "swagger-jsdoc";

const option: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PERPUSTAKAAN API YAMI",
      version: "1.0.0",
      description: "Dokumentasi Lengkap Perpustakaan API",
      contact: {
        name: "Backend Developer",
      },
    },
    servers: [
      {
        url: "/",
        description: "Current Server",
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
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["src/routes/*.ts"],
};

export default swaggerJSDoc(option);
