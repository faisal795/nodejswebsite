


let cityName = document.getElementById("cityName");
let submitbtn = document.getElementById("submitbtn");
let city_name = document.getElementById("city_name");

let temp_real_val = document.getElementById("temp_real_val");
let temp_status = document.getElementById("temp_status");
let data_hide = document.querySelector(".middle_layer")

let getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value

    if (cityVal == '') {
        city_name.innerHTML = `Plz write the Name Before Search`;
        data_hide.classList.add("data_hide");
    } else {

        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0c61e552fe32db7eb54a79d918e145d0`;
            let response = await fetch(url);
            let data = await response.json();
            let arryData = [data];


            city_name.innerText = `${arryData[0].name}, ${arryData[0].sys.country}`;
            temp_real_val.innerText = arryData[0].main.temp;
            // temp_status.innerText = arryData[0].weather[0].main;


            let tempMod = arryData[0].weather[0].main;

            //* Check to Condation sunny or Clouds
            if (tempMod == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempMod == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempMod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }

            data_hide.classList.remove("data_hide");
            cityVal = "";
            // console.log(response);
            // console.log(arryData);
            // console.log(arryData[0].main.temp);
            console.log(arryData[0].weather[0].main);

            // console.log(temp);
            // console.log(temp_status);


        } catch (error) {
            city_name.innerHTML = `Plz enter the valid city name`;
            data_hide.classList.add("data_hide");
        }
    }
}





submitbtn.addEventListener("click", getInfo);










// *  Set Date  &  Day



const getCurrentDay = () => {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let CurrentTime = new Date();
    console.log(weekday[CurrentTime.getDay()]);
    let days = weekday[CurrentTime.getDay()];
    let day = document.querySelector(".day");
    day.innerText = days;
}

const getCurrentTime = () => {

    var months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    let now = new Date();
    let month = months[now.getMonth()];
    let date = now.getDate();

    let today_date = document.querySelector(".today_date");
    today_date.innerText = month + " / " + date;
    console.log(date)
}

getCurrentDay();
getCurrentTime();