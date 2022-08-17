
var map;
var view;
var state;
var district;
var ps;
var select;
var ied;
var ied1;
var date;
var date1;
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
var dateCode;
var dayCode;
var monthCode;
var yearCode;
var timeCode;
var hourCode;
var minCode;
var secCode;
var start;
var end;
var districtArray = [];
var psArray = [];
let count_data = [];
let type =[];
let number =[];
var date2=[];
var selectMonth = [];
var data = [];
var detoners = [];
var  tiffinCount = []
var pressureCount=[];
var claymoreCount = [];
var array=[];
var attachment;
let attr;
let attr1;
var mCount1;
var mCount2;

require([
        // "esri/WebMap",
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
    function(Map, MapView, FeatureLayer, Graphic, Query, Home, BasemapGallery, LayerList, Print, Legend,esriConfig, StatisticDefinition){

        
        
        document.getElementById("basemap").addEventListener("click", basefunc)
        document.getElementById("layers").addEventListener("click", layerfunc)
        document.getElementById("legend-btn").addEventListener("click", legendfunc)
        document.getElementById("print").addEventListener("click", toggleprintbutton)

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

        



        // esriConfig.portalUrl = "https://anophq.cgpolice.gov.in/portal";
     
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
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/MapServer/1",
            visible: true,
            minScale:0
        })
        map.add(district)

        //feature layer - state
        state = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/MapServer/0"
        })
        map.add(state)
        
        //police stations
        ps = new FeatureLayer({
            url: "https://eicappserver.esri.in/server/rest/services/CG_Police/CGPOLICE/FeatureServer/3"
        })

        ied = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_3fbb33eb33a14176b79d0540e2120ff7/FeatureServer/0"
        })
        // map.add(ied)

        ied1 = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_3fbb33eb33a14176b79d0540e2120ff7/FeatureServer/1"
        })
        // map.add(ied1)

        getTable("1=1");
        getDistrict("1=1")
        getPs("1=1")
        

        //----------DETONERS ARRAY-----------
        ied1.queryFeatures({
            where: "1=1",
            outFields: ["*"],
            orderByFields: ["objectid"]
        }).then(function (results){
            var i;
            for (var i=0; i< results.features.length; i++){

                detoners[i] = {
                    number: results.features[i].attributes.number_detonators,
                    type: results.features[i].attributes.detonator_type
                 };

            }
        })

        ied.queryFeatures({
            where: "1=1",
            outFields: ['*'],
            orderByFields: ['objectid'],
            returnGeometry: true
        }).then (function (res){
            for(var i=0; i<res.features.length;i++){
                
                    districtArray.push(res.features[i])
                
                
                
            }
        })
        console.log("distrcts", districtArray)

//         //----------------IED----------------
var query = new Query();

                    query.outStatistics=[{
                        onStatisticField: "weight",
                        outStatisticFieldName: "total_count",
                        statisticType: "sum"
                    
                    }]
                    
                    query.groupByFieldsForStatistics = ["ied_type"]
                    query.having = "ied_type = 'Tiffin'"
                    
                    ied.queryFeatures(query).then(function (results){
                    
                        results.features.forEach((element) => {
                            let attr = element.attributes;
                            number.push(attr.total_count);
                            type.push("Claymore")
                          });
                          
                    })
                    
                    var query1 = new Query();
                    
                    query1.outStatistics=[{
                        onStatisticField: "weight",
                        outStatisticFieldName: "total_count",
                        statisticType: "sum"
                    
                    }]
                    
                    query1.groupByFieldsForStatistics = ["ied_type"]
                    query1.having = "ied_type = 'Claymore'"
                    
                    ied.queryFeatures(query1).then(function (results){
                    
                        results.features.forEach((element) => {
                            let attr = element.attributes;
                            number.push(attr.total_count);
                            type.push("Tiffin")
                          });
                          
                    })
                    
                    var query2 = new Query();
                    
                    query2.outStatistics=[{
                        onStatisticField: "weight",
                        outStatisticFieldName: "total_count",
                        statisticType: "sum"
                    
                    }]
                    
                    query2.groupByFieldsForStatistics = ["ied_type"]
                    query2.having = "ied_type = 'Pressure'"
                    
                    ied.queryFeatures(query2).then(function (results){
                    
                        results.features.forEach((element) => {
                            let attr = element.attributes;
                            number.push(attr.total_count);
                            type.push("Pressure")
                          });
                       
                    })

