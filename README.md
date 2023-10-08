# Project README

This README provides an overview of the project and describes its main components, routes, and functionality.

## Project Overview

This project is a RESTful API built using Node.js and Express.js, designed to manage user profiles and their associated posts and highlights. It uses the Prisma ORM to interact with a PostgreSQL database for data storage. The API provides endpoints for creating, updating, and deleting profiles, creating and managing posts, and handling user highlights.

## Getting Started

Before running the project, make sure you have Node.js and npm installed. Additionally, you'll need to set up a PostgreSQL database and provide the connection details in the project's configuration.

1. Clone the project repository:

   ```shell
   git clone <repository_url>
   ```

2. Install project dependencies:

   ```shell
   npm install
   ```

3. Configure the database connection in the `.env` file or directly in the codebase.

4. Start the application:

   ```shell
   npm start
   ```

The server will start and listen for incoming requests on the specified port (default is 3000).

## API Routes

### Profile Routes

#### Create a New Profile

- Endpoint: `POST /profiles`
- Request Body:

  ```json
  {
    "username": "john_doe",
    "nickname": "John",
    "email": "john@example.com",
    "bio": "A software developer",
    "photo": "profile.jpg"
  }
  ```

- Response (201 Created):

  ```json
  {
    "id": "1234567890",
    "username": "john_doe",
    "nickname": "John",
    "email": "john@example.com",
    "bio": "A software developer",
    "photo": "profile.jpg"
  }
  ```

#### Update an Existing Profile

- Endpoint: `PUT /profiles/:id`
- Request Body (fields to update):

  ```json
  {
    "username": "new_username",
    "email": "new_email@example.com",
    "bio": "Updated bio",
    "photo": "new_profile.jpg"
  }
  ```

- Response:

  ```json
  {
    "id": "1234567890",
    "username": "new_username",
    "nickname": "John",
    "email": "new_email@example.com",
    "bio": "Updated bio",
    "photo": "new_profile.jpg"
  }
  ```

#### Delete a Profile

- Endpoint: `DELETE /profiles/:id`
- Response (204 No Content)

### Post Routes

#### Create a New Post

- Endpoint: `POST /posts`
- Request Body:

  ```json
  {
    "profileId": "1234567890",
    "title": "New Post",
    "url": "https://example.com/new-post",
    "description": "Description of the new post"
  }
  ```

- Response (201 Created):

  ```json
  {
    "id": "1234567890",
    "profileId": "1234567890",
    "title": "New Post",
    "url": "https://example.com/new-post",
    "description": "Description of the new post"
  }
  ```

#### List Posts of a Specific Profile

- Endpoint: `GET /profiles/:profileId/posts`
- Response:

  ```json
  [
    {
      "id": "1234567890",
      "profileId": "1234567890",
      "title": "Post 1",
      "url": "https://example.com/post-1",
      "description": "Description of post 1"
    },
    {
      "id": "0987654321",
      "profileId": "1234567890",
      "title": "Post 2",
      "url": "https://example.com/post-2",
      "description": "Description of post 2"
    }
  ]
  ```

#### Delete a Specific Post

- Endpoint: `DELETE /posts/:postId`
- Response (204 No Content)

### Highlight Routes

#### List Highlights in a User's Profile

- Endpoint: `GET /profiles/:profileId/highlights`
- Response:

  ```json
  [
    {
      "id": "1234567890",
      "profileId": "1234567890",
      "postId": "0987654321",
      "title": "Highlight 1",
      "description": "Description of highlight 1"
    },
    {
      "id": "0987654321",
      "profileId": "1234567890",
      "postId": "1234567890",
      "title": "Highlight 2",
      "description": "Description of highlight 2"
    }
  ]
  ```

#### Create a New Highlight

- Endpoint: `POST /highlights`
- Request Body:

  ```json
  {
    "postId": "1234567890",
    "title": "New Highlight",
    "description": "Description of the new highlight"
  }
  ```

- Response (201 Created):

  ```json
  {
    "id": "1234567890",
    "profileId": "1234567890",
    "postId": "1234567890",
    "title": "New Highlight",
    "description": "Description of the new highlight"
  }
  ```

## Server Configuration

You can configure the server settings, such as the port it listens on, by modifying the `.env` file or directly in the codebase.

## Dependencies

The project uses several Node.js packages, including:

- `express`: A popular web framework for Node.js.
- `@prisma/client`: The Prisma ORM for database operations.
- `uuid`: A library for generating UUIDs.

You can find more details about these dependencies in the `package.json` file.

## Conclusion

This README provides an overview of the project, its routes, and basic usage instructions. Make sure to configure the project properly before running it and refer to the API routes and request/response examples for interacting with the endpoints.
