# React Chat Application

Welcome to the **React Chat Application**! This application provides a real-time chat experience with features such as file uploads, video call links, and more. It also includes user authentication with login and signup functionalities.

## Features

- **Real-Time Messaging**: Chat with users in real-time.
- **File Uploads**: Send and receive files within the chat.
- **Video Calls**: Integrate video call links (Google Meet, Zoom).
- **Export Chat History**: Generate QR codes to export chat history.
- **User Authentication**: Sign up and log in to access the chat.

## Getting Started

Follow these steps to get your development environment set up and running:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **MongoDB**: Make sure MongoDB is set up and running. [Get MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Adarsh2228/react-chat.git
   cd react-chat
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` File**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/react_chat
   PORT=5000
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Run the Application**

   - **Start the Backend Server**

     ```bash
     npm run server
     ```

   - **Start the Frontend**

     In a new terminal window:

     ```bash
     npm run start
     ```

## Usage

### Authentication

1. **Sign Up**: Create a new account by sending a POST request to `/auth/signup` with the following JSON body:

   ```json
   {
     "username": "your_username",
     "password": "your_password"
   }
   ```

2. **Log In**: Log in with an existing account by sending a POST request to `/auth/login` with the following JSON body:

   ```json
   {
     "username": "your_username",
     "password": "your_password"
   }
   ```

   On successful login, you will receive a JWT token to be used for authenticated requests.

### Chat

1. **Login and Signup**: Create an account or log in to access the chat features.
2. **Chat**: Select a conversation to start chatting.
3. **Upload Files**: Use the file upload button to send files.
4. **Add Video Call Links**: Click on the button to input Zoom or Google Meet links.
5. **Export Chat History**: Click the export button to generate and view a QR code with chat history.

## API Endpoints

### Auth Routes

- **POST /auth/signup**: Sign up a new user.
- **POST /auth/login**: Log in an existing user.

### Message Routes

- **POST /messages/upload**: Upload files.
- **GET /messages**: Retrieve messages for a conversation.

### User Routes

- **GET /users**: List users.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, MongoDB
- **File Uploads**: Multer
- **Real-Time Communication**: Socket.io

## Contributing

1. **Fork the Repository**: Create a fork of this repository on GitHub.
2. **Create a Branch**: Create a feature branch for your changes.
3. **Commit Your Changes**: Write descriptive commit messages.
4. **Push Your Changes**: Push your changes to your fork.
5. **Open a Pull Request**: Open a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

