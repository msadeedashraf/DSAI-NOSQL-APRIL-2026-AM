### Challenge 1

Find students who have both:

skill = "Python"
department = "Data Science"

db.students.find({department:"Data Science",skills:"Python"},{name:1, department:1, skills:1 ,_id:0})

### Challenge 2

Find students whose marks are less than 70 in any course.

db.students.find({"courses.marks":{$lt:80}},{name:1, courses:1, _id:0})

### Challenge 3

Find students with more than 3 skills.

find count in the skills array
db.students.find({},{name:1,skillsCount:{$size : "$skills"} ,  _id:0})

students with 3 skills
db.students.find({skills:{$size:3}},{name:1, _id:0})

Find students with more than 3 skills.
db.students.find({ $expr:{$gt:[{$size:"$skills"},3]} },{name:1, _id:0})

### Challenge 4

Find all students sorted by age in descending order.

db.students.find().sort({age:-1})

### Challenge 5

Show only the first matching student from Computer Science.

db.students.findOne({department:"Computer Science"})

### Challenge 6

Count how many active students exist.

db.students.countDocuments({isActive:true})

### Challenge 7

Count how many students are from Hamilton
 
db.students.countDocuments({"address.city":"Hamilton"})

### Challenge 8
Get the studnets who regestered in 3 two courses
db.students.find({courses:{$size:3}}, {name:1, courses:1 ,  _id:0})

Get the studnets who regestered in more than 2 two courses
db.students.find( { $expr:{$gt:[{$size:"$courses"},2]}  }  , {name:1, courses:1 ,  _id:0})
--- 

### Challenge 9 
Count only the courses where the marks are greater than 70

get the students who scored more than 90 in any course.

get the students who scored 90 in all the course.


## Mini Case Study

### Scenario

A college wants to store student data in MongoDB because:

- students have different numbers of skills
- students may take different numbers of courses
- each student has nested address information
- flexible structure is preferred over strict tables

Student Discussion Questions

- Why is MongoDB a good fit for this data?
- What part of this data is nested?
- What part is stored as an array?
- How would this look more complicated in a relational database?
- When would SQL still be better?

submit:

- screenshot of insertOne()
- screenshot of insertMany()
- screenshot of imported JSON file
- screenshots of at least 6 query results
- screenshots of 3 update operations
- screenshots of delete operations
- short paragraph answering the case study questions