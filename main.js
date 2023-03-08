const selectPlan = (planNumber) =>{
     let classChange = document.querySelector('.plan')
     classChange.classList.add('plan--selected') = planNumber
}
selectPlan()