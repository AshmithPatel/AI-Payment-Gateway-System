import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Register() {
  return (
    <AuthLayout title="Create Account">

      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Create password"
      />

      <Button text="Register" />

      <p className="text-center mt-5">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold"
        >
          Login
        </Link>
      </p>

    </AuthLayout>
  );
}

export default Register;