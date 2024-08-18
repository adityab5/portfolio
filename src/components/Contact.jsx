export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-12 md:px-40 lg:px-64 w-full bg-white"
    >
      <div className="text-center lg:text-left">
        <h4 className="text-[#147EFB] uppercase text-xl mb-4">Contact</h4>
        <h3 className="text-[#2D2E32] text-2xl lg:text-3xl">Let's Connect! Hit me up! 🔔</h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 mt-12">
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-14 h-14 rounded-full shadow-md">
            <a href="/" className="text-[#147EFB]">
              <i className="ri-map-2-line text-3xl"></i>
            </a>
          </div>
          <div className="text-left lg:text-left">
            <h5 className="text-[#2D2E32] text-lg">Location</h5>
            <p className="text-gray-500 hover:text-[#147EFB] transition duration-200">Bangalore, Karnataka</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center w-14 h-14 rounded-full shadow-md">
            <a href="/" className="text-[#147EFB]">
              <i className="ri-mail-send-line text-3xl"></i>
            </a>
          </div>
          <div className="text-left lg:text-left">
            <h5 className="text-[#2D2E32] text-lg">Mail</h5>
            <a href="mailto:bhushanadiit55555@gmail.com" className="no-underline">
              <p className="text-gray-500 hover:text-[#147EFB] transition duration-200">
                bhushanadiit55555@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
