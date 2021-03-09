'use strict'

let studentForm=document.getElementById('Studentform')
let table=document.createElement('table')
let divTableContainer=document.getElementById('tableContainer')
divTableContainer.appendChild(table);
let counter=0
let studentTuitionUpdate=0;
let section=document.getElementById('para')
let h2=document.createElement('h2')
section.appendChild(h2);
let emailArray=[];




function StudentInformation(email, mobileNumber, tuition){
    this.email=email;
    this.mobileNumber=mobileNumber;
    this.tuition=tuition;
    arrayOfStudents.push(this);
}

let arrayOfStudents=[];

function getRndomAge() {
    return Math.floor(Math.random() * (24 - 18) ) + 18;
  }

function saveResultstoStorage(a,b,c){
    new StudentInformation(a,b,c)

    localStorage.setItem('studentObjects',JSON.stringify(arrayOfStudents))
}
studentForm.addEventListener('submit', savingInformation);

function savingInformation(event){
    event.preventDefault();
    let studentEmailinput=event.target.StudentEmail.value;
    let studentMobileNumber=event.target.mobileNumber.value;
    let studentTuition=event.target.Tuition.value;
    counter++
    let studentTuitioninteger=parseInt(studentTuition)
     studentTuitionUpdate=studentTuitionUpdate+studentTuitioninteger

     let Namesplit = studentEmailinput;
     let emailArray = Namesplit.split(" ", 3);
    console.log(emailArray)
    saveResultstoStorage(studentEmailinput,studentMobileNumber,studentTuitionUpdate);
  
    let gettingArrayFromStorage=JSON.parse(localStorage.getItem('studentObjects'))
    for (let i = 0; i < gettingArrayFromStorage.length; i++) {
        render(gettingArrayFromStorage[i].email,gettingArrayFromStorage[i].mobileNumber,gettingArrayFromStorage[i].tuition)
        
    }


}

function render(a,b,c){
    let tr=document.createElement('tr')
    table.appendChild(tr);
    let td_id=document.createElement('td')
    let td_age=document.createElement('td')
    let td_name=document.createElement('td')
    let td_Email=document.createElement('td')
    let td_mobile=document.createElement('td')
    let td_tuition=document.createElement('td')
    tr.append(td_id,td_name,td_Email,td_mobile,td_age,td_tuition,)
    td_id.textContent=counter
    td_name.textContent=emailArray[0]
    td_Email.textContent=a
    td_mobile.textContent=b
    td_age.textContent=getRndomAge();
    td_tuition.textContent=c
    h2.textContent= `total tuition is ${studentTuitionUpdate}`



}
