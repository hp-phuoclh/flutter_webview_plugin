function showPopup(data) {
      var styleSheet = document.createElement("style");
      styleSheet.type = 'text/css';
      styleSheet.innerText = '.flutter_modal{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.flutter_modal-content{background-color:#fff;border:1px solid #888;width:80%;border-radius:5px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.flutter_close{line-height: 28px;position:absolute;right:-10px;z-index:100;top:-20px;background:#000;width:30px;height:30px;border-radius:50%;color:#fff;font-size:28px;text-align:center;border:2px solid #fff;}.flutter_close > span {display: block;vertical-align: middle;}.flutter_modal_header{text-align: left;padding:10px;border-bottom:1px solid #ddd;font-weight:700}.flutter_modal_table{width:100%;border-collapse:collapse}.flutter_modal_table td{vertical-align: middle;font-weight: 400;font-size: 14px;padding: 5px}.flutter_modal_table td > img {padding:12px 10px 12px 12px}.flutter_modal_table td >span {padding:0}.flutter_modal_left_icon{height:20px}.flutter_modal_table>tbody>tr>td:first-child{text-align:left;width:25px}.flutter_modal_table>tbody>tr>td:last-child{padding: 12px}.flutter_modal_table>tbody>tr>td{text-align:left;border-bottom:1px solid #ddd}.flutter_modal_table>tbody>tr:last-child>td{border-bottom:none}.flutter_modal_table>tbody>tr>td:last-child{text-align:right;width:30px}.flutter_modal_table>tbody>tr>td>svg{width:12px;height:12px}';
      document.head.appendChild(styleSheet);
      var modal = document.getElementById("flutter_modal");
      if (!modal) {
        var html = '<div id="flutter_modal" class="flutter_modal">' + '<div class="flutter_modal-content"> <div class="flutter_close "><span class="flutter_close_span">&times;</span></div><div class="flutter_modal_header"> '+  data["dialogs"]["StationName"] + '駅の情報'  +'</div><div id="flutter_table_content"><table class="flutter_modal_table"><tbody><tr><td> <img class="flutter_modal_left_icon" src="https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png"></td><td> 駅構内図</td><td> <img class="flutter_modal_left_icon" src="https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png"></td></tr><tr><td> <img class="flutter_modal_left_icon" src="https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png"></td><td>駅構内図</td><td> <img class="flutter_modal_left_icon" src="https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/icon/ic_map.png"></td></tr></tbody></table></div></div></div>';
        var divg = document.createElement("div");
        divg.innerHTML = html;
        document.body.appendChild(divg);
        modal = document.getElementById("flutter_modal");
      }
      window._FLUTTER_DATA_LinkGroups_ = data["dialogs"]["LinkGroups"];

      var table = "<table class='flutter_modal_table'><tbody>" ;
      data["dialogs"]["LinkGroups"].sort(function(a,b) {
        return b["Sort"] - a["Sort"];
      });
      for(var i =0; i< data["dialogs"]["LinkGroups"].length; i++) {
        var tdData = data["dialogs"]["LinkGroups"][i];
        if(parseInt(tdData["Sort"]) < 0){
            continue;
        }
        var tr = "<tr onclick='flutterClickRow(" +i+ " )'><td><img class='flutter_modal_left_icon' src='https://stg-admin.tokyometro-app.com/453e4e9dc82a4a5eaa52910cf61aaaff/"+tdData["Logo"]  +"'/></td><td>" + tdData["LinkName"] +"</td><td>";
        tr = tr+'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/></svg></td>';
        tr=tr+"</tr>";
        table = table + tr;
      }
      table = table + "</tbody></table>";
      document.getElementById('flutter_table_content').innerHTML = table;


      var span = document.getElementsByClassName("flutter_close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
      modal.style.display = "block";
    }

    function closeDialog(){
        alert("yeye");
         document.getElementById("flutter_modal").style.display = "none";
    }

    function closeDialogOnClickOutsideModelPopup(){
        window.onclick = function(event) {
            if (event.target.className == "flutter_close" || event.target.className == "flutter_close_span") {
                document.getElementById("flutter_modal").style.display = "none";
                return;
            }
            if (event.target != document.getElementById("flutter_modal")) {
                 document.getElementById("flutter_modal").style.display = "block";
                }else{
                    document.getElementById("flutter_modal").style.display = "none";
                }
        }
    }

    function flutterClickRow(index) {
        console.log(window._FLUTTER_DATA_LinkGroups_[index]);
        var data = JSON.stringify(window._FLUTTER_DATA_LinkGroups_[index]);
        window.flutter_inappwebview.callHandler('clickStation',data);
    }