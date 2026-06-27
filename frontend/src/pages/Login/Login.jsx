import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Login() {
  return (
    <AuthLayout title="Login">

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <Button text="Login" />

      <p className="text-center mt-5">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>
      </p>

    </AuthLayout>
  );
}

export default Login;