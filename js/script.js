$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    pagination: true,
    paginationSpeed: 1000,
    navigation: true,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
  $("#navigation").sticky({
    topSpacing: 75,
  });
});
// subscribe
const subscribeEmail = document.getElementById("subscribe-email");

const sendSubmit = (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asadullayevsuad679@gmail.com",
    Password: "DCFDCAFDAD0593B7BE07BC726044CD636F2A",
    To: "asadullayevsuad679@gmail.com",
    From: "asadullayevsuad679@gmail.com",
    Subject: "Your Subscribe from Yuzu Zen",
    Body: `
    Email: ${contactEmail.value}
    `,
  }).then((message) => {
    alert(message);
  });
  subscribeEmail.value = "";
};

// Contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "asadullayevsuad679@gmail.com",
    Password: "DCFDCAFDAD0593B7BE07BC726044CD636F2A",
    To: "asadullayevsuad679@gmail.com",
    From: "asadullayevsuad679@gmail.com",
    Subject: "Request from Yuzu Zen",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage.value}
    `,
  }).then((message) => {
    alert(message);
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};
