const hamburger = document.querySelector("#menu-btn");
const menu = document.querySelector(".hidden-menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    menu.classList.remove("hide");
});

close.addEventListener("click", () => {
    menu.classList.add("hide");
});

function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };
  
    const serviceID = "service_86c5mqh";
    const templateID = "template_sow2tdm";
  
    emailjs.send(serviceID,templateID,params).then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!");})
      .catch(err => console.log(err));
  }