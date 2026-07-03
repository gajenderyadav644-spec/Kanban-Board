
let draggedCard = null;

// Har card ko dragstart event do
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', () => {
    draggedCard = card;
    card.classList.add('dragging');
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    draggedCard = null;
  });
});

// Har column (card-list) ko dragover aur drop event do
document.querySelectorAll('.card-list').forEach(list => {
  list.addEventListener('dragover', (e) => {
    e.preventDefault(); // yeh zaroori hai, warna drop kaam nahi karega
    list.classList.add('drag-over');
  });

  list.addEventListener('dragleave', () => {
    list.classList.remove('drag-over');
  });

  list.addEventListener('drop', () => {
    list.classList.remove('drag-over');
    if (draggedCard) {
      list.appendChild(draggedCard); // card ko is column mein daal do
    }
  });
});

