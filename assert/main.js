function presentation(id, value) {
    document.getElementById(id).style.width = value;
}

presentation("mobile_developer", document.getElementById("mobile_developer_value").innerText);
presentation("web_developer", document.getElementById("web_developer_value").innerText);