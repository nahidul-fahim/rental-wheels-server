# Rental Wheels

Rental Wheels is a full-stack application for renting cars. This project leverages Node.js, Express, MongoDB, Mongoose and TypeScript to deliver a robust, scalable solution for managing car rentals.

## Table of Contents

- [Rental Wheels](#rental-wheels)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Cars](#cars)
    - [Bookings](#bookings)
  - [Thank you for visiting](#thank-you-for-visiting)

## Introduction

Rental Wheels is designed to streamline the process of renting cars. It provides an easy-to-use backend system for users to book cars and for admins to manage those bookings.

## Features

- User authentication and authorization
- Cars booking
- Car add, update, delete features for admin
- Car rent management for admins
- Car return system for admin and automatically counts total rent cost based on total rent hours and price per hour for the car

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB and Node.js
- **TypeScript**: Typed superset of JavaScript
- **Zod**: Schema declaration and validation library for typescript

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- MongoDB (v4.x or later)
- npm (v6.x or later)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/nahidul-fahim/rental-wheels-server.git
    cd rental-wheels-server
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB database and update the configuration file accordingly.

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

    ```env
    NODE_ENV=development
    PORT=5000
    DATABASE_URL=your_mongodb_uri
    BCRYPT_SALT=12
    JWT_ACCESS_SECRET=your_jwt_secret
    JWT_ACCESS_EXPIRES_IN=1d
    ```

2. Replace the placeholder values with your actual configuration details.

## Usage

To run the application locally:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## API Endpoints

### Authentication

- **POST /api/auth/signup**: Register a new user

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "role": "user",  // role can be user or admin
  "password": "password123",
  "phone": "1234567890",
  "address": "123 Main St, City, Country"
}
```

- **POST /api/auth/signin**: Sign in a user

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Cars

- **POST /api/cars**: Add a new car (Admin only)

```javascript
Authorization: 
Bearer your_access_token
```

```json
{
  "name": "Tesla Model 3",
  "description": "An electric car with advanced technology and performance.",
  "color": "White",
  "isElectric": true,
  "features": ["AC", "Bluetooth", "Long Range Battery"],
  "pricePerHour": 500
}
```

- **GET /api/cars**: Get all cars

- **GET /api/cars/:id**: Get single car

- **PUT /api/cars/:id**: Update a car details (Admin only)

```json
{
     "color": "Black",
}
```

- **DELETE /api/cars/:id**: Delete a car (Admin only)

```javascript
Authorization: 
Bearer your_access_token
```

### Bookings

- **GET /api/bookings**: Get all bookings (Admin only)

Query search:

`/api/bookings?carId=608a6d8d03a1b40012abcdef&date=2024-06-15`

- **POST /api/bookings**: Book a car (User only)

```javascript
Authorization: 
Bearer your_access_token
```

```json
{
   "carId": "60d9c4e4f3b4b544b8b8d1c7",
   "date": "2024-06-15",
   "startTime": "13:00",
}
```

- **GET /api/bookings/my-bookings**: Get user's bookings (User only)

```javascript
Authorization: 
Bearer your_access_token
```

- **PUT /api/cars/return**: Return car (Admin only)

```javascript
Authorization: 
Bearer your_access_token
```

```json
{
   "bookingId": "60d9c4e4f3b4b544b8b8d1c7",
   "endTime": "15:00"
}
```


## Thank you for visiting