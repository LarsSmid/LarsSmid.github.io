
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");


  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "Hovenieren",
        "visits": 60 ,
        "color": "#04D215"
    }, {
        "country": "McDonalds",
        "visits": 45,
        "color": "#FCD202"
    }, {
        "country": "Volleybal",
        "visits": 90,
        "color": "#2A0CD0"
    }, {
        "country": "HTML/CSS",
        "visits": 70,
        "color": "#FF6600"
    }, {
        "country": "JavaScript",
        "visits": 30,
        "color": "#FF0F00"
    }, ],
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
    }],
    "depth3D": 40,
  "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0

    },
    "export": {
      "enabled": true
     }

}, 0);