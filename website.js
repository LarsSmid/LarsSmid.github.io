
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
    "startDuration": 3,
    "dataProvider": [{
        "country": "",
        "visits": 75 ,
        "color": "#04D215"
    }, {
        "country": "Werken met klanten",
        "visits": 90,
        "color": "#FCD202"
    }, {
        "country": "CSS",
        "visits": 75,
        "color": "#2A0CD0"
    }, {
        "country": "HTML",
        "visits": 70,
        "color": "#FF6600"
    }, {
        "country": "JavaScript",
        "visits": 30,
        "color": "#FF0F00"
    }, {
        "country": "sublime text",
        "visits": 90,
        "color": "#333333"
    },  ],
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

}, 0);

