function addIfExists() {
    
    //const regex = /^\d\d\d\d\d\d$/;
    //const bundleRegex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$/;

    const targetNode = document.querySelector("div[Selected='Selected']");
    const targetAttr = document.getElementById("product-detail-redesign").dataset.pid;
    const applePaySKU = console.log(document.querySelector("isapplepay").getAttribute('sku'));
    if(!targetNode&&!targetAttr&&!applePaySKU) {
        setTimeout(addIfExists,100);
        return;
    }
    
    const targetSKU = targetNode.dataset.conditionSelectedVariantId;
    

    console.log("targetSKU: ",targetSKU);
    console.log("targetAttr: ",targetAttr);
    console.log("applePaySKU: ",applePaySKU);
    //const config = { attributes: true, attributeFilter: ['data-condition-selected-variant-id'] };
    //function callback(mutationList) {
    //    mutationList.forEach( (mutation) => {
    const regex = /^\d\d\d\d\d\d$|^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$/;
    if (targetSKU.match(regex)){
        try { 
            document.getElementById("sku-var").outerHTML = "";
        } catch {};
        document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetSKU}<br/></h2></div>`);
        return;
    }else if (targetAttr.match(regex)){
        try { 
            document.getElementById("sku-var").outerHTML = "";
        } catch {};
        document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetAttr}<br/></h2></div>`);
        return;
    }else if (applePaySKU.match(regex))
    try { 
        document.getElementById("sku-var").outerHTML = "";
    } catch {};
    document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${applePaySKU}<br/></h2></div>`);
    return;
}
    //    });
    //}
    //const observer = new MutationObserver(callback);
    //observer.observe(targetNode, config);

addIfExists();
const replaceContainer = document.querySelector('.productDetailsReplaceContainer');
const replaceObserver = new MutationObserver((records) => {
    if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) addIfExists();
});
replaceObserver.observe(replaceContainer, {childList: true});

//var s = new XMLSerializer();
//s.serializeToString((document.querySelector('.productDetailsReplaceContainer')));
//var checkForBundleSKU =  "dw.ac._capture({id: \""