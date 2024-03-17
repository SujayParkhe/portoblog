"use client";

const Contact = () => {
  return (
    <div className="my-16">
      <h1 className="text-2xl font-bold">
        Thanks for taking the time to reach out. Please drop a message for any
        queries.
      </h1>
      <form className="mt-16 flex flex-col">
        <div className="flex flex-col sm:flex-row">  
          <input type="text" placeholder="Name" className="mr-0 sm:mr-4 py-2 pl-2 flex-grow border rounded-sm border-hoary focus:border-mandarin focus:outline-none" />
          <input type="email" placeholder="Email" className="mt-4 sm:mt-0 py-2 pl-2 flex-grow border rounded-sm border-hoary focus:border-mandarin focus:outline-none" />
        </div>
        <textarea placeholder="Message" className="h-32 mt-4 sm:mt-8 pl-2 border rounded-sm border-hoary focus:border-mandarin focus:outline-none" rows={4} maxLength={500} />
        <button type="submit" onClick={() =>  alert('Button Clicked')} className="mt-8 py-2 bg-mandarin text-white font-semibold rounded-sm hover:bg-azure focus:outline-none">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
