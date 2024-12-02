# Hazorfim Store - Full-Stack E-Commerce Platform

This repository hosts the **Hazorfim Store**, a feature-rich e-commerce platform built to deliver a seamless shopping experience. Leveraging modern web technologies, the project incorporates a **React.js** front end for dynamic interactivity and a robust **Node.js + Express** back end for efficient server-side operations. The platform supports multiple user roles—**guest**, **registered user**, and **admin**—with tailored functionality for each.

---

## **Features**

### **Guest Users**
- Browse the product catalog with dynamic filtering and sorting options.
- View detailed descriptions and specifications for each product.
- Register an account to unlock additional features.

### **Registered Users**
- Access all guest functionalities.
- Add products to a personal shopping cart.
- Complete secure purchases with real-time order updates.
- View order history and track delivery status.

### **Admin Users**
- Manage the product catalog:
  - **Add:** Create new products with images, descriptions, and pricing.
  - **Edit:** Update product information and inventory levels.
  - **Delete:** Remove outdated or unavailable products.
- Oversee customer orders:
  - View, update, and manage order statuses.
- Administer user accounts:
  - Monitor registered users and their purchase activities.

---

## **Technology Stack**

### **Frontend**
- **React.js:** Provides a Single-Page Application (SPA) for a fast and smooth user experience.
- **Redux:** Manages global application state, ensuring consistent data across components.
- **Material-UI (MUI):** Implements a modern and responsive user interface.

### **Backend**
- **Node.js:** Enables scalable and high-performance server-side operations.
- **Express:** Simplifies the creation of RESTful APIs for seamless client-server communication.

### **Database**
- **JSON Files:** Used for prototyping data storage in the early development stage; future plans to integrate a scalable database system like MongoDB or PostgreSQL.

### **Additional Technologies**
- **Authentication and Authorization:** Role-based access control for admins, users, and guests.

---

## **How to Run**

### Clone the repository:
```bash
git clone https://github.com/TziporaGoldshmidt/hazorfim-store-react-project.git
```

### Navigate to the project directory and install dependencies for both the client and server:

#### For the Server (Node.js + Express):
```bash
cd server
npm install
npm start
```

#### For the Client (React):
```bash
cd client
npm install
npm start
```

### Access the Application:
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to start using the platform.
