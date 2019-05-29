import axios from 'axios'
// TODO mettre en fichier env
const API_ENDPOINT = 'http://localhost:3000/'


function getAuthorization(){
    const token = localStorage.getItem('usertoken')
    if (token !== null){
        return {
            headers: {'Authorization': "bearer " + token}
        }
    } else {
        return null
    }
}
    
    // dans ta fonction avant de faire tes call axios tu fais :
    

export const creer = newEnchere => {

    const config = getAuthorization()

    if(config !== null){
        const params = {
            titleE: newEnchere.titleE,
            imgE: newEnchere.imgE,
            priceE: newEnchere.priceE,
            incE: newEnchere.incE,
            companyE: newEnchere.companyE,
            infoE: newEnchere.infoE,
            inPanE : newEnchere.inPanE
        }
        return axios.post(API_ENDPOINT + 'encheres/creer', params, config)
        .then(res => {
            console.log('Enregistré!')
        })
    } else {
        throw new Error('token null')
    } 
    
}

export const list = newEnchere => {

    const config = getAuthorization()

    if(config !== null){

        return axios.post(API_ENDPOINT + 'encheres/listench', config)
        .then(res => {
            console.log('voici la liste!')
        })
    } else {
        throw new Error('token null')
    } 

    /*return axios
        .get('encheres/listench').then(res => {
            console.log('voici la liste!')
        }) */
}