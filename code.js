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
        const sky = document.getElementById("sky");
        async function getsky() {
        
            
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f754492e8565556b51c677717f4cb2f8',{mode: 'cors'});
            const weatherdata = await response.json();
            sky.innerHTML = weatherdata.weather[0].description;
        }
        getsky();
    }

    return {initialise};

})();

//getweather.initialise("London");

