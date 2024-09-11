

# Expense-Tracker
![Expense Tracker](https://assets.roadmap.sh/guest/expense-tracker-api-m72p5.png)

An API for tracking expenses with features such as user authentication, expense filtering, and CRUD operations. This project uses JWT (JSON Web Tokens) for secure user authentication and session management.

## Features

1. **User Authentication:**
   - Users can sign up and log in to the application.
   - Authentication is handled using JWT tokens, which are generated upon login and used for subsequent requests to secure endpoints.

2. **Manage Expenses:**
   - **Add New Expense:** Users can add a new expense with details such as amount, category, date, and description.
   - **Remove Existing Expense:** Users can remove an existing expense by providing the expense ID.
   - **Update Existing Expense:** Users can update the details of an existing expense by providing the expense ID.

3. **Filter Expenses:**
   - **Past Week:** View expenses incurred in the past week.
   - **Last Month:** View expenses incurred in the last month.
   - **Last 3 Months:** View expenses incurred in the last 3 months.
   - **Custom Date Range:** Users can specify a custom date range to view expenses within that period.

4. **Expense Categories:**
   - The following categories can be used to classify expenses:
     - Groceries
     - Leisure
     - Electronics
     - Utilities
     - Clothing
     - Health
     - Others

## Technologies Used

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB (using Mongoose for object data modeling)
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- MongoDB installed and running.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/yourdbname
   JWT_SECRET=your_jwt_secret
   ```

   Replace `yourdbname` with your MongoDB database name and `your_jwt_secret` with a secure secret key for JWT.

4. **Run the Server:**

   ```bash
   node server.js
   ```

   The server will start running on `http://localhost:4000`.

## API Endpoints

### User Authentication

- **POST** `/api/auth/signup` - Register a new user.
- **POST** `/api/auth/login` - Log in as an existing user and receive a JWT token.

### Expense Management

- **GET** `/api/expenses` - Get a list of all expenses (requires JWT).
- **POST** `/api/expenses` - Add a new expense (requires JWT).
- **PUT** `/api/expenses/:id` - Update an existing expense by ID (requires JWT).
- **DELETE** `/api/expenses/:id` - Remove an existing expense by ID (requires JWT).

### Expense Filtering

- **GET** `/api/expenses?filter=past_week` - Get expenses from the past week.
- **GET** `/api/expenses?filter=last_month` - Get expenses from the last month.
- **GET** `/api/expenses?filter=last_3_months` - Get expenses from the last 3 months.
- **GET** `/api/expenses?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Get expenses within a custom date range.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome any improvements or bug fixes!

## License

This project is licensed under the MIT License.

