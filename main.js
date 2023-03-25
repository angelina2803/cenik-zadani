
const selectPlan = (planNumber) => {
     if (planNumber === 1){

          document.querySelector('#plan1').classList.add('plan--selected')
          
     } else if (planNumber === 2){

          document.querySelector('#plan2').classList.add('plan--selected')
          document.querySelector('#plan1').classList.toggle('plan--selected')
          
     } else if(planNumber === 3){

          document.querySelector('#plan3').classList.add('plan--selected')
          document.querySelector('#plan1').classList.toggle('plan--selected')
          
     } 
}
selectPlan(2)