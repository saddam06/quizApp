const quizDB=[
    {
  question:"The blue colour of the clear sky is due to",
  choice1:"Diffraction of light",
  choice2:"Reflection of light",
  choice3:"Dispersion of light",
  choice4:"Refraction of light",
  answer: "option1"
  },
 {
  question:"The first computer was programmed using ",
  choice1:"Assembly language",
  choice2:"Machine language",
  choice3:"Spaghetti code",
  choice4:"Source code",
  answer: "option2"
  },
 {
  question:"The hottest planet in the solar system?",
  choice1:"mercury",
  choice2:"venus",
  choice3:"Mars",
  choice4:"jupiter",
  answer:"option2"
},
{
question:"Which of the following is not a nuclear power center?",
choice1:"Narora",
choice2:"Kota",
choice3:"Chamera",
choice4:"Kakrapara",
answer:"option3"
},
{
question:"Glass is a-",
choice1:"superheated solid",
choice2:"supercooled liquid",
choice3:"supercooled gas",
choice4:"superheated liquid",
answer:"option2"
},
{
question:"A _______ is a software program used to view Web pages.",
choice1:"site",
choice2:"host",
choice3:"link",
choice4:"browser",
answer:"option4"
},
{
question:"The weight of an object will be minimum when it is placed at",
choice1:"The North Pole",
choice2:"The South Pole",
choice3:"The Equator",
choice4:"The center of the Earth",
answer:"option4"
},
{
question:"The first Indian to share the Oscar award was",
choice1:"Hargobind Khurana",
choice2:"Rabindranath Tagore",
choice3:"Bhanu Athaiya",
choice4:"None of these",
answer:"option3"
},
{
question:"In fireworks, the green flame is produced because of",
choice1:"Sodium",
choice2:"Potassium",
choice3:"Barium",
choice4:"Mercury",
answer :"option3"
},
{
question:"MS-Word is an example of",
choice1:"An operating system",
choice2:"A processing device",
choice3:"Application software",
choice4:"An input device",
answer:"option3"
},
{
question:"Generic is most similar in meaning to",
choice1:"Branded",
choice2:"Basic",
choice3:"Trademarked",
choice4:"Specific",
answer:"option2"
},
{
question:"In which of the following festivals are boat races a special feature in India?",
choice1:"Rongali Bihu",
choice2:"Onam",
choice3:"Pongal",
choice4:"Navratr",
answer:"option2"
},
{
question:"Who among the following is not a recipient of Bharat Ratna",
choice1:"Dr. S. Radhakrishnan",
choice2:"Sardar Vallabhbhai Patel",
choice3:"Mrs. Indira Gandhi",
choice4:"Lal Bahadur Shastri",
answer:"option2"
}
]


var question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")
var next=document.getElementById("next")
// var submit=document.getElementById("submit")
const score1=document.getElementById("totalscore")
const question1=document.getElementById("question1")
const submit1=document.getElementById("submit")

var value=0
var score=0
var question2=1


   

   option1.addEventListener("click",function(){
    if(option1.id==quizDB[value].answer){
         
         option1.style.backgroundColor="green"
         score=score+1
         score1.innerText=score
        

    }
    else{
        option1.style.backgroundColor="red"
    }
    
   })
   
   option4.addEventListener("click",function(){
    if(option4.id==quizDB[value].answer){
        
         option4.style.backgroundColor="green"
         score=score+1
         score1.innerText=score
         

    }
    else{
        option4.style.backgroundColor="red"
    }
    
   })
   
   option2.addEventListener("click",function(){
    if(option2.id==quizDB[value].answer){
         
         option2.style.backgroundColor="green"
         score=score+1
         score1.innerText=score
         

    }
    else{
        option2.style.backgroundColor="red"
    }

   })

   
   option3.addEventListener("click",function(){
    if(option3.id==quizDB[value].answer){
        
         option3.style.backgroundColor="green"
         score=score+1
         score1.innerText=score
        

    }
    else{
        option3.style.backgroundColor="red"
    }
    
   })
   submit1.addEventListener("click",function(){
    console.log(score)

   })


   next.addEventListener("click",function(){
       if(value<quizDB.length-1){
   
           value=value+1
           
       }
    
    question.innerText=quizDB[value].question
    option1.innerText=quizDB[value].choice1
    option2.innerText=quizDB[value].choice2
    option3.innerText=quizDB[value].choice3
    option4.innerText=quizDB[value].choice4
    if(question2<=quizDB.length){
        question2+=1
    }
    
    question1.innerText=question2
    
    
    

   })
   next.addEventListener("click",function(){
    option1.style.background="none"
    option2.style.background="none"
    option3.style.background="none"
    option4.style.background="none"
})




   
   