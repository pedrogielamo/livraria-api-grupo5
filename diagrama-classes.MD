# 📝 Atividade 05 — Diagrama de Classes da Livraria (v1 - Rascunho)

**Unidade Curricular:** Programação Back-End | Bloco 2  
**Data:** 21/08/2026  
**Status do Projeto:** Rascunho inicial do diagrama de classes.

---

## 📌 1. Visão Geral e Progresso

Este documento registra o progresso da elaboração do diagrama de classes para o sistema da Livraria.

- **O que já está pronto:**
  - Mapeamento e desenho das 8 classes existentes (`Livro`, `Categoria`, `LivroFisico`, `LivroDigital`, `Pessoa`, `Cliente`, `Funcionario`, `Carrinho`).
  - Inclusão das duas novas classes da atividade (`Pedido` e `ItemPedido`), contendo seus respectivos atributos e métodos.
  - Definição das relações de **Herança** (`LivroFisico` e `LivroDigital` com `Livro`; `Cliente` e `Funcionario` com `Pessoa`).
  - Definição das relações de **Agregação** (`Livro` com `Categoria`; `Carrinho` com `Livro`), **Composição** (`Pedido` com `ItemPedido`) e **Associação** (`ItemPedido` com `Livro`; `Funcionario` com `Cliente` com o rótulo "atende").
  - Adição de multiplicidades nas principais relações.

- **O que falta / Próximos passos:**
  - Revisar refinamentos de atributos/métodos com base no feedback da próxima aula.
  - Finalizar a implementação no código-fonte das novas classes (`Pedido` e `ItemPedido`).

---

## 📊 2. Estrutura das Relações Mapeadas

## 2. Estrutura de Pastas do Esqueleto MVC
![Diagrama UML Final](/diagrama-classes-v1.png)
```text 
livraria-api-grupo5/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── CategoriaController.js
│   │   └── LivroController.js
│   ├── models/
│   │   ├── Categoria.js
│   │   ├── Cliente.js
│   │   ├── Funcionario.js
│   │   ├── Livro.js
│   │   ├── LivroDigital.js
│   │   ├── LivroFisico.js
│   │   └── Pessoa.js
│   ├── routes/
│   │   ├── categoriaRoutes.js
│   │   └── livroRoutes.js
│   └── services/
│       ├── CategoriaService.js
│       └── LivroService.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


## 💬 3. Discussões e Justificativas da Equipe (Parte 3)

### 1. Por que `Livro` / `Categoria` é agregação, e não composição?
> **Resposta:** Porque o `Livro` pode existir independentemente da `Categoria`, e a `Categoria` também existe sem o `Livro`. Se uma categoria for excluída do sistema, os livros cadastrados nela continuam existindo (eles não são destruídos junto com a categoria).

### 2. Por que `Pedido` / `ItemPedido` é composição, e não agregação?
> **Resposta:** Porque existe uma relação de dependência existencial estrita (todo/parte). Um `ItemPedido` não faz sentido existir sem estar vinculado a um `Pedido`. Se o `Pedido` for cancelado ou destruído, todos os seus `ItemPedido` deixam de existir.

### 3. O que `ItemPedido` / `Livro` (associação) tem de diferente das outras relações da tabela?
> **Resposta:** Diferente da agregação e composição (que são relações de posse/todo-parte, do tipo "tem um"), a associação entre `ItemPedido` e `Livro` representa apenas um **vínculo/referência**. O item do pedido apenas aponta/se refere ao livro cadastrado, sem ser dono dele e sem que a existência do livro dependa do item.

---

## 🖼️ 4. Arquivos do Diagrama

- **Imagem do Diagrama:** `docs/diagrama-classes-v1.png`
- **Ferramenta Utilizada:** [Draw.io](https://app.diagrams.net/)