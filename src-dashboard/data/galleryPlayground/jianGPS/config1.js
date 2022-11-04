
var pathID = "/data/galleryPlayground/jianGPS/";


/* GPSSatClkDiffMean.png  GPSSatClkDiffSTD.png  GPSSatClkDiffTimeSeries.png */


var galleryConfig1 = {
  
  "group1": {
    "captions": [
      "GPSSatClkDiffTimeSeries, latest" ,
      "GPSSatClkDiffMean, latest",
      "GPSSatClkDiffSTD, latest",
    ],
    "header": "Nanoseconds",
    "images": [
      "gnss-dev-ml/GPSSatClkDiffTimeSeries.png",
       "gnss-dev-ml/GPSSatClkDiffMean.png",
       "gnss-dev-ml/GPSSatClkDiffSTD.png", 
    ],
    "numCol": 6,
    "title": "GPS Satellite Clock Differences | gnss-dev-ml"
  }};

/*
Example config object below, with 2 sample groups

var galleryConfig1 = {
  "group1": {
    "captions": [
      "COSMIC-2 BND, Past month",
      "COSMIC-2 REF, Past month" ,
      "GeoOptics BND, Past month",
      "GeoOptics REF, Past month",
      "Kompsat-5 BND, Past month",
      "Kompsat-5 REF, Past month",
      "Paz BND, Past month",
      "Paz REF, Past month",
    ], 
    "header": "Percent Error vs Height (KM)",
    "images": [
      "total_variance.c2.gps_bnd.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.c2.gps_ref.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.geoopt.gps_bnd.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.geoopt.gps_ref.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.kom.gps_bnd.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.kom.gps_ref.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.paz.gps_bnd.2020121400-2021011500.lat_bands_obs_err.png",
      "total_variance.paz.gps_ref.2020121400-2021011500.lat_bands_obs_err.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Variance Example Plots | All Missions"
  },
  "group2": {
    "captions": [
      "Latitude Ranges, Degrees",
    ],
    "header": "All Missions",
    "images": [
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "Legend for Latitude Band Ranges | Degrees"
  },
   "group1": {
    "captions": [
      "COSMIC-2 REF, Past day" ,
      "GeoOptics REF, Past day",
      "KOMPSat-5 REF, Past day",
      "Paz REF, Past day",
      "Legend for Latitude Ranges, Degrees",
    ],
    "header": "Height (KM) vs Percent Error",
    "images": [
      "day/total_variance.c2.gps_ref.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.geoopt.gps_ref.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.kom.gps_ref.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.paz.gps_ref.2021061900-2021061918.lat_bands_obs_err.png",
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Refractivity Variance Plots | All Missions"
  },
  "group2": {
    "captions": [
      "COSMIC-2 BND, Past day",
      "GeoOptics BND, Past day",
      "KOMPSat-5 BND, Past day",
      "Paz BND, Past day",
      "Legend for Latitude Ranges, Degrees",
    ],
    "header": "Impact Height (KM) vs Percent Error",
    "images": [
      "day/total_variance.geoopt.gps_bnd.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.geoopt.gps_bnd.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.kom.gps_bnd.2021061900-2021061918.lat_bands_obs_err.png",
      "day/total_variance.paz.gps_bnd.2021061900-2021061918.lat_bands_obs_err.png",
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Bending Angle Variance Plots | All Missions"
  },
};
*/

