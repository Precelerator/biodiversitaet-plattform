import { LocationMarkerIcon } from "@heroicons/react/outline";

export default function Projects({ projects }) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Biodiversitätsprojekte</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Aus verschiedenen Portalen
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <ul className="grid grid-cols-1 mt-8 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.data.map((project) => (
            <a href={project.links[0].href} className="cursor-pointer" key={project.id} target="_blank">
              <li
                key={project.id}
                className="col-span-1 flex flex-col h-full text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col">
                  <img
                    className="w-full flex-shrink-0 mx-auto bg-black"
                    src={project.profile_picture.links[0].href}
                    alt=""
                  />
                  <div className="p-4">
                    <h3 className="text-gray-900 text-sm font-medium">{project.title}</h3>
                    <dl className="mt-3 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">Ort</dt>
                      <dd className="text-gray-500 text-sm flex flex-row mx-auto">
                        <LocationMarkerIcon className="h-6 w-6" aria-hidden="true" />
                        {project.city}, {project.country}
                      </dd>
                      <dt className="sr-only">Quelle</dt>
                      <dd className="mt-3">
                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                          betterplace.org
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="relative p-2">
                  <dl className="my-3 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Anzahl Spenden</dt>
                    <dd className="text-gray-500 text-sm">{project.donations_count} Spenden</dd>
                    <dt className="sr-only">Spendenbetrag ausstehend</dt>
                    <dd className="text-gray-500 text-sm">Es fehlen noch: {project.open_amount_in_cents / 100} €</dd>
                  </dl>
                  <div className="flex mb-2 justify-center">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {(
                        (project.donated_amount_in_cents /
                          (project.donated_amount_in_cents + project.open_amount_in_cents)) *
                        100
                      ).toFixed(2)}
                      % erreicht
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div
                      style={{
                        width:
                          (project.donated_amount_in_cents /
                            (project.donated_amount_in_cents + project.open_amount_in_cents)) *
                            100 +
                          "%",
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    ></div>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
