# 📚 MongoDB 

These 5 questions test core MongoDB skills:

* Creating databases \& collections
* Importing JSON documents
* Basic CRUD (Create, Read, Update, Delete)
* Simple filters, projections, sorting, and updates

All examples assume usage of `mongosh` with an Atlas or local instance.

\---

## 📝 Question 1: Student Portal — Courses \& Enrollments

### Scenario

A college wants to store student and course data in MongoDB. You are asked to set up the basic structure and run queries to help the admin.

### Database Name

`college\_portal`

### Collections

* `students`
* `courses`

### Starter Data (Insert with `insertMany`)

**students**

```js
use college\_portal

db.students.insertMany(\[
  {
    "\_id": 1,
    "name": "Ali Khan",
    "age": 19,
    "program": "Computer Science",
    "year": 1,
    "city": "Toronto"
  },
  {
    "\_id": 2,
    "name": "Sara Ahmed",
    "age": 21,
    "program": "Business Management",
    "year": 3,
    "city": "Mississauga"
  },
  {
    "\_id": 3,
    "name": "John Lee",
    "age": 20,
    "program": "Computer Science",
    "year": 2,
    "city": "Toronto"
  },
  {
    "\_id": 4,
    "name": "Maria Gomez",
    "age": 22,
    "program": "Data Science",
    "year": 4,
    "city": "Brampton"
  }
])
```

**courses**

```js
db.courses.insertMany(\[
  {
    "\_id": "CS101",
    "title": "Intro to Programming",
    "credits": 3,
    "department": "Computer Science"
  },
  {
    "\_id": "CS201",
    "title": "Data Structures",
    "credits": 4,
    "department": "Computer Science"
  },
  {
    "\_id": "BUS101",
    "title": "Principles of Marketing",
    "credits": 3,
    "department": "Business"
  }
])
```

### Tasks

1. List all databases, then switch to `college\_portal`.
2. Display all collections in this DB.
3. Show all students.
4. Find all **Computer Science** students.
5. Find students from **Toronto** who are in **year 2 or above**.
6. Add a new student in the `students` collection (any realistic data).
7. Update **Ali Khan** to set a new field: `"isScholarship": true`.
8. Delete one student record where `program` is `"Business Management"`.
9. Find all courses with `credits >= 3`.
10. Delete the `courses` collection (for testing) and then reinsert it.

\---

## 🛒 Question 2: Online Store — Products \& Orders

### Scenario

You are building a mini e-commerce backend to track products and customer orders.

### Database Name

`online\_store`

### Collections

* `products`
* `orders`

### Starter Data

**products**

```js
use online\_store

db.products.insertMany(\[
  {
    "\_id": 101,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 25.99,
    "inStock": 120
  },
  {
    "\_id": 102,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 79.99,
    "inStock": 45
  },
  {
    "\_id": 103,
    "name": "Water Bottle",
    "category": "Home \& Kitchen",
    "price": 12.5,
    "inStock": 200
  },
  {
    "\_id": 104,
    "name": "Notebook",
    "category": "Stationery",
    "price": 4.99,
    "inStock": 500
  }
])
```

**orders**

```js
db.orders.insertMany(\[
  {
    "\_id": 1,
    "customerName": "Ahmad Farooq",
    "items": \[
      { "productId": 101, "qty": 2 },
      { "productId": 104, "qty": 5 }
    ],
    "totalAmount": 2 \* 25.99 + 5 \* 4.99,
    "status": "Pending"
  },
  {
    "\_id": 2,
    "customerName": "Emily Clark",
    "items": \[
      { "productId": 102, "qty": 1 }
    ],
    "totalAmount": 79.99,
    "status": "Shipped"
  },
  {
    "\_id": 3,
    "customerName": "Ali Khan",
    "items": \[
      { "productId": 103, "qty": 3 },
      { "productId": 104, "qty": 2 }
    ],
    "totalAmount": 3 \* 12.5 + 2 \* 4.99,
    "status": "Delivered"
  }
])
```

### Tasks

1. Show all products.
2. Find all products in the **Electronics** category.
3. Find all products with `price > 20`.
4. Insert a new product: `"USB-C Cable"` with a price and stock count.
5. Update the stock of `"Wireless Mouse"` to reduce `inStock` by 10.
6. Change order with `\_id: 1` status from `"Pending"` to `"Shipped"`.
7. Find all orders where `status` is `"Shipped"`.
8. Delete one product from `Stationery` category.
9. Delete all orders with `status: "Delivered"` (simulate cleanup).

\---

## 📚 Question 3: Library System — Books \& Members

### Scenario

A local library wants to store books and member records in MongoDB.

### Database Name

`city\_library`

### Collections

* `books`
* `members`

### Starter Data

**books**

