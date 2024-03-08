window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    let segements = []; 
    let segementLinks = []; 
    let canvGroup = document.getElementById("canv-group");
    for(let i=0;i<4;i++){
        let elem = []
        let aElem = []
        for(let j=0;j<2;j++){
            elem.push(document.getElementById(`canv-${j}-${i}`));
            aElem.push(document.getElementById(`a-${j}-${i}`))
        }
        segements.push(elem);
        segementLinks.push(aElem);
    }
    const ctx = canvas.getContext('2d');
    //let img = new Image();
    //img.src = "./dalgona.jpg"
    let file = document.getElementById("input");
    let submit = document.getElementById("submit");
    let hasImage = false;
    canvas.setAttribute("hidden","");
    submit.addEventListener("click", process)
    file.addEventListener("change", function (ev) {
        canvGroup.setAttribute("hidden","");
        hasImage = false;
        canvas.setAttribute("hidden","");
        let uploadedImage = ev.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(uploadedImage);
        reader.onloadend = function (e) {
            imgTarget = new Image();
            imgTarget.src = e.target.result;
            console.log(e.target.result)
            imgTarget.onload = () => {
                let width = imgTarget.width;
                let height = imgTarget.height;
                //check
                /*
                if(!checkResolution(width, height)) {
                    return;
                }*/
                //draw
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(imgTarget, 0, 0);
                hasImage = true;
                canvas.removeAttribute("hidden");
            }
            imgTarget.onerror = ()=> {
                hasImage =false;
                canvas.setAttribute("hidden","");
            }
        }
    });
    function checkResolution(width, height) {
        if (width % 4 != 0) {
            alert("Width is not divisible to 4. This may cause unwanted result!");
        }
        if (height % 2 != 0) {
            alert("Height is not divisible to 4. This may cause unwanted result!");
        }
        if(width != height * 2) {
            alert("width MUST be double of height");
            return false;
        }
        return true;
    }
    function process() {
        if(!hasImage) {
            alert("No image is selected! Or wait until the image is loaded?");
            return;
        }
        let sliceWidth = canvas.width / 4;
        let sliceHeight = canvas.height / 2;
        let sliceSize = sliceWidth;
        if(sliceWidth > sliceHeight) sliceSize = sliceHeight;
        for(let i=0;i<4;i++){
            for(let j=0;j<2;j++){
                let data = ctx.getImageData(i*sliceSize,j*sliceSize,sliceSize,sliceSize);
                let seg =segements[i][j];
                seg.width=sliceSize;
                seg.height=sliceSize;
                seg.getContext("2d").putImageData(data, 0, 0);
                segementLinks[i][j].href = seg.toDataURL();
            }
        } 
        canvGroup.removeAttribute("hidden");
        canvas.setAttribute("hidden","");
    }
});