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

    function calcTime(offset) {
        var d = new Date();
    
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        var nd = new Date(utc + (3600000*offset));
    
        return nd.toLocaleString();
    }
    function initialise(loc){
        const weather1 = document.getElementById("weather1");
        const city1 = document.getElementById("city1");
        const temp1 = document.getElementById("temp1");
        const temp2 = document.getElementById("temp2");
        const humidity1 = document.getElementById("humidity1");
        const rain1 = document.getElementById("rain1");
        const windspeed1 = document.getElementById("wind1");
        const date1 = document.getElementById("date1");
        async function getdata() {
        
            
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=f754492e8565556b51c677717f4cb2f8`,{mode: 'cors'});
            const weatherdata = await response.json();
            console.log("run warning");
            if(weatherdata.message == "city not found"){
                document.getElementById("notfound1").innerHTML = "City not found, please enter a city."
                return;
            }
            document.getElementById("notfound1").innerHTML = "";
            weather1.innerHTML = weatherdata.weather[0].description.charAt(0).toUpperCase() +weatherdata.weather[0].description.slice(1);
            city1.innerHTML = weatherdata.name;
            temp1.innerHTML = parseInt(weatherdata.main.temp - 273.15) + "°C";
            temp2.innerHTML = parseInt(weatherdata.main.feels_like - 273.15) + "°C";
            humidity1.innerHTML = weatherdata.main.humidity + "%";
            rain1.innerHTML = weatherdata.main.pressure + "hPa";
            windspeed1.innerHTML = weatherdata.wind.speed + "m/s";
            date1.innerHTML = calcTime(weatherdata.timezone/3600);
            // index 12 to 13
            document.body.style.background = "url('night/snow.jpg') no-repeat center center fixed;";
            /*
            if(parseInt(calcTime(weatherdata.timezone/3600).slice(12,14))<5 || parseInt(calcTime(weatherdata.timezone/3600).slice(12,14))>18){
                document.body.style.background = "url('images/night.jpg') no-repeat center center fixed";
            } else{
                document.body.style.background = "url('images/snow.jpg') no-repeat center center fixed;";
                console.log("ayy")
            }
            */
            
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
            getweather.initialise(search1.value);
            search1.value = "";
        }
    }

    return {start1};
})();

initialise.start1();

//getweather.initialise("London");

