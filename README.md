# 🍅 Tomato – Food Delivery App (Backend API)

A secure, scalable, and production-ready backend for the Tomato Food Delivery App.  
Built using **Node.js**, **Express**, and **MongoDB**, this backend handles authentication, restaurants, menus, cart, orders, and payments.

---

## 🚀 Features

- User authentication (JWT + bcrypt)  
- Restaurant APIs  
- Menu APIs  
- Cart APIs  
- Order management  
- Payment Gateway support (Stripe)    
- Protected routes using middleware    
- Clean folder structure for scalability  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT**  
- **bcrypt.js**  
- **Multer**  
- **dotenv**  
- **CORS**

---

## 📁 Folder Structure

```
/backend
 ├── controllers
 ├── models
 ├── routes
 ├── middlewares
 ├── config
 ├── utils
 ├── server.js
 
```

---

## 🔐 Authentication Flow

1. User signs up → password hashed with bcrypt  
2. User logs in → JWT token generated  
3. Token validated in middleware  
4. Protected routes allow only authorized users  

---

## 📌 API Endpoints (Examples)

### **Auth**
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user |


### **Cart**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/cart/add` | Add item |
| POST | `/api/cart/remove` | Remove item |
| POST | `/api/cart/get` | Get cart |

### **Orders**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/order/place` | Place order |
| GET | `/api/order/list` | List orders |

---

## 🧪 How to Run Locally

```bash
git clone <your-backend-repo>
cd tomato-backend

npm install
npm run dev
```

Runs on:  
👉 http://localhost:5000

---

---

## 🌟 Highlights

- Production-ready REST API  
- Strong authentication system  
- Error handling & validation  
- Scalability-focused folder structure  
- Clean controller-service architecture    

---
