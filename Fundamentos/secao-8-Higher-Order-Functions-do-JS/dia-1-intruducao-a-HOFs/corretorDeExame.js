const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const finalScore = (right,student) => {
  let score = 0;
  for (let index = 0; index < student.length; index += 1){
    if (student[index] !== "N.A") {
      student[index] === right[index] ? score += 1 : score -= 0.5;
    }
  }
  return score;
}

const compareScore = (right, student, notaFinal) => {
return `A nota final é ${notaFinal(right, student)}.`;  
}
console.log(compareScore(RIGHT_ANSWERS, STUDENT_ANSWERS, finalScore));

