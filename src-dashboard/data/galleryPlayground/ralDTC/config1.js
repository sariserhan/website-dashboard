
var pathID = "/data/galleryPlayground/ralDTC/";

var galleryConfig1 = {
  
  "group3": {
    "captions": [
      "COSMIC-2 REF, Past week" ,
      "Spire REF, Past week",
      "KOMPSat-5 REF, Past week",
      "Paz REF, Past week",
      "Geoopt REF, Past week",
      "Legend for Latitude Ranges, Degrees",
    ],
    "header": "Height (KM) vs Percent Error",
    "images": [
      "week/total_variance.c2.gps_ref.past_week.lat_bands_obs_err.png",
      "week/total_variance.spire.gps_ref.past_week.lat_bands_obs_err.png",
      "week/total_variance.kom.gps_ref.past_week.lat_bands_obs_err.png",
      "week/total_variance.paz.gps_ref.past_week.lat_bands_obs_err.png",
      "week/total_variance.geoopt.gps_ref.past_week.lat_bands_obs_err.png",
      "lat_bands.png",
     ],
    "numCol": 6,
    "title": "RAL DTC Refractivity Variance Plots | All Missions"
  },
  "group4": {
    "captions": [
      "COSMIC-2 BND, Past week",
      "Spire BND, Past week",
      "KOMPSat-5 BND, Past week",
      "Paz BND, Past week",
      "Geoopt BND, Past week",
      "Legend for Latitude Ranges, Degrees",
    ],
    "header": "Impact Height (KM) vs Percent Error",
    "images": [
      "week/total_variance.c2.gps_bnd.past_week.lat_bands_obs_err.png",
      "week/total_variance.spire.gps_bnd.past_week.lat_bands_obs_err.png",
      "week/total_variance.kom.gps_bnd.past_week.lat_bands_obs_err.png",
      "week/total_variance.paz.gps_bnd.past_week.lat_bands_obs_err.png",
      "week/total_variance.geoopt.gps_bnd.past_week.lat_bands_obs_err.png",
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Bending Angle Variance Plots | All Missions"
  },
  "group5": {
    "captions": [
      "COSMIC-2 REF, Past month" ,
      "Spire REF, Past month",
      "KOMPSat-5 REF, Past month",
      "Paz REF, Past month",
      "Geoopt REF, Past month",
      "Legend for Latitude Ranges, Degrees",
    ], 
    "header": "Height (KM) vs Percent Error",
    "images": [
      "month/total_variance.c2.gps_ref.past_month.lat_bands_obs_err.png",
      "month/total_variance.spire.gps_ref.past_month.lat_bands_obs_err.png",
      "month/total_variance.kom.gps_ref.past_month.lat_bands_obs_err.png",
      "month/total_variance.paz.gps_ref.past_month.lat_bands_obs_err.png",
      "month/total_variance.geoopt.gps_ref.past_month.lat_bands_obs_err.png",
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Refractivity Variance Plots | All Missions"
  },
  "group6": {
    "captions": [
      "COSMIC-2 BND, Past month",
      "Spire BND, Past month",
      "KOMPSat-5 BND, Past month",
      "Paz BND, Past month",
      "Geoopt BND, Past month",
      "Legend for Latitude Ranges, Degrees"
    ], 
    "header": "Impact Height (KM) vs Percent Error",
    "images": [
      "month/total_variance.c2.gps_bnd.past_month.lat_bands_obs_err.png",
      "month/total_variance.spire.gps_bnd.past_month.lat_bands_obs_err.png",
      "month/total_variance.kom.gps_bnd.past_month.lat_bands_obs_err.png",
      "month/total_variance.paz.gps_bnd.past_month.lat_bands_obs_err.png",
      "month/total_variance.geoopt.gps_bnd.past_month.lat_bands_obs_err.png",
      "lat_bands.png",
    ],
    "numCol": 6,
    "title": "RAL DTC Bending Angle Variance Plots | All Missions"
  }
};

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

