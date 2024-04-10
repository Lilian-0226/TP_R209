/*Question 1*/
let temp = 25;
let fahr = temp * 9/5 + 32;
console.log("Température en Fahreinheit", fahr);
console.log("Température en Celsius", temp);

/*Question 2*/
let longueur = 5;;
let largeur = 3;
let aire_rectangle = longueur*largeur;
console.log("Aire du rectangle", aire_rectangle);

/*Question 3*/
let prenom = "Maurice";
let nom = "Mauricette";
let nom_complet = prenom +" "+nom;
console.log("Nom complet :", nom_complet);

/*Question 4*/
let HT = 195;
const TVA = HT*0.2;
let TTC = TVA+HT;
console.log("Prix hors taxe :",HT ,"$");
console.log("Montant de la TVA :", TVA, "$");
console.log("Montant TTC :", TTC,"$");

/*Question 5*/
let result =  ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
console.log(result);

/*Question 6*/
let poids = 75
let taille = 1.85
let IMC = (poids / (taille*taille)).toFixed(2)
console.log("IMC :",IMC)

/*Question 7*/
const montantMinimumLivraisonGratuite = 50;
let montantTotalCommande = 40;
if (montantTotalCommande >= montantMinimumLivraisonGratuite) {
    console.log("Livraison gratuite !");
} else {
    var fraisLivraison = 5; // Par exemple, 5 euros
    console.log("Frais de livraison : " + fraisLivraison + " euros");
}

/*Question 8*/
let nombreBinaire = "1011";
let nombreDecimal = parseInt(nombreBinaire, 2);
console.log("Nombre binaire : " + nombreBinaire);
console.log("Conversion décimale : " + nombreDecimal);