console.log("number",number)
// console.log("type", type)

  
        //------DROPDOWN STARTS-----------
        
        const select = document.getElementById("selectDistrict")
        var select2 = document.getElementById('selectPs')

        function getDistrict(whereclause){
            ied.queryFeatures({
                where: whereclause,
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

        function getPs(whereclause){
            ied.queryFeatures({
                where: whereclause,
                outFields: ["*"],
                returnGeometry: false
            }).then(function(results) {
                for(const res of results.features) {

                    $("#selectPs").append("<option>"+"All"+"</option>")
    
                select2.appendChild(new Option(res.attributes.police_station, res.attributes.police_station));
                removeStn();
                change()
                }
            });
        }

        $("#refresh").click(function (){

            
            //map extent
            view.extent = district.fullExtent

            view.graphics.removeAll();

            //table
            $('#form3').empty();
            getTable("1=1")

            $("#selectDistrict").empty();
            getDistrict("1=1")

            $("#selectPs").empty();
            getPs("1=1")
            

            refreshIndicators();

                      
        })


//--------------------INDICATORS--------------------
var iedquery = new Query();

                    iedquery.outStatistics=[{
                        onStatisticField: "ied_type",
                        outStatisticFieldName: "tiffin",
                        statisticType: "count"
                    
                    }]

                    // iedquery.groupByFieldsForStatistics['ied_type']
                    iedquery.where = "ied_type = 'Tiffin'"
                    
                    ied.queryFeatures(iedquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("tiffin")
                            c.append(attr.tiffin)
                          });
                         
                    })
var data2=[]

ied.queryFeatures({
    where: "ied_type = 'Tiffin'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        data2[i] = {
            ied: results.features[i].attributes.ied_type,
            district:results.features[i].attributes.district
        }
    }
    // console.log(epoch)
})

          

$("#selectDistrict").on('change', function(){
    
    var tiffinCount = []
    tiffinCount.length =0;
    
    for(x in data2){
        if(select.value == data2[x].district){
            tiffinCount.push(data2[x].ied)
        }
    
    }
    console.log("Value",tiffinCount)
    var len = tiffinCount.length
    var c = document.getElementById("tiffin")
    c.innerHTML=''
        c.append(len)
    



    if(select.value == "All"){
                           

        ied.queryFeatures(iedquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("tiffin")
                c.innerHTML=''
                c.append(attr.tiffin)
              });
             
        })
    }
})

var data3=[]

ied.queryFeatures({
    where: "ied_type='Pressure'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        
            pressureCount[i] = {
                ied: results.features[i].attributes.ied_type,
                district:results.features[i].attributes.district
            }
        
        
    }
    console.log(pressureCount)
})



var pressure = new Query();

pressure.outStatistics=[{
    onStatisticField: "ied_type",
    outStatisticFieldName: "pressure_count",
    statisticType: "count"

}]

pressure.where = "ied_type = 'Pressure'"

ied.queryFeatures(pressure).then(function (results){

    results.features.forEach((element) => {
        dCount1 = element.attributes;
        // console.log(attr.district_count)
        var c = document.getElementById("pressure")
        c.innerHTML=''
        c.append(dCount1.pressure_count)
      });
     
})
      


$("#selectDistrict").on('change', function(){
    
    data3.length=0;
    for (x in pressureCount){
        if(select.value == pressureCount[x].district){
            data3.push(pressureCount[x].ied)
        
    }
    }

    // data3.length=0;
    // data3.push(epoch)
    console.log("Value",data3)
    // len = data3.length
    var c = document.getElementById("pressure")
    c.innerHTML=''
        c.append(data3.length)

    

    if(select.value=="All"){

        ied.queryFeatures(pressure).then(function (results){

            results.features.forEach((element) => {
                dCount1 = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("pressure")
                c.innerHTML=''
                c.append(dCount1.pressure_count)
              });
             
        })
            
           
    }

})


var data4=[]

ied.queryFeatures({
    where: "ied_type='Claymore'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        
            claymoreCount[i] = {
                ied: results.features[i].attributes.ied_type,
                district:results.features[i].attributes.district
            }
        
        
    }
    console.log(claymoreCount)
})



