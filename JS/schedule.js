var today = new Date();
var date = new Date();
var schedule20200614 = new Date(2020, 6, 14);
var schedule20200229 = new Date(2020, 2, 29);
var schedule20200105 = new Date(2020, 1, 5);
var schedule20191227 = new Date(2019, 12, 27);
var schedule20191225 = new Date(2019, 12, 25);


function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();
}

function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}

function buildCalendar() {
    var firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    var tbCalendar = document.getElementById("calendar");

    var tbCalendarYM = document.getElementById("tbCalendarYM");

    tbCalendarYM.innerHTML = today.getFullYear() + "." + (today.getMonth() + 1);



    while (tbCalendar.rows.length > 2) {
        tbCalendar.deleteRow(tbCalendar.rows.length - 1);
    }

    var row = null;
    row = tbCalendar.insertRow();

    var cnt = 0;

    for (i = 0; i < firstDate.getDay(); i++) {
        cell = row.insertCell();
        cnt = cnt + 1;
    }
    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt = cnt + 1;



        if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=white>" + i
        }

        if (cnt % 7 == 0) {
            cell.innerHTML = "<font color=white>" + i
            row = calendar.insertRow();
        }

        if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i == date.getDate()) {
            cell.innerHTML = "<font color=white>" + i;
        }



        if (schedule20200614.getFullYear() == today.getFullYear() && schedule20200614.getMonth() == today.getMonth() + 1 && schedule20200614.getDate() == i) {
            cell.innerHTML += "<br><label class = schedule>BANG BANG CON The Live<br><span class=scheduleWh>concerts.kiswe.com<br>PM 6:00</span></label>";
        }

        if (schedule20200229.getFullYear() == today.getFullYear() && schedule20200229.getMonth() == today.getMonth() + 1 && schedule20200229.getDate() == i) {
            cell.innerHTML += "<br><label class = schedule><span>더팩트 뮤직 어워즈(TMA)<br><span class=scheduleWh>서울 고척 스카이돔<br>PM 6:00</span></label>";
        }

        if (schedule20200105.getFullYear() == today.getFullYear() && schedule20200105.getMonth() == today.getMonth() + 1 && schedule20200105.getDate() == i) {
            cell.innerHTML += "<br><label class = schedule>제34회 골든디스크어워즈<br><span class=scheduleWh>JTBC, JTBC2, JTBC4<br>PM 6:00</span></label>";
        }

        if (schedule20191227.getFullYear() == today.getFullYear() && schedule20191227.getMonth() == today.getMonth() + 1 && schedule20191227.getDate() == i) {
            cell.innerHTML += "<br><label class = schedule>2019 KBS 가요대축제<br><span class=scheduleWh>KBS2<br>PM 7:50</span></label>";
        }

        if (schedule20191225.getFullYear() == today.getFullYear() && schedule20191225.getMonth() == today.getMonth() + 1 && schedule20191225.getDate() == i) {
            cell.innerHTML += "<br><label class = schedule>2019 SBS 가요대전<br><span class=scheduleWh>SBS<br>PM 5:50</span></label>";
        }
    }
}
