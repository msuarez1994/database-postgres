const axios =  require('axios');
const { response } = require('express');

const GetAllBuses = (url)=>{
    return new Promise((resolve, reject)=>{
        resolve(axios.get(url));  
    })
}
const showBuses = async(busesRequested, url)=>{
    try{
        const Objectbuses = await GetAllBuses(url);
        const busesArray = Objectbuses.data.responseBody.items;
        const busesFiltered = busesArray.filter((el)=>{
            for(let i =0; i<busesRequested.length; i++){
                if(el.vehicleCode == busesRequested[i])
                    return el.vehicleCode;
            }
        })
        return busesFiltered;
    }
    catch( err ){
        throw err;
    }
}
const BusesSEFI= ( req, res = response ) => {
    const busesRequested = req.body.buses;
    showBuses(busesRequested,'http://api-swap.rtp.gob.mx/api/recaudacion')
    .then(success=>{
        res.json(success);
    })
}
module.exports = {
    BusesSEFI
}