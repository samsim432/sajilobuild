import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import { useAuth } from "../auth/AuthProvider";

function EyeIcon({ hidden }: { hidden: boolean }) {
  if (hidden) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m3 3 18 18" />
        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
        <path d="M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.5 4 9.5 6a11.8 11.8 0 0 1-3.1 3.8" />
        <path d="M6.1 6.1C3.8 7.7 2.5 10 2.5 10s3.5 6 9.5 6c1 0 2-.2 2.9-.5" />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.19Z"
      />

      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.74 9.74 0 0 0 12 21.75Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 13.85A5.86 5.86 0 0 1 6.23 12c0-.64.11-1.26.31-1.85V7.64H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.36l3.25-2.51Z"
      />

      <path
        fill="#EA4335"
        d="M12 6.12c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.2 14.63 2.25 12 2.25a9.74 9.74 0 0 0-8.71 5.39l3.25 2.51c.77-2.31 2.92-4.03 5.46-4.03Z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Signup() {
  const navigate = useNavigate();

  const { signup, isAuthenticated } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError(
        "Your password must be at least 8 characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      await signup(
        name.trim(),
        email.trim(),
        password,
      );

      navigate("/dashboard", {
        replace: true,
      });
    } catch (signupError) {
      setError(
        signupError instanceof Error
          ? signupError.message
          : "We couldn't create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <section
        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] sm:p-8"
        aria-labelledby="signup-title"
      >
        {/* Top accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-blue-600" />

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M19 8v6" />
              <path d="M22 11h-6" />
            </svg>
          </div>

          <h1
            id="signup-title"
            className="mt-5 text-2xl font-bold tracking-tight text-slate-950"
          >
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Start turning your ideas into working software.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
          noValidate
        >
          {/* Name */}
          <div>
            <label
              htmlFor="signup-name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Full name
            </label>

            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setError("");
              }}
              placeholder="Samir Simkhada"
              autoComplete="name"
              disabled={isSubmitting}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="signup-email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>

            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={isSubmitting}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="signup-password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                disabled={isSubmitting}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 pr-11 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((visible) => !visible)
                }
                disabled={isSubmitting}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed"
              >
                <EyeIcon hidden={!showPassword} />
              </button>
            </div>

            {/* Password requirements */}
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <span
                className={`inline-flex items-center gap-1 text-[11px] ${
                  password.length >= 8
                    ? "text-emerald-600"
                    : "text-slate-400"
                }`}
              >
                <CheckIcon />
                8+ characters
              </span>

              <span
                className={`inline-flex items-center gap-1 text-[11px] ${
                  /[A-Z]/.test(password)
                    ? "text-emerald-600"
                    : "text-slate-400"
                }`}
              >
                <CheckIcon />
                Uppercase
              </span>

              <span
                className={`inline-flex items-center gap-1 text-[11px] ${
                  /\d/.test(password)
                    ? "text-emerald-600"
                    : "text-slate-400"
                }`}
              >
                <CheckIcon />
                Number
              </span>
            </div>
          </div>

          {/* Confirm password */}
          <div>
            <label
              htmlFor="signup-confirm-password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Confirm password
            </label>

            <div className="relative">
              <input
                id="signup-confirm-password"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setError("");
                }}
                placeholder="Enter your password again"
                autoComplete="new-password"
                disabled={isSubmitting}
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 pr-11 text-sm text-slate-950 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    (visible) => !visible,
                  )
                }
                disabled={isSubmitting}
                aria-label={
                  showConfirmPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed"
              >
                <EyeIcon
                  hidden={!showConfirmPassword}
                />
              </button>
            </div>

            {confirmPassword.length > 0 && (
              <p
                className={`mt-2 text-[11px] ${
                  password === confirmPassword
                    ? "text-emerald-600"
                    : "text-red-500"
                }`}
              >
                {password === confirmPassword
                  ? "Passwords match."
                  : "Passwords do not match."}
              </p>
            )}
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>

              <span>{error}</span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-blue-400 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden="true"
                />
                Creating account...
              </>
            ) : (
              <>
                Create account

                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </span>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-[10px] font-semibold tracking-[0.14em] text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Google */}
        <button
          type="button"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm active:scale-[0.98] disabled:cursor-not-allowed disabled:text-slate-400"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Login */}
        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Log in
          </Link>
        </p>

        {/* Terms */}
        <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
          By creating an account, you agree to the
          <button
            type="button"
            className="mx-1 font-medium text-slate-600 underline underline-offset-2 hover:text-slate-900"
          >
            Terms of Service
          </button>
          and
          <button
            type="button"
            className="ml-1 font-medium text-slate-600 underline underline-offset-2 hover:text-slate-900"
          >
            Privacy Policy
          </button>
          .
        </p>
      </section>
    </AuthLayout>
  );
}

export default Signup;