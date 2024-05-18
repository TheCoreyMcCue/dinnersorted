import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();
  console.log("🚀 ~ Home ~ user:", user);
  return <section></section>;
};

export default Home;
