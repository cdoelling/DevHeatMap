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

// ------------------MANUFACTURING----------------------

// 3M

var man3M = [
  {location: new google.maps.LatLng(44.9832667,-93.4056392), weight: 2},
  {location: new google.maps.LatLng(40.6571464,-111.9091496), weight: 1},
  {location: new google.maps.LatLng(30.4103831,-97.828851), weight: 1},
]

var heatmap3M = new google.maps.visualization.HeatmapLayer({
  data: man3M,
  radius: 20,
});
heatmap3M.setMap(null);

function toggle3M() {
heatmap3M.setMap(heatmap3M.getMap() ? null : map);
}

// Coke
var manCOKE = [
  {location: new google.maps.LatLng(33.7628269,-84.3950867), weight: 6},
  {location: new google.maps.LatLng(14.4394826,120.8595778), weight: 1},
  {location: new google.maps.LatLng(28.6290627,77.0799123), weight: 1},
  {location: new google.maps.LatLng(40.094136,29.8709432), weight: 1},
]

var heatmapCOKE = new google.maps.visualization.HeatmapLayer({
  data: manCOKE,
  radius: 20,
});
heatmapCOKE.setMap(null);

function toggleCOKE() {
heatmapCOKE.setMap(heatmapCOKE.getMap() ? null : map);
}

// Daimler AG
var manDAIMLER = [
  {location: new google.maps.LatLng(48.7509924,9.0058357), weight: 2},
]

var heatmapDIAMLER = new google.maps.visualization.HeatmapLayer({
  data: manDAIMLER,
  radius: 20,
});
heatmapDIAMLER.setMap(null);

function toggleDIAMLER() {
heatmapDIAMLER.setMap(heatmapDIAMLER.getMap() ? null : map);
}

// Hitatchi
var manHitatchi = [
  {location: new google.maps.LatLng(37.7244089,-122.5238149), weight: 3},
  {location: new google.maps.LatLng(42.3507945,-71.4672718), weight: 2},
  {location: new google.maps.LatLng(35.6829776,139.7638965), weight: 1},
  {location: new google.maps.LatLng(52.7968983,-3.376447), weight: 1},

]

var heatmapHIT = new google.maps.visualization.HeatmapLayer({
  data: manHitatchi,
  radius: 20,
});
heatmapHIT.setMap(null);

function toggleHIT() {
heatmapHIT.setMap(heatmapHIT.getMap() ? null : map);
}

// JOHNSON & JOHNSON
var manJohnson = [
  {location: new google.maps.LatLng(42.4312432,-78.7414918), weight: 7},
  {location: new google.maps.LatLng(-23.560238,-46.7105901), weight: 2},
  {location: new google.maps.LatLng(9.9872248,-75.2848414), weight: 2},
  {location: new google.maps.LatLng(51.4930324,3.7215603), weight: 1},

]

var heatmapJJ = new google.maps.visualization.HeatmapLayer({
  data: manJohnson,
  radius: 20,
});
heatmapJJ.setMap(null);

function toggleJJ() {
heatmapJJ.setMap(heatmapJJ.getMap() ? null : map);
}

// LOCKHEED MARTIN
var manLockheedMartin = [
  {location: new google.maps.LatLng(38.9465042,-77.3963338), weight: 5},
  {location: new google.maps.LatLng(38.9434773,-78.2373637), weight: 3},
  {location: new google.maps.LatLng(28.4919595,-81.4091545), weight: 3},
  {location: new google.maps.LatLng(39.7804055,-105.3261052), weight: 2},

]

var heatmapLockheed = new google.maps.visualization.HeatmapLayer({
  data: manLockheedMartin,
  radius: 20,
});
heatmapLockheed.setMap(null);

function toggleLockheed() {
heatmapLockheed.setMap(heatmapLockheed.getMap() ? null : map);
}

// PFIZER
var manPfizer = [
  {location: new google.maps.LatLng(40.7211443,-74.7357104), weight: 4},
  {location: new google.maps.LatLng(40.1050569,-75.5556741), weight: 2},
  {location: new google.maps.LatLng(51.2657784,-0.2530503), weight: 1},

]

var heatmapPfizer = new google.maps.visualization.HeatmapLayer({
  data: manPfizer,
  radius: 20,
});
heatmapPfizer.setMap(null);

function togglePfizer() {
heatmapPfizer.setMap(heatmapPfizer.getMap() ? null : map);
}

