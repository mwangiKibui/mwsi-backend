
module.exports = (sequelize,DataTypes) => {
    const Status = sequelize.define('Status',{
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
        modelName:"Status"
    });

    Status.associate = (models) => {
        Status.hasMany(models.Employee,{foreignKey:"statusId",as:"employeeStatuses"});
    }


    return Status;

};