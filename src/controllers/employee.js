const db = require('../db/models');

exports.createEmployee = async (req, res) => {  
    
    // create the employee.
    let employee = await db.Employee.create({
        ...req.body,
        createdBy: req.user.id
    });

    return res.status(201).json({
        success:true,
        message: 'Employee created successfully',
        data : employee 
    });

}

exports.getEmployees = async (req, res) => {
    // pagination
    let pageSize = req.params.pageSize ? parseInt(req.params.pageSize) : 10;
    let page = req.params.page ? parseInt(req.params.page) : 1;
    let offset = (page - 1) * pageSize;
    const {count,rows:employees} = await db.Employee.findAndCountAll({
        include: [
            { model: db.User, as: 'user', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.User, as: 'manager', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.User, as: 'creator', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.Status, as: 'status' },
            { model: db.EmploymentType, as: 'employmentType' }
        ],
        limit: pageSize,
        offset: offset
    });

    return res.json({
        success:true,
        message: 'Employees retrieved successfully',
        data : {
            count,
            currentPage: page,
            totalPages: Math.ceil(count / pageSize),
            employees
        } 
    });
}

exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const employee = await db.Employee.findByPk(id, {
        include: [
            { model: db.User, as: 'user', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.User, as: 'manager', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.User, as: 'creator', attributes: ['id', 'firstName', 'lastName', 'email'] },
            { model: db.Status, as: 'status' },
            { model: db.EmploymentType, as: 'employmentType' }
        ]
    });

    if (!employee) {
        return res.status(404).json({ success:false, message: 'Employee not found' });
    }

    return res.json({
        success:true,
        message: 'Employee retrieved successfully',
        data : employee 
    });
}

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    let employee = await db.Employee.findByPk(id);

    if (!employee) {
        return res.status(404).json({ success:false, message: 'Employee not found' });
    }

    await employee.update(req.body);

    return res.json({
        success:true,
        message: 'Employee updated successfully',
        data : employee 
    });
}

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    let employee = await db.Employee.findByPk(id);

    if (!employee) {
        return res.status(404).json({ success:false, message: 'Employee not found' });
    }

    await employee.update({
        isActive: false
    });

    return res.json({
        success:true,
        message: 'Employee deleted successfully'
    });
}