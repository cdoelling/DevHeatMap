// ---------CA SITE LIST-------------

  var cadevData = [
      {location: new google.maps.LatLng(17.4254196,78.3349578), weight: 12},
      {location: new google.maps.LatLng(50.0278166,14.4930487), weight: 11},
      {location: new google.maps.LatLng(37.3857826,-121.9753225), weight: 10},
      {location: new google.maps.LatLng(33.0789714,-96.8110784), weight: 9},
      {location: new google.maps.LatLng(40.5244307,-105.0244388), weight: 8},
      {location: new google.maps.LatLng(42.2953163,-71.488151), weight: 7},
      {location: new google.maps.LatLng(12.9591505,77.6459774), weight: 6},
      {location: new google.maps.LatLng(40.020194,-105.2512472), weight: 5},
      {location: new google.maps.LatLng(39.7513315,-105.0033265), weight: 3},
      {location: new google.maps.LatLng(49.284005,-123.1213143), weight: 4},
      {location: new google.maps.LatLng(40.4534992,-80.1909099), weight: 3},
      {location: new google.maps.LatLng(41.808818,-88.1174986), weight: 2},
      {location: new google.maps.LatLng(32.2610569,34.4118136), weight: 1},
    ];

    var styles = [
      {
        stylers: [
          { hue: "#f2fffe" },
          { saturation: -10 }
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 90 },
          { visibility: "simplified" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }, {
        featureType: "water",
        stylers: [{ color: "#f2f2f2"}]
      }
    ];

    var gradientCABlue = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
    ];

    var island = new google.maps.LatLng(37.7450122,-25.6959568);

    map = new google.maps.Map(document.getElementById('map'), {
      center: island,
      zoom: 2,
          });

    map.setOptions({styles: styles});

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: cadevData,
      gradient: gradientCABlue,
      radius: 20,
    });
    // heatmap.setMap(map);
    heatmap.setMap(null);

  function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
  }


//-------- INSURANCE LIST --------------

// AIG
var insAIG = [
  {location: new google.maps.LatLng(40.7052643,-74.0053388), weight: 8},
  {location: new google.maps.LatLng(14.4300988,120.9777254), weight: 3},
  {location: new google.maps.LatLng(32.9034204,-97.1788402), weight: 3},
  {location: new google.maps.LatLng(12.991114,77.727998), weight: 2}
]

var heatmapAIG = new google.maps.visualization.HeatmapLayer({
  data: insAIG,
  radius: 20,
});
heatmapAIG.setMap(null);

function toggleAIG() {
heatmapAIG.setMap(heatmapAIG.getMap() ? null : map);
}

// All State
var insAllState = [
  {location: new google.maps.LatLng(41.894415,-87.7719783), weight: 10},
  {location: new google.maps.LatLng(12.9257376,77.6843104), weight: 1},
  {location: new google.maps.LatLng(42.9790771,-81.2846753), weight:1},
]

var heatmapAll = new google.maps.visualization.HeatmapLayer({
  data: insAllState,
  radius: 20,
});
heatmapAll.setMap(null);

function toggleAll() {
heatmapAll.setMap(heatmapAll.getMap() ? null : map);
}

// // American Family
var insAmericanFamily = [
  {location: new google.maps.LatLng(43.0873269,-89.4766667), weight: 3}
]

var heatmapAmFam = new google.maps.visualization.HeatmapLayer({
  data: insAmericanFamily,
  radius: 20,
});
heatmapAmFam.setMap(null);

function toggleAmFam() {
heatmapAmFam.setMap(heatmapAmFam.getMap() ? null : map);
}

// CIGNA

var insCigna = [
  {location: new google.maps.LatLng(41.8079193,-72.7815003), weight:13},
  {location: new google.maps.LatLng(40.0131162,-75.2417393), weight: 10},
  {location: new google.maps.LatLng(40.707506, -74.010868), weight: 4},
  {location: new google.maps.LatLng(39.6934499,-105.0457095), weight: 3},
  {location: new google.maps.LatLng(42.3486078,-71.0956762), weight: 2}
]

var heatmapCigna = new google.maps.visualization.HeatmapLayer({
  data: insCigna,
  radius: 20,
});
heatmapCigna.setMap(null);

function toggleCigna() {
heatmapCigna.setMap(heatmapCigna.getMap() ? null : map);
}

// Dept of Vets

var insVA = [
  {location: new google.maps.LatLng(38.8803325,-77.0640901), weight: 3},
  {location: new google.maps.LatLng(30.3694544,-97.8985919), weight:2},
  {location: new google.maps.LatLng(41.7800673,-87.9800481), weight: 1},
  {location: new google.maps.LatLng(28.0568626,-82.7321786), weight: .5}
]

var heatmapVA = new google.maps.visualization.HeatmapLayer({
  data: insVA,
  radius: 20,
});
heatmapVA.setMap(null);

function toggleVA() {
heatmapVA.setMap(heatmapVA.getMap() ? null : map);
}

// Kaiser

