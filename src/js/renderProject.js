import imageModal from "./imageModal.js";

const titleText = document.getElementById("title");
const projectDate = document.getElementById("projectDate");
const projectCategories = document.getElementById("projectCategories");
const descriptionWrapper = document.getElementById("descriptionWrapper");
const filesList= document.getElementById("filesList");

export default function renderProject(project) {
    const {title, date, category, description, files, images} = project;

    titleText.innerText = title || "Title not found";
    projectDate.innerText = date || "Date not found";

    const categoryString = [...category].toString();
    projectCategories.innerText = categoryString.replaceAll(",", ", ");

    //Adds all text to the description
    description.forEach((desc)=>{
        const par = document.createElement("p");
        par.innerText = desc;

        descriptionWrapper.append(par); 
    });

    //Adds all files to the file section
    files.forEach(({path, name})=>{
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.innerText = name;
        anchor.setAttribute("href", path);

        li.append(anchor);
        filesList.append(li); 
    });

    imageModal(images);
}