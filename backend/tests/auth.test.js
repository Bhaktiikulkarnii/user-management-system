const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

let token;
let adminToken;
let userId;

const testUser = {
  fullName: "Test User",
  email: "testuser123@example.com",
  password: "Password123",
};

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Authentication & User Management Tests", () => {
  // 1️⃣ Signup Test
  it("should signup a new user", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
    userId = res.body.user.id;
  });

  // 2️⃣ Login Test
  it("should login user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: testUser.password,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  // 3️⃣ Protected Route Test
  it("should access protected route", async () => {
    const res = await request(app)
      .get("/api/protected")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Protected route accessed");
  });

  // 4️⃣ Non-admin blocked from admin route
  it("should block non-admin from admin route", async () => {
    const res = await request(app)
      .get("/api/users?page=1")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(403);
  });
});
