# Cloud Readiness Assessment Tool

This project is a simple full-stack application that evaluates an organization's cloud maturity based on a short assessment.

The goal is to demonstrate full-stack fundamentals, focusing on clarity, validation, and user experience rather than complex architecture.

---

## 🚀 Overview

The application allows users to answer a set of cloud-related questions and receive:
- A readiness score
- A maturity level classification
- Practical recommendations for improvement

---

## 🧱 Tech Stack

**Frontend**
- HTML
- CSS
- Vanilla JavaScript

**Backend**
- Node.js
- Express
- CORS

---

## 🔄 How It Works

1. The user answers the assessment questions on the frontend.
2. The frontend validates the inputs and sends the data to the backend.
3. The backend validates the request, calculates the score, and determines the maturity level.
4. The backend returns the score, level, and recommendations.
5. The frontend displays the results and handles possible errors.

---

## 🛡️ Error Handling & Validation

- Frontend validation prevents incomplete submissions.
- Backend validation ensures data consistency and avoids unexpected behavior.
- Clear error messages are returned and displayed when issues occur.

---

## ▶️ Running the Project

### Backend
```bash
cd backend
node server.js