// SAMSUNG
var manSamsung = [
  {location: new google.maps.LatLng(12.9800184,77.6931945), weight: 7},
  {location: new google.maps.LatLng(37.4926392,127.0253423), weight: 7},
  {location: new google.maps.LatLng(28.6126141,77.3633831), weight: 5},
  {location: new google.maps.LatLng(37.7981858,-122.4034496), weight: 3},

]

var heatmapSamsung = new google.maps.visualization.HeatmapLayer({
  data: manSamsung,
  radius: 20,
});
heatmapSamsung.setMap(null);

function toggleSamsung() {
heatmapSamsung.setMap(heatmapSamsung.getMap() ? null : map);
}

// STANLEY BLACK & DECKER

var manBlackDecker = [
  {location: new google.maps.LatLng(39.3980238,-76.5910378), weight: 1},
  {location: new google.maps.LatLng(41.6881598,-72.7698878), weight: 1},
]

var heatmapBD = new google.maps.visualization.HeatmapLayer({
  data: manBlackDecker,
  radius: 20,
});
heatmapBD.setMap(null);

function toggleBD() {
heatmapBD.setMap(heatmapBD.getMap() ? null : map);
}

// VOLKSWAGEN
var manVolkswagen = [
  {location: new google.maps.LatLng(42.4601992,-83.6656642), weight: 1},
  {location: new google.maps.LatLng(52.2182917,-2.3553725), weight: 1},
]

var heatmapVW = new google.maps.visualization.HeatmapLayer({
  data: manVolkswagen,
  radius: 20,
});
heatmapVW.setMap(null);

function toggleVW() {
heatmapVW.setMap(heatmapVW.getMap() ? null : map);
}

// -----------------------ENERGY-------------------------

// BP
var manBP = [
  {location: new google.maps.LatLng(51.5775142,-0.3528259), weight: 6},
  {location: new google.maps.LatLng(29.7480584,-95.641631), weight: 3},
  {location: new google.maps.LatLng(41.8084052,-87.8360013), weight: 2},
  {location: new google.maps.LatLng(2.9256438,101.3373946), weight: 1},

]

var heatmapBP = new google.maps.visualization.HeatmapLayer({
  data: manBP,
  radius: 20,
});
heatmapBP.setMap(null);

function toggleBP() {
heatmapBP.setMap(heatmapBP.getMap() ? null : map);
}

// Chevron
var manChevron = [
  {location: new google.maps.LatLng(29.8671997,-95.4734184), weight: 4},
  {location: new google.maps.LatLng(37.7690505,-122.4459143), weight: 4},
  {location: new google.maps.LatLng(15.6096957,119.5553775), weight: 2},
]

var heatmapChevron = new google.maps.visualization.HeatmapLayer({
  data: manChevron,
  radius: 20,
});
heatmapChevron.setMap(null);

function toggleChevron() {
heatmapChevron.setMap(heatmapChevron.getMap() ? null : map);
}

// // Electrice France
// var manElecFrance = [
//   {location: new google.maps.LatLng(29.8671997,-95.4734184), weight: 4},
// ]
//
// var heatmapEF = new google.maps.visualization.HeatmapLayer({
//   data: manElecFrance,
//   radius: 20,
// });
// heatmapEF.setMap(null);
//
// function toggleEF() {
// heatmapEF.setMap(heatmapEF.getMap() ? null : map);
// }

// Exxon
var manExxon = [
  {location: new google.maps.LatLng(29.8825673,-95.7386078), weight: 4},
  {location: new google.maps.LatLng(-23.1177811,-58.5831274), weight: 2},
  {location: new google.maps.LatLng(35.3640486,-60.5840623), weight: 1},
]

var heatmapExxon = new google.maps.visualization.HeatmapLayer({
  data: manExxon,
  radius: 20,
});
heatmapExxon.setMap(null);

function toggleExxon() {
heatmapExxon.setMap(heatmapExxon.getMap() ? null : map);
}

// Hess
var manHess = [
  {location: new google.maps.LatLng(29.9609432,-95.5570536), weight: 1},
]

var heatmapHess = new google.maps.visualization.HeatmapLayer({
  data: manHess,
  radius: 20,
});
heatmapHess.setMap(null);

function toggleHess() {
heatmapHess.setMap(heatmapHess.getMap() ? null : map);
}

// Petro China
var manPetroChina = [
  {location: new google.maps.LatLng(40.0033498,116.4130024), weight: 1},
]

var heatmapPetroChina = new google.maps.visualization.HeatmapLayer({
  data: manPetroChina,
  radius: 20,
});
heatmapPetroChina.setMap(null);

