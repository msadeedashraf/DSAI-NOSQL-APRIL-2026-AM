Section A – Insert Tasks
Task 0

Import the student_level2.json using the mongoimport

Task 1

Insert one new student manually using insertOne().

Conditions:

must include studentId
must include skills array
must include address object
must include at least 2 course objects
db.students.insertOne(
{
    "studentId": 106,
    "name": "Mark Anash",
    "age": 21,
    "department": "Data Science",
    "skills": ["Python", "MongoDB", "Pandas"],
    "address": {
      "city": "Hamilton",
      "province": "Ontario"
    },
    "courses": [
      { "code": "DST201", "title": "Data Analysis", "marks": 84 },
      { "code": "DBM102", "title": "NoSQL Databases", "marks": 87 }
    ],
    "isActive": true
  }

)

Task 2

Insert two more students using insertMany().

db.students.insertMany(
    [
{
    "studentId": 107,
    "name": "David Carl",
    "age": 20,
    "department": "Computer Science",
    "skills": ["Java", "SQL", "Python","MongoDB"],
    "address": {
      "city": "Toronto",
      "province": "Ontario"
    },
    "courses": [
      { "code": "CST101", "title": "Database Fundamentals", "marks": 80 },
      { "code": "DBM102", "title": "NoSQL Databases", "marks": 76 }
    ],
    "isActive": true
  },
  {
    "studentId": 108,
    "name": "Jamie Carter",
    "age": 22,
    "department": "Business Analytics",
    "skills": ["Excel", "Power BI", "Tableau"],
    "address": {
      "city": "Mississauga",
      "province": "Ontario"
    },
    "courses": [
      { "code": "BUS201", "title": "Business Intelligence", "marks": 90 },
      { "code": "CST101", "title": "Database Fundamentals", "marks": 85 },
      { "code": "ANA202", "title": "Data Visualization", "marks": 86 }
    ],
    "isActive": true
  },
  {
    "studentId": 109,
    "name": "Allan Smith",
    "age": 24,
    "department": "Information Technology",
    "skills": ["Linux", "Networking", "Cyber Security"],
    "address": {
      "city": "Hamilton",
      "province": "Ontario"
    },
    "courses": [
      { "code": "NET101", "title": "Networking Basics", "marks": 72 },
      { "code": "SEC102", "title": "Cyber Security", "marks": 81 }
    ],
    "isActive": false
  }

    ]

)

Section B – Basic Query Tasks
Task 3

Show all students.

db.students.find()

Task 4

Show only the name and department of all students.

db.students.find({},{name:1, department:1,_id:0})

Task 5

Find all active students.

db.students.find({isActive:true})

find the name of the active students
db.students.find({isActive:true},{name:1, _id:0})

Task 6

Find all students from Computer Science department.
db.students.find({department: "Computer Science"},{name:1, _id:0})

Task 7

Find students whose age is greater than 20.
[MongoDB Query Operators](https://www.w3schools.com/mongodb/mongodb_query_operators.php)

db.students.find({age : {$gt:20} }, {name:1, _id:0})

Task 8

Find students living in Toronto.

db.students.find({"address.city": "Toronto"},{name:1, _id:0})


Section C – Array and Nested Object Queries
Task 9

Find students who have SQL as a skill.

db.students.find({skills:"SQL"  }, {name:1, _id:0})

Task 10

Find students who are taking a course with code DBM102.

db.students.find({"courses.code":"BUS201" }, {name:1, _id:0})

Task 11

Find students whose one of the course marks is greater than 90.

db.students.find({"courses.marks": {$gt:90}  }, {name:1 , _id:0})

Task 12

Display only student name and city.

 db.students.find({}, {name:1, "address.city":1 , _id:0})
 db.students.find({}, {name:1, "address.city":1,"address.province":1, _id:0})


Section D – Update Tasks
Task 13

Update one student’s age.

db.students.find({studentId:103},{name:1,age:1,  _id:0})
db.students.updateOne({studentId:103},{$set:{age:26}})


Task 14

Add a new skill to Ali Khan using $push.

db.students.find({name:"Ali Khan"},{studentId:1, name:1,skills:1,  _id:0})
db.students.updateOne({studentId:101},{$push:{skills:"HTML"}})

Task 15

Change the city of one student.

Task 16

Update isActive to false for one student.

Task 17

Increase marks of one course by 5 for a chosen student.

This one is where weak students break. Good. Let them wrestle with nested arrays a bit.

Section E – Delete Tasks
Task 18

Delete one student by studentId.

Task 19

Delete all inactive students.