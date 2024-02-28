import React from "react";
import { Button } from '@/components/ui/Button'
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";

export default async function Home() {
  const {isAuthenticated} = getKindeServerSession();
  if(await isAuthenticated()){
     return redirect('/dashboard');
  }
  return (
    <section className="flex items- enter justify-center bg-background h-(90vh)">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort Your Notes Easily
              </span>
            </span>
            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6l"> Create notes with ease</h1>
          <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
        Proin pulvinar lacinia ante quis convallis. Nullam accumsan tristique fermentum. Aliquam fermentum dolor at ligula dignissim tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nec augue sit amet enim scelerisque dignissim id non dui.
          </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
            <Button size="lg" className="w-full">

              Sign Up for free

            </Button>
            </RegisterLink>

          </div>


        </div>


      </div>


    </section>


  );
}
