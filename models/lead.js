

'use strict';
module.exports = (sequelize, DataTypes) => {
	var Lead = sequelize.define('Lead', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataType.UUIDV4,

			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataTypes.String,
			allowNull: false,
		},
	});

	return Lead;
};