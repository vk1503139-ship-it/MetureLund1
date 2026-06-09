<div className="max-w-4xl mx-auto p-6">
  <h1 className="text-4xl font-bold text-center mb-6">
    Nalanda Jan Samasya Portal
  </h1>

  <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">

    <input
      type="text"
      placeholder="Your Full Name"
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      placeholder="Ward Number"
      className="w-full border p-3 rounded"
    />

    <select className="w-full border p-3 rounded">
      <option>Select Department</option>
      <option>Police</option>
      <option>Nagar Nigam</option>
      <option>Electricity</option>
      <option>Road</option>
      <option>Water Supply</option>
      <option>Garbage</option>
      <option>Street Light</option>
    </select>

    <textarea
      rows="6"
      placeholder="Write your complaint here..."
      className="w-full border p-3 rounded"
    ></textarea>

    <input
      type="file"
      className="w-full border p-3 rounded"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white p-3 rounded font-bold"
    >
      Submit Complaint
    </button>

  </form>
</div>
