(async function () {
    const PICK_LIMIT = 168;
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
    let pickGenerator = document.querySelector("#pick-generator");
    let pickClear = document.querySelector("#pick-clear");
    let modalScreen = document.querySelector(".modal");
    let loadingMessage = document.querySelector(".loading-message");
    let dialog = document.querySelector("dialog");
    let dialogContent = dialog.querySelector("pre");
    let dialogCloseButton = dialog.querySelector("button");
    let quotes = {};
    let quoteElements = {};
    let currentRegion = "uk";
    let place = "azito";
    await addLangButtons();
    await initPlaceButtons();
    await initSearchBar();
    await loadRegion(currentRegion);//default
    pickLimitDisplay.textContent = `${pickAmount} / ${PICK_LIMIT}`;
    pickGenerator.onclick = showDialogQuote;
    pickClear.onclick = clearQuoteList;
    dialogCloseButton.onclick = closeDialog;
    //autochat declare
    let isAutochat = false;

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
        function fillElements(qData, quoteId) {
             for (let i = 0; i < qData.length; i++) {
                let quote = qData[i];
                let id = quoteId * 65536 + i;
                if(quoteElements[id]===undefined) {
                    let q = document.createElement("a");
                    quoteElements[id] = q;
                    q.href = "#";
                    q.dataset.id = Number(id);
                    q.onclick = onPicked;
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
    function onPicked(e){
        if(isAutochat) showAutochatWindow(e.target);
        else togglePick(e.target);
    }
    function clearQuoteList() {
        let quotes = [...pickList.getElementsByTagName("a")];
        for(let q of quotes){
            togglePick(q, 0);
        }
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
            if(quoteElements[qId].textContent.toLowerCase().includes(txt) || quoteElements[qId].hasAttribute("picked"))
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
    //-1 : let user choose. 0: remove from list. 1: add to list.
    function togglePick(element, status = -1){
        if(status < 0) {
            status = element.hasAttribute("picked")?0:1;
        }
        //pick it
        if(status!==0) {
            if(pickAmount >= PICK_LIMIT){
                return;
            }
            pickList.appendChild(element);
            element.setAttribute("picked","");
            pickAmount++;
        }
        //delete it
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
    function loadingOn() { modalScreen.removeAttribute("hidden"); }
    function loadingOff() { modalScreen.setAttribute("hidden",""); }
    function showDialog(title, content) {
        loadingOn();
        dialog.setAttribute("open","");
        loadingMessage.setAttribute("hidden","");
        let res = `_C1 ${title}\n`;
        for(let line of content){
            res+=`${line}\n`
        }
        dialogContent.textContent=res;
    }
    function showDialogQuote(){
        let startOffset = 0x203BD0D0;
        let pickedData = [...pickList.getElementsByTagName("a")];
        let data = [];
        for(let i=0;i<pickedData.length;i++) {
            let dataId = getId(pickedData[i]);
            data.push(`_L 0x${(startOffset+4*i).toString(16)} 0x${dataId}`);
        }
        showDialog("Custom System Quips", data);
    }
    function getId(element) {
        return Number(element.dataset.id).toString(16).padStart(8,"0");
    }
    function closeDialog() {
        dialog.removeAttribute("open");
        loadingMessage.removeAttribute("hidden");
        loadingOff();
    }
    //AUTOCHAT MODE PATCH
    const autochatToggle = document.getElementById("autochat-toggle");
    const pickSection = document.querySelector(".pick-quotes");
    const pickAutochatSection = document.querySelector(".pick-autochat");
    const dataMap = {
        "dying":"3A4",
        "fever":"3CC",
        "revive":"3F4",
        "rev-soon":"41C",
        "summon":"444",
        "summon-rev":"46C",
        "idle":"494"
    };
    autochatToggle.onclick = function(){
        isAutochat = !isAutochat;
        if(isAutochat) {
            pickSection.setAttribute("hidden", "");
            pickAutochatSection.removeAttribute("hidden");
            autochatToggle.textContent = "AUTOCHAT MODE (Click for quip adding mode)";
            clearQuoteList();
        }
        else {
            pickSection.removeAttribute("hidden");
            pickAutochatSection.setAttribute("hidden", "");
            autochatToggle.textContent = "QUIP ADDING MODE (Click for autochat mode)";
        }
    }
    function showAutochatWindow(target) {
        let chatType = pickAutochatSection.querySelector("input:checked");
        let content = [`_L 0x602ABD94 0x${getId(target)}`,
        `_L 0x00020002 0x00000${dataMap[chatType.id]}`,
        "_L 0x20000048 0x00000000"];
        showDialog(`${chatType.parentElement.textContent} Message`, content);
    }
}());
