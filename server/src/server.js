"use strict";

var express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    controller = require("./controller.js");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.route("/api/doctors")
    .get(controller.query)
app.route("/api/doctors/:id")
    .get(controller.getOne)

app.route("/api/specialties")
    .get(controller.getSpecialties)

app.route("/api/appointments")
    .post(controller.postAppointment)



app.listen(3000, function() {
    console.log("Server started");
});