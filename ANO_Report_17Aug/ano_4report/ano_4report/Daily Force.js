var webmap;
var map;
var view;
var state;
var district;
var ps;
var select;
var force;
var force1;
var date;
var date1;
var dataArray = [];
var graphics;
var day;
var month;
var year;
var day_selectMonth;
var query;
var home;
var basemap;
var layers;
var legend;
var print;
var values = []
let count_data = [];
let type =[];
let number =[];
var date2=[];
var selectMonth = [];
var data = [];
var array = {};
var attachment;
let attr;
let attr1;
var mCount1;
var mCount2;

require([
        "esri/WebMap",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/Graphic",
        "esri/tasks/support/Query",
        "esri/widgets/Home",
        "esri/widgets/BasemapGallery",
        "esri/widgets/LayerList",
        "esri/widgets/Print",
        "esri/widgets/Legend",
        "esri/config",
        "esri/rest/support/StatisticDefinition"
        
],
    function(WebMap, Map, MapView, FeatureLayer, Graphic, Query, Home, BasemapGallery, LayerList, Print, Legend,esriConfig, StatisticDefinition){

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

        $("#barchart1").on('click', function(){
            document.getElementById('bubbleChart').style.display = 'none'
            document.getElementById('doughnutChart').style.display = 'none'
            
            displayBar();
            
        })

        $("#barchart2").on('click', function(){
            document.getElementById('bubbleChart1').style.display = 'none'
            document.getElementById('doughnutChart1').style.display = 'none'

            displayBar1()
        })

        $("#barchart3").on('click', function(){
            document.getElementById('bubbleChart2').style.display = 'none'
            document.getElementById('doughnutChart2').style.display = 'none'

            displayBar2()
        })

        $("#bubblechart1").on('click', function(){
            
            displayBubble();
            
        })

        $("#bubblechart2").on('click', function(){
            displayBubble1();
        })

        $("#bubblechart3").on('click', function(){
            displayBubble2();
        })

        $("#doughnutchart1").on('click', function(){
            
            displayDoughnut()
            
        })

        $("#doughnutchart2").on('click', function(){
            
            displayDoughnut1()
            
        })

        $("#doughnutchart3").on('click', function(){
            
            displayDoughnut2()
            
        })

        function displayBar(){

            if(document.getElementById('barChart').style.display == 'block'){
                document.getElementById('barChart').style.display = 'none';
                document.getElementById('bubbleChart').style.display = 'none';
                document.getElementById('doughnutChart').style.display = 'none';
            } 
            else{
                document.getElementById('barChart').style.display = 'block'
            }
        }

        function displayBar1(){
            if(document.getElementById('barChart1').style.display == 'block'){
                document.getElementById('barChart1').style.display = 'none';
                document.getElementById('bubbleChart1').style.display = 'none';
                document.getElementById('doughnutChart1').style.display = 'none';
            } else{
                document.getElementById('barChart1').style.display = 'block'
            }
        }

        function displayBar2(){
            if(document.getElementById('barChart2').style.display == 'block'){
                document.getElementById('barChart2').style.display = 'none';
                document.getElementById('bubbleChart2').style.display = 'none';
                document.getElementById('doughnutChart2').style.display = 'none';
            } else{
                document.getElementById('barChart2').style.display = 'block'
            }
        }

        function displayBubble(){

            if(document.getElementById('bubbleChart').style.display == 'none'){
                document.getElementById('barChart').style.display = 'none';
                document.getElementById('bubbleChart').style.display = 'block';
                document.getElementById('doughnutChart').style.display = 'none';
            } else{
                document.getElementById('bubbleChart').style.display = 'none'
            }
        }

        function displayBubble1(){

            if(document.getElementById('bubbleChart1').style.display == 'none'){
                document.getElementById('barChart1').style.display = 'none';
                document.getElementById('bubbleChart1').style.display = 'block';
                document.getElementById('doughnutChart1').style.display = 'none';
            } else{
                document.getElementById('bubbleChart1').style.display = 'none'
            }
        }

        function displayBubble2(){
            if(document.getElementById('bubbleChart2').style.display == 'none'){
                document.getElementById('barChart2').style.display = 'none';
                document.getElementById('bubbleChart2').style.display = 'block';
                document.getElementById('doughnutChart1').style.display = 'none';
            } else{
                document.getElementById('bubbleChart2').style.display = 'none'
            }
        }

        function displayDoughnut(){
            
            if(document.getElementById('doughnutChart').style.display == 'none'){
                document.getElementById('doughnutChart').style.display = 'block';
                document.getElementById('barChart').style.display = 'none';
                document.getElementById('bubbleChart').style.display = 'none';
                
            } else{
                document.getElementById('doughnutChart').style.display = 'none'
            }
        }

        function displayDoughnut1(){
            
            if(document.getElementById('doughnutChart1').style.display == 'none'){
                document.getElementById('doughnutChart1').style.display = 'block';
                document.getElementById('barChart1').style.display = 'none';
                document.getElementById('bubbleChart1').style.display = 'none';
                
            } else{
                document.getElementById('doughnutChart1').style.display = 'none'
            }
        }

        function displayDoughnut2(){
            
            if(document.getElementById('doughnutChart2').style.display == 'none'){
                document.getElementById('doughnutChart2').style.display = 'block';
                document.getElementById('barChart2').style.display = 'none';
                document.getElementById('bubbleChart2').style.display = 'none';
                
            } else{
                document.getElementById('doughnutChart2').style.display = 'none'
            }
        }
        
        document.getElementById("basemap").addEventListener("click", basefunc)
        document.getElementById("layers").addEventListener("click", layerfunc)
        document.getElementById("legend-btn").addEventListener("click", legendfunc)
        document.getElementById("print").addEventListener("click", toggleprintbutton)

        esriConfig.portalUrl = "https://anophq.cgpolice.gov.in/portal";
     
        // //map 
        // webmap = new WebMap({
        //     portalItem: {
        //         id: "72a2b255dcc0406bb842f1dcfb7e882d"
        //     }
        // });

        map = new Map({
            basemap: 'satellite'
        })

        //map view
        view = new MapView({
            map: map,
            container: "mapDiv",
            center: [81.61082664555846, 20.93428188989377],
            zoom: 6
        })
        view.constraints = {
            minZoom: 0,
            maxZoom: 15
        }

        // feature layer - district
        district = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/1",
            visible: true,
            minScale:0
        })
        map.add(district)

        //feature layer - state
        state = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/0"
        })
        map.add(state)
        
        //police stations
        ps = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/3"
        })

        force = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_fad057dc9500478ab8f96b33adb13eb9/FeatureServer/0"
        })
        // map.add(force)
        
        force1 = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_fad057dc9500478ab8f96b33adb13eb9/FeatureServer/1"
        })
        // map.add(force1)

        getTable("1=1");
        getDistrict("1=1");
        getPs("1=1")

        //---------GET DISTRICT PS AND MONTH-----------

        force1.queryFeatures({
            where: '1=1',
            outFields: ['*'],
            returnGeometry: false,
            orderByFields: ["objectid"]
        }).then(function (results){
            for(i=0; i<results.features.length; i++){
                dataArray[i] = {
                    objectid: results.features[i].attributes.objectid,
                    strength: results.features[i].attributes.strength_of_force,
                    duration: results.features[i].attributes.duration,
                }
            }
        })
        
        console.log("Data Array", dataArray)
         
        //------DROPDOWN STARTS-----------
        
        const select = document.getElementById("selectDistrict")
        var select2 = document.getElementById('selectPs')

        function getDistrict(wherecondition){
            force.queryFeatures({
                where: wherecondition,
                outFields: ["*"],
                returnGeometry: false
            }).then(function(results) {
                for(const res of results.features) {

                    $("#selectDistrict").append("<option>"+"All"+"</option>")
                   
    
                select.appendChild(new Option(res.attributes.district, res.attributes.district));
                remove()
                }
            });
        }

        function getPs(wherecondition){
            force.queryFeatures({
                where: wherecondition,
                outFields: ["*"],
                returnGeometry: false
            }).then(function(results) {
                for(const res of results.features) {

                    

                    $("#selectPs").append("<option>"+"All"+"</option>")
    
                select2.appendChild(new Option(res.attributes.ps_or_camp, res.attributes.ps_or_camp));
                removeStn();
                change()
                }
            });
        }

              


