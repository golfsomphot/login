
import { menu } from './route.js';



$(document).ready(function () {

    $("#navbar").append(menu);



    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup();


    // function displayResults(data) {

    //     if (data.location.lat) {

    //         L.marker([data.location.latitude, data.location.longitude]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup();
    //     }

    // }
    // console.log(data.location.latitude, data.location.longitude);

    $('#search-button').click(function () {
        const ip = $('#location_search').val();
        const apiKey = 'at_jBg8xxZGSY9db0W57XGM81YdiZYBz';


        // $.get(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&location=${location}`, function (nameip) {
        //     const ipAddress = nameip.ip;
        //     console.log("ipAddress",ipAddress);

        // https://geo.ipify.org/api/v2/country?apiKey=at_jBg8xxZGSY9db0W57XGM81YdiZYBz&ipAddress=8.8.8.8
        // https://geo-database.ipify.org/datafeeds
        // let locations = data.results[0].address_components[0].short_name

        // let lat = data.results[0].geometry.location.lat
        // let ing = data.results[0].geometry.location.ing

        $.get(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ip}`, function (data) {
            console.log(data);

            // const latitude = data.location.latitude;
            // const longitude = data.location.longitude;
            // console.log(`Latitude: ${latitude}`);
            // console.log(`Longitude: ${longitude}`);
            $('#IP').text(data.ip);
            $('#location').text(data.location.region);
            $('#timezone').text(data.location.timezone);
            $('#isp').text(data.isp);

            console.log(data);



        }).fail(function (error) {

            console.error('Error:', error);
            if (error.status === 403) {
                alert('Invalid API key or exceeded usage limits. Please check your key and usage.');
            } else {
                alert('An error .');
            }

        });
        // });


    });
});
