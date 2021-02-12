import { createPopper } from '@popperjs/core';
const button = document.getElementsByClassName('incomplete-icon');
const tooltip = document.querySelector('#tooltip');

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
Popper.createPopper(button, tooltip, {
    placement: 'top',
});
