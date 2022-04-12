function addIfExists() {
    if(document.readyState !== "complete") {
        setTimeout(addIfExists,10);
        return;
    }
    const regex = /^\d\d\d\d\d\d$|^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$/;
    try {
        const targetSKU = document.querySelector("div[Selected='Selected']").getAttribute('condition-selected-variant-id');
        if (targetSKU.match(regex)){
            try { 
                document.getElementById("sku-var").outerHTML = "";
            } catch {};
            document.getElementById('primary-details').querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetSKU}<br/></h2></div>`);
            return;
        }
    } catch{
        try {
            const targetSKU = document.querySelector("div[Selected='Selected']").getAttribute('data-condition-selected-variant-id');
            if (targetSKU.match(regex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.getElementById('primary-details').querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetSKU}<br/></h2></div>`);
                return;
            }
        } catch{
            try{
                const applePaySKU = document.querySelector("isapplepay").getAttribute('sku');
                if (applePaySKU.match(regex)){
                    try { 
                        document.getElementById("sku-var").outerHTML = "";
                    } catch {};
                    document.getElementById('primary-details').querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${applePaySKU}<br/></h2></div>`);
                    return;
                }
            } catch {
                try {
                    const targetAttr = document.getElementById("product-detail-redesign").dataset.pid;
                    if (targetAttr.match(regex)){
                        try { 
                            document.getElementById("sku-var").outerHTML = "";
                        } catch {};
                        document.getElementById('primary-details').querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetAttr}<br/></h2></div>`);
                        return;
                    }       
                } catch{
                    setTimeout(addIfExists,10);
                    return;
                    }
                }
            }
        }
const replaceContainer = document.querySelector('.productDetailsReplaceContainer');
const replaceObserver = new MutationObserver((records) => {
    if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) addIfExists();
});
replaceObserver.observe(replaceContainer, {childList: true});
}addIfExists();