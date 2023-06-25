function con() {
    var mail = document.getElementById("mail").value;
    var pwd = document.getElementById("pwd").value;
    if (mail == "" || pwd == "") {
      window.alert("Veuillez remplir tous les champs s'il vous plait!");
      return false;
    } else {
      window.location.href = "users.html";
    }
}

/*function ok(){
  var ok = document.querySelector(".bonOk");
  ok.addEventListener('submit',function(){
    if(ok == 'submit'){
      window.alert('Ok');
    }
  });
}

function ok() {
  console.log("ok");
}

var bouton = document.getElementById("bonOk");
bouton.addEventListener("click", ok);*/


  /**/var ok = document.querySelector(".bonOk");
  ok.addEventListener('click',function(){
  if(ok = 'click'){
    window.alert('Votre bon a été soumis avec succès !                                                   Pour voir l\'historique de vos bons, cliquez sur le bouton historique!');
  }/*else{
    window.alert('echouee');
  }*/

});

/* bon de commande, annuler, modif... */


/*button.addEventListener('click',function() { 
			//window.alert('') 
      if(getComputedStyle(p).display != 'none' && getComputedStyle(button).display != 'none'){
        p.style.display='none';
      }else{
        p.style.display='block';
      }
		});  function bonOk(){}


*/
const btn = document.querySelector(".button");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
content.classList.toggle("content-reveal");
});

var commandes = [];

function resetForm() {
document.getElementById("nom_colis").value = "";
document.getElementById("lieu_de_ramassage").value = "";
document.getElementById("destination").value = "";
document.getElementById("prix").value = "";
document.getElementById("date").value = "";
selectedRow = null;
}

function Commander() {
var nom_colis = document.getElementById("nom_colis").value;
var lieu_de_ramassage = document.getElementById("lieu_de_ramassage").value;
var destination = document.getElementById("destination").value;
var prix = document.getElementById("prix").value;
var date = document.getElementById("date").value;


var commande = {
nom_colis: nom_colis,
lieu_de_ramassage: lieu_de_ramassage,
destination: destination,
prix: prix,
date: date
};

commandes.push(commande);

majTableau(commande);resetForm();
}

function majTableau(commande) {
var table = document.getElementById("commandes");
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);

cell1.innerHTML = commande.nom_colis;
cell2.innerHTML = commande.lieu_de_ramassage;
cell3.innerHTML = commande.destination;
cell4.innerHTML = commande.prix;
cell5.innerHTML = commande.date;
cell6.innerHTML = '<button style="font-size: 0.65em;width: 700;" class="blanc btn" onclick="modifierCommande(this)">Modifier &#8634;</button>';
cell7.innerHTML = '<button style="font-size: 0.65em;width: 700;" class="bleu btn" onclick="annulerCommande(this)">&#10006;Annuler</button>'; //<button >  Historique</button>
}

function modifierCommande(button) {
var row = button.parentNode.parentNode;
var index = row.rowIndex;
var commande = commandes[index - 1];

var nom_colis = prompt("Nouveau nom du colis :", commande.nom_colis);
var lieu_de_ramassage = prompt("Nouveau lieu de ramassage :", commande.lieu_de_ramassage);
var destination = prompt("Nouvelle destination :", commande.destination);
var prix = prompt("Nouveau prix :", commande.prix);
var date = prompt("Nouvelle date :", commande.date);

var nouvelleCommande = {
nom_colis: nom_colis,
lieu_de_ramassage: lieu_de_ramassage,
destination: destination,
prix: prix,
date: date
};

commandes[index - 1] = nouvelleCommande;

row.cells[0].innerHTML = nouvelleCommande.nom_colis;
row.cells[1].innerHTML = nouvelleCommande.lieu_de_ramassage;
row.cells[2].innerHTML = nouvelleCommande.destination;
row.cells[3].innerHTML = nouvelleCommande.prix;
row.cells[4].innerHTML = nouvelleCommande.date;
}



function annulerCommande(button) {
var row = button.parentNode.parentNode;
var index = row.rowIndex;

commandes.splice(index - 1, 1);

var table = document.getElementById("commandes");
table.deleteRow(index); 
}

function afficherHistorique() {
alert(JSON.stringify(commandes));
}

//menuToggle pour responsivite

window.addEventListener('scroll', function(){
            const header =document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        function toggleMenu(){
            const menutoggle = document.querySelector('.menutoggle');
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('active');
            menutoggle.classList.toggle('active');
        }