document.querySelector('.calc-btn').addEventListener('click', calculateStimmy)
document.querySelector('#status-btn').addEventListener('click', storeStatus)
const statusButtons = Array.from(document.querySelectorAll('.status'))//getting elements from button and adding array
console.log(statusButtons)
document.querySelector('.dollar-amt').addEventListener('input', addCommaToIncomeInput)

//adds comma to income amount in the DOM input
function addCommaToIncomeInput(e){
    let val = Number(e.target.value.replaceAll(',',''))
    e.target.value = val.toLocaleString()
}


//stores status of user when button clicked
let status = ''

function storeStatus(event){

    //sets status button to primary color when clicked
    if(event.target != event.currentTarget){
        for(const button of statusButtons){
            if(button.classList.contains('btn-primary')){
                button.classList.toggle('btn-outline-primary')
                button.classList.toggle('btn-primary')
            }
        }
        event.target.classList.toggle('btn-outline-primary')
        event.target.classList.toggle('btn-primary')


        //sets status name when clicked
        if(event.target.classList.contains('single-btn')){
            status = 'single'
        }else if(event.target.classList.contains('married-btn')){
            status = 'joint'
        }else if(event.target.classList.contains('hoh-btn')){
            status = 'hoh'
        }
        // console.log(event.target.innerText)
        console.log(status)

    }
}



//calucates stimulus check amount
function calculateStimmy(){

    //change calculate button to recalculate
    document.querySelector('.calc-btn').innerText = "Recalculate"

    let income = +document.querySelector('.dollar-amt').value.replaceAll(',','')
    console.log(income)
    let dependents = +document.querySelector('.dependents').value
    let base = 1400
    let jointBase = 2800
    let additionalFunds = dependents * 1400

    let reductSingle = 5000
    let reductJoint = 10000
    let reductHoh = 7500

    let reductAmtSingle = income - 75000
    let reductAmtJoint = income - 150000
    let reductAmtHoh = income - 112500

    //use for single and HoH
    let amtReducedSingle = (reductAmtSingle * base) / reductSingle
    let finalAmtSingle = base - amtReducedSingle
  

    //use for married
    let amtReducedJoint = (reductAmtJoint * base) / reductJoint
    let finalAmtJoint = base - amtReducedJoint

    //use for HoH
    let amtReducedHoh = (reductAmtHoh * base) / reductJoint
    let finalAmtHoh = base - amtReducedHoh

    let descriptionNo = document.querySelector('.stim-description').innerText = "Your income would be too high to receive any stimulus funds"
    
    let descriptionYes = "You are likely to receive a stimulus payment of "
    
    // "You are likely to receive a stimulus payment of "
    
    
    


    //single conditons
   if(status === 'single' && income >= 80000){
        descriptionNo
   }else if(status === 'single' && income > 75000 && income < 80000){
   let total = finalAmtSingle + additionalFunds
        document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
   }else if(status === 'single' && income <= 75000){
       let total = base + additionalFunds
       document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
   }

    //married conditions
    if(status === 'joint' && income >= 160000){
        descriptionNo
    }else if(status === 'joint' && income > 150000 && income < 160000){
        let total = finalAmtJoint + additionalFunds
        document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
    }else if( status === 'joint' && income <= 150000){
        let total = jointBase + additionalFunds
        document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
    }

    //Head of House conditions
    if(status === 'hoh' && income >= 120000){
        descriptionNo
    }else if(status === 'hoh' && income > 112500 && income < 120000){
        let total = finalAmtHoh + additionalFunds
        document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
    }else if(status === 'hoh' && income <= 112500){
        let total = base + additionalFunds
        document.querySelector('.stim-description').innerText = `${descriptionYes} $${Math.round(total,2).toLocaleString()}`
    }
}


//additional 1400 for each dependent

//AMOUNTS PHASED OUT
//if single and income > 75000
//if married and joint and income > 150,000
//if HoH and income > 112,500

//NO PAYMENT
//if single and income > 80,000
//if married joint and income > 160,000
//if HoH and income 120,000


//button clicked
let singleBtn = document.querySelector('.single-btn')
let marriedBtn = document.querySelector('.married-btn')
let hohBtn = document.querySelector('.hoh-btn')

if(status === "single"){
    singleBtn.classList.add('')
}


//when input value is changed add .toLocale to input