var claymore = new Query();

claymore.outStatistics=[{
    onStatisticField: "ied_type",
    outStatisticFieldName: "claymore_count",
    statisticType: "count"

}]

claymore.where = "ied_type = 'Claymore'"

ied.queryFeatures(claymore).then(function (results){

    results.features.forEach((element) => {
        dCount1 = element.attributes;
        // console.log(attr.district_count)
        var c = document.getElementById("claymore")
        c.innerHTML=''
        c.append(dCount1.claymore_count)
      });
     
})
      


$("#selectDistrict").on('change', function(){
    
    data4.length=0;
    for (x in claymoreCount){
        if(select.value == claymoreCount[x].district){
            data4.push(claymoreCount[x].ied)
        
    }
    }

    // data3.length=0;
    // data3.push(epoch)
    console.log("Value",data3)
    // len = data3.length
    var c = document.getElementById("claymore")
    c.innerHTML=''
        c.append(data4.length)

    

    if(select.value=="All"){

        ied.queryFeatures(claymore).then(function (results){

            results.features.forEach((element) => {
                dCount1 = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("claymore")
                c.innerHTML=''
                c.append(dCount1.claymore_count)
              });
             
        })
            
           
    }

})


//--------------------Dropdown---------------

$("#selectDistrict").change(function () {
    view.graphics.removeAll();
    

    if(select.value == "All"){
        getDistrict("1=1")
        $("#selectPs").empty();
        getPs("1=1")
        $("#form3").empty();
        getTable("1=1")
        
    }else{
       $("#selectPs").empty();
        getPs("district = '"+select.value+"'")
        $("#form3").empty();
        getTable("district = '"+select.value+"'")
    }

});

$("#selectPs").change(function () {

    if(select.value == "All" && select2.value == "All"){
        getDistrict("1=1")
        getPs("1=1")
        getTable("1=1")
    }else if(select.value == "All" && select2.value != "All"){
        $("#selectDistrict").empty()
        getDistrict("police_station = '" + select2.value + "'")
        $("#form3").empty();
        getTable("police_station = '" + select2.value + "'")
    }else if(select.value!="All" && select2.value!="All"){
        
        getDistrict("district = '"+select.value+"'AND police_station='"+select2.value+"'")
        $("#form3").empty();
        getTable("district = '"+select.value+"'AND police_station='"+select2.value+"'")
    }               
    
});


               
                         
                
           

        view.on("load", function(){
            change()
            removeduplicate()
            remove()
            removeStn()
            
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

//---------------DATE----------------



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
    $("#form3").empty();
    getTable("date_time BETWEEN '" + start + "' AND '" + end + "'")
    $("#selectDistrict").empty()
    getDistrict("date_time BETWEEN '" + start + "' AND '" + end + "'")
    $("#selectPs").empty();
    getPs("date_time BETWEEN '" + start + "' AND '" + end + "'")
})
      

