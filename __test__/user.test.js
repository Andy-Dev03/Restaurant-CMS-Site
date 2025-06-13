const request = require("supertest");
const app = require("../app");

const { sequelize } = require("../models");

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("POST /login", () => {
  describe("POST /login (Admin) - success", () => {
    test("success login and get token", async () => {
      const body = { email: "admin1@mail.com", password: "12345" };
      const response = await request(app).post("/login").send(body);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("accessToken");
    });
  });

  describe("POST /login (Admin) - fail", () => {
    test("when no email", async () => {
      const body = { email: "", password: "12345" };
      const response = await request(app).post("/login").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "error.message",
        "Your email or password is empty"
      );
    });

    test("when no password", async () => {
      const body = { email: "admin1@mail.com", password: "" };
      const response = await request(app).post("/login").send(body);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "error.message",
        "Your email or password is empty"
      );
    });

    test("when invalid email", async () => {
      const body = { email: "invalid@mail.com", password: "12345" };
      const response = await request(app).post("/login").send(body);
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Invalid email or password"
      );
    });

    test("when wrong password", async () => {
      const body = { email: "admin1@mail.com", password: "wrong" };
      const response = await request(app).post("/login").send(body);
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Invalid email or password"
      );
    });
  });
});
