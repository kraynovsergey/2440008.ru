const toggle = document.querySelectorAll('[data-toggle]');
if (toggle.length > 0) {
    toggle.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
        });
    });
}

const toggle_target = document.querySelectorAll('[data-toggle-target]');
if (toggle_target.length > 0) {
    toggle_target.forEach(item => {
        item.addEventListener('click', () => {
            let target = document.querySelector(item.getAttribute('data-toggle-target'));
            if (target) target.classList.toggle('_active');
        });
    });
}