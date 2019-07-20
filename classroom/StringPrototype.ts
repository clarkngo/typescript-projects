function course(id:number,program:string) {
  this.id = id
  this.program = program
}
var crs = new course(519,"CS")
course.prototype.title="Intro to Cloud Computing"
console.log("Course 's Id: "+crs.id)
console.log("Course's program: "+crs.program)
console.log("Course's title: "+crs.title)
