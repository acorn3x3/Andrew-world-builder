
const environmentHeader = document.getElementById('environment-header');
const territoryHeader = document.getElementById('territory-header');
const cityHeader = document.getElementById('city-header');


const worldSelect = document.getElementById('world-select'); 
const territorySelect = document.getElementById('territory-select');
const citySelect = document.getElementById('city-select');
const championSelect = document.getElementById('champion-select');
const silverwingSelect = document.getElementById('silverwing-select');


const worldImage = document.getElementById('world-select');
const territoryImage = document.getElementById('territory-select');
const cityImage = document.getElementById('city-select');
const championImage = document.getElementById('champion-image');
const silverwingImage = document.getElementById('silverwing-image');




let environment = {
        world: 'The Void',
        territory: 'The Void',
        city: 'The Void',
        champion: 'Garen',
        silverwing: 'Silverwing',
};



worldSelect.addEventListener('change', () => {
environment.world = worldSelect.value;
displayEnvironment();


});

//territorySelect.addEventListener('change', () => {
    //environment.territory = territorySelect.value;
   // displayTerritory();
    
    
    //});

//citySelect.addEventListener('change', () => {
        //environment.city = citySelect.value;
       // displayCity();
        
        
       // });
       
 //championSelect.addEventListener('change', () => {
            //environment.champion = championSelect.value;
           // displayChampion();
            
            
           // });
           // silverwingSelect.addEventListener('change', () => {
                //environment.silverwing = silverwingSelect.value;
               // displaySilverwing();
                
                
                //}); 

//
function displayEnvironment() {



    environmentHeader.textContent = environment.world;
 

    environmentHeader.src = 'assets/' + environment.world + '.png';

}
//const addButton = document.getElementById('add-button');
displayEnvironment;
;