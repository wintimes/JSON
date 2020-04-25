var myObj, i, j, x = "";
myObj = {
    "name" : "网站",
    "num" : 3,
    "sites" : [
        {"name" : "google", "info": ["android", "google 搜索", "google翻译"] },
        {"name" : "runoob", "info" : ["菜鸟教程", "菜鸟工具", "菜鸟微信"]},
        {"name" : "taobao", "info" : ["淘宝","网购"]}
    ]
}
for (i in myObj.sites){
    x += "<h1>" + myObj.sites[i].name + "</h1>";
    for (j in myObj.sites[i].info){
        x += myObj.sites[i].info[j] + "<br>";
    }
}
document.getElementById('demo').innerHTML = x;