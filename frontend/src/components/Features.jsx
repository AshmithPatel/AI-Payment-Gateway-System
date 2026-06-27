function Features() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        Features
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          Secure Payments
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          AI Fraud Detection
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          Fast Checkout
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          Analytics Dashboard
        </div>
      </div>
    </section>
  );
}

export default Features;