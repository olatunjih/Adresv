import React from 'react';

const Testimonials = () => {
  // Placeholder data
  const testimonials = [
    { name: 'User A', feedback: 'Great platform, very intuitive!', rating: 5 },
    { name: 'User B', feedback: 'Love the ROI features.', rating: 4 },
  ];

  return (
    <section className="py-12 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Testimonials</h3>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="text-right font-semibold mt-2">- {testimonial.name} ({testimonial.rating}/5 Stars)</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
