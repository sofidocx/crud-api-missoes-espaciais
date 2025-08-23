//função createMission 

const missionModel = require('../models/missionModel'); 

exports.createMisison = (req, res) => {
    const missionData = req.body; 

    missionModel.createMission(missionData, (err, missionId) => {
        if(err) {
            console.error(err.message); 
            res.status(500).send('Erro ao tentar adicionar nova missão'); 
        }else{
            res.status(201).json({id: missionId, message: 'Missão criada com sucesso'});
        }
    });
};
