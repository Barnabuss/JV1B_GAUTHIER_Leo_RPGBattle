// on dit au JS quelles sont nos div joueurs et ennemi
pimpon= document.getElementById("PIMPON")
baptiste = document.getElementById("ennemieun")
Barredevie= document.getElementById("Barredevie")
baptistedeux = document.getElementById("ennemiedeux")
baptistetrois = document.getElementById("ennemietrois")
bus = document.getElementById("Bus")
pelleteuse = document.getElementById("Bonnepelle")
train = document.getElementById("Jouettrain")

// pareil pour les HPs
hppimpon = document.getElementById("hppimpon")
hpbaptiste = document.getElementById("hpbaptiste")
hpbaptistedeux = document.getElementById("hpbaptistedeux")
hpbaptistetrois = document.getElementById("hpbaptistetrois")
hpbus = document.getElementById("hpbus")
hppelleteuse = document.getElementById("hppelleteuse")
hptrain = document.getElementById("hptrain")
// pareil pour le Mana
manabaptsiste = document.getElementById("manabaptiste")
manabaptsistedeux = document.getElementById("manabaptistedeux")
manabaptsistetrois= document.getElementById("manabaptistetrois")
manapimpon = document.getElementById("manapimpon")
manapelleteuse= document.getElementById("manapelleteuse")
manatrain= document.getElementById("manatrain")
manabus= document.getElementById("manabus")
// le bouton servira a declencher les actions de jeu
bouton = document.getElementById("bouton_attaque")
boutonspecial = document.getElementById("bouton_special")
// cette box servira a montrer du texte en fonction de nos actions de jeu
textbox = document.getElementById("textbox")


// on a une variable tour pour pouvoir permettre de faire jouer les joueurs
tour = 0

// cette fonction renvoie un nombre aleatoire entre 0 et max
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// permet de faire attaquer un des joueur et de lui infliger des degats
// on va aussi afficher dans la box text ce qu'il se passe
function joueurAttaque(joueur,ennemi,hpEnnemi)
{


    // on a une valeur random qui correspond au degats infliges par le joueur
	var degats = getRandomInt(10);

    // on applique les degats a notre valeur
	hpEnnemi.innerHTML = hpEnnemi.innerHTML - degats;

    // on montre dans notre textbox ce qu'il s'est passe
	textbox.innerHTML = joueur + " inflige " + degats + " a " + ennemi + " !!!";

    // dans le cas ou le joueur meurt, on remet a zero pour ne pas avoir de hp negatifs
	if (hpEnnemi.innerHTML < 0){
		hpEnnemi.innerHTML = 0;
	}

    // on incremente le nombre de tour
	tour = tour + 1;
}

function joueurAttaquespecial(joueur,ennemi,hpEnnemi)
{



    // on a une valeur fixe de dgats assez eleves vu que c'est une action special
	var degatsspecial = 8;

    // on applique les degats a notre valeur
	hpEnnemi.innerHTML = hpEnnemi.innerHTML - degatsspecial;

    // on montre dans notre textbox ce qu'il s'est passe
	textbox.innerHTML = joueur + " inflige " + degatsspecial + " a " + ennemi + " !!!";

    // dans le cas ou le joueur meurt, on remet a zero pour ne pas avoir de hp negatifs (moche)
	if (hpEnnemi.innerHTML < 0){
		hpEnnemi.innerHTML = 0;
	}

    // on incremente le nombre de tour
	tour = tour + 1;
}


