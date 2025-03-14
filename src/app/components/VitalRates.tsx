const VitalRates: React.FC = () => {

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">

      <div className = "w-[70vw] bg-[#addaf0] rounded-lg"  >
      <p className="text-md p-4 text-md"> Info here on vital rates results </p>
      </div>
      
      <h3>Mortality from Unknown Sources (M)</h3>
      <iframe
        src="/figures/M all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

      <h3>Modeled Survival (S)</h3>
      <iframe
        src="/figures/S all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />
      
      <h3>Modeled Fertility (M)</h3>
      <iframe
        src="/figures/M all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
        title="M"
      />

    <h3>Annual deviations in survival (psi)</h3>
      <iframe
        src="/figures/psi all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
      />

<h3>(eps.y)</h3>
      <iframe
        src="/figures/eps.y all scenarios as frames plotly widget.html"
        className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
      />
    </div>
  );
};

export default VitalRates;

  