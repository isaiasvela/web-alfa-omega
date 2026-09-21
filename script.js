document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const emailButton = document.getElementById('emailButton');
  const mailtoStatus = document.getElementById('mailtoStatus');

  if (emailButton) {
    emailButton.addEventListener('click', async (event) => {
      event.preventDefault();

      const email = 'alfaomegamusica@gmail.com';
      const subject = 'Consulta Orquesta Alfa & Omega';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        }
      } catch (error) {
        // El navegador puede no permitir copiar automáticamente, pero el enlace mailto sigue funcionando.
      }

      if (mailtoStatus) {
        mailtoStatus.textContent = 'Correo copiado. Se abrirá tu cliente de correo.';
      }

      window.location.href = mailtoLink;
    });
  }
});
