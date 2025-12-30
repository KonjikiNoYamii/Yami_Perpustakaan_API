import request from "supertest";
// import jwt from "jsonwebtoken";
import app from "../app";
// import config from "../utils/env";
describe("GET /api/loan", () => {
    // const token = jwt.sign({ id: 1, role: 'ADMIN' }, config.JWT_SECRET)
    it('should return 401 if no token provided', async () => {
        const res = await request(app).get('/api/loans');
        expect(res.statusCode).toEqual(400);
        expect(res.body.success).toBe(false);
    });
    it('should return 200 and list of loans', async () => {
        const res = await request(app).get('/api/loan');
        // .set('Authorization', `Bearer ${token}`)
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
    });
    it("should return 200 and list of loans", async () => {
        const res = await request(app).get("/api/loan");
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
    });
});
// describe("POST /api/loan/checkout", () => {
// it("should return 400 and success false if no token", async () => {
//   const res = await request(app)
//     .post("/api/loans/checkout")
//     .send({
//       items: [
//         { bookId: "33c64c1a-246d-45e5-a342-77c07e73352b", qty: 1 }
//       ]
//     });
//   expect(res.statusCode).toBe(400);
//   expect(res.body.success).toBe(false);
// });
// it("should return 400 and success false if payload invalid", async () => {
//   // const token = jwt.sign(
//   //   { id: "ff4eeb0c-4a51-48bf-abec-37f673225eef", role: "USER" },
//   //   config.JWT_SECRET
//   // );
//   const res = await request(app)
//     .post("/api/loan/checkout")
//     // .set("Authorization", `Bearer ${token}`)
//     .send({
//       items: [
//         { bookId: "33c64c1a-246d-45e5-a342-77c07e73352b" } // qty hilang
//       ]
//     });
//   expect(res.statusCode).toBe(400);
//   expect(res.body.success).toBe(false);
// });
// it("should return 201 and success true when checkout success", async () => {
//   // const token = jwt.sign(
//   //   { id: "ff4eeb0c-4a51-48bf-abec-37f673225eef", role: "USER" },
//   //   config.JWT_SECRET
//   // );
//   const res = await request(app)
//     .post("/api/loan/checkout")
//     // .set("Authorization", `Bearer ${token}`)
//     .send({
//       items: [
//         {
//           bookId: "33c64c1a-246d-45e5-a342-77c07e73352b",
//           qty: 1
//         }
//       ]
//     });
//   expect(res.statusCode).toBe(201);
//   expect(res.body.success).toBe(true);
//   expect(res.body.data).toHaveProperty("id");
// });
// });
//# sourceMappingURL=loan.test.js.map