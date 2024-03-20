// TODO: Create toggleMenu()
const toggleMenu = () => {
    const menu = document.querySelector('.menu-links'); //these are just pulling the css in styles.css
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open'); // this will open the hamburger menu (the three lines nav bar)
    icon.classList.toggle('open');
}
//DOM states that documents are tree-like. We have one node at the top connecting to everything else,

// TODO: Create sendEmail()
const sendEmail = () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mac.webdev.24@gmail.com",
        Password: "password",
        To: 'mac.webdev.24@gmail.com',
        From: email,
        Subject: `New Website Enquiry from ${name}`,
        Body: message
    }).then(function (message){
        // Reset form after successful submission
        alert("Email sent successfully!");
    });
}

// TODO: Create reset()