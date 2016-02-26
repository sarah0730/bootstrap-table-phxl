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

    tablsLi = '<li class="active"><a href="#'+datahref+'" data-toggle="tab" data-href="'+datavalue+'.html"> '+datavalue+' </a> </li>';
    tabsContentHtml = $("<div>").addClass("tab-pane fade in active").attr("id",datahref);
    myTabContentDiv.children("div.tab-pane").removeClass("active");
    $("#"+datahref).addClass("active in");
    var iframeWidth = $(window).width()-195;
    var iframeheight = document.body.clientHeight -85;
    //iframe嵌套
    iframeContent = '<iframe name="contentPage"   src="'+navhref+'"  scrolling="no" frameborder="0"  width="'+iframeWidth+'px" height="'+iframeheight+'px"  id="'+datahref+'Iframe"></iframe>'

    if(!document.getElementById(datahref)){
        tabsContentHtml.append(iframeContent);
        $tabsMenu.append(tablsLi);
        myTabContentDiv.append(tabsContentHtml);
    }
/*    else{
        document.getElementById(datahref+"Iframe").src = navhref;
    }*/


    /*$tabsMenu.find("li a").on("click",".fa-close",function(){
        console.log($tabsMenu.find("li"));
        var li = $(this).parent().parent();
        li.prev().addClass("active");
        li.remove();

        var datahref = $(this).parent().attr("href");
        $(datahref).prev().addClass("active in");
        $(datahref).remove();
        <i class="fa fa-close blue"></i>
    })*/

  /* $tabsMenu.find("li a").on("click",function(){
        var hrefid = $(this).attr("href").replace("#","")+"Iframe";
        document.getElementById(hrefid).src  = $(this).attr("data-href");
    })*/

});







