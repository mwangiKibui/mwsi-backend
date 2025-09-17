

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

    return User;

};