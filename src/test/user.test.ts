// src/test/user.test.ts
import request from "supertest";
import app from "../app";
import jwt from "jsonwebtoken";
import config from "../utils/env";

// Token admin
const AdminToken = jwt.sign(
  { id: "89aa195b-4c85-47b5-bba3-070ee0764ff3", role: "ADMIN" }, // pastikan ini ada di DB test
  config.JWT_SECRET
);

// Token user biasa
const UserToken = jwt.sign(
  { id: "44c64c1a-246d-45e5-a342-77c07e73352b", role: "MEMBER" }, 
  config.JWT_SECRET
);

describe("GET /api/users/me", () => {
  it("should return 200 and user data", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", `Bearer ${AdminToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });

  it("should return 401 if no token provided", async () => {
    const res = await request(app).get("/api/users/me");

    expect(res.statusCode).toEqual(401);
    expect(res.body.success).toBe(false);
  });
});

describe("GET /api/users", () => {
  it("should return 200 and list of users (admin only)", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${AdminToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data.users)).toBe(true); // pastikan response key 'users'
  });

  it("should return 403 if non-admin tries to access", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${UserToken}`);

    expect(res.statusCode).toEqual(403);
    expect(res.body.success).toBe(false);
  });
});

// describe("DELETE /api/users/:id", () => {
//   it("should return 200 and delete user", async () => {
//     const idToDelete = "00dd4e09-eca9-42c1-b9c5-41653f032766"
//     const res = await request(app)
//       .delete(`/api/users/${idToDelete}`)
//       .set("Authorization", `Bearer ${AdminToken}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id", idToDelete);
//   });

//   it("should return 400 if user not found", async () => {
//     const idToDelete = "00000000-0000-0000-0000-000000000000";
//     const res = await request(app)
//       .delete(`/api/users/${idToDelete}`)
//       .set("Authorization", `Bearer ${AdminToken}`);

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });
// });
