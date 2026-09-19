import FeaturePanels from "@/components/landing/FeaturePanels";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LandingPage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect('/explore');
  
  return (
    <>
      <Hero />
      <FeaturePanels />
      <Footer />
    </>
  );
}
