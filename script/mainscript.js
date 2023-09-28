function play_video() {
    alert("video starts playing");
}

function show_product_page(product_num) {
    var product_num = product_num;
    var basetext = "../pages/productpage1.html";
    var requested_page = basetext.replace("1", product_num);
    window.location.assign(requested_page);
}