//--------------------INDICATORS--------------------
var strengthOfForce = new Query();

                strengthOfForce.outStatistics=[{
                        onStatisticField: "strength_of_force",
                        outStatisticFieldName: "strength",
                        statisticType: "sum"
                    
                    }]

                    
                    
                    force1.queryFeatures(strengthOfForce).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("strength")
                            c.innerHTML=''
                            c.append(attr.strength)
                          });
                         
                    })

                    var data2=[]

    force1.queryFeatures({
        where: "1=1",
        outFields: ['*']
    }).then(function (results){
        for(i=0; i< results.features.length; i++){
            for(j=1; j<data.length; j++){
                data2[i] = {
                    force: results.features[i].attributes.strength_of_force,
                    district:data[i].district
                }
            }
            
        }
    })

    console.log("Data 2", data2)



var durationquery = new Query();

durationquery.outStatistics=[{
                        onStatisticField: "duration",
                        outStatisticFieldName: "dur",
                        statisticType: "sum"
                    
                    }]

                                       
                    force1.queryFeatures(durationquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("duration")
                            c.innerHTML=''
                            c.append(attr.dur)
                          });
                         
                    })

                    var data3=[]

    force1.queryFeatures({
        where: "1=1",
        outFields: ['*']
    }).then(function (results){
        for(i=0; i< results.features.length; i++){
            for(j=1; j<data.length;j++){
                data3[i] = {
                    duration: results.features[i].attributes.duration,
                    district:data[i].district
                }
            }
            
        }
    })

        

$("#selectDistrict").on('change', function(){

    

    
    var strengthForce = []
    strengthForce.length =0;

    
    
    for(x in data2){
        if(select.value == data2[x].district){
            strengthForce.push(data2[x].force)
        }
    
    }
    console.log("Value",strengthForce)
   
    var c = document.getElementById("strength")
    c.innerHTML=''
        c.append(strengthForce)
    
    
    if(select.value == "All"){
                           
        force1.queryFeatures(strengthOfForce).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("strength")
                c.innerHTML=''
                c.append(attr.strength)
              });
             
        })
    }

})

$("#selectDistrict").change(function (){
    


    var duration = []
    duration.length =0;

    
    
    for(x in data3){
        if(select.value == data3[x].district){
            duration.push(data3[x].duration)
        }
    
    }
    console.log("Value",duration)
   
    var c = document.getElementById("duration")
    c.innerHTML=''
        c.append(duration)
    



    if(select.value == "All"){
                           
        force1.queryFeatures(durationquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("duration")
                c.innerHTML=''
                c.append(attr.dur)
              });
             
        })
    }
})

    


//--------------------DROPDOWN CHANGE---------------
       
                $("#selectDistrict").change(function () {
                    view.graphics.removeAll();
                    $("#selectPs").empty();
                    

                    if(select.value == "All"){
                        $("#selectDistrict").empty();
                        getDistrict("1=1")
                        $("#selectPs").empty();
                        getPs("1=1")
                        $("#form5").empty();
                        getTable("1=1")
                        
                    }else{
                        $("#selectPs").empty();
                        getPs("district = '"+select.value+"'")
                        $("#form5").empty();
                        getTable("1=1")
                    }

                });

                $("#selectPs").change(function () {

                    if(select.value == "All" && select2.value == "All"){
                        $("#selectDistrict").empty();
                        getDistrict("1=1")
                        $("#selectPs").empty();
                        getPs("1=1")
                    }else if(select.value == "All" && select2.value != "All"){
                        $("#selectDistrict").empty()
                        getDistrict("ps_or_camp = '" + select2.value + "'")
                        $("#form5").empty();
                        getTable("ps_or_camp = '" + select2.value + "'")
                    }else if(select.value!="All" && select2.value!="All"){
                        $("#selectDistrict").empty()
                        getDistrict("district = '"+select.value+"'AND ps_or_camp='"+select2.value+"'")
                        $("#form5").empty();
                        getTable("district = '"+select.value+"'AND ps_or_camp='"+select2.value+"'")
                    }               
                    
                });
         
                
           

        view.on("load", function(){
            change()
            removeduplicate()
            remove()
                    
        })

        function removeduplicate()
            {
            var mycode = {};
            $("select[id='selectMonth'] > option").each(function () {
                if(mycode[this.text]) {
                    $(this).remove();
                } else {
                    mycode[this.text] = this.value;
                }
            });
            }

             
            function remove()
                {
                var mycode = {};
                $("select[id='selectDistrict'] > option").each(function () {
                    if(mycode[this.text]) {
                        $(this).remove();
                    } else {
                        mycode[this.text] = this.value;
                    }
                });
                }

                $('#selectDistrict,#selectMonth,#date').on('change', function(){
                    change();
                })

                function removeStn()
                    {
                    var mycode = {};
                    $("select[id='selectPs'] > option").each(function () {
                        if(mycode[this.text]) {
                            $(this).remove();
                        } else {
                            mycode[this.text] = this.value;
                        }
                    });
                    }

                    function change()
                    {
                    $('select').each(function() {
                        $(this).find('option:contains("null")').remove();

                    });

                    }
 
                    

