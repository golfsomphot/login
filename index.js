
// "username": "Bret",
// "email": "Sincere@april.biz",

$(document).ready(() => {
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

            $('#username, #email').addClass('invalid-input');
            alert('Please enter a valid username');
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