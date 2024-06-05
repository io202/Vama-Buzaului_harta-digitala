var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_2 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3 = new ol.format.GeoJSON();
var features_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3 = format_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.readFeatures(json_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.addFeatures(features_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3);
var lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3, 
                style: style_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3,
                popuplayertitle: "Traseu TA_La Punte-La Făbricuță-Vama Buzăului-Rezervația Valea Zimbrilor - La Balastieră",
                interactive: true,
                    title: '<img src="styles/legend/TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.png" /> Traseu TA_La Punte-La Făbricuță-Vama Buzăului-Rezervația Valea Zimbrilor - La Balastieră'
                });
var format_TraseudedrumeieicicloturismntorsuraBuzului_4 = new ol.format.GeoJSON();
var features_TraseudedrumeieicicloturismntorsuraBuzului_4 = format_TraseudedrumeieicicloturismntorsuraBuzului_4.readFeatures(json_TraseudedrumeieicicloturismntorsuraBuzului_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraseudedrumeieicicloturismntorsuraBuzului_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TraseudedrumeieicicloturismntorsuraBuzului_4.addFeatures(features_TraseudedrumeieicicloturismntorsuraBuzului_4);
var lyr_TraseudedrumeieicicloturismntorsuraBuzului_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TraseudedrumeieicicloturismntorsuraBuzului_4, 
                style: style_TraseudedrumeieicicloturismntorsuraBuzului_4,
                popuplayertitle: "Traseu de drumeție și cicloturism Întorsura Buzăului",
                interactive: true,
                    title: '<img src="styles/legend/TraseudedrumeieicicloturismntorsuraBuzului_4.png" /> Traseu de drumeție și cicloturism Întorsura Buzăului'
                });
var format_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5 = new ol.format.GeoJSON();
var features_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5 = format_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.readFeatures(json_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.addFeatures(features_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5);
var lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5, 
                style: style_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5,
                popuplayertitle: "CR_Vama Buzăului - Poiana Dălghiu - Vf. Ciucaș",
                interactive: true,
                    title: '<img src="styles/legend/CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.png" /> CR_Vama Buzăului - Poiana Dălghiu - Vf. Ciucaș'
                });
var format_CA_DlghiuPoianaTeslei_6 = new ol.format.GeoJSON();
var features_CA_DlghiuPoianaTeslei_6 = format_CA_DlghiuPoianaTeslei_6.readFeatures(json_CA_DlghiuPoianaTeslei_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_DlghiuPoianaTeslei_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_DlghiuPoianaTeslei_6.addFeatures(features_CA_DlghiuPoianaTeslei_6);
var lyr_CA_DlghiuPoianaTeslei_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CA_DlghiuPoianaTeslei_6, 
                style: style_CA_DlghiuPoianaTeslei_6,
                popuplayertitle: "CA_Dălghiu-Poiana Teslei",
                interactive: true,
                    title: '<img src="styles/legend/CA_DlghiuPoianaTeslei_6.png" /> CA_Dălghiu-Poiana Teslei'
                });
var format_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7 = new ol.format.GeoJSON();
var features_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7 = format_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.readFeatures(json_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.addFeatures(features_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7);
var lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7, 
                style: style_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7,
                popuplayertitle: "CA_Vama Buzăului - Curmătura Stânii - Șaua Chirușca - Cabana Vârful Ciucaș",
                interactive: true,
                    title: '<img src="styles/legend/CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.png" /> CA_Vama Buzăului - Curmătura Stânii - Șaua Chirușca - Cabana Vârful Ciucaș'
                });
var format_TriunghiAlbastru_variantgpx_8 = new ol.format.GeoJSON();
var features_TriunghiAlbastru_variantgpx_8 = format_TriunghiAlbastru_variantgpx_8.readFeatures(json_TriunghiAlbastru_variantgpx_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriunghiAlbastru_variantgpx_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriunghiAlbastru_variantgpx_8.addFeatures(features_TriunghiAlbastru_variantgpx_8);
var lyr_TriunghiAlbastru_variantgpx_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriunghiAlbastru_variantgpx_8, 
                style: style_TriunghiAlbastru_variantgpx_8,
                popuplayertitle: "Triunghi Albastru_variantă.gpx",
                interactive: true,
                    title: '<img src="styles/legend/TriunghiAlbastru_variantgpx_8.png" /> Triunghi Albastru_variantă.gpx'
                });
var format_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9 = new ol.format.GeoJSON();
var features_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9 = format_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.readFeatures(json_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.addFeatures(features_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9);
var lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9, 
                style: style_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9,
                popuplayertitle: "Traseu_TA_ La Fagi - Plaiul Beldii-Buzăiel",
                interactive: true,
                    title: '<img src="styles/legend/Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.png" /> Traseu_TA_ La Fagi - Plaiul Beldii-Buzăiel'
                });
var format_PlaiulBeldii_10 = new ol.format.GeoJSON();
var features_PlaiulBeldii_10 = format_PlaiulBeldii_10.readFeatures(json_PlaiulBeldii_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlaiulBeldii_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlaiulBeldii_10.addFeatures(features_PlaiulBeldii_10);
var lyr_PlaiulBeldii_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlaiulBeldii_10, 
                style: style_PlaiulBeldii_10,
                popuplayertitle: "Plaiul Beldii",
                interactive: true,
                title: 'Plaiul Beldii'
            });
