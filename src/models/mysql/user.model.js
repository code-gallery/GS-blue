module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users",{
      userid: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      email: {
        allowNull: true,
        unique: true,
        type: DataTypes.STRING(255),
      },
      locations: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      mobile: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      profileimage: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      credit_issued: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      credit_remaining: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      expiry_date: {
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

  users.associate = function (models) {
    // Company.hasMany(models.CompanyRelatedChild, {foreignKey: 'user_id', as: 'relatedUsers'});
    // Company.hasMany(models.LoginToken, {foreignKey: 'company_id', as: 'relatedLoginToken'});
  };

  
  return users;
};
