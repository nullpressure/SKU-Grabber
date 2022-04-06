function addIfExists() {
    const targetNode = document.querySelector("div[Selected='Selected']");
    if(!targetNode) {
        setTimeout(addIfExists,100);
        return;
    }
    const targetSKU = targetNode.dataset.conditionSelectedVariantId;
    console.log(targetSKU);
    //const config = { attributes: true, attributeFilter: ['data-condition-selected-variant-id'] };
    const regex = /^\d\d\d\d\d\d$/;
    const bundleRegex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$/;
    //function callback(mutationList) {
    //    mutationList.forEach( (mutation) => {
            if (targetSKU.match(regex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetSKU}<br/></h2></div>`);
                return;
            }else if (targetNode.dataset.conditionSelectedVariantId.match(bundleRegex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetSKU}<br/></h2></div>`);
                return;
            }
    //    });
    //}
    //const observer = new MutationObserver(callback);
    //observer.observe(targetNode, config);
}
addIfExists();

const replaceContainer = document.querySelector('.productDetailsReplaceContainer');
const replaceObserver = new MutationObserver((records) => {
    if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) addIfExists();
});
replaceObserver.observe(replaceContainer, {childList: true});