//         //----------MAPVIEW-----------------
        

        $("#selectDistrict").on("change", function(){
            district.queryFeatures({
            where: `name='${select.value}'`,
            outFields: ["name"],
            returnGeometry: true
            }).then(function (results) {
            
            if (select.value == "All"){
                view.extent = district.fullExtent
            } else {
                // console.log(select.value)
                
                var geom = results.features[0].geometry
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
                
            }
            })

        })

        $("#selectPs").on("change", function(){
            force.queryFeatures({
            where: `police_station='${select2.value}'`,
            outFields: ["police_station"],
            returnGeometry: true
            }).then(function (results) {
                console.log("Results",results)
            
            if (select2.value == "All"){
                view.extent = district.fullExtent
            } else {
                // console.log(select.value)
                
                var geom = results.features[0].geometry
                
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
            })

        })

        //------------------DATE-------------------

        $("#date").daterangepicker({
            maxDate: new Date()
        });
        
        $("#date").change(function(){
            
            start = $('#date').data('daterangepicker').startDate.format("MM-DD-YYYY");
            end = $('#date').data('daterangepicker').endDate.format("MM-DD-YYYY");
        
            console.log(start)
            console.log(end)
        
        
        })
        
        $("#date").change(function(){
            $("#form5").empty();
            getTable("datetime BETWEEN '" + start + "' AND '" + end + "'")
            $("#selectDistrict").empty()
            getDistrict("datetime BETWEEN '" + start + "' AND '" + end + "'")
            $("#selectPs").empty();
            getPs("datetime BETWEEN '" + start + "' AND '" + end + "'")
        })
             

        
//         //-----------WIDGETS---------------
    
        //HOME WIDGET
        home = new Home({
            view: view
        })
        view.ui.add(home,"top-left")

        //BASEMAP WIDGET
        basemap = new BasemapGallery({
            view: view,
            container: "basemapGallery"
        })
        

        function basefunc(){
            if(document.getElementById("basemapGallery").style.display == "none"){
            document.getElementById("basemapGallery").style.display = "block";
            document.getElementById("layerList").style.display = "none";
            document.getElementById("legend").style.display = "none";
            document.getElementById("printDiv").style.display = "none"
            }   else{
            document.getElementById("basemapGallery").style.display = "none" 
            }
        }

        //LAYERLIST WIDGET
        layers = new LayerList({
            view: view,
            container: "layerList"
        })

        function layerfunc(){
            if(document.getElementById("layerList").style.display == "none"){
                document.getElementById("layerList").style.display = "block";
                document.getElementById("basemapGallery").style.display = "none";
                document.getElementById("legend").style.display = "none";
                document.getElementById("printDiv").style.display = "none"
                }   else{
                document.getElementById("layerList").style.display = "none" 
                }
        }

        //LEGEND WIDGET
        legend = new Legend({
            view: view,
            container: "legend"
        })

        function legendfunc(){
            if(document.getElementById("legend").style.display == "none"){
                document.getElementById("legend").style.display = "block";
                document.getElementById("basemapGallery").style.display = "none";
                document.getElementById("layerList").style.display = "none";
                document.getElementById("printDiv").style.display = "none"
                }   else{
                document.getElementById("legend").style.display = "none" 
                }
        }

        //PRINT WIDGET
        
        $("#print").on("click", function(){
            printfunc();
        })

        

        view.when(() => {
            print = new Print({
            view: view,
            // specify your own print service
            printServiceUrl:
            "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
            container: "printDiv"
            });
            
           
            });
            
            
            
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


            force.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){   

                for (var i = 0; i< res.features.length; i++){
                    
                        
                            for(var j =0; j< dataArray.length; j++){
                                data[i]= {
                                    strength: dataArray[j].strength,
                                    duration: dataArray[i].duration,
                                    objectid: res.features[i].attributes.objectid,
                                    district: res.features[i].attributes.district,
                                    ps: res.features[i].attributes.ps_or_camp,
                                    
                                    
                                    
                                };
                            }
                        
                }
                barChart();
                barChart1();
                barChart2();
                
                bubbleChart();
                bubbleChart1();
                bubbleChart2();
                
                doughnutChart();
                doughnutChart1();
                doughnutChart2();
                
                sankey();
            })



//         //------------TABLE FUNCTION STARTS----------------
        

        function getTable(wherecondition){
            var html = "";
            html += "<table id='table' class='table table-boardred'>"

       
            force.queryFeatures({
                where: wherecondition,
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){
                for (var i = 0; i< res.features.length; i++){

                    for(var j=0; j< dataArray.length; j++){
                        data[i] = {
                            strength: dataArray[j].strength,
                            duration: dataArray[j].duration,
                            objectid : res.features[i].attributes.objectid,
                            district:res.features[i].attributes.district,
                            ps: res.features[i].attributes.ps_or_camp,
                            

                            
                            
                        };
                    
                    }


                }

                    console.log("array", data)
                    console.log("Count Data", count_data)

    
                    force1.queryFeatures({
                        where: "1=1",
                        outFields: ["*"],
                        returnGeometry: true,
                        orderByFields: ["objectid"]
                        }).then(function (results) {
            
                        var f = results.features
                                 
                        html += '<tr>'
                        html += '<th rowspan=2>' + 'Sl. No' + '</th>'
                        html += '<th rowspan=2>' + 'District' + '</th>'
                        html += '<th rowspan=2>' + 'Police Station' + '</th>'
                        html += '<th rowspan=2>' + 'Strength of Force' + '</th>'
                        html += '<th rowspan=2>' + 'Nature of Force Movement' + '</th>'
                        html += '<th rowspan=2>' + 'Duration of OPS' + '</th>'
                        html += '<th rowspan=2>' + 'Name of Party Commander' + '</th>'
                        html += '<th rowspan=2>' + 'Contact Number of Party Commander' + '</th>'
                        html += '<th rowspan=2>' + 'Any Other Significant Point' + '</th>'
                        html += '<th rowspan=2>' + 'Attachments' + '</th>'

                        
                        html += '</tr>'

                        html += '<tr>'
                        html += '</tr>'
                        
                        
                                   
                        for (x in f){
                            // if (f[x].attributes.objectid == data[x].objectid){
                                
                                // console.log(f[x].attributes)
            
                               html += '<tr id="content">';
                               
                               html += '<td class = "data text-center">' +f[x].attributes.sl_no + '</td>'
                               html +=  '<td class = "data text-center">' + data[x].district + '</td>'
                               html +=  '<td class = "data text-center">' + data[x].ps + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.strength_of_force + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.force_movement + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.duration + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.name_comdr + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.detail_comdr + '</td>'
                               html += '<td class = "data text-center">' + f[x].attributes.remarks + '</td>'
                               html += '<td class = "data text-center"><a href="#popup1"><button class="btn btn-sm btn-danger actionBtn" type="button" id ="' + f[x].attributes.objectid + '">View</button></a></td>';
            
                               html += '</tr>';
                            // } 
                           
                        }
                           
                           
                           $("#form5").append(html);
                        
            
                           $("#form5 td").each(function() {
                            if (this.textContent === "null") this.textContent = "-"
                          })
                        })
    })
    
        
        }
        
        

//         //-------------TABLE FUNCTION ENDS----------------

   
         

// //         //---------------BAR CHART FUNCTION STARTS-----------------

