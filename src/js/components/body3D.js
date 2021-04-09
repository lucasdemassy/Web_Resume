import Component from 'gia/Component';
//import THREE from '../js/three'

export default class body3D extends Component {
    constructor(element) {
        console.log("Hello constructor")
        super(element);

        this.options = {
            delay: 0.3,
        };
    }

    mount() {
        console.log("Hello THREE")
        console.log(this)
        /*
        let body3D = document.getElementById("body3D");
        let scene = new THREE.Scene();
        console.dir("body3D", body3D)
        console.log("width", body3D.getBoundingClientRect().width, "height", body3D.getBoundingClientRect().height)
        let camera = new THREE.PerspectiveCamera( 75, body3D.getBoundingClientRect().width / body3D.getBoundingClientRect().height, 0.1, 1000 );

        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( body3D.getBoundingClientRect().width, body3D.getBoundingClientRect().height );
        body3D.appendChild( renderer.domElement );

        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        let animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
        */

        /*let newContent = "";
        this.element.innerText.split(' ').forEach(function (word, index) {
            newContent += `<span><span style="animation-delay: ${ index * this.options.delay + 0.4 }s">${ word }</span></span> `;
        }.bind(this));
        this.element.innerHTML = newContent;*/
    }
}