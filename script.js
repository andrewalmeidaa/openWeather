// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br
// key=fa814d00718f88f637cf438acb8add44
// https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&appid=${key}&lang=pt_br
 
function cidade(){
    var nameCity = document.querySelector('#nameCity').value  
    getWeather(nameCity = "rio de janeiro")
    

}


async function getWeather(city){
    const key = 'fa814d00718f88f637cf438acb8add44'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`)
    const data = await response.json()
    getWeatherfor5Days(city)
    const date = new Date
    const month = ['Janeiro','Fevereiro', 'Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    const monthContract = ['Jan','Fev', 'Mar','Abr','Mai','Jun','Jul','Ago','Seto','Out','Nov','Dez']
    const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    console.log(data)
    document.querySelector('#locationSearch').innerHTML  = data.name
    document.querySelector('#tempPrevision').innerHTML  = `${(Math.trunc((data.main.temp).toFixed(1)))}° C`
    document.querySelector('#descriptionPrevision').innerHTML  = data.weather[0].description
    document.querySelector('#temMaxMin').innerHTML  = `max: ${Math.trunc((data.main.temp_max).toFixed(1))}° | min: ${Math.trunc((data.main.temp_min).toFixed(1))}°`
    document.querySelector('#hours').innerHTML  = `${date.getHours()}:${date.getMinutes()} H`
    document.querySelector('#locationHere').innerHTML  = `${month[date.getMonth()]} ${date.getFullYear()}`
    document.querySelector('#dataHere').innerHTML  = `${days[date.getDay()-1]}, ${monthContract[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    document.querySelector('#windCondition').innerHTML  = `${data.wind.speed.toFixed(0)}km/h`
    document.querySelector('#pressureCondition').innerHTML  = `${data.main.pressure}hpa`
    document.querySelector('#humidityCondition').innerHTML  = `${data.main.humidity}`
    document.querySelector('#cloudCondition').innerHTML  = `${data.clouds.all}%`
    
}

async function getWeatherfor5Days(city){
    const key = 'fa814d00718f88f637cf438acb8add44'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}&lang=pt_br`)                    
    const data = await response.json()
    const date = new Date   

        

    console.log(data.list[8].dt_txt)
    console.log(data.list[8].main.temp)
    console.log(data.list[8].weather[0].description)
    console.log(data.list[16].dt_txt)
    console.log(data.list[16].main.temp)
    console.log(data.list[16].weather[0].description)
    console.log(data.list[24].dt_txt)
    console.log(data.list[24].main.temp)
    console.log(data.list[24].weather[0].description)
    console.log(data.list[32].dt_txt)
    console.log(data.list[32].main.temp)
    console.log(data.list[32].weather[0].description)

    //document.querySelector('#conditionNextday-1').innerHTML  = data.list[0].weather[0].description
    //document.querySelector('#titleNextDay-1').innerHTML  = `${data.list[0].main.temp.toFixed(0)}° C`
    

   setTimeout(() => {
    document.querySelector('#conditionNextday-1').innerHTML  = `${data.list[8].weather[0].description}`
    document.querySelector('#titleNextDay-1').innerHTML  = `${data.list[8].main.temp.toFixed(0)}° C`
    document.querySelector('#dataNextday-1').innerHTML  = `${date.getDate()+1}/${date.getMonth()}`
    
    document.querySelector('#conditionNextday-2').innerHTML  = `${data.list[16].weather[0].description}`
    document.querySelector('#titleNextDay-2').innerHTML  = `${data.list[16].main.temp.toFixed(0)}° C`
    document.querySelector('#dataNextday-2').innerHTML  = `${date.getDate()+2}/${date.getMonth()}`

    document.querySelector('#conditionNextday-3').innerHTML  = `${data.list[24].weather[0].description}`
    document.querySelector('#titleNextDay-3').innerHTML  = `${data.list[24].main.temp.toFixed(0)}° C`
    document.querySelector('#dataNextday-3').innerHTML  = `${date.getDate()+3}/${date.getMonth()}`

    document.querySelector('#conditionNextday-4').innerHTML  = `${data.list[32].weather[0].description}`
    document.querySelector('#titleNextDay-4').innerHTML  = `${data.list[32].main.temp.toFixed(0)}° C`
    document.querySelector('#dataNextday-4').innerHTML  = `${date.getDate()+4}/${date.getMonth()}`
   }, 2000);
  



}

const date = new Date
console.log(date)



  // console.log(`Nome: ${data.name}`)
    // console.log(`Nuvens: ${data.clouds.all}`)
    // console.log(`Humidade: ${data.main.humidity}`)
    // console.log(`Temperatura: ${Math.trunc((data.main.temp).toFixed(1))}`)
    //
    // console.log(`Pressao: ${data.main.pressure}hpa`)
    // console.log(`Descricao: ${data.weather[0].description}`)
    // console.log(`Velocidade Vento: ${data.wind.speed}`)