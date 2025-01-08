
document.addEventListener("DOMContentLoaded", function () {
  console.log('Script started: DOMContentLoaded');

  // Check if the container element exists
  const container = document.getElementById('box-container');
  if (!container) {
    console.warn('Container element with ID "box-container" not found.');
    return;
  }

  const boxData = [
      { title: 'ניהול מחסנים', description: 'מעקב וניהול עבור מלאי הפרטים', icon: 'warehouse.png' },
      { title: 'תנועות מלאי', description: 'אפשרויות העברה ועדכון מלאי בין המחסנים', icon: 'inventory.png' },
      { title: 'מנהלן', description: 'ניהול הרשאות למשתמשים', icon: 'administrator.png' },
      { title: 'דשבורד', description: 'הצגה סיכומית של מצב המלאי', icon: 'dashboard.png' }
  ];

  const boxContainer = document.createElement('div');
  boxContainer.setAttribute('class', 'info-box');
  boxContainer.setAttribute('id', 'box-container');

  boxData.forEach(box => {
      const boxElement = document.createElement('div');
      boxElement.className = 'box';

      boxElement.innerHTML = `
          <div class="box-icon">
              <img src="${'https://ranlotan.github.io/assets/' + box.icon}" alt="${box.title}">
          </div>
          <div class="box-content">
              <div class="box-title">${box.title}</div>
              <div class="box-description">${box.description}</div>
          </div>
      `;

      boxContainer.appendChild(boxElement);
  });

  console.log('Appending the box container to the body');
  document.body.appendChild(boxContainer);
});
