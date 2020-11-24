const form=document.querySelector('.saisie-donnee')
const voie=document.getElementById('voie');
const date=document.getElementById('date');
const heure=document.getElementById('heure');
const borne=document.getElementById('borne');
const vers=document.getElementById('vers');
const train=document.getElementById('train');

form.addEventListener('submit',(e) =>{
   

    if(!voie.value){
        e.preventDefault();
        alert("Manque le champ voie")
    }
    if(!date.value){
        e.preventDefault();
        alert("Manque le champ date")
    }
    if(!heure.value){
        e.preventDefault();
        alert("Manque le champ heure")
    }
    if(!borne.value){
        e.preventDefault();
        alert("Manque le champ borne")
    }
    if(!vers.value){
        e.preventDefault();
        alert("Manque le champ vers")
    }
    if(!train.value){
        e.preventDefault();
        alert("Manque le champ train")
    }
})
