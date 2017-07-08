
//删除Cookes函数
function removeCookie(name, path) {
    var
        path = path || '/';

    document.cookie = name + '=;expires=-1;path=' + path;

    return true;
}