var format_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11 = new ol.format.GeoJSON();
var features_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11 = format_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.readFeatures(json_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.addFeatures(features_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11);
var lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11, 
                style: style_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11,
                popuplayertitle: "Triunghi Galben_Rezervație-Vama Buzăului-spre Cascada Urlătoarea",
                interactive: true,
                    title: '<img src="styles/legend/TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.png" /> Triunghi Galben_Rezervație-Vama Buzăului-spre Cascada Urlătoarea'
                });
var format_TR1gpx_12 = new ol.format.GeoJSON();
var features_TR1gpx_12 = format_TR1gpx_12.readFeatures(json_TR1gpx_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR1gpx_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR1gpx_12.addFeatures(features_TR1gpx_12);
var lyr_TR1gpx_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TR1gpx_12, 
                style: style_TR1gpx_12,
                popuplayertitle: "TR1.gpx",
                interactive: true,
                    title: '<img src="styles/legend/TR1gpx_12.png" /> TR1.gpx'
                });
var format_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13 = new ol.format.GeoJSON();
var features_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13 = format_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.readFeatures(json_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.addFeatures(features_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13);
var lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13, 
                style: style_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13,
                popuplayertitle: "Traseu de drumeție Triunghi Roșu_ Rezervația de Zimbri - Crivina",
                interactive: true,
                    title: '<img src="styles/legend/TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.png" /> Traseu de drumeție Triunghi Roșu_ Rezervația de Zimbri - Crivina'
                });
var format_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14 = new ol.format.GeoJSON();
var features_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14 = format_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.readFeatures(json_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.addFeatures(features_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14);
var lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14, 
                style: style_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14,
                popuplayertitle: "Traseu TR drumeție și ciclo „Vama Buzăului pe bicicletă”",
                interactive: true,
                    title: '<img src="styles/legend/TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.png" /> Traseu TR drumeție și ciclo „Vama Buzăului pe bicicletă”'
                });
var format_Festung1_15 = new ol.format.GeoJSON();
var features_Festung1_15 = format_Festung1_15.readFeatures(json_Festung1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Festung1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Festung1_15.addFeatures(features_Festung1_15);
var lyr_Festung1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Festung1_15, 
                style: style_Festung1_15,
                popuplayertitle: "Festung 1",
                interactive: true,
                    title: '<img src="styles/legend/Festung1_15.png" /> Festung 1'
                });
var format_Festung2_16 = new ol.format.GeoJSON();
var features_Festung2_16 = format_Festung2_16.readFeatures(json_Festung2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Festung2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Festung2_16.addFeatures(features_Festung2_16);
var lyr_Festung2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Festung2_16, 
                style: style_Festung2_16,
                popuplayertitle: "Festung 2",
                interactive: true,
                title: 'Festung 2'
            });
var format_Toponime_17 = new ol.format.GeoJSON();
var features_Toponime_17 = format_Toponime_17.readFeatures(json_Toponime_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponime_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponime_17.addFeatures(features_Toponime_17);
var lyr_Toponime_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponime_17, 
                style: style_Toponime_17,
                popuplayertitle: "Toponime",
                interactive: true,
                title: 'Toponime'
            });
var format_UrltoareaMic_18 = new ol.format.GeoJSON();
var features_UrltoareaMic_18 = format_UrltoareaMic_18.readFeatures(json_UrltoareaMic_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrltoareaMic_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrltoareaMic_18.addFeatures(features_UrltoareaMic_18);
var lyr_UrltoareaMic_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrltoareaMic_18, 
                style: style_UrltoareaMic_18,
                popuplayertitle: "Urlătoarea Mică",
                interactive: true,
                    title: '<img src="styles/legend/UrltoareaMic_18.png" /> Urlătoarea Mică'
                });
var format_GastroLocaluri_19 = new ol.format.GeoJSON();
var features_GastroLocaluri_19 = format_GastroLocaluri_19.readFeatures(json_GastroLocaluri_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GastroLocaluri_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GastroLocaluri_19.addFeatures(features_GastroLocaluri_19);
var lyr_GastroLocaluri_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GastroLocaluri_19, 
                style: style_GastroLocaluri_19,
                popuplayertitle: "Gastro Localuri",
                interactive: true,
                    title: '<img src="styles/legend/GastroLocaluri_19.png" /> Gastro Localuri'
                });
