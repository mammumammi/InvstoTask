

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[url('/bg-pattern.svg')] bg-no-repeat p-[30px]">
      <div className="m-auto w-full text-center p-[20px] relative text-[15px]">
        <img src="/pattern-circles.svg" alt="circle patterns" 
        className="absolute top-[90px] md:top-[70px] left-[50%] transform -translate-x-[50%] -translate-y-[50px] z-0 "
        />
        <h1 className="relative text-headTextBlue text-[22px] z-30 md:mt-[40px] mt-[50px] font-extrabold">Simple, Traffic-based Pricing</h1>
        <p className="p-[10px] text-[15px] text-paraTextBlue font-semibold relative z-30">Sign-up for our 30-day free trial.No Credit Card required</p>
      </div>
      <div>Component</div>
    </main>
  );
}
