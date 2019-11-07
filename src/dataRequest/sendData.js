export default function sendData() {
    var request = new XMLHttpRequest();

    request.open('POST', 'https://private-anon-42137e8580-witei.apiary-proxy.com/api/v1/tasks/');

    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer 16002a3e-983e-438b-9d4e-cc461744646e');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
    };

    var body = {
        'owner': document.querySelector("#owner").value || "",
        'contact': document.querySelector("#contact").value || "",
        'house': document.querySelector("#house").value || "",
        'kind': parseInt(document.querySelector("#kind").value) || 0,
        'details': document.querySelector("#details").value || "",
        'due': new Date()
    };

    request.send(JSON.stringify(body));
}

