function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        section.classList.toggle('hidden', section.id !== sectionId);
        section.setAttribute('aria-expanded', section.id === sectionId && !section.classList.contains('hidden'));
    });

    document.querySelectorAll('.nav-link').forEach(button => {
        button.setAttribute('aria-expanded', button.getAttribute('data-section') === sectionId && !document.getElementById(sectionId).classList.contains('hidden'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-link');
    buttons.forEach(button => {
        button.addEventListener('click', () => toggleSection(button.getAttribute('data-section')));
    });
});
