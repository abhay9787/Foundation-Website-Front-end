document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const menu = document.getElementById('menu');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});