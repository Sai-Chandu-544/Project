let container=document.querySelector(".container");
let images=document.querySelector(".images");
let input_bar=document.querySelector(".input_bar");
let search_btn=document.querySelector("button");
let para3=document.querySelector("#para3");
let para4=document.querySelector("#para4");
let middle_para1=document.querySelector("#middle_para1");
let middle_para2=document.querySelector("#middle_para2");

let url="https://api.weatherapi.com/v1/current.json?key=94b645eb3dc84cd99df70844240111&q=";




async function weather(city){
    let response=await fetch(url+city);
    let data=await response.json();
    if(response.status>=404){
        
        alert("City not found!");
        return
    }
   
    console.log(data);
   
   para3.innerHTML=data.current.humidity+"%";
   para4.innerHTML=data.current.wind_kph+"km/h";
   middle_para1.innerHTML=data.location.name;
   middle_para2.innerHTML=Math.round(data.current.temp_c)+"°C";
   
    
   let list = ["snow.jpg", "clouds.jpg","Rain.jpg",  "summer.jpg"];
   temperature = data.current.temp_c;
     if (temperature <= 5) {
        container.style.background = `url(${list[0]})`; // Snow
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
      } else if (temperature <= 15 ) {
        container.style.background = `url(${list[1]})`; // Rain
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
      } else if (temperature <= 20) {
        container.style.background = `url(${list[2]})`; // Clouds
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
      } else {
        container.style.background = `url(${list[3]})`; // Summer
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center";
      }
      
  
}




search_btn.addEventListener("click",()=>{
    if(input_bar.value=="" || input_bar==null){
        alert("Please Enter City Name!");

    }
  
    

    weather(input_bar.value);
});




