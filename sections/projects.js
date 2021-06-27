import { LocationMarkerIcon } from "@heroicons/react/outline";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function Projects({ projects }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const changeSelect = (event) => {
    setSelectedCountry(event.target.value);
  };
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  return (
    <>
      <section className="py-12 bg-white" id="projects">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-green-600 uppercase">Biodiversitätsprojekte</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Aus verschiedenen Portalen
            </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
              Wir sammeln Projekte rund um Biodiversität und Artenschutz aus dem deutschsprachigen Raum. Finde jetzt
              dein Traumprojekt!
            </p>
          </div>
          <select
            id="country-select"
            className="block py-2 pl-3 pr-10 mt-1 ml-auto text-base border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            onChange={changeSelect}
          >
            <option value="">Alle Länder</option>
            {[...new Set(projects.map((p) => p.country))]
              .filter((c) => c.length > 0)
              .sort((a, b) => a.localeCompare(b))
              .map((c, index) => (
                <option key={index}>{c}</option>
              ))}
          </select>
          <ul className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects
              .filter((p) => typeof p.country !== "undefined" && p.country.includes(selectedCountry))
              .map((project) => (
                <a href={project.href} className="cursor-pointer" key={project.href} target="_blank">
                  <li className="flex flex-col h-full col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow">
                    <div className="flex flex-col flex-1">
                      <img className="flex-shrink-0 w-full mx-auto bg-black" src={project.image} alt="" />
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-900">{project.title}</h3>
                        <dl className="flex flex-col justify-between flex-grow mt-3">
                          <dt className="sr-only">Ort</dt>
                          <dd className="flex flex-row mx-auto text-sm text-gray-500">
                            <LocationMarkerIcon className="w-6 h-6" aria-hidden="true" />
                            {project.city}, {project.country}
                          </dd>
                          <dt className="sr-only">Quelle</dt>
                          <dd className="mt-3">
                            <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                              {project.platform}
                            </span>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="relative p-2">
                      <dl className="flex flex-col justify-between flex-grow my-3">
                        <dt className="sr-only">Anzahl Spenden</dt>
                        <dd className="text-sm text-gray-500">
                          {project.donation_count == 9999
                            ? project.amount_donated + " gespendet"
                            : project.donation_count + " Spenden"}
                        </dd>
                        <dt className="sr-only">Spendenbetrag ausstehend</dt>
                        <dd className="text-sm text-gray-500">Ziel: {project.amount_goal}</dd>
                      </dl>
                      <div className="flex justify-center mb-2">
                        <span className="inline-block text-xs font-semibold text-green-600">
                          {project.progress_percentage}% erreicht
                        </span>
                      </div>
                      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-green-200 rounded">
                        <div
                          style={{ width: project.progress_percentage + "%" }}
                          className="flex flex-col justify-center text-center text-white bg-green-500 shadow-none whitespace-nowrap"
                        ></div>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
          </ul>
        </div>
      </section>
      <section id="map">
        <MapWithNoSSR projects={projects} />
      </section>
    </>
  );
}
