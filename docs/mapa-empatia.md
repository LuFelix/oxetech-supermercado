# 🎨 Guia de Construção do Mapa de Empatia (Dia 1 da Sprint)

> **Módulo Exclusivo: Dev 3 (UX & Design Thinking — Issue #03)**  
> **Branch no GitHub:** `feature/issue-03-design-thinking-empatia`  
> **Persona Central:** Dona Maria, 42 anos, contadora e mãe de 2 filhos.

---

## 🎯 1. Missão do Dev 3
Sua missão neste card é pegar as informações abaixo da persona *Dona Maria* e **gerar a imagem gráfica ou PDF visual do Mapa de Empatia** (utilizando ferramentas como Canva, Figma, Miro ou desenho esquematizado) e salvar o arquivo final gerado dentro desta pasta `docs/` (ex: `docs/mapa-empatia.png` ou `docs/mapa-empatia.pdf`).

---

## 👤 2. Perfil da Persona (Dona Maria)
* **Idade / Profissão:** 42 anos | Contadora
* **Família:** Casada, mãe de 2 filhos
* **Comportamento:** Faz compras quinzenais para a família após o trabalho. Possui rotina corrida, pouco tempo livre e odeia ter que ir ao supermercado físico à noite.
* **Objetivo:** Montar sua cesta de compras essenciais em menos de 5 minutos e receber os produtos corretos no horário combinado.

---

## 🧠 3. Conteúdo dos 4 Quadrantes para o Desenho Gráfico

### 💭 Quadrante 1: O que ela PENSA e SENTE?
* *"Não quero perder 40 minutos caçando arroz e feijão em menus poluídos."*
* *"Tenho receio de pedir uma marca e o supermercado trocar por outra sem me avisar."*
* Sente cansaço mental após o trabalho e busca praticidade e previsibilidade no valor final.

### 👀 Quadrante 2: O que ela VÊ?
* Aplicativos de supermercados tradicionais com excesso de categorias e banners confusos.
* Falta de transparência sobre a disponibilidade real dos produtos na gôndola.
* Amigas e colegas relatando entregas que chegam com itens trocados ou faltando.

### 👂 Quadrante 3: O que ela OUVE?
* Família cobrando os itens básicos que estão acabando na despensa.
* Propagandas que prometem entrega rápida mas cobram taxas de frete abusivas.
* Notícias sobre aumento de preços, exigindo controle rígido do orçamento.

### 🗣️ Quadrante 4: O que ela FALA e FAZ?
* Compra sempre os mesmos 6 a 10 produtos básicos todo mês.
* Desiste da compra online e vai ao supermercado físico se o app travar ou for complicado.
* Prioriza aplicativos que dão opção de escolher se aceita ou não substituição de itens.

---

## ⚡ 4. Dores vs. Ganhos

### 🔴 Dores (Pains):
1. **Perda de Tempo:** Navegação demorada para comprar produtos rotineiros.
2. **Substituição Arbitrária:** Receber marcas indesejadas sem autorização prévia.
3. **Incerteza na Entrega:** Não saber a faixa de horário em que o pedido chegará.

### 🟢 Ganhos Propostos pelo Incremento (Gains):
1. **Cesta Rápida do Mês em 1 Clique:** Adiciona a dispensa básica instantaneamente.
2. **Regras de Substituição Prévia:** O cliente define o que fazer se o item esgotar (*Substituir por similar*, *Reembolsar* ou *Avisar no WhatsApp*).
3. **Agendamento em 3 Turnos:** Entrega programada com pontualidade.

---

## 📋 5. Passos para Entrega do Dev 3:
1. Abra sua ferramenta visual favorita (Canva, Miro, Figma, etc.).
2. Monte o diagrama gráfico com a persona *Dona Maria* no centro e os 4 quadrantes preenchidos.
3. Exporte como imagem (`.png`/`.jpg`) ou `.pdf` e salve na pasta `oxetech-supermercado/docs/`.
4. Faça o commit na sua branch:
   ```bash
   git add docs/
   git commit -m "docs(ux): add visual empathy map graphic. closes #03"
   git push origin feature/issue-03-design-thinking-empatia
   ```
5. Abra o Pull Request no GitHub com `Resolves #03` e mova o card no Trello para **Revisão de Código / QA**.
