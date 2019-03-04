window.addEventListener('load', () => {

    let btn_1 = document.getElementById('btn-1');
    let btn_2 = document.getElementById('btn-2');
    let btn_3 = document.getElementById('btn-3');
    let btn_4 = document.getElementById('btn-4');
    let btn_5 = document.getElementById('btn-5');
    let btn_6 = document.getElementById('btn-6');
    let btn_7 = document.getElementById('btn-7');
    let btn_8 = document.getElementById('btn-8');
    let btn_9 = document.getElementById('btn-9');
    let btn_10 = document.getElementById('btn-10');

    btn_1.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id1: 1},
            success: (res) => {
                btn_1.classList.remove('btn-secondary');
                btn_1.classList.add('btn-success');
                btn_1.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_2.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id2: 2},
            success: (res) => {
                btn_2.classList.remove('btn-secondary');
                btn_2.classList.add('btn-success');
                btn_2.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_3.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id3: 3},
            success: (res) => {
                btn_3.classList.remove('btn-secondary');
                btn_3.classList.add('btn-success');
                btn_3.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_4.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id4: 4},
            success: (res) => {
                btn_4.classList.remove('btn-secondary');
                btn_4.classList.add('btn-success');
                btn_4.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_5.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id5: 5},
            success: (res) => {
                btn_5.classList.remove('btn-secondary');
                btn_5.classList.add('btn-success');
                btn_5.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_6.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id6: 6},
            success: (res) => {
                btn_6.classList.remove('btn-secondary');
                btn_6.classList.add('btn-success');
                btn_6.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_7.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id7: 7},
            success: (res) => {
                btn_7.classList.remove('btn-secondary');
                btn_7.classList.add('btn-success');
                btn_7.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_8.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id8: 8},
            success: (res) => {
                btn_8.classList.remove('btn-secondary');
                btn_8.classList.add('btn-success');
                btn_8.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_9.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id9: 9},
            success: (res) => {
                btn_9.classList.remove('btn-secondary');
                btn_9.classList.add('btn-success');
                btn_9.textContent = "Odblokowano pytanie";
            }

        });

    });

    btn_10.addEventListener('click', () => {

        $.ajax({

            type: 'POST',
            url: 'http://localhost/bin/vue-projects/zadanie1/server/php/insert.php',
            data: {id10: 10},
            success: (res) => {
                btn_10.classList.remove('btn-secondary');
                btn_10.classList.add('btn-success');
                btn_10.textContent = "Odblokowano pytanie";
            }

        });

    });

});