let spoilers = document.querySelectorAll('.spoiler');
spoilers.forEach(item => {
    let spoilerLink = document.createElement('div');
    spoilerLink.classList.add('spoiler__link');
    spoilerLink.textContent = 'Развернуть';
    document.body.insertBefore(spoilerLink, item.nextSibling);
});

let spoilerLinkAll = document.querySelectorAll('.spoiler__link');

spoilerLinkAll.forEach(spoilerLink => {
	let spoilerOne = spoilerLink.previousSibling; //spoiler
	spoilerLink.addEventListener('click', event => {
        spoilerLinkAll.forEach(item => item.textContent = 'Развернуть');
        if (!spoilerOne.closest('.active')) {
            spoilers.forEach(item => item.classList.remove('active'));
            spoilerOne.classList.add('active');
            spoilerLink.textContent = 'Свернуть';
        } else {
            spoilers.forEach(item => item.classList.remove('active'));
            spoilerOne.classList.remove('active');      
            spoilerLink.textContent = 'Развернуть';
        }
    });
});