var insKaiser = [
  {location: new google.maps.LatLng(37.7710767,-122.45655), weight: 15},
  {location: new google.maps.LatLng(34.0695869,-118.3743441), weight: 7},
  {location: new google.maps.LatLng(39.736849,-105.0607968), weight: 4},
  {location: new google.maps.LatLng(45.5312719,-122.65585), weight:3}
]

var heatmapKaiser = new google.maps.visualization.HeatmapLayer({
  data: insKaiser,
  radius: 20,
});
heatmapKaiser.setMap(null);

function toggleKaiser() {
heatmapKaiser.setMap(heatmapKaiser.getMap() ? null : map);
}

// Liberty Mutual

var insLibertyMutual = [
  {location: new google.maps.LatLng(42.3559939,-71.058403), weight: 10},
  {location: new google.maps.LatLng(47.552234,-122.3638974), weight:3},
  {location: new google.maps.LatLng(39.7744376,-86.2931661), weight: 2},
  {location: new google.maps.LatLng(44.9640768,-89.665819), weight: 1}
]

var heatmapLM = new google.maps.visualization.HeatmapLayer({
  data: insLibertyMutual,
  radius: 20,
});
heatmapLM.setMap(null);

function toggleLM() {
heatmapLM.setMap(heatmapLM.getMap() ? null : map);
}

// METLIFE

var insMetlife = [
  {location: new google.maps.LatLng(35.8273426,-78.8018993), weight: 5},
  {location: new google.maps.LatLng(40.7385758,-74.0225411), weight: 4},
  {location: new google.maps.LatLng(28.7039017,77.18789), weight: 3}
]

var heatmapMet = new google.maps.visualization.HeatmapLayer({
  data: insMetlife,
  radius: 20,
});
heatmapMet.setMap(null);

function toggleMet() {
heatmapMet.setMap(heatmapMet.getMap() ? null : map);
}

// United Health

var insUnitedHealth = [
  {location: new google.maps.LatLng(17.4480113,78.3686211), weight: 1},
  {location: new google.maps.LatLng(44.8756726,-93.5102041), weight: 3},
  {location: new google.maps.LatLng(28.5585028,77.2439189), weight: 1},
  {location: new google.maps.LatLng(40.677942,-74.0512461), weight: 1},

]

var heatmapUH = new google.maps.visualization.HeatmapLayer({
  data: insUnitedHealth,
  radius: 20,
});
heatmapUH.setMap(null);

function toggleUH() {
heatmapUH.setMap(heatmapUH.getMap() ? null : map);
}


// -------------------FINANCIAL SERVICES-------------------

// AMEX

var finAMEX = [
  {location: new google.maps.LatLng(33.6643525,-112.1292396), weight: 13},
  {location: new google.maps.LatLng(40.7018408,-74.3260548), weight: 2},
  {location: new google.maps.LatLng(25.8414667,-80.3713233), weight: 2},
  {location: new google.maps.LatLng(28.6353127,77.2227713), weight: 2},
  {location: new google.maps.LatLng(28.4898629,77.0898065), weight: 2},
]

var heatmapAMEX = new google.maps.visualization.HeatmapLayer({
  data: finAMEX,
  radius: 20,
});
heatmapAMEX.setMap(null);

function toggleAMEX() {
heatmapAMEX.setMap(heatmapAMEX.getMap() ? null : map);
}

// BANK OF AMERICA

var finBOA = [
  {location: new google.maps.LatLng(35.1994882,-81.0021702), weight: 14},
  {location: new google.maps.LatLng(40.7743262,-74.0477526), weight: 10},
  {location: new google.maps.LatLng(32.8010517,-96.9294329), weight: 10},
  {location: new google.maps.LatLng(17.4441577,78.3772802), weight: 7},
  {location: new google.maps.LatLng(13.0588983,80.262883), weight: 4},
  {location: new google.maps.LatLng(18.9284006,72.8203366), weight: 3},
]

var heatmapBOA = new google.maps.visualization.HeatmapLayer({
  data: finBOA,
  radius: 20,
});
heatmapBOA.setMap(null);

function toggleBOA() {
heatmapBOA.setMap(heatmapBOA.getMap() ? null : map);
}

// BNP PARIBAS

var finBNP = [
  {location: new google.maps.LatLng(48.8684172,2.323903), weight: 8},
  {location: new google.maps.LatLng(51.519704,-0.145971), weight: 2},
  {location: new google.maps.LatLng(19.0944275,72.8187576), weight: 2},
]

var heatmapBNP = new google.maps.visualization.HeatmapLayer({
  data: finBNP,
  radius: 20,
});
heatmapBNP.setMap(null);

function toggleBNP() {
heatmapBNP.setMap(heatmapBNP.getMap() ? null : map);
}

// CHARLES SCHWAB

var finCharlesSchwab = [
  {location: new google.maps.LatLng(33.4875021,-112.2063412), weight: 3},
  {location: new google.maps.LatLng(39.7761192,-105.3481713), weight: 2},
  {location: new google.maps.LatLng(37.7677042,-122.5293728), weight: 2},
  {location: new google.maps.LatLng(30.3840311,-97.8217246), weight: 2},
]

