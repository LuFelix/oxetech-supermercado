// ==========================================================================
// 📦 MÓDULO DE PRODUTOS & VITRINE (EXCLUSIVO: DEV 1 — Issue #01)
// Arquivo: js/products.js
// ==========================================================================

const products = [
  { id: 1, name: "Arroz Tipo 1 Camil", unit: "Pacote 5kg", price: 28.90, stock: 5, icon: "🌾" },
  { id: 2, name: "Feijão Carioca Kicaldo", unit: "Pacote 1kg", price: 8.50, stock: 3, icon: "🫘" },
  { id: 3, name: "Leite Integral Parmalat", unit: "Caixa 1L", price: 5.80, stock: 4, icon: "🥛" },
  { id: 4, name: "Café Torrado Pilão", unit: "Pacote 500g", price: 18.90, stock: 4, icon: "☕" }
  
  // ========================================================================
  // 🎯 TAREFA DO DEV 1 (Issue #01):
  // 1. Descomente e adicione os 2 novos produtos abaixo com o campo stock:
  //
  // , { id: 5, name: "Óleo de Soja Liza", unit: "Garrafa 900ml", price: 7.20, stock: 4, icon: "🌻" }
  // , { id: 6, name: "Açúcar Refinado União", unit: "Pacote 1kg", price: 4.60, stock: 5, icon: "🍬" }
  // ========================================================================
];

// Calcular estoque disponível em tempo real
function getAvailableStock(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return 0;

  const itemInCart = typeof cart !== 'undefined' ? cart.find(i => i.id === productId) : null;
  const inCartQty = itemInCart ? itemInCart.qty : 0;
  return Math.max(0, prod.stock - inCartQty);
}

// Renderizar Vitrine de Produtos com Badge de Estoque
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = products.map(p => {
    const available = getAvailableStock(p.id);
    const isOutOfStock = available === 0;

    const badgeStyle = isOutOfStock
      ? "background: #ffebe6; color: #de350b; border: 1px solid #ff8f73;"
      : "background: #eef7ee; color: var(--primary); border: 1px solid var(--primary);";

    const badgeText = isOutOfStock ? "ESGOTADO (0 un)" : `Estoque: ${available} un`;

    return `
      <div class="product-card" style="${isOutOfStock ? 'opacity: 0.85;' : ''}">
        <div>
          <div class="product-img" style="position: relative;">
            ${p.icon}
            <span style="position: absolute; top: 8px; right: 8px; font-size: 0.75rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; ${badgeStyle}">
              ${badgeText}
            </span>
          </div>
          <div class="product-name">${p.name}</div>
          <div class="product-unit">${p.unit}</div>
        </div>
        <div class="product-bottom">
          <span class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
          <button class="btn-add" onclick="addToCart(${p.id})">
            ${isOutOfStock ? 'Esgotado ❌' : '➕ Adicionar'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}
