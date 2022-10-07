
// var currentTime = moment().hour();
var btn9 = document.getElementById("save9");
var btn10 = document.getElementById("save10");
var btn11 = document.getElementById("save11");
var btn12 = document.getElementById("save12");
var btn1 = document.getElementById("save1");
var btn2 = document.getElementById("save2");
var btn3 = document.getElementById("save3");
var btn4 = document.getElementById("save4");
var btn5 = document.getElementById("save5");


var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;

document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day : ' + daylist[day];

var timeitbe = document.getElementById("todayCalContainer").children


console.log(today.getHours())
console.log(timeitbe)
for (var i = 1; i <= 9; i++ ) {
    var ct = i + 8;
    if (today.getHours() > ct ) {
        timeitbe[i].classList.add("past");
    }
    else if (today.getHours() < ct) {
        timeitbe[i].classList.add("future")
    }
    else {
        timeitbe[i].classList.add("present")
    }

}

var storageinput = document.querySelector('.storage');
var text = document.querySelector('.text');
var inputEl9 = $('9amEvent')
var inputEl10 = $('10amEvent')
var inputEl11 = $('11amEvent')
var inputEl12 = $('12pmEvent')
var inputEl1 = $('1pmEvent')
var inputEl2 = $('2pmEvent')
var inputEl3 = $('3pmEvent')
var inputEl4 = $('4pmEvent')
var inputEl5 = $('5pmEvent')

inputEl9.on('click', function())

var input = document.getElementById("")



// today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

// today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();