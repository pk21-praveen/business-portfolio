import { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="mt-4">
        <label htmlFor="name" className="block">Name:</label>
        <input type="text" id="name" className="block border mb-4 w-full p-2" />
        <label htmlFor="email" className="block">Email:</label>
        <input type="email" id="email" className="block border mb-4 w-full p-2" />
        <label htmlFor="message" className="block">Message:</label>
        <textarea id="message" className="block border mb-4 w-full p-2"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">Send</button>
      </form>
    </div>
  );
};

export default Contact;
