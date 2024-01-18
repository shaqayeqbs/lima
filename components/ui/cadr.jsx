export default function Cadr({ children }) {
  return (
    <div
      className="relative !z-50 lg:w-[566px] px-8 flex-col  justify-start gap-[32px] py-4 items-center lg:px-[80px] lg:py-[64px] min-h-[616px] mx-auto"
      style={{ background: "rgba(255, 255, 255, 0.080)", zIndex: 100 }}
    >
      {children}
    </div>
  );
}
