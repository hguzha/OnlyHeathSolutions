'use client';

import { useState } from 'react';

export default function ApplicationForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Application submitted successfully!');
        e.target.reset();
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="access_key"
          value="12d93745-b12d-4313-b872-274b79cb9a4b"
        />

        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
