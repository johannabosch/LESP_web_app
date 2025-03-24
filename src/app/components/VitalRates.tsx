const VitalRates: React.FC = () => {

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">

      <div className = "w-[70vw] bg-[#addaf0] rounded-lg"  >
      <p className="text-md p-4 text-md"> Info here on vital rates results </p>
      </div>
      
      <h3>Mortality from Unknown Sources (M)</h3>
      <object 
            data="/figures/M all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />


      <h3>Modeled Survival (S)</h3>
      <object 
            data="/figures/S all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"

      />
      
      <h3>Modeled Fertility (F)</h3>
      <object 
            data="/figures/F all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

    <h3>Annual deviations in survival (psi)</h3>
    <object 
      data="/figures/psi all scenarios as frames plotly widget.html" 
      className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
      type="text/html"
    />

      <h3>(eps.y)</h3>
      <object 
        data="/figures/eps.y all scenarios as frames plotly widget.html" 
        className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
        type="text/html"
      />
    </div>
  );
};

export default VitalRates;

  