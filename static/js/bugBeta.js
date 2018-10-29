/**
 * Create by xiaofu.qin {2017/11/11}
 * description:
 */
define(["require", "defineEventHandle", "event"], function (require) {

    var domIds = ["#b_title", "#b_replay", "#b_expectation", "#b_chart", "#specially", "#interactive", "#choose_infversion",
        "#choose_jartime", "#choose_time"];
    var domIdsClear = ["#b_title", "#b_replay", "#b_expectation", "#b_chart"]
    var $bugTitle = $("#b_title");
    var $bugReplay = $("#b_replay");
    var $bugExcept = $("#b_expectation");
//    var $relateChart = $("#b_chart");

    var eventHandles = require("defineEventHandle");
    var Event = require("event");

    var EventInstance = new Event();


    var infversionText = window.LS.get("#choose_infversion");
    var jartimeText = window.LS.get("#choose_jartime");
    var timesText = window.LS.get("#choose_time");
    var interactiveText = window.LS.get("#interactive");
    var titleContent = window.LS.get("#b_title");
    var bugReplayText = window.LS.get("#b_replay");
    var bugExceptText = window.LS.get("#b_expectation");
//    var bugRelateText = window.LS.get("#b_chart");

//    var $spliceInfo = $("#b_envinfo");
    var $bugTitleInfo = $("#bug_result_title");
    var $bugContentInfo = $("#bug_result_describle");

    EventInstance.on("contentChange", function () {
        //    eventHandles.spliceEnvInfo($spliceInfo, systemsText, versionText, branchText, timesText, browserText, especiallyText, interactiveText);
        eventHandles.bugTitleInfo($bugTitleInfo, titleContent);
        eventHandles.bugContentInfo($bugContentInfo, bugReplayText, bugExceptText, infversionText, jartimeText, timesText, interactiveText);
    });

    // 给Bu个标题添加键盘放开的事件
    $bugTitle.on("keyup", function (event) {
        titleContent = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });

    // 还原步骤添加键盘松开的事件
    $bugReplay.on("keyup", function (event) {
        bugReplayText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });

    // 期望结果
    $bugExcept.on("keyup", function (event) {
        bugExceptText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });

    // 涉及图表
/*    $relateChart.on("keyup", function (event) {
        bugRelateText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });

*/
    // 环境信息拼接
    var $infversion = $("#choose_infversion");
    var $jartime = $("#choose_jartime");


    EventInstance.fire("contentChange");

    //返回当前操作系统选择
    $infversion.on("change", function (event) {
        infversionText = eventHandles.dropDownChange(event);
        EventInstance.fire("contentChange");
    });
    //返回当前版本选择
/*    $jarVersion.on("change", function (event) {
        versionText = eventHandles.dropDownChange(event);
        EventInstance.fire("contentChange");
    });
    //返回当前分支信息
    $jarBranch.on("change", function (event) {
        branchText = eventHandles.dropDownChange(event);
        EventInstance.fire("contentChange");
    });
*/
    //返回当前浏览器选择
    $jartime.on("change", function (event) {
        jartimeText = eventHandles.dropDownChange(event);
        EventInstance.fire("contentChange");
    });

    var $times = $("#choose_time");
    var $interactive = $("#interactive");

    // 时间添加键盘松开的事件
    $times.on("keyup", function (event) {
        timesText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });
/*
    // 特别说明添加键盘松开的事件
    $especially.on("keyup", function (event) {
        especiallyText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });
*/
    // 交互文档添加键盘松开的事件
    $interactive.on("keyup", function (event) {
        interactiveText = eventHandles.bugTitleKeyPress(event);
        EventInstance.fire("contentChange");
    });

    var $copyTheme = $("#copy_theme");
    var $copyDescribe = $("#copy_describe");
    var $createBug = $("#createbug");
    var $clearAll = $("#clear_all");

    //copy主题
    $copyTheme.on("click", function (event) {
        eventHandles.copyThemeDescribe($bugTitleInfo);
    });

    //copy内容
    $copyDescribe.on("click", function (event) {
        eventHandles.copyThemeDescribe($bugContentInfo);
    });

    //创建bug
    $createBug.on("click", function (event) {
        eventHandles.createBugs();
    });

    $clearAll.on("click",function(event){        
        domIdsClear.forEach(function (id, i) {
            // console.log(window.LS.get(id), i);
            $(id).val(window.LS.remove(id));
        });
    })


    EventInstance.on("contentChange", function () {
        eventHandles.stInform(domIds);
    });

    //   var domIds = ["#b_title","#b_replay","#b_expectation","#b_chart","#choose_time","#specially","#interactive","#choose_systems",
    //       "#choose_browsers","#choose_version","#choose_version","#choose_version_brance","#choose_time","#interactive","#especially"];
    domIds.forEach(function (id, i) {
        // console.log(window.LS.get(id), i);
        $(id).val(window.LS.get(id));
    });

    eventHandles.bugTitleInfo($bugTitleInfo, titleContent);
    eventHandles.bugContentInfo($bugContentInfo, bugReplayText, bugExceptText, infversionText, jartimeText, timesText, interactiveText);

});
 