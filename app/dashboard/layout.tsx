import { ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import prisma from "../lib/db";

async function getData({ email, id, firstName, lastName }) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      stripeCustomerId: true,
    },
  });

  if (!user) {
    const name = `${firstName ?? ''}${lastName ?? ''}`;
    await prisma.user.create({
      data: {
        id: id,
        email: email,
        name: name,
      },
    });
  }
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  if (!user) {
    return redirect('/'); 
  }
  
  await getData({
    email: user.email as string, 
    firstName: user.given_name as string,
    id: user.id as string,
    lastName: user.family_name as string,
  });

  return (
    <div className="flex flex-col space-y-6 mt-10">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1f]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
