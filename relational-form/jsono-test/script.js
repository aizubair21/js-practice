
fetch ("about.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.my.name)
        document.getElementById("name").innerHTML = data.my.divition;
    })