function barChart(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    bar.length = 0;
    district.length = 0;

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].strength, ps: data[i].ps})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].strength;
                }
            }
        }
    }

    console.log("bar data", bar)

        // create a chart
        var barchart = anychart.bar();

            
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")


        // initiate drawing the chart
        barchart.draw();

    
  
    

    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart").empty();
        $("barChart").prepend("<div id='barChart'></div>")
        
        changeBarfunc();
    });

    function changeBarfunc(){

        var bar = [];
        var district = [];
    
        bar.length = 0;
        district.length = 0;
    
        for(var i=0; i<data.length;i++){
            if(district.includes(data[i].district) == false){
                district.push(data[i].district)
                bar.push({x: data[i].district, value: data[i].strength, ps: data[i].ps})
            } else {
                for(var j=0; j<bar.length;j++){
                    if(bar[j].x == data[i].district){
                        bar[j].value = bar[j].value + data[i].strength;
                    }
                }
            }
        }
        
        
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var bar1 = []
                bar1.length = 0;
    
                bar1[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                }

                var b = []
                for(x in bar1){
                    b.push(bar1[x])
                }

                console.log("b", b)
                // create a chart
                var barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
    
                // set the container id
                barchart.container("barChart");

                var series = barchart.bar(b)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart");
                barchart.legend(true)
                
                
    
                // initiate drawing the chart
                barchart.draw();

                // function saveAsPng(){
                //     barchart1.saveAsPng(400,300);
                // }
            
                // $("#download1").on('click', function(){
                //     saveAsPng({
                //         "filename": "BarChart-Analysis of forces"
                //     })
                // })
                    
            }else if(select.value == "All"){
                // create a chart
                var barchart = anychart.bar();

                // create a bar series and set the data
                // barchart.bar(bar);
                

            

                var series = barchart.bar(bar)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart");

                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
                barchart.legend(true)


                // initiate drawing the chart
                barchart.draw();
                break;
            }
            

        }
    }

    $("#refresh").click(function(){

        $("#barChart").empty();

        // create a chart
        barchart = anychart.bar();

        // create a bar series and set the data
        // barchart.bar(bar_data);
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")

        

        // initiate drawing the chart
        barchart.draw();

    })

    function saveAsPng(){
        barchart.saveAsPng({
            "height":500,
            "width":500,
            "filename": "Bar Chart - force VI Proforma"
        });
    }

    $("#download1").on('click', function(){
        saveAsPng()
    })

}

function barChart1(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    bar.length = 0;
    district.length = 0;

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].duration, ps: data[i].ps})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].duration;
                }
            }
        }
    }

    console.log("bar data", bar)

        // create a chart
        var barchart = anychart.bar();

            
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart1");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")


        // initiate drawing the chart
        barchart.draw();

    
  
    
    
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart1").empty();
        $("barChart1").prepend("<div id='barChart1'></div>")
        
        changeBar()
    })

    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var bar1 = []
                bar1.length = 0;
    
                bar1[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    month: bar[x].month
    
                }

                var b = []
                for(x in bar1){
                    b.push(bar1[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
    
                // set the container id
                barchart.container("barChart");

                var series = barchart.bar(b)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart1");
                barchart.legend(true)
                
                
    
                // initiate drawing the chart
                barchart.draw();

                // function saveAsPng(){
                //     barchart1.saveAsPng(400,300);
                // }
            
                // $("#download1").on('click', function(){
                //     saveAsPng({
                //         "filename": "BarChart-Analysis of forces"
                //     })
                // })
                    
            }else if(select.value == "All"){
                // create a chart
                barchart = anychart.bar();

                // create a bar series and set the data
                // barchart.bar(bar);
                

            

                var series = barchart.bar(bar)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart1");

                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
                barchart.legend(true)


                // initiate drawing the chart
                barchart.draw();
                break;
            }
            

        }
    }

    $("#refresh").click(function(){

        $("#barChart1").empty();

        // create a chart
        barchart = anychart.bar();

        // create a bar series and set the data
        // barchart.bar(bar_data);
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart1");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")

        

        // initiate drawing the chart
        barchart.draw();

    })

    function saveAsPng(){
        barchart.saveAsPng({
            "height":500,
            "width":500,
            "filename": "Bar Chart - force VI Proforma"
        });
    }

    $("#download1").on('click', function(){
        saveAsPng()
    })

}

function barChart2(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    bar.length = 0;
    district.length = 0;

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].strength, ps: data[i].ps})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].strength;
                }
            }
        }
    }

    console.log("bar data", bar)

        // create a chart
        barchart = anychart.bar();

            
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart2");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")


        // initiate drawing the chart
        barchart.draw();

    
  
    
    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var bar = []
                bar.length = 0;
    
                bar[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    month: bar[x].month
    
                }

                var b = []
                for(x in bar){
                    b.push(bar[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
    
                // set the container id
                barchart.container("barChart");

                var series = barchart.bar(b)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart2");
                barchart.legend(true)
                
                
    
                // initiate drawing the chart
                barchart.draw();

                // function saveAsPng(){
                //     barchart1.saveAsPng(400,300);
                // }
            
                // $("#download1").on('click', function(){
                //     saveAsPng({
                //         "filename": "BarChart-Analysis of forces"
                //     })
                // })
                    
            }else if(select.value == "All"){
                // create a chart
                barchart = anychart.bar();

                // create a bar series and set the data
                // barchart.bar(bar);
                

            

                var series = barchart.bar(bar)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart2");

                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
                barchart.legend(true)


                // initiate drawing the chart
                barchart.draw();
                break;
            }
            

        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart2").empty();
        $("barChart2").prepend("<div id='barChart2'></div>")
        
        changeBar()
    })

    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var bar1 = []
                bar1.length = 0;
    
                bar1[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    month: bar[x].month
    
                }

                var b = []
                for(x in bar1){
                    b.push(bar1[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
    
                // set the container id
                barchart.container("barChart");

                var series = barchart.bar(b)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart2");
                barchart.legend(true)
                
                
    
                // initiate drawing the chart
                barchart.draw();

                // function saveAsPng(){
                //     barchart1.saveAsPng(400,300);
                // }
            
                // $("#download1").on('click', function(){
                //     saveAsPng({
                //         "filename": "BarChart-Analysis of forces"
                //     })
                // })
                    
            }else if(select.value == "All"){
                // create a chart
                barchart = anychart.bar();

                // create a bar series and set the data
                // barchart.bar(bar);
                

            

                var series = barchart.bar(bar)
                series.id("Districts")

                series = barchart.getSeries("Districts")

                var tooltip = barchart.getSeries("Districts").tooltip();

                tooltip.format("Type of Detoner: {%type}");

                series.name("Duration of EOF")

                // set the container id
                barchart.container("barChart2");

                barchart.xAxis().title("District");
                barchart.yAxis().title("Duration of EOF");
                barchart.legend(true)


                // initiate drawing the chart
                barchart.draw();
                break;
            }
            

        }
    }

    $("#refresh").click(function(){

        $("#barChart2").empty();

        // create a chart
        barchart = anychart.bar();

        // create a bar series and set the data
        // barchart.bar(bar_data);
        barchart.xAxis().title("District");
        barchart.yAxis().title("Number of Detoners");

        // set the container id
        barchart.container("barChart2");

        barchart.legend(true)

        var series = barchart.bar(bar)
        series.id("Districts")

        series = barchart.getSeries("Districts")

        series.name("Districts")

        

        // initiate drawing the chart
        barchart.draw();

    })

    function saveAsPng(){
        barchart.saveAsPng({
            "height":500,
            "width":500,
            "filename": "Bar Chart - force VI Proforma"
        });
    }

    $("#download1").on('click', function(){
        saveAsPng()
    })

}



