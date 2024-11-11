export default {

}
makeContentCollapsible(document.getElementById("code-information"));
makeContentCollapsible(document.getElementById("code").nextElementSibling);

function makeContentCollapsible(header)
{
    const content = header.nextElementSibling;
    header.tabIndex = 0;
    content.setAttribute("hidden", "");
    header.classList.add("collapsed-header");
    content.classList.add("collapsed-body");
    header.addEventListener("click", toggleThis);
    header.addEventListener("keypress", (e)=>{
        if(e.keyCode == 13 || e.keyCode == 32){
            toggleThis();
            return false;
        }
    });
    function toggleThis(){
        if(content.hasAttribute("hidden")) {
            content.removeAttribute("hidden");
            header.classList.add("collapsed-header-expanded");
        }
        else {
            content.setAttribute("hidden", "");
            header.classList.remove("collapsed-header-expanded");
        }
    }
}