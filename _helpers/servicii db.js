// const db = require('./db');
const db = require('../modele/modele');

module.exports = {
    // authenticate,
    // getAllFrom,
    // getByColValFrom,
    // create,
    // update,
    // delete: _delete
};

//mostly async await functions which operate on the database

async function getLocatii() {
    const rez = await db.locatii.findAll();
    return rez
}

async function getProduse() {
    const rez = await db.produse.findAll();
    return rez
}

async function getInventar() {
    const rez = await db.inventar.findAll();
    return rez
}

async function getLocatieById(id) {
    rez = await db.locatie.findByPk(id);
    return rez;
}

async function getProdusById(id) {
    rez = await db.produs.findByPk(id);
    return rez;
}

async function getInventarById([id_produs, id_locatie]) {
    rez = await db.inventar.findByPk()
//practic functia cauta in tabelul
// async function getByColValFrom(tabel,coloana,valoare) {
//     const fin = await tabel.findAll({
//         where: {
//             [coloana]: valoare,    
//         }
//     },
//     );
// }


