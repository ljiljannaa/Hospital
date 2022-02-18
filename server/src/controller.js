"use strict";

var model = require("./model.js");

module.exports.query = query;
module.exports.getOne = getOne;
module.exports.getSpecialties = getSpecialties
module.exports.postAppointment = postAppointment;

const doctorFileName = "doctors"
const scheduleFileName = "schedule"
const specialtiesFileName = "specialties"
const appointmentsFileName = "appointments"

function query(req, res) {
    model.load(doctorFileName, function(entities) {
        console.log(req.query);
        entities = filterDeleted(entities);
        if(req.query.filter){
            try {
                req.query.filter = JSON.parse(req.query.filter);
            } catch(e) {
                console.log('invalid query');
            }
            for(var key in req.query.filter) {
                entities = entities.filter(function(obj) {
                    if(obj[key] !== undefined) {
                        return obj[key].toString().toLowerCase().indexOf(req.query.filter[key].toLowerCase()) > -1;
                    }
                    return true;
                });
            }
        }
        var count = entities.length;

        if(req.query.sort) {
            entities = sort(entities, req.query.sort, req.query.sortDirection);
        }

        res.status(200).json({count: count, results: entities});
    });
}

function filterDeleted(entities) {
    return entities.filter(function(obj) {
        return !obj.deleted
    })
}

function sort(array, field, sortDirection) {
    if(sortDirection && sortDirection === 'desc') {
        return array.sort(function(a, b) { return (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0); });
    } else {
        return array.sort(function(a, b) { return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); });
    }
}

function save(req, res) {
    // console.log(req);
    model.load(modelName, function(entities) {
        var lastId = 1
        if(entities.length > 0){
            lastId = parseInt(entities[entities.length-1]._id);
        }
        req.body._id = lastId + 1;
        entities.push(req.body);
        model.save(modelName, entities);
        res.status(200).json(req.body);
    });
}

function getOne(req, res) {
    model.load(doctorFileName, function(entities) {
        let found = false
        for(var i = 0, n = entities.length; i < n; i++) {
            var elem = entities[i];
            if(req.params.id == elem._id) {
                found = true
                getSchedule(elem._id, function(schedule) {
                    elem.schedule = schedule
                    res.status(200).json(elem);
                    return;
                })
                break
            }
        }
        if (!found) {
            res.status(404).json({});

        }
    });
}

function getSchedule(doctor_id, cb) {
    model.load(scheduleFileName, function(entities) {
        for (var i = 0, n = entities.length; i < n; i ++) {
            var elem = entities[i];
            console.log(elem, doctor_id)
            if (elem.doctor_id === doctor_id) {
                cb(elem)
                return
            }
        }
    })
}

function getSpecialties(req, res) {
    model.load(specialtiesFileName, function(entities) {
        res.status(200).json(entities);
    })
}

function postAppointment(req, res) {
    model.load(appointmentsFileName, function(entities) {
        var lastId = 1
        if (entities.length > 0) {
            lastId = parseInt(entities[entities.length-1]._id);
        }
        req.body._id = lastId + 1;
        entities.push(req.body);
        model.save(appointmentsFileName, entities);
        res.status(200).json(req.body);
    })
}

