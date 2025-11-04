const pokeneas = require('../list/pokeneas');
const os = require('os');

const getRandomPokenea = () => {
    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
};

const getPokeneaView = (req, res) => {
    const randomPokenea = getRandomPokenea();
    res.render('pokenea', {
        pokenea: randomPokenea,
        containerId: os.hostname()
    });
};

module.exports = {
    getPokeneaView
};
