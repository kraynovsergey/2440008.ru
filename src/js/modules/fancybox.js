import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]");

const forms = document.querySelectorAll('[data-open-thankyou]');
if (forms.length > 0) {
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            Fancybox.close();
            Fancybox.show(
                [
                    {
                        src: '#popup-thankyou',
                        type: 'inline'
                    }
                ]
            )
        });
    });
}