module.exports = (sequelize, DataTypes) => {
    const user_credits = sequelize.define("user_credits",{
        ucid: {
          allowNull: false,
          autoIncrement: true,
          unique: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        credit_amount: {
          allowNull: true,
          unique: true,
          type: DataTypes.BIGINT,
        },
        used_date: {
            allowNull: true,
            type: DataTypes.DATE,
          },
        credit_expiry: {
          allowNull: true,
          type: DataTypes.DATE,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {}
    );
  
    user_credits.associate = function (models) {
      // Company.hasMany(models.CompanyRelatedChild, {foreignKey: 'user_id', as: 'relatedUsers'});
      // Company.hasMany(models.LoginToken, {foreignKey: 'company_id', as: 'relatedLoginToken'});
    };
  
    return user_credits;
  };
  