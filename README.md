# Smart Task Manager

Smart Task Manager is a web application designed to help you manage your tasks efficiently and effectively. It provides a user-friendly interface to create, update, delete, and view tasks. The application also includes a timeline view to visualize tasks over different time periods.

## Features

- **Task Management**: Create, update, and delete tasks.
- **Category Management**: Organize tasks into categories.
- **Timeline View**: Visualize tasks over different time periods (year, month, day, hour).
- **Responsive Design**: The application is fully responsive and works on all screen sizes.
- **User Authentication**: Secure login and registration for users.
- **Real-time Updates**: Tasks and categories are updated in real-time.

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **State Management**: Zustand
- **API**: Axios
- **Drag and Drop**: @hello-pangea/dnd
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/smart-task-manager.git
   cd smart-task-manager
   ```

2. **Install dependencies for the frontend:**

   ```bash
   npm install 
   ```

3. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

### Configuration

#### Backend Configuration:

Create a `.env` file in the `backend` directory and add the following environment variables:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### Frontend Configuration:

No additional configuration is required for the frontend.

### Running the Application

1. **Start the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend server:**

   ```bash
   cd ../smart-task-manager
   npm run dev
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For any questions or inquiries, please contact abhipatidar253@gmail.com