//---------------------------------

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
            ied.queryFeatures({
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

        //-----------WIDGETS---------------
    
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



            ied.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){   

                for (var i = 0; i< res.features.length; i++){
                    date = res.features[i].attributes.date_time
                    // var date1 = new Date(date*1000);
                    var date1 = new Date(date)
                    var selectMonths_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
                    day = date1.getDate();
                    
                    selectMonths = selectMonths_arr[date1.getMonth()];
                    year1 = date1.getFullYear();
                    var hours = date1.getHours();
                    var mins = date1.getMinutes();
                    day_selectMonth = day + "-" + selectMonths + " " +year1
                    var time =  hours + ":" + mins
    
                    selectMonth[i] = {
                        selectMonth: selectMonths,
                        day_selectMonth: day_selectMonth,
                        // fulldate: datetime,
                        time: time
                    }
    
                    console.log("Date", selectMonth)
                    console.log(res)
              
                    for (j=0; j< selectMonth.length; j++){

                        ied1.queryFeatures({
                            where: '1=1',
                            outFields: ['*'],
                            orderByFields: ['objectid']

                        }).then(function(results){
                            for(x in results.features){
                                data[i] = {
                                    objectid: res.features[x].attributes.objectid,
                                    district: res.features[x].attributes.district,
                                    date_time: res.features[x].attributes.date_time,
                                    date: selectMonth[x].day_selectMonth,
                                    month: selectMonth[x].selectMonth,
                                    time: selectMonth[x].time,
                                    fullDateTime: selectMonth[x].fulldate,
                                    ps: res.features[x].attributes.police_station,
                                    day_selectMonth: selectMonth[x].day_selectMonth,
                                    number: results.features[x].attributes.number_detonators,
                                    type: results.features[x].attributes.detonator_type,
                                    ied_type: res.features[x].attributes.ied_type,
                                    weight: res.features[x].attributes.weight,
                                    distance_of_trigger: res.features[x].attributes.distance_of_trigger,
                                    strength: res.features[x].attributes.strength_of_force
                                    
                                };
                            }
                        })
                        
      
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

            
                  
    
                    console.log("array", data)
                    console.log("Count Data", count_data)



//         //------------TABLE FUNCTION STARTS----------------


        function getTable(whereclause){
            var html = "";
            html += "<table id='table' class='table table-boardred'>"

            

            ied.queryFeatures({
                where: whereclause,
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){   

                for (var i = 0; i< res.features.length; i++){
                    date = res.features[i].attributes.date_time
                    // var date1 = new Date(date*1000);
                    var date1 = new Date(date)
                    var selectMonths_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
                    day = date1.getDate();
                    
                    selectMonths = selectMonths_arr[date1.getMonth()];
                    year1 = date1.getFullYear();
                    var hours = date1.getHours();
                    var mins = date1.getMinutes();
                    day_selectMonth = day + "-" + selectMonths + " " +year1
                    var time =  hours + ":" + mins
    
                    selectMonth[i] = {
                        selectMonth: selectMonths,
                        day_selectMonth: day_selectMonth,
                        // fulldate: datetime,
                        time: time
                    }
    
                    console.log("Date", selectMonth)
                    console.log(res)
              
                    for (j=0; j< selectMonth.length; j++){
                        data[i] = {
                            objectid: res.features[i].attributes.objectid,
                            district: res.features[i].attributes.district,
                            date_time: res.features[i].attributes.date_time,
                            date: selectMonth[j].day_selectMonth,
                            month: selectMonth[j].selectMonth,
                            time: selectMonth[j].time,
                            fullDateTime: selectMonth[j].fulldate,
                            ps: res.features[i].attributes.police_station,
                            day_selectMonth: selectMonth[j].day_selectMonth,
                            number: detoners[i].number,
                            type: detoners[i].type,
                            ied_type: res.features[i].attributes.ied_type,
                            weight: res.features[i].attributes.weight,
                            distance_of_trigger: res.features[i].attributes.distance_of_trigger,
                            strength: res.features[i].attributes.strength_of_force
                            
                        };
    
                    
    
                       
                        
                    }
                }
                
                
                
         
           
            var f = res.features

            
                
           
                     
            html += '<tr>'
            html += '<th rowspan=2>' + 'Sl. No' + '</th>'
            html += '<th rowspan=2>' + 'District' + '</th>'
            // html += '<th rowspan=2 style="display: none">' + 'selectMonth' + '</th>'
            html += '<th rowspan=2>' + 'Date & Time' + '</th>'
            html += '<th rowspan=2>' + 'Police Station' + '</th>'
            html += '<th rowspan=2>' + 'Type of IED' + '</th>'
            html += '<th rowspan=2>' + 'Weight' + '</th>'
            html += '<th rowspan=2>' + 'Mechanism' + '</th>'
            html += '<th rowspan=2>' + 'Power Source' + '</th>'
            html += '<th rowspan=2>' + 'Number of Detoners' + '</th>'
            html += '<th rowspan=2>' + 'Type of Detoners' + '</th>'
            html += '<th rowspan=2>' + 'Distance of Trigger Point from where IED was planted' + '</th>'
            html += '<th rowspan=2>' + 'How it was planted' + '</th>'
            html += '<th rowspan=2>' + 'Type of Road' + '</th>'
            html += '<th colspan=3>' + 'Size of Crater' + '</th>'
            html += '<th rowspan=2>' + 'Type of Explosive Used' + '</th>'
            html += '<th rowspan=2>' + 'Type of Splinter used' + '</th>'
            html += '<th rowspan=2>' + 'Type of Container' + '</th>'
            html += '<th rowspan=2>' + 'Any clue or evidence other than IED materials for tracking' + '</th>'
            html += '<th rowspan=2>' + 'Other relevant information' + '</th>'
            html += '<th rowspan=2>' + 'Attachments' + '</th>'
           
            html += '</tr>'

            html += '<tr>'
            html += '<th>' + 'Width' + '</th>'
            html += '<th>' + 'Height' + '</th>'
            html += '<th>' + 'Depth' + '</th>'
            html += '<tr>'

            for (x in f){
                // if(f[x].attributes.objectid == results.features[x].attributes.objectid){
                // for(y in data){

                    // if(f[x].attributes.objectId == data[x].objectid){

                    

                
                    html += '<tr id="content">';
                   html += '<td class = "data text-center">' +f[x].attributes.objectid + '</td>'
                   html +=  '<td class = "data text-center">' + f[x].attributes.district + '</td>'
                //    html += '<td class = "data text-center" style="display: none">' + data[x].month + '</td>'
                   html += '<td class = "data text-center">' + data[x].time + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.police_station + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.ied_type + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.weight + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.mechanism + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.power + '</td>'
                   html += '<td class = "data text-center">' + data[x].number + '</td>'
                   html += '<td class = "data text-center">' + data[x].type + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.distance_of_trigger + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.planted_how + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.type_of_road + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.width + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.height + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.depth + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.explosive_type + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.splinters_type + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.container_type + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.clue  + '</td>'
                   html += '<td class = "data text-center">' + f[x].attributes.remarks + '</td>'
                   html += '<td class = "data text-center"><a href="#popup1"><button class="btn btn-sm btn-danger actionBtn" type="button" id ="' + f[x].attributes.objectid + '">View</button></a></td>';
                   
                    // }
                // } 
                

            }
        
                 
               $("#form3").append(html);
            

               $("#form3 td").each(function() {
                if (this.textContent === "null") this.textContent = "-"
              })
            
        })
                       
        }
        
//         //---------------BAR CHART FUNCTION STARTS-----------------
function barChart(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    bar.length = 0;
    district.length = 0;

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].number, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].number;
                }
            }
        }
    }

    // create a chart
    barchart = anychart.bar();

    
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


    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var barData = []
                barData.length = 0;
    
                barData[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    ps: bar[x].ps,
                    month: bar[x].month
    
                }

                var b = []
                for(x in barData){
                    b.push(barData[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Number of Detoners");
    
                // set the container id
                barchart.container("barChart");
                
                barchart.legend(true)

                var series = barchart.bar(b)
                series.id("Districts")
            
                series = barchart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                barchart.draw();

                
            }
            else if(select.value == "All"){
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
                break;
            }
            

        }
    }

    
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart").empty();
        $("barChart").prepend("<div id='barChart'></div>")
        
        changeBar()
    })

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

    
}



