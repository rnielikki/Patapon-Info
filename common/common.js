fetch("https://rnielikki.github.io/pata/common/common.html").then(x => x.text()).then(x => {
    const parser = new DOMParser();
    const data = parser.parseFromString(x, "text/html");
    document.head.appendChild(data.head.children[0]);
    document.body.prepend(data.body.children[0]);
})