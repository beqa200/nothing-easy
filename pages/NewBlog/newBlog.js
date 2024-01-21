
const authorElements = document.getElementsByClassName('author');


function checkAuthor(event) {
   
    event.preventDefault();

    const input = event.target.value;

    const inputArr = input.split(" ");
    console.log(inputArr);

}







const form = document.getElementsByClassName("email-form")[0]; 

const msg = "მეილი უნდა მთავრდებოდეს @redberry.ge-ით";
const error = document.createElement("p");
error.classList.add("error_text");
error.textContent = msg;


const errorImage = document.createElement("img");
errorImage.src = "./image/info-circle.svg"; 
errorImage.alt = "Error Image";

const error_container = document.getElementById("error_container");

function checkemail(e) {
    e.preventDefault();
    const email = form.querySelector('[type="email"]').value;

    if (!validateEmail(email)) {
        form.classList.add("error");

        const existingError = error_container.querySelector('.error_text');
        if (!existingError) {
            error_container.appendChild(errorImage.cloneNode(true));
            error_container.appendChild(error.cloneNode(true));
            
        }
    } else {
        form.classList.remove("error");

        const existingError = error_container.querySelector('.error_text');
        if (existingError) {
            error_container.removeChild(existingError);
        }

        const existingImage = error_container.querySelector('img');
        if (existingImage) {
            error_container.removeChild(existingImage);
        }
    }
    console.log(email);
}
function validateEmail(email) {
    return email.includes("@redberry.ge");
}

form.addEventListener("submit", checkemail);