function togglePetroChina() {
heatmapPetroChina.setMap(heatmapPetroChina.getMap() ? null : map);
}

// Phillips 66
var manPhillips66 = [
  {location: new google.maps.LatLng(36.1527447,-95.9947944), weight: 2},
  {location: new google.maps.LatLng(29.7606269,-95.5751856), weight: 1},
]

var heatmapP66= new google.maps.visualization.HeatmapLayer({
  data: manPhillips66,
  radius: 20,
});
heatmapP66.setMap(null);

function toggleP66() {
heatmapP66.setMap(heatmapP66.getMap() ? null : map);
}

// Statoil
var manStatoil = [
  {location: new google.maps.LatLng(58.9542641,5.7393785), weight: 1},
  {location: new google.maps.LatLng(59.9169001,10.6091546), weight: 1},
]

var heatmapStatoil= new google.maps.visualization.HeatmapLayer({
  data: manStatoil,
  radius: 20,
});
heatmapStatoil.setMap(null);

function toggleStatoil() {
heatmapStatoil.setMap(heatmapStatoil.getMap() ? null : map);
}

// Total
var manTotal = [
  {location: new google.maps.LatLng(48.8572015,2.3022585), weight: 2},
  {location: new google.maps.LatLng(51.5234275,-0.2422179), weight: 1},
]

var heatmapTotal= new google.maps.visualization.HeatmapLayer({
  data: manTotal,
  radius: 20,
});
heatmapTotal.setMap(null);

function toggleTotal() {
heatmapTotal.setMap(heatmapTotal.getMap() ? null : map);
}

// Valero

var manValero = [
  {location: new google.maps.LatLng(29.5093749,-98.6725897), weight: 1},
]

var heatmapValero= new google.maps.visualization.HeatmapLayer({
  data: manValero,
  radius: 20,
});
heatmapValero.setMap(null);

function toggleValero() {
heatmapValero.setMap(heatmapValero.getMap() ? null : map);
}

// -----------------------RETAIL--------------------

// ESTEE LAUDER
var retEstee = [
  {location: new google.maps.LatLng(40.7635613,-73.9744958), weight: 2},
]

var heatmapEstee= new google.maps.visualization.HeatmapLayer({
  data: retEstee,
  radius: 20,
});
heatmapEstee.setMap(null);

function toggleEstee() {
heatmapEstee.setMap(heatmapEstee.getMap() ? null : map);
}

// JC PENNY

var retJC = [
  {location: new google.maps.LatLng(33.0815825,-96.8342279), weight: 3},
]

var heatmapJC= new google.maps.visualization.HeatmapLayer({
  data: retJC,
  radius: 20,
});
heatmapJC.setMap(null);

function toggleJC() {
heatmapJC.setMap(heatmapJC.getMap() ? null : map);
}

// KROGER
var retKroger = [
  {location: new google.maps.LatLng(39.2221125,-84.6496881), weight: 4},
]

var heatmapKroger= new google.maps.visualization.HeatmapLayer({
  data: retKroger,
  radius: 20,
});
heatmapKroger.setMap(null);

function toggleKroger() {
heatmapKroger.setMap(heatmapKroger.getMap() ? null : map);
}

// LOWES

var retLowes = [
  {location: new google.maps.LatLng(35.2658315,-80.897715), weight: 2},
]

var heatmapLowes= new google.maps.visualization.HeatmapLayer({
  data: retLowes,
  radius: 20,
});
heatmapLowes.setMap(null);

function toggleLowes() {
heatmapLowes.setMap(heatmapLowes.getMap() ? null : map);
}
// QVC

var retQVC = [
  {location: new google.maps.LatLng(39.8891123,-76.0090209), weight: 2},
]

var heatmapQVC= new google.maps.visualization.HeatmapLayer({
  data: retQVC,
  radius: 20,
});
heatmapQVC.setMap(null);

function toggleQVC() {
heatmapQVC.setMap(heatmapQVC.getMap() ? null : map);
}

// SAFEWAY

var retSafeway = [
  {location: new google.maps.LatLng(37.5204244,-121.3202409), weight: 3},
  {location: new google.maps.LatLng(14.5679488,121.0078652), weight: 2},
  {location: new google.maps.LatLng(33.5318344,-112.2233929), weight: 2},

]

var heatmapSafeway= new google.maps.visualization.HeatmapLayer({
  data: retSafeway,
  radius: 20,
});
heatmapSafeway.setMap(null);

