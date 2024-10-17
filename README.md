Overview
This repository contains the backend implementation for a React-based e-commerce store focused on comic book management. The API allows for the creation, retrieval, updating, and deletion of comic book inventory items.
Key Technologies
Server: Node.js with Express.js
Database: MongoDB
Version Control: GitHub
API Testing: Postman
Features
Comic Book Management API
Create a Comic Book
Endpoint: POST /api/comic-books
Request Body:
json
{
  "bookName": "string",
  "authorName": "string",
  "yearOfPublication": "number",
  "price": "number",
  "discount": "number (optional)",
  "numberOfPages": "number",
  "condition": "string (new or used)",
  "description": "string (optional)"
}

Edit a Comic Book
Endpoint: PUT /comic/:id
Request Body: Same as Create Comic Book (only fields to update are required)
Delete a Comic Book
Endpoint: DELETE /comic/:id
Comic Book List API
Fetch Inventory List
Endpoint: GET /api/comic/get
Query Parameters:
page: Page number for pagination (default: 1)
limit: Number of items per page (default: 10)
sort: Field to sort by (e.g., price, year)
Additional filters based on attributes like author, year, price, condition.
Comic Book Details API
Get Comic Book Details
Endpoint: GET /comic/:id
Project Setup
Prerequisites
Node.js installed on your machine.
MongoDB instance running (locally or via a cloud service).
Installation Steps
Clone the repository:
bash
git clone <repository-url>
cd comic-book-store-backend

Install dependencies:
bash
npm install

Create a .env file in the root directory with:
text
MONGODB_URI=your_mongodb_connection_string
PORT=3000

Start the server:
bash
npm run dev

The server will run on http://localhost:3000.
Error Handling
The API includes robust error handling for all endpoints, returning appropriate HTTP status codes and messages for errors such as:
400 Bad Request: Invalid input data.
404 Not Found: Resource not found.
500 Internal Server Error: Unexpected server condition.
Testing with Postman
A Postman collection is included for testing all API endpoints. Import the collection into Postman to execute requests and validate functionality.
Contributing
Contributions are welcome! Please submit a pull request or open an issue for discussion.
