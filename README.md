# Simple Blog Application Project

This repository contains a simple blog application built with Node.js, Express.js, and EJS templating. It consists of two main components: a RESTful API for managing blog posts and a frontend for displaying and interacting with the posts.

## Features

-   **RESTful API:**
  
    -   Retrieves all posts (`GET /posts`).
    -   Retrieves a specific post by ID (`GET /posts/:postId`).
    -   Creates a new post (`POST /posts`).
    -   Updates an existing post (`PATCH /posts/:postId`).
    -   Deletes a post (`DELETE /posts/:postId`).

-   **Frontend:**

    -   Displays a list of all blog posts.
    -   Allows users to create new posts.
    -   Allows users to edit existing posts.
    -   Allows users to delete posts.

## Technologies Used

-   Node.js
-   Express.js
-   Body-parser
-   Axios
-   EJS (Embedded JavaScript templates)

## Project Structure
.
├── public/
│   └── styles/
│       └── main.css
├── views/
│   ├── index.ejs
│   └── modify.ejs
├── index.js          (Backend API server)
└── server.js         (Frontend server)


-   `index.js`: Contains the Express.js application for the RESTful API.
-   `server.js`: Contains the Express.js application for the frontend.
-   `public/styles/main.css`: Contains the CSS styles for the frontend.
-   `views/index.ejs`: Contains the EJS template for displaying the list of posts.
-   `views/modify.ejs`: Contains the EJS template for creating and editing posts.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Hamish404/Blog-API-Project/
    cd Blog-API-Project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the API server:**

    ```bash
    node index.js
    ```

    The API server will run on `http://localhost:4000`.

4.  **Run the frontend server:**

    ```bash
    node server.js
    ```

    The frontend server will run on `http://localhost:3000`.

5.  **Access the application:**

    Open your web browser and navigate to `http://localhost:3000`.

## API Endpoints

-   `GET /posts`: Retrieves all posts.
-   `GET /posts/:postId`: Retrieves a specific post.
-   `POST /posts`: Creates a new post.
-   `PATCH /posts/:postId`: Updates a post.
-   `DELETE /posts/:postId`: Deletes a post.

## Frontend Routes

-   `/`: Displays the list of posts.
-   `/new`: Displays the form for creating a new post.
-   `/edit/:id`: Displays the form for editing a post.
-   `/api/posts`: Handles the creation of a new post.
-   `/api/posts/:id`: Handles the updating of a post.
-   `/api/posts/delete/:id`: Handles the deletion of a post.

## Considerations

-   **In-Memory Data:** The API uses an in-memory array to store posts. For production use, a database should be implemented.
-   **Error Handling:** Basic error handling is implemented, but more robust error handling should be considered for production.
-   **Security:** Input sanitization and other security measures should be implemented for production.
-   **ID Generation:** the ID generation for the api is done by incrementing the array length. This is not best practice, and should be changed to a UUID, or a database implementation.

## Contributions

Contributions are welcome! Please feel free to submit a pull request.
