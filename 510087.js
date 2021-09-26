function main() {
    const targetNode = document.getElementById('product-detail-redesign');
    const config = { attributes: true, attributeFilter: ['data-pid'], childList: true };
    function skuInjector(mutationList) {
        const regex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$|^\d\d\d\d\d\d$/;
        mutationList.forEach( (mutation) => {
            if (targetNode.getAttribute('data-pid').match(regex)){
                try { 
                    document.getElementById("sku-var").outerHTML = "";
                } catch {};
                document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="sku-var"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${targetNode.getAttribute('data-pid')}<br/></h2></div>`);
            }
        });
    }
    const skuObserver = new MutationObserver(skuInjector);
    skuObserver.observe(targetNode, config);
}

const bodyObserver = new MutationObserver((records) => {
    if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) main();
});
bodyObserver.observe(document.body, {childList: true});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: main,
    });
  });