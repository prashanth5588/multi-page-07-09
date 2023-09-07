/*

const btnElement = document.getElementById("adding");
btnElement.addEventListener("click", function() {
    let userName = document.getElementById("userName").value;
    console.log(userName);
    localStorage.setItem("userName",userName);

}); */


function newUser() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let mobilenumber = document.getElementById("mobilenumber").value;

    // radio
    let gender;
    let radioElements = document.getElementsByName("gender") ;
    
    for(let i = 0; i < radioElements.length; i++) {
        let eachEle = radioElements[i];

         // console.log(eachEle);

        if (eachEle.checked) {
            let finalValue = eachEle.value;
          //  console.log(finalValue);
          gender = finalValue;

        };
    };

    // console.log(gender);

    // checkboxes
    var resultArray = [];
    let checkBoxElements = document.getElementsByName("proof");

    for (var j = 0; j < checkBoxElements.length; j++ ) {
        // console.log(checkBoxElements[j].checked);

        if (checkBoxElements[j].checked) {
            resultArray.push(checkBoxElements[j].value);
        }
    }

    // console.log(resultArray);


    // Drop down ( select element)
    
    const select1 = document.getElementById("account");

    let dropDownValue = select1.value;
    //console.log(dropDownValue);

    localStorage.setItem("userName",userName);
    localStorage.setItem("mobile", mobilenumber);
    localStorage.setItem("password",password);
    localStorage.setItem("gender",gender);
    localStorage.setItem("documents",resultArray);
    localStorage.setItem("account",dropDownValue);
    
    window.location = "secondhtml.html"
};
