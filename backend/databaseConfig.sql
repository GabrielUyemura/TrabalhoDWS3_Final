
-- TABELA USUARIO (USUÁRIOS DO SISTEMA)
CREATE TABLE usuario (
    idUsuario SERIAL PRIMARY KEY,
    loginUsuario VARCHAR(50) NOT NULL UNIQUE,
    senhaUsuario VARCHAR(255) NOT NULL,
    removidoUsuario BOOLEAN DEFAULT FALSE
);

-- INSERÇÃO DE USUÁRIOS
INSERT INTO usuario (loginUsuario, senhaUsuario, removidoUsuario)
VALUES ('admin', 'admin', FALSE);

INSERT INTO usuario (loginUsuario, senhaUsuario, removidoUsuario)
VALUES ('teste', 'teste', FALSE);

-- TABELA TITULO (CONTAS A PAGAR)
CREATE TABLE titulo (
    idTitulo SERIAL PRIMARY KEY,
    descricaoTitulo VARCHAR(255) NOT NULL,
    valorTitulo DECIMAL(10, 2) NOT NULL,
    dataVencimentoTitulo DATE NOT NULL,
    removidoTitulo BOOLEAN DEFAULT FALSE
);

-- INSERÇÃO DE TÍTULOS (CONTAS A PAGAR) PARA TESTE
INSERT INTO titulo (descricaoTitulo, valorTitulo, dataVencimentoTitulo, removidoTitulo)
VALUES ('Pagamento de Aluguel', 1500.00, '2024-12-01', FALSE);

INSERT INTO titulo (descricaoTitulo, valorTitulo, dataVencimentoTitulo, removidoTitulo)
VALUES ('Serviço de Manutenção', 350.75, '2024-11-20', FALSE);

INSERT INTO titulo (descricaoTitulo, valorTitulo, dataVencimentoTitulo, removidoTitulo)
VALUES ('Compra de Materiais', 780.50, '2024-11-30', TRUE);