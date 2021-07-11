

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
        this.overview = document.getElementById('overview');
        this.internal_structure = document.getElementById('internal_structure');
        this.surface_geology = document.getElementById('surface_geology');
        this.update_image = document.getElementById('update_image');
        this.update_content = document.getElementById('update_content');
        this.update_source = document.getElementById('update_source');
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
        plant_name = document.getElementById("plant_name")



    }

    OverView(content, img, source) {

    }
    

}



let plant = new Plant();



plant.getPlantInfomration()
plant.updateCurrentPlantInfo()