// fonction qui s'execute quand on clique sur le bouton attaquer
bouton.onclick = function()
{
    // si les hp des deux joueurs sont au dessus de zero, alors on joue
	if (hppimpon.innerHTML > 0 && hpbaptiste.innerText > 0) {
        // si le tour est pair
		if (tour == 0) {
            pimpon.style.filter = "none";
            bus.style.filter = "drop-shadow(0 0 2vh red)";
			joueurAttaque("pimpon", "baptiste", hpbaptiste,);
		}
		else if (tour == 1) {
            bus.style.filter = "none";
            pelleteuse.style.filter = "drop-shadow(0 0 2vh red)";
			joueurAttaque("Bus", "baptiste", hpbaptistedeux,);
		}
        else if (tour == 2) {
            pelleteuse.style.filter = "none";
            train.style.filter = "drop-shadow(0 0 2vh red)";
			joueurAttaque("bonnepelle", "baptiste", hpbaptistetrois,);
		}
        else if (tour == 3) {
            train.style.filter = "none";
            baptiste.style.filter = "drop-shadow(0 0 2vh red)";
			joueurAttaque("train", "baptiste", hpbaptiste,);
		}
        if (tour == 4) {
            baptiste.style.filter = "none";
            baptistedeux.style.filter = "drop-shadow(0 0 2vh red)";
            joueurAttaque("baptiste", "Bus", hpbus,);
        }
        else if (tour == 5) {
            baptistedeux.style.filter = "none";
            baptistetrois.style.filter = "drop-shadow(0 0 2vh red)";
            joueurAttaque("baptistedeux", "pimpon", hppimpon,);
        }
        else if (tour == 6) {
            baptistetrois.style.filter = "none";
            pimpon.style.filter = "drop-shadow(0 0 2vh red)";
            joueurAttaque("baptistetrois", "pelleteuse", hppelleteuse,);
            tour= 0
        }
	}
    
    // si un des joueurs a ses HP a zero alors :
    // si c'est pimpon qu'est mort
	else if (hppimpon.innerHTML == 0){
		textbox.innerHTML = "pimpon est mort"
	}
    // sinon si c'est baptiste
	else if (hpbaptiste.innerHTML == 0){
		textbox.innerHTML = "baptiste est mort"
	}
}



boutonspecial.onclick = function()
{
    // si les hp des deux joueurs sont au dessus de zero, alors on joue
	if (hppimpon.innerHTML > 0 && hpbaptiste.innerText > 0) {
        // si le tour est pair
		if (tour == 0) {
			joueurAttaquespecial("pimpon", "baptiste", hpbaptiste,);
		}
        // sinon c'est au tour de l'autre
		else if (tour == 1) {
			joueurAttaquespecial("Bus", "baptiste", hpbaptistedeux,);
		}
        else if (tour == 2) {
			joueurAttaquespecial("bonnepelle", "baptiste", hpbaptistetrois,);
		}
        else if (tour == 3) {
			joueurAttaquespecial("train", "baptiste", hpbaptiste,);
		}
        if (tour == 4) {
            joueurAttaquespecial("baptiste", "Bus", hpbus,);
        }
        else if (tour == 5) {
            joueurAttaquespecial("baptistedeux", "pimpon", hppimpon,);
        }
        else if (tour == 6) {
            joueurAttaquespecial("baptistetrois", "pelleteuse", hppelleteuse,);
            tour= 0
        }
	}
    
    // si un des joueurs a ses HP a zero alors :
    // si c'est pichu qu'est mort
	else if (hppimpon.innerHTML == 0){
		textbox.innerHTML = "pimpon est mort"
	}
    // sinon si c'est carmache
	else if (hpbaptiste.innerHTML == 0){
		textbox.innerHTML = "baptiste est mort"
	}
}
// fonction qui s'execute quand on passe notre souris sur l'image pichu
pimpon.onmouseover = function()
{
    console.log("pimpon");
    // on affiche les hp courants psk c'est bo
	textbox.innerHTML = "Pimpon a " + hppimpon.innerHTML + "hp"
}
baptiste.onmouseover = function()
{
    console.log("baptiste");
	textbox.innerHTML = "Baptiste a " + hpbaptiste.innerHTML + "hp"
}

bus.onmouseover = function()
{
    console.log("bus");
	textbox.innerHTML = "Bus a " + hpbus.innerHTML + "hp"
}

baptistedeux.onmouseover = function()
{
    console.log("baptistedeux");
	textbox.innerHTML = "Baptiste 2 a " + hpbaptistedeux.innerHTML + "hp"
}

baptistetrois.onmouseover = function()
{
    console.log("baptistetrois");
	textbox.innerHTML = "Baptiste 3 a " + hpbaptistetrois.innerHTML + "hp"
}

pelleteuse.onmouseover = function()
{
    console.log("pelleteuse");
	textbox.innerHTML = "Pelleteuse a " + hppelleteuse.innerHTML + "hp"
}

train.onmouseover = function()
{
    console.log("train");
	textbox.innerHTML = "Train Jouet a " + hptrain.innerHTML + "hp"
}


pimpon.onmouseout = function()
{
	// s'execute quand on sort de la box avec l'image pichu
    // la je met rien psk flemme, mais si vous aviez besoin
    // d'executer un truc quand la souris s'en va de la box
    // c'est  bien onmouseout qu'il faut utiliser
}



