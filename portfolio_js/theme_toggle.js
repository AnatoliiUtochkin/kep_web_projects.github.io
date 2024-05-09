function toggleTheme() {
    const html = document.querySelector('html');
    const nav = document.querySelector('nav');
    const headers = document.querySelectorAll('h2');
    const buttons = document.querySelectorAll('.buttons a');

    const isDark = nav.classList.contains('dark-theme-nav');

    if (isDark) {
        nav.classList.remove('dark-theme-nav');
        nav.classList.add('light-theme-nav');
        html.classList.remove('dark-theme-html');
        html.classList.add('light-theme-html');

        headers.forEach(header => {
            header.style.color = '#000000';
        });

        buttons.forEach(button => {
            button.style.color = '#000000';
        });
    } else {
        nav.classList.remove('light-theme-nav');
        nav.classList.add('dark-theme-nav');
        html.classList.remove('light-theme-html');
        html.classList.add('dark-theme-html');

        headers.forEach(header => {
            header.style.color = '#ffffff';
        });

        buttons.forEach(button => {
            button.style.color = '#ffffff';
        });
    }
}


document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
