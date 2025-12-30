// src/test/loanItem.test.ts
import request from "supertest";
import app from "../app";
import jwt from "jsonwebtoken";
import config from "../utils/env";

// Contoh UUID
const loanItemUUID = "4637e7e0-9f66-4504-aca1-7d36ebf8951a";
const loanUUID = "44c64c1a-246d-45e5-a342-77c07e73352b";
const invalidUUID = 0

// Token admin
const AdminToken = jwt.sign(
  { id: "33c64c1a-246d-45e5-a342-77c07e73352b", role: "ADMIN" },
  config.JWT_SECRET
);

// Token member/user
const MemberToken = jwt.sign(
  { id: "44c64c1a-246d-45e5-a342-77c07e73352b", role: "USER" },
  config.JWT_SECRET
);

describe("GET /api/loan-items/loan/:loanId", () => {
  it("should return 200 and list of loan items for member", async () => {
    const res = await request(app)
      .get(`/api/loan-items/loan/${loanUUID}`)
      .set("Authorization", `Bearer ${MemberToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it("should return 400 if loanId invalid", async () => {
    const res = await request(app)
      .get(`/api/loan-items/loansss/${invalidUUID}`)
      .set("Authorization", `Bearer ${MemberToken}`);

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });
});

describe("GET /api/loan-items/:id", () => {
  it("should return 200 and loan item detail for admin", async () => {
    const res = await request(app)
      .get(`/api/loan-items/${loanItemUUID}`)
      .set("Authorization", `Bearer ${AdminToken}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id", loanItemUUID);
  });

  it("should return 400 if loan item not found", async () => {
    const res = await request(app)
      .get(`/api/loan-items/${invalidUUID}`)
      .set("Authorization", `Bearer ${AdminToken}`);

    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });

  it("should return 403 if member tries to access admin route", async () => {
    const res = await request(app)
      .get(`/api/loan-items/${loanItemUUID}`)
      .set("Authorization", `Bearer ${MemberToken}`);

    expect(res.statusCode).toEqual(403);
    expect(res.body.success).toBe(false);
  });
});
