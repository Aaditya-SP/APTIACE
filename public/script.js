// ==========================
// REGISTER
// ==========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email =
            document.getElementById("registerEmail").value;

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");


        // Check passwords
        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            return;
        }


        try {

            const response = await fetch("/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });


            const data = await response.json();


            message.textContent = data.message;


            if (data.success) {

                setTimeout(() => {

                    window.location.href = "login.html";

                }, 1000);

            }

        } catch (error) {

            message.textContent =
                "Unable to connect to server.";

        }

    });

}


// ==========================
// LOGIN
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        const message =
            document.getElementById("loginMessage");


        try {

            const response = await fetch("/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });


            const data = await response.json();


            message.textContent = data.message;


            if (data.success) {

                window.location.href = "main.html";

            }

        } catch (error) {

            message.textContent =
                "Unable to connect to server.";

        }

    });

}


// ==========================
// MAIN PAGE LOGIN CHECK
// ==========================

if (window.location.pathname.endsWith("main.html")) {

    fetch("/check-login")

        .then(response => response.json())

        .then(data => {

            if (!data.loggedIn) {

                window.location.href = "login.html";

                return;
            }


            document.getElementById("userEmail").textContent =
                "Logged in as: " + data.email;

        })

        .catch(error => {

            console.error(error);

        });

}


// ==========================
// LOGOUT
// ==========================

async function logout() {

    await fetch("/logout");

    window.location.href = "login.html";

}