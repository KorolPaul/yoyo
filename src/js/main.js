
/* navigation */
const areticleElements = document.querySelectorAll('.article');

function openArticle(e) {
    document.body.classList.add('article-opened')
    const target = e.currentTarget;
    setTimeout(() => {
        target.classList.add('opened');
    }, 300);
}

areticleElements.forEach(el => el.addEventListener('click', openArticle));
