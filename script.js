function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.scroll-section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            // Toggle the requested section, keep it open if it's initially visible
            section.style.display = (section.style.display === 'none') ? 'block' : 'none';
        } else {
            // Ensure all other sections are closed when one is opened
            section.style.display = 'none';
        }
    });
}