function barChart1(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].number, type: data[i].type, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].number;
                }
            }
        }
    }

    // create a chart
    barchart = anychart.bar();

    
    barchart.xAxis().title("District");
    barchart.yAxis().title("Number of Detoners");

    // set the container id
    barchart.container("barChart1");

    barchart.legend(true)

    var series = barchart.bar(bar)
    series.id("Districts")

    series = barchart.getSeries("Districts")

    series.name("Districts")

    var tooltip = barchart.getSeries("Districts").tooltip();

    tooltip.format("Type of Detoner: {%type}");


    // initiate drawing the chart
    barchart.draw();


    



    
        
    
    function changeBar1(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var barData = []
                barData.length = 0;
    
                barData[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    ps: bar[x].ps,
                    month: bar[x].month
    
                }

                var b = []
                for(x in barData){
                    b.push(barData[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Number of Detoners");
    
                // set the container id
                barchart.container("barChart1");
                
                barchart.legend(true)

                var series = barchart.bar(b)
                series.id("Districts")
            
                series = barchart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                barchart.draw();

                
            }else if(select.value == "All"){
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
                break;
            }
            

        }
    }

    
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart1").empty();
        $("barChart1").prepend("<div id='barChart1'></div>")
        
        changeBar1()
    })
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
    

}



