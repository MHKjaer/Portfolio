import api from "./api/index.js";
import renderProject from "./renderProject.js";

//Get ID from query
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const selectedId = parameters.get("id");

//Get json
const data = await api.get("../../src/json/projects.json");

//Filter through array to find matching id
const foundId = data.find((project) => project.id == selectedId);

if (!foundId) {
    //redirect to 404.html
    window.location.replace("../../404/index.html");
} else {
    //render
    renderProject(foundId);
}