/* ==========================================================================
   3D CERTIFICATE FLIP CARDS INTERACTION HANDLER
   Mobile tap toggle & keyboard accessibility (Enter / Space)
   ========================================================================== */

window.initFlipCards = function initFlipCards() {
  const cards = document.querySelectorAll('.flip-card');

  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', 'Toggle certificate details');

    // Click / Touch listener
    card.addEventListener('click', (e) => {
      const isFlipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
    });

    // Keyboard listener (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isFlipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
      }
    });
  });
};
