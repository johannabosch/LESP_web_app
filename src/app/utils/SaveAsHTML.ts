export const SaveAsHtml = () => {
    // Select the content that contains only the plotly plots
    const ploverContent = document.querySelector('.plover-metrics-content');
    
    if (ploverContent) {
      // Grab all Plotly plots within the chosen metric and site
      const plotsToSave = ploverContent.querySelectorAll('.plotly-graph-div');
      const plotTitles = ploverContent.querySelectorAll('h3'); // Assuming h3 tags are used for plot titles
  
      // Construct the HTML content for the plots
      let htmlContent = '';
      plotsToSave.forEach((plot, index) => {
        const title = plotTitles[index]?.outerHTML || '';
        htmlContent += `${title}${plot.outerHTML}<br/>`; // Add title and plot
      });
  
      // Include the necessary Plotly.js library in the HTML
      const pageContent = `
        <html>
          <head>
            <title>Plover Metrics Plots</title>
            <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
            <style>
              body { font-family: Arial, sans-serif; }
              .plot-container { text-align: center; margin: 20px; }
              h3 { text-align: center; }
            </style>
          </head>
          <body>
            ${htmlContent}
          </body>
        </html>
      `;
  
      // Create the Blob and trigger the download
      const blob = new Blob([pageContent], { type: 'text/html' });
      const link = document.createElement('a');
  
      link.href = URL.createObjectURL(blob);
      link.download = 'plover_metrics.html'; // Filename for the HTML file
      link.click();
  
      URL.revokeObjectURL(link.href);
    } else {
      alert('Content not found! Please ensure that the plots are rendered on the page.');
    }
  };
  