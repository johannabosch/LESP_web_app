import pandas as pd
import plotly.graph_objects as go

# Load data
jags_df = pd.read_csv('public/data/jags_output.csv')
observed_df = pd.read_csv('public/data/observed_data.csv')

def create_plot(mydf, mynode, observed=None):
    myplotdf = mydf[mydf['node'] == mynode]
    
    fig = go.Figure()
    
    # Plot the estimated data
    fig.add_trace(go.Scatter(x=myplotdf['time'], y=myplotdf['mean'], mode='lines+markers', 
                             name='Estimated', error_y=dict(array=myplotdf['sd'], visible=True)))
    
    # Plot observed data if available
    if observed is not None:
        obs_data = observed[(observed['node'] == mynode) & (observed['value'].notna())]
        fig.add_trace(go.Scatter(x=obs_data['time'], y=obs_data['value'], mode='markers', name='Observed',
                                 error_y=dict(array=obs_data['error'], visible=True)))
    
    fig.update_layout(title=f"Plot for {mynode}", xaxis_title="Year", yaxis_title=mynode,
                      updatemenus=[{
                          'type': 'buttons',
                          'buttons': [
                              {'label': 'SD', 'method': 'update', 'args': [{'visible': [True, False]}]},
                              {'label': '95%', 'method': 'update', 'args': [{'visible': [False, True]}]}
                          ]
                      }])
    return fig

# Example of generating a plot
plot_N1 = create_plot(jags_df, 'N1', observed_df)
plot_N1.write_html('public/figures/N1.html')
