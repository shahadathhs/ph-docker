# MongoDB Connection Guide for Docker Environments

---

## 🌐 Remote MongoDB (e.g., MongoDB Atlas)

Use this when connecting to a cloud-hosted MongoDB instance:

```env
DB_URL=mongodb+srv://<username>:<password>@cluster0.v6dfbfz.mongodb.net/<database>?retryWrites=true&w=majority
```

**Example:**

```env
DB_URL=mongodb+srv://tour-admin:yourpassword@cluster0.v6dfbfz.mongodb.net/cloudinary-multer?retryWrites=true&w=majority
```

---

## 🖥️ Local MongoDB on Host Machine

> ⚠️ You **cannot** use `localhost` directly from inside a Docker container.

### ❌ Incorrect (won't work inside Docker):

```env
DB_URL=mongodb://localhost:27017
```

### ✅ Correct (use Docker’s internal hostname):

```env
DB_URL=mongodb://host.docker.internal:27017
```

---

## 🐳 Local MongoDB Inside Another Docker Container

If both your app and MongoDB run in Docker (e.g., via Docker Compose):

### Option 1: Use the container's IP address (requires manual lookup):

```env
DB_URL=mongodb://172.17.0.2:27017
```

> Use `docker inspect <container-name>` to find the IP address.

---

### Option 2 (Recommended): Use the container name as hostname

If you named your MongoDB container `mongodb` in your Docker Compose file:

```env
DB_URL=mongodb://mongodb:27017
```

---

## 🧪 Tip: Testing Connection

You can test the connection from inside your container:

```bash
docker exec -it <your-app-container> ping mongodb
```

---
