(() => {
    const nav = document.querySelector('.navbar');
    const button = nav.querySelector('.mobile-menu-button');
    const panel = nav.querySelector('.mobile-menu');
    const resources = panel.querySelector('details');

    function setOpen(open) {
        panel.hidden = !open;
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        if (!open) {
            resources.open = false;
            panel.scrollTop = 0;
        }
    }

    button.addEventListener('click', () => setOpen(panel.hidden));
    nav.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !panel.hidden) {
            setOpen(false);
            button.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!panel.hidden && (!nav.contains(event.target) || event.target.closest('a'))) {
            setOpen(false);
        }
    });
    document.addEventListener('focusin', event => {
        if (!panel.hidden && !nav.contains(event.target)) setOpen(false);
    });
    window.matchMedia('(min-width: 1280px)').addEventListener('change', () => setOpen(false));
    window.addEventListener('pageshow', event => {
        if (event.persisted) setOpen(false);
    });
})();
