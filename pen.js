var pen = new Object();

pen.get = function (url,str) {

    if (!str)
        str=".*";

    var u = cc.urlencode(url);
    $.ajax({
        url: "get.php?l="+u+"&r="+str,
        xhrFields: {
            withCredentials: true
        }
    }).done(function (data) {
        var ret = new Object();
        ret.data = data;
        ret.nostringify = true;
        console.log(ret);
        document.body.innerHTML = data;
    }).error(function (data) {
        console.log("error:" + JSON.stringify(data));
    });
}

pen.load = function () {
    return document.body.innerHTML;
}
