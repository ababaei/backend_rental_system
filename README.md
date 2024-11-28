
# 🎬 Movie Rental System

This project is a backend system for a movie rental business, built with **NestJS** and **Prisma**, using a **PostgreSQL** database with the Sakila schema, and running under **Docker Compose**.

## 🚀 Features
- Customer management with timezone support.
- Rental management with return date constraints (1 to 3 weeks).
- Scheduled email reminders at J-5 and J-3 before the return date.
- API to manage customers, rentals, and scheduled tasks.

## 🛠️ Getting Started

### Prerequisites
- **Docker** and **Docker Compose** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:ababaei/backend_rental_system.git
   cd backend_rental_system
   ```

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

   This will start two containers:
   - **NestJS Backend** running at `http://localhost:3000`.
   - **PostgreSQL** with the Sakila schema.

### Running the Project

1. Once the containers are running, the API will be available at `http://localhost:3000`.

2. You can interact with the API for managing customers, rentals, and triggering scheduled tasks.

---

## 🐳 Docker Setup

The project uses Docker Compose to manage the containers for both the **NestJS Backend** and **PostgreSQL**:

1. **Backend Container**: Runs the NestJS application.
2. **PostgreSQL Container**: Runs the PostgreSQL database with the Sakila schema pre-configured.

### Docker Compose Configuration

The `docker-compose.yml` file is already configured to run both services. Ensure the `.env` file is set up with the correct database credentials, or modify the Docker Compose environment variables as needed.
