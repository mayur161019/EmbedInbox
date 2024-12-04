"use client";

// import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSendEmail = () => {
    router.push("/send-email");
  };

  const handleAskQuestion = () => {
    router.push("/ask-question");
  };

  return (
    <>
      {/* <Hero /> */}
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-light text-[2.5rem] mb-4 text-center">EmbedInbox</h2>
        <h3 className="font-medium text-lg mb-4 text-gray-400 italic">Your smart inbox companion</h3>
        <p className="mb-4 text-sm"> Embed your emails into a powerful vectorized database and interact with your inbox like never before. Ask questions, search intuitively, and get insightful answers from your embedded inbox. With the power of Supabase and Next.js, EmbedInbox makes your emails smarter and more accessible.</p>
        
        <div className="flex flex-col gap-4">
          <button onClick={handleSendEmail} className="bg-blue-500 text-white p-2">
            Add Email
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <button onClick={handleAskQuestion} className="bg-blue-500 text-white p-2">
            Ask Question
          </button>
        </div>
      </main>
    </>
  );
}
