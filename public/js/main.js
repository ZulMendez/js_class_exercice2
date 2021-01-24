// # EXO1
// - Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}
// - Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
let lieu1 = new Lieu('molengeek');
let lieu2 = new Lieu('snack');
let lieu3 = new Lieu('maison')

// - Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }
    seDeplacer(start, end, transport) {
        // Se retirer du lieu de départ
        start.personnes.splice(start.personnes.indexOf(this), 1);
        console.log(`${this.prenom} sort de ${start.nom}`);
        // Vérifier si l'embarquement a eu lieu (Astuce: utiliser le return dans la méthode embarquer)
        if (transport.embarquer(this) == true) {
            // Si oui, mettre le personnage dans le lieu final.
            end.personnes.push(this);
            console.log(`${this.prenom} est arrivé à ${end.nom}.`);
        } else {
            // Si non, je reviens dans le lieu de départ et console.log plus assez d'argent, et ne pas bouger.
            start.personnes.push(this);
            console.log(`${this.prenom} n'a plus assez d'argent, et reste à ${start.nom}`);
        };

    }
}
// - Puis créez une instance de votre personnage.
let personne1 = new Personne('Mendez', 'Zulma', 25);
// - Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
class Bus {
    constructor(caisse){
        this.place = [];
        this.caisse = caisse;
        this.tarif = 2.80
    }
    embarquer(personne){
        if (personne.argent >= this.tarif) {
            this.place.push(personne);
            console.log(`${personne.prenom} monte dans le bus`);
            personne.argnet -= this.tarif;
            this.caisse += this.tarif;
            this.place.splice(this.place.indexOf(personne), 1);
            console.log(`${personne.prenom} sort du bus`);
            return true;
        } else {
            return false;
        }
    }
}
// - Créez une instance de Bus. 
// - 8h00 Vous êtes à la maison.
// - 8h30 Vous prennez le bus vers MolenGeek.
// - 8h45 Vous êtes à MolenGeek.
// - 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// - 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// - 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
let max = new Personne('Caliskan', 'Ayhan', 50);
let maison = new Lieu('Maison', [max]);
let molenGeek = new Lieu('MolenGeek', []);
let snack = new Lieu('Snack', []);
let bus = new Bus(0);

max.seDeplacer(maison, molenGeek, bus);
console.log('____________');
max.seDeplacer(molenGeek, snack, bus);
console.log('____________');
max.seDeplacer(snack, maison, bus);
console.log('____________');

// - Faites un console.log() de votre argent, ainsi que l'argent du Bus


// # EXO Bonus (refaire en class)
// - Créer deux personnages du nom de François et Sergio
// - Créer une propriete panier qui reçoit les ingrédients du super marché, par exemple huile,tomate,pain etc..
// - Rajouter à François la method derober, faites en sorte que François dérobe 2 aliments à Sergio 
// - Ecrivez tout le code ici dessous.
class Personnages {
    constructor(nom, panier){
        this.nom = nom;
        this.panier = panier;
    }
    derober(perso2) {
        for (let i = 0; i < 2; i++) {
            let produit = prompt(`Que voulez-vous derober ${perso2.panier}`);
            this.panier.push(produit);
            console.log(produit);
            perso2.panier.splice(perso2.panier.indexOf(produit), 1);
            
        }
    }
}
let personne1 = new Personnages('François', ['huile', 'tomate', 'pain', 'oeufs']);
let personne2 = new Personnages('Sergio', []);

personne2.derober(personne1);
console.log(personne1.panier);
console.log(personne2.panier);