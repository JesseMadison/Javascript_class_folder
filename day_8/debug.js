const students = ["Mary","Long","Jesse","Andrew","Arthur","Allen"];

const instructors = ["Nands","Alex","Bianca","Saad","Jamie"];

const intro = (name) =>  {
  console.log(`hi ${name}`);
}
for (let student of students){
  intro(student);
}
for (let teacher of instructors) {
  intro(teacher);
}
