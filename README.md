Descrição do Projeto
Projeto feito solo, como no meu grupo havia 5 integrantes, fiquei sem dupla

Dificuldades Encontradas e Soluções Adotadas
1. Validação de Campos
Uma das principais dificuldades foi implementar a validação de campos de entrada para garantir a integridade dos dados. Para resolver isso, foi utilizado um simples sistema de validação dentro dos controladores que impede que dados inválidos sejam enviados ao banco de dados. Isso é feito utilizando verificações condicionais (como verificar se o nome do produto tem pelo menos 3 caracteres).

2. Conexão com o Banco de Dados
A conexão com o banco de dados MySQL foi configurada corretamente, mas houve algumas dificuldades iniciais com a configuração do pool de conexões. Para superar isso, foi adotada a prática de usar um pool de conexões para gerenciar eficientemente as requisições ao banco.

3. Testes no Postman
No início, houve um problema relacionado à ausência de dados na tabela do banco de dados, o que impediu que os testes com o Postman retornassem resultados. Para resolver isso, foi necessário inserir dados manualmente no banco de dados utilizando comandos SQL.

4. Usuario e PUT/DELETE
   Grandissima dificuldade em fazer funcionar o PUT e o DELETE no postman com os produtos, e, mesmo tendo a tabela USUARIOS no MySQL e no VSCODE, não se encontra no postman, problema não resolvido
   

Este projeto tem como objetivo desenvolver um sistema de gerenciamento de produtos e usuários, onde é possível realizar operações de CRUD (Create, Read, Update, Delete) tanto para produtos quanto para usuários. O sistema foi construído utilizando Node.js com o framework Fastify e um banco de dados MySQL. O foco principal foi estruturar o projeto utilizando o padrão MVC (Model-View-Controller), com validações de campos para garantir a integridade dos dados.


O projeto inclui:

Cadastro, listagem, atualização e exclusão de produtos.

Cadastro, listagem, atualização e exclusão de usuários.

Validações de dados como: nome de produto com mínimo de 3 caracteres, preço positivo e estoque não negativo.

Além disso, a aplicação foi testada utilizando Postman, garantindo que os endpoints estejam funcionando corretamente.



Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

MySQL: Banco de dados relacional utilizado para armazenar as informações.

Postman: Ferramenta para testar os endpoints da API.

MVC (Model-View-Controller): Padrão de arquitetura utilizado para separar a lógica da aplicação.



Funcionalidades
Cadastro e Gerenciamento de Produtos
A API permite realizar as seguintes operações para produtos:

GET /produtos: Retorna todos os produtos cadastrados.

GET /produtos/{id}: Retorna um produto específico com o ID fornecido.

POST /produtos: Cria um novo produto com validação dos dados.

PUT /produtos/{id}: Atualiza os dados de um produto específico.

DELETE /produtos/{id}: Exclui um produto específico.



Cadastro e Gerenciamento de Usuários
A API permite realizar as seguintes operações para usuários:

GET /usuarios: Retorna todos os usuários cadastrados.

GET /usuarios/{id}: Retorna um usuário específico com o ID fornecido.

POST /usuarios: Cria um novo usuário com validação dos dados.

PUT /usuarios/{id}: Atualiza os dados de um usuário específico.

DELETE /usuarios/{id}: Exclui um usuário específico.



Validações Implementadas
Nome do Produto: O nome do produto deve ter no mínimo 3 caracteres.

Preço do Produto: O preço deve ser um valor positivo.

Estoque: O estoque deve ser um número inteiro maior ou igual a zero.

E-mail do Usuário: O e-mail deve ser único para cada usuário.

Senha do Usuário: A senha deve ser fornecida para a criação e atualização de um usuário.


Exemplo de Funcionamento do MVC:
O Controlador recebe a requisição HTTP do cliente (Postman ou frontend).

O Controlador interage com o Model (banco de dados MySQL) para buscar ou alterar os dados.

O Controlador envia a resposta (dados ou mensagens de erro) de volta para o cliente.

Testando a API com o Postman
A API foi testada utilizando o Postman, uma ferramenta poderosa para testar APIs REST. Os seguintes passos foram realizados para testar a funcionalidade dos endpoints:

GET /usuarios: Testamos a listagem de todos os usuários cadastrados. Esperamos uma lista de objetos JSON com os dados dos usuários.


GET /usuarios/{id}: Testamos a recuperação de um usuário específico. Para isso, passamos um ID válido e esperamos os dados desse usuário em formato JSON.

POST /usuarios: Testamos a criação de um novo usuário. Enviamos um JSON com os dados necessários para criar um novo usuário.

PUT /usuarios/{id}: Testamos a atualização de um usuário existente. Enviamos um JSON com os dados atualizados.

DELETE /usuarios/{id}: Testamos a exclusão de um usuário específico, enviando o ID do usuário para a requisição.

O mesmo processo foi seguido para os produtos, utilizando os respectivos endpoints de produtos.

PRODUTOS:

GET
![image](https://github.com/user-attachments/assets/9f770a91-cce7-434f-ad9c-f804b27db6c8)

GET{}
![image](https://github.com/user-attachments/assets/0e2959d6-7072-4705-9eba-970a6acc426d)

POST
![image](https://github.com/user-attachments/assets/869bf38b-a91e-403d-a00b-7208879922e8)

