import L from 'leaflet';

const RallyIcon = new L.Icon({
    iconUrl: require('../../assets/icons/rallye.png'),
    iconRetinaUrl: require('../../assets/icons/rallye.png'),
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

const LocationIcon = new L.Icon({
    iconUrl: require('../../assets/icons/location.png'),
    iconRetinaUrl: require('../../assets/icons/location.png'),
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

const DesignIcon = new L.Icon({
    iconUrl: require('../../assets/icons/design.png'),
    iconRetinaUrl: require('../../assets/icons/design.png'),
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

const CarIcon = new L.Icon({
    iconUrl: require('../../assets/icons/car_dealer.png'),
    iconRetinaUrl: require('../../assets/icons/car_dealer.png'),
    iconAnchor: null,
    popupAnchor: [0, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

export { RallyIcon, DesignIcon, CarIcon, LocationIcon }
