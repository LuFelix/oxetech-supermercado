// ==========================================================================
// 🚀 INICIALIZADOR PRINCIPAL DO APLICATIVO (ORQUESTRADOR)
// Arquivo: js/app.js
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar Vitrine de Produtos (Dev 1 - js/products.js)
  if (typeof renderProducts === "function") {
    renderProducts();
  }

  // 2. Inicializar Estado do Carrinho (Dev 2 - js/cart.js)
  if (typeof updateCartUI === "function") {
    updateCartUI();
  }

  console.log("🛒 Supermercado Express G1 carregado com sucesso em arquitetura modular!");
});
