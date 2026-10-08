export default function BeyondCode(){
  const squares=Array.from({length:64});
  return <section id="play" className="relative py-28 bg-[#0a0a09] text-[#f2f0ea] border-t border-[#282721]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="section-kicker">05 / OFF THE SCREEN</p>
        <h2 className="display-title">A little chess.<br/><em>A little sudoku.</em></h2>
        <p className="text-[#817e76] text-base leading-8 max-w-lg mt-6">I genuinely enjoy both. Chess keeps me thinking ahead and evaluating choices; sudoku keeps me patient with constraints, patterns and small details. They’re simple hobbies, but they reflect how I like to solve problems.</p>
        <div className="mt-7 flex flex-wrap gap-2"><span className="px-3 py-2 border border-[#282721] text-xs text-[#aaa69d]">Chess · strategy</span><span className="px-3 py-2 border border-[#282721] text-xs text-[#aaa69d]">Sudoku · patterns</span><span className="px-3 py-2 border border-[#282721] text-xs text-[#aaa69d]">Code · systems</span></div>
      </div>
      <div className="border border-[#282721] bg-[#11110f] p-4 max-w-md lg:ml-auto">
        <div className="grid grid-cols-8">{squares.map((_,i)=><span key={i} className={`aspect-square grid place-items-center text-lg ${(Math.floor(i/8)+i)%2===0?"bg-[#d8d5cc] text-black":"bg-[#4b4b49] text-white"}`}>{i===2?"♞":i===13?"♟":i===58?"♘":i===52?"♙":""}</span>)}</div>
        <div className="mt-3 grid grid-cols-9 opacity-40">{Array.from({length:81}).map((_,i)=><span key={i} className="aspect-square border border-[#f2f0ea]/10 grid place-items-center text-[7px] text-[#aaa69d]">{((i*5+2)%9)+1}</span>)}</div>
      </div>
    </div>
  </section>
}