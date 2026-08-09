export default function Contact() {
  return (
    <div className="container mx-auto py-10 text-center bg-slate-50">
      <section>
        <h2 className="text-3xl font-bold">Contact US</h2>
        <p className="py-4">Have questions, feedback, or suggestions?</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-5">Contact Form</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4 text-left">

          <div className="flex items-center gap-4">
            <label className="w-20 font-medium text-gray-700">Name :</label>
            <input type="text" placeholder="Enter Name" className="flex-1 px-4 py-2 border border-slate-300 rounded-lg outline-none placeholder-gray-400" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-20 font-medium text-gray-700">Email :</label>
            <input type="email" placeholder="Enter Email" className="flex-1 px-4 py-2 border border-slate-300 rounded-lg outline-none placeholder-gray-400" />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-20 font-medium text-gray-700 pt-2">Message :</label>
            <textarea placeholder="Enter Message" className="flex-1 px-4 py-2 border border-slate-300 rounded-lg outline-none placeholder-gray-400"></textarea>
          </div>

          <div className="text-center mt-4">
            <button type="button" className="text-white bg-blue-600 px-3 rounded border font-medium">
              Submit
            </button>
          </div>

        </form>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-5">Social Links</h2>
        <p>GitHub : <a href="https://github.com" target="_blank" className="text-blue-500">https://github.com</a></p>
        <p className="my-3">LinkedIn : <a href="https://www.linkedin.com/in/sourabh-malik-25843340b" target="_blank" className="text-blue-500">https://www.linkedin.com</a></p>
        <p>Portfolio : <a href="" target="_blank" className="text-blue-500"></a></p>
      </section>
    </div>
  );
}
