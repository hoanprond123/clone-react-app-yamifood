import React from 'react'
import ReactMapGL from 'react-map-gl';
const Map = () => {
    const [viewport, setViewport] = React.useState({
        width: "100vw",
        height: "100vh",
        latitude: 21.0244246,
        longitude: 105.7938072,
        zoom: 16
    });

    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiaG9hbnByb25kMTIzIiwiYSI6ImNreG85MnZ2aDIzaWQycXBlcXl6aWc4NGkifQ.jLvV-kp9qj8yUcL2Qy5Fsw"
        />
    )
}

export default Map
