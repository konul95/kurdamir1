var wms_layers = [];

var format_IED_0 = new ol.format.GeoJSON();
var features_IED_0 = format_IED_0.readFeatures(json_IED_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IED_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IED_0.addFeatures(features_IED_0);
var lyr_IED_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IED_0, 
                style: style_IED_0,
                interactive: true,
                title: '<img src="styles/legend/IED_0.png" /> IED'
            });
var format_agro_merge_1 = new ol.format.GeoJSON();
var features_agro_merge_1 = format_agro_merge_1.readFeatures(json_agro_merge_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agro_merge_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agro_merge_1.addFeatures(features_agro_merge_1);
var lyr_agro_merge_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agro_merge_1, 
                style: style_agro_merge_1,
                interactive: true,
                title: '<img src="styles/legend/agro_merge_1.png" /> agro_merge'
            });

lyr_IED_0.setVisible(true);lyr_agro_merge_1.setVisible(true);
var layersList = [lyr_IED_0,lyr_agro_merge_1];
lyr_IED_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'UrbanName': 'UrbanName', 'UrbanNum': 'UrbanNum', 'StatCode': 'StatCode', 'Subordinat': 'Subordinat', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'IEDType': 'IEDType', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'Name_2': 'Name_2', 'TypeAU': 'TypeAU', 'Subordinat_2': 'Subordinat_2', 'StatCode_2': 'StatCode_2', 'EconomRe': 'EconomRe', 'Area_2': 'Area_2', 'Perimetr_2': 'Perimetr_2', 'Note_2': 'Note_2', 'Shape_Leng_2': 'Shape_Leng_2', 'Shape_Area_2': 'Shape_Area_2', });
lyr_agro_merge_1.set('fieldAliases', {'OtherCateg': 'OtherCateg', 'Ameliorati': 'Ameliorati', 'FactArea': 'FactArea', 'Perimetr': 'Perimetr', 'Designatio': 'Designatio', 'Administra': 'Administra', 'Administ_1': 'Administ_1', 'LegalTypeo': 'LegalTypeo', 'FactUse': 'FactUse', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IED_0.set('fieldImages', {'OBJECTID': '', 'Name': '', 'UrbanName': '', 'UrbanNum': '', 'StatCode': '', 'Subordinat': '', 'Area': '', 'Perimetr': '', 'Note': '', 'IEDType': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'OBJECTID_2': '', 'Name_2': '', 'TypeAU': '', 'Subordinat_2': '', 'StatCode_2': '', 'EconomRe': '', 'Area_2': '', 'Perimetr_2': '', 'Note_2': '', 'Shape_Leng_2': '', 'Shape_Area_2': '', });
lyr_agro_merge_1.set('fieldImages', {'OtherCateg': '', 'Ameliorati': '', 'FactArea': '', 'Perimetr': '', 'Designatio': '', 'Administra': '', 'Administ_1': '', 'LegalTypeo': '', 'FactUse': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_IED_0.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'UrbanName': 'no label', 'UrbanNum': 'no label', 'StatCode': 'no label', 'Subordinat': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'IEDType': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID_2': 'no label', 'Name_2': 'no label', 'TypeAU': 'no label', 'Subordinat_2': 'no label', 'StatCode_2': 'no label', 'EconomRe': 'no label', 'Area_2': 'no label', 'Perimetr_2': 'no label', 'Note_2': 'no label', 'Shape_Leng_2': 'no label', 'Shape_Area_2': 'no label', });
lyr_agro_merge_1.set('fieldLabels', {'OtherCateg': 'no label', 'Ameliorati': 'no label', 'FactArea': 'no label', 'Perimetr': 'no label', 'Designatio': 'no label', 'Administra': 'no label', 'Administ_1': 'no label', 'LegalTypeo': 'no label', 'FactUse': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_agro_merge_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});