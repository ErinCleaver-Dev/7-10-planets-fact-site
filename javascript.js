

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
        let current_plant =document.querySelector(".current_plant");
        console.log(current_plant);
        for(let i = 0; i < result.length; i++) {

            if(current_plant.querySelector('.plant_name').innerText === result[i].name) {
                console.log('texting querySelector')


                document.querySelector('#overview').addEventListener("click", event => {
                    console.log('test button 1')
                    document.querySelector('#overview').focus();
                    this.updateValues(result[i].overview.content, result[i].images.planet, result[i].overview.source, current_plant);
                })
                document.querySelector('#internal_structure').addEventListener("click", event => {
                    console.log('test button 2')
                    document.querySelector('#overview').focus();
                    this.updateValues(result[i].structure.content, result[i].images.internal, result[i].structure.source, current_plant);
                })
                document.querySelector('#surface_geology').addEventListener("click", event => {
                    console.log('test button 3')
                    document.querySelector('#overview').focus();
                    this.updateValues(result[i].geology.content, result[i].images.geology, result[i].geology.source, current_plant);
                });
            }
       
        }
        

    }


    updateValues(content, img, source, current_plant) {
        
        current_plant.querySelector('#wikipedia').href = source;
        current_plant.querySelector('#update_content').textContent = content;
        current_plant.querySelector('#update_image').src = img;

    }
}



let plant = new Plant();



plant.getPlantInfomration()
plant.updateCurrentPlantInfo()