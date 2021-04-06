function namify(users) {
    let massName = [];
    for (let user of users) {
        if (typeof user == "object") {
            massName.push(user.name);
        }
    }
    return massName;
};
