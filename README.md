# Salary-Calculator-2024-Q2-63777752

## Introduction

This project is a web application built using Node.js, Next.js, TailwindCSS for styling, Jest for testing, Docker for containerization, GitHub Actions for continuous integration and deployment, and Vercel for hosting. The application is a salary calculator that helps users plan their finances effectively.

## Online Hosted Site

You can access the application online at [Salary-Calculator-2024-Q2-63777752](https://salary-calculator-2024-q2-63777752.vercel.app/).(https://salary-calculator-2024-q2-63777752.vercel.app/)

### When checking mobile responsiveness, if you are using a brower to check the responsiveness , please refresh the page once you set the dimentionality you want. Otherwise styling might not adjust automatically if you move from desktop view to mobile view directly

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine

- Access to the terminal or command line

If you prefer Docker:

- Docker installed on your machine


## Installation Guide

### 1. Cloning the Repository

First, clone the repository to your local machine:

```sh

git clone https://github.com/Chasith-Randima/salary-calculator-2024-Q2-63777752.git

cd salary-calculator-2024-q2-63777752

```

### 2. Installing Dependencies

Install the required dependencies using npm:

```sh

npm install

```

### 3. Running the Application

You can run the application in development mode using:

```sh

npm run dev

```

This will start the development server and you can access the application at `http://localhost:3000`.

### 4. Building the Application

To build the application for production, use:

```sh

npm run build

```

### 5. Starting the Production Server

After building the application, you can start the production server with:

```sh

npm start

```

### 6. Running Tests

To run the tests, use:

```sh

npm test

```

### 7. Running the Application with Docker

If you prefer to use Docker, you can pull the Docker image and run the application inside a container.

#### Pulling the Docker Image

Pull the Docker image from Docker Hub:

```sh

docker pull randimasilva/salary-calculator-2024-q2-63777752-image

```

#### Running the Docker Container

Run the Docker container, mapping port 3000 on your host to port 3000 in the container:

```sh

docker run -p 3000:3000 randimasilva/salary-calculator-2024-q2-63777752-image

```

You can now access the application at `http://localhost:3000`.


## Project Structure

The project structure is as follows:

```

salary-calculator-2024-q2-63777752/

├── components/

│   ├── TaskPriorityChart.tsx

│   ├── TaskRow.tsx

│   ├── TaskCard.tsx

│   ├── Pagination.tsx

│   └── Modal.tsx

├── context/

│   └── TaskContext.tsx

├── pages/

│   ├── api/

│   ├── _app.tsx

│   ├── index.tsx

│   └── ...

├── public/

│   ├── images/

│   └── ...

├── styles/

│   └── globals.css

├── tests/

│   └── ...

├── .dockerignore

├── .gitignore

├── Dockerfile

├── jest.config.js

├── next.config.js

├── package.json

├── README.md

└── tsconfig.json

```

## Technologies Used

- **Node.js**: JavaScript runtime environment.

- **Next.js**: React framework for building server-side rendered applications.

- **TailwindCSS**: Utility-first CSS framework for styling.

- **Jest**: JavaScript testing framework.

- **Docker**: Platform for developing, shipping, and running applications in containers.

- **GitHub Actions**: CI/CD tool for automating workflows.

- **Vercel**: Platform for deploying static sites and serverless functions.

## Conclusion

This guide provides a comprehensive overview of the Salary-Calculator-2024-Q2-63777752, including installation, running and running tests instructions. For any issues or contributions, feel free to open an issue or pull request on the project's GitHub repository.
