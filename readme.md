
# 🧠 MongoDB 101 — Beginner’s Hands-On Tutorial

## 🎯 Learning Goals
By the end of this tutorial, you’ll be able to:
- Understand what MongoDB is and how it stores data  
- Set up MongoDB using **Atlas Cloud**, **Compass GUI**, and **Mongo Shell**  
- Create your first **database**, **collections**, and **documents**  
- Perform **CRUD** operations (Create, Read, Update, Delete)  
- Learn essential MongoDB commands for beginners  

## MongoDB W3School 
- [Study Ref](https://www.w3schools.com/mongodb/index.php)

---

## 🧩 1. What Is MongoDB?

MongoDB is a **NoSQL database** — it stores data in **documents (JSON-like format)** instead of traditional tables.

Example document:

```json
{
  "name": "Alex",
  "age": 35,
  "city": "Toronto"
}
```

- A **Database** is like a folder.  
- A **Collection** is like a table inside that folder.  
- A **Document** is like a record or row (but in JSON form).

---

## ☁️ 2. Setup MongoDB Atlas (Cloud)

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **Sign Up** (use Google or Email)
3. Create a **Free Cluster (Shared Tier)**
   - Choose provider: *AWS / Azure / GCP*
   - Region: pick one near you (e.g., *Canada East*)
4. Under **Database Access → Add New Database User**
   - Username: `student`
   - Password: `Pass1234` (for demo)
5. Under **Network Access → Add IP Address**
   - Choose **Allow access from anywhere (0.0.0.0/0)** for now
6. Once cluster is ready → click **Connect → Connect using MongoDB Compass**

---

## 🖥️ 3. Setup MongoDB Compass (GUI Tool)

1. Download Compass: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
2. Open Compass → paste your **Atlas connection string**, e.g.:

   ```
   mongodb+srv://student:Pass1234@cluster0.mongodb.net/
   ```

   💡 If your password has symbols, encode them like `%40` for `@`.

3. Click **Connect** → you’ll see your celuster and databases.

---

## 💻 4. Download the Server

1. Install 
   [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   


## 💻 5. Setup MongoDB Shell (mongosh)

1. Install Mongo Shell (if not included with Compass):  
   [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)
   - Select MSI not the zip
   ![Download](/Assets/mongodb_download.png)
   


2. Open terminal and connect:

   ```bash
   mongosh "mongodb+srv://student:Pass1234@cluster0.mongodb.net/"
   ```

3. You are now connected!  
   The prompt looks like:
   ```
   Atlas test>
   ```

---


## 🧱 6. Creating Your First Database & Collection

In MongoDB, a database and collection are **created automatically** when you insert your first document.

Example:

```js
use school       // Switch to (or create) a database named "school"

db.students.insertOne({
  name: "Alex",
  age: 14,
  grade: "8th",
  city: "Toronto"
})
```

Output:

```
{ acknowledged: true, insertedId: ObjectId("...") }
```

Now your database **school** and collection **students** exist!

---

## 🔍 7. Reading (Querying) Data

### Find all documents
```js
db.students.find()
```

### Find one document
```js
db.students.findOne()
```

### Filter results
```js
db.students.find({ city: "Toronto" })
```

### Format results nicely
```js
db.students.find().pretty()
```
---

## ➕ 8. Intersting Data

### insertOne (Manual – mongosh)
```
db.students.insertOne({
  name: "Ali",
  age: 20,
  course: "MongoDB",
  skills: ["SQL", "Python"]
})
```

### insertMany (Manual – mongosh)

```
db.students.insertMany([
  {
    name: "Ali",
    age: 20,
    course: "MongoDB",
    skills: ["SQL", "Python"]
  },
  {
    name: "Sara",
    age: 22,
    course: "Data Science",
    skills: ["Python", "Pandas"]
  },
  {
    name: "John",
    age: 21,
    course: "Web Dev",
    skills: ["HTML", "CSS", "JS"]
  }
])
```
👉 Key rule:
 - insertOne → single { }
 - insertMany → array [ { }, { } ]

### Importing Data 

- How to [setup](/mongoimport_setup.md)

- On the terminal
```
mongoimport --db school --collection students --file students.json --jsonArray
```

Breakdown:
 - db school → database
 - collection students → collection
 - file → your JSON file
 - jsonArray → because your file is [ {...}, {...} ]
 
---

## ✏️ 9. Updating Documents

### Update one
```js
db.students.updateOne(
  { name: "Alex" },
  { $set: { grade: "9th" } }
)
```

### Update many
```js
db.students.updateMany(
  { city: "Toronto" },
  { $set: { country: "Canada" } }
)
```

---

## ❌ 10. Deleting Documents

### Delete one
```js
db.students.deleteOne({ name: "Alex" })
```

### Delete many
```js
db.students.deleteMany({ city: "Toronto" })
```

---

## 📚 11. Useful Commands

| Action | Command |
|--------|----------|
| Show all databases | `show dbs` |
| Use a database | `use school` |
| Show all collections | `show collections` |
| View current database | `db` |
| Drop (delete) database | `db.dropDatabase()` |
| Drop collection | `db.students.drop()` |

---


## MongoDB Command Line Database Tools Download

[CLI Tools](https://www.mongodb.com/try/download/database-tools)

---

[Monkey Json Data](https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json)