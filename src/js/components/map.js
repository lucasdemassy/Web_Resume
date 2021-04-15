import Component from 'gia/Component';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';


export default class body3D extends Component {
    constructor(element) {
        console.log("Hello constructor")
        super(element);

        this.options = {
            delay: 0.3,
        };
    }

    mount() {
        console.log("Hello OpenLayers", this)

        this.map = new Map({
            target: 'map',
            layers: [
                /*new TileLayer({
                    source: new OSM()   //OpenStreeMap basemap
                }),*/
                new VectorLayer({
                    source: new VectorSource({
                      format: new GeoJSON(),
                      url: './assets/departements.json'
                    })
                })
            ],
            view: new View({
                center: [274053, 5931256],  //Center on France
                zoom: 5
            })
        });

        this.map.on('click', ()=>this.getPosition(event));

        var highlightStyle = new Style({
            fill: new Fill({
                color: 'rgba(255,255,255,0.7)',
            }),
            stroke: new Stroke({
                color: '#3399CC',
                width: 3,
            }),
        });


        var selected = null;
        var status = document.getElementById('status');

        this.map.on('pointermove', (e) => {
            if (selected !== null) {
                selected.setStyle(undefined);
                selected = null;
            }

            this.map.forEachFeatureAtPixel(e.pixel, function (f) {
                selected = f;
                f.setStyle(highlightStyle);
                console.log(selected, f)
                return true;
            });

            if (selected) {
                status.innerHTML = '&nbsp;Hovering: ' + selected.get('name');
            } 
            else {
                status.innerHTML = '&nbsp;';
            }
        });


    }

    getPosition(event){
        console.log(event, this)
        console.log(this.map.getEventCoordinate(event));
    }      
}