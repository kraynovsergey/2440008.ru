import Accordion from 'accordion-js';

const accordion_vacancies = document.querySelector('[data-accordion-vacancies]');
if (accordion_vacancies) {
    new Accordion(accordion_vacancies, {
        activeClass: '_active'
    });
}