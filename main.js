function submitData() {
    var x = {
        "name": document.getElementById("name").value
    };
    localStorage.setItem("x", JSON.stringify(x));
}

function loadBody() {
    var x1 = localStorage.getItem("x");
    var x2 = JSON.parse(x1);
    document.getElementById("user_name").innerHTML = x2.name;
}
var arr_answer = ['It is certain.', 'My reply is no.', 'Very doubtful.', ' Cannot predict now.', 'Better not tell you now.'];
var arr_question = ['Will my Goa plan be succesful?', 'Will I become Prime Minister of India?', 'Will I get married?', 'Is this fortune teller even true?', 'Will  my health be great in future?'];
var n;
var nm = 0;


function loader_() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("answer_1").style.display = "block";
    document.getElementById("answer_").style.display = "block";
    n = parseInt(Math.floor(Math.random() * 5));
    document.getElementById("answer_").innerHTML = arr_answer[n];

}


function showAnswer() {
    debugger;
    document.getElementById("loader").style.display = "block";
    document.getElementById("answer_1").style.display = "none";

    var hide = document.getElementById("answer_1");
    if (hide.style.display == "none") {
        hide.style.display = "block";
        // n = parseInt(Math.floor(Math.random() * 5));
        setTimeout(loader_, 3000);
        // document.getElementById("answer_").innerHTML = arr_answer[n];


    } else {
        hide.style.display = "none";
    }

}

function showQuestion() {
    // n = parseInt(Math.floor(Math.random() * 5));
    document.getElementById("answer_").style.display = "none";
    document.getElementById("question_").innerHTML = arr_question[nm];
    len = arr_question.length - 1
    if (len == nm) {
        var x5 = document.getElementById("div1");
        x5.style.display = "block";
        var x6 = document.getElementById("div2");
        x6.style.display = "none";
        var x7 = document.getElementById("div3");
        x7.style.display = "none";

    }
    else {
        nm++;
    }
}

function quit() {
    location.replace("endpage.html");
}





