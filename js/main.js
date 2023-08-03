var today=new Date()
document.write("newDate="+today+"<br>"+"<br>");


var year=today.getFullYear()
document.write("year="+year+"<br>"+"<br>");

var month=today.getMonth()
document.write("month="+month+"<br>"+"<br>");

var day=today.getDay()
document.write("Day="+day+"<br>"+"<br>");

var date=today.getDate()
document.write("Date="+date+"<br>"+"<br>");

var year=today.getFullYear()
console.log(year);
if(year%4==0){
    Document.write("This is leap year ");
}
else{
    document.write("This is not leap year")
}
