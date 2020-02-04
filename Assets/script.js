$("#begin").on("click", quizInitialization)
//$(document).on("click", ".choice", Quiz)
var count = 75

function quizInitialization(event){
    event.preventDefault()
    $(".intro").hide();
    questionsLoop()
    Quiz()
    startTimer()
    
}

function questionsLoop(){
    for (var i = 0; i < questions.length; i++){
        var div = $("<div>")
        var question = questions[i].title
        div.html(question).attr("id", questions[i].log)
        div.appendTo(".questions")
        .hide()
        //console.log(question)
        for (let j = 0; j < questions[i].choices.length; j++){
            var choice = questions[i].choices[j];
            btn = $("<button>").text(choice).attr("class", "choice");
            btn.appendTo(div);
            //console.log(choice)
        }
        $("#1").show()
    }
}

function Quiz(){
    var i = 0;
        $(document).on("click", ".choice", function(event){
            event.preventDefault()
            $(this).parent().hide()
            $(this).parent().next().show()
            if($(this).text() === questions[i].answer){
                console.log("correct")
            }
            else{
                count -= 15
            }
            i++
            if(i >= questions.length){
                clearInterval(timer)
                stopQuiz()
            }
        })

}

function startTimer(){
     timer = setInterval(function() {
        $("#timer").html(count--)
        if(count < 1){
            clearInterval(timer)
            stopQuiz()
        }
    }, 1000);
}

function stopQuiz(){
    var container = $("#final-score-container-main")
    var score = $("#score-container")
    score.text("Your final score is " + $("#timer").html() + ".")
    container.show()
    console.log("complete")
    
}

$(document).on("click", "#submit", function(event){
    event.preventDefault()
    var initials = $("#initials").val()
    localStorage.setItem("initials", initials)
    highscore()
})

function highscore(){
    var highscoresDiv = $("#high-scores")
    for(var i = 0; i  < localStorage.length; i++){
        highscoresDiv.append(localStorage.getItem(localStorage.key(i)))
    }
}