function toggleSafeway() {
heatmapSafeway.setMap(heatmapSafeway.getMap() ? null : map);
}
// SEARS
var retSEARS = [
  {location: new google.maps.LatLng(41.9041786,-87.8599869), weight: 8},
  {location: new google.maps.LatLng(18.5294594,73.8833516), weight: 3},
]

var heatmapSEARS= new google.maps.visualization.HeatmapLayer({
  data: retSEARS,
  radius: 20,
});
heatmapSEARS.setMap(null);

function toggleSEARS() {
heatmapSEARS.setMap(heatmapSEARS.getMap() ? null : map);
}

// TARGET
var retTarget = [
  {location: new google.maps.LatLng(44.9708388,-93.3258154), weight: 12},
  {location: new google.maps.LatLng(12.9533248,77.5657392), weight: 6},
  {location: new google.maps.LatLng(-37.4102631,143.9739731), weight: 1},
]

var heatmapTarget= new google.maps.visualization.HeatmapLayer({
  data: retTarget,
  radius: 20,
});
heatmapTarget.setMap(null);

function toggleTarget() {
heatmapTarget.setMap(heatmapTarget.getMap() ? null : map);
}

// TESCO
var retTESCO = [
  {location: new google.maps.LatLng(12.9770698,77.7176285), weight: 8},
  {location: new google.maps.LatLng(53.9154177,-5.5462351), weight: 4},
]

var heatmapTESCO= new google.maps.visualization.HeatmapLayer({
  data: retTESCO,
  radius: 20,
});
heatmapTESCO.setMap(null);

function toggleTESCO() {
heatmapTESCO.setMap(heatmapTESCO.getMap() ? null : map);
}

// WAL-MART

var retWalMart = [
  {location: new google.maps.LatLng(35.0356253,-78.9743035), weight: 10},
  {location: new google.maps.LatLng(37.7525429,-122.4366338), weight: 5},
  {location: new google.maps.LatLng(12.9801189,77.5765231), weight: 1},
]

var heatmapWalMart= new google.maps.visualization.HeatmapLayer({
  data: retWalMart,
  radius: 20,
});
heatmapWalMart.setMap(null);

function toggleWalMart() {
heatmapWalMart.setMap(heatmapWalMart.getMap() ? null : map);
}

// -----------------------TECHNOLOGY-------------------------

// APPLE
var retApple = [
  {location: new google.maps.LatLng(37.75354,-122.542986), weight: 60},
  {location: new google.maps.LatLng(30.3308374,-97.8877119), weight: 3},
  {location: new google.maps.LatLng(53.2306638,-9.4623484), weight: 3},
]

var heatmapApple= new google.maps.visualization.HeatmapLayer({
  data: retApple,
  radius: 20,
});
heatmapApple.setMap(null);

function toggleApple() {
heatmapApple.setMap(heatmapApple.getMap() ? null : map);
}


// AMAZON
var retAmazon = [
  {location: new google.maps.LatLng(47.6195071,-122.4094562), weight: 70},
  {location: new google.maps.LatLng(13.0121852,77.5539753), weight: 9},
  {location: new google.maps.LatLng(37.6706336,-122.5029756), weight: 7},
]

var heatmapAmazon= new google.maps.visualization.HeatmapLayer({
  data: retAmazon,
  radius: 20,
});
heatmapAmazon.setMap(null);

function toggleAmazon() {
heatmapAmazon.setMap(heatmapAmazon.getMap() ? null : map);
}

// ATLASSIAN
var retAtlassian = [
  {location: new google.maps.LatLng(-33.8672174,151.2047186), weight: 3},
  {location: new google.maps.LatLng(37.7759991,-122.4083852), weight: 2},
  {location: new google.maps.LatLng(30.2755785,-97.7385056), weight: 1},

]

var heatmapAtlassian= new google.maps.visualization.HeatmapLayer({
  data: retAtlassian,
  radius: 20,
});
heatmapAtlassian.setMap(null);

function toggleAtlassian() {
heatmapAtlassian.setMap(heatmapAtlassian.getMap() ? null : map);
}

// CONCUR
var retConcur = [
  {location: new google.maps.LatLng(47.6159353,-122.1990405), weight: 6},
  {location: new google.maps.LatLng(14.5409642,121.0155554), weight: 3},
  {location: new google.maps.LatLng(44.9671189,-93.3478993), weight: 3},
]

var heatmapConcur= new google.maps.visualization.HeatmapLayer({
  data: retConcur,
  radius: 20,
});
heatmapConcur.setMap(null);

function toggleConcur() {
heatmapConcur.setMap(heatmapConcur.getMap() ? null : map);
}

