
# Multi-User File Manager

## Overview

The Multi-User File Manager is a backend application that provides a collaborative platform for managing files. It supports secure user authentication, file management operations, multilingual user interface support, and asynchronous task handling using Redis. The project is built with Node.js, Express.js, and integrates MySQL/MongoDB for data storage.

---

## Features

- **User Management**: Secure user registration and login with password hashing.
- **File Management**: Users can create, view, update, and delete files within their directories.
- **Multilingual Support (i18n)**: Offers support for multiple languages.
- **Queuing System**: Uses Redis to handle asynchronous tasks such as file uploads.
- **Optional Add-ons**: File versioning, search functionality, and cloud storage integration (can be extended).

---

## Prerequisites

Before running the project, ensure the following are installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MySQL](https://www.mysql.com/)
- [Redis](https://redis.io/)

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/PSHEMA/file-manager.git
cd file-manager
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up the Environment
- Copy the `.env.example` file and configure your environment variables:
```bash
cp .env.example .env
```

- Update the \`.env\` file with the following details:
```
 PORT=3000
 DB_NAME=file_manager
 DB_USER=root
 DB_PASS=password
 DB_HOST=localhost
 JWT_SECRET=your_jwt_secret
 REDIS_URL=redis://localhost:6379

```

### 4. Set Up the Database
- **MySQL**:
  - Create a database named \`file_manager\`.
  - Run the provided SQL migration file or ORM schema to initialize tables.
---

## Running the Application

### Start the Development Server
```bash
npm start
```

### Start with Nodemon for Auto-Reloading
```bash
npm run dev
```

The application will be accessible at \`http://localhost:3000\`.

---

## API Endpoints

| **Endpoint**           | **Method** | **Description**                |
|-------------------------|------------|--------------------------------|
| `/auth/register`        | `POST`     | Register a new user.           |
| `/auth/login`           | `POST`     | Authenticate a user.           |
| `/files/upload`         | `POST`     | Upload a file.                 |
| `/files`                | `GET`      | List all user files.           |
| `/files/:id`            | `DELETE`   | Delete a file.                 |

---

## Unit Testing

Run the unit tests:
```bash
npm test
```

---

## Internationalization

Supported Languages:
- English (default)
- French

Language preferences are managed via request headers or user settings.

---

## Technical Choices

- **Database**: Chose MySQL for structured relational data, but MongoDB support is available for flexibility.
- **Authentication**: Secure password hashing with `bcrypt` and JWT for session handling.
- **Asynchronous Tasks**: Redis queuing system implemented using `Bull`.
- **Internationalization**: Integrated `i18next` for robust multilingual support.

---

## Challenges and Solutions

### Challenge: Handling Asynchronous File Uploads
- **Solution**: Implemented Redis with Bull to queue uploads and track progress.

### Challenge: Multi-Language Support
- **Solution**: Used `i18next` with backend configuration to dynamically load translations.

---

## Future Improvements

- Implement file versioning for enhanced collaboration.
- Add a search functionality to locate files quickly.
- Integrate with cloud storage services like AWS S3 or Google Drive.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributors

- **MAWIA Katiwa** (GitHub: [@mkatiwa](hhttps://github.com/mkatiwa))
- **SHEMA Placide** (GitHub: [@PSHEMA](https://github.com/PSHEMA))

---
