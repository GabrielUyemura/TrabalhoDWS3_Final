create table IF NOT EXISTS usuario (
    idUsuario bigserial constraint pk_usuario PRIMARY KEY,
    loginUsuario varchar(10) UNIQUE,
    senhaUsuario text,
    removidoUsuario boolean DEFAULT false
);

CREATE EXTENSION if NOT EXISTS pgcrypto;

insert into usuario values 
    (default, 'admin', crypt('admin', gen_salt('bf'))), -- senha criptografada com bcrypt
    (default, 'teste', crypt('teste', gen_salt('bf'))) -- senha criptografada com bcrypt
ON CONFLICT DO NOTHING;

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