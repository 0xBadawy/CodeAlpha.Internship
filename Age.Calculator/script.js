var dateOfBirth = document.getElementById("dob");
var years = document.getElementById("#AgeNum");
var months = document.getElementById("#MonthNum");
var days = document.getElementById("#DayNum");

function calculateAge() {
    var rr = document.getElementById("dob").value;
    console.log(dob);
    var dob = new Date(rr);
    var now = new Date();
    var diff = now - dob;
    var days = diff / (1000 * 60 * 60 * 24);
    var years = Math.floor(days / 365);
    var months = Math.floor((days % 365) / 30);
    days = Math.floor((days % 365) % 30);   
    document.getElementById("AgeNum").innerHTML = years+1;
    document.getElementById("MonthNum").innerHTML = months;
    document.getElementById("DayNum").innerHTML = days;    
}
