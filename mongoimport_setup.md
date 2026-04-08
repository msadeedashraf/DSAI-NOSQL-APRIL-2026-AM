# 🧰 Installing mongoimport (Windows Setup Guide)

## 📌 Overview
`mongoimport` is part of MongoDB Database Tools and is used to import JSON/CSV data into MongoDB.

> ⚠️ Important: It is NOT included automatically with MongoDB Server in newer versions.

---

# 🚀 Step 1 — Download MongoDB Database Tools

Go to the official download page:  
https://www.mongodb.com/try/download/database-tools

### Select:
- Platform: Windows
- Package: ZIP

Download the file.

---

# 📦 Step 2 — Extract the Files

Unzip the downloaded file.

You will get a folder like:

mongodb-database-tools-windows-x86_64-100.x.x

Inside it, navigate to:

bin/
   mongoimport.exe
   mongoexport.exe
   mongodump.exe

---

# ⚡ Step 3 — Move to a Clean Location

Move the bin folder to a simple path:

C:\mongodb-tools\bin

---

# 🧠 Step 4 — Add to System PATH (IMPORTANT)

This allows you to run mongoimport from anywhere.

## Steps:
1. Search for Environment Variables
2. Click Edit the system environment variables
3. Click Environment Variables
4. Under System Variables, find Path
5. Click Edit
6. Click New and add:

C:\mongodb-tools\bin

7. Click OK to save  
8. Restart your terminal  

---

# ✅ Step 5 — Verify Installation

Open a new Command Prompt and run:

mongoimport --version

If it shows a version → setup is successful

---


---

# 🎯 Step 6 — Import JSON Data

create if not present students.json
```
[
  {
    "name": "Ali",
    "age": 20,
    "course": "MongoDB",
    "skills": ["SQL", "Python"]
  },
  {
    "name": "Sara",
    "age": 22,
    "course": "Data Science",
    "skills": ["Python", "Pandas"]
  },
  {
    "name": "John",
    "age": 21,
    "course": "Web Dev",
    "skills": ["HTML", "CSS", "JS"]
  }
]
```


Run:
```
mongoimport --db school --collection students --file students.json --jsonArray
```
---

# ⚠️ Common Mistakes

- Running mongoimport inside mongosh  
- Forgetting to add PATH  
- Not restarting terminal  
- Wrong file path  
- Using --jsonArray on non-array JSON  

---

# 💡 Key Concept

| Tool | Purpose |
|------|--------|
| mongosh | Query and interact with database |
| mongoimport | Import external data |
| MongoDB Server | Stores data |

---
