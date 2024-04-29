function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.scroll-section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
        } else {
            section.style.display = 'none';
        }
    });
}
