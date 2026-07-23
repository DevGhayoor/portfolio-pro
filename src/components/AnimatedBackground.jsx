function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050816]">

      {/* Purple Glow */}
      <div
        className="
        absolute top-10 left-10
        w-96 h-96
        bg-violet-600/40
        rounded-full
        blur-[120px]
        animate-pulse
        "
      ></div>


      {/* Cyan Glow */}
      <div
        className="
        absolute bottom-10 right-10
        w-96 h-96
        bg-cyan-500/30
        rounded-full
        blur-[120px]
        animate-pulse
        "
      ></div>


      {/* Moving Circle */}
      <div
        className="
        absolute
        w-40 h-40
        bg-purple-500/30
        rounded-full
        blur-3xl
        animate-bounce
        top-1/2
        left-1/2
        "
      ></div>


    </div>
  );
}

export default AnimatedBackground;