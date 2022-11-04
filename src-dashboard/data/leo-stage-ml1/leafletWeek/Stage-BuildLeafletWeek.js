
//Leaflet integration file for chartjs dashboard. Do not modify - Adam



  function popitup(url) {
    mywindow= window.open(url, 'mywindow', 'width=590,height=620');
    if (window.focus) {mywindow.focus()}
  }    

  var highlightStyle = {
    weight: 2,
    radius: 10,
    opacity: 1,
    fillOpacity: 1,
  };

  var defaultStyle = {
    weight: 2,
    radius: 5,
    opacity: 0.8,
    fillOpacity: 0.8,
  };

  function onEachFeature(feature, layer) {
    var popupContent = "<p>";
    if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
    }
    layer.on('mouseover', function() { layer.setStyle(highlightStyle); });
    layer.on('mouseout', function() { layer.setStyle(defaultStyle); });
    layer.bindPopup(popupContent);
  }

  var cosmicMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png',
    {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    maxZoom: 18,
    minZoom: 2,}
  );
  
  var southWest = L.latLng(-89.99, -180),
  northEast = L.latLng(89.99, 180),
  bounds = L.latLngBounds(southWest, northEast);
  
  var map = L.map('mapid', {
    zoomSnap: 0.5,
    zoomDelta: 0.5,
    maxBounds: bounds,
    layers: [cosmicMap]
  })
  
  .setView([ 0.0, 0.0 ], 2.8)

  L.Control.Layers.extend({
    onAdd: function () {
    this._initLayout();
    this._update();
    this._addButton();
    return this._container;
    },
    _addButton: function () {
    var elements = this._container.getElementsByClassName('leaflet-control-layers-list');
    var button = L.DomUtil.create('button', 'my-button-class', elements[0]);
    button.textContent = 'Close control';
    L.DomEvent.on(button, 'click', function(e){
      L.DomEvent.stop(e);
      this._collapse();
      }, this);
    }
  });

  L.Control.Layers.include({
    getOverlays: function() {
    // create hash to hold all layers
    var control, layers;
    layers = {};
    control = this;

    // loop thru all layers in control
    control._layers.forEach(function(obj) {
    var layerName;

    // check if layer is an overlay
    if (obj.overlay) {
      // get name of overlay
      layerName = obj.name;
      // store whether it's present on the map or not
      //return layers[layerName] = control._map.hasLayer(obj.layer);
      //alert(layerName + "=" + control._map.hasLayer(obj.layer));
      localStorage.setItem(layerName,control._map.hasLayer(obj.layer));
      //alert(localStorage.getItem(layerName));
      }
    });

    //return layers;
    }
  });

  var controlLayers = new L.Control.Layers().addTo(map);

  var html_coseqrt_fm_01_good = L.geoJson([coseqrt_fm_01_good], {
    style: function (feature) {
      return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "#454545",
        color:     "#454545",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });
 
  html_coseqrt_fm_01_good.addTo(map);
  controlLayers.addOverlay(html_coseqrt_fm_01_good, 'COSEQRT FM 01 Good');

  var html_coseqrt_fm_03_good = L.geoJson([coseqrt_fm_03_good], {
    style: function (feature) {
      return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "#454545",
        color:     "#454545",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });
 
  html_coseqrt_fm_03_good.addTo(map);
  controlLayers.addOverlay(html_coseqrt_fm_03_good, 'COSEQRT FM 03 Good');

  var html_coseqrt_fm_04_good = L.geoJson([coseqrt_fm_04_good], {
    style: function (feature) {
      return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "#454545",
        color:     "#454545",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });
 
  html_coseqrt_fm_04_good.addTo(map);
  controlLayers.addOverlay(html_coseqrt_fm_04_good, 'COSEQRT FM 04 Good');

  var html_coseqrt_fm_05_good = L.geoJson([coseqrt_fm_05_good], {
    style: function (feature) {
      return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "#454545",
        color:     "#454545",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });
 
  html_coseqrt_fm_05_good.addTo(map);
  controlLayers.addOverlay(html_coseqrt_fm_05_good, 'COSEQRT FM 05 Good');

  var html_coseqrt_fm_06_good = L.geoJson([coseqrt_fm_06_good], {
    style: function (feature) {
      return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 5,
        fillColor: "#454545",
        color:     "#454545",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      });
    }
  });
 
  html_coseqrt_fm_06_good.addTo(map);
  controlLayers.addOverlay(html_coseqrt_fm_06_good, 'COSEQRT FM 06 Good');
  
  // Legends for the bottomright and the topright of the screen
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
    labels = [];
    div.innerHTML += '<B>Legend</B>'    
    div.innerHTML += '<TABLE>'
      
    div.innerHTML += '<TR><TD valign=middle>&nbsp;&nbsp;<i style="background:#0686e8; width:12px; height:12px; margin-top:10px"></i>&nbsp;&nbsp;COSEQRT (Count 24036)<BR></TD></TR>'

    div.innerHTML += '</TABLE>'; 
    return div;
  };
  
  legend.addTo(map);
  L.control.mousePosition().addTo(map);
