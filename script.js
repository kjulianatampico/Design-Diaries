document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    skillBars.forEach(skillBar => {
        const percentage = skillBar.getAttribute('data-percentage');
        skillBar.style.width = `${percentage}%`;
        skillBar.textContent = `${percentage}%`;
    });
});
