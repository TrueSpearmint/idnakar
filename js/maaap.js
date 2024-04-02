//Нужно, чтобы карта отображалась целиком, а не только в углу. Using setInterval can help the reloading or refreshing of the map itself. 
//https://stackoverflow.com/questions/42204194/leaflet-only-renders-into-one-corner		https://leafletjs.com/reference.html#map-invalidatesize
  setInterval(function() {
     map.invalidateSize();
  }, 0);

//Map coordinating//
var map = L.map('map').setView([58.149035, 52.732186], 17);

//Задаём зум больше стандартного максимального 18//
map.setMaxZoom(22);

//https://devdocs.io/leaflet~1.8/ Задать уровни появления слоёв, искать на странцие Map Panes. Без этого не всегда нужные слои будут наверху//
map.createPane('q');
map.getPane('q').style.zIndex = 310;
map.getPane('q').style.pointerEvents = 'none';					

map.createPane('s');
map.getPane('s').style.zIndex = 315;
map.getPane('s').style.pointerEvents = 'none';		

//Загрузка подложек из интернета//
//Mapbox_Outdoors_Idnakar layer//
var Mapbox_Outdoors_Idnakar = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/clg4uvia8002d01jzl5o5igoc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJjbHVpbDl1bXcwNTg1MmltdjI2NmpsNXdpIn0.hTURiBYjIAijbKZnfQPdrg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 'q',
maxZoom: 22,
});
Mapbox_Outdoors_Idnakar.addTo(map);

//Mapbox_Idnakar layer//
var Mapbox_Idnakar = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/clg2kgy6n000u01ms3xmq7lbe/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJjbHVpbDl1bXcwNTg1MmltdjI2NmpsNXdpIn0.hTURiBYjIAijbKZnfQPdrg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 's',
maxZoom: 22,
});

//Mapbox_Satellite//
var Mapbox_Satellite = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/cl8j3je6x002815o59qa0zaeu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJjbHVpbDl1bXcwNTg1MmltdjI2NmpsNXdpIn0.hTURiBYjIAijbKZnfQPdrg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 'q',
maxZoom: 22,
});

//Загрузка подложек с компьютера//
//Компиляция археологических отчётов//
var otcheti = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/otcheti/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22
});

//Разграфка для отчётов//
var razgrafka = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/razgrafka/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//План в восточной части//
var topoplan600 = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/topoplan600/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Топоплан Иднакара//
var topoplan = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/topoplan/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Ортофото цветокор WGS 84//
var orthophoto_color = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/orthophoto_color/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20 //Зум до которого есть тайлы
});

//Ортофото точное WGS 84//
var orthophoto_accurate = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/orthophoto_accurate/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//ЦММ среднее//
var cmm = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/cmm/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Снимок 1975 года//
var keyhole_d3c = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/keyhole_d3c/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Снимок 1965 года//
var keyhole_dzb = L.tileLayer('https://storage.yandexcloud.net/tileserver/idnakar/tiles/keyhole_dzb/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Layer controller//
var baseMaps = {

};

var overlays = {
  "С подложкой": Mapbox_Outdoors_Idnakar,
  "Без подложки": Mapbox_Idnakar,
  "Отчёты": otcheti,
  "Разграфка": razgrafka,
  "Топоплан 1:600": topoplan600,
  "Топоплан 1:2000": topoplan,
  "ЦММ": cmm,
  "Ортофото (точное)": orthophoto_accurate,
  "Ортофото (цветокор)": orthophoto_color,
  "Снимок 1975 года": keyhole_d3c,
  "Снимок 1965 года": keyhole_dzb,
  "Современный снимок": Mapbox_Satellite,
};

var ControlLayers = L.control.layers(baseMaps, overlays,{autoZIndex:false}).addTo(map); // autoZIndex:false - чем выше слой в ControlLayers, тем выше его (z-index)отображение 
var ControlScale = L.control.scale().addTo(map);

//Найти расположение пользователя
L.control.locate({flyTo: true}).addTo(map);	

//OpacityControl
L.control.opacity(overlays, {collapsed:true}).addTo(map);
