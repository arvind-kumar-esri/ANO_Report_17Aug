var promise = [];
var fieldArray = [];
var data = [];
var datevalue;
var donuts = [];
var stackedDistrict = [];
var polarData = [];
let donutC = null;
let stackC = null;
let polarC = null;
let bubbleC = null;
var sitrepno;
var obj;
require(["esri/Map",
    "esri/views/MapView",
    "esri/WebMap",
    "esri/layers/FeatureLayer",
    "esri/tasks/support/Query",
    "esri/tasks/QueryTask",
    "dojo/on",
    "dojo/_base/lang",
    "esri/widgets/Home",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/Print",
    "esri/config",
    "esri/widgets/Legend",
    "esri/Graphic"

],
    function (Map, MapView, WebMap, FeatureLayer, Query, QueryTask, on, lang, Home, BasemapGallery, LayerList, Print, esriConfig, Legend, Graphic) {


        $("#Report1-tab").on("click", function () {
            window.location.href = "https://anophq.cgpolice.gov.in/anoreport/";

        })

        $("#Report4-tab").on("click", function () {
            window.location.href = "https://anophq.cgpolice.gov.in/ied_report/";

        })
        $("#Report3-tab").on("click", function () {
            window.location.href = "https://anophq.cgpolice.gov.in/ano6report/";

        })

        $("#Report2-tab").on("click", function () {
            window.location.href = "https://anophq.cgpolice.gov.in/ano4report/";

        })
        document.getElementById("basemap").addEventListener("click", basefunc)
        document.getElementById("layers").addEventListener("click", layerfunc)
        document.getElementById("legend-btn").addEventListener("click", legendfunc)
        document.getElementById("print").addEventListener("click", toggleprintbutton)

        esriConfig.portalUrl = "https://anophq.cgpolice.gov.in/portal";

        const webmap = new WebMap({
            portalItem: {
                id: "72a2b255dcc0406bb842f1dcfb7e882d"
            }
        });


        const map = new Map({
            basemap: "topo"
        });


        //map view
        view = new MapView({
            container: "mapDiv",
            map: webmap,
            center: [81.61082664555846, 20.93428188989377],
            zoom: 6
        })
        view.constraints = {
            minZoom: 0,
            maxZoom: 15
        }


        //feature layer - state
        const state = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/0",
            visible: false,
        })
        map.add(state);

        // feature layer - district
        const district = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/1",
            visible: false,
            minScale: 0
        })
        map.add(district);

        // feature layer - PS/Camp
        const psorcamp = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/3",
            visible: false,
            minScale: 0
        })
        map.add(psorcamp);

        fire = new FeatureLayer({
            url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_ab18ffa31f4a425bb9c51193020ca1bc/FeatureServer/0"
        })

        //HOME WIDGET
        home = new Home({
            view: view
        })
        view.ui.add(home, "top-left")

        //BASEMAP WIDGET
        basemap = new BasemapGallery({
            view: view,
            container: "basemapGallery"
        })


        function basefunc() {
            if (document.getElementById("basemapGallery").style.display == "none") {
                document.getElementById("basemapGallery").style.display = "block";
                document.getElementById("layerList").style.display = "none";
                document.getElementById("legend").style.display = "none";
                document.getElementById("printDiv").style.display = "none"
            } else {
                document.getElementById("basemapGallery").style.display = "none"
            }
        }

        //LAYERLIST WIDGET
        layers = new LayerList({
            view: view,
            container: "layerList"
        })

        function layerfunc() {
            if (document.getElementById("layerList").style.display == "none") {
                document.getElementById("layerList").style.display = "block";
                document.getElementById("basemapGallery").style.display = "none";
                document.getElementById("legend").style.display = "none";
                document.getElementById("printDiv").style.display = "none"
            } else {
                document.getElementById("layerList").style.display = "none"
            }
        }

        //LEGEND WIDGET
        legend = new Legend({
            view: view,
            container: "legend"
        })

        function legendfunc() {
            if (document.getElementById("legend").style.display == "none") {
                document.getElementById("legend").style.display = "block";
                document.getElementById("basemapGallery").style.display = "none";
                document.getElementById("layerList").style.display = "none";
                document.getElementById("printDiv").style.display = "none"
            } else {
                document.getElementById("legend").style.display = "none"
            }
        }

        //PRINT WIDGET

        $("#print").on("click", function () {
            view.when(() => {
                print = new Print({
                    view: view,
                    // specify your own print service
                    printServiceUrl:
                        "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
                    container: "printDiv"
                });


            });
        })







        function toggleprintbutton() {
            if (document.getElementById('printDiv').style.display == 'block') {
                document.getElementById('printDiv').style.display = 'none'
            } else {
                document.getElementById('printDiv').style.display = 'block';
                document.getElementById("basemapGallery").style.display = "none";
                document.getElementById("layerList").style.display = "none";
                document.getElementById("legend").style.display = "none"
            }
        }

        // feature layer - ano1layer
        const ano1layer = new FeatureLayer({
            url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0",
            visible: true,
            minScale: 0
        })
        map.add(ano1layer);


        getState("1=1");
        getDistrict("1=1");
        getPs("1=1");
        getMonth("1=1");
        getTable("1=1");
        exportTable("1=1");
        donutData("1=1");
        rCount("operation_type = 'Routine area domination or ROP'");
        cCount("operation_type = 'Chance encounter'");
        dCount("operation_type = 'Demining'");
        iCount("operation_type = 'Int based'");


        $("#refresh").on("click", function () {
            refresh();

        })

     

        function donutData(whereclause) {
            data = [];
            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["district", "injured", "naxal_apprehended", "recoveries", "month", "operation_type","casualty_own", "ps_or_camp"];
            query.where = whereclause;
            query.returnGeometry = false;



            queryTask.execute(query).then(function (res) {
                for (var i = 0; i < res.features.length; i++) {

                    data.push(res.features[i].attributes);

                }
                console.log("data", data);
                donutChart();
                

            });

         

        }


        function donutChart() {
            donuts = [];
            var rc = 0;
            var dc = 0;
            var cc = 0;
            var ic = 0;

            for (var i = 0; i < data.length; i++) {
                if (data[i].operation_type == 'Routine area domination or ROP') {
                    rc = rc + 1;

                }

                else if (data[i].operation_type == 'Chance encounter') {
                    cc = cc + 1;

                }

                else if (data[i].operation_type == 'Int based') {
                    ic = ic + 1;

                }

                else if (data[i].operation_type == 'Demining') {
                    dc = dc + 1;

                }
            }

            console.log("donut", dc, rc, cc, ic);
            donuts = [dc, rc, cc, ic];
            console.log(donuts);

         
            donutForm();
            stackedForm();
           

        }



        function donutForm() {
        

            let canvasdonut = document.getElementById('myChart').getContext('2d');
       
            if (donutC != null) {
                donutC.destroy();
            }

            const data = {
                labels: [
                    'Demining',
                    'ROP',
                    'Chance Encounter',
                    'Int based'
                ],
                datasets: [{
                    label: 'Type of Operation',
                    data: donuts,
                    backgroundColor: [
                        'rgb(100, 181, 246)',
                        'rgb(239, 108, 0)',
                        'rgb(255, 213, 79)',
                        'rgb(69, 90, 100)'

                    ],
                    weight: 0.5,
                    hoverOffset: 4
                }]
            };

        donutC =     new Chart(canvasdonut, {
                type: "doughnut",
                plugins: {
                    title: {
                        display: true,
                        text: 'Type of Operations'
                    },
                    legend: {
                        position: 'bottom',
                    }

                },
                data: data,
          
                options: {
                    aspectRatio:1.3,
                    responsive: true,
                    cutoutPercentage: 80,
                 
                },
            });

           



        }

        function stackedForm() {
            labels = [];
            stackedDistrict = [];
            var district = [];
            for (var i = 0; i < data.length; i++) {
                if (district.includes(data[i].district) == false) {
                    district.push(data[i].district)
                        stackedDistrict.push({ district: data[i].district, value: { Injured: data[i].injured, Recovered: data[i].recoveries, Apprehended: data[i].naxal_apprehended } })

                    } else {
                        for (var j = 0; j < stackedDistrict.length; j++) {
                            if (stackedDistrict[j].district == data[i].district) {
                                stackedDistrict[j].value.Injured = stackedDistrict[j].value.Injured + data[i].injured;
                                stackedDistrict[j].value.Recovered = stackedDistrict[j].value.Recovered + data[i].recoveries;
                                stackedDistrict[j].value.Apprehended = stackedDistrict[j].value.Apprehended + data[i].naxal_apprehended;
                                stackedDistrict[j].value.Casualty = stackedDistrict[j].value.Apprehended + data[i].casualty_own;
                            }
                        }
                    }



            }
            console.log(stackedDistrict);
            inj = [];
            recov = [];
            appre = [];
            for (y in stackedDistrict) {
                labels.push(stackedDistrict[y].district);
                inj.push(stackedDistrict[y].value.Injured);
                recov.push(stackedDistrict[y].value.Recovered);
                appre.push(stackedDistrict[y].value.Apprehended);
            }

            console.log(labels);
            

            let canvasstack = document.getElementById('stackedChart').getContext('2d');

            if (stackC != null) {
                stackC.destroy();
            }


     stackC =       new Chart(canvasstack, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Naxalite Killed/Injured',
                        data: inj ,
                        backgroundColor: '#ef6c00'
                    }, {
                        label: 'Naxalite Apprehended',
                        data: recov,
                        backgroundColor: '#64B5F6'
                    }, {
                        label: 'Naxalite recovered',
                        data: appre,
                        backgroundColor: '#ffd54f'
                        }],
                    options: {
                        devicePixelRatio: 1.5
                    }



                }
                
            });
            polarForm();

        }

        function polarForm() {

            inj = 0;
            rec = 0;
            apr = 0;

            for (var i = 0; i < data.length; i++) {
                inj = inj + data[i].injured;
                rec = rec + data[i].recoveries;
                apr = apr + data[i].naxal_apprehended;
            }
            polarData = [inj, rec, apr];
            console.log("Polar Data", polarData);
            polarChart();

        }

        function polarChart() {

            let canvaspolar = document.getElementById('polarChart').getContext('2d');

            if (polarC != null) {
                polarC.destroy();
            }
            data = {
                datasets: [{
                    data: polarData,
                    backgroundColor: [
                        "#ef6c00",
                        "#ffd54f",
                        "#64B5F6"

                    ],
                }],

           

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'Injured',
                    'Recovered',
                    'Apprehended'
                ],
             
            };

            polarC = new Chart(canvaspolar, {

                data: data,
                type: 'polarArea',

                options: {
                    legend: {
                        display: true,
                    },
                    scale: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    devicePixelRatio: 1.5
                }

            });
            bubbleChart();

        }

        function bubbleChart() {


            district_label = [];
            injured_label = [];
            recovered_label = [];
            apprehended_label = [];
            bubbleData = [];
            bubble = [];


            for (x in stackedDistrict) {
                district_label.push(stackedDistrict[x].district);
                injured_label.push(stackedDistrict[x].value.Injured);
                recovered_label.push(stackedDistrict[x].value.Recovered);
                apprehended_label.push(stackedDistrict[x].value.Apprehended);
            }



            for (x in district_label) {
                bubbleData[x] = {
                    district: district_label[x],
                    injured: injured_label[x],
                    recovered: recovered_label[x],
                    apprehended: apprehended_label[x]
                }
            }

            for (x in bubbleData) {

                bubble[x] = {
                    district: district_label[x],

                    x: injured_label[x],
                    y: recovered_label[x],
                    r: apprehended_label[x]
                }
            }
            console.log("Bubble Chart Data", bubbleData)
            let canvasbubble = document.getElementById('bubbleChart').getContext('2d');

            if (bubbleC != null) {
                bubbleC.destroy();
            }

       bubbleC =     new Chart(canvasbubble, {
                type: "bubble",
                data: {
                    datasets: [{
                        label: "Naxalite killed, arrested, recovered",
                        data: bubble,
                        backgroundColor: "rgb(100, 181, 246)",
                        fill: false
                    }]
                },
                options: {
                    events: [],

                    devicePixelRatio: 1.5,
                    legend: { display: true },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                devicePixelRatio: 1.5

                            }
                        }]
                    },
                }
            })

        }



        $("#selectDistrict").change(function () {
            view.graphics.removeAll();
            var distCode = $("#selectDistrict").val();
            if (distCode == 'All') {
                getState("1=1");
                getPs("1=1");
                getMonth("1=1");
                getTable("1=1");
                exportTable("1=1");
                donutData("1=1");
                rCount("operation_type = 'Routine area domination or ROP'");
                cCount("operation_type = 'Chance encounter'");
                dCount("operation_type = 'Demining'");
                iCount("operation_type = 'Int based'");
            }

            else {
                // getSitrep("district = '" + distCode + "'");
                getPs("district = '" + distCode + "'");
                getMonth("district = '" + distCode + "'");
                getTable("district = '" + distCode + "'");
                exportTable("district = '" + distCode + "'");
                donutData("district = '" + distCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND district = '" + distCode + "'");
                cCount("operation_type = 'Chance encounter' AND district = '" + distCode + "'");
                dCount("operation_type = 'Demining' AND district = '" + distCode + "'");
                iCount("operation_type = 'Int based' AND district = '" + distCode + "'");
                var geom = districts[document.getElementById("selectDistrict").selectedIndex - 1].geometry

                const fillSymbol = {
                    type: "simple-fill", // autocasts as new SimpleFillSymbol()
                    color: [227, 139, 79, 0.8],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 1
                    }
                };

                const polygonGraphic = new Graphic({
                    geometry: geom,
                    symbol: fillSymbol
                });
                view.graphics.add(polygonGraphic);
                view.goTo(geom);

            };

        });

        $("#selectPs").change(function () {
            view.graphics.removeAll();
            var distCode = $("#selectDistrict").val();
            var psCode = $("#selectPs").val();

            if (distCode == 'All' && psCode == 'All') {
                
                getPs("1=1");
                getMonth("1=1");
                getTable("1=1");
                exportTable("1=1");
                donutData("1=1");
                rCount("operation_type = 'Routine area domination or ROP'");
                cCount("operation_type = 'Chance encounter'");
                dCount("operation_type = 'Demining'");
                iCount("operation_type = 'Int based'");
            }

            else if (distCode == 'All' && psCode != 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry
               
                getMonth("ps_or_camp = '" + psCode + "'");
                getTable("ps_or_camp = '" + psCode + "'");
                exportTable("ps_or_camp = '" + psCode + "'");
                donutData("ps_or_camp = '" + psCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND ps_or_camp = '" + psCode + "'");
                cCount("operation_type = 'Chance encounter' AND ps_or_camp = '" + psCode + "'");
                dCount("operation_type = 'Demining' AND ps_or_camp = '" + psCode + "'");
                iCount("operation_type = 'Int based' AND ps_or_camp = '" + psCode + "'");

                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

            else if (distCode != 'All' && psCode != 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry
                getMonth("ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                getTable("ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                exportTable("ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                donutData("ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND ps_or_camp = '" + psCode + "' AND district = '" + distCode + "'");
                cCount("operation_type = 'Chance encounter' AND ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                dCount("operation_type = 'Demining' AND ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");
                iCount("operation_type = 'Int based' AND ps_or_camp = '" + psCode + "'AND district = '" + distCode + "'");

                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);




            }



            else if (distCode != 'All' && psCode == 'All') {
                var geom = districts[document.getElementById("selectDistrict").selectedIndex - 1].geometry
                getMonth("district = '" + distCode + "'");
                getTable("district = '" + distCode + "'");
                exportTable("district = '" + distCode + "'");
                donutData("district = '" + distCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND district = '" + distCode + "'");
                cCount("operation_type = 'Chance encounter' AND district = '" + distCode + "'");
                dCount("operation_type = 'Demining' AND district = '" + distCode + "'");
                iCount("operation_type = 'Int based' AND district = '" + distCode + "'");
                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

        });


        $("#selectMonth").change(function () {
            view.graphics.removeAll();
            var distCode = $("#selectDistrict").val();
            var psCode = $("#selectPs").val();
            var monthCode = $("#selectMonth").val();

            if (distCode == 'All' && psCode == 'All' & monthCode == 'All') {
                donutData("1=1");
                getMonth("1=1");
                getTable("1=1");
                exportTable("1=1");
                rCount("operation_type = 'Routine area domination or ROP'");
                cCount("operation_type = 'Chance encounter'");
                dCount("operation_type = 'Demining'");
                iCount("operation_type = 'Int based'");
            }

            else if (distCode == 'All' && psCode != 'All' && monthCode == 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry
                donutData("ps_or_camp = '" + psCode + "'");
                getTable("ps_or_camp = '" + psCode + "'");
                exportTable("ps_or_camp = '" + psCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND ps_or_camp = '" + psCode + "'");
                cCount("operation_type = 'Chance encounter' AND ps_or_camp = '" + psCode + "'");
                dCount("operation_type = 'Demining' AND ps_or_camp = '" + psCode + "'");
                iCount("operation_type = 'Int based' AND ps_or_camp = '" + psCode + "'");
                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

             if (distCode == 'All' && psCode == 'All' && monthCode != 'All') {
               
                getTable("month = '" + monthCode + "'");
                donutData("month = '" + monthCode + "'");
                exportTable("month = '" + monthCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND month = '" + monthCode + "'");
                cCount("operation_type = 'Chance encounter' AND month = '" + monthCode + "'");
                dCount("operation_type = 'Demining' AND month = '" + monthCode + "'");
                iCount("operation_type = 'Int based' AND month = '" + monthCode + "'");

            }



            else if (distCode != 'All' && psCode != 'All' && monthCode != 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry;
                donutData("district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                getTable("district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                exportTable("district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                cCount("operation_type = 'Chance encounter' AND month = '" + monthCode + "'district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                dCount("operation_type = 'Demining' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                iCount("operation_type = 'Int based' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");

                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

            else if (distCode != 'All' && psCode != 'All' && monthCode == 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry
                donutData("district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                getTable("district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                exportTable("district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                cCount("operation_type = 'Chance encounter' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                dCount("operation_type = 'Demining' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                iCount("operation_type = 'Int based' AND district = '" + distCode + "' && ps_or_camp = '" + psCode + "'");
                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }
                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }


            else if (distCode != 'All' && psCode == 'All' && monthCode != 'All') {
                var geom = district[document.getElementById("selectPs").selectedIndex - 1].geometry
                donutData("district = '" + distCode + "' && month = '" + monthCode + "'");
                getTable("district = '" + distCode + "' && month = '" + monthCode + "'");
                exportTable("district = '" + distCode + "' && month = '" + monthCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND district = '" + distCode + "' && month = '" + monthCode + "'");
                cCount("operation_type = 'Chance encounter' AND district = '" + distCode + "' && month = '" + monthCode + "'");
                dCount("operation_type = 'Demining' AND district = '" + distCode + "' && month = '" + monthCode + "'");
                iCount("operation_type = 'Int based' AND district = '" + distCode + "' && month = '" + monthCode + "'");
                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

            else if (distCode == 'All' && psCode != 'All' && monthCode != 'All') {
                var geom = ps[document.getElementById("selectPs").selectedIndex - 1].geometry
                donutData("ps_or_camp = '" + psCode + "'&& month = '" + monthCode + "'");
                getTable("ps_or_camp = '" + psCode + "'&& month = '" + monthCode + "'");
                exportTable("ps_or_camp = '" + psCode + "'&& month = '" + monthCode + "'");
                rCount("operation_type = 'Routine area domination or ROP' AND ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                cCount("operation_type = 'Chance encounter' AND ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                dCount("operation_type = 'Demining' AND ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");
                iCount("operation_type = 'Int based' AND ps_or_camp = '" + psCode + "' && month = '" + monthCode + "'");

                const markerSymbol = {
                    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                    color: [226, 119, 40],
                    outline: {
                        // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 255],
                        width: 2
                    }


                };

                const pointGraphic = new Graphic({
                    geometry: geom,
                    symbol: markerSymbol
                });
                view.graphics.add(pointGraphic);
                view.goTo(geom);

            }

        });

        $("#consultsched").change(function () {
            var distCode = $("#selectDistrict").val();
            var psCode = $("#selectPs").val();
            var monthCode = $("#selectMonth").val();
            var dateCode = $("#consultsched").val();
            var newdate = parseInt(dateCode.split("-")[2]) + 1
            var newDateCode = dateCode.split("-")[0] + "-" + dateCode.split("-")[1] + "-" + newdate

            if (distCode == 'All' && psCode == 'All' && monthCode == 'All' && dateCode == '') {

                getTable("1=1");
                exportTable("1=1");
            }
            if (distCode == 'All' && psCode == 'All' && monthCode == 'All' && dateCode != '') {
               
                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "'");
        }


            if (distCode != 'All' && psCode == 'All' && monthCode == 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND district = '" + distCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND district = '" + distCode + "'");


            }

            if (distCode == 'All' && psCode != 'All' && monthCode == 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "'");


            }

            if (distCode == 'All' && psCode == 'All' && monthCode != 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "'");


            }

            if (distCode == 'All' && psCode != 'All' && monthCode != 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "' AND ps_or_camp = '" + psCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "' AND ps_or_camp = '" + psCode + "'");


            }

            if (distCode != 'All' && psCode == 'All' && monthCode != 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "' AND district = '" + distCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND month = '" + monthCode + "' AND district = '" + distCode + "'");


            }

            if (distCode != 'All' && psCode != 'All' && monthCode == 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "' AND district = '" + distCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "' AND district = '" + distCode + "'");


            }

            if (distCode != 'All' && psCode != 'All' && monthCode != 'All' && dateCode != '') {

                getTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "' AND district = '" + distCode + "' AND month = '" + monthCode + "'");
                exportTable("datetime BETWEEN '" + dateCode + "' AND '" + newDateCode + "' AND ps_or_camp = '" + psCode + "' AND district = '" + distCode + "' AND month = '" + monthCode + "'");


            }
        });

        function rCount(whereclause) {

            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["operation_type"];
            query.where = whereclause;
            query.returnGeometry = false;

            queryTask.executeForCount(query).then(function (res) {
                console.log(res);
                $("#rCount").html(res);

            })

        };

        function dCount(whereclause) {

            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["operation_type"];
            query.where = whereclause;
            query.returnGeometry = false;

            queryTask.executeForCount(query).then(function (res) {
                console.log(res);
                $("#dCount").html(res);

            })

        };

        function cCount(whereclause) {

            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["operation_type"];
            query.where = whereclause;
            query.returnGeometry = false;

            queryTask.executeForCount(query).then(function (res) {
                console.log(res);
                $("#cCount").html(res);

            })

        };

        function iCount(whereclause) {

            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["operation_type"];
            query.where = whereclause;
            query.returnGeometry = false;

            queryTask.executeForCount(query).then(function (res) {
                console.log(res);
                $("#iCount").html(res);

            })

        };




        function getState(whereclause) {

            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/0"
            });
            query.outFields = ["*"];
            query.where = whereclause;
            query.returnGeometry = true;
            query.orderByFields = ["name ASC"];
            queryTask.execute(query).then(function (res) {
                console.log(res, "state");

                var geom = res.features[0].geometry;
                view.goTo(geom);

            });

        }



        function getDistrict(whereclause) {

            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/1"
            });
            query.outFields = ["*"];
            query.where = whereclause;
            query.returnGeometry = true;
            query.orderByFields = ["name ASC"];
            queryTask.execute(query).then(function (res) {
                console.log(res);
                $("#selectDistrict").empty();
                $("<option/>").val("All").html("All").appendTo("#selectDistrict");
                districts = []

                for (var i = 0; i < res.features.length; i++) {
                    if (res.features[i].attributes.name != " " && res.features[i].attributes.name != "" && res.features[i].attributes.name != null) {
                        districts.push(res.features[i])

                     
                        var fopt1 = document.createElement("OPTION");

                        fopt1.value = res.features[i].attributes.name;

                        fopt1.innerHTML = res.features[i].attributes.name;

                        document.getElementById("selectDistrict").appendChild(fopt1);
                    }
                }


            });

        }

        function getPs(whereclause) {
            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["ps_or_camp"];
            query.where = whereclause;
            query.returnGeometry = true;
            query.returnDistinctValues = true;
            query.orderByFields = ["ps_or_camp ASC"];
            queryTask.execute(query).then(function (res) {
                console.log(res);
                $("#selectPs").empty();
                $("<option/>").val("All").html("All").appendTo("#selectPs");
                ps = []

                for (var i = 0; i < res.features.length; i++) {
                    if (res.features[i].attributes.ps_or_camp != " " && res.features[i].attributes.ps_or_camp != "" && res.features[i].attributes.ps_or_camp != null) {
                        ps.push(res.features[i])

                    
                        var fopt1 = document.createElement("OPTION");

                        fopt1.value = res.features[i].attributes.ps_or_camp;

                        fopt1.innerHTML = res.features[i].attributes.ps_or_camp;

                        document.getElementById("selectPs").appendChild(fopt1);
                    }
                }


            });

        }


        function getMonth(whereclause) {

            var query = new Query();
            whereclause = whereclause.replaceAll('&&', 'AND');
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["month"];
            query.where = whereclause;
            query.returnGeometry = true;
            query.returnDistinctValues = true;
            query.orderByFields = ["month ASC"];
            queryTask.execute(query).then(function (res) {
                console.log(res);

                $("#selectMonth").empty();
                $("<option/>").val("All").html("All").appendTo("#selectMonth");
                month = []

                for (var i = 0; i < res.features.length; i++) {
                    if (res.features[i].attributes.month != " " && res.features[i].attributes.month != "" && res.features[i].attributes.month != null) {

                        month.push(res.features[i])

                    
                        var fopt1 = document.createElement("OPTION");

                        fopt1.value = res.features[i].attributes.month;

                        fopt1.innerHTML = res.features[i].attributes.month;

                        document.getElementById("selectMonth").appendChild(fopt1);
                    }
                }

            });

        }



        function getTable(whereclause) {
            $("#form1").empty();
            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["objectid", "sitrep", "district", "ps_or_camp", "month", "datetime", "brief_force", "operation_type", "brief_incident", "injured", "naxal_apprehended", "recoveries", "casualty_own", "firing_details", "firstaid", "evacuation", "uav", "equipment"];
            query.where = whereclause;
            query.returnGeometry = true;

            var html = "";




            queryTask.execute(query).then(function (res) {
                console.log(res);
                html += "<table id='table' class='table table-boardred'>"
                html += '<tr>'
                html += '<th rowspan=2>' + 'Sl. No' + '</th>'
                html += '<th rowspan=2 style="display: none">' + 'Objectid' + '</th>'
                html += '<th rowspan=2>' + 'SitRep No.' + '</th>'
                html += '<th rowspan=2>' + 'District' + '</th>'
                html += '<th rowspan=2>' + 'PS/Camp' + '</th>'
                html += '<th rowspan=2 style="display: none">' + 'Month' + '</th>'
              html += '<th rowspan=2 style="display:none;">' + 'Date & Time, Duration of incident/ops' + '</th>'
                html += '<th rowspan=2>' + 'Brief of Force involved' + '</th>'
                html += '<th rowspan=2>' + 'Type of Operation' + '</th>'
                html += '<th rowspan=2>' + 'Incident in brief' + '</th>'
                html += '<th colspan=3 style="text-align:center;">' + 'Achievements' + '</th>'
                html += '<th rowspan=2 >' + 'Casualty of SFs' + '</th>'
                html += '<th rowspan=2>' + 'Details of firing' + '</th>'
               html += '<th rowspan=2>' + 'Details' + '</th>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Naxalite Killed/Injured' + '</th>'
                html += '<th>' + 'Naxalite Apprehended' + '</th>'
                html += '<th>' + 'Naxalite Recovered' + '</th>'
                html += '</tr>'
              
                if (res.features.length != 0) {
                    
                    for (var i = 0; i < res.features.length; i++) {
                        var date1 = new Date(+res.features[0].attributes.datetime);
                        var dateAttr = date1.getFullYear() + '-' + ("0" + (date1.getMonth() + 1)).slice(-2) + '-' + ("0" + date1.getDate()).slice(-2);
                        html += '<tr id="content">';
                        html += '<td class = "data">' + (i + 1) + '</td>'
                        html += '<td class = "data" style="display:none">' + (res.features[i].attributes.objectid ? res.features[i].attributes.objectid : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.sitrep ? res.features[i].attributes.sitrep : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.district ? res.features[i].attributes.district : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.ps_or_camp ? res.features[i].attributes.ps_or_camp : "-") + '</td>'
                        html += '<td class = "data" style="display:none">' + (res.features[i].attributes.month ? res.features[i].attributes.month : "-") + '</td>'
                        html += '<td class = "data"  style="display:none">' + (dateAttr ? dateAttr : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.brief_force ? res.features[i].attributes.brief_force : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.operation_type ? res.features[i].attributes.operation_type : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.brief_incident ? res.features[i].attributes.brief_incident : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.injured ? res.features[i].attributes.injured : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.naxal_apprehended ? res.features[i].attributes.naxal_apprehended : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.recoveries ? res.features[i].attributes.recoveries : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.casualty_own ? res.features[i].attributes.casualty_own : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.firing_details ? res.features[i].attributes.firing_details : "-") + '</td>'
                        html += '<td class = "data text-center"><button class="btn btn-sm btn-danger actionBtn" type="button" id ="' + res.features[i].attributes.objectid + "_" + res.features[i].attributes.sitrep + '">View</button></td>';
              


                    }

                    $("#form1").append(html);
                    $(".actionBtn").click(function (evt) {
                        document.getElementById("id01").style.display = "block";
                      anoForm(evt);
                    });

                }

            });
        }

        function anoForm(evt) {
            var id = evt.currentTarget.id;
            var splits = id.split('_');
            obj = splits[0];
            sitrepno = splits[1];
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_ab18ffa31f4a425bb9c51193020ca1bc/FeatureServer/0"
            });
            query.outFields = ["*"];
            query.where = "sitrep = '" + sitrepno + "'",
            query.returnGeometry = true;
             var query1 = new Query();
            let query1Task = new QueryTask({
               
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query1.outFields = ["*"];
            query1.where = "objectid=" + obj;
            query1.returnGeometry = true;

            var query2 = new Query();
            let query2Task = new QueryTask({

                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query2.outFields = ["*"];
            query2.where = "sitrep = '" + sitrepno + "'",
            query2.returnGeometry = true;

            var html = "";
            $("#formDetails").empty();


            promise.push(query1Task.execute(query1));
            promise.push(queryTask.execute(query));
            promise.push(query2Task.execute(query2));
            Promise.all(promise).then((value) => {
                console.log("anushaKiran", value);
                console.log(value[0].features[0].attributes);
                console.log(value[1].features[0].attributes);
                console.log(value[2].features[0].attributes);

            


         

                var date1 = new Date(+value[0].features[0].attributes.datetime);
                var dateAttr = date1.getFullYear() + '-' + ("0" + (date1.getMonth() + 1)).slice(-2) + '-' + ("0" + date1.getDate()).slice(-2);
                html += "<table id='table' class='table table-boardred'>"
                html += '<tr>'
                html += '<th>' + 'SitRep No.' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.sitrep ? value[0].features[0].attributes.sitrep : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'District' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.district ? value[0].features[0].attributes.district : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'PS/Camp' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.ps_or_camp ? value[0].features[0].attributes.ps_or_camp : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Month' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.month ? value[0].features[0].attributes.month : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Date & Time, Duration of incident/ops' + '</th>'
                html += '<td class = "data">' + (dateAttr ? dateAttr : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Brief of Force involved' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.brief_force ? value[0].features[0].attributes.brief_force : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Type of Operation' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.operation_type ? value[0].features[0].attributes.operation_type : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Incident in brief' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.brief_incident ? value[0].features[0].attributes.brief_incident : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Naxalite Killed/Injured' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.injured ? value[0].features[0].attributes.injured : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Naxalite Apprehended' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.naxal_apprehended ? value[0].features[0].attributes.naxal_apprehended : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Naxalite Recovered' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.recoveries ? value[0].features[0].attributes.recoveries : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Arms/Amns Recovered' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.recovery_arms ? value[1].features[0].attributes.recovery_arms : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'SFs Martyred' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.martyred ? value[1].features[0].attributes.martyred : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'SFs Injured' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.injured_1 ? value[1].features[0].attributes.injured_1 : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Loss of arms/ammunitions' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.loss_arms ? value[1].features[0].attributes.loss_arms : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Details of firing' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.firing_details ? value[0].features[0].attributes.firing_details : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Use of first aid & quick clot' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.firstaid ? value[0].features[0].attributes.firstaid : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Evacuation' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.evacuation ? value[0].features[0].attributes.evacuation : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Use of UAV' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.uav ? value[0].features[0].attributes.uav : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Special equipment used' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.equipment ? value[0].features[0].attributes.equipment : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'FIR no, sections' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.fir ? value[1].features[0].attributes.fir : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Source of Intelligence' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.intelligence ? value[1].features[0].attributes.intelligence : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Identification of Naxalites' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.identification ? value[1].features[0].attributes.identification : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Disposal of Dead Body whether returned to family or disposed' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.disposal_dead ? value[1].features[0].attributes.disposal_dead : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Intimation to NHRC' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.identification_nhrc ? value[1].features[0].attributes.identification_nhrc : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Name of Police officers who did commendable job' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.police_name ? value[1].features[0].attributes.police_name : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Size of crater (in case of IED Blast)' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.crater_size ? value[1].features[0].attributes.crater_size : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Date of PM' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.date_of_pm ? value[1].features[0].attributes.date_of_pm : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Brief findings of PM' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.brief_findings ? value[1].features[0].attributes.brief_findings : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th >' + 'Whether magisterial inquiry ordered' + '</th>'
                html += '<td class = "data">' + (value[1].features[0].attributes.magisterial_injury ? value[1].features[0].attributes.magisterial_injury : "-") + '</td>'
                html += '</tr>'
                html += '<tr>'
                html += '<th>' + 'Other Details(if any)' + '</th>'
                html += '<td class = "data">' + (value[0].features[0].attributes.remarks ? value[0].features[0].attributes.remarks : "-") + '</td>'
                html += '</tr>'


                $("#formDetails").append(html);
                attachmentinquest();
                attachmentfir();
                attachmenteye();
                attachmentops();
                attachmentdebriefing();
                attachmentnhrc();
                attachmentnewspaper();
            })

              
        }


      async  function attachmentinquest() {
            $("#attachmentFire").empty();

          await  fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "image",
              
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                         
                            var att = document.getElementById("attachmentFire");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                              

                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("attachmentFire").appendChild(image);


                            });




                        }
                    })
                })
            });




        }

      async  function attachmentfir() {
            $("#fir").empty();

          fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_fir",
               
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                 fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                          
                            var att = document.getElementById("fir");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                             
                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("fir").appendChild(image);


                            });




                        }
                    })
                })
            });




        }

      async  function attachmenteye() {
            $("#eye").empty();

          await  fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_sketch",
                 
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                       
                            var att = document.getElementById("eye");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                               

                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("eye").appendChild(image);


                            });




                        }
                    })
                })
            });




        }

      async  function attachmentops() {
            $("#ops").empty();

           await fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_plan",
                  
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                        
                            var att = document.getElementById("ops");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                            

                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("ops").appendChild(image);


                            });




                        }
                    })
                })
            });




        }


        async function attachmentnhrc() {
            $("#nhrc").empty();

           await fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_nhrc",
                 
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                        
                            var att = document.getElementById("nhrc");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                         

                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("nhrc").appendChild(image);


                            });




                        }
                    })
                })
            });




        }

        async function attachmentdebriefing() {
            $("#debriefing").empty();

            await fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_debriefing",
                  
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                     
                            var att = document.getElementById("debriefing");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {


                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("debriefing").appendChild(image);


                            });




                        }
                    })
                })
            });




        }

        async function attachmentnewspaper() {
            $("#newspaper").empty();

            await fire.queryObjectIds().then(function (objectid) {
                let attachmentQuery = {
                    where: "sitrep = '" + sitrepno + "'",
                    keywords: "enclosure_newspaper",
               
                    objectIds: objectid,
                    attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif", "application/pdf"]

                };

                console.log(attachmentQuery);
                fire.queryAttachments(attachmentQuery).then(function (attachments) {
                    attachmentQuery.objectIds.forEach(function (objectId) {
                        if (attachments[objectId]) {


                            let attachment = attachments[objectId];

                       
                            var att = document.getElementById("newspaper");
                            att.innerHTML = ""
                            attachment.forEach(function (item) {

                         

                                const image = document.createElement("img");
                                image.src = item.url;
                                image.className = "queryImg";


                                document.getElementById("newspaper").appendChild(image);


                            });




                        }
                    })
                })
            });




        }


        function exportTable(whereclause) {

            $("#form1Download").empty();
            whereclause = whereclause.replaceAll('&&', 'AND');
            var query = new Query();
            let queryTask = new QueryTask({
                url: "https://anophq.cgpolice.gov.in/server/rest/services/Hosted/service_6c6a194f7a2d4eda921849575f58ce43/FeatureServer/0"
            });
            query.outFields = ["*"];
            query.where = whereclause;
            query.returnGeometry = true;

            

            queryTask.execute(query).then(function (res) {
                var html = "";
                html += "<table id='table' class='table table-boardred'>"
                html += '<tr>'
                html += '<th rowspan=2>' + 'Sl. No' + '</th>'
                html += '<th rowspan=2>' + 'SitRep No.' + '</th>'
                html += '<th rowspan=2>' + 'District' + '</th>'
                html += '<th rowspan=2>' + 'PS/Camp' + '</th>'
                html += '<th rowspan=2 style="display: none">' + 'Month' + '</th>'
                html += '<th rowspan=2>' + 'Date & Time, Duration of incident/ops' + '</th>'
                html += '<th rowspan=2>' + 'Brief of Force involved' + '</th>'
                html += '<th rowspan=2>' + 'Type of Operation' + '</th>'
                html += '<th rowspan=2>' + 'Incident in brief' + '</th>'
                html += '<th colspan=4 style="text-align: center">' + 'Achievements' + '</th>'
                html += '<th colspan=2>' + 'Casualty of SFs' + '</th>'
                html += '<th rowspan=2>' + 'Loss of arms/ammunitions' + '</th>'
                html += '<th rowspan=2>' + 'Details of firing' + '</th>'
                html += '<th rowspan=2>' + 'Use of first aid & quick clot' + '</th>'
                html += '<th rowspan=2>' + 'Evacuation' + '</th>'
                html += '<th rowspan=2>' + 'Use of UAV' + '</th>'
                html += '<th rowspan=2>' + 'Special equipment used' + '</th>'
                html += '<th rowspan=2>' + 'FIR no, sections' + '</th>'
                html += '<th rowspan=2>' + 'Source of Intelligence' + '</th>'
                html += '<th rowspan=2>' + 'Identification of Naxalites' + '</th>'
                html += '<th rowspan=2>' + 'Disposal of Dead Body whether returned to family or disposed' + '</th>'
                html += '<th rowspan=2>' + 'Intimation to NHRC' + '</th>'
                html += '<th rowspan=2>' + 'Name of Police officers who did commendable job' + '</th>'
                html += '<th rowspan=2>' + 'Size of crater (in case of IED Blast)' + '</th>'
                html += '<th rowspan=2>' + 'Date of PM' + '</th>'
                html += '<th rowspan=2>' + 'Brief findings of PM' + '</th>'
                html += '<th rowspan=2>' + 'Whether magisterial inquiry ordered' + '</th>'
                html += '<th rowspan=2>' + 'Other Details(if any)' + '</th>'



                html += '</tr>'

                html += '<tr>'
                html += '<th>' + 'Naxalite Killed/Injured' + '</th>'
                html += '<th>' + 'Naxalite Apprehended' + '</th>'
                html += '<th>' + 'Naxalite Recovered' + '</th>'
                html += '<th>' + 'Arms/Amns Recovered' + '</th>'
                html += '<th>' + 'Martyred' + '</th>'
                html += '<th>' + 'Injured' + '</th>'
                html += '<tr>'

                if (res.features.length != 0) {

                    for (var i = 0; i < res.features.length; i++) {
                        var date1 = new Date(+res.features[0].attributes.datetime);
                        var dateAttr = date1.getFullYear() + '-' + ("0" + (date1.getMonth() + 1)).slice(-2) + '-' + ("0" + date1.getDate()).slice(-2);
                        html += '<tr id="content">';
                        html += '<td class = "data">' + (i + 1) + '</td>'
                        html += '<td class = "data" style="display:none">' + (res.features[i].attributes.objectid ? res.features[i].attributes.objectid : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.sitrep ? res.features[i].attributes.sitrep : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.district ? res.features[i].attributes.district : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.ps_or_camp ? res.features[i].attributes.ps_or_camp : "-") + '</td>'
                        html += '<td class = "data" style="display:none">' + (res.features[i].attributes.month ? res.features[i].attributes.month : "-") + '</td>'
                        html += '<td class = "data">' + (dateAttr ? dateAttr : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.brief_force ? res.features[i].attributes.brief_force : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.operation_type ? res.features[i].attributes.operation_type : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.brief_incident ? res.features[i].attributes.brief_incident : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.injured ? res.features[i].attributes.injured : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.naxal_apprehended ? res.features[i].attributes.naxal_apprehended : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.recoveries ? res.features[i].attributes.recoveries : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.recovery_arms ? res.features[i].attributes.recovery_arms : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.martyred ? res.features[i].attributes.martyred : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.injured_1 ? res.features[i].attributes.injured_1 : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.loss_arms ? res.features[i].attributes.loss_arms : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.firing_details ? res.features[i].attributes.firing_details : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.firstaid ? res.features[i].attributes.firstaid : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.evacuation ? res.features[i].attributes.evacuation : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.uav ? res.features[i].attributes.uav : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.equipment ? res.features[i].attributes.equipment : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.fir ? res.features[i].attributes.fir : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.intelligence ? res.features[i].attributes.intelligence : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.identification ? res.features[i].attributes.identification : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.disposal_dead ? res.features[i].attributes.disposal_dead : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.identification_nhrc ? res.features[i].attributes.identification_nhrc : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.police_name ? res.features[i].attributes.police_name : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.crater_size ? res.features[i].attributes.crater_size : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.date_of_pm ? res.features[i].attributes.date_of_pm : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.brief_findings ? res.features[i].attributes.brief_findings : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.magisterial_injury ? res.features[i].attributes.magisterial_injury : "-") + '</td>'
                        html += '<td class = "data">' + (res.features[i].attributes.remarks ? res.features[i].attributes.remarks : "-") + '</td>'


                    }

                    $("#form1Download").append(html);


                }




            });

        }

        function refresh() {

            view.graphics.removeAll();
            getState("1=1");
            getDistrict("1=1");
            getPs("1=1");
            getMonth("1=1");
            getTable("1=1");
            exportTable("1=1");
            donutData("1=1");
            rCount("operation_type = 'Routine area domination or ROP'");
            cCount("operation_type = 'Chance encounter'");
            dCount("operation_type = 'Demining'");
            iCount("operation_type = 'Int based'");



        }


        $("#printPdf").on("click", function () {
            printmodal();

        })


        $("#pdfbar").on("click", function () {
            printstackchart();

        })

        $("#pdfdonut").on("click", function () {
            printdonutchart();

        })
        $("#pdfpolar").on("click", function () {
            printpolarchart();

        })
        $("#pdfbubble").on("click", function () {
            printbubblechart();

        })
        function printstackchart() {
            const element = document.getElementById('stacks')
            html2pdf(element, {
                margin: 10,
                filename: 'stacChart.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            });
        }

        function printdonutchart() {
            const element = document.getElementById('donuts')
            html2pdf(element, {
                margin: 10,
                filename: 'donutChart.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            });
        }

        function printpolarchart() {
            const element = document.getElementById('polars')
            html2pdf(element, {
                margin: 10,
                filename: 'polarChart.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            });
           
        }

        function printbubblechart() {
            const element = document.getElementById('bubbles')
            html2pdf(element, {
                margin: 10,
                filename: 'Bubble_chart.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            });
        }

        
        function printmodal() {
           
            var element = document.getElementById('printdetails');
            var opt = {
                margin: 10,
                filename: 'Naxal_Details.pdf',
                image: { type: 'jpg', quality: 0.98 },
                html2canvas: { scale: 2},
                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            }
            html2pdf().set(opt).from(element).save();
            //html2pdf(element, {
            //    margin: 10,
            //    filename: 'Naxal_Details.pdf',
            //    image: { type: 'jpg', quality: 0.98 },
            //    html2canvas: { scale: 2},
            //    jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
            //});
        }



        $("#martyrDetails").on("click", function () {
            document.getElementById("martyrD").style.display = "block";
            document.getElementById("printdetails").style.display = "none";

        })

        $("#ano123Details").on("click", function () {
            document.getElementById("martyrD").style.display = "none";
            document.getElementById("printdetails").style.display = "block";

        })
 
      


        $("#xls3").on("click", function () {
            Excelonclick();

        })

     



        function Excelonclick() {
            var data = [];
            var rows = document.querySelectorAll("#form1Download tr");
            for (var i = 0; i < rows.length; i++) {
                var row = [], cols = rows[i].querySelectorAll("td, th");
                for (var j = 0; j < cols.length; j++) {
                    row.push(cols[j].innerText);
                }
                data.push(row.join(","));
            }
            downloadCSVFile(data.join("\n"), "details.csv");
        }

        function downloadCSVFile (csv, filename) {
            var csv_file, download_link;

            csv_file = new Blob([csv], { type: "text/csv" });

            download_link = document.createElement("a");

            download_link.download = filename;

            download_link.href = window.URL.createObjectURL(csv_file);

            download_link.style.display = "none";

            document.body.appendChild(download_link);

            download_link.click();
        }



    });


