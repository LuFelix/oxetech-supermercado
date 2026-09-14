# 🛒 Supermercado Express — OxeTech (Grupo 1)

> **Projeto Integrador / Simulação de Sprint de Inovação (AV2)**  
> **Disciplina:** Modelos de Desenvolvimento de Software  
> **Líder / Scrum Master:** Luciano Felix  
> **Metodologia:** Design Thinking integrado ao SCRUM & Kanban  
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

---

## 🔗 4. Vinculação Obrigatória: Cartão Trello ↔ Issue GitHub (#ID)

Cada cartão técnico no Trello está **estritamente vinculado a uma Issue no GitHub através do seu `#ID`**:
* **Na Branch:** O nome da branch deve conter o ID da issue: `feature/issue-01-catalogo-produtos`.
* **No Commit Inicial:** `git commit --allow-empty -m "chore: initialize branch for Issue #01"`.
* **No Pull Request:** No corpo (descrição) da sua PR, escreva obrigatoriamente `Resolves #01` (ou `Closes #01`). Isso faz com que o GitHub vincule a PR à Issue correspondente e a feche automaticamente quando o merge for aprovado!

---

## 🌿 5. Protocolo de Branching e GitFlow (Padrão Ouro)

> ⚠️ **REGRA ABSOLUTA:** Jamais comite diretamente nas branches `main` ou `develop`. Todo trabalho deve ser isolado na sua própria branch.

### Passo 1: Como iniciar sua tarefa no terminal
```bash
# 1. Atualizar a develop local
git checkout develop
git pull origin develop

# 2. Criar e acessar a branch da sua Issue (exemplo para o Dev 1):
git checkout -b feature/issue-01-catalogo-produtos

# 3. Fazer o primeiro commit inicial com a referência da Issue e enviar ao GitHub:
git commit --allow-empty -m "chore: initialize branch for Issue #01"
git push -u origin feature/issue-01-catalogo-produtos
```

---

### Passo 2: Como abrir o Pull Request (PR)

Você pode abrir a sua PR de duas formas:

#### 🌐 Opção A: Pela Interface Web do GitHub (Mais Fácil e Recomendada)
1. Acesse a página do repositório no seu navegador no GitHub.
2. Você verá um banner amarelo no topo com o nome da sua branch recente. Clique no botão verde **"Compare & pull request"**.
   *(Caso não veja o banner, vá na aba **Pull Requests** e clique no botão verde **New pull request**, escolhendo `base: develop` e `compare: feature/SUA-FEATURE`).*
3. No campo **Título**, digite: `WIP: [Nome da sua tarefa]`.
4. No botão verde de envio, clique na setinha para baixo e escolha **"Create draft pull request"** (para indicar que o trabalho está em andamento).
5. Quando terminar de codificar e fizer o `git push` final, volte na página da sua PR no GitHub e clique no botão **"Ready for review"**.

#### 💻 Opção B: Pelo Terminal (Via GitHub CLI `gh`)
```bash
# Criar PR como rascunho (Draft)
gh pr create --draft --title "WIP: Nome da sua tarefa" --body "Resolves Issue"

# Marcar como pronta para revisão quando terminar
gh pr ready
```

---

### Passo 3: Como finalizar suas alterações
```bash
# 1. Adicionar os arquivos modificados e commitar
git add .
git commit -m "feat(modulo): implementa funcionalidade. closes #ID"

# 2. Enviar para a sua branch remota
git push origin feature/SUA-FEATURE

# 3. No Trello: Mova seu cartão para a coluna "Revisão de Código / QA".
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
