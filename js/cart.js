// ==========================================================================
// 🛒 MÓDULO DO CARRINHO, ESTOQUE & CUPOM (EXCLUSIVO: DEV 2 — Issue #02)
// Arquivo: js/cart.js
// ==========================================================================

let cart = [];
let discountValue = 0; // Valor abatido em R$
let discountType = "none"; // 'fixed' ou 'percent'

// Adicionar item individual ao carrinho
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  // ========================================================================
  // 🎯 TAREFA DO DEV 2 (Issue #02 — Validação e Controle de Estoque):
  // Verifique o estoque disponível com getAvailableStock(productId).
  // Se o estoque for 0 (esgotado), exiba um alert() e NÃO permita adicionar!
  //
  // Descomente o bloco abaixo para ativar a proteção:
  // ========================================================================
  /*
  const available = getAvailableStock(productId);
  if (available <= 0) {
    alert(`⚠️ Estoque esgotado para o produto "${prod.name}"!\nQuantidade máxima de ${prod.stock} unidades já atingida no carrinho.`);
    return; // Bloqueia a adição
  }
  */

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...prod,
      qty: 1,
      substitution: "Substituir por similar mais barato"
    });
  }

  updateCartUI();
  if (typeof renderProducts === "function") renderProducts(); // Atualiza a vitrine
  openCart();
}

// Adicionar Cesta Rápida do Mês (1 Clique)
function addQuickBasket() {
  let anyAdded = false;

  products.forEach(prod => {
    const available = getAvailableStock(prod.id);
    if (available > 0) {
      const existing = cart.find(item => item.id === prod.id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          ...prod,
          qty: 1,
          substitution: "Substituir por similar mais barato"
        });
      }
      anyAdded = true;
    }
  });

  if (!anyAdded) {
    alert("⚠️ Todos os produtos da cesta essencial já estão com estoque esgotado no seu carrinho!");
    return;
  }

  updateCartUI();
  if (typeof renderProducts === "function") renderProducts();
  openCart();
}

// Alterar Quantidade (+ / -) no Carrinho
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  const prod = products.find(p => p.id === productId);

  // ========================================================================
  // 🎯 TAREFA DO DEV 2 (Issue #02 — Validação de Estoque ao Incrementar +):
  // Ao clicar no botão (+), valide se o estoque já atingiu o limite máximo.
  // Descomente o bloco abaixo para ativar:
  // ========================================================================
  
  if (delta > 0 && prod) {
    const available = getAvailableStock(productId);
    if (available <= 0) {
      alert(`⚠️ Estoque esgotado para o produto "${prod.name}"!\nNão é possível adicionar mais unidades (Limite: ${prod.stock} un).`);
      return;
    }
  }
  

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  updateCartUI();
  if (typeof renderProducts === "function") renderProducts();
}

// Alterar Regra de Substituição
function updateSubstitution(productId, value) {
  const item = cart.find(i => i.id === productId);
  if (item) item.substitution = value;
}

// ==========================================================================
// 🎯 TAREFA DO DEV 2 (Issue #02 — Lógica de Avaliação de Cupons com if/else):
// Avalie o cupom digitado pelo cliente:
// - Se "PRIMEIRACOMPRA" -> Aplica R$ 10,00 fixos em dinheiro (discountType = 'fixed')
// - Se "SUPER10"        -> Aplica 10% de desconto (discountType = 'percent')
// - Se "SUPER15"        -> Aplica 15% de desconto (discountType = 'percent')
// - Senão               -> Exibe mensagem de cupom inválido
//
// Descomente o bloco abaixo para ativar a funcionalidade:
// ==========================================================================
function applyCoupon() {
  const couponInput = document.getElementById("coupon-code");
  const couponMsg = document.getElementById("coupon-msg");
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  
  if (code === "PRIMEIRACOMPRA") {
    discountType = "fixed";
    discountValue = 10.00;
    if (couponMsg) {
      couponMsg.innerText = "✅ Cupom PRIMEIRACOMPRA aplicado (R$ 10,00 OFF em dinheiro)!";
      couponMsg.style.color = "var(--success)";
    }
  } else if (code === "SUPER10") {
    discountType = "percent";
    discountValue = subtotal * 0.10; // 10% de desconto
    if (couponMsg) {
      couponMsg.innerText = "✅ Cupom SUPER10 aplicado (10% de desconto)!";
      couponMsg.style.color = "var(--success)";
    }
  } else if (code === "SUPER15") {
    discountType = "percent";
    discountValue = subtotal * 0.15; // 15% de desconto
    if (couponMsg) {
      couponMsg.innerText = "✅ Cupom SUPER15 aplicado (15% de desconto)!";
      couponMsg.style.color = "var(--success)";
    }
  } else {
    discountType = "none";
    discountValue = 0;
    if (couponMsg) {
      couponMsg.innerText = "❌ Cupom inválido. Use: PRIMEIRACOMPRA (R$ 10) ou SUPER10 (10%)";
      couponMsg.style.color = "var(--danger)";
    }
  }
  

  updateCartUI();
}

// Atualizar UI e Resumo do Carrinho
function updateCartUI() {
  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
  const headerCount = document.getElementById("header-cart-count");
  if (headerCount) headerCount.innerText = totalCount;

  const container = document.getElementById("cart-items-container");
  const footer = document.getElementById("drawer-footer");
  if (!container || !footer) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <p style="font-size: 3rem; margin-bottom: 10px;">🛒</p>
        <p>Seu carrinho está vazio.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Adicione produtos da vitrine ou use a Cesta Rápida.</p>
      </div>
    `;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-header">
        <span class="cart-item-title">${item.icon} ${item.name}</span>
        <span class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
      </div>

      <div class="cart-item-controls">
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <button class="btn-remove" onclick="changeQty(${item.id}, -${item.qty})">Remover 🗑️</button>
      </div>

      <div class="substitution-box">
        <label>Se faltar na gôndola:</label>
        <select class="substitution-select" onchange="updateSubstitution(${item.id}, this.value)">
          <option value="Substituir por similar mais barato" ${item.substitution === "Substituir por similar mais barato" ? "selected" : ""}>🔄 Substituir por similar (mais barato)</option>
          <option value="Não substituir (Reembolsar)" ${item.substitution === "Não substituir (Reembolsar)" ? "selected" : ""}>❌ Não substituir (Reembolsar)</option>
          <option value="Me ligar / Enviar WhatsApp" ${item.substitution === "Me ligar / Enviar WhatsApp" ? "selected" : ""}>📱 Me ligar / WhatsApp antes</option>
        </select>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  
  // Recalcular desconto se for percentual
  if (discountType === "percent") {
    const couponInput = document.getElementById("coupon-code");
    const code = couponInput ? couponInput.value.trim().toUpperCase() : "";
    if (code === "SUPER15") discountValue = subtotal * 0.15;
    else if (code === "SUPER10") discountValue = subtotal * 0.10;
  }

  const total = Math.max(0, subtotal - discountValue);

  const subtotalEl = document.getElementById("summary-subtotal");
  const totalEl = document.getElementById("summary-total");
  const modalTotalEl = document.getElementById("modal-order-total");

  if (subtotalEl) subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  if (modalTotalEl) modalTotalEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Controle da Gaveta (Drawer)
function openCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.style.display = "block";
  }
}

function closeCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.style.display = "none";
  }
}
