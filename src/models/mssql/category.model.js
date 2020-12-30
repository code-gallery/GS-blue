

module.exports = (sequelize, DataTypes) => {
    const DKM$Category = sequelize.define(process.env.BC_DB_NAME+'$Item wise Category' , {
       
        // 'timestamp': DataTypes.STRING,
        // NO_:{
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true // Automatically gets converted to SERIAL for postgres
        //   },

        
      // 'Customer No_':{
      //         type: DataTypes.STRING,
      //         primaryKey: true,
      //         allowNull: false,
      //       },
            'Category':{
              type: DataTypes.STRING,
              primaryKey: true,
              allowNull: false,
          },

          // 'Item No_':  DataTypes.STRING,
          // // 'Customer No_':  DataTypes.STRING,       
          // 'Category':  DataTypes.STRING,       
          // 'Entry No_':  DataTypes.INTEGER,       
          // 'Level 1':  DataTypes.STRING,       
          // 'Level 2':  DataTypes.STRING,       
          // 'Level 3':  DataTypes.STRING,       
                 
    }, {
        freezeTableName: true,
        timestamps: false
    });

    // DKM$Category.associate = function (models) {
    //   DKM$Category.hasMany(models.DKM$Customer, {foreignKey: 'Customer No_'});
    //   DKM$Category.hasMany(models.itemCategory, {foreignKey: 'Category'});
    // }

    // Company.beforeSave(async (company, options) => {
    //     let err;
    // })

    (async () => {
      await sequelize.sync({ force: true });
      // Code here
    })();

    return DKM$Category;
};