const userForm = document.getElementById("create-user");
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // alert("Submit BUTTON is clicked")
    // console.log(e);
    // console.log(e.target.name.value);
    // console.log(e.target.city.value);
    const body = {
        name: e.target.name.value,
        city: e.target.city.value
    }
    const usersAPIUrl = "http://localhost:3000/users";
    const configuration = {
        method: "POST",
        body: JSON.stringify(body),
    };
    const response = await fetch(usersAPIUrl, configuration);
    const json = await response.json();
    alert("User Added");
    console.log(json);
});


const loadUsers = async () => {
    const usersAPIUrl = "http://localhost:3000/users";
    const response  = await fetch(usersAPIUrl);
    const json = await response.json();
    const userTrs = await parseUserIntoHtml(json);
    const usersTbody = document.getElementById("users");
    usersTbody.innerHTML = userTrs;
};

function getWeatherFormattedString(data) {
    const { name, region, country } = data.location;
    const { temp_c, temp_f, feelslike_c, feelslike_f, condition, wind_kph, wind_mph, wind_dir, humidity, pressure_mb, cloud, vis_km, vis_miles, uv, gust_kph, gust_mph, dewpoint_c, dewpoint_f } = data.current;

    return `
        The current weather in ${name}, ${region}, ${country}, is as follows:
        
        - **Temperature**: ${temp_c}°C (${temp_f}°F), but it feels like ${feelslike_c}°C (${feelslike_f}°F).
        - **Condition**: ${condition.text}.
        - **Wind**: Winds are coming from the ${wind_dir} at ${wind_kph} km/h (${wind_mph} mph), with gusts up to ${gust_kph} km/h (${gust_mph} mph).
        - **Humidity**: ${humidity}%.
        - **Pressure**: ${pressure_mb} mb.
        - **Cloud coverage**: ${cloud}%.
        - **Visibility**: ${vis_km} km (${vis_miles} miles).
        - **UV Index**: ${uv} (high).
        - **Dewpoint**: ${dewpoint_c}°C (${dewpoint_f}°F).
    `;
}

const parseUserIntoHtml = async (users) => {
    const usersTRs = users.map(async (user) => {
        const weatherAPIEndpoint = `http://api.weatherapi.com/v1/current.json?key=7419fe83fc6449afaef64803251003&q=${user.city}&aqi=no
`;
        const response = await fetch(weatherAPIEndpoint);
        const json = await response.json();
        const weatherInfo = getWeatherFormattedString(json);

        return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.city}</td>
            <td>${weatherInfo}</td>
        </tr>
        `
    });
    const promiseResult = await Promise.all(usersTRs);
    return promiseResult.join("");
};


loadUsers();