// //----------------------BUBBLE CHART--------------------------

function bubbleChart(){
    anychart.exports.server("http://localhost:2000");
    
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].strength, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].strength;
                }
            }
        }
    }
    console.log("SD",bubble_data)
    
    
    // add a marker seris
    // bubblechart.bubble(bubble_data);
    
    
    
   
    // set axes titles 
    bubblechart.xAxis().title("District");
    bubblechart.yAxis().title("Number of Detoners");
    
    // draw
    bubblechart.container("bubbleChart");

    bubblechart.legend(true)

    var series = bubblechart.bubble(bubble_data)
    series.id("Districts")

    series = bubblechart.getSeries("Districts")

    var tooltip = bubblechart.getSeries("Districts").tooltip();

    tooltip.format("Type of Detoner: {%type}");

    series.name("Districts")

    

    bubblechart.draw();

    // chart.exports.filename('bubbleChart');

    function changeBubble(){
        anychart.exports.server("http://localhost:2000");

        
        for(x in bubble_data){
            var bubble = []
                bubble.length = 0;
            if(select.value == bubble_data[x].x || select2.value == bubble_data[x].ps){
                bubblechart = anychart.cartesian();
                

                bubble[x] = {
                    x: bubble_data[x].x,
                    value: bubble_data[x].value,
                    size: bubble_data[x].size,
                    month: bubble_data[x].month
                }
                
            
                
                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                console.log("V", v)
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Search")
            
                series = bubblechart.getSeries("Search")
            
                series.name("Duration of Search")
    
                // initiate drawing the chart
                bubblechart.draw();

            }else if (select.value == "All"){
                bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    
                     // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Duration of Search");
                    
                    // draw
                    bubblechart.container("bubbleChart");

                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    series.name("Duration of Search")

                    

                    bubblechart.draw();
                    break;
            }
            
        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#bubbleChart").empty();
        $("bubbleChart").prepend("<div id='bubbleChart'></div>")
        
        changeBubble()
    })

    $("#refresh").click(function(){

        $("#bubbleChart").empty();
        bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    var tooltip = bubblechart.getSeries("Districts").tooltip();

                    tooltip.format("Type of Detoner: {%type}");

                    series.name("Districts")
                                       
                
                    // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Number of Detoners");
                    
                    // draw
                    bubblechart.container("bubbleChart");
                   
                    bubblechart.draw();
    })

    function saveAsPng(){
        bubblechart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Bubble Chart - force VI Proforma"
        });
    }

    $("#download2").on('click', function(){
        saveAsPng()
    })
           
}

function bubbleChart1(){
    anychart.exports.server("http://localhost:2000");
    
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].duration, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].duration;
                }
            }
        }
    }
    console.log("SD",bubble_data)
    
    
    // add a marker seris
    // bubblechart.bubble(bubble_data);
    
    
    
   
    // set axes titles 
    bubblechart.xAxis().title("District");
    bubblechart.yAxis().title("Number of Detoners");
    
    // draw
    bubblechart.container("bubbleChart1");

    bubblechart.legend(true)

    var series = bubblechart.bubble(bubble_data)
    series.id("Districts")

    series = bubblechart.getSeries("Districts")

    var tooltip = bubblechart.getSeries("Districts").tooltip();

    tooltip.format("Type of Detoner: {%type}");

    series.name("Districts")

    

    bubblechart.draw();

    // chart.exports.filename('bubbleChart');

    function changeBubble(){
        anychart.exports.server("http://localhost:2000");

        
        for(x in bubble_data){
            var bubble = []
                bubble.length = 0;
            if(select.value == bubble_data[x].x || select2.value == bubble_data[x].ps){
                bubblechart = anychart.cartesian();
                

                bubble[x] = {
                    x: bubble_data[x].x,
                    value: bubble_data[x].value,
                    size: bubble_data[x].size,
                    month: bubble_data[x].month
                }
                
            
                
                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                console.log("V", v)
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart1");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Search")
            
                series = bubblechart.getSeries("Search")
            
                series.name("Duration of Search")
    
                // initiate drawing the chart
                bubblechart.draw();

            }else if (select.value == "All"){
                bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    
                     // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Duration of Search");
                    
                    // draw
                    bubblechart.container("bubbleChart1");

                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    series.name("Duration of Search")

                    

                    bubblechart.draw();
                    break;
            }
            
        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#bubbleChart1").empty();
        $("bubbleChart1").prepend("<div id='bubbleChart1'></div>")
        
        changeBubble()
    })

    $("#refresh").click(function(){

        $("#bubbleChart1").empty();
        bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    var tooltip = bubblechart.getSeries("Districts").tooltip();

                    tooltip.format("Type of Detoner: {%type}");

                    series.name("Districts")
                                       
                
                    // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Number of Detoners");
                    
                    // draw
                    bubblechart.container("bubbleChart1");
                   
                    bubblechart.draw();
    })

    function saveAsPng(){
        bubblechart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Bubble Chart - force VI Proforma"
        });
    }

    $("#download2").on('click', function(){
        saveAsPng()
    })
           
}

function bubbleChart2(){
    anychart.exports.server("http://localhost:2000");
    
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].strength, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].strength;
                }
            }
        }
    }
    console.log("SD",bubble_data)
    
    
    // add a marker seris
    // bubblechart.bubble(bubble_data);
    
    
    
   
    // set axes titles 
    bubblechart.xAxis().title("District");
    bubblechart.yAxis().title("Number of Detoners");
    
    // draw
    bubblechart.container("bubbleChart2");

    bubblechart.legend(true)

    var series = bubblechart.bubble(bubble_data)
    series.id("Districts")

    series = bubblechart.getSeries("Districts")

    var tooltip = bubblechart.getSeries("Districts").tooltip();

    tooltip.format("Type of Detoner: {%type}");

    series.name("Districts")

    

    bubblechart.draw();

    // chart.exports.filename('bubbleChart');

    function changeBubble(){
        anychart.exports.server("http://localhost:2000");

        
        for(x in bubble_data){
            var bubble = []
                bubble.length = 0;
            if(select.value == bubble_data[x].x || select2.value == bubble_data[x].ps){
                bubblechart = anychart.cartesian();
                

                bubble[x] = {
                    x: bubble_data[x].x,
                    value: bubble_data[x].value,
                    size: bubble_data[x].size,
                    month: bubble_data[x].month
                }
                
            
                
                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                console.log("V", v)
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart2");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Search")
            
                series = bubblechart.getSeries("Search")
            
                series.name("Duration of Search")
    
                // initiate drawing the chart
                bubblechart.draw();

            }else if (select.value == "All"){
                bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    
                     // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Duration of Search");
                    
                    // draw
                    bubblechart.container("bubbleChart2");

                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    series.name("Duration of Search")

                    

                    bubblechart.draw();
                    break;
            }
            
        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#bubbleChart2").empty();
        $("bubbleChart2").prepend("<div id='bubbleChart2'></div>")
        
        changeBubble()
    })

    $("#refresh").click(function(){

        $("#bubbleChart2").empty();
        bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    var tooltip = bubblechart.getSeries("Districts").tooltip();

                    tooltip.format("Type of Detoner: {%type}");

                    series.name("Districts")
                                       
                
                    // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Number of Detoners");
                    
                    // draw
                    bubblechart.container("bubbleChart2");
                   
                    bubblechart.draw();
    })

    function saveAsPng(){
        bubblechart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Bubble Chart - force VI Proforma"
        });
    }

    $("#download2").on('click', function(){
        saveAsPng()
    })
           
}

