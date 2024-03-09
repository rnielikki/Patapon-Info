/* Rushed so source code is mess. */
window.addEventListener("load", async () => {
    let data = await fetch("bgname.json").then(a => a.json());
    const canvas = document.querySelector("canvas");
    let segments = [];
    let segmentLinks = [];
    let canvGroup = document.getElementById("canv-group");
    for (let i = 0; i < 2; i++) {
        let elem = []
        let aElem = []
        for (let j = 0; j < 4; j++) {
            elem.push(document.getElementById(`canv-${i}-${j}`));
            let a = document.getElementById(`a-${i}-${j}`);
            a.onclick = e => e.target.parentElement.setAttribute("clicked", "");
            aElem.push(a)
        }
        segments.push(elem);
        segmentLinks.push(aElem);
    }
    renderTypes();
    let warn = document.getElementById("warn");
    let error = document.getElementById("error");
    const ctx = canvas.getContext('2d');
    let file = document.getElementById("input");
    let form = document.getElementById("form");
    let hasImage = false;
    canvas.setAttribute("hidden", "");
    form.addEventListener("submit", process);
    file.addEventListener("change", function (ev) {
        let uploadedImage = ev.target.files[0];
        if(!uploadedImage) return;
        hideMessages();
        canvGroup.setAttribute("hidden", "");
        hasImage = false;
        canvas.setAttribute("hidden", "");
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                segmentLinks[i][j].removeAttribute("clicked");
            }
        }
        var reader = new FileReader();
        reader.readAsDataURL(uploadedImage);
        reader.onloadend = function (e) {
            imgTarget = new Image();
            imgTarget.src = e.target.result;
            imgTarget.onload = () => {
                let [width, height] = checkResolution(imgTarget.width, imgTarget.height);
                if(width<8 || height <4){
                    showError("Your image is too small!");
                    return;
                }
                //draw
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(imgTarget, 0, 0);
                hasImage = true;
                canvas.removeAttribute("hidden");
            }
            imgTarget.onerror = () => {
                hasImage = false;
                canvas.setAttribute("hidden", "");
            }
        }
    });
    function checkResolution(width, height) {
        if (width % 4 != 0) {
            showWarning("Width is not divisible to 4. This may cause unwanted result!");
            width -= width % 4;
        }
        if (height % 2 != 0) {
            showWarning("Height is not divisible to 2. This may cause unwanted result!");
            height -= height % 2;
        }
        if (width != height * 2) {
            showWarning("width MUST be double of height. The image will be autocropped.");
            if (width > height * 2) {
                width = height * 2;
            }
            else {
                height = width / 2;
            }
        }
        return [width, height];
    }
    function process(e) {
        hideMessages();
        e.preventDefault();
        if (!hasImage) {
            showError("No image is selected! Or wait until the image is loaded?");
            return;
        }
        let sliceWidth = canvas.width / 4;
        let sliceHeight = canvas.height / 2;
        let sliceSize = sliceWidth;
        if (sliceWidth > sliceHeight) sliceSize = sliceHeight;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                let data = ctx.getImageData(j * sliceSize, i * sliceSize, sliceSize, sliceSize);
                let seg = segments[i][j];
                seg.width = sliceSize;
                seg.height = sliceSize;
                seg.getContext("2d").putImageData(data, 0, 0);
                segmentLinks[i][j].href = seg.toDataURL();
            }
        }
        canvGroup.removeAttribute("hidden");
        canvas.setAttribute("hidden", "");
    }
    function renderTypes() {
        let target = document.getElementById("bgtypes");
        let gotFirst = false;
        for ([k, d] of Object.entries(data)) {
            let li = document.createElement("li");
            let radio = document.createElement("input");
            radio.type = "radio";
            let label = document.createElement("label");
            radio.id = k;
            label.setAttribute("for", k);
            label.textContent = d.name;
            radio.value = k;
            radio.name = "bgtype";
            radio.addEventListener("change", e => selectThis(e.target.value))
            li.appendChild(radio);
            li.appendChild(label);
            target.appendChild(li);
            if (!gotFirst) {
                radio.setAttribute("checked", "");
                selectThis(k);
                gotFirst = true;
            }
        }
        function selectThis(key) {
            let inData = data[key].data;
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 4; j++) {
                    segmentLinks[i][j].download = inData[i][j];
                }
            }
        }
    }
    function hideMessages() {
        warn.setAttribute("hidden", "");
        warn.textContent = "";
        error.setAttribute("hidden", "");
        error.textContent = "";
    }
    function showWarning(msg) {
        warn.removeAttribute("hidden");
        if(warn.innerText) warn.innerHTML+="<br>";
        warn.innerText += msg;
    }
    function showError(msg) {
        error.removeAttribute("hidden");
        if(error.innerText) error.innerHTML+="<br>";
        error.innerText += msg;
    }
});