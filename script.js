
function GotoMainHome() {
    window.location.href = "https://timetocode2.github.io/B";
};
let a = "a";
let b = "";
const box1 = document.getElementById('box1');

for (let i = 1; i <= 9; i++) {
    const box2 = document.createElement('div');
    box2.className = 'box2';
    box2.id = 'box2' + i;
    box1.appendChild(box2);
};

for (let i = 1; i <= 9; i++) {

    const move = document.getElementById('box2' + i);

    if (move) {
        move.addEventListener('click', () => {
            // let User1 = document.getElementById('name1').value.charAt(0).toUpperCase() + document.getElementById('name1').value.charAt(1).toLowerCase();
            // let User2 = document.getElementById('name2').value.charAt(0).toUpperCase() + document.getElementById('name2').value.charAt(1).toLowerCase();

            if (a == "a") {
                move.innerHTML = "❤️";
                move.style.pointerEvents = 'none';
                a = "b";
            } else if (a == "b") {
                move.innerHTML = "😎";
                move.style.pointerEvents = 'none';
                a = "a";
            };




            let mymove1 = document.getElementById('box2' + 1);
            let mymove2 = document.getElementById('box2' + 2);
            let mymove3 = document.getElementById('box2' + 3);
            let mymove4 = document.getElementById('box2' + 4);
            let mymove5 = document.getElementById('box2' + 5);
            let mymove6 = document.getElementById('box2' + 6);
            let mymove7 = document.getElementById('box2' + 7);
            let mymove8 = document.getElementById('box2' + 8);
            let mymove9 = document.getElementById('box2' + 9);




            if (mymove1 && mymove2 && mymove3) {
                if (mymove1.innerHTML == mymove2.innerHTML && mymove2.innerHTML == mymove3.innerHTML && mymove1.innerHTML !== "") {
                    mymove1.style.backgroundColor = "green";
                    mymove2.style.backgroundColor = "green";
                    mymove3.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove4 && mymove5 && mymove6) {
                if (mymove4.innerHTML == mymove5.innerHTML && mymove5.innerHTML == mymove6.innerHTML && mymove4.innerHTML !== "") {
                    mymove4.style.backgroundColor = "green";
                    mymove5.style.backgroundColor = "green";
                    mymove6.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove7 && mymove8 && mymove9) {
                if (mymove7.innerHTML == mymove8.innerHTML && mymove8.innerHTML == mymove9.innerHTML && mymove7.innerHTML !== "") {
                    mymove7.style.backgroundColor = "green";
                    mymove8.style.backgroundColor = "green";
                    mymove9.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove1 && mymove4 && mymove7) {
                if (mymove1.innerHTML == mymove4.innerHTML && mymove4.innerHTML == mymove7.innerHTML && mymove1.innerHTML !== "") {
                    mymove1.style.backgroundColor = "green";
                    mymove4.style.backgroundColor = "green";
                    mymove7.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove2 && mymove5 && mymove8) {
                if (mymove2.innerHTML == mymove5.innerHTML && mymove5.innerHTML == mymove8.innerHTML && mymove2.innerHTML !== "") {
                    mymove2.style.backgroundColor = "green";
                    mymove5.style.backgroundColor = "green";
                    mymove8.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove3 && mymove6 && mymove9) {
                if (mymove3.innerHTML == mymove6.innerHTML && mymove6.innerHTML == mymove9.innerHTML && mymove3.innerHTML !== "") {
                    mymove3.style.backgroundColor = "green";
                    mymove6.style.backgroundColor = "green";
                    mymove9.style.backgroundColor = "green";
                    a = "c";
                };
            };

            if (mymove1 && mymove5 && mymove9) {
                if (mymove1.innerHTML == mymove5.innerHTML && mymove5.innerHTML == mymove9.innerHTML && mymove1.innerHTML !== "") {
                    mymove1.style.backgroundColor = "green";
                    mymove5.style.backgroundColor = "green";
                    mymove9.style.backgroundColor = "green";
                    a = "c";
                };
            };


        });
    };

};



function reset() {
    for (let i = 1; i <= 9; i++) {
        const move = document.getElementById('box2' + i);
        if (move) {
            move.innerHTML = "";
            move.style.backgroundColor = "";
            move.style.pointerEvents = 'auto';
        };
    };
    a = "a";
};