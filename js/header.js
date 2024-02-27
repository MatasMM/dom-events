function header() {
    const navDOM = document.querySelector('.main-nav');
    const href = location.hostname === 'localhost' ? '/' : './' + location;

    console.log(href);

    const HTML = `
        <a href="${href}" target= "_blank">Home</a>
        <a href="${href}" target= "_blank">Single button click</a>
        <a href="${href}" target= "_blank">Counter</a>
        <a href="${href}" target= "_blank">Basketball</a>
        <a href="${href}" target= "_blank">Virykle</a>
    `;
    navDOM.innerHTML = HTML;
}

export { header };