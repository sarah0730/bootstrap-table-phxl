/**
 * Created by Administrator on 2016/2/23.
 */
//tabs
var  $tabsMenu = $("#myTab"),//tabs列
    myTabContentDiv = $("#myTabContent"),
    tablsLi,
    iframeContent,
    tabsContentHtml;//tabs列对应内容

$("#accordion").find('li a[data-phxl-toggle="tabajax"]').click(function(e) {
    e.preventDefault();
    var     navhref =  $(this).attr("href"),
        datahref = $(this).attr("data-href"),
        datavalue = $(this).attr("data-value");

    //menu导航点击时tabs li切换
    $tabsMenu.children("li").removeClass("active");
    $tabsMenu.find("li a[href='#"+datahref+"']").parent().addClass("active");

    tablsLi = '<li class="active"><a href="#'+datahref+'" data-toggle="tab"> '+datavalue+' <i class="fa fa-close blue"></i></a> </li>';
    tabsContentHtml = $("<div>").addClass("tab-pane fade in active").attr("id",datahref);
    myTabContentDiv.children("div.tab-pane").removeClass("active");
    $("#"+datahref).addClass("active in");

    //iframe嵌套
    iframeContent = '<iframe name="contentPage"   src="'+navhref+'"  scrolling="no" frameborder="0"   id="'+datahref+'"></iframe>'

    if(!document.getElementById(datahref)){
        tabsContentHtml.append(iframeContent);
        $tabsMenu.append(tablsLi);
        myTabContentDiv.append(tabsContentHtml);
    }

    $tabsMenu.find("li a").on("click",".fa-close",function(){
        console.log($tabsMenu.find("li"));
        var li = $(this).parent().parent();
        li.prev().addClass("active");
        li.remove();

        var datahref = $(this).parent().attr("href");
        $(datahref).prev().addClass("active in");
        $(datahref).remove();
     
    })

});




