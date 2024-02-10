
// "username": "Bret",
// "email": "Sincere@april.biz",
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$(document).ready(function () {
    $('#username, #email').removeClass('invalid-input');

    let activeform_login = {
        username: '',
        email: '',
    }
    $('#btn_submit').click(() => {
        event.preventDefault();

        activeform_login.username = $('#username').val();
        activeform_login.email = $('#email').val();


        if (activeform_login.username !== '' && activeform_login.email !== '') {
            getdatalogin()
        } else {
            $('#Valid').css('display', 'flex');
            $('#username, #email').addClass('invalid-input');
            $('#email').attr('placeholder', 'Invalid email').css({
                'color': 'red',
                'background-color': 'rgb(243, 166, 131)'
            });

        }

    });

    getdatalogin = async () => {
        let data = [];

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {

                headers: { 'Accept': 'application/json' },
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('response was not ok');
            }
            data = await response.json();

            // เช็คล็อกอิน
            if (data.length > 0) {

                const dataUsername = data.find((e) => {
                    return e.username === activeform_login.username
                });

                if (dataUsername.username === activeform_login.username) {



                    if (dataUsername.email === activeform_login.email) {
                        window.location.href = './componect/home.html';
                        // window.location.href = 'home.html';
                        // history.pushState('/componect/home');


                    } else {
                        alert("emailไม่ถูกต้อง:" + dataUsername.email);
                    }

                } else {
                    alert("Userไม่ถูกต้อง:" + dataUsername.username);
                }
            }


        } catch (error) {
            console.error(error.message);
        }


    };


});