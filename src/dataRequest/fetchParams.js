function getUrl(param) {
    return param === "done" ? 
        "https://private-anon-42137e8580-witei.apiary-proxy.com/api/v1/tasks/?done=true" : 
        "https://private-anon-42137e8580-witei.apiary-proxy.com/api/v1/tasks/"
    ;
}

function getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer 16002a3e-983e-438b-9d4e-cc461744646e');
    
    return headers;
}

export default { getUrl, getHeaders };