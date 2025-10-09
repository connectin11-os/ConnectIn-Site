// Effet sur les boutons et images promo pour plus de dynamisme
document.querySelectorAll('.btn-principal, .btn-contact, .question-btn, nav a.btn-header, .promo-images img').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.05)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
  });

  // Transition douce pour le scale
  el.style.transition = 'transform 0.3s ease';
});

// Effet d’apparition douce au scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.question-btn, .promo-text');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Initialisation du style pour l'effet scroll
document.querySelectorAll('.question-btn, .promo-text').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.8s ease';
});

// Bouton "Contactez-nous" redirige vers WhatsApp
const btnContact = document.querySelector('.btn-contact');
if (btnContact) {
  btnContact.addEventListener('click', () => {
    window.open('https://wa.me/221767327046', '_blank');
  });
};
