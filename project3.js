const inputbox=document.getElementById('display')
const butn=document.getElementsByClassName('btn')
const math = window.math;
// const pattern =/([+])\1+/|/([-])\1+/;

for (let i = 0; i < butn.length; i++) {
  butn[i].addEventListener('click', () => {
    const buttonval = butn[i].value;
    try{
        if (buttonval==='total'){
            // if (inputbox.value.match(pattern)){
            //     throw new Error('Error: You can only use one operator per expression.');
            // }
            let temp=math.evaluate(inputbox.value);
            if (temp%1!==0){
                inputbox.value=temp.toFixed(3);
            }
            else{
                inputbox.value=temp;
            }
        }
        else if (buttonval==='delete'){
            inputbox.value=inputbox.value.slice(0,-1);}
        else if(buttonval==='reset'){
            inputbox.value='';
        }

        else{
            inputbox.value+= buttonval;
        }    
        }
    catch (err){
        alert(err)
    }
    
  });
}

console.log(inputbox)

function fun(){
    console.log(document.getElementById('na').value);
}
