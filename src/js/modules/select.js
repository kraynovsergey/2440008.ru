import NiceSelect from '../../../node_modules/nice-select2/dist/js/nice-select2.js';

const selects = document.querySelectorAll('.select');
if (selects.length > 0) {
    selects.forEach(select => {
        let select_item = NiceSelect.bind(select);
        let forms = document.querySelectorAll('form');

        if (forms.length > 0) {
            forms.forEach(item => {
                item.addEventListener('reset', () => {
                    select_item.update();
                });
            });
        }
    })
}