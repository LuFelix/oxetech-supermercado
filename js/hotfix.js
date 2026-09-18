// ==========================================================================
// 🚨 MÓDULO DE HOTFIX & GESTÃO DE CRISE (EXCLUSIVO: DEV EXPEDITE — Issue #05)
// Arquivo: js/hotfix.js
// ==========================================================================

// ==========================================================================
// 🎯 TAREFA DO DEV EXPEDITE (Cartão Hotfix Urgente):
// 1. O sistema estava permitindo abrir o modal de checkout com o carrinho vazio.
// 2. A função validateCheckout() abaixo intercepta o checkout e impede compras vazias.
// 3. Proteção e selo de auditoria ativos.
// ==========================================================================

function validateCheckout() {
  if (typeof cart !== 'undefined' && cart.length === 0) {
    alert("🚨 [HOTFIX / EXPEDITE] Seu carrinho está vazio! Adicione pelo menos 1 produto antes de ir para o checkout.");
    return false;
  }
  return true;
}

// Intercepta e protege a abertura do modal de checkout
const originalOpenCheckout = typeof openCheckoutModal === 'function' ? openCheckoutModal : null;
openCheckoutModal = function() {
  if (validateCheckout()) {
    if (originalOpenCheckout) originalOpenCheckout();
  }
};

// Injeta selo visual de sistema auditado e seguro
document.addEventListener("DOMContentLoaded", function() {
  const sealHtml = "<span style='color: #27ae60; font-weight: bold;'>🛡️ Hotfix Aplicado (Sistema Protegido)</span>";
  const footer = document.querySelector(".app-footer p");
  if (footer) {
    footer.innerHTML += " • " + sealHtml;
    return;
  }

  const brand = document.querySelector(".brand") || document.querySelector("header");
  if (brand) {
    const seal = document.createElement("span");
    seal.className = "audit-seal";
    seal.setAttribute("data-audit-seal", "hotfix-applied");
    seal.style.cssText = "display: inline-block; margin-top: 6px; color: #27ae60; font-weight: bold; font-size: 0.85rem;";
    seal.textContent = "🛡️ Hotfix Aplicado (Sistema Protegido)";
    brand.appendChild(seal);
  }
});
