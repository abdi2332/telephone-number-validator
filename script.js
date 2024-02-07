const checkMessageButton=document.getElementById("check-btn")
const input=document.getElementById("user-input")
const result=document.getElementById("results-div")
const clearButton=document.getElementById("clear-btn")


const regex = new RegExp(/^[1][\s]?([0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);


checkMessageButton.addEventListener("click", () => {
  const answer=regex.test(input.value)
    if (input.value === "") {
      alert("Please provide a phone number");
      return;
    }
   if(answer){
    result.textContent="Valid US number: "+input.value
   }
   else{
    result.textContent="Invalid US number: "+input.value
   }
  })
  clearButton.addEventListener('click',()=>{
    input.value=" "
    document.getElementById("results-div").textContent=""
  });
