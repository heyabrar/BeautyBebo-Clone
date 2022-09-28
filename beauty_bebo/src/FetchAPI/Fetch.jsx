export const FetchHomeSlideData = (page=1,setTotalPage ) =>{
    return fetch(`http://localhost:3000/homeSlidderData1?_page=${page}&_limit=4`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
}