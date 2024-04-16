document.addEventListener('DOMContentLoaded', function() {
  const sectionHeadings = document.querySelectorAll('h2');

  sectionHeadings.forEach(heading => {
      heading.addEventListener('click', function() {
          const section = this.parentElement;
          const sectionId = section.getAttribute('id');
          const imagePath = `${sectionId}.jpg`;
          section.style.backgroundImage = `url('${imagePath}')`;
      });
  });
});
