

let hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    let nav_hamburger = document.getElementById("nav_hamburger");

    if(nav_hamburger.style.display === "flex") {
        nav_hamburger.style.display = "none"
    } else {
        nav_hamburger.style.display = "flex"
    }
})

class Plant {
    constructor() {
        this.id = 2;
        this.json = 'https://erincleaver-grcc.github.io/plant-data/data.json';
        this.overview = document.querySelector('#overview');
        this.internal_structure = document.querySelector('#internal_structure');
        this.surface_geology = document.querySelector('#surface_geology');
    }


    async getPlantInfomration() {
        let links = document.getElementById('nav_hamburger').querySelectorAll('li a ');
        let selected_plant = Handlebars.compile(document.getElementById('selected_plant').innerHTML);
        let current_plant = document.querySelector('.current_plant')
        let resp = await fetch(this.json)
        let result = await resp.json();
        
        current_plant.innerHTML = selected_plant(result[this.id]);
        
        for(let i = 0; i < links.length; i++) {
            let link = document.getElementById(links[i].id)
            link.addEventListener('click', (event) => {
                event.preventDefault()
                if(link.textContent == result[i].name) {
                    current_plant.innerHTML = selected_plant(result[i]);
                    this.id = i;
                }
    
            })
            if(i > links.length) {
                console.log(result[i])
            }
        }
        
        console.log(this.id)
    }

    async updateCurrentPlantInfo () {
        let resp = await fetch(this.json)
        let result = await resp.json();
        let plant_name = document.querySelector(".plant_name")
        for(let i = 0; i < result.length; i++) {
            if(plant_name.textContent == result[i].name) {
                this.updateOverview(result[i].overview.content, result[i].images.planet, result[i].overview.source);
                this.updateInternalStructure(result[i].structure.content, result[i].images.internal, result[i].structure.source);
                this.updateSurfaceGeology(result[i].geology.content, result[i].images.geology, result[i].geology.source);
            }
        }
        

    }

    updateOverview(content, img, source) {
        this.updateValues(content, img, source)
    }

    updateInternalStructure(content, img, source) {
        this.updateValues(content, img, source)
    }
    updateSurfaceGeology(content, img, source) {
        this.updateValues(content, img, source)
    }

    updateValues(content, img, source) {
        update_image = querySelector('#update_image');
        update_content = document.querySelector('#ate_content');
        update_source = document.querySelector('#update_source');

        update_image = img;
        update_content = content;
        update_source = source;
    }
}



let plant = new Plant();



plant.getPlantInfomration()


