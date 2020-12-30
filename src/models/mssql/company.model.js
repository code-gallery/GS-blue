

module.exports = (sequelize, DataTypes) => {
    const DKM$Customer = sequelize.define(process.env.BC_DB_NAME+'$Customer', {
       
        Name: DataTypes.STRING,
        NO_:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
          },
          'Customer Type':  DataTypes.STRING,
          'CUSTOMER GROUP':  DataTypes.STRING,       
          'COMPANY LOGO':  DataTypes.STRING,       
          'COMPANY Banner Image':  DataTypes.STRING,       
    }, {
        freezeTableName: true,
        timestamps: false
    });

    DKM$Customer.associate = function (models) {
      //  Company.hasMany(models.LoginToken, {foreignKey: 'company_id', as: 'relatedLoginToken'});
    }

    // Company.beforeSave(async (company, options) => {
    //     let err;
    // })

    return DKM$Customer;
};