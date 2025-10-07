module.exports = (sequelize,DataTypes) => {
    const EmploymentType = sequelize.define('EmploymentType',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        slug:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    },{
        timestamps:true,
        tableName:"EmploymentTypes"
    });

    EmploymentType.associate = (models) => {
        EmploymentType.hasMany(models.EmploymentType,{foreignKey:"employmentTypeId",as:"employeeEmploymentTypes"});
    }

    return EmploymentType;

};