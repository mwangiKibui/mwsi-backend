const {createEmployee,getEmployees,getEmployeeById,updateEmployee,deleteEmployee} = require('../controllers/employee');
const {authenticateToken,IsManager} = require('../middlewares/auth');
const router = require('express').Router();

router.post('/create', authenticateToken,IsManager,createEmployee);
router.get('/', authenticateToken,IsManager,getEmployees);
router.get('/:id', authenticateToken,IsManager,getEmployeeById);
router.put('/:id', authenticateToken,IsManager,updateEmployee);
router.delete('/:id', authenticateToken,IsManager,deleteEmployee);

module.exports = router;