function barChart2(){
    anychart.exports.server("http://localhost:2000");

    var bar = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bar.push({x: data[i].district, value: data[i].weight, type: data[i].ied_type, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].number;
                }
            }
        }
    }

    // create a chart
    barchart = anychart.bar();

    
    barchart.xAxis().title("District");
    barchart.yAxis().title("Number of Detoners");

    // set the container id
    barchart.container("barChart2");

    barchart.legend(true)

    var series = barchart.bar(bar)
    series.id("Districts")

    series= barchart.getSeries("Districts")

    series.name("Districts")

    var tooltip = barchart.getSeries("Districts").tooltip();

    tooltip.format("Type of IED: {%type}");


    // initiate drawing the chart
    barchart.draw();


    function changeBar2(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x || select2.value == bar[x].ps){
                var barData = []
                barData.length = 0;
    
                barData[x]={
                    x: bar[x].x,
                    value: bar[x].value,
                    ps: bar[x].ps,
                    month: bar[x].month
    
                }

                var b = []
                for(x in barData){
                    b.push(barData[x])
                }
                // create a chart
                barchart = anychart.bar();
    
                // create a bar series and set the data
                // barchart.bar(b);
                barchart.xAxis().title("District");
                barchart.yAxis().title("Number of Detoners");
    
                // set the container id
                barchart.container("barChart2");
                
                barchart.legend(true)

                var series = barchart.bar(b)
                series.id("Districts")
            
                series= barchart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                barchart.draw();

                
            }else if(select.value == "All"){
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
                break;
            }
            

        }
    }

    
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#barChart2").empty();
        $("barChart2").prepend("<div id='barChart2'></div>")
        
        changeBar2()
    })

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

}

//----------------------BUBBLE CHART--------------------------

function bubbleChart(){
    anychart.exports.server("http://localhost:2000");
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].number, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].number;
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
                    type: bubble_data[x].type,
                    ps: bubble_data[x].ps,
                    month: bubble_data[x].month
                }

                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                
                   
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Districts")
            
                series = bubblechart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                bubblechart.draw();
                
            }else if (select.value == "All"){
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
           
}

function bubbleChart1(){
    anychart.exports.server("http://localhost:2000");
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].number, type: data[i].type, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].number;
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

    function changeBubble1(){
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
                    type: bubble_data[x].type,
                    ps: bubble_data[x].ps,
                    month: bubble_data[x].month
                }

                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                
                   
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart1");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Districts")
            
                series = bubblechart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                bubblechart.draw();
                
            }else if (select.value == "All"){
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
                    break;
            }
            
        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#bubbleChart1").empty();
        $("bubbleChart1").prepend("<div id='bubbleChart1'></div>")
        
        changeBubble1()
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
           
}

function bubbleChart2(){
    anychart.exports.server("http://localhost:2000");
    bubblechart = anychart.cartesian();

    var bubble_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            bubble_data.push({x: data[i].district, value: data[i].weight, type: data[i].ied_type, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].number;
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

    tooltip.format("Type of IED: {%type}");

    series.name("Districts")

    

    bubblechart.draw();
           

    // chart.exports.filename('bubbleChart');

    function changeBubble2(){
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
                    type: bubble_data[x].type,
                    ps: bubble_data[x].ps,
                    month: bubble_data[x].month
                }

                console.log("DataBubble",bubble)

                var v = []
                for(x in bubble){
                    v.push(bubble[x])
                }
                
                
                   
                // create a bar series and set the data
                // barchart.bar(b);
                bubblechart.xAxis().title("District");
                bubblechart.yAxis().title("Number of Detoners");
    
                // set the container id
                bubblechart.container("bubbleChart2");
                
                bubblechart.legend(true)

                var series = bubblechart.bubble(v)
                series.id("Districts")
            
                series = bubblechart.getSeries("Districts")
            
                series.name("District")
    
                // initiate drawing the chart
                bubblechart.draw();
                
            }else if (select.value == "All"){
                bubblechart = anychart.cartesian();
                // add a marker seris
                    // bubblechart.bubble(bubble_data);
                    bubblechart.legend(true)

                    var series = bubblechart.bubble(bubble_data)
                    series.id("Districts")

                    series = bubblechart.getSeries("Districts")

                    var tooltip = bubblechart.getSeries("Districts").tooltip();

                    tooltip.format("Type of IED: {%type}");

                    series.name("Districts")
                                       
                
                    // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Number of Detoners");
                    
                    // draw
                    bubblechart.container("bubbleChart2");
                   
                    bubblechart.draw();
                    break;
            }
            
        }
    }
    $("#selectDistrict, #selectPs").on('change', function(){
        $("#bubbleChart2").empty();
        $("bubbleChart2").prepend("<div id='bubbleChart2'></div>")
        
        changeBubble2()
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

                    tooltip.format("Type of IED: {%type}");

                    series.name("Districts")
                                       
                
                    // set axes titles 
                    bubblechart.xAxis().title("District");
                    bubblechart.yAxis().title("Number of Detoners");
                    
                    // draw
                    bubblechart.container("bubbleChart2");
                   
                    bubblechart.draw();

    })

}