// //-------------DOUGHNUT CHART--------------------

function doughnutChart(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].strength, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].strength;
                }
            }
        }
    }

    console.log("DD",doughnut_data)

  // create a pie chart and set the data
  doughnutchart = anychart.pie(doughnut_data);
  doughnutchart.labels().format("{%type}")
  /* set the inner radius
  (to turn the pie chart into a doughnut chart)*/
  doughnutchart.innerRadius("40%");
  
  // set the container id
  doughnutchart.container("doughnutChart");
  
  // initiate drawing the chart
  doughnutchart.draw();

//legend
doughnutchart.legend().position('top')
    




  
  function changeDoughnut(){
        
        // $("#doughnutChart").prepend('<div id="doughnutChart"></div>')

        for(x in doughnut_data){
            // $("#doughnutChart").innerHTML="";
            if(select.value==doughnut_data[x].x || select2.value==doughnut_data[x].ps){
                var doughnut = []
                doughnut.length=0;
            
                doughnut[x]={
                    x: doughnut_data[x].x,
                    value: doughnut_data[x].value,
                    type: doughnut_data[x].type,
                    ps: doughnut_data[x].ps,
                    month: doughnut_data[x].month
                }

                console.log("datadough", doughnut)

                var d = []
                for(x in doughnut){
                    d.push(doughnut[x])
                }
               
                
                    // create a pie chart and set the data
                    doughnutchart = anychart.pie(d);
                    doughnutchart.labels().format("{%type}")
                    /* set the inner radius
                    (to turn the pie chart into a doughnut chart)*/
                    doughnutchart.innerRadius("40%");

                                       

                    // set the container id
                    doughnutchart.container("doughnutChart");

                    //legend
                    doughnutchart.legend().position('top')


                                   

                    // initiate drawing the chart
                    doughnutchart.draw();



                    
                } else if (select.value == "All"){
                      
            // create a pie chart and set the data
            doughnutchart = anychart.pie(doughnut_data);
            doughnutchart.labels().format("{%type}")
            /* set the inner radius
            (to turn the pie chart into a doughnut chart)*/
            doughnutchart.innerRadius("40%");
            
            // set the container id
            doughnutchart.container("doughnutChart");

            //legend
            doughnutchart.legend().position('top')


    
            
            // initiate drawing the chart
            doughnutchart.draw();
            break;
                }
                
            
        }
  }
  $("#selectDistrict,#selectPs").on('change', function(){
      $("#doughnutChart").empty();
      $("doughnutChart").prepend("<div id='doughnutChart'></div>")
      
      changeDoughnut()
  })

  $("#refresh").click(function(){

    $("#doughnutChart").empty();
    // create a pie chart and set the data
    doughnutchart = anychart.pie(doughnut_data);
    doughnutchart.labels().format("{%type}")
    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    doughnutchart.innerRadius("40%");
    
    // set the container id
    doughnutchart.container("doughnutChart");
    
    // initiate drawing the chart
    doughnutchart.draw();

    //legend
    doughnutchart.legend().position('top')
  })

  function saveAsPng(){
    doughnutchart.saveAsPng({
        "height":500,
        "width": 500,
        "filename": "Doughnut Chart - force VI Proforma"
    });
}

$("#download3").on('click', function(){
    saveAsPng()
})
}

function doughnutChart1(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].duration, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].duration;
                }
            }
        }
    }

    console.log("DD",doughnut_data)

  // create a pie chart and set the data
  doughnutchart = anychart.pie(doughnut_data);
  doughnutchart.labels().format("{%type}")
  /* set the inner radius
  (to turn the pie chart into a doughnut chart)*/
  doughnutchart.innerRadius("40%");
  
  // set the container id
  doughnutchart.container("doughnutChart1");
  
  // initiate drawing the chart
  doughnutchart.draw();

//legend
doughnutchart.legend().position('top')
    




  
  function changeDoughnut(){
        
        // $("#doughnutChart").prepend('<div id="doughnutChart"></div>')

        for(x in doughnut_data){
            // $("#doughnutChart").innerHTML="";
            if(select.value==doughnut_data[x].x || select2.value==doughnut_data[x].ps){
                var doughnut = []
                doughnut.length=0;
            
                doughnut[x]={
                    x: doughnut_data[x].x,
                    value: doughnut_data[x].value,
                    type: doughnut_data[x].type,
                    ps: doughnut_data[x].ps,
                    month: doughnut_data[x].month
                }

                console.log("datadough", doughnut)

                var d = []
                for(x in doughnut){
                    d.push(doughnut[x])
                }
               
                
                    // create a pie chart and set the data
                    doughnutchart = anychart.pie(d);
                    doughnutchart.labels().format("{%type}")
                    /* set the inner radius
                    (to turn the pie chart into a doughnut chart)*/
                    doughnutchart.innerRadius("40%");

                                       

                    // set the container id
                    doughnutchart.container("doughnutChart1");

                    //legend
                    doughnutchart.legend().position('top')


                                   

                    // initiate drawing the chart
                    doughnutchart.draw();



                    
                } else if (select.value == "All"){
                      
            // create a pie chart and set the data
            doughnutchart = anychart.pie(doughnut_data);
            doughnutchart.labels().format("{%type}")
            /* set the inner radius
            (to turn the pie chart into a doughnut chart)*/
            doughnutchart.innerRadius("40%");
            
            // set the container id
            doughnutchart.container("doughnutChart1");

            //legend
            doughnutchart.legend().position('top')


    
            
            // initiate drawing the chart
            doughnutchart.draw();
            break;
                }
                
            
        }
  }
  $("#selectDistrict,#selectPs").on('change', function(){
      $("#doughnutChart1").empty();
      $("doughnutChart1").prepend("<div id='doughnutChart1'></div>")
      
      changeDoughnut()
  })

  $("#refresh").click(function(){

    $("#doughnutChart1").empty();
    // create a pie chart and set the data
    doughnutchart = anychart.pie(doughnut_data);
    doughnutchart.labels().format("{%type}")
    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    doughnutchart.innerRadius("40%");
    
    // set the container id
    doughnutchart.container("doughnutChart1");
    
    // initiate drawing the chart
    doughnutchart.draw();

    //legend
    doughnutchart.legend().position('top')
  })

  function saveAsPng(){
    doughnutchart.saveAsPng({
        "height":500,
        "width": 500,
        "filename": "Doughnut Chart - force VI Proforma"
    });
}

