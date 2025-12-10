const allProjectsList = document.getElementById("allProjectsList");

export default function listProjects(data) {
    allProjectsList.innerHTML = "";
    
    if(data.length > 0){
        let projectList = [];
    
        //Creates the html for each project section and adds it to an array
        data.sort((a, b) => a.id < b.id).forEach(({id, title, date, images}) => {
            const section = document.createElement("section");
            const anchor = document.createElement("a");
            const h2 = document.createElement("h2");
            const img = document.createElement("div");
            const par = document.createElement("p");
    
            h2.innerText = title;
            par.innerText = date;
    
            img.style = `background-image: url("${images[0].path}");`;
            img.setAttribute("class", "thumbnail");
    
            anchor.setAttribute("href", "./view/?id=" + id);
    
            section.setAttribute("class", "projectItem");
    
            anchor.append(img, h2, par);
            section.append(anchor);
    
            projectList.push(section);
        });
    
        //Appends the array to the div
        allProjectsList.append(...projectList);

    }else{
        const message = document.createElement("p");
        message.setAttribute("class", "message error");
        message.innerText = "Found no projects matching selected categories";
        allProjectsList.append(message);
    }

}