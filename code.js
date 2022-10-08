/*
api call format
const ?? = document.getElementById("??");
async function ??() {

    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f754492e8565556b51c677717f4cb2f8',{mode: 'cors'});
    const weatherdata = await response.json();
    ??.innerHTML = weatherdata.??;
}
??();
*/

const getweather = (() => {
    function initialise(loc){
        const weather1 = document.getElementById("weather1");
        const city1 = document.getElementById("city1");
        const temp1 = document.getElementById("temp1");
        const temp2 = document.getElementById("temp2");
        const humidity1 = document.getElementById("humidity1");
        const rain1 = document.getElementById("rain1");
        const windspeed1 = document.getElementById("wind1");
        async function getdata() {
        
            
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f754492e8565556b51c677717f4cb2f8',{mode: 'cors'});
            const weatherdata = await response.json();
            console.log("run warning");
            weather1.innerHTML = weatherdata.weather[0].description.charAt(0).toUpperCase() +weatherdata.weather[0].description.slice(1);
            city1.innerHTML = weatherdata.name;
            temp1.innerHTML = parseInt(weatherdata.main.temp - 273.15) + "°C";
            temp2.innerHTML = parseInt(weatherdata.main.feels_like - 273.15) + "°C";
            humidity1.innerHTML = weatherdata.main.humidity + "%";
            rain1.innerHTML = weatherdata.main.pressure + "hPa";
            windspeed1.innerHTML = weatherdata.wind.speed + "m/s";
        }
        getdata();
    }

    return {initialise};

})();

const initialise = (() => {

    function start1(){
        getweather.initialise("London");
        document.getElementById("search1").addEventListener("keydown",function (e) {
            if (e.key === 'Enter') {
            submit();

            }
        })
    }

    function submit(){
        const search1 = document.getElementById("search1");
        if (search1.value == ""){
            return;
        }
        else{
            console.log("h,");
            search1.value = "";
        }
    }

    return {start1};
})();

initialise.start1();

//getweather.initialise("London");

