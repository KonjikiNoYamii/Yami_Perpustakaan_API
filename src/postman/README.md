---

# 📘 **Backend Evaluation Project — Books & Users API**

*Dibuat dengan penuh ketelitian oleh Master dan dirapikan oleh Silica~*

---

# 🚀 **Cara Install & Menjalankan Project**


## ** 1 Install Dependencies**

Pastikan Node.js & npm sudah terpasang.

```bash
npm init -y
npm install express dotenv
npm install -D typescript ts-node-dev @types/express @types/node
npx tsc --init
npm install morgan helmet cors express-validator
npm install -D @types/morgan @types/cors
npm install

```

---

## ** 2 Jalankan Server**

```bash
npm run dev
```

Server biasanya berjalan di:

```
http://localhost:5000
```

(("Master jangan lupa nyalain server dulu sebelum test… nanti marah-marah sendiri…")) fufufu~

---

# 🌟 **Fitur yang Sudah Ada**

## 📚 **BOOK FEATURES**

* Melihat semua buku
* Melihat buku berdasarkan ID
* Search buku berdasarkan:

  * nama
  * min_harga
  * max_harga
  * min_stok
  * max_stok
* Membuat buku baru
* Update buku berdasarkan ID
* Delete buku

---

## 👥 **USER FEATURES**

* Melihat semua user
* Melihat user berdasarkan ID
* Search user berdasarkan:

  * nama
  * email
  * kota
  * bukuDipinjamId
  * bukuDipinjamNama
* Membuat user baru
* Update user berdasarkan ID
* Delete user

---

# 🧪 **Contoh Request Postman**

Berikut contoh lengkap yang bisa langsung dicoba di Postman:

---

# 📚 **BOOKS ENDPOINTS**

## **1. Get All Books**

**GET**

```
http://localhost:5000/api/books
```

---

## **2. Get Book by ID**

**GET**

```
http://localhost:5000/api/books/:id
```

Contoh:

```
http://localhost:5000/api/books/3
```

---

## **3. Search Books**

**GET**

```
http://localhost:5000/api/books/search?nama=konosuba&min_harga=10000&max_harga=50000&min_stok=2&max_stok=10
```

Query:

| Param       | Contoh             |
| ----------- | ------------------ |
| `nama`      | `?nama=overlord`   |
| `min_harga` | `?min_harga=20000` |
| `max_harga` | `?max_harga=50000` |
| `min_stok`  | `?min_stok=1`      |
| `max_stok`  | `?max_stok=10`     |

---

## **4. Create Book**

**POST**

```
http://localhost:5000/api/books
```

**Body JSON:**

```json
{
  "nama": "Overlord",
  "harga": 75000,
  "deskripsi": "Novel isekai dark fantasy",
  "stok": 4
}
```

---

## **5. Update Book**

**PUT**

```
http://localhost:5000/api/books/:id
```

**Body JSON:**

```json
{
  "harga": 99000,
  "stok": 10
}
```

---

## **6. Delete Book**

**DELETE**

```
http://localhost:5000/api/books/1
```

---

# 👥 **USERS ENDPOINTS**

## **1. Get All Users**

**GET**

```
http://localhost:5000/api/users
```

---

## **2. Get User by ID**

**GET**

```
http://localhost:5000/api/users/:id
```

Contoh:

```
http://localhost:5000/api/users/3
```

---

## **3. Search Users**

**GET**

```
http://localhost:5000/api/users/search?nama=riku&bukuDipinjamNama=alya
```

Query:

| Param              | Contoh                       |
| ------------------ | ---------------------------- |
| `nama`             | `?nama=riku`                 |
| `email`            | `?email=riku@example.com`    |
| `kota`             | `?kota=tokyo`                |
| `bukuDipinjamId`   | `?bukuDipinjamId=1`          |
| `bukuDipinjamNama` | `?bukuDipinjamNama=konosuba` |

---

## **4. Create User**

**POST**

```
http://localhost:5000/api/users
```

**Body JSON:**

```json
{
  "nama": "Asuna",
  "email": "asuna@example.com",
  "kota": "Kyoto",
  "bukuDipinjam": {
    "id": 3,
    "nama": "Spy x Family"
  }
}
```

---

## **5. Update User**

**PUT**

```
http://localhost:5000/api/users/2
```

**Body JSON:**

```json
{
  "nama": "Hina Yukimura",
  "bukuDipinjam": {
    "nama": "Oregairu"
  }
}
```

---

## **6. Delete User**

**DELETE**

```
http://localhost:5000/api/users/1
```

---