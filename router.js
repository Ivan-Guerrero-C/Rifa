const express = require('express');
const conexion = require('./database/db');
const router = express.Router();

//Listar Registros
router.get('/', (req, res)=>{
    
    conexion.query('select * from datos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results});
        }
    });
});

//Crea Registros
router.get('/create',(req,res)=>{
    res.render('create');
});

//Editar registros
router.get('/edit/:dat_id',(req, res)=>{
    const dat_id = req.params.dat_id;
    conexion.query('SELECT * FROM datos WHERE dat_id=?',[dat_id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit',{datos:results[0]})
        }
    });
})

//Eliminar registro
router.get('/delete/:dat_id', (req, res)=>{
    const dat_id = req.params.dat_id
    conexion.query('DELETE FROM datos WHERE dat_id=?', [dat_id],(error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})


//Ruta para para los procedimientos
const crud = require('./controllers/crud');

//Guarda Registros
router.post('/save',crud.save);

//Editar Registros
router.post('/update',crud.update);


module.exports = router;