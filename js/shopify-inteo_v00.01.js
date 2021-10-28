function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
        const currentScript = document.getElementById('shopify-inteo');
        console.log(currentScript);
        const args = currentScript.dataset.args.split(',');
        // const args = currentScript.getAttribute('data-args').split(',');
        document.getElementById("args").innerHTML = args[0];
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}
