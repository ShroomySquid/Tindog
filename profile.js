class Profile {
    constructor(data) {
        Object.assign(this, data)
    }

    getProfileHtml() {
        const {name, age, bio} = this
        return `
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>`;
    }

}

export {Profile}