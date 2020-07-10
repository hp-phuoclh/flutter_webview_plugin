package com.flutter_webview_plugin;

public class JsCode {
    public static final String HAND_SHAKE = "window.dispatchEvent(new Event('TokyoMetroNavitimeSearchHandler'));";
    public static final String SHOW_POPUP = "function showPopup(data) {\n alert(data);" +
            "      var styleSheet = document.createElement(\"style\");\n" +
            "      styleSheet.type = 'text/css';\n" +
            "      styleSheet.innerText = '.flutter_modal{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.flutter_modal-content{text-align: left;background-color:#fff;border:1px solid #888;width:80%;border-radius:5px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.flutter_close{position:absolute;right:-10px;z-index:100;top:-20px;background:#000;width:35px;height:25px;border-radius:50%;color:#fff;font-size:28px;text-align:center;padding-bottom:12px}.flutter_modal_header{padding:10px;border-bottom:1px solid #ddd;font-weight:700}.flutter_modal_table{width:100%;border-collapse:collapse}.flutter_modal_table td{padding:15px;text-align: left !important;}.flutter_modal_left_icon{height:20px}.flutter_modal_table>tbody>tr>td:first-child{text-align:left;width:30px}.flutter_modal_table>tbody>tr>td{border-bottom:1px solid #ddd}.flutter_modal_table>tbody>tr:last-child>td{border-bottom:none}.flutter_modal_table>tbody>tr>td:last-child{text-align:right;width:30px}';\n" +
            "      document.head.appendChild(styleSheet);\n" +
            "      var modal = document.getElementById(\"flutter_modal\");\n" +
            "      if (!modal) {\n" +
            "        var html = '<div id=\"flutter_modal\" class=\"flutter_modal\">' + '<div class=\"flutter_modal-content\"> <span class=\"flutter_close \">&times;</span><div class=\"flutter_modal_header\"> 外苑前駅の情報</div><div id=\"flutter_table_content\"><table class=\"flutter_modal_table\"><tbody><tr><td> <img class=\"flutter_modal_left_icon\" src=\"https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png\"></td><td> 駅構内図</td><td> <img class=\"flutter_modal_left_icon\" src=\"https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png\"></td></tr><tr><td> <img class=\"flutter_modal_left_icon\" src=\"https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png\"></td><td> 駅構内図</td><td> <img class=\"flutter_modal_left_icon\" src=\"https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png\"></td></tr></tbody></table></div></div></div>';\n" +
            "        var divg = document.createElement(\"div\");\n" +
            "        divg.innerHTML = html;\n" +
            "        document.body.appendChild(divg);\n" +
            "        modal = document.getElementById(\"flutter_modal\");\n" +
            "      }\n" +
            "      window._FLUTTER_DATA_LinkGroups_ = data[\"dialogs\"][\"LinkGroups\"];\n" +
            "\n" +
            "      var table = \"<table class='flutter_modal_table'><tbody>\" ;\n" +
            "      for(var i =0; i< data[\"dialogs\"][\"LinkGroups\"].length; i++) {\n" +
            "        var tdData = data[\"dialogs\"][\"LinkGroups\"][i];\n" +
            "        var tr = \"<tr onclick='flutterClickRow(\" +i+ \" )'><td><img class='flutter_modal_left_icon' src='https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/\"+tdData[\"Logo\"]  +\"'/></td><td>\" + tdData[\"LinkName\"] +\"</td><td>\";\n" +
            "        tr = tr+'<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z\"/></svg></td>';\n" +
            "        tr=tr+\"</tr>\";\n" +
            "        table = table + tr;\n" +
            "      }\n" +
            "      table = table + \"</tbody></table>\";\n" +
            "      document.getElementById('flutter_table_content').innerHTML = table;\n" +
            "\n" +
            "\n" +
            "      var span = document.getElementsByClassName(\"flutter_close\")[0];\n" +
            "      span.onclick = function() {\n" +
            "        modal.style.display = \"none\";\n" +
            "      }\n" +
            "      modal.style.display = \"block\";\n" +
            "    }\n" +
            "\n" +
            "    function flutterClickRow(index) {\n" +
            "      console.log(window._FLUTTER_DATA_LinkGroups_[index]);\n" +
            "      window.flutter_inappwebview.callHandler('clickStation',window._FLUTTER_DATA_LinkGroups_[index]);\n" +
            "    }";
}
