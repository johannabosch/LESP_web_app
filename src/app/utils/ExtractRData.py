import rpy2.robjects as ro
from rpy2.robjects import r
import pandas as pd

# Path to the .RData file
rdata_path = r"C:\Users\BoschJ\Desktop\PIPLanalysis-main\R\IPM\output\for plot out-SouthNS.RData"

# Load the .RData file using rpy2
r['load'](rdata_path)

# Check what's loaded in the R environment
loaded_objects = list(r.objects())
print("Objects loaded from the RData file:", loaded_objects)

# Access 'mylist'
if 'mylist' in loaded_objects:
    mylist = ro.globalenv['mylist']
    
    # Access 'BUGSout' from mylist
    bugs_out = mylist.rx2('BUGSout')  # Equivalent to mylist$BUGSout in R
    
    # Check the lengths of each element in 'BUGSout'
    bugs_out_lengths = {name: len(list(bugs_out.rx2(name))) for name in bugs_out.names}
    print("Lengths of elements in 'BUGSout':", bugs_out_lengths)
    
    # Identify the maximum length
    max_length_bugs_out = max(bugs_out_lengths.values())
    
    # Adjust the lengths of each element in 'BUGSout' to match the maximum length
    adjusted_bugs_out_data = {}
    for name in bugs_out.names:
        data = list(bugs_out.rx2(name))
        
        # Pad the data with None (equivalent to NaN) if needed
        if len(data) < max_length_bugs_out:
            data.extend([None] * (max_length_bugs_out - len(data)))
        
        adjusted_bugs_out_data[name] = data

    # Create a DataFrame using the adjusted data
    jags_output_df = pd.DataFrame(adjusted_bugs_out_data)
    
    # Save the DataFrame as a CSV file
    jags_output_df.to_csv('public/data/jags_output.csv', index=False)
    
    print("JAGS output data successfully saved as 'jags_output.csv'.")

    # Now handle the 'observed' component
    observed = mylist.rx2('observed')  # Equivalent to mylist$observed in R
    
    # Print the lengths of each element in 'observed'
    observed_lengths = {name: len(list(observed.rx2(name))) for name in observed.names}
    print("Lengths of elements in 'observed':", observed_lengths)
    
    # Identify the maximum length for 'observed'
    max_length_observed = max(observed_lengths.values())
    
    # Adjust the lengths of each element to match the maximum length
    adjusted_observed_data = {}
    for name in observed.names:
        data = list(observed.rx2(name))
        
        # Pad the data with NaN values to match the max_length if needed
        if len(data) < max_length_observed:
            data.extend([None] * (max_length_observed - len(data)))
        
        adjusted_observed_data[name] = data

    # Create a Pandas DataFrame using the adjusted data
    observed_df = pd.DataFrame(adjusted_observed_data)
    
    # Save the DataFrame as a CSV file
    observed_df.to_csv('public/data/observed_data.csv', index=False)
    
    print("Observed data successfully saved as 'observed_data.csv'.")
else:
    print("'mylist' was not found in the loaded RData file. Please check the available objects.")
