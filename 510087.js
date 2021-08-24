const targetNode = document.getElementById('product-detail-redesign');
const config = { attributes: true, attributeFilter: ['data-pid'] };
const regex = /^[a-zA-z]\d\d\d\d\d\d[a-zA-z]$|^\d\d\d\d\d\d$/;

function callback(mutationList) {
    mutationList.forEach(function(mutation) {
        if (mutation.target[data-pid].match(regex)){
            document.getElementById("skuInject").remove();
            document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<div id="skuInject"><h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${mutation.target[data-pid]}<br/></h2></div>`);
        }
    });
}
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);