var format_Camping_20 = new ol.format.GeoJSON();
var features_Camping_20 = format_Camping_20.readFeatures(json_Camping_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camping_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camping_20.addFeatures(features_Camping_20);
var lyr_Camping_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camping_20, 
                style: style_Camping_20,
                popuplayertitle: "Camping",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/background_square_rounded.svg" /> Camping'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(true);lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.setVisible(true);lyr_TraseudedrumeieicicloturismntorsuraBuzului_4.setVisible(true);lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.setVisible(true);lyr_CA_DlghiuPoianaTeslei_6.setVisible(true);lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.setVisible(true);lyr_TriunghiAlbastru_variantgpx_8.setVisible(true);lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.setVisible(true);lyr_PlaiulBeldii_10.setVisible(true);lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.setVisible(true);lyr_TR1gpx_12.setVisible(true);lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.setVisible(true);lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.setVisible(true);lyr_Festung1_15.setVisible(true);lyr_Festung2_16.setVisible(true);lyr_Toponime_17.setVisible(true);lyr_UrltoareaMic_18.setVisible(true);lyr_GastroLocaluri_19.setVisible(true);lyr_Camping_20.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_OpenTopoMap_2,lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3,lyr_TraseudedrumeieicicloturismntorsuraBuzului_4,lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5,lyr_CA_DlghiuPoianaTeslei_6,lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7,lyr_TriunghiAlbastru_variantgpx_8,lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9,lyr_PlaiulBeldii_10,lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11,lyr_TR1gpx_12,lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13,lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14,lyr_Festung1_15,lyr_Festung2_16,lyr_Toponime_17,lyr_UrltoareaMic_18,lyr_GastroLocaluri_19,lyr_Camping_20];
lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_TraseudedrumeieicicloturismntorsuraBuzului_4.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.set('fieldAliases', {'FID': 'FID', });
lyr_CA_DlghiuPoianaTeslei_6.set('fieldAliases', {'FID': 'FID', });
lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.set('fieldAliases', {'FID': 'FID', });
lyr_TriunghiAlbastru_variantgpx_8.set('fieldAliases', {'ele': 'ele', });
lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_PlaiulBeldii_10.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_TR1gpx_12.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.set('fieldAliases', {'a_ele': 'a_ele', 'b_ele': 'b_ele', });
lyr_Festung1_15.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_Festung2_16.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_Toponime_17.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_UrltoareaMic_18.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_GastroLocaluri_19.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_Camping_20.set('fieldAliases', {'id': 'id', 'elevation': 'elevation', 'name': 'name', 'comment': 'comment', 'descriptio': 'descriptio', 'url': 'url', 'url_name': 'url_name', 'symbol': 'symbol', 'source': 'source', 'type': 'type', 'capture_ti': 'capture_ti', 'feature_ty': 'feature_ty', 'file_name': 'file_name', });
lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_TraseudedrumeieicicloturismntorsuraBuzului_4.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.set('fieldImages', {'FID': 'TextEdit', });
lyr_CA_DlghiuPoianaTeslei_6.set('fieldImages', {'FID': 'TextEdit', });
lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.set('fieldImages', {'FID': 'TextEdit', });
lyr_TriunghiAlbastru_variantgpx_8.set('fieldImages', {'ele': 'TextEdit', });
lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_PlaiulBeldii_10.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_TR1gpx_12.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.set('fieldImages', {'a_ele': 'TextEdit', 'b_ele': 'TextEdit', });
lyr_Festung1_15.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_Festung2_16.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_Toponime_17.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_UrltoareaMic_18.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_GastroLocaluri_19.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_Camping_20.set('fieldImages', {'id': 'Range', 'elevation': 'TextEdit', 'name': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'url': 'TextEdit', 'url_name': 'TextEdit', 'symbol': 'TextEdit', 'source': 'TextEdit', 'type': 'TextEdit', 'capture_ti': 'TextEdit', 'feature_ty': 'TextEdit', 'file_name': 'TextEdit', });
lyr_TraseuTA_LaPunteLaFbricuVamaBuzuluiRezervaiaValeaZimbrilorLaBalastier_3.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_TraseudedrumeieicicloturismntorsuraBuzului_4.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_CR_VamaBuzuluiPoianaDlghiuVfCiuca_5.set('fieldLabels', {'FID': 'no label', });
lyr_CA_DlghiuPoianaTeslei_6.set('fieldLabels', {'FID': 'no label', });
lyr_CA_VamaBuzuluiCurmturaStniiauaChirucaCabanaVrfulCiuca_7.set('fieldLabels', {'FID': 'no label', });
lyr_TriunghiAlbastru_variantgpx_8.set('fieldLabels', {'ele': 'no label', });
lyr_Traseu_TA_LaFagiPlaiulBeldiiBuziel_9.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_PlaiulBeldii_10.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_TriunghiGalben_RezervaieVamaBuzuluispreCascadaUrltoarea_11.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_TR1gpx_12.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_TraseudedrumeieTriunghiRou_RezervaiadeZimbriCrivina_13.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_TraseuTRdrumeieicicloVamaBuzuluipebiciclet_14.set('fieldLabels', {'a_ele': 'no label', 'b_ele': 'no label', });
lyr_Festung1_15.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_Festung2_16.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_Toponime_17.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_UrltoareaMic_18.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_GastroLocaluri_19.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_Camping_20.set('fieldLabels', {'id': 'no label', 'elevation': 'no label', 'name': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'url': 'no label', 'url_name': 'no label', 'symbol': 'no label', 'source': 'no label', 'type': 'no label', 'capture_ti': 'no label', 'feature_ty': 'no label', 'file_name': 'no label', });
lyr_Camping_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});