$("#download3").on('click', function(){
    saveAsPng()
})
}

function doughnutChart2(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].strength, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].strength;
                }
            }
        }
    }

    console.log("DD",doughnut_data)

  // create a pie chart and set the data
  doughnutchart = anychart.pie(doughnut_data);
  doughnutchart.labels().format("{%type}")
  /* set the inner radius
  (to turn the pie chart into a doughnut chart)*/
  doughnutchart.innerRadius("40%");
  
  // set the container id
  doughnutchart.container("doughnutChart2");
  
  // initiate drawing the chart
  doughnutchart.draw();

//legend
doughnutchart.legend().position('top')
    




  
  function changeDoughnut(){
        
        // $("#doughnutChart").prepend('<div id="doughnutChart"></div>')

        for(x in doughnut_data){
            // $("#doughnutChart").innerHTML="";
            if(select.value==doughnut_data[x].x || select2.value==doughnut_data[x].ps){
                var doughnut = []
                doughnut.length=0;
            
                doughnut[x]={
                    x: doughnut_data[x].x,
                    value: doughnut_data[x].value,
                    type: doughnut_data[x].type,
                    ps: doughnut_data[x].ps,
                   
                }

                console.log("datadough", doughnut)

                var d = []
                for(x in doughnut){
                    d.push(doughnut[x])
                }
               
                
                    // create a pie chart and set the data
                    doughnutchart = anychart.pie(d);
                    doughnutchart.labels().format("{%type}")
                    /* set the inner radius
                    (to turn the pie chart into a doughnut chart)*/
                    doughnutchart.innerRadius("40%");

                                       

                    // set the container id
                    doughnutchart.container("doughnutChart2");

                    //legend
                    doughnutchart.legend().position('top')


                                   

                    // initiate drawing the chart
                    doughnutchart.draw();



                    
                } else if (select.value == "All"){
                      
            // create a pie chart and set the data
            doughnutchart = anychart.pie(doughnut_data);
            doughnutchart.labels().format("{%type}")
            /* set the inner radius
            (to turn the pie chart into a doughnut chart)*/
            doughnutchart.innerRadius("40%");
            
            // set the container id
            doughnutchart.container("doughnutChart2");

            //legend
            doughnutchart.legend().position('top')


    
            
            // initiate drawing the chart
            doughnutchart.draw();
            break;
            }
                
            
        }
  }
  $("#selectDistrict,#selectPs").on('change', function(){
      $("#doughnutChart2").empty();
      $("doughnutChart2").prepend("<div id='doughnutChart2'></div>")
      
      changeDoughnut()
  })

  $("#refresh").click(function(){

    $("#doughnutChart1").empty();
    // create a pie chart and set the data
    doughnutchart = anychart.pie(doughnut_data);
    doughnutchart.labels().format("{%type}")
    /* set the inner radius
    (to turn the pie chart into a doughnut chart)*/
    doughnutchart.innerRadius("40%");
    
    // set the container id
    doughnutchart.container("doughnutChart1");
    
    // initiate drawing the chart
    doughnutchart.draw();

    //legend
    doughnutchart.legend().position('top')
  })

  function saveAsPng(){
    doughnutchart.saveAsPng({
        "height":500,
        "width": 500,
        "filename": "Doughnut Chart - force VI Proforma"
    });
}

$("#download3").on('click', function(){
    saveAsPng()
})
}



//----------------------SANKEY CHART--------------------------
function sankey(){
    anychart.exports.server("http://localhost:2000");
    var sankey_data = []
    var sankeychart
    force1.queryFeatures({
        where: "1=1",
        orderByFields: ["objectid"],
        outFields: ["*"]
    }).then(function (res){

    for(x in res.features){
        sankey_data[x]={
            from: data[x].district,
            to: res.features[x].attributes.force_movement,
            weight: res.features[x].attributes.duration,
            ps: data[x].ps
        }
    }

        console.log("Sankey Data",sankey_data)

        sankeychart = anychart.sankey(sankey_data)
        sankeychart.container("sankeyChart")

        sankeychart.nodeWidth("40%");
        sankeychart.height('100%')  
        

        sankeychart.draw();

        
    })  

    function changeSankey(){
    for (x in sankey_data){
        if(select.value == sankey_data[x].from || select2.value == sankey_data[x].ps){
            
            var sank = []
            sank.length = 0;

            sank[x] = {
                from: sankey_data[x].from,
                to: sankey_data[x].to,
                weight: sankey_data[x].weight,
                ps: sankey_data[x].ps,
                month: sankey_data[x].month
            }
            console.log("sankey", sank)
            // create a chart and set the data
            sankeychart = anychart.sankey(sank);
            
            // set the width of nodes
            // chart.nodeWidth("30%");
            sankeychart.nodeWidth("40%");
            sankeychart.height('100%')  
            // set the container id
            sankeychart.container("sankeyChart");

            
            // initiate drawing the chart
            sankeychart.draw();


            
        }else if(select.value=="All"){
            // create a chart and set the data
            sankeychart = anychart.sankey(sankey_data);
            
            // set the width of nodes
            // chart.nodeWidth("30%");
            sankeychart.nodeWidth("40%");
            sankeychart.height('100%')  
            // set the container id
            sankeychart.container("sankeyChart");

   
            
            // initiate drawing the chart
            sankeychart.draw();
            break;
        }
    }

    
        
    }

    $("#selectDistrict,#selectPs").on('change', function(){
        $("#sankeyChart").empty();
        $("sankeyChart").prepend("<div id='sankeyChart'></div>")

        changeSankey();
    })

    function saveAsPng(){
        sankeychart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Sankey Chart - force VI Proforma"
        });
    }

    $("#download4").on('click', function(){
        saveAsPng()
    })
}



