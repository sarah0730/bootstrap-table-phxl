/**
 * Created by Administrator on 2016/2/23.
 */
/*var $main = $("#main");
var tabsUl = ' <ul id="myTab" class="nav nav-tabs"></ul>';
var tabsContent = '<div id="myTabContent" class="tab-content"> </div>';
if(!document.getElementById("myTab")){
    $main.append(tabsUl);
    $main.append(tabsContent);
}*/

//tabs
$("#accordion").find('li a[data-phxl-toggle="tabajax"]').click(function(e) {
    e.preventDefault();
    var $this = $(this),
        loadurl = $this.attr('href'),
        targ = $this.attr('data-phxl-target'),
        $tabsMenu = $("#myTab"),
        datahref = $(this).attr("data-href"),
        datavalue = $(this).attr("data-value"),
        myTabContentDiv = $("#myTabContent"),
        tabsContentHtml;

    //menu导航点击时tabs li切换
    $tabsMenu.find("li a[href='#"+datahref+"']").parent().siblings().removeClass("active");
    $tabsMenu.find("li a[href='#"+datahref+"']").parent().addClass("active");

    //tabsContentHtml = '<div class="tab-pane fade in active" id="'+datahref+'"></div>'
    tabsContentHtml = $("<div>").addClass("tab-pane fade in active").attr("id",datahref);
    myTabContentDiv.children("div.tab-pane").removeClass("active");
    $("#"+datahref).addClass("active");
    //添加的tab列
   if(!document.getElementById(datahref)){

       //去掉li的active样式
       $tabsMenu.find("li").removeClass("active");
       //点击获取data-href链接值
       var $tablsLi = '<li class="active"><a href="#'+datahref+'" data-toggle="tab"> '+datavalue+' </a></li>';
       $tabsMenu.append($tablsLi);
       //判断tabscontent内容
       if($tabsMenu.find("li").length == 1){
           $.get(loadurl, function(data) {
                tabsContentHtml.append(data);
               $(targ).html(tabsContentHtml);

           });
       }
       else{
           $.get(loadurl, function(data) {
               tabsContentHtml.append(data);
               $(targ).append(tabsContentHtml);
           });
       }
   }
});


