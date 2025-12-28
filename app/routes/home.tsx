import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCards from "~/components/ResumeCards";
import { resumes } from "@/constants";
import type { Resume } from "@/types";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to Resume Analyzer!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review your application and resume with AI</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCards key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
  </main>;

}
