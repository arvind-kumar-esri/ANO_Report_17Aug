var webmap;
var map;
var view;
var state;
var district;
var ps;
var select;
var ano;
var ano1;
var date;
var date1;
var graphics;
var day;
var selectMonths;
var year;
var day_selectMonth;
var query;
var home;
var basemap;
var layers;
var legend;
var print;
var districtArray = [];
var psArray = [];
let count_data = [];
let type =[];
let number =[];
var date2=[];
var selectMonth = [];
var data = [];
var suspects = [];
var  searchCount = []
var pressureCount=[];
var claymoreCount = [];
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
     
        //map 
        webmap = new WebMap({
            portalItem: {
                id: "72a2b255dcc0406bb842f1dcfb7e882d"
            }
        });

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

        ano = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_90d2b68e230f4ce29bcb131c6e781e36/FeatureServer/0"
        })
        // map.add(ano)

        ano1 = new FeatureLayer({
            url:"https://services5.arcgis.com/ZUZLRF29XE1PoIOR/arcgis/rest/services/service_90d2b68e230f4ce29bcb131c6e781e36/FeatureServer/1"
        })
        // map.add(ano1)

        getTable("1=1");
        getDistrict("1=1");

        //----------suspects ARRAY-----------
        ano1.queryFeatures({
            where: "1=1",
            outFields: ["*"],
            orderByFields: ["objectid"]
        }).then(function (results){
            var i;
            for (var i=0; i< results.features.length; i++){

                suspects[i] = {
                    number: results.features[i].attributes.no_of_person_suspect,
                    type: results.features[i].attributes.suspect_vill
                 };

            }
        })

  
        //------DROPDOWN STARTS-----------
        
        const select = document.getElementById("selectDistrict")
        // var sel = document.getElementById('selectMonth');

        function getDistrict(whereclause){
            ano.queryFeatures({
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

        $("#selectDistrict").change(function () {

            if(select.value == "All"){
               
                $("#form4").empty();
                getTable("1=1")
                
            }else{
                
                $("#form4").empty();
                getTable("district = '"+select.value+"'")
            }

        });
        
        

        


//--------------------INDICATORS--------------------
var anoquery = new Query();

                    anoquery.outStatistics=[{
                        onStatisticField: "eof",
                        outStatisticFieldName: "eof",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    anoquery.where = "eof = 'Yes'"
                    
                    ano.queryFeatures(anoquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("eof")
                            c.append(attr.eof)
                          });
                         
                    })
var data2=[]

ano.queryFeatures({
    where: "eof = 'Yes'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        data2[i] = {
            ano: results.features[i].attributes.suspect,
            district:data[i].district
        }
    }
})

          

$("#selectDistrict").on('change', function(){
    
    var eofCount = []
    eofCount.length =0;
    
    for(x in data2){
        if(select.value == data2[x].district){
            eofCount.push(data2[x].ano)
        }
    
    }
    console.log("Value",searchCount)
    var len = eofCount.length
    var c = document.getElementById("eof")
    c.innerHTML=''
        c.append(len)
    



    if(select.value == "All"){
                           

        ano.queryFeatures(anoquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("eof")
                c.innerHTML=''
                c.append(attr.eof)
              });
             
    
             
        })
    }
})

var searchquery = new Query();

                    searchquery.outStatistics=[{
                        onStatisticField: "search",
                        outStatisticFieldName: "searched",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    searchquery.where = "search = 'Yes'"
                    
                    ano.queryFeatures(searchquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("searched")
                            c.append(attr.searched)
                          });
                         
                    })
var data3=[]

ano.queryFeatures({
    where: "search = 'Yes'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        data3[i] = {
            searched: results.features[i].attributes.searched,
            district:data[i].district
        }
    }
})

          

$("#selectDistrict").on('change', function(){
    
    var searchCount = []
    searchCount.length =0;
    
    for(x in data2){
        if(select.value == data3[x].district){
            searchCount.push(data3[x].searched)
        }
    
    }
    console.log("Value",searchCount)
    var len = searchCount.length
    var c = document.getElementById("searched")
    c.innerHTML=''
        c.append(len)
    



    if(select.value == "All"){
                           

        ano.queryFeatures(searchquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("searched")
                c.innerHTML=''
                c.append(attr.searched)
              });
             
    
             
        })
    }
})

