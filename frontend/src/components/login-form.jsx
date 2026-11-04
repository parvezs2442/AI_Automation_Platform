
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

import { Bot, Sparkles, Workflow, Zap } from "lucide-react";
import { login } from "@/features/auth";

export function LoginForm({ className, ...props }) {

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      const data = await login(token)
      console.log(data)
    } catch (error) {
      console.log("error agya", error);
    }
  };

  return (
    <div
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b16] px-4 py-10",
        className
      )}
      {...props}
    >

      {/* Background Gradients */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 flex flex-col items-center text-center">

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/20">
            <Bot className="h-9 w-9 text-white" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Automate<span className="text-purple-400">AI</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Build smarter. Automate everything.
          </p>

        </div>

        {/* Login Card */}
        <Card className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl">

          <CardContent className="p-8 sm:p-10">

            <div className="mb-8 text-center">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
                <Sparkles className="h-3.5 w-3.5" />
                Welcome to the future
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Welcome Back!
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Sign in to build, manage and deploy
                your AI agents effortlessly.
              </p>

            </div>

            {/* Google Login */}
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              type="button"
              className="h-12 w-full gap-3 rounded-xl border-white/15 bg-white text-sm font-semibold text-gray-900 transition-all hover:scale-[1.02] hover:bg-gray-100"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.2 13.22l7.98 6.19C13.07 13.72 18.11 9.5 24 9.5Z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.02 46.98 31.8 46.98 24.55Z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.18 28.59a14.4 14.4 0 0 1 0-9.18L3.2 13.22a24 24 0 0 0 0 21.56l7.98-6.19Z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-5.89 0-10.93-4.22-12.82-9.91L3.2 34.78C6.51 42.62 14.62 48 24 48Z"
                />
              </svg>

              Continue with Google
            </Button>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-gray-500">
                QUICK & SECURE LOGIN
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">

              <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-300">
                  AI Automation
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <Workflow className="h-4 w-4 text-purple-400" />
                <span className="text-xs text-gray-300">
                  Smart Workflows
                </span>
              </div>

            </div>

            <p className="mt-7 text-center text-xs leading-5 text-gray-500">
              By continuing, you agree to our{" "}
              <span className="cursor-pointer text-gray-300 hover:text-purple-400">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-gray-300 hover:text-purple-400">
                Privacy Policy
              </span>.
            </p>

          </CardContent>
        </Card>

        {/* Footer */}
        <p className="mt-7 text-center text-xs text-gray-600">
          © 2026 Automate AI. All rights reserved.
        </p>

      </div>
    </div>
  );
}
