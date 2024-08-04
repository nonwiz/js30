// window.addEventListener('DOMContentLoaded', () => {
//     const days =['Simple key reader', 'Basic sandglass'];


function createNavigation_tailwind_version(days) {
const container = document.body;
container.className = 'relative bg-[#222222] flex justify-center items-center h-dvh flex-col text-[#979797]';

const nav = document.createElement('nav');
nav.className = 'absolute  p-4 top-0 left-0';

const ol = document.createElement('ol');
ol.className = 'list-decimal list-inside space-y-2';

const currentPage = window.location.pathname;

days.forEach((day, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    const pageUrl = `/dan/${index + 1}/`;
    a.href = pageUrl;
    a.className = 'hover:underline';
    a.textContent = day;

    if (currentPage === pageUrl) {
        a.textContent = `${day} 👈🏾`;
        li.style.color = '#f3c623';
    }

    li.appendChild(a);
    ol.appendChild(li);
});

nav.appendChild(ol);

container.appendChild(nav);
}

function createNavigation_normal_css(days) {
    const container = document.body;

    // Set container styles
    container.style.backgroundColor = '#222222';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';
    container.style.flexDirection = 'column';
    container.style.color = '#979797';
    container.style.position = 'relative';

    const nav = document.createElement('nav');
    nav.style.position = 'absolute';
    nav.style.padding = '1rem';
    nav.style.top = '0';
    nav.style.left = '0';

    const ol = document.createElement('ol');
    ol.style.listStyleType = 'decimal';
    ol.style.listStylePosition = 'inside';
    ol.style.margin = '0';
    ol.style.padding = '0';

    const currentPage = window.location.pathname;

    days.forEach((day, index) => {
        const li = document.createElement('li');
        li.style.marginBottom = '0.5rem';

        const a = document.createElement('a');
        const pageUrl = `/dan/${index + 1}/`;
        a.href = pageUrl;
        a.textContent = day;
        a.style.textDecoration = 'none';
        a.style.color = 'inherit';

        // Add hover effect
        a.addEventListener('mouseover', () => {
            a.style.textDecoration = 'underline';
        });
        a.addEventListener('mouseout', () => {
            a.style.textDecoration = 'none';
        });

        // Check if the current page matches the link
        if (currentPage === pageUrl) {
            a.textContent = `${day} 👈🏾`;
            li.style.color = '#f3c623';
        }

        li.appendChild(a);
        ol.appendChild(li);
    });

    // Append the ordered list to the nav
    nav.appendChild(ol);

    // Insert the nav into the container
    container.appendChild(nav);
}

window.addEventListener('DOMContentLoaded', () => {
    const days = [
        'Simple key reader', 
        'Basic sandglass'
    ];
    createNavigation_normal_css(days);
});