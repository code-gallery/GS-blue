module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define(
    "carts",
    {
      cart_id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      item_code: {
        allowNull: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      product_name: DataTypes.STRING,
      quantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      unit_price: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      minimum_order_fee: {
        allowNull: true,
        type: DataTypes.STRING,
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

  carts.associate = function (models) {
    // Company.hasMany(models.CompanyRelatedChild, {foreignKey: 'user_id', as: 'relatedUsers'});
    // Company.hasMany(models.LoginToken, {foreignKey: 'company_id', as: 'relatedLoginToken'});
  };

  return carts;
};
