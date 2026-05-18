ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7899").setExtent([2445967.978136, 2450470.232859, 2524648.724228, 2563119.574151]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gyms_ptv_sa2_join_v6_withnorms_1 = new ol.format.GeoJSON();
var features_gyms_ptv_sa2_join_v6_withnorms_1 = format_gyms_ptv_sa2_join_v6_withnorms_1.readFeatures(json_gyms_ptv_sa2_join_v6_withnorms_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7899'});
var jsonSource_gyms_ptv_sa2_join_v6_withnorms_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gyms_ptv_sa2_join_v6_withnorms_1.addFeatures(features_gyms_ptv_sa2_join_v6_withnorms_1);
var lyr_gyms_ptv_sa2_join_v6_withnorms_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gyms_ptv_sa2_join_v6_withnorms_1, 
                style: style_gyms_ptv_sa2_join_v6_withnorms_1,
                popuplayertitle: 'gyms_ptv_sa2_join_v6_withnorms',
                interactive: true,
    title: 'gyms_ptv_sa2_join_v6_withnorms<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_0.png" /> 0 - 0.061<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_1.png" /> 0.061 - 0.143<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_2.png" /> 0.143 - 0.187<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_3.png" /> 0.187 - 0.317<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_4.png" /> 0.317 - 0.712<br />\
    <img src="styles/legend/gyms_ptv_sa2_join_v6_withnorms_1_5.png" /> No Data<br />' });
var format_SA2_GM2021_2 = new ol.format.GeoJSON();
var features_SA2_GM2021_2 = format_SA2_GM2021_2.readFeatures(json_SA2_GM2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7899'});
var jsonSource_SA2_GM2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SA2_GM2021_2.addFeatures(features_SA2_GM2021_2);
var lyr_SA2_GM2021_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SA2_GM2021_2, 
                style: style_SA2_GM2021_2,
                popuplayertitle: 'SA2_GM2021',
                interactive: true,
                title: '<img src="styles/legend/SA2_GM2021_2.png" /> SA2_GM2021'
            });
var format_ptv_stops_clipped_3 = new ol.format.GeoJSON();
var features_ptv_stops_clipped_3 = format_ptv_stops_clipped_3.readFeatures(json_ptv_stops_clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7899'});
var jsonSource_ptv_stops_clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptv_stops_clipped_3.addFeatures(features_ptv_stops_clipped_3);
cluster_ptv_stops_clipped_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ptv_stops_clipped_3
});
var lyr_ptv_stops_clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ptv_stops_clipped_3, 
                style: style_ptv_stops_clipped_3,
                popuplayertitle: 'ptv_stops_clipped',
                interactive: true,
                title: '<img src="styles/legend/ptv_stops_clipped_3.png" /> ptv_stops_clipped'
            });
var format_gym_points_v2_clipped_4 = new ol.format.GeoJSON();
var features_gym_points_v2_clipped_4 = format_gym_points_v2_clipped_4.readFeatures(json_gym_points_v2_clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:7899'});
var jsonSource_gym_points_v2_clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gym_points_v2_clipped_4.addFeatures(features_gym_points_v2_clipped_4);
cluster_gym_points_v2_clipped_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_gym_points_v2_clipped_4
});
var lyr_gym_points_v2_clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_gym_points_v2_clipped_4, 
                style: style_gym_points_v2_clipped_4,
                popuplayertitle: 'gym_points_v2_clipped',
                interactive: true,
                title: '<img src="styles/legend/gym_points_v2_clipped_4.png" /> gym_points_v2_clipped'
            });

