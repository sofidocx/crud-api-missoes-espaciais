
const db = require('../database/db');

//Função que cria uma nova missão no banco de dados 

exports.createMission = (missionData, callback) => {
    const { name, crew, spacecraft, destination, status, duration } = missionData; 

    const sql = `INSERT INTO missions (name, crew, spacecraft, destination, status, duration)
    VALUES (?, ?, ?, ?, ?, ?)`; 

    db.run(sql, [name, crew, spacecraft, destination, status, duration], function(err) {
        callback(err, this ? this.lastID : null); 
    });
};

exports.getMission = (callback) => {

    const sql = `SELECT * FROM missions`; 
    db.all(sql, [], (err, rows) => {
        callback(err,rows); 
    });    
};

exports.getMissionById = (id, callback) => {
    const sql = `SELECT * FROM missions WHERE id = ?`; 
    db.get(sql, [id], (err,row) => {
        callback(err, row); 
    });
};
