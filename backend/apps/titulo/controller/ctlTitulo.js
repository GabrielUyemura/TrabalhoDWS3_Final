const mdlTitulo = require("../model/mdlTitulo");

const getAllTitulo = (req, res) =>
  (async () => {
    let registro = await mdlTitulo.getAllTitulo();

    // Formata a data para o formato yyyy-mm-dd
    for (let i = 0; i < registro.length; i++) {
      const row = registro[i];
      const formattedDate = row.datavencimentotitulo.toISOString().split('T')[0];
      row.datavencimentotitulo = formattedDate;
    }
    res.json({ status: "ok", "registro": registro });
  })();

const getTituloByID = (req, res) =>
  (async () => {
    const idTitulo = parseInt(req.body.idtitulo);
    let registro = await mdlTitulo.getTituloByID(idTitulo);

    // Formata a data para o formato yyyy-mm-dd
    for (let i = 0; i < registro.length; i++) {
      const row = registro[i];
      const formattedDate = row.datavencimentotitulo.toISOString().split('T')[0];
      row.datavencimentotitulo = formattedDate;
    }

    res.json({ status: "ok", "registro": registro });
  })();

const insertTitulo = (request, res) =>
  (async () => {
    const tituloREG = request.body;
    let { msg, linhasAfetadas } = await mdlTitulo.insertTitulo(tituloREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const updateTitulo = (request, res) =>
  (async () => {
    const tituloREG = request.body;
    let { msg, linhasAfetadas } = await mdlTitulo.updateTitulo(tituloREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const deleteTitulo = (request, res) =>
  (async () => {
    const tituloREG = request.body;
    let { msg, linhasAfetadas } = await mdlTitulo.deleteTitulo(tituloREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

module.exports = {
  getAllTitulo,
  getTituloByID,
  insertTitulo,
  updateTitulo,
  deleteTitulo
};
