(async function () {
    const PICK_LIMIT = 8;
    let pickAmount = 0;
    let [data, winLoader] = await Promise.all([
        loadMeta(),
        new Promise(res => window.addEventListener("load", res))
    ]);
    let regions = data.region;
    let indexes = data.index;
    let fileNames = Object.keys(indexes);
    let content = document.querySelector("section.quotes");
    let searchBar = document.querySelector("section.searchbar");
    let searchText = searchBar.querySelector(".searchbar-text");
    let searchBtn = searchBar.querySelector(".searchbar-btn");
    let searchResetBtn = searchBar.querySelector(".searchbar-btn-reset");
    let pickList = document.querySelector("div.pick-list");
    let pickLimitDisplay = document.querySelector("span.pick-limit");
    let loadingScreen = document.querySelector(".loading");
    let quotes = {};
    let quoteElements = {};
    let currentRegion = "uk";
    let place = "azito";
    await addLangButtons();
    await initPlaceButtons();
    await initSearchBar();
    await loadRegion(currentRegion);//default
    pickLimitDisplay.textContent = `${pickAmount} / ${PICK_LIMIT}`;

    async function loadMeta() {
        return (await fetch("meta.json")).json();
    }
    async function loadRegion(region) {
        loadingOn();
        currentRegion = region;
        if (!quotes[region]) {
            let regionData = {};
            regionData[0] = {};
            for (let fileName of fileNames) {
                let index = indexes[fileName];
                let res =
                    (await (await fetch("res/" + region + "/" + fileName + ".txt")).text())
                        .split("\u0000\r\n");
                if(index===0) {
                    regionData[index][fileName] = res;
                }
                else {
                    regionData[index] = res;
                }
            }
            quotes[region] = regionData;
        }
        addElements(quotes[region]);
    }
    function addElements(quoteData, isFull = true) {
        loadingOn();
        let frag = document.createDocumentFragment();
        let changed = false;
        if(isFull){
            for (let quoteId of Object.keys(quoteData)) {
                let qData;
                qData = quoteData[quoteId]
                // === 0 doesn't work fuck you js
                if(quoteId == 0) qData = qData[place];
                fillElements(qData, quoteId);
            }
        }
        else {
            fillElements(quoteData, 0);
        }
        if(changed) content.appendChild(frag);
        function fillElements(qData, quoteId){
             for (let i = 0; i < qData.length; i++) {
                let quote = qData[i];
                let id = quoteId * 65536 + i;
                if(quoteElements[id]===undefined) {
                    let q = document.createElement("a");
                    quoteElements[id] = q;
                    q.href = "#" + Number(id);
                    q.onclick = togglePick;
                    frag.appendChild(q);
                    changed = true;
                }
                quoteElements[id].textContent = quote;
                quoteElements[id].title = quote;
            }
        }
        resetQuote();
        loadingOff();
    }
    async function addLangButtons() {
        let nav = document.querySelector("div.lang");
        let frag = document.createDocumentFragment();
        for (let region of regions) {
            let btn = document.createElement("input");
            btn.id=region;
            btn.type="radio";
            btn.name="region";
            btn.onclick = async () => await loadRegion(region);
            let label = document.createElement("label");
            label.setAttribute("for",region);
            label.textContent=region;
            frag.appendChild(btn);
            frag.appendChild(label);
            if(region==currentRegion) btn.setAttribute("checked","");
        }
        nav.appendChild(frag);
    }
    async function initPlaceButtons() {
        let azitoBtn = document.getElementById("azito");
        let missionBtn = document.getElementById("mission");
        azitoBtn.onclick = ()=>togglePlace("azito");
        missionBtn.onclick = ()=>togglePlace("mission");
    }
    function togglePlace(newPlace) {
        place = newPlace;
        addElements(quotes[currentRegion][0][newPlace], false);
    }
    function initSearchBar(){
        searchBtn.onclick = searchQuote;
        searchResetBtn.onclick = resetQuote;
    }
    function searchQuote(){
        let txt = searchText.value.toLowerCase();
        for(let qId of Object.keys(quoteElements)) {
            if(quoteElements[qId].textContent.toLowerCase().includes(txt))
            {
                quoteElements[qId].removeAttribute("hidden");
            }
            else quoteElements[qId].setAttribute("hidden","");
        }
    }
    function resetQuote(){
        for(let qId of Object.keys(quoteElements)) {
            if(quoteElements[qId].textContent.trim()!="") {
                quoteElements[qId].removeAttribute("hidden");
            }
            else quoteElements[qId].setAttribute("hidden","");
        }
    }
    function togglePick(e){
        let element = e.target;
        if(!element.hasAttribute("picked")) {
            if(pickAmount >= PICK_LIMIT){
                return;
            }
            pickList.appendChild(element);
            element.setAttribute("picked","");
            pickAmount++;
        }
        else {
            content.prepend(element);
            element.removeAttribute("picked","");
            pickAmount--;
        }
        pickLimitDisplay.textContent = `${pickAmount} / ${PICK_LIMIT}`;
        if(pickAmount >= PICK_LIMIT){
            pickLimitDisplay.classList.add("pick-limit-full");
        }
        else pickLimitDisplay.classList.remove("pick-limit-full");
    }
    function loadingOn() { loadingScreen.removeAttribute("hidden"); }
    function loadingOff() { loadingScreen.setAttribute("hidden",""); }
}());
