 
  function fetchfood(name){
 fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i="+name).then(response=>response.json()
 ).then((data)=>{
 
 display(data)
 })
}


btn.addEventListener("click", (e)=>{
  name =document.getElementById("inp").value;
console.log("clicked")
fetchfood(name)
})
 function display(data){
  let box =document.getElementById("box-2")
  let htm=" ";
  if(data.meals && document.getElementById("inp").value!==""){
    
    data.meals.forEach(meal => {
      htm +=`<div id="card" class=" w-[250px] max-w-[250px] srounded-md border-1 hover:scale-105 bg-white shadow-lg md:shadow-xl text-center m-2">
      <img class="w-[250px] max-w-[250px] rounded-t-md cursor-pointer" src="${meal.strMealThumb}" alt="food">
      <p class="font-sans font-bold text-lg p-2">${meal.strMeal}</p>
      <button class="bg-orange-500 px-3 py-1 hover:bg-orange-600 active:bg-orange-500  border-2 border-orange-400 mb-4 font-semibold rounded-lg text-white">Get-recipe</button>
    </div>`
    });
  
  }
  else{
      htm=`<p class="font-sans font-semibold text-lg p-2">Sorry,we didn't find any meal which you search</p>`
  }
box.innerHTML=htm;
document.getElementById("inp").value="";
console.log( document.getElementById("inp").value)
}

document.querySelector("#inp").addEventListener("keyup",(e)=>{
  if(e.key=="Enter"){
    name =document.getElementById("inp").value;
    console.log("clicked")
    fetchfood(name)
  
  }
 
  
})