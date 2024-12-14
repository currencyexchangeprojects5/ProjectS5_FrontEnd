# Global Currency Exchange System

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Workflow](#project-workflow)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Steps to Set Up](#steps-to-set-up)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Enhancements](#future-enhancements)
- [Contribution](#contribution)

## Overview
A React.js application designed for streamlined and intuitive currency exchange. This system offers real-time exchange rates, multilingual support, and a user-friendly workflow, catering to both local and international users.

## Features
- **Real-Time Exchange Rates**: Fetches live currency rates through an API.
- **Multi-Currency Support**: Enables direct conversions without intermediaries.
- **Multilingual Interface**: Available in English, Armenian, and Russian.
- **User-Friendly Design**: Step-by-step transaction flow for an intuitive experience.
- **Transaction Limits**: Real-time validation for currency-specific thresholds.

## Project Workflow
The project follows a modular and phase-based Agile approach:
1. **Research and Planning**: Identified user needs and prioritized system features.
2. **Design and Prototyping**: Created a UI prototype in Figma.
3. **Development**: Built the frontend using React.js and integrated it with a backend API for live rates.
4. **Testing and Refinement**: Conducted iterative testing to ensure smooth functionality.

## Technologies Used
### Frontend
- **React.js**: Dynamic UI development.
- **React Router**: For seamless navigation.
- **Figma**: Prototyping the interface.

### Backend
- **TypeScript with Node.js**: Backend logic.
- **NestJS Framework**: Modular and scalable API development.
- **Swagger**: API documentation.

### Database
- **MySQL**: For managing currency data and transaction logs.

## Installation and Setup

### Prerequisites
Ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd currency-exchange



2. **Install Dependencies**

Run the following command to install the necessary dependencies:

```bash
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file in the root directory with the following structure:

```env
APPLICATION_URL=http://localhost:5000/swagger#/
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_TYPE=mysql
DATABASE_USER=<your-username>
DATABASE_PASSWORD=<your-password>
DATABASE_NAME=currency_exchange
API_KEY=b45a408e9b658fb050dffbd29df00c7a
```

- Replace `<your-username>` and `<your-password>` with your database credentials.
- Use the provided `API_KEY`.

6. **Start the Backend**

Run the following command to start the backend in development mode:

```bash
npm run start:dev
```

7. **Start the Frontend**

Run the following command to start the frontend:

```bash
npm start
```

8. **Access the Application**

Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- Perform currency exchanges using the guided workflow.
- Switch languages via the interface to experience multilingual support.

## Project Structure

- **Frontend:** Built with React.js and managed using `react-router-dom`.
- **Backend:** Node.js with MySQL database integration.
- **API Integration:** Fetches live rates using an external API.

## Challenges and Solutions

- **Accurate Exchange Rates:** Integrated an API for dynamic updates.
- **Multilingual Support:** Centralized translations object for scalability.
- **Validation:** Ensured currency-specific limits with real-time feedback.

## Future Enhancements

- Add fractional currency handling.
- Integrate a card-based exchange mechanism.
- Expand language options.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature description"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-name
    ```
5. Create a pull request on the main repository.

