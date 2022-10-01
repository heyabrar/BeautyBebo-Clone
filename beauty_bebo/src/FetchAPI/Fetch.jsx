import axios from 'axios'
export const FetchHomeSlideData = (page=1,setTotalPage ) =>{
    return fetch(`https://beautybebodbjson.onrender.com/homeSlidderData1?_page=${page}&_limit=4`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    });
};

export const FetchMakeUpTab = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/MakeUpTab`)
};

export const FetchHairTab = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/HairTab`)
};

export const FetchMomAndBabyTab = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/MomAndBabyCareTab`)
};

export const FetchFragranceTab = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/FragranceTab`)
};

export const FetchLatestProducts = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/LatestProducts`)
};

export const FetchBestSellers = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/BestSellers`)
};

export const FetchMostViewed = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/MostViewed`)
};

export const FetchSinglePageHomeSlider = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/homeSlidderData1/${id}`)
};

export const FetchSinglePageMakeUpTab = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/MakeUpTab/${id}`)
};

export const FetchSinglePageHairTab = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/HairTab/${id}`)
};

export const FetchSinglePageMomAndBabyCareTab = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/MomAndBabyCareTab/${id}`)
};

export const FetchSinglePageFragranceTab = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/FragranceTab/${id}`)
};

export const FetchSinglePageBestSellers = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/BestSellers/${id}`)
};

export const FetchSinglePageLatestProducts = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/LatestProducts/${id}`)
};

export const FetchSinglePageMostViewed = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/MostViewed/${id}`)
};

export const FetchHairPageData = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/Hair`)
};

export const FetchSPHairPageData = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/Hair/${id}`)
};

export const FetchMomAndBabyCarePageData = ( ) =>{
    return axios(`https://beautybebodbjson.onrender.com/MomAndBabyCare`)
};

export const FetchSPMomAndBabyCarePageData = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/MomAndBabyCare/${id}`)
};

export const FetchFragrancePageData = ( ) =>{
    return axios('https://beautybebodbjson.onrender.com/Fragrance')
};

export const FetchSPFragranceData = (id) =>{
    return axios(`https://beautybebodbjson.onrender.com/Fragrance/${id}`)
};