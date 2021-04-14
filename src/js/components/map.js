import Component from 'gia/Component';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';


export default class body3D extends Component {
    constructor(element) {
        console.log("Hello constructor")
        super(element);

        this.options = {
            delay: 0.3,
        };
    }

    mount() {
        new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
        console.log("Hello OpenLayers")
        console.log(this)
        console.log("a")
        console.log(Component)
        
    }
}