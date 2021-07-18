window.onload = function () {
    var state = document.getElementById("state");
    var afficher = document.getElementById("cov1B");
    var measure = document.getElementById('measure');
    var devices = document.getElementById('devices');
    var newDisplay2 = document.getElementById('cov2B');

    state.onchange = function () {
        measure.onchange = function () {
            devices.onchange = function () {
                if (devices.selectedIndex === 0) {
                    newDisplay2.style.display = 'none';
                } else if (devices.selectedIndex === 1) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Basic subscription<br> <br>You could get more information.<br>";
                } else if (devices.selectedIndex === 2) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Basic subscription<br> <br>You could get more information.<br>";
                } else if (devices.selectedIndex === 3) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Silver subscription<br> <br>You could get more information.<br>";
                } else if (devices.selectedIndex === 4) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your approximate<br> <br>package is the Gold subscription<br> <br>You could get more information.<br>";
                } else if (devices.selectedIndex === 5) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your approximate<br> <br>package is the Diamond subscription<br> <br>You could get more information.<br>";
                } else if (devices.selectedIndex === 6) {
                    newDisplay2.style.display = 'block';
                    newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your approximate<br> <br>package is the Diamond subscription<br> <br>You could get more information.<br>";
                }
            }
            if (measure.selectedIndex === 0) {
                newDisplay2.style.display = 'none';
            } else if (measure.selectedIndex === 1) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Basic subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 2) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Basic subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 3) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Silver subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 4) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Gold subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 5) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your ideal<br> <br>package is the Gold subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 6) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your approximate<br> <br>package is the Diamond subscription<br> <br>You could get more information.<br>";
            } else if (measure.selectedIndex === 7) {
                newDisplay2.style.display = "block";
                newDisplay2.innerHTML = "<br>ESTIMATIONS:<br> <br>Based on our estimations, your approximate<br> <br>package is the Diamond subscription<br> <br>You could get more information.<br>";
            }
        }
        if (state.selectedIndex === 0) {
            afficher.style.display = 'none';
        } else if (state.selectedIndex === 1) {
            afficher.style.display = 'block';
            afficher.innerHTML = "<br><strong>BROOKLYN</strong>:<br> <br>14 Jamaica Avenue, Brooklyn<br> <br>NY, 10010.<br> <hr> <br><strong>BUFFALO:</strong><br> <br>34 Roosevelt Street, Buffalo<br> <br>NY, 13105.<br>";
        } else if (state.selectedIndex === 2) {
            afficher.style.display = 'block';
            afficher.innerHTML = "<br><strong>JERSEY CITY</strong>:<br> <br>89 James Road, Jersey City<br> <br>NJ, 17010.<br> <hr> <br><strong>NEWARK:</strong><br> <br>394 Madison Street, Newark<br> <br>NJ, 19105.<br>";
        } else if (state.selectedIndex === 3) {
            afficher.style.display = 'block';
            afficher.innerHTML = "<br><strong>BALTIMORE</strong>:<br> <br>17 Washington Avenue, Baltimore<br> <br>MD, 23900.<br> <hr> <br><strong>TOWSON:</strong><br> <br>90 Roosevelt Road, Towson<br> <br>MD, 23105.<br>";
        } else if (state.selectedIndex === 4) {
            afficher.style.display = 'block';
            afficher.innerHTML = "<br><strong>PITTSBURGH</strong>:<br> <br>212 Baton-Rouge Lane, Pittsburgh<br> <br>PA, 30010.<br> <hr> <br><strong>SCRANTON:</strong><br> <br>77 Dunder-Milfin Street, Scranton<br> <br>PA, 30105.<br>";
        } else if (state.selectedIndex === 5) {
            afficher.style.display = 'block';
            afficher.innerHTML = "<br><strong>EVANSTON</strong>:<br> <br>65 Waukegan Drive, Evanston<br> <br>IL, 40010.<br> <hr> <br><strong>URBANA:</strong><br> <br>87 McLittle Road, Urbana<br> <br>IL, 40005.<br>";
        }
    }
}
