const ecran = document.getElementById('ecran');
const Claire = document.getElementById('Claire')
const Sombre = document.getElementById('Sombre')
const form = document.getElementById('Calculatrice')
const body = document.getElementById('body')

Sombre.addEventListener('click', function(){
    ecran.style.background = 'aliceblue'
    ecran.style.color = 'black'
    form.style.background ='black'
    Claire.style.color ='#fff'
})
Claire.addEventListener('click', function(){
    ecran.style.background = 'black'
    ecran.style.color = '#fff'
    form.style.background ='aliceblue'
    Claire.style.color ='black'
})

document.addEventListener("keydown", function(event){
    console.log(event.key);

    if(!isNaN(event.key)){
        ajouter(event.key);
    }
    if(event.key==="+"){
        ajouter("+")
    }
    if(event.key==="-"){
        ajouter("-")
    }
    if(event.key==="*"){
        ajouter("*")
    }
    if(event.key==="/"){
        ajouter("/")
    }
    if(event.key ==="Enter"){
        Calculer();
    }
    if(event.key ==="Backspace"){
        Effacer();
    }

})
function ajouter(valeur){
    ecran.value += valeur; 
}
function Effacer(){
    ecran.value = " ";
}
function Calculer(){
    ecran.value = eval(ecran.value);
}
function Calculer(){
    try{
        ecran.value = eval(ecran.value);
    }
    catch(error){
        ecran.value ="Error";
    }
}