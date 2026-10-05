# AWS Multi-Tier Student Management System

A cloud-based Student Management System built using AWS services, Node.js, and MySQL.

## Architecture

User → S3 Frontend → Application Load Balancer → EC2 Backend → RDS MySQL

## AWS Services

- Amazon S3
- Amazon EC2
- Amazon RDS (MySQL)
- Application Load Balancer
- Amazon VPC
- Security Groups

## Features

- Add students
- View student records
- Edit student records
- Delete student records
- Student dashboard
- MySQL database integration
- Load-balanced backend

## Technology

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MySQL
- AWS

## Project Structure

```text
Student-Management-System/
├── .gitignore
├── db.js
├── package.json
├── package-lock.json
└── server.js
