
const url = "https://api.github.com/users/muzamilali1201/repos";

const fetchData =async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export default fetchData;