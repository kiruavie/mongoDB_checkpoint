db.contactList.insertMany([
  {
    nom: "Ben",
    prenom: "Fares",
    Email: "fares@gmail.com",
    age: 26,
  },
  {
    nom: "Kefi",
    prenom: "Seif",
    Email: "Kefi@gmail.com",
    age: 15,
  },
  {
    nom: "Fatnassi",
    prenom: "Sarra",
    Email: "sarra.f@gmail.com",
    age: 40,
  },
  {
    nom: "Ben Yashia",
    prenom: "Rym",
    age: 4,
  },
  {
    nom: "Cherif",
    prenom: "Sami",
    age: 3,
  },
]);

//afficher les informations d'une seule personne
db.contactList.findOne();

//Affichez tous les contacts âgés de > 18 ans
db.contactList.find({ age: { $gt: 18 } });

//Affichez tous les contacts avec un âge>18 et un nom contenant « ah ».
db.contactList.find({
  age: { $gt: 18 },
  name: { $regex: /ah/i },
});

//Changez le prénom du contact de « Kefi Seif » à « Kefi Anis »
db.contactList.updateOne({ prenom: "Seif" }, { $set: { prenom: "Anis" } });

//Supprimez les contacts âgés de moins de <5 ans
db.contactList.deleteOne({ age: { $lt: 5 } });

//Affichez toute la liste des contacts
db.contactList.find();
