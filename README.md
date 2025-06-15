[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19734013&assignment_repo_type=AssignmentRepo)

# P2-Challenge-1 (Server Side)

## LINK DEPLOY

- `https://www.andylie.web.id`

> Tuliskan API Docs kamu di sini

# Restaurant App API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`
- `GET /pub/cuisines`
- `GET /pub/cuisines/:id`
- `GET /pub/categories`
- `POST /add-user`
- `POST /cuisines`
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

Description :

- Login to get access Token and can use the features (Only for admin / staff)

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "error": {
    "message": "Your email or password is empty"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Invalid email or password"
  }
}
```

&nbsp;

## 2. GET /pub/cuisines

Description:

- Get all Restaurant from database for public

Request:

- query (Optional):

```json
{
  "search": "string <name (case-insensitive)>",
  "filter": "number <categoryId>",
  "sort": "string or -string",
  "page": "integer"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "total": "integer",
  "size": "integer",
  "totalPage": "integer",
  "currentPage": "integer",
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
    },
    ...,
  ]
}
```

&nbsp;

## 3. GET /pub/cuisines/:id

Description:

- Get Restaurant from id for public

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## 4. GET /pub/categories

Description:

- Get Categories for public

Request:

- query (Optional):

```json
{
  "filterId": "number <id>",
  "filterName": "string <name (case-insensitive)>"
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
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "integer",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    ...,
  ]
}
```

&nbsp;

## 5. POST /add-user

Description:

- Post to add new User for staff and only admin that can do the post

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "data": {
    "username": "string",
    "email": "string",
    "role": "string"
  }
}
```

_Response (400 - Bad Request)_

```json
{
    "statusCode": 400,
    "error": {
        "message": "Username is required"
    }
}
OR WITH MANY VALIDATION
{
  "statusCode": 400,
  "error": {
    "message": [
      "Username is required",
      "Email is required",
      "Password is required"
    ]
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (403 - Forbidden)

```json
{
  "statusCode": 403,
  "error": {
    "message": "You are not authorized to do this action"
  }
}
```

&nbsp;

## 6. POST /cuisines

Description:

- Post new Restaurant to database

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
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

&nbsp;

## 7. GET /cuisines

Description:

- Get all Restaurant include User from database

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
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

&nbsp;

## 8. GET /cuisines/:id

Description:

- Get Restaurant from id

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## 9. PUT /cuisines/:id

Description:

- Update data Restaurant from id. Just for 'Admin' or 'Staff' but it own

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- params:

```json
{
  "id": "integer (required)"
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

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": "integer",
    "name": "string",
    "description": "string",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
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
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (403 - Forbidden)

```json
{
  "statusCode": 403,
  "error": {
    "message": "You are not authorized to do this action"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## 10. PATCH /cuisines/:id

Description:

- Update ImageUrl Restaurant from id. Just for 'Admin' or 'Staff' but it own

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- body (form-data):

```json
{
  "imgUrl": "file"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "message": "Image <cuisine_name> success to update",
    "imgUrl": "string"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "error": {
    "message": "Image is required"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (403 - Forbidden)

```json
{
  "statusCode": 403,
  "error": {
    "message": "You are not authorized to do this action"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## 11. DELETE /cuisines/:id

Description:

- Delete data Restaurant from id. Just for 'Admin' or 'Staff' but it own

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "cuisine": {
      "id": "integer",
      "name": "string",
      "description": "string",
      "price": "integer",
      "imgUrl": "string",
      "categoryId": "integer",
      "authorId": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    "message": "<name> success to delete"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (403 - Forbidden)

```json
{
  "statusCode": 403,
  "error": {
    "message": "You are not authorized to do this action"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## 12. POST /categories

Description:

- Post new Category to database

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
  "name": "string"
}
```

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Category created successfully",
  "data": {
    "id": "integer",
    "name": "string",
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
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

&nbsp;

## 13. GET /categories

Description:

- Get all Category from database

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
      "createdAt": "date",
      "updatedAt": "date",
    },
    {
     "id": "integer",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date",
    },
    ...,
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

&nbsp;

## 14. PUT /categories/:id

Description:

- Update data Category from id.

Request:

- headers :

```json
{
  "Authorization": "Bearer <your acces token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- body :

```json
{
  "name": "string"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": "integer",
    "name": "string",
    "createdAt": "date",
    "updatedAt": "date"
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
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is invalid"
  }
}
```

Response (404 - Not Found)

```json
{
  "statusCode": 404,
  "error": {
    "message": "Error not found"
  }
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "error": {
    "message": "Access token is required"
  }
}
```

_Response (500 - Internal Server Error)_

```json
{
  "statusCode": 500,
  "error": {
    "message": "Internal server error"
  }
}
```
