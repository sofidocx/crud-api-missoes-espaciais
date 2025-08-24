//função createMission 

const missionModel = require('../models/missionModel');


exports.createMisison = (req, res) => {
    const missionData = req.body;

    missionModel.createMission(missionData, (err, missionId) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao tentar adicionar nova missão');
        } else {
            res.status(201).json({ id: missionId, message: 'Missão criada com sucesso' });
        }
    });
};


exports.getMission = (req, res) => {
    missionModel.getMission((err, missions) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao buscar as missões');
        } else {
            res.status(200).json(missions);
        }
    });
};

exports.getMissionById = (req, res) => {
    const id = req.params.id;
    missionModel.getMissionById(id, (err, mission) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erro ao tentar buscar missão por ID');
        } else if (mission) {
            res.status(200).json(mission);
        } else {
            res.status(404).send('Missão não encontrada');
        }
    });
};

exports.updateMission = (req, res) => {
    console.log(req.body);
    const id = req.params.id;
    const missionData = req.body;

    missionModel.updateMission(id, missionData, (err, changes) => {
        if (err) {
            console.error(err.message); 
            res.status(500).json({ message: 'Erro ao tentar atualizar a missão'}); 
        } else if (changes > 0) {
            res.status(200).json({ message: 'A missão foi atualizada com sucesso'});
        }else{
            res.status(404).json({ message: 'A missão não foi encontrada'}); 
        }
    })
}