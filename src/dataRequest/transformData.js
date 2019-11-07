const transformData = (data) => {
    const newData = {};

    newData.owner = data.owner;
    newData.details = data.details;
    newData.due = getDate(data);
    newData.end = getDate(data);
    newData.key = data.owner + data["due"].split("T")[1];
    newData.kind = getType(data.kind);

    return newData;
}

const getDate = (data) => {
    const date = data["due"].split("T");
    const time = date[1].split(":")[0] + ":" + date[1].split(":")[1];

    return date[0] + " " + time;
}

const getType = (kind) => {
    let type;
    switch (kind) {
        case 0:
            type = "Visit";
            break;
        case 1:
            type = "Phone Call";
            break;
        case 19:
            type = "Meeting"
            break;
        default:
            type = "Other";
    }

    return type;
}

export default transformData;