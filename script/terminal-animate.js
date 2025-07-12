// Animate each .terminal-commands section one after the other
window.addEventListener('DOMContentLoaded', () => {
  const terminalSections = document.querySelectorAll('.terminal .terminal-commands');
  let delay = 0;
  const sectionDelay = 700; // ms between each section

  terminalSections.forEach((section, idx) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.7s cubic-bezier(0.4,0.2,0.2,1), transform 0.7s cubic-bezier(0.4,0.2,0.2,1)';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      // After the last section animates in, hide the blinking command
      if (idx === terminalSections.length - 1) {
        setTimeout(() => {
          const blink = document.getElementById('question');
          if (blink) blink.classList.remove('blink-command');
        }, 800); // after last section is visible
      }
    }, delay);
    delay += sectionDelay;
  });
});
