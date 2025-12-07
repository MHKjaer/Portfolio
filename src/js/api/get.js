export default async function get(url){
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        return response.ok ? await responseJSON : undefined;
      } catch (error) {
        throw new Error(error);
      }
    

}