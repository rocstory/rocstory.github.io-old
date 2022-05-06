
export function modifyName(name = '') {
    // TODO: Remove hard coded value - move to appConfig.js
    if (name.length < 14) return name;
    const nameArr = name.split(' ');
    if (nameArr.length >= 2) {
        let lastName = nameArr[nameArr.length - 1];
        let lastInitial = lastName[0].toUpperCase();
        name = nameArr[0].concat(` ${lastInitial}.`)
    }
    else {
        name = name.substr(0, 13)
    }
    return name;
}
