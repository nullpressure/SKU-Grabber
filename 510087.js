function watchProductDetail(p) {
    const productObserver = new MutationObserver(() => {
        var skuInserted = document.getElementById("skuvar1");
        if (skuInserted != null) {
            document.getElementById("skuvar1").outerHTML = "";
            document.getElementById("skuvar2").outerHTML = "";
        }
        document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<h2 class="product-name h2" id="skuvar1" style="color:red">SKU: </h2><h2 class="product-name h2" id="skuvar2">${p.dataset.pid}<br/></h2>`);
        productObserver.disconnect();
    });
    productObserver.observe(p, {attributes: true, attributeFilter: ['data-pid']});
}
watchProductDetail(document.querySelector('.product-detail'));
const replaceContainer = document.querySelector('.productDetailsReplaceContainer');
const replaceObserver = new MutationObserver((records) => {
  if (records.some(r => r.type == 'childList' && r.addedNodes && Array.from(r.addedNodes).some(e => e.id == 'product-detail-redesign'))) watchProductDetail(document.querySelector('.product-detail'));
});
replaceObserver.observe(replaceContainer, {childList: true});
