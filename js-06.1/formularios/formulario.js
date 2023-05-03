const refForm = document.forms["registro"];

refForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = refForm.elements["inputEmail4"];
    const password = refForm.elements["inputPassword4"];
    const address = refForm.elements["inputAddress"];
    const city = refForm.elements["inputCity"];
    const state = refForm.elements["inputState"];
    const zip = refForm.elements["inputZip"];
    user = {
        email: email.value,
        password: password.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value
    };
    console.log(user);
});