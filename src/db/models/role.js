

module.exports = (sequelize,DataTypes) => {
    const Role = sequelize.define('Role',{
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
        tableName:"Roles"
    });

    Role.associate = (models) => {
        Role.hasMany(models.UserRole,{foreignKey:"roleId",as:"userRoles"});
    }

    return Role;

};