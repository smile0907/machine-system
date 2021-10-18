const { hostname } = window.location;
const userApi = `http://${hostname}:5000`;
const socketApi = `ws://${hostname}:5000`;

export { userApi, socketApi };
