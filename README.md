# Personal Profile App

## 📄 Description
This is a simple personal profile web application built with **React** (frontend) and **Node.js + Express** (backend).

The app displays the student's name and group, and allows adding, editing, and deleting course records with grades.

---

## 🖥️ Running the Application Locally (Windows, Mac, or Linux)

### Backend Setup

1. Open a terminal.
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   Backend will be running at:
   ```
   http://localhost:5000
   ```
   Leave this terminal open.

---

### Frontend Setup

1. Open another terminal window or tab.
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the React application:
   ```bash
   npm start
   ```
   Frontend will be available at:
   ```
   http://localhost:3000
   ```

The frontend communicates with the backend via API calls.

---

## 🧑‍💻 Running the Application on a Debian or Kali Linux Virtual Machine

Follow these steps to run the application on a Debian-based VM (e.g., Kali Linux or Ubuntu Server):

### 1. Install Node.js, npm, and git

Open the terminal and run:
```bash
sudo apt update
sudo apt install nodejs npm git -y
```

### 2. Clone the Repository

Clone the project repository:
```bash
git clone https://github.com/jannecentria/personal-profile-app.git
```

### 3. Start the Backend Server

Navigate to the backend directory, install dependencies, and start the backend server:
```bash
cd personal-profile-app/backend
npm install
node server.js
```
The backend will run at:
```
http://localhost:5000
```
Leave this terminal open.

---

### 4. Build and Serve the Frontend

Open a new terminal tab or window and run:
```bash
cd personal-profile-app/frontend
npm install
npm run build
sudo npm install -g serve
serve -s build -l tcp://0.0.0.0:3000
```
The frontend will now be available at:
```
http://0.0.0.0:3000
```

---

### 5. Find the Virtual Machine's IP Address

To access the app from outside the VM:
```bash
ip a
```
Look for an IP like `10.0.2.15` or `192.168.x.x`.

---

### 6. Open the Application in the Browser

From your host machine (your real computer), open:
```
http://<VM-IP>:3000
```
Example:
```
http://10.0.2.15:3000
```

✅ You will see the full application running:
- Student name and group at the top.
- List of courses.
- Add, Edit, and Delete courses.

---
