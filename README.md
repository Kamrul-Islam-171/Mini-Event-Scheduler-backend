# 📅 Mini Event Scheduler - Backend API

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=swagger&logoColor=white" alt="REST API">
</div>

<div align="center">
  <h3>🔗 <a href="https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-client">Front-End Repository</a> | 🔗 <a href="https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-backend">Backend Repository</a></h3> | 🚀 <a href="https://mini-event-scheduler-alpha.vercel.app">Live Demo</a> | 🚀 <a href="https://mini-event-scheduler-backend.vercel.app">Backend Live</a></h3>
</div>


## 🎯 About The Project

The Mini Event Scheduler Backend is a robust REST API built with Node.js and TypeScript that powers a comprehensive event management system. This backend service provides full CRUD operations for events and features an intelligent AI-like categorization system that automatically classifies events as "Work," "Personal," or "Other" based on keyword analysis.

### 🌟 Key Highlights

- **RESTful Architecture**: Clean, standard REST API design
- **AI-Powered Categorization**: Automatic event classification using keyword analysis
- **TypeScript**: Full type safety and modern development experience
- **In-Memory Storage**: Fast, lightweight data management for demo purposes
- **Input Validation**: Comprehensive request validation and error handling

## ✨ Features

### 🔧 Core Functionality

- **Event Management**: Create, read, update, and delete events
- **Automatic Categorization**: AI-like keyword-based event classification
- **Status Management**: Archive/unarchive events functionality
- **Data Sorting**: Events automatically sorted by date and time

### 🛡️ Technical Features

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Robust request validation with Zod
- **Error Handling**: Comprehensive error management system
- **CORS Support**: Cross-origin request handling
- **Environment Configuration**: Flexible environment-based setup

### 🤖 AI Categorization

- **Work Events**: Meetings, projects, clients, deadlines
- **Personal Events**: Birthday, family, vacation, dinner
- **Other Events**: Default category for unmatched keywords

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod
- **Development**: ts-node, nodemon
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have:

- Node.js (v18.0.0 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-backend.git
   cd Mini-Event-Scheduler-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **For production**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### Events Management

| Method | Endpoint      | Description                    | Auth Required |
|--------|---------------|--------------------------------|---------------|
| POST   | `/events`     | Create a new event             | No            |
| GET    | `/events`     | Get all events (sorted)        | No            |
| PUT    | `/events/:id` | Update event (archive/unarchive) | No            |
| DELETE | `/events/:id` | Delete an event                | No            |

### Request/Response Examples

#### Create Event

```http
POST /events
Content-Type: application/json

{
  "title": "Team Meeting",
  "date": "2024-07-25",
  "time": "14:30",
  "notes": "Discuss project milestones and client feedback"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Event created successfully",
  "data": {
    "id": "1",
    "title": "Team Meeting",
    "date": "2024-07-25",
    "time": "14:30",
    "notes": "Discuss project milestones and client feedback",
    "category": "Work",
    "archived": false,
    "createdAt": "2024-07-22T10:30:00.000Z"
  }
}
```

#### Get All Events

```http
GET /events
```

**Response:**
```json
{
  "success": true,
  "message": "Events retrieved successfully",
  "data": [
    {
      "id": "1",
      "title": "Team Meeting",
      "date": "2024-07-25",
      "time": "14:30",
      "notes": "Discuss project milestones",
      "category": "Work",
      "archived": false,
      "createdAt": "2024-07-22T10:30:00.000Z"
    }
  ],
  "count": 1
}
```

#### Delete Event

```http
DELETE /events/1
```


### AI Categorization Process

1. Combine event title and notes into a single text
2. Convert to lowercase for case-insensitive matching
3. Check for Work keywords first
4. If no Work keywords found, check for Personal keywords
5. Default to "Other" if no keywords match

## 📁 Project Structure

```
src/
├── controller/
│   └── eventController.ts        # Event management logic
├── errors/
│   ├── AppError.ts              # Custom error class
│   ├── HandleDuplicateError.ts  # Duplicate error handler
│   ├── HandleZodError.ts        # Validation error handler
│   └── notFound.ts              # 404 error handler
├── interface/
│   └── errors.ts                # Error interface definitions
├── middleware/
│   ├── globalErrorHandler.ts   # Global error handling
│   └── ValidateRequest.ts       # Request validation middleware
├── models/
│   └── eventModel.ts           # Event data model and logic
├── routes/
│   └── eventRoute.ts           # Event route definitions
├── utils/
│   └── categorize.ts           # AI categorization utility
├── validation/
│   └── eventValidation.ts      # Zod validation schemas
├── index.ts                    # Application entry point
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```


## ⚠️ Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errorDetails": {
    "issues": [
      {
        "field": "title",
        "message": "Title is required"
      }
    ]
  }
}
```


## 📞 Contact

**Project Maintainer**: [Your Name]

- **Email**: your.email@example.com
- **GitHub**: [@Kamrul-Islam-171](https://github.com/Kamrul-Islam-171)
- **Repository**: [Mini Event Scheduler Backend](https://github.com/Kamrul-Islam-171/Mini-Event-Scheduler-backend)

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ and TypeScript</p>
</div>
