const pokeneas = require('../../list/pokeneas');
const os = require('os');

const getContainerId = () => {
    return os.hostname();
};

const getPokeneaJson = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const response = {
        id: randomPokenea.id,
        nombre: randomPokenea.nombre,
        altura: randomPokenea.altura,
        habilidad: randomPokenea.habilidad,
        containerId: getContainerId()
    };

    res.json(response);
};


module.exports = {
    getPokeneaJson,
};
