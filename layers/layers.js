var wms_layers = [];

var format_ENG401Bayrakli_building_footprint_edit_0 = new ol.format.GeoJSON();
var features_ENG401Bayrakli_building_footprint_edit_0 = format_ENG401Bayrakli_building_footprint_edit_0.readFeatures(json_ENG401Bayrakli_building_footprint_edit_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENG401Bayrakli_building_footprint_edit_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENG401Bayrakli_building_footprint_edit_0.addFeatures(features_ENG401Bayrakli_building_footprint_edit_0);
var lyr_ENG401Bayrakli_building_footprint_edit_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENG401Bayrakli_building_footprint_edit_0, 
                style: style_ENG401Bayrakli_building_footprint_edit_0,
                popuplayertitle: 'ENG401 — Bayrakli_building_footprint_edit',
                interactive: true,
                title: '<img src="styles/legend/ENG401Bayrakli_building_footprint_edit_0.png" /> ENG401 — Bayrakli_building_footprint_edit'
            });

lyr_ENG401Bayrakli_building_footprint_edit_0.setVisible(true);
var layersList = [lyr_ENG401Bayrakli_building_footprint_edit_0];
lyr_ENG401Bayrakli_building_footprint_edit_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'Z_Mean': 'Z_Mean', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ENG401Bayrakli_building_footprint_edit_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'Z_Mean': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ENG401Bayrakli_building_footprint_edit_0.set('fieldLabels', {'OBJECTID': 'header label - always visible', 'Entity': 'header label - always visible', 'Handle': 'hidden field', 'Layer': 'header label - always visible', 'LyrFrzn': 'hidden field', 'LyrOn': 'hidden field', 'Color': 'hidden field', 'Linetype': 'hidden field', 'Elevation': 'header label - always visible', 'LineWt': 'hidden field', 'RefName': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'Z_Mean': 'hidden field', 'Shape_Length': 'header label - always visible', 'Shape_Area': 'header label - always visible', });
lyr_ENG401Bayrakli_building_footprint_edit_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});