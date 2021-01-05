import L from "leaflet";

export const instance = L;
export const mymap = instance.map("mapid");

mymap.dragging.disable();
mymap.scrollWheelZoom.disable();
