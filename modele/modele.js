const {DataTypes} = require('sequelize');

module.exports = { modelProduse,  modelLocatii, modelInventarProduse }
    
// adauga relatiile dintre tabele


// definitii modele


function modelLocatii(sequelize) {
    const attributes = {
        id_locatie: { type: DataTypes.TINYINT(8).UNSIGNED, allowNull: false, autoIncrement: true, primaryKey: true},
        nume_locatie: { type: DataTypes.STRING(100), allowNull: false },
        adresa_locatie: { type: DataTypes.STRING(255), allowNull: false },
    };
    
    const options = {
        freezeTableName: true,
        indexes: [
            {fields: ['nume_locatie','adresa_locatie']},
            {fields: ['adresa_locatie','nume_locatie']},
        ]
    };
    
    return sequelize.define('locatii', attributes, options);
}

function modelProduse(sequelize) {
    const attributes = {
        id_produs: { type: DataTypes.BIGINT(32).UNSIGNED, allowNull: false, autoIncrement: true, primaryKey: true},
        ean_produs: { type: DataTypes.BIGINT(62).UNSIGNED, allowNull: false },
        nume_produs: { type: DataTypes.STRING, allowNull: false },
        pret_produs: { type: DataTypes.DECIMAL(60,2), allowNull: false }
    };
    
    const options = {
        freezeTableName: true,
        indexes: [
            {fields: ['ean_produs','nume_produs' ,'pret_produs']},
            {fields: ['pret_produs', 'nume_produs' ,'ean_produs']},
            {fields: ['nume_produs','pret_produs']}
        ]
    };
    
    return sequelize.define('produse', attributes, options);
}

function modelInventarProduse(sequelize) {
    const attributes = {
        id_produs: { type: DataTypes.BIGINT(32).UNSIGNED, allowNull: false, primaryKey: true },
        id_locatie: { type: DataTypes.TINYINT(8).UNSIGNED, allowNull: false, primaryKey: true },
        cantitate_produs: { type: DataTypes.INTEGER(10), allowNull: false, defaultValue: 0 },
        cod_casa: { type: DataTypes.INTEGER(5), allowNull: false, defaultValue: 0 },
    };

    const options = {
        freezeTableName: true,
        indexes: [
            {fields: ['id_locatie','id_produs']},
            {fields: ['cantitate_produs',]},
        ]
    };

    return sequelize.define('inventar_produse', attributes, options);
}
