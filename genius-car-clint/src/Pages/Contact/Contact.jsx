import React from "react";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-orange-600 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="input input-bordered w-full"
              placeholder="Let us know how we can help you"
              required
            />
            
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
