import Component from 'gia/Component';
import * as THREE from 'three/build/three.module';

export default class body3D extends Component {
    constructor(element) {
        super(element);

        this.options = {
            delay: 0.3,
        };
    }

    mount() {

        function onWindowResize() {
            camera.aspect = body3D.getBoundingClientRect().width / body3D.getBoundingClientRect().height
            renderer.setSize(body3D.getBoundingClientRect().width, body3D.getBoundingClientRect().height);
            camera.updateProjectionMatrix();
        }

        function onPointerMove( event ) {
            pointer.x = ( event.clientX / body3D.getBoundingClientRect().width ) * 2 - 1;
            pointer.y = - ( event.clientY / body3D.getBoundingClientRect().height ) * 2 + 1;
            //console.log("pointer : ", pointer.x, pointer.y)
            //console.log("event : ", event.x, event.y)
            //console.log("body3D : ", body3D.getBoundingClientRect().width, body3D.getBoundingClientRect().height)
        }

        function animate() {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            render();

        };

        function render() {
            // find intersections
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( pointer, camera );
            // calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObjects( scene.children );            
            if ( intersects.length > 0 ) {
                if ( INTERSECTED != intersects[ 0 ].object ) {
                    if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
                    INTERSECTED = intersects[ 0 ].object;
                    INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
                    INTERSECTED.material.color.setHex( 0xff0000 );
                    body3D.style.cursor = 'pointer'
                }
            } else {
                if ( INTERSECTED ){
                    INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
                }
                INTERSECTED = null;
                body3D.style.cursor = 'auto'
            }
            renderer.render( scene, camera );
        }

        function onDocumentMouseDown( event ) {
            event.preventDefault();                                      
            const intersects = raycaster.intersectObjects( scene.children );
            if ( intersects.length > 0 ) {
                intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
            } 
        }

        console.log("Hello THREE")
    
        let body3D = document.getElementById("body3D");
        let scene = new THREE.Scene();
        console.log("width", body3D.getBoundingClientRect().width, "height", body3D.getBoundingClientRect().height)
        let camera = new THREE.PerspectiveCamera(75, body3D.getBoundingClientRect().width / body3D.getBoundingClientRect().height, 0.1, 1000);

        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(body3D.getBoundingClientRect().width, body3D.getBoundingClientRect().height);
        body3D.appendChild( renderer.domElement );

        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        let raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2(200,200); //x=200 and y=200 to avoid that the object is hover when the page is loaded
        let INTERSECTED;

        window.addEventListener( 'resize', onWindowResize );
        document.addEventListener( 'mousemove', onPointerMove );
        document.addEventListener( 'mousedown', onDocumentMouseDown );

        animate();            
        
        

        

        /*let newContent = "";
        this.element.innerText.split(' ').forEach(function (word, index) {
            newContent += `<span><span style="animation-delay: ${ index * this.options.delay + 0.4 }s">${ word }</span></span> `;
        }.bind(this));
        this.element.innerHTML = newContent;*/
    }
}