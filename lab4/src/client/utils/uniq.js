function uniq(a, keyFunc = x => x) {
    var seen = {};
    return a.filter(function (item) {
        let key = keyFunc(item);
        return key && seen.hasOwnProperty(key) ? false : (seen[key] = true);
    });
}

export default uniq