// DELL
var retDell = [
  {location: new google.maps.LatLng(30.3334077,-97.8065734), weight: 13},
  {location: new google.maps.LatLng(12.9364272,77.5847657), weight: 12},
  {location: new google.maps.LatLng(28.6434429,77.0738483), weight: 2},
]

var heatmapDell= new google.maps.visualization.HeatmapLayer({
  data: retDell,
  radius: 20,
});
heatmapDell.setMap(null);

function toggleDell() {
heatmapDell.setMap(heatmapDell.getMap() ? null : map);
}

// HUAWEI

var retHuawei = [
  {location: new google.maps.LatLng(22.746428,113.7138424), weight: 6},
  {location: new google.maps.LatLng(12.9882337,77.6511126), weight: 3},
  {location: new google.maps.LatLng(0.4462084,29.8715601), weight: 2},
]

var heatmapHuawei= new google.maps.visualization.HeatmapLayer({
  data: retHuawei,
  radius: 20,
});
heatmapHuawei.setMap(null);

function toggleHuawei() {
heatmapHuawei.setMap(heatmapHuawei.getMap() ? null : map);
}
// INTEL

var retIntel = [
  {location: new google.maps.LatLng(45.5231332,-122.897381), weight: 17},
  {location: new google.maps.LatLng(32.676531,33.2573247), weight: 12},
  {location: new google.maps.LatLng(37.9565022,-122.4286697), weight:11},
  {location: new google.maps.LatLng(12.9581162,77.7143684), weight:6},
]

var heatmapIntel= new google.maps.visualization.HeatmapLayer({
  data: retIntel,
  radius: 20,
});
heatmapIntel.setMap(null);

function toggleIntel() {
heatmapIntel.setMap(heatmapIntel.getMap() ? null : map);
}
//
// // NETAPP

var retNetApp = [
  {location: new google.maps.LatLng(37.4109028,-122.0132916), weight: 9},
  {location: new google.maps.LatLng(12.9509939,77.6397827), weight: 5},
  {location: new google.maps.LatLng(35.8573291,-78.8877876), weight: 3},
  {location: new google.maps.LatLng(39.8064814,-105.3355127), weight: 1},
  {location: new google.maps.LatLng(42.4572502,-71.4517173), weight: 2},
]

var heatmapNetApp= new google.maps.visualization.HeatmapLayer({
  data: retNetApp,
  radius: 20,
});
heatmapNetApp.setMap(null);

function toggleNetApp() {
heatmapNetApp.setMap(heatmapNetApp.getMap() ? null : map);
}

// // NETFLIX

var retNetflix = [
  {location: new google.maps.LatLng(37.2595896,-121.9648838), weight: 6},
]

var heatmapNetflix= new google.maps.visualization.HeatmapLayer({
  data: retNetflix,
  radius: 20,
});
heatmapNetflix.setMap(null);

function toggleNetflix() {
heatmapNetflix.setMap(heatmapNetflix.getMap() ? null : map);
}


// SALESFORCE
var retSalesForce = [
  {location: new google.maps.LatLng(37.6783365,-122.492136), weight: 27},
  {location: new google.maps.LatLng(41.8905804,-87.6339423), weight: 3},
  {location: new google.maps.LatLng(43.6416526,-79.3801093), weight: 4},
  {location: new google.maps.LatLng(39.8498123,-86.2698343), weight: 3},
  {location: new google.maps.LatLng(39.8584827,-105.2110297), weight: 1},

]

var heatmapSalesForce= new google.maps.visualization.HeatmapLayer({
  data: retSalesForce,
  radius: 20,
});
heatmapSalesForce.setMap(null);

function toggleSalesForce() {
heatmapSalesForce.setMap(heatmapSalesForce.getMap() ? null : map);
}


// -----------------------TELECOM-------------------------

// CHINA MOBILE
// DUETCHE TELEKOM
// KDDI
// ORANGE
// SWISSCOM
// T-MOBILE
// TELEFONICA BRAZIL
// TELSTRA
// TIM BRAZIL
// VERIZON

// -----------------------TRANSPORTATION-------------------------

// BNSF
// BRUSSELS AIR
// FEDEX
// HERTZ
// JETBLUE
// LYFT
// SOUTHWEST
// UBER
// UPS
// UNITED

// -----------------------UTILITIES-------------------------

// CENTERPOINT
// EVERSOURCE
// EXCELON
// FIRST ENERGY
// HYDRO QUEBEC
// PIEDMONT GAS
// PORTLAND ELECTRIC
// SCANA CORP
// SOUTHWEST GAS
// XCEL
