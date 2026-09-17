# 🛒 Supermercado Express — OxeTech (Grupo 1)

> **Projeto Integrador / Simulação de Sprint de Inovação (AV2)**  
> **Disciplina:** Modelos de Desenvolvimento de Software  
> **Líder / Scrum Master:** Luciano Felix (@LuFelix)  
> **Metodologia:** Design Thinking integrado ao SCRUM & Kanban  
> **Repositório GitHub Oficial:** [LuFelix/oxetech-supermercado](https://github.com/LuFelix/oxetech-supermercado)  
> **Quadro Trello Oficial:** [G1 - Supermercado Express (Sprint Inovação)](https://trello.com/b/dipdw1CF/g1-supermercado-express-sprint-inova%C3%A7%C3%A3o)

---

## 📌 1. Sobre o Projeto

O **Supermercado Express** é uma aplicação web desenvolvida para resolver as principais dores do consumidor de supermercados online identificadas no **Design Thinking**:
1. **Perda de tempo excessiva** ao buscar dezenas de itens rotineiros um por um.
2. **Frustração por falta de transparência** quando itens esgotam na gôndola e são substituídos sem consentimento prévio.

### 💡 Diferenciais do Incremento:
* **⚡ Cesta Rápida do Mês:** Adição dos 6 produtos essenciais de dispensa com apenas 1 clique.
* **🔄 Regras de Substituição Inteligente:** O cliente escolhe produto por produto o que fazer se o item esgotar (*"Substituir por similar mais barato"*, *"Não substituir / Reembolsar"* ou *"Avisar via WhatsApp"*).
* **📅 Checkout & Agendamento:** Escolha da janela de horário de entrega (*Manhã, Tarde ou Noite*) e emissão instantânea de confirmação do pedido.

---

## 📂 2. Estrutura Modular de Arquivos

O projeto adota uma arquitetura modular limpa e desacoplada com **arquivos isolados por desenvolvedor** para garantir **zero risco de conflitos (*merge conflicts*) no Git**:

```text
oxetech-supermercado/
├── index.html                   # Estrutura semântica e carregamento dos módulos
├── README.md                    # Documentação oficial e guia passo a passo da equipe
├── css/
│   └── style.css                # Estilização, layout, cores e responsividade
├── js/
│   ├── products.js   <──────── 🧑‍💻 DEV 1 (Vitrine & Catálogo de Produtos)
│   ├── cart.js       <──────── 🧑‍💻 DEV 2 (Lógica do Carrinho, Totais & Cupom)
│   ├── checkout.js   <──────── 🔍 DEV 4 (Agendamento, Pagamento & Checkout)
│   ├── hotfix.js     <──────── 🚨 DEV EXPEDITE (Proteção & Hotfix de Crise)
│   └── app.js                   (Inicializador / Orquestrador principal)
└── docs/
    └── mapa-empatia.md <─────── 🎨 DEV 3 (Mapa de Empatia & Design Thinking)
```

---

## 👥 3. Distribuição de Papéis, Arquivos Exclusivos e Branches da Equipe

> 🛡️ **POLÍTICA ANTI-CONFLITO NO GIT:** Cada desenvolvedor possui um **arquivo exclusivo** para trabalhar. Dessa forma, todos podem abrir branches e Pull Requests simultâneos com **zero risco de colisão de código** (*merge conflicts*).

| Integrante | Papel no SCRUM | Arquivo Exclusivo | O que fará no arquivo | Branch no GitHub | Issue Vinculada |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Luciano Felix** | **Scrum Master / Líder** | `README.md` / Governança | Gestão do WIP no Trello, mediação do GitFlow e liderança da Sprint Review | `develop` / `main` | Governança |
| **Dev 1** | **Frontend (Vitrine & Estoque)** | 📄 `js/products.js` | Adicionar novos produtos essenciais e configurar o limite de **estoque (`stock`)** com badge | `feature/issue-01-catalogo-produtos` | **Issue #01** |
| **Dev 2** | **Lógica (Carrinho, Estoque & Cupons)** | 📄 `js/cart.js` | Implementar validação de estoque com `alert()` ao zerar e regras de cupons em `if/else` (**R$ 10** com `PRIMEIRACOMPRA`, **10%** com `SUPER10`, **15%** com `SUPER15`) | `feature/issue-02-carrinho-compras` | **Issue #02** |
| **Dev 3** | **UX (Design Thinking)** | 📄 `docs/mapa-empatia.md` | Montar o **desenho gráfico do Mapa de Empatia** (no Canva/Miro/Figma) e salvar a imagem/PDF na pasta `docs/` | `feature/issue-03-design-thinking-empatia` | **Issue #03** |
| **Dev 4** | **QA (Checkout & Testes)**| 📄 `js/checkout.js` | Conduzir a bateria de testes de aceitação (QA), testando limites de estoque e cupons sem erros | `feature/issue-04-checkout-qa` | **Issue #04** |
| **Dev Expedite** | **Hotfix (Gestão de Crise)** | 📄 `js/hotfix.js` | Implementar validação preventiva de carrinho vazio no checkout com `alert()` e selo de auditoria | `hotfix/expedite-checkout-vazio` | **Issue #09** |

---

## 🔗 4. Vinculação Obrigatória: Cartão Trello ↔ Issue GitHub (#ID)

Cada cartão técnico no Trello está **estritamente vinculado a uma Issue no GitHub através do seu número (#ID)**:
* **Na Branch:** O nome da sua branch deve conter o ID da issue correspondente.
* **No Pull Request:** Na descrição (corpo) da sua PR, escreva obrigatoriamente a palavra-chave **`Resolves #ID`** ou **`Closes #ID`** (ex: `Resolves #1`).
* **Baixa Automática:** Quando o Scrum Master (@LuFelix) aprovar e fizer o merge do seu PR, o **GitHub fechará a Issue automaticamente** e registrará o histórico de entrega!

### 📋 Tabela de Referência Rápida para Cada Desenvolvedor:

| Desenvolvedor | Issue no GitHub | Comando para criar a Branch | Texto Obrigatório na Descrição do PR |
| :--- | :--- | :--- | :--- |
| **🧑‍💻 Dev 1** | [#1 Visualizar produtos](https://github.com/LuFelix/oxetech-supermercado/issues/1) | `git checkout -b feature/issue-01-catalogo-produtos` | `Resolves #1` |
| **🧑‍💻 Dev 2** | [#2 Carrinho e cupons](https://github.com/LuFelix/oxetech-supermercado/issues/2) | `git checkout -b feature/issue-02-carrinho-compras` | `Resolves #2` |
| **🎨 Dev 3** | [#3 Mapa de empatia](https://github.com/LuFelix/oxetech-supermercado/issues/3) | `git checkout -b feature/issue-03-design-thinking-empatia` | `Resolves #3` |
| **🔍 Dev 4** | [#4 Agendamento e QA](https://github.com/LuFelix/oxetech-supermercado/issues/4) | `git checkout -b feature/issue-04-checkout-qa` | `Resolves #4` |
| **🚨 Dev Expedite** | [#9 Hotfix Checkout Vazio](https://github.com/LuFelix/oxetech-supermercado/issues/9) | `git checkout -b hotfix/expedite-checkout-vazio` | `Resolves #9` |

---

## 🌿 5. Protocolo de Branching e GitFlow (Padrão Ouro)

> 🚫 **REGRA ABSOLUTA DE GOVERNANÇA:**
> 1. **NUNCA faça commit ou push diretamente nas branches `main` ou `develop`!** (As branches possuem travas ativas de proteção).
> 2. **Todo e qualquer trabalho deve ser feito na sua branch `feature/...`**.
> 3. **Apenas o Scrum Master (@LuFelix) possui permissão para aprovar PRs e realizar o merge para a `develop`.**

---

### 🛠️ Guia Passo a Passo de Execução:

#### Passo 1: Como abrir sua branch a partir da `develop`
```bash
# 1. Certifique-se de estar na develop e com o código atualizado
git checkout develop
git pull origin develop

# 2. Crie e acesse a sua branch exclusiva (exemplo para o Dev 1):
git checkout -b feature/issue-01-catalogo-produtos

# 3. Faça um commit inicial para registrar a branch no GitHub:
git commit --allow-empty -m "chore: initialize branch for Issue #1"
git push -u origin feature/issue-01-catalogo-produtos
```

#### Passo 2: Como abrir o Pull Request (PR)
1. Acesse o repositório no GitHub: [https://github.com/LuFelix/oxetech-supermercado](https://github.com/LuFelix/oxetech-supermercado)
2. Clique no botão verde **"Compare & pull request"** da sua branch (ou vá na aba *Pull Requests* -> *New pull request* selecionando `base: develop` e `compare: SUA-BRANCH`).
3. No **Título**, coloque: `feat: [Nome da sua funcionalidade] (Issue #ID)`.
4. No **Corpo do PR**, certifique-se de preencher `Resolves #ID` (ex: `Resolves #1`) para dar baixa automática na Issue.
5. Marque o Scrum Master (**@LuFelix**) como revisor (ele já é configurado automaticamente via CODEOWNERS).

#### Passo 3: Como commitar e enviar suas alterações
```bash
# 1. Adicionar os arquivos modificados e commitar
git add .
git commit -m "feat: implementa funcionalidade da issue. closes #ID"

# 2. Enviar suas alterações para o GitHub
git push origin feature/SUA-BRANCH

# 3. No Trello: Mova seu cartão para a coluna "Revisão de Código / QA" e aguarde a revisão do Scrum Master!
```

---

## 🚀 5. Como Rodar a Aplicação Localmente

A aplicação foi construída em **HTML5, CSS3 e JavaScript Vanilla puro**, não exigindo instalação de dependências pesadas (`node_modules`) ou compiladores para executar:

1. **Opção 1 (Direto no Navegador):**
   * Dê dois cliques no arquivo `index.html` ou abra com o seu navegador favorito (Chrome, Firefox, Edge).
2. **Opção 2 (Com Live Server no VSCode):**
   * Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

---

## 📊 6. Quadro Kanban e Políticas de Trabalho (WIP)

O fluxo de trabalho oficial é gerenciado no Trello sob o **Sistema Puxado (*Pull*)**:
* **Limite de WIP (Work in Progress):** A coluna `Em andamento [WIP: 3]` possui teto máximo de **3 tarefas simultâneas** ativas, impedindo a sobrecarga e garantindo o foco em concluir tarefas antes de iniciar novas (*"Stop Starting, Start Finishing"*).
* **Gestão de Crise (Expedite):** Tarefas com etiqueta vermelha `[EXPEDITE] Urgente` possuem prioridade estrita de atendimento.
