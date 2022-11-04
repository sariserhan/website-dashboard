
//Leaflet integration file for chartjs dashboard. Do not modify - COSMIC UCAR


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

  var html_spireert_fm_99_good = L.geoJson([spireert_fm_99_good], {
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
 
  html_spireert_fm_99_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_99_good, 'SPIREERT FM 99 Good');

  var html_spireert_fm_100_good = L.geoJson([spireert_fm_100_good], {
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
 
  html_spireert_fm_100_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_100_good, 'SPIREERT FM 100 Good');

  var html_spireert_fm_102_good = L.geoJson([spireert_fm_102_good], {
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
 
  html_spireert_fm_102_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_102_good, 'SPIREERT FM 102 Good');

  var html_spireert_fm_103_good = L.geoJson([spireert_fm_103_good], {
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
 
  html_spireert_fm_103_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_103_good, 'SPIREERT FM 103 Good');

  var html_spireert_fm_104_good = L.geoJson([spireert_fm_104_good], {
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
 
  html_spireert_fm_104_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_104_good, 'SPIREERT FM 104 Good');

  var html_spireert_fm_106_good = L.geoJson([spireert_fm_106_good], {
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
 
  html_spireert_fm_106_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_106_good, 'SPIREERT FM 106 Good');

  var html_spireert_fm_115_good = L.geoJson([spireert_fm_115_good], {
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
 
  html_spireert_fm_115_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_115_good, 'SPIREERT FM 115 Good');

  var html_spireert_fm_116_good = L.geoJson([spireert_fm_116_good], {
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
 
  html_spireert_fm_116_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_116_good, 'SPIREERT FM 116 Good');

  var html_spireert_fm_117_good = L.geoJson([spireert_fm_117_good], {
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
 
  html_spireert_fm_117_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_117_good, 'SPIREERT FM 117 Good');

  var html_spireert_fm_118_good = L.geoJson([spireert_fm_118_good], {
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
 
  html_spireert_fm_118_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_118_good, 'SPIREERT FM 118 Good');

  var html_spireert_fm_119_good = L.geoJson([spireert_fm_119_good], {
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
 
  html_spireert_fm_119_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_119_good, 'SPIREERT FM 119 Good');

  var html_spireert_fm_120_good = L.geoJson([spireert_fm_120_good], {
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
 
  html_spireert_fm_120_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_120_good, 'SPIREERT FM 120 Good');

  var html_spireert_fm_122_good = L.geoJson([spireert_fm_122_good], {
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
 
  html_spireert_fm_122_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_122_good, 'SPIREERT FM 122 Good');

  var html_spireert_fm_124_good = L.geoJson([spireert_fm_124_good], {
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
 
  html_spireert_fm_124_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_124_good, 'SPIREERT FM 124 Good');

  var html_spireert_fm_125_good = L.geoJson([spireert_fm_125_good], {
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
 
  html_spireert_fm_125_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_125_good, 'SPIREERT FM 125 Good');

  var html_spireert_fm_126_good = L.geoJson([spireert_fm_126_good], {
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
 
  html_spireert_fm_126_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_126_good, 'SPIREERT FM 126 Good');

  var html_spireert_fm_127_good = L.geoJson([spireert_fm_127_good], {
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
 
  html_spireert_fm_127_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_127_good, 'SPIREERT FM 127 Good');

  var html_spireert_fm_128_good = L.geoJson([spireert_fm_128_good], {
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
 
  html_spireert_fm_128_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_128_good, 'SPIREERT FM 128 Good');

  var html_spireert_fm_129_good = L.geoJson([spireert_fm_129_good], {
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
 
  html_spireert_fm_129_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_129_good, 'SPIREERT FM 129 Good');

  var html_spireert_fm_132_good = L.geoJson([spireert_fm_132_good], {
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
 
  html_spireert_fm_132_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_132_good, 'SPIREERT FM 132 Good');

  var html_spireert_fm_133_good = L.geoJson([spireert_fm_133_good], {
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
 
  html_spireert_fm_133_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_133_good, 'SPIREERT FM 133 Good');

  var html_spireert_fm_134_good = L.geoJson([spireert_fm_134_good], {
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
 
  html_spireert_fm_134_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_134_good, 'SPIREERT FM 134 Good');

  var html_spireert_fm_135_good = L.geoJson([spireert_fm_135_good], {
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
 
  html_spireert_fm_135_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_135_good, 'SPIREERT FM 135 Good');

  var html_spireert_fm_143_good = L.geoJson([spireert_fm_143_good], {
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
 
  html_spireert_fm_143_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_143_good, 'SPIREERT FM 143 Good');

  var html_spireert_fm_148_good = L.geoJson([spireert_fm_148_good], {
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
 
  html_spireert_fm_148_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_148_good, 'SPIREERT FM 148 Good');

  var html_spireert_fm_150_good = L.geoJson([spireert_fm_150_good], {
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
 
  html_spireert_fm_150_good.addTo(map);
  controlLayers.addOverlay(html_spireert_fm_150_good, 'SPIREERT FM 150 Good');
  
  // Legends for the bottomright and the topright of the screen
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
    labels = [];
    div.innerHTML += '<B>Legend</B>'    
    div.innerHTML += '<TABLE>'
      
    div.innerHTML += '<TR><TD valign=middle>&nbsp;&nbsp;<i style="background:#0686e8; width:12px; height:12px; margin-top:10px"></i>&nbsp;&nbsp;SPIREERT (Count 26531)<BR></TD></TR>'

    div.innerHTML += '</TABLE>'; 
    return div;
  };
  
  legend.addTo(map);
  L.control.mousePosition().addTo(map);
