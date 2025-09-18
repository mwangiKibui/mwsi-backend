module.exports = (sequelize,DataTypes) => {
    const UserRole = sequelize.define('UserRole',{
        roleId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'Roles',
                key:'id'
            },
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'Users',
                key:'id'
            },
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true
        }
    },{
        timestamps:true,
        modelName:"UserRoles"
    });

    UserRole.associate = (models) => {
        UserRole.belongsTo(models.Role,{foreignKey:"roleId",as:"role"});
        UserRole.belongsTo(models.User,{foreignKey:"userId",as:"user"});
    }

    return UserRole;

};