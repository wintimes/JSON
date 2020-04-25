var JSONObject = {
    "name":"菜鸟教程",
    "url":"www.runoob.com",
    "slogan":"学的不仅是技术，更是梦想"
};
document.getElementById('jname').innerHTML = JSONObject.name
document.getElementById('jurl').innerHTML= JSONObject.url
document.getElementById('jslogan').innerHTML = JSONObject.slogan
// JSON数组

var  sites = [
        {"name" : "菜鸟教程" , "url" : "www.runoob.com" },
        {"name" : "google" , "url" : "www.google.com" },
        {"name" : "baidu" , "url" : "www.baidu.com" },
        {"name" : "微博" , "url" : "www.weibo.com" }
];
document.getElementById('demo').innerHTML = sites[0].name;
//修改数据 ：
sites[0].name = "runoob" ;
document.getElementById('demo1').innerHTML = sites[0].name;

