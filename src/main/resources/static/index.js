$(function () {
    saveMovies();
});

// Fetch movies dropdown list from server
function saveMovies() {
    $.get("/saveMovies", function (movies) {
        formatMovies(movies);
    });
}

// Format movies dropdown list
function formatMovies(movies) {
    let defaultValue = "Choose movie here";
    let out = "<select id='selectedMovie' onchange='validateMovies()'>";
    out += "<option value='default'>" + defaultValue + "</option>";

    for (const movie of movies) {
        out += "<option>"+movie.movies+"</option>";
    }
    out += "</select>";
    $("#movies").html(out);
}

// Input validation and check for empty fields
function validateMovies(input) {
    if (input === "" || input === "default") {
        $("#moviesErr").text("Movie is required");
        return false;
    } else {
        $("#moviesErr").text("");
        return true;
    }
}

function validateNumber(input) {
    if (input === "") {
        $("#numberErr").text("Quantity is required");
        return false;
    } else if (isNaN(input) || input < 1) {
        $("#numberErr").text("Enter numbers");
        return false;
    } else {
        $("#numberErr").text("");
        return true;
    }
}

function validateFname(input) {
    if (input === "") {
        $("#fnameErr").text("Name is required");
        return false;
    } else {
        $("#fnameErr").text("");
        return true;
    }
}

function validateSname(input) {
    if (input === "") {
        $("#snameErr").text("Surname is required");
        return false;
    } else {
        $("#snameErr").text("");
        return true;
    }
}

function validateTel(input) {
    const telRegex = /^[0-9]{8}$/;
    const ok = telRegex.test(input);
    if(input === "") {
        $("#telErr").text("Phone number is required");
        return false;
    } else if (!ok) {
        $("#telErr").text("Enter a valid phone number");
        return false;
    } else {
        $("#telErr").text("");
        return true;
    }
}

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%&+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ok = emailRegex.test(input);
    if(input === "") {
        $("#emailErr").text("Email number is required");
        return false;
    } else if (!ok) {
        $("#emailErr").text("Enter a valid email");
        return false;
    } else {
        $("#emailErr").text("");
        return true;
    }
}

function validateandsave(){
    const movieOK = validateMovies($("#selectedMovie").val());
    const numberOK = validateNumber($("#number").val());
    const fnameOK = validateFname($("#fname").val());
    const snameOK = validateSname($("#sname").val());
    const telOK = validateTel($("#tel").val());
    const emailOK = validateEmail($("#email").val());
    if (movieOK && numberOK && fnameOK && snameOK && telOK && emailOK) {
        buyTicket();
    }
}

// Function to handle the purchase of tickets
function buyTicket() {
        // Creates a ticket object and sends it to the server
        const ticket = {
            movies: $("#selectedMovie").val(),
            number: $("#number").val(),
            fname: $("#fname").val(),
            sname: $("#sname").val(),
            tel: $("#tel").val(),
            email: $("#email").val(),
        };
        $.post("/saveTickets", ticket, function (tickets) {
            getTickets(tickets);
        });
        // Resets input fields after sending the ticket
        $("#selectedMovie").val("default");
        $("#number").val("");
        $("#fname").val("");
        $("#sname").val("");
        $("#tel").val("");
        $("#email").val("");
}

// Fetch tickets from server
function getTickets() {
    $.get("/getTickets", function (tickets) {
        formatTickets(tickets);
    });
}

// Function to format tickets and display them
function formatTickets(tickets) {
    let out = "<table class='table table-striped'>" +
        "<tr><th>Movies</th><th>Number of tickets</th>" + "<th>Name</th>" +
        "<th>Surname</th><th>Phone number</th><th>Email</th></tr>";
    for (let pers of tickets) {
        out += "<tr>" +
            "<td>" + pers.movies + "</td>" +
            "<td>" + pers.number + "</td>" +
            "<td>" + pers.fname + "</td>" +
            "<td>" + pers.sname + "</td>" +
            "<td>" + pers.tel + "</td>" +
            "<td>" + pers.email + "</td>" +
            "</tr>";
    }
    $("#allTickets").html(out);
}

// Deletes all tickets
function deleteTickets() {
    $.get("/deleteTickets", function () {
        getTickets();
    });
}