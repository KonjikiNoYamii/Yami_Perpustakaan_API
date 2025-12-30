import request from "supertest";
import app from "../app";
// import path from "node:path";
import jwt from "jsonwebtoken";
import config from "../utils/env";

// UUID contoh
const testBookUUID = "27a2bcb5-68a1-4e63-9b73-0a3f7c4bf6d0"
const invalidUUID = "00000000-0000-0000-0000-000000000000";

const AdminToken = jwt.sign(
  { id: "89aa195b-4c85-47b5-bba3-070ee0764ff3", role: "ADMIN" },
  config.JWT_SECRET
);

// Token member/user
const MemberToken = jwt.sign(
  { id: "44c64c1a-246d-45e5-a342-77c07e73352b", role: "USER" },
  config.JWT_SECRET
);


// =======================
// GET /api/book
// =======================
describe("GET /api/book", () => {
  it("should return 200 and list of books", async () => {
    const res = await request(app).get("/api/book");

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    // Sesuaikan dengan struktur data.books
    expect(Array.isArray(res.body.data.books)).toBe(true);
    // Bisa cek properti buku pertama
    if (res.body.data.books.length > 0) {
      expect(res.body.data.books[0]).toHaveProperty("id");
      expect(res.body.data.books[0]).toHaveProperty("nama");
      expect(res.body.data.books[0]).toHaveProperty("category");
    }
  });
});


describe("GET /api/book/:id", () => {
  it("should return 200 for valid UUID", async () => {
    const res = await request(app).get(`/api/book/${testBookUUID}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id", testBookUUID);
  });

  it("should return 400 for invalid UUID", async () => {
    const res = await request(app).get(`/api/book/${invalidUUID}`);

    expect(res.statusCode).toEqual(404);
    expect(res.body.success).toBe(false);
  });
});

describe("GET /api/book/admin/stats", () => {
  it("should return 200 and stats object for admin", async () => {
    const res = await request(app)
      .get("/api/book/admin/stats")
      .set("Authorization", `Bearer ${AdminToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(typeof res.body.data).toBe("object");
  });

  it("should return 403 for non-admin", async () => {
    const res = await request(app)
      .get("/api/book/admin/stats")
      .set("Authorization", `Bearer ${MemberToken}`);

    expect(res.statusCode).toEqual(403);
    expect(res.body.success).toBe(false);
  });
});

// describe("POST /api/book", () => {
//   it("should return 201 and create book for admin", async () => {
//     const validCategoryId = "0193d50c-15e1-418f-b353-2c588bb68d41"

//     const res = await request(app)
//       .post("/api/book")
//       .field("nama", "New Book")
//       .field("deskripsi", "Deskripsi buku baru")
//       .field("harga", 50000)
//       .field("stok", 10)
//       .field("categoryId", validCategoryId)
//       .field("tahunTerbit", 2025)
//       .field("penulis", "Silica")
//       .field("penerbit", "Silica Press")
// .field("isbn", `978-3-16-148410-${Date.now()}`)
// .attach("coverUrl", path.resolve(__dirname, "fixtures/sora.jpg"))
//       .set("Authorization", `Bearer ${AdminToken}`)
    
// console.log(res.statusCode);
// console.log(res.body);

//     // Assertions
// expect(res.body.success).toBe(true);
// expect(res.body.data).toHaveProperty("id");
// expect(res.body.data).toHaveProperty("category");
// expect(res.body.data.category).toHaveProperty("id");


//   });

//   it("should return 400 if file is missing", async () => {
//     const validCategoryId = "0193d50c-15e1-418f-b353-2c588bb68d41";

//     const res = await request(app)
//       .post("/api/book")
//       .set("Authorization", `Bearer ${AdminToken}`)
//       .field("nama", "No Image Book")
//       .field("deskripsi", "Deskripsi buku tanpa file")
//       .field("harga", 50000)
//       .field("stok", 10)
//       .field("categoryId", validCategoryId)
//       .field("tahunTerbit", 2025)
//       .field("penulis", "Silica")
//       .field("penerbit", "Silica Press")
//       .field("isbn", "978-3-16-148410-1");

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });
// });

// describe("PUT /api/book/:id", () => {
//   it("should return 200 and update book for admin", async () => {
//     const res = await request(app)
//       .put(`/api/book/${testBookUUID}`)
//       .set("Authorization", `Bearer ${AdminToken}`)
//       .field("nama", "No Image Book")
//       .field("deskripsi", "Deskripsi buku tanpa file")
//       .field("harga", 50000)
//       .field("stok", 10)
//       .field("categoryId", "0193d50c-15e1-418f-b353-2c588bb68d41")
//       .field("tahunTerbit", 2025)
//       .field("penulis", "Silica")
//       .field("penerbit", "Silica Press")
//       .field("isbn", "978-3-16-148410-1");

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("stok");
//   });

//   it("should return 403 if non-admin tries to update", async () => {
//     const res = await request(app)
//       .put(`/api/book/${testBookUUID}`)
//       .set("Authorization", `Bearer ${MemberToken}`)
//       .field("nama", "Fail Update");

//     expect(res.statusCode).toEqual(403);
//     expect(res.body.success).toBe(false);
//   });
// });

// describe("DELETE /api/book/:id", () => {
//   it("should return 200 and delete book for admin", async () => {
//     const res = await request(app)
//       .delete(`/api/book/${testBookUUID}`)
//       .set("Authorization", `Bearer ${AdminToken}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id", testBookUUID);
//   });

//   it("should return 403 if non-admin tries to delete", async () => {
//     const res = await request(app)
//       .delete(`/api/book/${testBookUUID}`)
//       .set("Authorization", `Bearer ${MemberToken}`);

//     expect(res.statusCode).toEqual(403);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 400 if book not found", async () => {
//     const res = await request(app)
//       .delete(`/api/book/${invalidUUID}`)
//       .set("Authorization", `Bearer ${AdminToken}`);

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });
// });
