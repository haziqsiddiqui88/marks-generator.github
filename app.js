var phyMarks = document.querySelector('#phy-marks')
var mathMarks = document.querySelector('#math-marks')
var chemMarks = document.querySelector('#chem-marks')
var engMarks = document.querySelector('#eng-marks')
var totalMarks = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')



function calculatePercentage(){
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(chemMarks.value);
    console.log(engMarks.value);


    var totaMarks = 400;
    var obtainedMarks = +phyMarks.value +   +mathMarks.value +   +chemMarks.value +   +engMarks.value ;
     console.log('obtained marks ===>' , obtainedMarks );
     totalMarks.innerHTML = obtainedMarks;




     var studentPercentage = obtainedMarks / totaMarks * 100
     percentage.innerHTML = studentPercentage
     
     phyMarks.value=" "
     mathMarks.value=" "
     chemMarks.value=" "
     engMarks.value=" "

     if(studentPercentage > 80 ){
        grade.innerHTML = ' A+ '
    }else if(studentPercentage > 70){
        grade.innerHTML = ' A '
    } else if(studentPercentage > 60){
        grade.innerHTML = ' B '
    } else if(studentPercentage >50){
        grade.innerHTML = 'Moye Moye'
    } else if(studentPercentage >40){
        grade.innerHTML = 'Bagairat parh ley'
    } else{
        grade.innerHTML = 'FAIL'
    }

} 