var seizedquery = new Query();

                    seizedquery.outStatistics=[{
                        onStatisticField: "siezed",
                        outStatisticFieldName: "propertySiezed",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    seizedquery.where = "siezed = 'Yes'"
                    
                    ano.queryFeatures(seizedquery).then(function (results){

                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("siezed")
                            c.append(attr.propertySiezed)
                          });
                         
                    })
var data4=[]

ano.queryFeatures({
    where: "siezed = 'Yes'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        data4[i] = {
            siezed: results.features[i].attributes.siezed,
            district:data[i].district
        }
    }
})

          

$("#selectDistrict").on('change', function(){
    
    var siezedCount = []
    siezedCount.length =0;
    
    for(x in data4){
        if(select.value == data4[x].district){
            siezedCount.push(data4[x].siezed)
        }
    
    }
    
    var len = siezedCount.length
    var c = document.getElementById("siezed")
    c.innerHTML=''
        c.append(len)
    



    if(select.value == "All"){
                           

        ano.queryFeatures(seizedquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("siezed")
                c.innerHTML=''
                c.append(attr.propertySiezed)
              });
             
    
             
        })
    }
})

var interroquery = new Query();

                    interroquery.outStatistics=[{
                        onStatisticField: "interrogation",
                        outStatisticFieldName: "interrogated",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    interroquery.where = "interrogation = 'Yes'"
                    
                    ano.queryFeatures(interroquery).then(function (results){

                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("interrogated")
                            c.append(attr.interrogated)
                          });
                         
                    })
var data5=[]

ano.queryFeatures({
    where: "interrogation = 'Yes'",
    outFields: ['*']
}).then(function (results){
    for(i=0; i< results.features.length; i++){
        data5[i] = {
            interrogated: results.features[i].attributes.interrogation,
            district:data[i].district
        }
    }
})

          

$("#selectDistrict").on('change', function(){
    
    var siezedCount = []
    siezedCount.length =0;
    
    for(x in data5){
        if(select.value == data5[x].district){
            siezedCount.push(data5[x].interrogated)
        }
    
    }
    
    var len = siezedCount.length
    var c = document.getElementById("interrogated")
    c.innerHTML=''
        c.append(len)
    



    if(select.value == "All"){
                           

        ano.queryFeatures(interroquery).then(function (results){
                    
            results.features.forEach((element) => {
                attr = element.attributes;
                // console.log(attr.district_count)
                var c = document.getElementById("interrogated")
                c.innerHTML=''
                c.append(attr.interrogated)
              });
             
    
             
        })
    }
})



//---------------------selectMonth INDICATOR----------------------