//-------------DOUGHNUT CHART--------------------

function doughnutChart(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].number, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].number;
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
            if(select.value==doughnut_data[x].x || select2.value == doughnut_data[x].ps){
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
                
                // initiate drawing the chart
                doughnutchart.draw();

                //legend
                doughnutchart.legend().position('top')
            break;
                }
                
            
        }
  }
  $("#selectDistrict, #selectPs").on('change', function(){
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


}

function doughnutChart1(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].number, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].number;
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

  
  function changeDoughnut1(){
        
        // $("#doughnutChart").prepend('<div id="doughnutChart"></div>')

        for(x in doughnut_data){
            // $("#doughnutChart").innerHTML="";
            if(select.value==doughnut_data[x].x || select2.value == doughnut_data[x].ps){
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
                
                // initiate drawing the chart
                doughnutchart.draw();

                //legend
                doughnutchart.legend().position('top')
            break;
                }
                
            
        }
  }
  $("#selectDistrict, #selectPs").on('change', function(){
      $("#doughnutChart1").empty();
      $("doughnutChart1").prepend("<div id='doughnutChart1'></div>")
      
      changeDoughnut1()
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

}

function doughnutChart2(){
    anychart.exports.server("http://localhost:2000");

    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].weight, type: data[i].ied_type, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].number;
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

  
  function changeDoughnut2(){
        
        // $("#doughnutChart").prepend('<div id="doughnutChart"></div>')

        for(x in doughnut_data){
            // $("#doughnutChart").innerHTML="";
            if(select.value==doughnut_data[x].x || select2.value == doughnut_data[x].ps){
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
                    doughnutchart.container("doughnutChart2");

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
                
                // initiate drawing the chart
                doughnutchart.draw();

                //legend
                doughnutchart.legend().position('top')
            break;
                }
                
            
        }
  }
  $("#selectDistrict, #selectPs").on('change', function(){
      $("#doughnutChart2").empty();
      $("doughnutChart2").prepend("<div id='doughnutChart2'></div>")
      
      changeDoughnut2()
  })

  $("#refresh").click(function(){
    $("#doughnutChart2").empty();

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

  })

}

//----------------------SANKEY CHART--------------------------
function sankey(){
    anychart.exports.server("http://localhost:2000");
    var sankey_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            sankey_data.push({from: data[i].district, to: data[i].ied_type, weight: data[i].weight, ps: data[i].ps, month: data[i].month})
        }else {
            for(var j=0; j<sankey_data.length;j++){
                if(sankey_data[j].x == data[i].district){
                    sankey_data[j].value = sankey_data[j].value + data[i].number;
                }
            }
        }
    }

    console.log("Sankey",sankey_data)

    // create a chart and set the data
    var sankeychart = anychart.sankey(sankey_data);
    
    // set the width of nodes
    // chart.nodeWidth("30%");
    sankeychart.nodeWidth("40%");
    sankeychart.height('100%')  
    // set the container id
    sankeychart.container("sankeyChart");

       
    // initiate drawing the chart
    sankeychart.draw();

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
            var sankeychart = anychart.sankey(sank);
            
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
            var sankeychart = anychart.sankey(sankey_data);
            
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

    $("#selectDistrict ,#selectPs").on('change', function(){
        $("#sankeyChart").empty();
        $("sankeyChart").prepend("<div id='sankeyChart'></div>")

        changeSankey();
    })

    $("#refresh").click(function(){

        $("#sankeyChart").empty();
        // create a chart and set the data
        var sankeychart = anychart.sankey(sankey_data);
            
        // set the width of nodes
        // chart.nodeWidth("30%");
        sankeychart.nodeWidth("40%");
        sankeychart.height('100%')  
        // set the container id
        sankeychart.container("sankeyChart");


        
        // initiate drawing the chart
        sankeychart.draw();

    })

    function saveAsPng(){
        sankeychart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Sankey Chart - Analysis of IEDs"
        });
    }

    $("#download4").on('click', function(){
        saveAsPng()
    })
}


