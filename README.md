# CrediKhaata – Loan Tracker for Shopkeepers

## Overview
CrediKhaata is a Node.js-based backend API system designed to help small-scale shopkeepers (e.g., kirana store owners, tailors, hardware shopkeepers) manage credit sales, customers, and repayments efficiently. In small communities, it's common for customers to purchase goods on credit and pay later. This system aims to digitize this informal credit tracking process, reducing reliance on notebooks or memory.

### Core Features
- User registration/login (JWT Auth)
- Add/manage customers
- Record loans and repayments
- View loan summary and overdue alerts

### Tech Stack
- Node.js, Express.js
- MongoDB + Mongoose
- JWT for auth
- Moment.js for date handling

---

## 📦 Installation & Setup

  1. Clone the Repository
     ```bash
     git clone https://github.com/your-username/credikhaata.git
     cd credikhaata
     ```

  2. Install Dependencies
     ```bash
     npm install
     ```

  3. Create `.env` file
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/credikhaata
     JWT_SECRET=yourSecretKey
     ```

  4. Start the Server
     ```bash
     npm run dev
     ```

  ## 🧪 API Endpoints

  ### 🔐 Auth Routes
  | Method | Endpoint             | Description         |
  |--------|----------------------|---------------------|
  | POST   | `/api/auth/register` | Register a user     |
  | POST   | `/api/auth/login`    | Login and get token |

  ### 👥 Customer Routes
  | Method | Endpoint             | Description         |
  |--------|----------------------|---------------------|
  | POST   | `/api/customers/`    | Add new customer    |
  | GET    | `/api/customers/`    | Get all customers   |
  | PUT    | `/api/customers/:id` | Update customer     |
  | DELETE | `/api/customers/:id` | Delete customer     |

  ### 💳 Loan Routes
  | Method | Endpoint          | Description           |
  |--------|-------------------|------------------------|
  | POST   | `/api/loans/`     | Create a new loan     |
  | GET    | `/api/loans/`     | Get all active loans  |

  ### 💰 Repayment Routes
  | Method | Endpoint            | Description           |
  |--------|---------------------|------------------------|
  | POST   | `/api/repayments/`  | Record a repayment     |

  ### 📊 Summary Routes
  | Method | Endpoint                | Description                       |
  |--------|-------------------------|-----------------------------------|
  | GET    | `/api/summary/`         | Get loan summary for shopkeeper   |
  | GET    | `/api/summary/overdue`  | List customers with overdue loans |

### Folder Structure
    credikhaata/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── utils/
    ├── .env
    ├── server.js
    ├── package.json
    └── README.md


### Future Scope / Bonus
    - PDF Receipt Generation for repayments using pdfkit or similar

    - SMS/WhatsApp Reminder using Twilio or mocked service

    - Webhook for external repayment notification system

    - Admin dashboard for analytics (React/Next.js frontend)