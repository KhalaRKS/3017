
const apiKey = 'a23c7adaf0ed7ac3071fcbfa0060f583'
const requestCity = async (city) =>{

    try {
        
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`)
        
        const data = await response.json()
    
        console.log(data);
        return data;

    } catch (error) {
        console.log("Error ", error);
    }
}