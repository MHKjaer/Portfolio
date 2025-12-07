import api from "./api/index.js";

//Get ID from query
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const selectedId = parameters.get("id");

//Get json
const data = await api.get("../../src/json/projects.json")
console.log(data);

//Filter through array to find matching id
const foundId = data.find((project) => project.id == selectedId);
console.log(foundId);

if (!foundId) {
    //redirect to 404.html
    console.log("FEIL!!!!!");
    window.location.replace("../../404/index.html");
} else {
    //render
    console.log("YAY! RIKTIG!");
}