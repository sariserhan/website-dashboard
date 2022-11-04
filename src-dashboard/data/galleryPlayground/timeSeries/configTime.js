var pathID  ="/data/galleryPlayground/timeSeries/";



var galleryConfig1 = {

 "group1": {
    "captions": [
      "CH,",
      "ML," ,
    ],
    "header": "All Missions",
    "images": [
      "output-ch/occ_totals_neutral.png",
      "output-ml/occ_totals_neutral.png",

       ],

    "numCol":2 ,
    "title": "Occ Counts"
  },

  "group2": {
    "captions": [
      "Cosmic-2 - CH,",
      "Cosmic-2 - ML," ,
      "Paz - CH,",
      "Paz - ML,",
      "KOMPSAT-5 - CH,",
      "KOMPSAT-5 - ML,",
      "Spire - CH,",
      "Spire - ML,",
      "Geooptics - CH,",
      "Geooptics - ML,",
    ],
    "header": "All Missions",
    "images": [
      "output-ch/cosmic-2_counts_num_sats_neutral.png",
      "output-ml/cosmic-2_counts_num_sats_neutral.png",
      "output-ch/paz_counts_num_sats_neutral.png",
      "output-ml/paz_counts_num_sats_neutral.png",
      "output-ch/kompsat-5_counts_num_sats_neutral.png",
      "output-ml/kompsat-5_counts_num_sats_neutral.png",
      "output-ch/spire_counts_num_sats_neutral.png",
      "output-ml/spire_counts_num_sats_neutral.png",
      "output-ch/geooptics_counts_num_sats_neutral.png",
      "output-ml/geooptics_counts_num_sats_neutral.png",
       ],


    "numCol": 8,
    "title": "Occ Counts and Num Sats"
  },


  "group3": {
    "captions": [
      "Mean - CH,",
      "Mean - ML,",
      "Median - CH,",
      "Median - ML,",
      "Max - CH,",
      "Max - ML,",
  
    ],
    "header": "All Missions",
    "images": [
      "output-ch/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_mean.png",
      "output-ml/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_mean.png",
      "output-ch/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_median.png",
      "output-ml/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_median.png",
      "output-ch/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_max.png",
      "output-ml/cosmic-2_geooptics_kompsat-5_paz_spire_neutral_occ_snr_l1_max.png",
      
   ],

     "numCol": 6,
    "title": "SNRs "
  },

  "group4": {
    "captions": [
   
      "FM 1 - CH,",
      "FM 2 - CH,",
      "FM 3 - CH,",
      "FM 4 - CH,",
      "FM 5 - CH,",
      "FM 6 - CH,",
      "FM 1 - ML,",
      "FM 2 - ML,",
      "FM 3 - ML,",
      "FM 4 - ML,",
      "FM 5 - ML,",
      "FM 6 - ML,",
  
    ],
    "header": "COSMIC-2",
    "images": [
      "output-ch/cosmic-2_neutral_occ_sat_fm_1.png",
      "output-ch/cosmic-2_neutral_occ_sat_fm_2.png",
      "output-ch/cosmic-2_neutral_occ_sat_fm_3.png",
      "output-ch/cosmic-2_neutral_occ_sat_fm_4.png",
      "output-ch/cosmic-2_neutral_occ_sat_fm_5.png",
      "output-ch/cosmic-2_neutral_occ_sat_fm_6.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_1.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_2.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_3.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_4.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_5.png",
      "output-ml/cosmic-2_neutral_occ_sat_fm_6.png",
      
    ],
    "numCol": 6,
    "title": "GNSS Sats Tracked "
  },

  "group5": {
    "captions": [
      "KOMPSAT-5 FM 1 - CH," ,
      "KOMPSAT-5 FM 1 - ML,",
      "PAZ FM 1 - CH,",
      "PAZ FM 1 - ML,",
      "GeoOptics FM 1 - CH,",
      "GeoOptics FM 1 - ML,",

    ],
  "header": "KOMPSAT-5, PAZ and GeoOptics",
    "images": [
      "output-ch/kompsat-5_neutral_occ_sat_fm_1.png",
      "output-ml/kompsat-5_neutral_occ_sat_fm_1.png",
      "output-ch/paz_neutral_occ_sat_fm_1.png",
      "output-ml/paz_neutral_occ_sat_fm_1.png",
      "output-ch/geooptics_neutral_occ_sat_fm_1.png",
      "output-ml/geooptics_neutral_occ_sat_fm_1.png",
    ],
    "numCol": 6,
    "title": "GNSS Sats Tracked  "
  },


 "group6": {
    "captions": [

      "FM 1 - CH,", 
      "FM 2 - CH,",
      "FM 3 - CH,",
      "FM 4 - CH,",
      "FM 5 - CH,",
      "FM 6 - CH,",
      "FM 1 - ML,",             
      "FM 2 - ML,",
      "FM 3 - ML,",
      "FM 4 - ML,",
      "FM 5 - ML,",
      "FM 6 - ML,",
      

    ],
  "header": "COSMIC-2",
    "images": [
      "output-ch/cosmic-2_neutral_occ_prn_fm_1.png",
      "output-ch/cosmic-2_neutral_occ_prn_fm_2.png",
      "output-ch/cosmic-2_neutral_occ_prn_fm_3.png",
      "output-ch/cosmic-2_neutral_occ_prn_fm_4.png",
      "output-ch/cosmic-2_neutral_occ_prn_fm_5.png",
      "output-ch/cosmic-2_neutral_occ_prn_fm_6.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_1.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_2.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_3.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_4.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_5.png",
      "output-ml/cosmic-2_neutral_occ_prn_fm_6.png",
      
    ],
    "numCol": 6,
    "title": "GNSS PRNs Tracked  "
  },

 "group7": {
    "captions": [

      "FM 1 - CH,",
      "FM 1 - ML,",

    ],
  "header": "GeoOptics",
    "images": [
      "output-ch/geooptics_neutral_occ_prn_fm_1.png",
      "output-ml/geooptics_neutral_occ_prn_fm_1.png",

    ],
    "numCol": 2,
    "title": "GNSS PRNs Tracked  "
  },

 "group8": {
    "captions": [
      
      "FM 99 - CH,",
      "FM 100 - CH,",
      "FM 101 - CH,",
      "FM 102 - CH,",
      "FM 103 - CH,",
      "FM 104 - CH,",
      "FM 106 - CH,",
      "FM 115 - CH,",
      "FM 116 - CH,",
      "FM 117 - CH,",
      "FM 118 - CH,",
      "FM 119 - CH,",
      "FM 120 - CH,",
      "FM 122 - CH,",
      "FM 124 - CH,",
      "FM 125 - CH,",
      "FM 126 - CH,",
      "FM 127 - CH,",
      "FM 128 - CH,",
      "FM 129 - CH,",
      "FM 132 - CH,",
      "FM 133 - CH,",
      "FM 134 - CH,",
      "FM 135 - CH,",
      "FM 143 - CH,",
      "FM 148 - CH,",
      "FM 150 - CH,", 
      "FM 99 - ML,",
      "FM 100 - ML,",
      "FM 101 - ML,",
      "FM 102 - ML,",
      "FM 103 - ML,",
      "FM 104 - ML,",
      "FM 106 - ML,",
      "FM 115 - ML,",
      "FM 116 - ML,",
      "FM 117 - ML,",
      "FM 118 - ML,",
      "FM 119 - ML,",
      "FM 120 - ML,",
      "FM 122 - ML,",
      "FM 124 - ML,",
      "FM 125 - ML,",
      "FM 126 - ML,",
      "FM 127 - ML,",
      "FM 128 - ML,",
      "FM 129 - ML,",
      "FM 132 - ML,",
      "FM 133 - ML,",
      "FM 134 - ML,",
      "FM 135 - ML,",
      "FM 143 - ML,",
      "FM 148 - ML,",
      "FM 150 - ML,", 
    ],
    "header": "Spire ",
    "images": [

      "output-ch/spire_neutral_occ_sat_fm_99.png",
      "output-ch/spire_neutral_occ_sat_fm_100.png",
      "output-ch/spire_neutral_occ_sat_fm_101.png",
      "output-ch/spire_neutral_occ_sat_fm_102.png",
      "output-ch/spire_neutral_occ_sat_fm_103.png",
      "output-ch/spire_neutral_occ_sat_fm_104.png",
      "output-ch/spire_neutral_occ_sat_fm_106.png",
      "output-ch/spire_neutral_occ_sat_fm_115.png",
      "output-ch/spire_neutral_occ_sat_fm_116.png",
      "output-ch/spire_neutral_occ_sat_fm_117.png",
      "output-ch/spire_neutral_occ_sat_fm_118.png",
      "output-ch/spire_neutral_occ_sat_fm_119.png",
      "output-ch/spire_neutral_occ_sat_fm_120.png",
      "output-ch/spire_neutral_occ_sat_fm_122.png",
      "output-ch/spire_neutral_occ_sat_fm_124.png",
      "output-ch/spire_neutral_occ_sat_fm_125.png",
      "output-ch/spire_neutral_occ_sat_fm_126.png",
      "output-ch/spire_neutral_occ_sat_fm_127.png",
      "output-ch/spire_neutral_occ_sat_fm_128.png",
      "output-ch/spire_neutral_occ_sat_fm_129.png",
      "output-ch/spire_neutral_occ_sat_fm_132.png",
      "output-ch/spire_neutral_occ_sat_fm_133.png",
      "output-ch/spire_neutral_occ_sat_fm_134.png",
      "output-ch/spire_neutral_occ_sat_fm_135.png",
      "output-ch/spire_neutral_occ_sat_fm_143.png",
      "output-ch/spire_neutral_occ_sat_fm_148.png",
      "output-ch/spire_neutral_occ_sat_fm_150.png",
      "output-ml/spire_neutral_occ_sat_fm_99.png",
      "output-ml/spire_neutral_occ_sat_fm_100.png",
      "output-ml/spire_neutral_occ_sat_fm_101.png",
      "output-ml/spire_neutral_occ_sat_fm_102.png",
      "output-ml/spire_neutral_occ_sat_fm_103.png",
      "output-ml/spire_neutral_occ_sat_fm_104.png",
      "output-ml/spire_neutral_occ_sat_fm_106.png",
      "output-ml/spire_neutral_occ_sat_fm_115.png",
      "output-ml/spire_neutral_occ_sat_fm_116.png",
      "output-ml/spire_neutral_occ_sat_fm_117.png",
      "output-ml/spire_neutral_occ_sat_fm_118.png",
      "output-ml/spire_neutral_occ_sat_fm_119.png",
      "output-ml/spire_neutral_occ_sat_fm_120.png",
      "output-ml/spire_neutral_occ_sat_fm_122.png",
      "output-ml/spire_neutral_occ_sat_fm_124.png",
      "output-ml/spire_neutral_occ_sat_fm_125.png",
      "output-ml/spire_neutral_occ_sat_fm_126.png",
      "output-ml/spire_neutral_occ_sat_fm_127.png",
      "output-ml/spire_neutral_occ_sat_fm_128.png",
      "output-ml/spire_neutral_occ_sat_fm_129.png",
      "output-ml/spire_neutral_occ_sat_fm_132.png",
      "output-ml/spire_neutral_occ_sat_fm_133.png",
      "output-ml/spire_neutral_occ_sat_fm_134.png",
      "output-ml/spire_neutral_occ_sat_fm_135.png",
      "output-ml/spire_neutral_occ_sat_fm_143.png",
      "output-ml/spire_neutral_occ_sat_fm_148.png",
      "output-ml/spire_neutral_occ_sat_fm_150.png",

    ],
    "numCol": 6,
    "title": "GNSS Sats Tracked "
  },

 }
