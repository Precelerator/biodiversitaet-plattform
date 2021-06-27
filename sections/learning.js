export default function Learning() {
  return (
    <>
      <section className="py-12 bg-white" id="learning">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-green-600 uppercase">
              INFORMIEREN ÜBER BIODIVERSITÄT
            </h2>
            <img className="w-20 mx-auto mt-6 rounded-full" src="./luchs.jpg"></img>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Grafik der Woche: Luchs
              </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
              Wir veröffentlichen Informationen und interaktive Visualisierungen rund um Biodiversität und Artenschutz.
            </p>
            <div>
              <iframe
                className="mx-auto mt-6"
                src="https://embed.kumu.io/e438bbfb8880051f9b153828221a15c3?simple=1"
                width="940"
                height="600"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
