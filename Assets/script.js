$("#begin").on("click", quizInitialization)
//$(document).on("click", ".choice", Quiz)
var count = 75

function quizInitialization(){
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
        $(document).on("click", ".choice", function(){
            $(this).parent().hide()
            $(this).parent().next().show()
            if($(this).text() === questions[i].answer){
                console.log("correct")
            }
            else{
                count -= 15
            }
            i++
            if(i > 4){
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
    console.log("complete")
}