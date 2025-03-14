const Deaths: React.FC = () => {

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">

      <div className = "w-[70vw] bg-[#addaf0] rounded-lg"  >
      <p className="text-md p-4 text-md"> Info here on vital rates results </p>
      </div>
      
      <h3>(Dflox)</h3>
      <iframe
        src="/figures/Dflox all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

      <h3>(Dpred)</h3>
      <iframe
        src="/figures/Dpred all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />
      
      <h3>(Doffshore)</h3>
      <iframe
        src="/figures/Doffshore all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

    <h3>(Donshore)</h3>
      <iframe
        src="/figures/Donshore all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
      />

// still need to seperate these into two different tabs
<h3>(Hflox)</h3>
      <iframe
        src="/figures/Hflox all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

      <h3>(Hpred)</h3>
      <iframe
        src="/figures/Hpred all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />
      
      <h3>(Hoffshore)</h3>
      <iframe
        src="/figures/Hoff all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

    <h3>(Honshore)</h3>
      <iframe
        src="/figures/Hon all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
      />

    </div>
  );
};

export default Deaths;

  