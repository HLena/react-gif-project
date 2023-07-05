const APY_KEY = '5VF1TtAElOt3mH7Myu19MsOB818eJL6f';
const LIMIT = 10;


export const getGifs = async ( category ) => {
    
    const url = `HTTPS://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${category}&limit=${LIMIT}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        username: gif.username,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;

}
