const registerAccount = require("./request");
class Generator {
    constructor(initialUsername, initialPass) {
        this.uname = initialUsername;
        this.pass = initialPass;
        this.genIndex = 0;
    }
}
Generator.prototype.generate = async amount => {
    for (; this.genIndex < amount; ++this.genIndex) {
        const username = `${uname}_${genIndex}`,
            password = this.pass,
            res = await registerAccount(username, password);
    }
}

module.exports = Generator;