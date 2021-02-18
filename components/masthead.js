export default function Masthead() {
  return (
    <div className="relative flex justify-center items-center h-60v overflow-hidden">
      {/* Heading */}
      <div className="relative p-16 z-30 w-auto min-w-full">
        <h1 className="text-7xl font-semibold">
          Hey! My Name is <span className="text-wireframeRed">Imsety</span>.
        </h1>
        <div className="bg-wireframeRed h-2 w-32 my-8"></div>
        <p className="text-3xl font-medium">
          I'm a Motion Designer based in Atlanta, GA.
        </p>
      </div>
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full max-w-none min-h-full"
      >
        <source src="/setymedia-2020-reel-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
