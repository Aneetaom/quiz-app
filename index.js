

var questions = ["what is js ?", "css stand for?", "HTML stands for ?"];
 var answers = [
    "Programming Language",
   "Cascading Style Sheet",
    "Hyper Text Markup Language",
 ];
  var score =0;

 var userAns = prompt(questions);

  var i;
  for (i = 0; i <= questions.length - 1; i++) {
    var userAns = prompt(questions[i]);

    for (var j = 0; j <= answers.length - 1; j++) {
      if (i === j && userAns === answers[j]) {
          // alert("Correct")
          score++;
         
      }
    }
  }

  alert("Your Total Score: " + score)

  if(flag === false){
    document.write(`
     <center><h1 class="display-6 text-light text-capitalize mt-5">You need to provide valid <br> answer in order to proceed </h1>
      <img src="./assetes/invalid.png" class="w-25 mt-5" alt=""></center>
      `)
  }