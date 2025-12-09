import api from "./api/index.js";

const data = await api.get("../../src/json/projects.json");
const allProjectsList = document.getElementById("allProjectsList");

function listProjects(data) {
    let projectList = [];
    
    //Creates the html for each project section and adds it to an array
    data.forEach(({id, title, date, images}) => {
        const section = document.createElement("section");
        const anchor = document.createElement("a");
        const h2 = document.createElement("h2");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const par = document.createElement("p");

        h2.innerText = title;
        par.innerText = date;

        img.src = images[0].path;
        img.setAttribute("alt", images[0].desc);

        anchor.setAttribute("href", "./view/?id=" + id);

        section.setAttribute("class", "projectItem");

        div.append(img);
        anchor.append(h2, div, par);
        section.append(anchor);

        projectList.push(section);
    });

    //Appends the array to the div
    allProjectsList.append(...projectList);
}

listProjects(data);