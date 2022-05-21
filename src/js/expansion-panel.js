// const expansionPanels = document.querySelectorAll('.expansion-panel__header');
// expansionPanels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     panel.parentElement.classList.toggle('expansion-panel--active');
//   });
// });

const expansionPanels = document.querySelectorAll('.expansion-panel');
expansionPanels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('expansion-panel--active');
  });
});
