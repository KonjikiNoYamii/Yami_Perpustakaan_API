import request from "supertest";
import app from "../app";
// import config from "../utils/env";
// import jwt from "jsonwebtoken"

//     const userToken = jwt.sign(
//     { id: 1, role: "ADMIN" },
//     config.JWT_SECRET
//   );

describe("GET /api/category", () => {
  it("should return 200 and list of categories", async () => {
    const res = await request(app).get("/api/category");

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe("GET /api/category/:id", () => {
  it("should return 404 if category not found", async () => {
    const id = 1; // UUID acak yang tidak ada
    const res = await request(app).get(`/api/category/${id}`);

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });

  it("should return 200 and category detail", async () => {
    const id = "adf8d28f-d60a-4240-8f3f-a4edd66043b4" // pastikan UUID ini ada di DB test
    const res = await request(app).get(`/api/category/${id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");
  });
});

// describe("POST /api/category", () => {
//   it("should return 400 if payload invalid", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .send({});

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and create category", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .send({ nama: "Politik" });

//     expect(res.statusCode).toEqual(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id"); // UUID baru akan di-generate
//   });
// });

// describe("PUT /api/category/:id", () => {
//   it("should return 400 if category not found", async () => {
//     const id = 1; // UUID acak yang tidak ada
//     const res = await request(app)
//       .put(`/api/category/${id}`)
//       .send({ nama: "Majalah Baru" });

//     expect(res.statusCode).toEqual(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and update category", async () => {
//     const id = "41761de9-17fa-464f-91a9-78da6e5ea008"
//     const res = await request(app)
//       .put(`/api/category/${id}`)
//       .send({nama:"KOMIKKKKl"});

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });


// describe("DELETE /api/category/:id", () => {
//   it("should return 401 if category not found", async () => {
//     const id = 1; // UUID acak yang tidak ada
//     const res = await request(app)
//       .delete(`/api/category/${id}`);

//     expect(res.statusCode).toEqual(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and delete category", async () => {
//     const id ="0193d50c-15e1-418f-b353-2c588bb68d41"
//     const res = await request(app)
//     .delete(`/api/category/${id}`)
//     .set("Authorization", `Bearer ${userToken}`)

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });
