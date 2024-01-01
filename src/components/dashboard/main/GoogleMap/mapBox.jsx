// import React from 'react'
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import pin from 'assets/svg/pin.svg'
// import { usePosition } from 'Hooks/usePosition';


// export default function MapBox() {
//     const {latitude, longitude, error} = usePosition();
//     const Map = ReactMapboxGl({
//         accessToken:
//           'pk.eyJ1Ijoic2tpbGx6dGhlcHJvZ3JhbW1lciIsImEiOiJja3Bhbno1N3cwdm03Mm9ubGdscmFlMTd3In0.h-x74syzBZIVVLdzjwO8gg'
//       });
//     return (
//         <>
//         <div>
//             <p>Longitude:{longitude}</p>
//             <p>Latitude:{latitude}</p>
//             <p>Error:{error}</p>
//         </div>
//           <Map
//             style="mapbox://styles/mapbox/streets-v9"
//             containerStyle={{
//               height: '30vh',
//               width: '30vw'
//             }}
//           >
//             <Layer type="symbol" id="marker" layout={{ 'icon-image': pin }}>
//               <Feature coordinates={[latitude, longitude]} />
//             </Layer>
//           </Map>
//         </>
//     )
// }
