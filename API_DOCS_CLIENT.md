# Restaurant Web App - API Documentation (Frontend)

This app is a restaurant website system with two separate frontend projects:

- Client Public  
  https://client-public-site-gc02.vercel.app  
  For visitors to view cuisine lists and details.

- Client CMS Admin  
  https://client-cms-site-gc02.vercel.app  
  For admins to manage cuisines, categories, and users.

- Domain Public:
  https://public.andylie.web.id

- Domain CMS Admin:
  https://cms.andylie.web.id

---

## API Base URL

All data is fetched from the backend at:

https://www.andylie.web.id

---

## Libraries & Frameworks

| Name         | Usage                       |
| ------------ | --------------------------- |
| React (Vite) | Frontend framework          |
| React Router | Page navigation             |
| Axios        | HTTP requests               |
| Tailwind CSS | Styling and layout          |
| Toastify     | Success/error notifications |
| Font Awesome | UI icons                    |

---

## Routing Structure

### Public Client (client-public)

- / => Home (list of cuisines)
- /:id => Detail page (cuisine by ID)

### CMS Admin Client (client-cms)

- /login => Admin login page
- / => Admin dashboard (cuisines or categories) || action => (edit, delete, upload)
- /add => Add new user
- /create => Add new cuisine
- /upload/:id => Upload/change cuisine image
- /:id => Edit cuisine by ID

---

## API Endpoint Overview

### Public Client

All GET endpoints use the domain https://www.andylie.web.id

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | /pub/cuisines     | Get all cuisines         |
| GET    | /pub/cuisines/:id | Get cuisine detail by ID |
| GET    | /pub/categories   | Get all categories       |

---

### CMS Admin Client

All endpoints require accessToken from login stored in localStorage.

#### Auth

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | /login   | Admin login |

#### User Management

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | /add-user | Add new staff/admin |

#### Cuisine Management

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| POST   | /cuisines     | Create a new cuisine        |
| GET    | /cuisines     | Get all cuisines            |
| GET    | /cuisines/:id | Get a cuisine by ID         |
| PUT    | /cuisines/:id | Update cuisine              |
| PATCH  | /cuisines/:id | Upload/change cuisine image |
| DELETE | /cuisines/:id | Delete a cuisine            |

#### Category Management

| Method | Endpoint    | Description        |
| ------ | ----------- | ------------------ |
| GET    | /categories | Get all categories |

---

## Authentication (Admin)

- Admins must log in using:
  POST /login
- After logging in, the token is saved to localStorage and included in all admin requests.
- If the token is missing, the user will be redirected to /login.

---

## Notifications

Toastify is used to display:

- Success messages when data is submitted
- Error messages if the request fails
- Validation feedback for invalid input

---

## Upload Image

- Endpoint:
  PATCH /cuisines/:id
- Used to upload or update cuisine images
- Data is sent as multipart/form-data

---

## Endpoint Summary

| Endpoint              | Used By | Description          |
| --------------------- | ------- | -------------------- |
| GET /pub/cuisines     | Public  | Get all cuisines     |
| GET /pub/cuisines/:id | Public  | Get cuisine detail   |
| GET /pub/categories   | Public  | Get all categories   |
| POST /login           | Admin   | Login admin          |
| POST /add-user        | Admin   | Add new user         |
| POST /cuisines        | Admin   | Create new cuisine   |
| GET /cuisines         | Admin   | Get all cuisines     |
| GET /cuisines/:id     | Admin   | Get cuisine detail   |
| PUT /cuisines/:id     | Admin   | Update cuisine       |
| PATCH /cuisines/:id   | Admin   | Upload cuisine image |
| DELETE /cuisines/:id  | Admin   | Delete cuisine       |
| GET /categories       | Admin   | Get all categories   |
