var questionNumber=0;
var questionBank=new Array([]);
var stage="#game1";
var stage2=new Object({});
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
	"option3":"static/pink.jpg"
	},
	{
	"question":"Which of these women sang for the band The Runaways?",
	"option1":"static/JoanJett.jpg",
	"option2":"static/stevie.jpg",
	"option3":"static/Tori.jpg"
	},
	{
	"question":"Which of these artists released the most studio albums throughout their career",
	"option1":"static/prince.jpg",
	"option2":"static/robert.jpg",
	"option3":"static/90sbowie.jpg"
	}
	]
};


for(let i=0; i < data.quizlist.length; i++){ 
	questionBank[i]=new Array([]);
	questionBank[i][0]=data.quizlist[i].question;
	questionBank[i][1]=data.quizlist[i].option1;
	questionBank[i][2]=data.quizlist[i].option2;
	questionBank[i][3]=data.quizlist[i].option3;
}

numberOfQuestions=questionBank.length; 
	
displayQuestion();

// fillDB();

function displayQuestion(){
	var rnd=Math.random()*3;
	rnd=Math.ceil(rnd);
	var a1;
	var a2;
	var a3;
	var correct;

	if(rnd==1){a1=questionBank[questionNumber][1];a2=questionBank[questionNumber][2];a3=questionBank[questionNumber][3];correct=1}
	if(rnd==2){a1=questionBank[questionNumber][2];a2=questionBank[questionNumber][3];a3=questionBank[questionNumber][1];correct=3}
	if(rnd==3){a1=questionBank[questionNumber][3];a2=questionBank[questionNumber][1];a3=questionBank[questionNumber][2];correct=2}                     


	$(stage).append(`
		<div class="questionText">${questionBank[questionNumber][0]}</div>
		<div id="1" class="pix">
			<img src="${a1}">
		</div>
		<div id="2" class="pix">
			<img src="${a2}">
		</div>
		<div id="3" class="pix">
			<img src="${a3}">
		</div>
		`);

 $('.pix').click(function(){
	console.log(this.id)
	console.log(rnd)
  if(questionLock==false){questionLock=true};	
  //correct answer
  

  if(this.id==correct){
   $(stage).append('<div class="feedback1">CORRECT</div>');
   score++;
   }
  //wrong answer	
  if(this.id!=correct){
   $(stage).append('<div class="feedback2">WRONG</div>');
  }
  setTimeout(function(){changeQuestion();},1000);
 });
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
	
	