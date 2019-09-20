
//api.openweathermap.org/data/2.5/weather?q=valence&APPID=56b54737cee432fa16e84110b8e24e90&units=metric
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'aed55a181dbcada62f55b81bf49c48e8';



export function requestGet(endPoint , query = ''){
  // console.log(query);
    const headers = {
        Accept : 'application/json',
        'Content-Type': 'application/json',
    };
    endPoint = `${endPoint}?${query}&APPID=${apiKey}&units=metric&lang=fr`;
    uri = baseUrl + endPoint;
    console.log(uri)

    return fetch(uri , {
        method : 'GET',
        headers,
    }).then( response => {
        
       

    if (response.status === 200){
        
        return response
           .json()
           .then(json => { 
               return json !== undefined ? uniqueCitys(json) : {};
            })
           .catch(function(e){
               console.log('fetch operation: ' + e.message);

           });
    }

    return response.status
    });

}

function uniqueCitys(json){
    console.log(json);
    return json;
}
