// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function() {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert("You Qr is : " + decodeText, decodeResult);
        let redirectToUrl = `https://www.ajio.com/search/?text=${(decodeText)}`;
        window.location.href = redirectToUrl;
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
