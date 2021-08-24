function addIfExists() {
    const targetNode = document.getElementById('product-detail-redesign');
    if(!targetNode) {
        window.setTimeout(addIfExists,100);
        return;
    }
    const config = { attributes: true, attributeFilter: ['data-pid'] };
    const regex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$|^\d\d\d\d\d\d$/;
    function callback(mutationList) {
        mutationList.forEach( (mutation) => {
            if (targetNode.getAttribute('data-pid').match(regex)){
                var skuInserted = document.getElementById("sku-var");
                if (skuInserted != null) {
                    document.getElementById("sku-var").outerHTML = "";                
                }
                document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:#red">SKU: </h2><h2 class="product-name h2">${targetNode.getAttribute('data-pid')}<br/></h2></div>`);
            }
        });
    }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}
addIfExists();
const replaceContainer = document.querySelector('.productDetailsReplaceContainer');
const replaceObserver = new MutationObserver((records) => {
    if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) addIfExists();
});
replaceObserver.observe(replaceContainer, {childList: true});