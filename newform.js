function newForm() {

    const state = document.getElementById("state").value;
    const zip = document.getElementById("zipcode").value;
    const container = document.querySelector(".container");
    const reset = document.getElementById("reset")

    if (state.match(/new york/g) || state.match(/New York/g) || state.match(/New York/g) && zip >= 10000 && zip <= 10999) {
        container.addEventListener('input', (e) => {
            e.preventDefault();
            const getState = document.createElement("div");
            getState.id = 'gState';
            getState.innerHTML = "<br>New York<br> <br>45 Brook Street Brooklyn<br> <br>NY 10012<br> <br>United States.<br>";
            container.appendChild(getState);
            state = '';
            zip = '';
            getState.addEventListener('input', (e) => {
                e.target.remove();
            })
        });
    }
}