```js
use city\_library

db.books.insertMany(\[
  {
    "\_id": "B001",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "availableCopies": 3
  },
  {
    "\_id": "B002",
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-help",
    "availableCopies": 5
  },
  {
    "\_id": "B003",
    "title": "1984",
    "author": "George Orwell",
    "genre": "Fiction",
    "availableCopies": 2
  }
])
```

**members**

```js
db.members.insertMany(\[
  {
    "\_id": 1,
    "name": "Omar Siddiqui",
    "city": "Toronto",
    "isActive": true
  },
  {
    "\_id": 2,
    "name": "Lisa Wong",
    "city": "Hamilton",
    "isActive": true
  },
  {
    "\_id": 3,
    "name": "Mark Brown",
    "city": "Toronto",
    "isActive": false
  }
])
```

### Tasks

1. Find all books in the `Programming` genre.
2. Find all active members from `Toronto`.
3. Add a new book and a new member.
4. Update `"Atomic Habits"` to increase `availableCopies` by 2.
5. Mark `"Mark Brown"` as `isActive: true`.
6. Delete a book that has `availableCopies: 0` (assume you set one to 0 first).
7. Show only `title` and `author` for all books (projection).
8. Drop the `members` collection and recreate it (to practice).

\---

## 🎬 Question 4: Movie Review App — Movies \& Ratings

### Scenario

You are designing a simple movie review backend for a web app.

### Database Name

`movie\_review\_app`

### Collections

* `movies`
* `reviews`

### Starter Data

**movies**

```js
use movie\_review\_app

db.movies.insertMany(\[
  {
    "\_id": 1001,
    "title": "Inception",
    "year": 2010,
    "genre": \["Sci-Fi", "Thriller"],
    "rating": 8.8
  },
  {
    "\_id": 1002,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": \["Action", "Crime"],
    "rating": 9.0
  },
  {
    "\_id": 1003,
    "title": "Interstellar",
    "year": 2014,
    "genre": \["Sci-Fi", "Drama"],
    "rating": 8.6
  }
])
```

**reviews**

```js
db.reviews.insertMany(\[
  {
    "\_id": 1,
    "movieId": 1001,
    "user": "Ali",
    "comment": "Mind-blowing visuals and story!",
    "stars": 5
  },
  {
    "\_id": 2,
    "movieId": 1002,
    "user": "Sara",
    "comment": "Best superhero movie ever.",
    "stars": 5
  },
  {
    "\_id": 3,
    "movieId": 1003,
    "user": "John",
    "comment": "Emotional and visually stunning.",
    "stars": 4
  }
])
```

### Tasks

1. Find all movies released after 2010.
2. Find all movies that have `"Sci-Fi"` in their `genre` array.
3. Insert a new movie and at least one review for it.
4. Update a review to change its `stars` rating.
5. Find all reviews for `"Inception"` (hint: match `movieId`).
6. Delete all reviews with `stars` less than 3 (simulate spam cleanup).
7. Update a movie’s `rating` based on average of its reviews (calculate manually for now).

\---

## ✈️ Question 5: Travel Planner — Trips \& Bookings

### Scenario

A startup is building a travel planner. You need to store trips and user bookings.

### Database Name

`travel\_planner`

### Collections

* `trips`
* `bookings`

### Starter Data

**trips**

```js
use travel\_planner

db.trips.insertMany(\[
  {
    "\_id": "T001",
    "destination": "Dubai",
    "days": 7,
    "pricePerPerson": 950,
    "season": "Winter"
  },
  {
    "\_id": "T002",
    "destination": "Istanbul",
    "days": 5,
    "pricePerPerson": 700,
    "season": "Spring"
  },
  {
    "\_id": "T003",
    "destination": "Paris",
    "days": 6,
    "pricePerPerson": 1200,
    "season": "Summer"
  }
])
```

**bookings**

```js
db.bookings.insertMany(\[
  {
    "\_id": 1,
    "customerName": "Sana Khan",
    "tripId": "T001",
    "persons": 2,
    "totalCost": 2 \* 950,
    "status": "Confirmed"
  },
  {
    "\_id": 2,
    "customerName": "Ahmed Ali",
    "tripId": "T002",
    "persons": 3,
    "totalCost": 3 \* 700,
    "status": "Pending"
  },
  {
    "\_id": 3,
    "customerName": "David Miller",
    "tripId": "T003",
    "persons": 1,
    "totalCost": 1200,
    "status": "Cancelled"
  }
])
```

### Tasks

1. Find all trips with `pricePerPerson < 1000`.
2. Find all bookings with `status: "Confirmed"`.
3. Insert a new trip and a booking for that trip.
4. Update booking `\_id: 2` to change `status` from `"Pending"` to `"Confirmed"`.
5. Increase the `pricePerPerson` for `"Paris"` trip by 100.
6. Delete all bookings with `status: "Cancelled"`.
7. Delete one specific trip (e.g., `"T002"`) and then check how many bookings still reference it (data consistency awareness).

\---

