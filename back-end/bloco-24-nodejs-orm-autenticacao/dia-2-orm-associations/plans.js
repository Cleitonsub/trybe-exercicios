const createPlansModel = (sequelize, DataTypes) => {
  const plans = sequelize.define('Plans', {
    coverage: DataType.STRING,
    price: DataType.STRING,
  }, {
    tableName: 'plans',
    timestamps: false,
  });
  return plans;
}

module.exports = createPlansModel;

