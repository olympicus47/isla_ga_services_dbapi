const db = require('_helpers/db');

module.exports = {
    authenticate,
    getAllFrom,
    getByColValFrom,
    create,
    update,
    delete: _delete
};

//mostly async await functions which operate on the database

async function getAllFrom(tabel) {
    const fin = await tabel.findAll();
    return fin
}

//practic functia cauta in tabelul
async function getByColValFrom(tabel,coloana,valoare) {
    const fin = await tabel.findAll({
        where: {
            [coloana]: valoare,    
        }
    },
    );
}


