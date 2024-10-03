function computeQuizzes() {
   //1. Assign the variable q1 to store the values entered by the user
  //2. Assign the variable q2 to store the values entered by the user
  //3. Assign the variable q3 to store the values entered by the user
  let q1 = parseFloat(document.getElementById("qRange1").value) || 0;
  let q2 = parseFloat(document.getElementById("qRange2").value) || 0;
  let q3 = parseFloat(document.getElementById("qRange3").value) || 0;
  //4. Create the formula to get the totalQuizzes grade
  let totalQuizzes = q1 + q2 + q3 / 3;
  document.getElementById("totalQuizzes").value = totalQuizzes.toFixed(2);
  let totalQuizzesWeighted = totalQuizzes * 0.2;
  // I assume you want to display the weighted totalQuizzes in another input field
  document.getElementById("totalQuizzesWeighted").value = totalQuizzes.toFixed(2);
  //5. No missing code needed here anymore
}

function computePTasks() {
    //6. Assign the variable pt1 to store the value entered by the user
  //7. Assign the variable pt2 to store the value entered by the user
  //8. Assign the variable pt3 to store the value entered by the user
  let pt1 = parseFloat(document.getElementById("ptRange1").value) || 0;
  let pt2 = parseFloat(document.getElementById("ptRange2").value) || 0;
  let pt3 = parseFloat(document.getElementById("ptRange3").value) || 0;
  //9. Create the formula to get the Performance Task grade
  let totalPTasks = pt1 + pt2 + pt3 / 3;
  document.getElementById("totalPTasks").value = totalPTasks.toFixed(2);
  let totalPTasksWeighted = totalPTasks * 0.6;
  // I assume you want to display the weighted totalPTasks in another input field
  document.getElementById("totalPTasksWeighted").value = totalPTasksWeighted.toFixed(2);
    //10. No missing code needed here, the quiz is displayed above
}

function getExam() {
  let exam = parseFloat(document.getElementById("chkExam").value) || 0;
  document.getElementById("chkExamResult").value = exam.toFixed(2);
  const examTotal = 100; // Assuming exam total is 100
  const examWeighted = exam * (examTotal * 0.2 / 100);
  document.getElementById("txtPercentage").value = examWeighted.toFixed(2);
}


function computeGrade() {
  let quizzes = parseFloat(document.getElementById("totalQuizzes").value) || 0;
  let pTasks = parseFloat(document.getElementById("totalPTasks").value) || 0;
  let exam = parseFloat(document.getElementById("txtPercentage").value) || 0;

  let quizWeight = 0.20; // 20%
  let pTaskWeight = 0.60; // 60%
  let examWeight = 0.20; // 20%

  let finalGrade = (quizzes * quizWeight) + (pTasks * pTaskWeight) + (exam * examWeight);
  document.getElementById("txtGrade").value = finalGrade.toFixed(2);
}