var myObj, i, x = "", x1 = "";
myObj = {
    "name" : "网站",
    "num" :3,
    "sites":["google", "runoob", "Taobao" ]
}
for (i in myObj.sites){
    x += myObj.sites[i] + "<br>";
}
document.getElementById('demo').innerHTML = x ;
for (i = 0; i < myObj.sites.length; i ++){
    x1 += myObj.sites[i] + "<br>";
}
document.getElementById('demo1').innerHTML = x1 ;