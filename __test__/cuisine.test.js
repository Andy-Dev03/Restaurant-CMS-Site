const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { hashPassword } = require("../helpers/bcrypt");
const { convertPayloadToToken } = require("../helpers/jwt");

let accessToken;
beforeAll(async () => {
  //Users
  const users = require("../data/users.json");
  users.forEach((u) => {
    u.password = hashPassword(u.password);
    u.createdAt = u.updatedAt = new Date();
  });

  //Categories
  const categories = require("../data/categories.json");
  categories.forEach((c) => {
    c.createdAt = c.updatedAt = new Date();
  });

  //Cuisines
  const cuisines = require("../data/cuisines.json");
  cuisines.forEach((c) => {
    c.createdAt = c.updatedAt = new Date();
  });

  await sequelize.queryInterface.bulkInsert("Users", users, {});
  await sequelize.queryInterface.bulkInsert("Categories", categories, {});
  await sequelize.queryInterface.bulkInsert("Cuisines", cuisines, {});

  //Acces Token
  const payload = {
    id: 2,
    username: "staff1",
  };

  accessToken = convertPayloadToToken(payload);
});

afterAll(async () => {
  //Users
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });

  //Categories
  await sequelize.queryInterface.bulkDelete("Categories", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });

  //Cuisines
  await sequelize.queryInterface.bulkDelete("Cuisines", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("POST /cuisines", () => {
  describe("POST /cuisines - success", () => {
    test("success create main entity", async () => {
      const cuisine = {
        name: "Nasi Goreng",
        description: "Enak banget",
        price: 25000,
        imgUrl: "https://example.com/image.jpg",
        categoryId: 1,
        authorId: 1,
      };
      const response = await request(app)
        .post("/cuisines")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(cuisine);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "message",
        "Cuisine created successfully"
      );
    });
  });

  describe("POST /cuisines - fail", () => {
    test("must login to use the feature", async () => {
      const cuisine = {
        name: "Nasi Goreng",
        description: "Enak banget",
        price: 25000,
        imgUrl: "https://example.com/image.jpg",
        categoryId: 1,
        authorId: 1,
      };
      const response = await request(app).post("/cuisines").send(cuisine);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Access token is required"
      );
    });

    test("invalid accesToken", async () => {
      const cuisine = {
        name: "Nasi Goreng",
        description: "Enak banget",
        price: 25000,
        imgUrl: "https://example.com/image.jpg",
        categoryId: 1,
        authorId: 1,
      };
      const response = await request(app)
        .post("/cuisines")
        .set("Authorization", `Bearer <invalidToken>`)
        .send(cuisine);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Your token is invalid"
      );
    });

    describe("POST /cuisines - fail - validation required", () => {
      test("required 1 validation", async () => {
        const cuisine = {
          name: "",
          description: "Enak banget",
          price: 25000,
          imgUrl: "https://example.com/image.jpg",
          categoryId: 1,
          authorId: 1,
        };
        const response = await request(app)
          .post("/cuisines")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(cuisine);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty(
          "error.message",
          expect.any(String)
        );
      });

      test("required more than 1 validation", async () => {
        const cuisine = {
          name: "",
          description: "",
          price: 25000,
          imgUrl: "https://example.com/image.jpg",
          categoryId: 1,
          authorId: 1,
        };
        const response = await request(app)
          .post("/cuisines")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(cuisine);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty(
          "error.message",
          expect.any(Array)
        );
      });
    });
  });
});

describe("PUT /cuisines/:id", () => {
  describe("PUT /cuisines/:id - success", () => {
    test("Update successfully with id", async () => {
      const body = { name: "Peyek" };
      const response = await request(app)
        .put("/cuisines/1")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(body);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
    });
  });

  describe("PUT /cuisines/:id - fail", () => {
    test("must login to use the feature", async () => {
      const body = { name: "Peyek" };
      const response = await request(app).put("/cuisines/2").send(body);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Access token is required"
      );
    });

    test("invalid token", async () => {
      const response = await request(app)
        .put("/cuisines/1")
        .set("Authorization", "Bearer InvalidToken");

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Your token is invalid"
      );
    });

    test("identity not found", async () => {
      const response = await request(app)
        .put("/cuisines/9999")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error.message", "Error not found");
    });

    test("not own cuisine", async () => {
      const body = { name: "Peyek" };
      const response = await request(app)
        .put("/cuisines/2")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(body);

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty(
        "error.message",
        "You are not authorized to do this action"
      );
    });

    describe("PUT /cuisines/:id - fail - validation required", () => {
      test("required 1 validation", async () => {
        const body = {
          name: "",
          description: "Sate ayam khas Madura",
          price: 20000,
          imgUrl: "https://img.com/sate.jpg",
          categoryId: 1,
        };
        const response = await request(app)
          .put("/cuisines/1")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(body);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty(
          "error.message",
          expect.any(String)
        );
      });

      test("required more than 1 validation", async () => {
        const body = {
          name: "",
          description: "",
          price: 20000,
          imgUrl: "https://img.com/sate.jpg",
          categoryId: 1,
        };
        const response = await request(app)
          .put("/cuisines/1")
          .set("Authorization", `Bearer ${accessToken}`)
          .send(body);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty(
          "error.message",
          expect.any(Array)
        );
      });
    });
  });
});

describe("DELETE /cuisines/:id", () => {
  describe("DELETE /cuisines/:id - success", () => {
    test("Delete successfully with id", async () => {
      const response = await request(app)
        .delete("/cuisines/1")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data.message");
    });
  });

  describe("DELETE /cuisines/:id - fail", () => {
    test("must login to use the feature", async () => {
      const response = await request(app).delete("/cuisines/2");

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Access token is required"
      );
    });

    test("invalid token", async () => {
      const response = await request(app)
        .delete("/cuisines/1")
        .set("Authorization", "Bearer InvalidToken");

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty(
        "error.message",
        "Your token is invalid"
      );
    });

    test("identity not found", async () => {
      const response = await request(app)
        .delete("/cuisines/9999")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error.message", "Error not found");
    });

    test("not own cuisine", async () => {
      const response = await request(app)
        .delete("/cuisines/2")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(response.status).toBe(403);
      expect(response.body).toHaveProperty(
        "error.message",
        "You are not authorized to do this action"
      );
    });
  });
});

describe("GET /pub/cuisines/", () => {
  describe("GET /pub/cuisines/ - success", () => {
    test("Succesfully get cuisines with out filter", async () => {
      const response = await request(app).get("/pub/cuisines");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
    });

    test("Succesfully get cuisines with filter", async () => {
      const response = await request(app).get("/pub/cuisines?filter=1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
    });

    test("Succesfully get cuisines length with page", async () => {
      const response = await request(app).get("/pub/cuisines?page=1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
      expect(response.body.data.length).toBeLessThanOrEqual(10);
    });
  });
});

describe("GET /pub/cuisines/:id", () => {
  describe("GET /pub/cuisines/:id - success", () => {
    test("Succesfully get cuisines with id params", async () => {
      const response = await request(app).get("/pub/cuisines/2");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data");
    });
  });

  describe("GET /pub/cuisines/:id - fail", () => {
    test("Fail get cuisines with id params", async () => {
      const response = await request(app).get("/pub/cuisines/9999");

      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("error.message", "Error not found");
    });
  });
});
