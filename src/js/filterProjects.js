import api from "./api/index.js";
import listProjects from "./listProjects.js";

const checkboxes = Array.from(document.querySelectorAll('section.filterWrapper input[type="checkbox"]'));
checkboxes.forEach((checkbox) => checkbox.addEventListener("change", () => update()));

const data = await api.get("../../src/json/projects.json");

listProjects(data);

function update() {
    let selectedCategories = [];
    checkboxes.forEach(({name, checked}) => {
        if (checked) {
            selectedCategories.push(name);
        }
    });

    let filteredData = [...data].filter(({category}) => selectedCategories.every((cat) => category.includes(cat)));

    console.log(filteredData);
    listProjects(filteredData);
}