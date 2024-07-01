# ☕ Coffee Shop Finder Backend

## 📝 Overview

This is the backend service for the Coffee Shop Finder App. It provides RESTful APIs to manage and retrieve coffee shop data, including details, locations, ratings, and images. The backend is built with Node.js, uses MongoDB for data storage, and can be deployed on AWS.

## ✨ Features

- 🌐 RESTful APIs to manage coffee shop data
- 📜 Endpoints for accessing product listings per coffee shop
- 💾 MongoDB for data storage
- 🔓 CORS enabled for cross-origin requests

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: AWS

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or a local MongoDB instance

### 📦 Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com//Devojha408/coffee-shop-finder-api.git
    cd coffee-shop-finder-api
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

### 🏃‍♂️ Running the Application

1. **Start the server:**

    ```sh
    npm start
    ```

2. **API Endpoints:**

    - `GET /api/coffeeshops`: Retrieve all coffee shops
    - `GET /api/coffeeshops/:id`: Retrieve a single coffee shop by ID
    - `POST /api/coffeeshops`: Create a new coffee shop
    - `PUT /api/coffeeshops/:id`: Update a coffee shop by ID
    - `DELETE /api/coffeeshops/:id`: Delete a coffee shop by ID

### 📂 Project Structure

- `src/`
  - `config/`: Database configuration
  - `controllers/`: API controllers
  - `models/`: Mongoose models
  - `routes/`: API routes
  - `index.js`: Main server file

### 📊 Dummy Data

The app uses dummy data to simulate API calls. You can replace this with actual data as needed.

### 🌐 Deployment

To deploy the application on AWS:

1. **Build the application:**

    ```sh
    npm run build
    ```

2. **Deploy the build folder to your AWS EC2 instance or any other hosting service.**

### 🤝 Contributing

Contributions are welcome! Please submit a pull request or create an issue to discuss any changes.

### 📝 License

This project is licensed under the MIT License.

### 🙏 Acknowledgements

- Node.js
- Express.js
- MongoDB
- AWS