lyr_OSMStandard_0.setVisible(false);lyr_gyms_ptv_sa2_join_v6_withnorms_1.setVisible(true);lyr_SA2_GM2021_2.setVisible(true);lyr_ptv_stops_clipped_3.setVisible(true);lyr_gym_points_v2_clipped_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_gyms_ptv_sa2_join_v6_withnorms_1,lyr_SA2_GM2021_2,lyr_ptv_stops_clipped_3,lyr_gym_points_v2_clipped_4];
lyr_gyms_ptv_sa2_join_v6_withnorms_1.set('fieldAliases', {'fid': 'fid', 'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'AREASQKM21': 'AREASQKM21', 'gym_count': 'gym_count', 'ptv_stop_count': 'ptv_stop_count', 'gyms_per_10k_pop': 'gyms_per_10k_pop', 'ptv_per_sqkm': 'ptv_per_sqkm', 'norm_gyms': 'norm_gyms', 'norm_ptv': 'norm_ptv', 'seifa_score_num': 'seifa_score_num', 'norm_seifa': 'norm_seifa', 'weighted_GAI': 'weighted_GAI', 'seifa_SA2_NAME21': 'seifa_SA2_NAME21', 'seifa_Population': 'seifa_Population', 'seifa_IRSD_Score': 'seifa_IRSD_Score', });
lyr_SA2_GM2021_2.set('fieldAliases', {'SA2_CODE21': 'SA2_CODE21', 'SA2_NAME21': 'SA2_NAME21', 'CHG_LBL21': 'CHG_LBL21', 'SA3_CODE21': 'SA3_CODE21', 'SA3_NAME21': 'SA3_NAME21', 'SA4_CODE21': 'SA4_CODE21', 'SA4_NAME21': 'SA4_NAME21', 'GCC_CODE21': 'GCC_CODE21', 'GCC_NAME21': 'GCC_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'SA2_code': 'SA2_code', });
lyr_ptv_stops_clipped_3.set('fieldAliases', {'fid': 'fid', 'STOP_ID': 'STOP_ID', 'STOP_NAME': 'STOP_NAME', 'MODE': 'MODE', });
lyr_gym_points_v2_clipped_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '@id': '@id', 'leisure': 'leisure', 'name': 'name', 'sport': 'sport', });
lyr_gyms_ptv_sa2_join_v6_withnorms_1.set('fieldImages', {'fid': 'TextEdit', 'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'gym_count': 'Range', 'ptv_stop_count': 'Range', 'gyms_per_10k_pop': 'TextEdit', 'ptv_per_sqkm': 'TextEdit', 'norm_gyms': 'TextEdit', 'norm_ptv': 'TextEdit', 'seifa_score_num': 'TextEdit', 'norm_seifa': 'TextEdit', 'weighted_GAI': 'TextEdit', 'seifa_SA2_NAME21': 'TextEdit', 'seifa_Population': 'TextEdit', 'seifa_IRSD_Score': 'TextEdit', });
lyr_SA2_GM2021_2.set('fieldImages', {'SA2_CODE21': 'TextEdit', 'SA2_NAME21': 'TextEdit', 'CHG_LBL21': 'TextEdit', 'SA3_CODE21': 'TextEdit', 'SA3_NAME21': 'TextEdit', 'SA4_CODE21': 'TextEdit', 'SA4_NAME21': 'TextEdit', 'GCC_CODE21': 'TextEdit', 'GCC_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'SA2_code': 'TextEdit', });
lyr_ptv_stops_clipped_3.set('fieldImages', {'fid': 'TextEdit', 'STOP_ID': 'TextEdit', 'STOP_NAME': 'TextEdit', 'MODE': 'TextEdit', });
lyr_gym_points_v2_clipped_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '@id': 'TextEdit', 'leisure': 'TextEdit', 'name': 'TextEdit', 'sport': 'TextEdit', });
lyr_gyms_ptv_sa2_join_v6_withnorms_1.set('fieldLabels', {'fid': 'no label', 'SA2_CODE21': 'no label', 'SA2_NAME21': 'inline label - always visible', 'AREASQKM21': 'inline label - always visible', 'gym_count': 'header label - always visible', 'ptv_stop_count': 'header label - always visible', 'gyms_per_10k_pop': 'no label', 'ptv_per_sqkm': 'no label', 'norm_gyms': 'no label', 'norm_ptv': 'no label', 'seifa_score_num': 'inline label - always visible', 'norm_seifa': 'no label', 'weighted_GAI': 'header label - always visible', 'seifa_SA2_NAME21': 'no label', 'seifa_Population': 'no label', 'seifa_IRSD_Score': 'no label', });
lyr_SA2_GM2021_2.set('fieldLabels', {'SA2_CODE21': 'no label', 'SA2_NAME21': 'no label', 'CHG_LBL21': 'no label', 'SA3_CODE21': 'no label', 'SA3_NAME21': 'no label', 'SA4_CODE21': 'no label', 'SA4_NAME21': 'no label', 'GCC_CODE21': 'no label', 'GCC_NAME21': 'no label', 'STE_CODE21': 'no label', 'STE_NAME21': 'no label', 'AUS_CODE21': 'no label', 'AUS_NAME21': 'no label', 'AREASQKM21': 'no label', 'SA2_code': 'no label', });
lyr_ptv_stops_clipped_3.set('fieldLabels', {'fid': 'no label', 'STOP_ID': 'no label', 'STOP_NAME': 'no label', 'MODE': 'no label', });
lyr_gym_points_v2_clipped_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '@id': 'no label', 'leisure': 'no label', 'name': 'no label', 'sport': 'no label', });
lyr_gym_points_v2_clipped_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});