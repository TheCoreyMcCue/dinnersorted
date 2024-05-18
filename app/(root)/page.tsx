import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();
  console.log("🚀 ~ Home ~ user:", user);
  return <main></main>;
};

export default Home;
