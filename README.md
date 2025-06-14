[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19734013&assignment_repo_type=AssignmentRepo)

# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini

# Restaurant App API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`
- `GET /pub/cuisines`
- `GET /pub/cuisines/:id`
- `POST /add-user
- `POST /cuisines` v
- `GET /cuisines`
- `GET /cuisines/:id`
- `PUT /cuisines/:id`
- `PATCH /cuisines/:id`
- `DELETE /cuisines/:id`
- `POST /categories`
- `GET /categories`
- `PUT /categories/:id`

&nbsp;

## 1. POST /login

## 5. POST /cuisines

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- body :

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "imgUrl": "string",
  "categoryId": "integer",
  "authorId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Cuisine created successfully",
  "data": {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer",
    "updatedAt": "date",
    "createdAt": "date"
  }
}
```

_Response (400 - Bad Request)_

```json
{
    "statusCode": 400,
    "error": {
        "message": "Name is required"
    }
}
OR WITH MANY VALIDATION
{
  "statusCode": 400,
  "error": {
    "message": [
      "Name is required",
      "Description is required",
      "Price min must be 1"
    ]
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Access token is invalid"
}
```

&nbsp;

## 6. GET /cuisines

Description:

- Get all Restaurant from database

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "integer",
      "name": "string",
      "description": "string",
      "price": "integer",
      "imgUrl": "string",
      "categoryId": "integer",
      "authorId": "integer",
      "createdAt": "date",
      "updatedAt": "date",
      "User": {
        "id": 2,
        "username": "string",
        "email": "string",
        "role": "string",
        "phoneNumber": "string",
        "address": "string",
        "createdAt": "date",
        "updatedAt": "date"
      }
    },
    {
     "id": "integer",
      "name": "string",
      "description": "string",
      "price": "integer",
      "imgUrl": "string",
      "categoryId": "integer",
      "authorId": "integer",
      "createdAt": "date",
      "updatedAt": "date",
      "User": {
        "id": 2,
        "username": "string",
        "email": "string",
        "role": "string",
        "phoneNumber": "string",
        "address": "string",
        "createdAt": "date",
        "updatedAt": "date"
      }
    },
    ...,
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Access token is invalid"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Access token is required"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