//--------------------graphics---------------
       

        view.on("load", function(){
            change()
            removeduplicate()
            remove()
                    
        })

                     
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

                $('#selectDistrict,#date').on('change', function(){
                    change();
                })

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


            ano.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){
                for (var i = 0; i< res.features.length; i++){

                    var dateArray = []

                    var date = res.features[i].attributes.date
                    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    var new_date = new Date(date*1000)
                    var new_date1 = new Date(date)
                    var getDay = new_date.getDate();
                    var getMonth = months_arr[new_date.getMonth()];
                    var getYear = new_date1.getFullYear();

                    var fullDate = getDay + "-" + getMonth + " " + getYear

                    dateArray [i] = {
                        fullDate: fullDate
                    }

                    
              
                    for(j in dateArray){
                        data[j] = {
                            objectid : res.features[i].attributes.objectid,
                            district: res.features[i].attributes.district,
                            month: res.features[i].attributes.month,
                            date: dateArray[j].fullDate,
                            number: suspects[j].number,
                            suspects: res.features[i].attributes.number_interro,
                            timing: res.features[i].attributes.timing,
                            searchDuration: res.features[i].attributes.time_search,
                            village: res.features[i].attributes.interro_vill,
                            
                            
                            
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
                    
    
                    console.log("array", data)
                    console.log("Count Data", count_data)
                    
                })



//         //------------TABLE FUNCTION STARTS----------------
        

        function getTable(whereclause){
            var html = "";
            html += "<table id='table' class='table table-boardred'>"

            ano.queryFeatures({
                where: whereclause,
                outFields: ["*"],
                orderByFields: ["objectid"]
            }).then(function (res){
                for (var i = 0; i< res.features.length; i++){

                    var dateArray = []

                    var date = res.features[i].attributes.date
                    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    var new_date = new Date(date*1000)
                    var new_date1 = new Date(date)
                    var getDay = new_date.getDate();
                    var getMonth = months_arr[new_date.getMonth()];
                    var getYear = new_date1.getFullYear();

                    var fullDate = getDay + "-" + getMonth + " " + getYear

                    dateArray [i] = {
                        fullDate: fullDate
                    }

                    
              
                    for(j in dateArray){
                        data[j] = {
                            objectid : res.features[i].attributes.objectid,
                            district: res.features[i].attributes.district,
                            month: res.features[i].attributes.month,
                            date: dateArray[j].fullDate,
                            number: suspects[j].number,
                            suspects: res.features[i].attributes.number_interro,
                            timing: res.features[i].attributes.timing,
                            searchDuration: res.features[i].attributes.time_search,
                            village: res.features[i].attributes.interro_vill,
                            
                            
                            
                        };
                    }
                        
                    
                        
                       
                        
                    
                    }
                   
                    
    
                    console.log("array", data)
                    console.log("Count Data", count_data)
                    
                    
                    
    
            ano.queryFeatures({
            where: "1=1",
            outFields: ["*"],
            returnGeometry: true,
            orderByFields: ["objectid"]
            }).then(function (results) {

            var f = results.features
                     
            html += '<tr>'

            html += '<th rowspan=2>' + 'Sl. No' + '</th>'
            html += '<th rowspan=2>' + 'District' + '</th>'
            html += '<th colspan=3>' + 'EOF (Yes/No): ' + '</th>'
            html += '<th colspan=4>' + 'Cordan/Search of any village: ' +'</th>'
            html += '<th rowspan=2 style="display: none">' + 'Month' + '</th>'
            html += '<th rowspan=2>' + 'People/Suspect brought to the camp' + '</th>'
            html += '<th colspan=2>' + 'Property Damaged' + '</th>'
            html += '<th colspan=2>' + 'Property of any villager seized or brought to the camp' + '</th>'
            html += '<th colspan=2>' + 'People/Villager interrogated'+  '</th>'
            html += '<th rowspan=2>' + 'Incharge of entire Operations/responsible for above actions/details' + '</th>'
            // html += '<th rowspan=2>' + 'Attachments' + '</th>'
            
            
            html += '</tr>'
            
            html += '<tr>'

            html += '<th>' + 'Timing/Duration of EoF' + '</th>'
            html += '<th>' + ' Achievement/Loss' + '</th>'
            html += '<th>' + 'Ammunition fired by own troops' + '</th>'
            html += '<th>' + 'Name of village' + '</th>'
            html += '<th>' + 'Timing/Duration of Search' + '</th>'
            html += '<th>' + 'Recovery-Major (Case/Weapon/IED/Explosive etc)' + '</th>'
            html += '<th>' + 'Any injury to civilians/villagers(Village/Name/Details)' + '</th>'
            html += '<th>' + 'Name of Village' + '</th>'
            html += '<th>' + 'Owner' + '</th>'
            html += '<th>' + 'Details of Property' + '</th>'
            html += '<th>' + 'Reasons' + '</th>'
            html += '<th>' + 'Name of Village' + '</th>'
            html += '<th>' + 'Number of Persons' + '</th>'
            html += '</tr>'

            for (x in f){
                if (f[x].attributes.objectid == data[x].objectid){
                    
                    // console.log(f[x].attributes)

                    html += '<tr id="content">';
                   
                    html += '<td class = "data">' +f[x].attributes.objectid + '</td>'
                    html +=  '<td class = "data">' + f[x].attributes.district + '</td>'
                    html += '<td class = "data">' + f[x].attributes.timing + '</td>'
                    html += '<td class = "data">' + f[x].attributes.achievement_loss + '</td>'
                    html += '<td class = "data">' + f[x].attributes.ammunition + '</td>'
                    html += '<td class = "data">' + f[x].attributes.namevill + '</td>'
                    html += '<td class = "data">' + f[x].attributes.time_search + '</td>'
                    html += '<td class = "data">' + f[x].attributes.recovery + '</td>'
                    html += '<td class = "data">' + f[x].attributes.injury + '</td>'
                    html += '<td class = "data">' + suspects[x].number + '</td>'
                    html += '<td class = "data">' + f[x].attributes.name_vill_siezed + '</td>'
                    html += '<td class = "data">' + f[x].attributes.siezed_owner + '</td>'
                    html += '<td class = "data">' + f[x].attributes.siezed_details + '</td>'
                    html += '<td class = "data">' + f[x].attributes.siezed_reasons + '</td>'
                    html += '<td class = "data">' + f[x].attributes.interro_vill + '</td>'
                    html += '<td class = "data">' + f[x].attributes.number_interro + '</td>'
                    html += '<td class = "data">' + f[x].attributes.details_of_incharge + '</td>'
 
 
                    
                //    html += '<td class = "data text-center"><a href="#popup1"><button class="btn btn-sm btn-danger actionBtn" type="button" id ="' + f[x].attributes.objectid + '">View</button></a></td>';
                   html += '</tr>';
                } 
                
                


            }

                 
               $("#form4").append(html);
            

               $("#form4 td").each(function() {
                if (this.textContent === "null") this.textContent = "-"
              })
            })
            

        })
    
        
        }
        
        

//         //-------------TABLE FUNCTION ENDS----------------

   
                

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
            bar.push({x: data[i].district, value: data[i].timing, ps: data[i].ps})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].timing;
                }
            }
        }
    }

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
    barchart.container("barChart");

    barchart.xAxis().title("District");
    barchart.yAxis().title("Duration of EOF");
    barchart.legend(true)


    // initiate drawing the chart
    barchart.draw();

    
        
    
   
    $("#selectDistrict,#date").on('change', function(){
        $("#barChart").empty();
        $("barChart").prepend("<div id='barChart'></div>")
        
        changeBar()
    })

    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x){
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
                barchart.container("barChart");
                barchart.legend(true)
                
                
    
                // initiate drawing the chart
                barchart.draw();

                // function saveAsPng(){
                //     barchart1.saveAsPng(400,300);
                // }
            
                // $("#download1").on('click', function(){
                //     saveAsPng({
                //         "filename": "BarChart-Analysis of anos"
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
            bar.push({x: data[i].district, value: data[i].searchDuration, ps: data[i].ps})
        } else {
            for(var j=0; j<bar.length;j++){
                if(bar[j].x == data[i].district){
                    bar[j].value = bar[j].value + data[i].searchDuration;
                }
            }
        }
    }

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

    
        
    
    
    $("#selectDistrict,#date").on('change', function(){
        $("#barChart1").empty();
        $("barChart1").prepend("<div id='barChart1'></div>")
        
        changeBar()
    })

    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x){
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
                barchart.container("barChart1");

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
                //         "filename": "BarChart-Analysis of anos"
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
            bar.push({x: data[i].district, value: data[i].number, ps: data[i].ps})
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

    
        
    
    
    $("#selectDistrict,#date").on('change', function(){
        $("#barChart2").empty();
        $("barChart2").prepend("<div id='barChart2'></div>")
        
        changeBar()
    })

    function changeBar(){
        anychart.exports.server("http://localhost:2000");
        for(x in bar){
            if(select.value == bar[x].x){
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
                barchart.container("barChart2");

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
                //         "filename": "BarChart-Analysis of anos"
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
            bubble_data.push({x: data[i].district, value: data[i].timing, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].timing;
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
            if(select.value == bubble_data[x].x){
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
    $("#selectDistrict,#date").on('change', function(){
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
            bubble_data.push({x: data[i].district, value: data[i].searchDuration, size:15, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<bubble_data.length;j++){
                if(bubble_data[j].x == data[i].district){
                    bubble_data[j].value = bubble_data[j].value + data[i].searchDuration;
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

   
    $("#selectDistrict,#date").on('change', function(){
        $("#bubbleChart1").empty();
        $("bubbleChart1").prepend("<div id='bubbleChart1'></div>")
        
        changeBubble()
    })

    function changeBubble(){
        anychart.exports.server("http://localhost:2000");

        
        for(x in bubble_data){
            var bubble = []
                bubble.length = 0;
            if(select.value == bubble_data[x].x){
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
                    bubblechart.container("bubbleChart");
                   
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

   
    $("#selectDistrict,#date").on('change', function(){
        $("#bubbleChart2").empty();
        $("bubbleChart2").prepend("<div id='bubbleChart2'></div>")
        
        changeBubble()
    })

    function changeBubble(){
        anychart.exports.server("http://localhost:2000");

        
        for(x in bubble_data){
            var bubble = []
                bubble.length = 0;
            if(select.value == bubble_data[x].x){
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
                    bubblechart.container("bubbleChart");
                   
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
            doughnut_data.push({x: data[i].district, value: data[i].timing, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].timing;
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
            if(select.value==doughnut_data[x].x){
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
  $("#selectDistrict,#date").on('change', function(){
      $("#doughnutChart").empty();
      $("doughnutChart").prepend("<div id='doughnutChart'></div>")
      
      changeDoughnut()
  })

  function saveAsPng(){
    doughnutchart.saveAsPng({
        "height":500,
        "width": 500,
        "filename": "Doughnut Chart - ANO VI Proforma"
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
            doughnut_data.push({x: data[i].district, value: data[i].searchDuration, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].searchDuration;
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
            if(select.value==doughnut_data[x].x){
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
  $("#selectDistrict,#date").on('change', function(){
      $("#doughnutChart1").empty();
      $("doughnutChart1").prepend("<div id='doughnutChart1'></div>")
      
      changeDoughnut()
  })


}

function doughnutChart2(){
    anychart.exports.server("http://localhost:2000");
    var doughnut_data = [];
    var district = [];

    for(var i=0; i<data.length;i++){
        if(district.includes(data[i].district) == false){
            district.push(data[i].district)
            doughnut_data.push({x: data[i].district, value: data[i].searchDuration, ps: data[i].ps, month: data[i].month})
        } else {
            for(var j=0; j<doughnut_data.length;j++){
                if(doughnut_data[j].x == data[i].district){
                    doughnut_data[j].value = doughnut_data[j].value + data[i].searchDuration;
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
            if(select.value==doughnut_data[x].x){
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
  $("#selectDistrict,#date").on('change', function(){
      $("#doughnutChart2").empty();
      $("doughnutChart2").prepend("<div id='doughnutChart2'></div>")
      
      changeDoughnut()
  })


}

//----------------------SANKEY CHART--------------------------
function sankey(){
    anychart.exports.server("http://localhost:2000");
    var sankey_data = []

    for(x in data){
        sankey_data[x] = {
            from: data[x].district,
            to: data[x].village,
            weight: data[x].suspects,
            
        }
    }

    console.log("SD", sankey_data)
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
        if(select.value == sankey_data[x].from){
            
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

    $("#selectDistrict,#date").on('change', function(){
        $("#sankeyChart").empty();
        $("sankeyChart").prepend("<div id='sankeyChart'></div>")

        changeSankey();
    })

    function saveAsPng(){
        sankeychart.saveAsPng({
            "height":500,
            "width": 500,
            "filename": "Sankey Chart - ANO VI Proforma"
        });
    }

    $("#download4").on('click', function(){
        saveAsPng()
    })
}



// //      // -----------ATTACHMENTS WIDGET----------------------
            
//                 // document.getElementById('attachments').style.display='none'
//                 $("#form4").on('click', 'button', function (oid){
//                     document.getElementById('popup').style.display=='block'

//                     var id = oid.currentTarget.id
//                     // console.log(id)

//                     ano.queryObjectIds().then (function (objectid){
//                         let attachmentQuery = {
//                             where: 'objectid=' + id,
//                             keywords: "ano_image",
//                             // attachmentsWhere: "district = 'Durg'" ,
//                             objectIds: objectid,                 
//                             attachmentTypes: ["image/jpeg", "image/jpg", "image/jfif", "image/png", "image/gif"]
                      
//                           };

//                           // console.group("attachment for", objectId);
//                           var att = document.getElementById("attachments");
//                           att.innerHTML = "" 
    
//                           ano.queryAttachments(attachmentQuery).then(function (attachments) {
//                                 attachmentQuery.objectIds.forEach(function (objectId) {
//                                 if (attachments[objectId]) {
                                   
//                                 // console.group("attachment for", objectId);
//                                 var att = document.getElementById("attachments");
//                                 att.innerHTML = "" 
//                                     let attachment = attachments[objectId];
//                                     console.log("OID",attachment)
                          
                                    
//                                         attachment.forEach(function (item) {
//                                             const image = document.createElement("img");
//                                               image.src = item.url;
//                                               image.className = "queryImg";
                                             
                                              
//                                               document.getElementById("attachments").appendChild(image);
                                              
                                
//                                           });
//                                   }
//                             })
                            
                            
//                           })

                                 
//                     }).then (function (attachmentID){
//                         if (attachmentID === undefined) {
//                             const alert = document.createElement("p");
//                             alert.innerHTML =
//                               "No attachments found for the selected location";
//                             document.getElementById("attachments").appendChild(alert);
//                           }
//                     })
//                 })
                
                    
 
                
            

            
            $("#xls4").on("click", function () {
                Excelonclick();
        
            })
        
            function Excelonclick() {
                var textToSave = document.getElementById("form4").outerHTML;
                var textToSaveAsBlob = new Blob([textToSave], { type: "text/html" });
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = "ANO VI Data.xls";
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
            $("#form5").empty();
            getTable("1=1")

            //dropdown

            $("#selectDistrict").empty();

            // $("#selectMonth").empty();

            $("#selectDistrict").append("<option>"+"All"+"</option>");
                          
                            // $("#selectMonth").append("<option>"+"All"+"</option>")

            ano.queryFeatures({
                where: "1=1",
                outFields: ["*"],
                returnGeometry: false
            }).then(function(results) {
                for(const res of results.features) {
    
                               
               select.appendChild(new Option (res.attributes.district, res.attributes.district))
               remove();
    
                
                }
            });

            refreshIndicators();
            

            //---------------------------CHARTS----------------------
            
        })

        

        function refreshIndicators(){

            var anoquery = new Query();

                    anoquery.outStatistics=[{
                        onStatisticField: "eof",
                        outStatisticFieldName: "eof",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    anoquery.where = "eof = 'Yes'"
                    
                    ano.queryFeatures(anoquery).then(function (results){
                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("eof")
                            c.innerHTML=''
                            c.append(attr.eof)
                          });
                         
                    })

            
            var searchquery = new Query();

            searchquery.outStatistics=[{
                onStatisticField: "search",
                outStatisticFieldName: "searched",
                statisticType: "count"

            }]

            // anoquery.groupByFieldsForStatistics['ano_type']
            searchquery.where = "search = 'Yes'"

            ano.queryFeatures(searchquery).then(function (results){

                results.features.forEach((element) => {
                    attr = element.attributes;
                    // console.log(attr.district_count)
                    var c = document.getElementById("searched")
                    c.innerHTML=''
                    c.append(attr.searched)
                });
                
            })

            var seizedquery = new Query();

                    seizedquery.outStatistics=[{
                        onStatisticField: "siezed",
                        outStatisticFieldName: "propertySiezed",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    seizedquery.where = "siezed = 'Yes'"
                    
                    ano.queryFeatures(seizedquery).then(function (results){

                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("siezed")
                            c.innerHTML=''
                            c.append(attr.propertySiezed)
                          });
                         
                    })

                    var interroquery = new Query();

                    interroquery.outStatistics=[{
                        onStatisticField: "interrogation",
                        outStatisticFieldName: "interrogated",
                        statisticType: "count"
                    
                    }]

                    // anoquery.groupByFieldsForStatistics['ano_type']
                    interroquery.where = "interrogation = 'Yes'"
                    
                    ano.queryFeatures(interroquery).then(function (results){

                    
                        results.features.forEach((element) => {
                            attr = element.attributes;
                            // console.log(attr.district_count)
                            var c = document.getElementById("interrogated")
                            c.innerHTML=''
                            c.append(attr.interrogated)
                          });
                         
                    })





        }

            
    })
