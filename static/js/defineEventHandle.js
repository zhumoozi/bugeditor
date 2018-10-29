/**
 * Create by xiaofu.qin {2017/11/11}
 * description:
 */
define(["require"], function (require) {

    // 先定义一个Bug标题的鼠标按下的事件
    function bugTitleKeyPress(event) {
        var target = event.target;
        return $(target).val().trim();
    }

    function dropDownChange(event) {
        return $(event.target).val();
    }

    // 拼接环境信息字符串
    /*
    function spliceEnvInfo(dom, system_content, version_content, version_branch_content,
                           time_content, browsers_content, specially_content, interactive_content) {
        var str = "【环境信息】" + "\r\n"
            + "\t操作系统：" + system_content + "\r\n"
            + "\tjar包版本：" + version_content + "  "
            + version_branch_content + "  "
            + time_content + "\r\n"
            + "	浏览器：" + browsers_content + "\r\n"
            + (!!specially_content ? "\t特别说明：" + specially_content + "\r\n" : "")
            + (!!interactive_content ? "\t交互文档：" + interactive_content  + "\r\n" : "");

        // 插入内容
        dom.val(str);
    }*/

    //bug标题字符串
    function bugTitleInfo(dom, title_content) {
        // console.log(title_content)
        // 插入内容
        dom.val(title_content);
    }

    //bug内容字符串拼接
    function bugContentInfo(dom, replar_content, expectation_content, infversion_content, jartime_content, version_content, interactive_content) {
        var str = "【现象步骤】"
            + replar_content + "\r\n"
            + "【期望结果】" + expectation_content + "\r\n"
            + "【环境信息】" + "\r\n"
            + "\t影响版本：" + infversion_content + "\r\n"
            + "\tjar包版本：" + jartime_content + "\r\n"
//            + "\t部署方式：" + version_content + "\r\n"
//            + "\t环境信息：" + interactive_content + "\r\n"
            + (!!version_content ? "\t部署方式：" + version_content + "\r\n" : "")
            + (!!interactive_content ? "\t环境信息：" + interactive_content + "\r\n" : "");

        dom.val(str);
    }

    //复制内容
    function copyThemeDescribe(dom) {
        var Content = dom[0];
        Content.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
    }

    //创建bug
    function createBugs() {
        var url = 'http://www.finedevelop.com:2016/secure/CreateIssue!default.jspa';
        var name = '';
        var tWidth = 500;
        var theight = 600;
        var tTop = (window.screen.availHeight - 30 - theight) / 2;
        var tLeft = (window.screen.availWidth - 10 - tWidth) / 2;
        window.open(url);
    //    window.open(url, name, 'height=500,width=600,top=' + tTop + ',left=' + tLeft + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no,z-look=yes');
    }

    //存储信息到浏览器
    function stInform(doms) {
        // Cookies.set('key', 'value');
        for (var i = 0; i < doms.length; i++) {
            var cvalue = $(doms[i]).val(); // doms[i].value
            window.LS.set(doms[i], cvalue);
        }
    }

    return {
        bugTitleKeyPress: bugTitleKeyPress,
        dropDownChange: dropDownChange,
//        spliceEnvInfo: spliceEnvInfo,
        bugTitleInfo: bugTitleInfo,
        bugContentInfo: bugContentInfo,
        copyThemeDescribe: copyThemeDescribe,
        createBugs: createBugs,
        stInform: stInform
    };

});
 