var heatmapCS = new google.maps.visualization.HeatmapLayer({
  data: finCharlesSchwab,
  radius: 20,
});
heatmapCS.setMap(null);

function toggleCS() {
heatmapCS.setMap(heatmapCS.getMap() ? null : map);
}

// FIDELITY

var finFidelity = [
  {location: new google.maps.LatLng(42.3502143,-71.0948653), weight: 20},
  {location: new google.maps.LatLng(12.9493177,77.642588), weight: 8},
  {location: new google.maps.LatLng(28.4595012,77.0244496), weight: 2},
  {location: new google.maps.LatLng(13.0101382,80.2090277), weight: 2},
  {location: new google.maps.LatLng(35.8164004,-78.8769023), weight: 6},
  {location: new google.maps.LatLng(39.139174,-84.5878585), weight:1},
  {location: new google.maps.LatLng(39.736177,-104.8945526), weight: 1},
]

var heatmapFidelity = new google.maps.visualization.HeatmapLayer({
  data: finFidelity,
  radius: 20,
});
heatmapFidelity.setMap(null);

function toggleFidelity() {
heatmapFidelity.setMap(heatmapFidelity.getMap() ? null : map);
}

// JP MORGAN CHASE

var finJPMorganChase = [
  {location: new google.maps.LatLng(40.7278994,-74.0264967), weight:23},
  {location: new google.maps.LatLng(19.1802397,72.8296442), weight:15},
  {location: new google.maps.LatLng(39.9674367,-83.0637069), weight:15},
  {location: new google.maps.LatLng(39.9527745,-75.1703743), weight: 8},
  {location: new google.maps.LatLng(55.8612997,-4.2660748), weight: 2},
  {location: new google.maps.LatLng(50.7434587,-1.832512), weight: 2},
  {location: new google.maps.LatLng(51.5529337,-0.2941365), weight: 2},
]

var heatmapJP = new google.maps.visualization.HeatmapLayer({
  data: finJPMorganChase,
  radius: 20,
});
heatmapJP.setMap(null);

function toggleJP() {
heatmapJP.setMap(heatmapJP.getMap() ? null : map);
}

// MORGAN STANLEY

var finMorganStanley = [
  {location: new google.maps.LatLng(40.7675857,-73.9631356), weight: 12},
  {location: new google.maps.LatLng(19.1735322,72.8294737), weight: 5},
  {location: new google.maps.LatLng(55.8604357,-4.2677508), weight: 2},
]

var heatmapMS = new google.maps.visualization.HeatmapLayer({
  data: finMorganStanley,
  radius: 20,
});
heatmapMS.setMap(null);

function toggleMS() {
heatmapMS.setMap(heatmapMS.getMap() ? null : map);
}

// RBS

var finRBS = [
  {location: new google.maps.LatLng(51.486294,-0.354797), weight: 3},
  {location: new google.maps.LatLng(28.4919046,77.0893079), weight:4},
  {location: new google.maps.LatLng(28.6480211,77.1486849), weight:4},
  {location: new google.maps.LatLng(13.0649179,80.2459271), weight:3},
  {location: new google.maps.LatLng(55.955688,-3.1908556), weight: 3},
  {location: new google.maps.LatLng(12.9722957,77.593056), weight:1},
]

var heatmapRBS = new google.maps.visualization.HeatmapLayer({
  data: finRBS,
  radius: 20,
});
heatmapRBS.setMap(null);

function toggleRBS() {
heatmapRBS.setMap(heatmapRBS.getMap() ? null : map);
}

// BANCO SANTANDER

var finSantander = [
  {location: new google.maps.LatLng(-23.5287181,-46.6649501), weight: 2},
  {location: new google.maps.LatLng(40.4325231,-3.7409118), weight:2},
  {location: new google.maps.LatLng(51.5121864,-0.1007766), weight: 2},
]

var heatmapSAN = new google.maps.visualization.HeatmapLayer({
  data: finSantander,
  radius: 20,
});
heatmapSAN.setMap(null);

function toggleSAN() {
heatmapSAN.setMap(heatmapSAN.getMap() ? null : map);
}

// WELLS FARGO

var finWellsFargo = [
  {location: new google.maps.LatLng(35.2329701,-80.8576748), weight: 15},
  {location: new google.maps.LatLng(37.7650336,-122.4703205), weight: 11},
  {location: new google.maps.LatLng(44.9761769,-93.3154374), weight: 8},
  {location: new google.maps.LatLng(12.9846362,77.6930473), weight: 7},
  {location: new google.maps.LatLng(17.4239263,78.3762878), weight: 6},
  {location: new google.maps.LatLng(39.744158,-104.9892584), weight: 1},
  {location: new google.maps.LatLng(41.5817303,-93.6618591), weight: 4},
  {location: new google.maps.LatLng(33.704796,-117.9586382), weight:1},
  {location: new google.maps.LatLng(33.476284,-112.1294446), weight: 6},
]

var heatmapWF = new google.maps.visualization.HeatmapLayer({
  data: finWellsFargo,
  radius: 20,
});
heatmapWF.setMap(null);

function toggleWF() {
heatmapWF.setMap(heatmapWF.getMap() ? null : map);
}
