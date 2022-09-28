import axios from 'axios'
export const FetchHomeSlideData = (page=1,setTotalPage ) =>{
    return fetch(`http://localhost:3000/homeSlidderData1?_page=${page}&_limit=4`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
}

export const FetchMakeUpTab = ( ) =>{
    return axios(`http://localhost:3000/MakeUpTab`)
}

export const FetchHairTab = ( ) =>{
    return axios(`http://localhost:3000/HairTab`)
}

export const FetchMomAndBabyTab = ( ) =>{
    return axios(`http://localhost:3000/MomAndBabyCareTab`)
}

export const FetchFragranceTab = ( ) =>{
    return axios(`http://localhost:3000/FragranceTab`)
}

export const FetchLatestProducts = ( ) =>{
    return axios(`http://localhost:3000/LatestProducts`)
}

export const FetchBestSellers = ( ) =>{
    return axios(`http://localhost:3000/BestSellers`)
}

export const FetchMostViewed = ( ) =>{
    return axios(`http://localhost:3000/MostViewed`)
}