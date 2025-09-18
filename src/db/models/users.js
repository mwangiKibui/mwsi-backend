

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User',{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    },{
        timestamps:true,
        modelName:"Users"
    });

    User.associate = (models) => {
        User.hasMany(models.UserRole,{foreignKey:"userId",as:"userRoles"});
        User.hasMany(models.Employee,{foreignKey:"userId",as:"employeeUsers"});
        User.hasMany(models.Employee,{foreignKey:"managerId",as:"employeeManagers"});
    }

    return User;

};