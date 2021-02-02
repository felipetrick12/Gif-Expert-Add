 
 
export const GifGridItem = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AXSx9fEtx5743qy4XgeffVSED76UuLpu&q=${encodeURI(category)}&limit=10`; //la api que vamos a traer
    const resp = await fetch(url); //la respuesta de la peticion gracias al fect
    const { data } = await resp.json(); // de la respuesta vamos destrucutrar la data.

    const gif = data.map((info) => {
    return {
        id: info.id,
        title: info.title,
        url: info.images?.downsized_medium.url,
    };
    });
    return gif;
};