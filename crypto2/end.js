var cc = CryptoJS;

//shortcut to frequently use

String.prototype.utf8 = cc.utf8 = function(string) {
    if (!string) string = this;
    return cc.enc.Utf8.parse(string);
}

String.prototype.toUtf8 = cc.toUtf8 = function(string) {
    if (!string) string = this;
    return cc.enc.Utf8.stringify(string);
}

String.prototype.base64en = cc.base64en = function(string) {
    if (!string) string = this;
    return cc.enc.Base64.stringify(cc.utf8(string));
}

String.prototype.base64de = cc.base64de = function(string,raw) {
    if (!string) string = this;
    if (!raw) 
        return cc.toUtf8(cc.enc.Base64.parse(string));
    else
        return cc.enc.Base64.parse(string);
}

String.prototype.tohex = cc.tohex = function(string) {
    if (!string) string = this;
    return cc.enc.Hex.stringify(cc.utf8(string));
}

String.prototype.urlen = cc.urlen = function(string, strong) {
    if (!string) string = this;

    if (!strong) return encodeURI(string);
    else return encodeURIComponent(string);
}

String.prototype.urlde = cc.urlde = function(string) {
    if (!string) string = this;
    return decodeURI(string);
}

String.prototype.rot13 = cc.rot13 = function(string) {
    if (!string) string=this;

    return string.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

String.prototype.tobhex = cc.tobhex = function(string) {
    if (!string) string = this;
    var hex = cc.tohex(string);
    var bhex ='';
    for (var i=0; i<hex.length; i+=2)
        bhex += '\\x'+ hex[i] + hex[i+1];
    return bhex;
}

String.prototype.md5 = cc.md5 = function(string){
    if (!string) string = this;
    return cc.MD5(string);
}

String.prototype.sha = cc.SHA256 = function(string) {
    if (!string) string = this;
    return cc.SHA256;
}
