const dob = document.querySelector("#dob");
const lNumber = document.querySelector("#luckyNumber");
const checkBTN = document.querySelector("#check");
const refreshBTN = document.querySelector("#refresh")
const outputDescription = document.querySelector(".description");


function getSum(bday){
    var summ = 0;
    bday = bday.replaceAll("-","");
    
    for(let i=0; i<bday.length; i++){

        summ += Number(bday[i]);
    }
    return summ;
}

function clickEventCheck(){
    const sum = getSum(dob.value)
    console.log(sum);
    if(dob.value&&lNumber.value){

        var rem = sum % lNumber.value;
        console.log("lucky numb is ", lNumber.value);
        console.log("remainder is ", rem)
        console.log(typeof(rem))
        if(rem===0){
            outputDescription.innerHTML = lNumber.value + " is lucky";
        }
        else{
            outputDescription.innerHTML = lNumber.value + " is not that lucky for you"
        }
    }
    else{
        outputDescription.innerHTML = "Invalid Input !"
        
    }
}

checkBTN.addEventListener("click", clickEventCheck);
refreshBTN.addEventListener("click", function(){
    dob.value="";
    lNumber.value="";
    outputDescription.textContent = "";
    alert("Page has been refreshed")
})