//object Destructuring and api

const course={
    coursename:"js hindi",
    price:"999",
    courseInstructor:"hitesh",
}
//course.courseInstructor

const{ courseInstructor,price:rup,coursename}=course;
console.log(courseInstructor);
console.log(rup);


