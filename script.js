var input=document.getElementById('input'),
 number=document.querySelectorAll('.numbers div'),
 operator=document.querySelectorAll('operators div'),
 result=document.getElementById('result'),
 clear=document.getElementById('clear'),

resultDisplayed=false;

for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(e) {

        var currentstring=input.innerHTML;
        var lastchar=currentstring[currentstring.length-1];
        if(resultDisplayed ===false){
            input.innerHTML += e.target.innerHTML;
        }else if (resultDisplayed===true&& lastchar==="+" || lastchar==="-" || lastchar==="x" || lastchar==="/"){
            resultDisplayed=false;
            input.innerHTML += e.target.innerHTML;
        }else{
            resultDisplayed=false;
            input.innerHTML="";
            input.innerHTML += e.target.innerHTML;

        }
    });
}

for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(e) {

        var currentstring=input.innerHTML;
        var lastchar=currentstring[currentstring.length-1];
        if(lastchar==="+" || lastchar==="-" || lastchar==="x" || lastchar==="/"){
            var newstring=currentstring.substring(0,currentstring.length-1)+ e.target.innerHTML;
            input.innerHTML=newstring;
        }else if(currentstring.length ==0){
            console.log("enter a number first");
        }else{
            input.innerHTML += e.target.innerHTML;
        }
    }); 
}
result.addEventListener("click",function(){
    var inputstring=input.innerHTML;
    var numbers=inputstring.split(/\+|\-|\//g);

    var operators =inputstring.replace(/[0-9]|\./g,"").split("")
    console.log(inputstring);
    console.log(operators);
    console.log(numbers);

});