// //      // -----------ATTACHMENTS WIDGET----------------------
            
                // document.getElementById('attachments').style.display='none'
                $("#form5").on('click', 'button', function (oid){
                    document.getElementById('popup').style.display=='block'

                    var id = oid.currentTarget.id
                    // console.log(id)

                    force.queryObjectIds().then (function (objectid){
                        let attachmentQuery = {
                            where: 'objectid=' + id,
                            keywords: "force_image",
                            // attachmentsWhere: "district = 'Durg'" ,
                            objectIds: objectid,                 
                            attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif"]
                      
                          };

                          // console.group("attachment for", objectId);
                          var att = document.getElementById("attachments");
                          att.innerHTML = "" 
    
                          force.queryAttachments(attachmentQuery).then(function (attachments) {
                                attachmentQuery.objectIds.forEach(function (objectId) {
                                if (attachments[objectId]) {
                                   
                                // console.group("attachment for", objectId);
                                var att = document.getElementById("attachments");
                                att.innerHTML = "" 
                                    let attachment = attachments[objectId];
                                    console.log("OID",attachment)
                          
                                    
                                        attachment.forEach(function (item) {
                                            const image = document.createElement("img");
                                              image.src = item.url;
                                              image.className = "queryImg";
                                             
                                              
                                              document.getElementById("attachments").appendChild(image);
                                              
                                
                                          });
                                  }
                            })
                            
                            
                          })

                                 
                    }).then (function (attachmentID){
                        if (attachmentID === undefined) {
                            const alert = document.createElement("p");
                            alert.innerHTML =
                              "No attachments found for the selected location";
                            document.getElementById("attachments").appendChild(alert);
                          }
                    })
                })
                
                    
 
                
            

            
            $("#xls4").on("click", function () {
                Excelonclick();
        
            })
        
            function Excelonclick() {
                var textToSave = document.getElementById("form5").outerHTML;
                var textToSaveAsBlob = new Blob([textToSave], { type: "text/html" });
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = "force_Data.xls";
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs; downloadLink.innerHTML = "Download File"; downloadLink.href = textToSaveAsURL;
                downloadLink.onclick = destroyClickedElement;
                function destroyClickedElement(event) {
                    document.body.removeChild(event.target);
                }
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }
  
        $("#refresh").on("click", function (){

            //map extent
            view.extent = district.fullExtent
            view.graphics.removeAll();

            //table
            $('#form5 #content').show()

            //dropdown

            $("#selectDistrict").empty();

            $("#selectMonth").empty();

            $("#selectDistrict").append("<option>"+"All"+"</option>");
                          
                            $("#selectMonth").append("<option>"+"All"+"</option>")

            force.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                returnGeometry: false
            }).then(function(results) {
                for(const res of results.features) {
    
                var datetime1 = res.attributes.date;
                var selectMonths_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
                var date1 = new Date(datetime1*1000);
                date = selectMonths_arr[date1.getMonth()];
    
                console.log("Date", date);
    
                sel.appendChild(new Option(date, date));
                removeduplicate();

               select.appendChild(new Option (res.attributes.district, res.attributes.district))
               remove();
    
                
                }
            });

            refreshIndicators();

            refreshCharts();
            

            //---------------------------CHARTS----------------------
            
        })

        function refreshCharts(){
            $("#barChart").empty();
            $("#bubbleChart").empty();
            $("#doughnutChart").empty();
            $("#sankeyChart").empty();

            anychart.exports.server("http://localhost:2000");
            var bar = []
            force1.queryFeatures({
                where: "1=1",
                orderByFields: ["objectid"],
                outFields: ["*"]
            }).then(function (res){
        
            for(x in res.features){
                bar[x]={
                    x: data[x].district,
                    value: res.features[x].attributes.strength_of_force
                }
            }
            
        
            
            console.log("Bar Data",bar)
            
            var barchart = anychart.bar()
            barchart.container("barChart")
        
            var series = barchart.bar(bar)
            series.id("Strength")
            series.name("Strength of Force")
        
            barchart.draw();
        
            
        })    

        function saveAsPng(){
            barchart.saveAsPng({
                "height":500,
                "width":500,
                "filename": "Bar Chart - Daily Force Movement"
            });
        }
    
        $("#download1").on('click', function(){
            saveAsPng()
        })


        anychart.exports.server("http://localhost:2000");
        var bubble_data = []
    force1.queryFeatures({
        where: "1=1",
        orderByFields: ["objectid"],
        outFields: ["*"]
    }).then(function (res){

    for(x in res.features){
        bubble_data[x]={
            x: data[x].district,
            value: res.features[x].attributes.duration,
            size: 15
        }
    }

    console.log("Bubble Data",bubble_data)

    var bubblechart = anychart.cartesian()
    bubblechart.container("bubbleChart")

    var series = bubblechart.bubble(bubble_data)
    series.id("Duration")
    series.name("Duration of Force")

    bubblechart.draw();

    
})  

        function saveAsPng(){
            bubblechart.saveAsPng({
                "height":500,
                "width": 500,
                "filename": "Bubble Chart - Daily Force Movement"
            });
        }
    
        $("#download2").on('click', function(){
            saveAsPng()
        })

        anychart.exports.server("http://localhost:2000");
        var doughnut_data = []
    force1.queryFeatures({
        where: "1=1",
        orderByFields: ["objectid"],
        outFields: ["*"]
    }).then(function (res){

    for(x in res.features){
        doughnut_data[x]={
            x: data[x].district,
            value: res.features[x].attributes.strength_of_force,
            size: 15
        }
    }

    console.log("Doughnut Data",doughnut_data)

    doughnutchart = anychart.pie(doughnut_data);
    doughnutchart.innerRadius("40%");

    doughnutchart.container("doughnutChart")

    doughnutchart.legend().position('top')

    doughnutchart.draw();

    
})  

    function saveAsPng(){
        doughnutchart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Doughnut Chart - Daily Force Movement"
        });
    }
    
    $("#download3").on('click', function(){
        saveAsPng()
    })
             
    anychart.exports.server("http://localhost:2000");
    var sankey_data = []
    
    force1.queryFeatures({
        where: "1=1",
        orderByFields: ["objectid"],
        outFields: ["*"]
    }).then(function (res){

    for(x in res.features){
        sankey_data[x]={
            from: data[x].district,
            to: res.features[x].attributes.force_movement,
            weight: res.features[x].attributes.duration,
        }
    }

        console.log("Sankey Data",sankey_data)

        sankeychart = anychart.sankey(sankey_data)
        sankeychart.container("sankeyChart")

        sankeychart.nodeWidth("40%");
        sankeychart.height('100%')  
        

        sankeychart.draw();

        
    })  


    
    // initiate drawing the chart
    sankeychart.draw();
    function saveAsPng(){
        sankeychart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Sankey Chart - Daily Force Movement"
        });
    }

    $("#download4").on('click', function(){
        saveAsPng()
    })


        

        }

        function refreshIndicators(){

            var strengthOfForce = new Query();

            strengthOfForce.outStatistics=[{
                    onStatisticField: "strength_of_force",
                    outStatisticFieldName: "strength",
                    statisticType: "sum"
                
                }]

                
                
                force1.queryFeatures(strengthOfForce).then(function (results){
                
                    results.features.forEach((element) => {
                        attr = element.attributes;
                        // console.log(attr.district_count)
                        var c = document.getElementById("strength")
                        c.innerHTML=''
                        c.append(attr.strength)
                      });
                     
                })

            
                var durationquery = new Query();

                durationquery.outStatistics=[{
                                        onStatisticField: "duration",
                                        outStatisticFieldName: "dur",
                                        statisticType: "sum"
                                    
                                    }]
                
                                                       
                                    force1.queryFeatures(durationquery).then(function (results){
                                    
                                        results.features.forEach((element) => {
                                            attr = element.attributes;
                                            // console.log(attr.district_count)
                                            var c = document.getElementById("duration")
                                            c.innerHTML=''
                                            c.append(attr.dur)
                                          });
                                         
                                    })

        }

            
    })
