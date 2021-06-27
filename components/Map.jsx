import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ projects }) => {
  return (
    <div className="h-96">
      <h1>{projects[0].country}</h1>
      <MapContainer center={[48.8351, 11.582]} zoom={7} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/fabiomai/ckq9jqqdq1byp18n328sswd7b/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmFiaW9tYWkiLCJhIjoiY2txM3FzYmNyMTE2OTJucXJqdmxmMmVyaSJ9.KWn0fAq1DZ2dlWRdz-t7eg`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        {projects.concat(additionalProjects).map((project, index) => {
          //   let longLat = lookUpLongLat(project.city, project.country);
          if (project.lon == "" || project.lat == "") return;
          return (
            <Marker key={index} position={[project.lat, project.lon]} draggable={true} animate={true}>
              <Popup>
                <a href={project.href} className="cursor-pointer" key={project.href} target="_blank">
                  <div className="flex flex-col h-full col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
                    <div className="flex flex-col flex-1">
                      <img className="flex-shrink-0 w-full mx-auto bg-black" src={project.image} alt="" />
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-900">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

async function lookUpLongLat(city, country) {
  let url = encodeURI("https://nominatim.openstreetmap.org/search/" + city + " " + country + "?format=json");

  const response = await fetch(url, {
    mode: "no-cors",
  });
  const json = await response.json();
  let longLat = {
    long: json[0].lon,
    lat: json[0].lat,
  };
  return longLat;
}

let additionalProjects = [
  {
    lon: "10.940045474964336",
    lat: "50.37542134896879",
    href: "https://www.ecocrowd.de/projekte/agrarflaechen-zu-bluehwiesen/",
    image: "https://www.ecocrowd.de/wp-content/uploads/projects/603bb4b510ab69.77746848.jpg?v=1614525621",
    title: "Umwandlung von Agrarflächen zu Blühwiesen",
  },
  {
    lon: "10.728929111844542",
    lat: "48.036142100458285",
    href: "https://www.ecocrowd.de/projekte/solawi-allgaeu/",
    image: "https://www.ecocrowd.de/wp-content/uploads/projects/603f6ab37f5b41.48274010.jpg?v=1614768819",
    title: "SoLaWi – Solidarische Landwirtschaft – MaNa-Allgäu",
  },
  {
    lon: "12.637475136278642",
    lat: "47.86066782112598",
    href: "https://www.ecocrowd.de/projekte/gemeinsam-zukunft-gestalten/",
    image: "https://www.ecocrowd.de/wp-content/uploads/projects/60b32b8ce5bbd5.95417405.jpg?v=1622354828",
    title: "Gemeinsam Zukunft gestalten!",
  },
];

export default Map;