//      // -----------ATTACHMENTS WIDGET----------------------
            
                // document.getElementById('attachments').style.display='none'
                $("#form3").on('click', 'button', function (oid){
                    document.getElementById('popup').style.display=='block'

                    var id = oid.currentTarget.id
                    // console.log(id)

                    ied.queryObjectIds().then (function (objectid){
                        let attachmentQuery = {
                            where: 'objectid=' + id,
                            keywords: "ied_image",
                            // attachmentsWhere: "district = 'Durg'" ,
                            objectIds: objectid,                 
                            attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif"]
                      
                          };

                          // console.group("attachment for", objectId);
                          var att = document.getElementById("attachments");
                          att.innerHTML = "" 
    
                          ied.queryAttachments(attachmentQuery).then(function (attachments) {
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

                

                $("#printAttach").click(function(){
                    printAttachments()
                })
                
                
                
                function printAttachments(){
                    var element = document.getElementById('Attachment');
                            html2pdf(element, {
                                margin: 10,
                                filename: 'Details.pdf',
                                image: { type: 'jpeg', quality: 0.98 },
                                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                                jsPDF: { unit: 'mm', format: 'tabloid', orientation: 'portrait' }
                            });
                }
                           

            
            $("#xls4").on("click", function () {
                Excelonclick();
        
            })
        
            function Excelonclick() {
                var textToSave = document.getElementById("form3").outerHTML;
                var textToSaveAsBlob = new Blob([textToSave], { type: "text/html" });
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = "IED_Data.xls";
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

                
  

        

        function refreshIndicators(){

            //tiffin
            var iedquery = new Query();

                    iedquery.outStatistics=[{
                        onStatisticField: "ied_type",
                        outStatisticFieldName: "tiffin",
                        statisticType: "count"
                    
                    }]

                    // iedquery.groupByFieldsForStatistics['ied_type']
                    iedquery.where = "ied_type = 'Tiffin'"
                    
                    ied.queryFeatures(iedquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("tiffin")
                            c.innerHTML=''
                            c.append(attr.tiffin)
                          });
                         
                    })


            //pressure
            
            var pressure = new Query();

            pressure.outStatistics=[{
                onStatisticField: "ied_type",
                outStatisticFieldName: "pressure_count",
                statisticType: "count"

            }]

            pressure.where = "ied_type = 'Pressure'"

            ied.queryFeatures(pressure).then(function (results){

                results.features.forEach((element) => {
                    dCount1 = element.attributes;
                    // console.log(attr.district_count)
                    var c = document.getElementById("pressure")
                    c.innerHTML=''
                    c.append(dCount1.pressure_count)
                });
                
            })

            //claymore
            var claymore = new Query();

            claymore.outStatistics=[{
                onStatisticField: "ied_type",
                outStatisticFieldName: "claymore_count",
                statisticType: "count"

            }]

            claymore.where = "ied_type = 'Claymore'"

            ied.queryFeatures(claymore).then(function (results){

                results.features.forEach((element) => {
                    dCount1 = element.attributes;
                    // console.log(attr.district_count)
                    var c = document.getElementById("claymore")
                    c.innerHTML=''
                    c.append(dCount1.claymore_count)
                });
                
            })
                



        }

        // function refreshBarCharts(){
        //     anychart.exports.server("http://localhost:2000");

        //     var bar = [];
            
        //     for(i in data){
        //         bar[i]={
        //             x: data[i].district,
        //             value: data[i].number
        //         }
        //     }

        //     // create a chart
        //     barchart = anychart.bar();

            
        //     barchart.xAxis().title("District");
        //     barchart.yAxis().title("Number of Detoners");

        //     // set the container id
        //     barchart.container("barChart");

        //     barchart.legend(true)

        //     var series = barchart.bar(bar)
        //     series.id("Districts")

        //     series = barchart.getSeries("Districts")

        //     series.name("Districts")


        //     // initiate drawing the chart
        //     barchart.draw();
        // }

            
    })

















