const conexion = require('../database/db')

exports.save = (req, res)=>{
    const dat_nom = req.body.dat_nom;
    const dat_cor = req.body.dat_cor;
    const dat_tlf = req.body.dat_tlf;
    const dat_met_pag = req.body.dat_met_pag;
    conexion.query('INSERT INTO datos SET ?',{dat_nom:dat_nom, dat_cor:dat_cor, dat_tlf:dat_tlf, dat_met_pag}, (error, results)=>{
        if (error){
            console.log(error);
        }else
            res.redirect('/');
    });
}

exports.update = (req, res)=>{
    const dat_id = req.body.dat_id;
    const dat_nom = req.body.dat_nom;
    const dat_cor = req.body.dat_cor;
    const dat_tlf = req.body.dat_tlf;
    const dat_met_pag = req.body.dat_met_pag;
    conexion.query('UPDATE datos SET ? WHERE dat_id = ?', [{dat_nom:dat_nom, dat_cor:dat_cor, dat_tlf:dat_tlf, dat_met_pag}, dat_id],(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
};