const { Cookie } = require("express-session");
const axios = require("axios");
const moment = require('moment');

const manutTitulo = async (req, res) =>
  (async () => {
    //@ Abre o formulário de manutenção de Titulo
    const userName = req.session.userName;
    const token = req.session.token;

    const resp = await axios.get(process.env.SERVIDOR_DW3Back + "/getAllTitulo", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // Set JWT token in the header
      }
    }).catch(error => {
      if (error.code === "ECONNREFUSED") {
        remoteMSG = "Servidor indisponível"

      } else if (error.code === "ERR_BAD_REQUEST") {
        remoteMSG = "Usuário não autenticado";

      } else {
        remoteMSG = error;
      }
      res.render("titulo/view/vwManutTitulo.njk", {
        title: "",
        data: null,
        erro: remoteMSG, //@ Caso tenha da erro, a mensagem será mostrada na página html como um Alert
        userName: userName,
      });
    });

    if (!resp) {
      return;
    }


    res.render("titulo/view/vwManutTitulo.njk", {
      title: "",
      data: resp.data.registro,
      erro: null,
      userName: userName,
    });
  })();


const insertTitulo = async (req, res) =>
  (async () => {
    if (req.method == "GET") {
      const token = req.session.token;

      //@ Busca os cursos disponíveis
      const cursos = await axios.get(
        process.env.SERVIDOR_DW3Back + "/getAllTitulo", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // Set JWT token in the header
        }
      });

      return res.render("titulo/view/vwFCrTitulo.njk", {
        title: "Cadastro de Conta a Pagar",
        data: null,
        erro: null, //@ Caso tenha da erro, a mensagem será mostrada na página html como um Alert
        userName: null,
      });

    } else {
      //@ POST
      const regData = req.body;
      const token = req.session.token;

      try {
        // @ Enviando dados para o servidor Backend
        const response = await axios.post(process.env.SERVIDOR_DW3Back + "/insertTitulo", regData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          timeout: 5000, // @ 5 segundos de timeout
        });

        res.json({
          status: response.data.status,
          msg: response.data.status,
          data: response.data,
          erro: null,
        });
      } catch (error) {
        console.error('Erro ao inserir dados no servidor backend:', error.message);
        res.json({
          status: "Error",
          msg: error.message,
          data: response.data,
          erro: null,
        });
      }
    }
  })();

const viewTitulo = async (req, res) =>
  (async () => {
    const userName = req.session.userName;
    const token = req.session.token;

    try {
      if (req.method == "GET") {
        const id = req.params.id;
        oper = req.params.oper;
        parseInt(id);


        response = await axios.post(
          process.env.SERVIDOR_DW3Back + "/getTituloByID",
          {
            idtitulo: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (response.data.status == "ok") {

          response.data.registro[0].datavencimentotitulo = moment(response.data.registro[0].datavencimentotitulo).format(
            "YYYY-MM-DD"
          );

          res.render("titulo/view/vwFRUDrTitulo.njk", {
            title: "Visualizar Conta a Pagar",
            data: response.data.registro[0],
            disabled: true,
            userName: userName,
          });
        } else {
          console.log("[ctlTitulo|ViewTitulo] ID de Titulo não localizado!");
        }

      }
    } catch (erro) {
      res.json({ status: "[ctlTitulo.js|ViewTitulo] Título não localizado!" });
      console.log(
        "[ctlTitulo.js|viewTitulo] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

const updateTitulo = async (req, res) =>
  (async () => {
    const userName = req.session.userName;
    const token = req.session.token;
    try {
      if (req.method == "GET") {
        const id = req.params.id;
        parseInt(id);

        response = await axios.post(
          process.env.SERVIDOR_DW3Back + "/getTituloByID",
          {
            idtitulo: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (response.data.status == "ok") {
          response.data.registro[0].datavencimentotitulo = moment(response.data.registro[0].datavencimentotitulo).format(
            "YYYY-MM-DD"
          );

          res.render("titulo/view/vwFRUDrTitulo.njk", {
            title: "Editar Conta a Pagar",
            data: response.data.registro[0],
            disabled: false,
            userName: userName,
          });
        } else {
          console.log("[ctlTitulo|updateTitulo] Dados não localizados");
        }
      } else {
        //@ POST
        const regData = req.body;
        const token = req.session.token;
  
        try {
          // @ Enviando dados para o servidor Backend
          const response = await axios.post(process.env.SERVIDOR_DW3Back + "/updateTitulo", regData, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            timeout: 5000, // @ 5 segundos de timeout
          });

          res.json({
            status: response.data.status,
            msg: response.data.status,
            data: response.data,
            erro: null,
          });
        } catch (error) {
          console.error('[ctlTitulo.js|UpdateTitulo] Erro ao atualizar dados de Titulo no servidor backend:', error.message);
          res.json({
            status: "Error",
            msg: error.message,
            data: response.data,
            erro: null,
          });
        }
      }
    } catch (erro) {
      res.json({ status: "[ctlTitulo.js|UpdateTitulo] Titulo não localizado!" });
      console.log(
        "[ctlTitulo.js|UpdateTitulo] Try Catch: Erro não identificado",
        erro
      );
    }

  })();

const deleteTitulo = async (req, res) =>
  (async () => {
    //@ POST
    const regData = req.body;
    const token = req.session.token;

    try {
      // @ Enviando dados para o servidor Backend
      const response = await axios.post(process.env.SERVIDOR_DW3Back + "/deleteTitulo", regData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        timeout: 5000, // @ 5 segundos de timeout
      });

      res.json({
        status: response.data.status,
        msg: response.data.status,
        data: response.data,
        erro: null,
      });
    } catch (error) {
      console.error('[ctlTitulo.js|DeleteTitulo] Erro ao deletar dados de Titulo no servidor backend:', error.message);
      res.json({
        status: "Error",
        msg: error.message,
        data: response.data,
        erro: null,
      });
    }
  })();

module.exports = {
  manutTitulo,
  insertTitulo,
  viewTitulo,
  updateTitulo,
  deleteTitulo
};
