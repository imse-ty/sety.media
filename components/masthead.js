export default function Masthead() {
  return (
    <div className="flex justify-center flex-col bg-gray-100 p-36">
      <h1 className="text-7xl font-semibold">
        Hey! My Name is <span className="text-wireframeRed">Imsety</span>.
      </h1>
      <div className="bg-wireframeRed h-2 w-32 my-8"></div>
      <p className="text-xl font-medium">
        I'm a Motion Designer based in Atlanta, GA.
      </p>
      <video autoPlay loop muted>
        <source src="../public/setymedia-2020-reel-loop.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
