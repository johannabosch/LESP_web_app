"use client";

const Mortality: React.FC = () => {
    return (
      <div className="space-y-4">
        <p className="text-lg">This section presents the mortality data...</p>
        <iframe
          src="/figures/Dflox all scenarios as frames plotly widget.html"
          className="w-full h-[600px] border rounded-lg shadow-md"
          title="Productivity Figure"
        />
        <iframe
          src="/figures/Dpred all scenarios as frames plotly widget.html"
          className="w-full h-[600px] border rounded-lg shadow-md"
          title="Productivity Figure 2"
        />
        <iframe
          src="/figures/Hflox all scenarios as frames plotly widget.html"
          className="w-full h-[600px] border rounded-lg shadow-md"
          title="Productivity Figure 3"
        />
      </div>
    );
  };
  
  export default Mortality;
  