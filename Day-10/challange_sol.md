🔹 Challenge 10
Find students who have BOTH "Python" AND "SQL" as skills

db.students.find({ skills : {$all : ["SQL","Python"]}   }, {name:1, skills:1, _id:0})


🔹 Challenge 11
Find students who have at least one course with marks between 80 and 90

db.students.find({  "courses.marks": {$gte:80, $lte:90}   },{name:1, courses:1, _id:0})

db.students.find({ courses: { $elemMatch : { marks: {$gte:80 , $lte:90}  }  }  },{name:1, courses:1, _id:0})



🔹 Challenge 12
Find students who have taken BOTH courses:
"CST101"
"DBM102"

db.students.find({"courses.code": {$all: ["CST101","DBM102"]}  }, {name:1, courses:1, _id:0})

🔹 Challenge 13
Find students who have NO course below 75

db.students.find({courses: { $not:{   $elemMatch:{marks:{$lte:75}} }    }    },{name:1, courses:1, _id:0})

🔹 Challenge 14
Count how many courses each student has
 
 
db.students.find({}, {name:1, totalcourses: {$size:"$courses"}  ,  _id:0})


👉 Output:

name
totalCourses

🔹 Challenge 15
Find the average marks of all courses across all students

 db.students.aggregate([{$unwind:"$courses"}, { $group : { _id:"$name" , averageMarks: { $avg:"$courses.marks"}   }    }  ])

 db.students.aggregate([{$unwind:"$courses"}, { $group : { _id:"$studentId" , averageMarks: { $avg:"$courses.marks"}   }    }, {$sort: {_id:-1}}  ])

--Grouping Multiple Column
db.students.aggregate([ { $group: {  _id : { departments: "$department", city:"$address.city"  }, totalStudents: {$sum:1}    }  }  ])


🔹 Challenge 16
Find the highest marks scored in any course (global max)

db.students.aggregate([{$unwind:"$courses"}, { $group: { _id:null, maxMarks: {$max:"$courses.marks"}   } }])
[ { _id: null, maxMarks: 95 } ]

🔹 Challenge 17
Find students who scored more than 85 in ALL courses

db.students.find({ courses: { $not : { $elemMatch:{ marks : {$lte:85}}   }   }    } , {name:1, courses:1, _id:0}  )

🔹 Challenge 18
Find students and display only:

name
city
total number of skills

db.students.aggregate([{ $project: { _id:0, name:1, city: "$address.city", totalSkills: {$size: "$skills"} }    }])


🔹 Challenge 19
Find how many students are in each department

👉 Output:

department
count

db.students.aggregate([ { $group: {  _id :"$department", totalStudents: {$sum:1}    }  }  ]  )

--after sorting
db.students.aggregate([ { $group: {  _id :"$department", totalStudents: {$sum:1}    }  }  , {$sort: {_id:-1}}  ]  )
