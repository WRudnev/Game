function myfunc() {
    var b1, b2, b3, b4, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b1").value;
    b3 = document.getElementById("b1").value;
    b4 = document.getElementById("b1").value;
    b5 = document.getElementById("b1").value;
    b6 = document.getElementById("b1").value;
    b7 = document.getElementById("b1").value;
    b8 = document.getElementById("b1").value;
    b9 = document.getElementById("b1").value;

    if (b1.tolowercase() == 'x' && b2.tolowercase() == 'x' && b3.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    }
    if (b4.tolowercase() == 'x' && b5.tolowercase() == 'x' && b6.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    } if (b7.tolowercase() == 'x' && b8.tolowercase() == 'x' && b9.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    } if (b1.tolowercase() == 'x' && b4.tolowercase() == 'x' && b7.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    } if (b2.tolowercase() == 'x' && b5.tolowercase() == 'x' && b8.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    } if (b3.tolowercase() == 'x' && b6.tolowercase() == 'x' && b9.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    } if (b1.tolowercase() == 'x' && b5.tolowercase() == 'x' && b9.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    }
    if (b3.tolowercase() == 'x' && b5.tolowercase() == 'x' && b7.tolowercase() == 'x') {
        window.alert('You are a winner');
        reset();
    }

    if (b1.tolowercase() == 'o' && b2.tolowercase() == 'o' && b3.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    }
    if (b4.tolowercase() == 'o' && b5.tolowercase() == 'o' && b6.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    } if (b7.tolowercase() == 'o' && b8.tolowercase() == 'o' && b9.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    } if (b1.tolowercase() == 'o' && b4.tolowercase() == 'o' && b7.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    } if (b2.tolowercase() == 'o' && b5.tolowercase() == 'o' && b8.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    } if (b3.tolowercase() == 'o' && b6.tolowercase() == 'o' && b9.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    } if (b1.tolowercase() == 'o' && b5.tolowercase() == 'o' && b9.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    }
    if (b3.tolowercase() == 'o' && b5.tolowercase() == 'o' && b7.tolowercase() == 'o') {
        window.alert('You are a winner');
        reset();
    }
    function reset() {
        location.reload();
        document.getElementById("b1").value = '';
        document.getElementById("b2").value = '';
        document.getElementById("b3").value = '';
        document.getElementById("b4").value = '';
        document.getElementById("b5").value = '';
        document.getElementById("b6").value = '';
        document.getElementById("b7").value = '';
        document.getElementById("b8").value = '';
        document.getElementById("b9").value = '';
    }
    let flag = 1;
    function setvalue() {
        if (flag == 1) {
            this.value = "X";
            this.disabled = true;
            flag = 0;
        } else {
            this.value = "0";
            this.disabled = true;
            flag = 1;
        }
    }
}