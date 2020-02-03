$("#begin").on("click", quizInitialization)
//$(document).on("click", ".choice", Quiz)
var count = 75

function quizInitialization(){
    $(".intro").hide();
    questionsLoop()
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
    Quiz()
}

function Quiz(){
    var el = $(".questions");
    var child = el.children()
    for(let i = 0; i < child.length; i++){
        $(document).on("click", ".choice", function(){
            $(this).parent().hide()
            if($(this).text() === questions[i].answer){
                console.log(child[i]) //use parent and sibling elements to show and hide elements
                console.log("correct")
            }

        })
    }
}


function startTimer(){
     timer = setInterval(function() {
        $("#timer").html(count--)
        if(count < 1){
            clearInterval(timer)
            //stopQuiz()
        }
    }, 1000);
}
