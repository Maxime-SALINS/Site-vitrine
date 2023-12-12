document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupération des valeurs des champs du formulaire dans des variables
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Gestion des erreurs du formulaire
    if (fname === "" || lname === "" || email === "" || subject === ""){
        alert("Tous les champs ne sont pas renseigné");
    } else{
        alert("Votre formulaire a été soumis !");
    };

    // Création d'un objet avec les valeurs des champs du formulaire
    let infoContact = {
        fname: fname,
        lname: lname,
        email: email,
        subject : subject,
        message: message
    }
    console.log(infoContact);
});