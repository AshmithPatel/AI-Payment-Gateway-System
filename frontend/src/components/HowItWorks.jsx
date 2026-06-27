import { FaUserPlus, FaSignInAlt, FaCreditCard, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-blue-600" />,
      title: "Register",
      description: "Create your account securely."
    },
    {
      icon: <FaSignInAlt className="text-4xl text-green-600" />,
      title: "Login",
      description: "Login using your credentials."
    },
    {
      icon: <FaCreditCard className="text-4xl text-purple-600" />,
      title: "Make Payment",
      description: "Choose a payment method and pay securely."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-orange-500" />,
      title: "Success",
      description: "Receive instant payment confirmation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;