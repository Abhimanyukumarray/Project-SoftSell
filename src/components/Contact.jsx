import React from 'react';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8dcd53b1-0808-4a32-8430-01b16dd227fa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(`❌${data.message}`);
    }
  };

  return (
    <section className="py-16 px-6">
      <h3 className="text-2xl font-semibold text-center mb-8">Contact Us</h3>
      <form onSubmit={onSubmit} className="max-w-xl mx-auto grid gap-4">
        <input type="text" name="name" placeholder="Name"  required className="border p-3 rounded"/>
        <input type="email" name="email" placeholder="Email" required className="border p-3 rounded"/>
        <input type="text" name="company" placeholder="Company" className="border p-3 rounded"/>
        <select name="license_type" required className="border p-3 rounded">
          <option value="">Select License Type</option>
          <option>Personal</option>
          <option>Open Source</option>
          <option>Design Software</option>
        </select>
        <textarea name="message" placeholder="Message" required className="border p-3 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 cursor-pointer">
          Submit
        </button>
      </form>
      <p className="text-center mt-4 text-sm">{result}</p>
    </section>
  );
};

export default Contact;

