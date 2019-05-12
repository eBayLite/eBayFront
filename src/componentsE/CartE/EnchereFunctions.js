import axios from 'axios'

export const creer = newEnchere => {
    return axios
        .post('encheres/creer', {
            titleE: newEnchere.titleE,
            imgE: newEnchere.imgE,
            priceE: newEnchere.priceE,
            incE: newEnchere.incE,
            companyE: newEnchere.companyE,
            infoE: newEnchere.infoE,
            inPanE : newEnchere.inPanE
        })
        .then(res => {
            console.log('Enregistré!')
        })
}

export const list = newEnchere => {
    return axios
        .get('encheres/listench').then(res => {
            console.log('voici la liste!')
        })
}