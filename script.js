(function() {
        const productDetail = document.querySelector(".product-detail");
        document.querySelector(".product-name").insertAdjacentHTML("beforebegin", `<h2 class="product-name h2" style="color:red">SKU: </h2><h2 class="product-name h2">${productDetail.dataset.pid}</h2><br><br>`);
    })()
