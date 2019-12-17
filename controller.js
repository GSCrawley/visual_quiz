
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
		 
const data = {
	"quizlist":[
    {
	"question":"Which of these photos depicts a character played by David Bowie in a film?",
    "option1":"static/labyrinthbowie.jpg",
    "option2":"static/ladystardust.jpg",
    "option3":"static/bowie_low.jpg"
    },
    {
    "question":"Who is oldest among Keith Richards, Mick Jagger, and Alice Cooper?",
    "option1":"static/mickj.jpg",
    "option2":"static/KeithRichards.jpg",
    "option3":"static/AliceCooper.jpg"
    },
    {
    "question":"Which of these artists are still alive?",
    "option1":"static/Ozzy1.jpg",
    "option2":"static/Morrisson.jpg",
    "option3":"static/Jimi.jpg"
	},
	{
	"question":"Which of these frontwomen sang for the band Blondie?",
	"option1":"static/DebbieHarry.jpg",
	"option2":"static/Madonna.jpeg",
	"option3":"static/pink.jpeg"
	}
	]
}


for(let i=0; i < data.quizlist.length; i++){ 
	questionBank[i]=new Array;
	questionBank[i][0]=data.quizlist[i].question;
	questionBank[i][1]=data.quizlist[i].option1;
	questionBank[i][2]=data.quizlist[i].option2;
	questionBank[i][3]=data.quizlist[i].option3;
}

numberOfQuestions=questionBank.length; 
	
displayQuestion();

 
fillDB();

function displayQuestion(){
	var rnd=Math.random()*4;
	rnd=Math.ceil(rnd);
	var q1;
	var q2;
	var q3;
	var q4;


	if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
	if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q4=questionBank[questionNumber][3];q1=questionBank[questionNumber][4];}
	if(rnd==3){q3=questionBank[questionNumber][1];q4=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];}
	if(rnd==4){q4=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q3=questionBank[questionNumber][4];}


	$(stage).append(`
		<div class="questionText">${questionBank[questionNumber][0]}</div>
		<div id="1" class="pix">
			<img src="${q1}">
		</div>
		<div id="2" class="pix">
			<img src="${q2}">
		</div>
		<div id="3" class="pix">
			<img src="${q3}">
		</div>
		`);

 $('.pix').click(function(){
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){
   $(stage).append('<div class="feedback1">CORRECT</div>');
   score++;
   }
  //wrong answer	
  if(this.id!=rnd){
   $(stage).append('<div class="feedback2">WRONG</div>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}//display question

	
	function changeQuestion(){
		
		questionNumber++;
	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		
	}//display final slide
	
	