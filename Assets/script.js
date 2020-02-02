$("#begin").on("click", quizInitialization)

function quizInitialization(){
    $(".intro").hide();
    questionsLoop()
    beginQuiz()
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
    }
}

function beginQuiz(){
    for( let i = 0; i < questions.length; i++){
        
    } 
}