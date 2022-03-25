function addIfExists() {
    const targetNode = document.getElementById('product-detail-redesign');

    if(!targetNode) {
        window.setTimeout(addIfExists,100);
        return;
    }
    const config = { attributes: true, attributeFilter: ['data-selected-variant-pid'] };
    const regex = /^\d\d\d\d\d\d$/;
    const bundleRegex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$/;
    function callback(mutationList) {
        mutationList.forEach( (mutation) => {
            if (targetNode.getAttribute('data-selected-variant-pid').match(regex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.querySelector("h2.product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetNode.getAttribute('data-selected-variant-pid')}<br/></h2></div>`);
                return;
            }else if (targetNode.getAttribute('data-selected-variant-pid').match(bundleRegex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.querySelector("h2.product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetNode.getAttribute('data-selected-variant-pid')}<br/></h2></div>`);
                return;
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