let express = require('express');
let router = express.Router();
let parseToken = require("./middlewares/token");

//Rutas a los controladores personalizados

const usuarioController = require('../controllers').usuario;

router.get('/api/usuario', usuarioController.list);
router.get('/api/usuario/:id', usuarioController.getById);
router.post('/api/usuario', usuarioController.add);
router.put('/api/usuario/:id', usuarioController.update);
router.delete('/api/usuario/:id', usuarioController.delete);

const aporteController = require('../controllers').aporte;

router.get('/api/aporte', aporteController.list);
router.get('/api/aporte/:id', aporteController.list2);
router.get('/api/aporte/:id', aporteController.getById);
router.post('/api/aporte', aporteController.add);
router.put('/api/aporte/:id', aporteController.update);
router.delete('/api/aporte/:id', aporteController.delete);

/*const archivo_aporteController = require('../controllers').archivo_aporte;

router.get('/api/archivo_aporte', archivo_aporteController.list);
router.get('/api/archivo_aporte/:id', archivo_aporteController.getById);
router.post('/api/archivo_aporte', archivo_aporteController.add);
router.put('/api/archivo_aporte/:id', archivo_aporteController.update);
router.delete('/api/archivo_aporte/:id', archivo_aporteController.delete);*/

/*const aporte_cursoController = require('../controllers').aporte_curso;

router.get('/api/aporte_curso', aporte_cursoController.list);
router.get('/api/aporte_curso/:id', aporte_cursoController.getById);
router.post('/api/aporte_curso', aporte_cursoController.add);
router.post('/api/aporte_curso', aporte_cursoController.asociar);
router.put('/api/aporte_curso/:id', aporte_cursoController.update);
router.delete('/api/aporte_curso/:id', aporte_cursoController.delete);*/

const cursoController = require('../controllers').curso;

router.get('/api/curso', cursoController.list);
router.get('/api/curso/:id', cursoController.getById);
router.post('/api/curso', cursoController.add);
router.put('/api/curso/:id', cursoController.update);
router.delete('/api/curso/:id', cursoController.delete);

const inscripcion_cursoController = require('../controllers').inscripcion_curso;

router.get('/api/inscripcion_curso', inscripcion_cursoController.list);
router.get('/api/inscripcion_curso/:id', inscripcion_cursoController.getById);
router.post('/api/inscripcion_curso', inscripcion_cursoController.add);
router.put('/api/inscripcion_curso/:id', inscripcion_cursoController.update);
router.delete('/api/inscripcion_curso/:id', inscripcion_cursoController.delete);

const chequeo_aporteController = require('../controllers').chequeo_aporte;

router.get('/api/chequeo_aporte', chequeo_aporteController.list);
router.get('/api/chequeo_aporte/:id', chequeo_aporteController.getById);
router.post('/api/chequeo_aporte', chequeo_aporteController.add);
router.put('/api/chequeo_aporte/:id', chequeo_aporteController.update);
router.delete('/api/chequeo_aporte/:id', chequeo_aporteController.delete);

const LoginFunction = require("./auth/login");
router.post("/api/login", LoginFunction);


const LogOutFunction = require("./auth/logout");
router.post("/logout", parseToken, LogOutFunction);

const usuario_cursoController = require('../controllers').usuario_curso;
router.get('/api/usuario_curso/:id', usuario_cursoController.getById);

const aportes_del_cursoController = require('../controllers').aportes_del_curso;
router.get('/api/aportes_del_curso/:id', aportes_del_cursoController.getById);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
