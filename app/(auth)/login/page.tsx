import LoginPageClient from "@/components/auth/LoginPageClient";
import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {

  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect('/explore');

  return <LoginPageClient />
}

export default Page
