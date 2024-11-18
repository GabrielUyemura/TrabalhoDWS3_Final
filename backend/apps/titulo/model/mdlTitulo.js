const db = require("../../../database/databaseconfig");

const getAllTitulo = async () => {
  return (
    await db.query(
      "SELECT * FROM titulo " +
        "WHERE removidoTitulo = false " + 
        "ORDER BY dataVencimentoTitulo ASC"
    )
  ).rows;
};

const getTituloByID = async (idTituloPAR) => {
  return (
    await db.query(
      "SELECT * FROM titulo " +
        "WHERE idTitulo = $1 AND removidoTitulo = false " +
        "ORDER BY dataVencimentoTitulo ASC",
      [idTituloPAR]
    )
  ).rows;
};

const insertTitulo = async (tituloREGPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO titulo " + "VALUES(default, $1, $2, $3, $4)",
        [
          tituloREGPar.descricaoTitulo,
          tituloREGPar.valorTitulo,
          tituloREGPar.dataVencimentoTitulo,
          tituloREGPar.removidoTitulo
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlTitulo|insertTitulo] " + error.detail;
    linhasAfetadas = -1;
  }
  return { msg, linhasAfetadas };
};

const updateTitulo = async (tituloREGPar) => {
  let linhasAfetadas;
  let msg = "ok";
  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE titulo SET " +
          "descricaoTitulo = $2, " +
          "valorTitulo = $3, " +
          "dataVencimentoTitulo = $4, " +
          "removidoTitulo = $5 " +
          "WHERE idTitulo = $1",
        [
          tituloREGPar.idTitulo,
          tituloREGPar.descricaoTitulo,
          tituloREGPar.valorTitulo,
          tituloREGPar.dataVencimentoTitulo,
          tituloREGPar.removidoTitulo,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlTitulo|insertTitulo] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const deleteTitulo = async (tituloREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE titulo SET removidoTitulo = true " + 
            "WHERE idTitulo = $1",
        [tituloREGPar.idtitulo]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlTitulo|deleteTitulo] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllTitulo,
  getTituloByID,
  insertTitulo,
  updateTitulo,
  deleteTitulo,
};
