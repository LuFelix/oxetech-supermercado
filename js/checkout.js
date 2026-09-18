// ==========================================================================
// 📅 MÓDULO DE CHECKOUT, AGENDAMENTO & FINALIZAÇÃO (EXCLUSIVO: DEV 4 — Issue #04)
// Arquivo: js/checkout.js
// ==========================================================================

let selectedSlot = "Manhã (08h às 12h)";

// Abrir e Fechar Modal de Agendamento/Checkout
function openCheckoutModal() {
  closeCart();
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.style.display = "flex";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.style.display = "none";
}

// ==========================================================================
// 🎯 TAREFA DO DEV 4 (Issue #04 — Parte 1: Seleção da Janela de Entrega):
// 1. Remove a classe 'active' de todos os botões de horário (.slot-btn).
// 2. Adiciona a classe 'active' ao botão clicado.
// 3. Atualiza a variável global `selectedSlot` com o horário escolhido.
// ==========================================================================
function selectSlot(btn, slotName) {
  document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedSlot = slotName;
}

// ==========================================================================
// 🎯 TAREFA DO DEV 4 (Issue #04 — Parte 2: Finalização do Pedido & Resumo):
// 1. Fecha o modal de checkout.
// 2. Captura a forma de pagamento selecionada (Pix, Cartão, Dinheiro).
// 3. Gera um número de pedido aleatório no formato #G1-XXXX.
// 4. Preenche os campos do modal de sucesso (#success-modal) com:
//    - Número do Pedido
//    - Janela de Entrega escolhida
//    - Forma de Pagamento
//    - Valor Total Final com o desconto aplicado
// 5. Exibe o modal de sucesso.
// ==========================================================================
function confirmOrder() {
  closeCheckoutModal();

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const finalTotal = Math.max(0, subtotal - (typeof discountValue !== 'undefined' ? discountValue : 0));
  
  const paymentInput = document.querySelector('input[name="payment"]:checked');
  const paymentMethod = paymentInput ? paymentInput.value : "Pix Instantâneo";
  const orderId = "#G1-" + Math.floor(1000 + Math.random() * 9000);

  const orderIdEl = document.getElementById("success-order-id");
  const slotEl = document.getElementById("success-slot");
  const paymentEl = document.getElementById("success-payment");
  const totalEl = document.getElementById("success-total");
  const successModal = document.getElementById("success-modal");

  if (orderIdEl) orderIdEl.innerText = orderId;
  if (slotEl) slotEl.innerText = selectedSlot;
  if (paymentEl) paymentEl.innerText = paymentMethod;
  if (totalEl) totalEl.innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;

  if (successModal) successModal.style.display = "flex";
}

// ==========================================================================
// 🎯 TAREFA DO DEV 4 (Issue #04 — Parte 3: QA & Demonstração da Sprint Review):
// Função para reiniciar o estado do carrinho e permitir repetir o teste da demo.
// ==========================================================================
function resetDemo() {
  cart = [];
  if (typeof discountValue !== 'undefined') discountValue = 0;
  if (typeof discountType !== 'undefined') discountType = "none";
  updateCartUI();
  if (typeof renderProducts === "function") renderProducts();
  const successModal = document.getElementById("success-modal");
  if (successModal) successModal.style.display = "none";
}
