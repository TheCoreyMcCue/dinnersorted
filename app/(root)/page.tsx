import { currentUser } from "@clerk/nextjs/server";
import { Button } from "../../components/ui/button";
import Link from "@/node_modules/next/link";
import Image from "next/image";

const Home = async () => {
  const user = await currentUser();
  console.log("🚀 ~ Home ~ user:", user);
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
            Never struggle to decide what's for dinner again. Dinner is Sorted!
          </h1>
          <p className="p-regular-18 md:p-regular-15">
            Tired of the daily "what's for dinner tonight" struggle? Let us
            figure it out for you!
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#">Explore Now</Link>
          </Button>
        </div>
        <Image
          src="/assets/hero.jpeg"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain rounded-md object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>
  );
};

export default Home;
