import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <h1 className="text-white text-5xl mb-10">Monotone</h1>
      <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
      <Image
          src="https://i.ibb.co/bWKZV3d/Screenshot-2022-01-24-180805.png"
          width={150}
          height={150}
          className="rounded-full border"
        />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="mt-[100px] relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black rounded hover:bg-[#1e1e1e] group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
