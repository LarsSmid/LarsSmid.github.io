var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "startDuration": 3,
    "dataProvider": [{
        "country": "Word",
        "visits": 90 ,
        "color": "#04D215"
    }, {
        "country": "Power Point",
        "visits": 80,
        "color": "#FCD202"
    }, {
        "country": "Excel",
        "visits": 60,
        "color": "#2A0CD0"
    }, {
        "country": "Outlook",
        "visits": 40,
        "color": "#FF6600"
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

}, 0);