# Belly Button Challenge

## Background 
For this challenge, we are tasked to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Challenge Deliverables
A [static page](https://awann3r.github.io/belly-button-challenge/) that displays the following:
* Bar Chart showing Top 10 OTUs
* Bubble Chart showing OTUs
* Demographic Info of selected value
* Charts and demo info updates as a new value is selected from dropdown menu

## Instructions 
#### Create Bar Chart:
1. Use the D3 library to read in `samples.json` from the URL `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual. 
    * Use sample_values as the values for the bar chart. 
    * Use otu_ids as the labels for the bar chart. 
    * Use otu_labels as the hovertext for the chart.

#### Create Bubble Chart:
1. Bubble chart that displays each sample. 
    * Use `otu_ids` for the x values. 
    * Use `sample_values` for the y values. 
    * Use `sample_values` for the marker size. 
    * Use `otu_ids` for the marker colors. 
    * Use `otu_labels` for the text values. 

#### Create Demographics Info:
1. Display the sample metadata, i.e., an individual's demographic information. 
    * Display each key-value pair from the metadata JSON object somewhere on the page.

#### Update Data:
1. Update all the plots when a new sample is selected. 
    * Bar chart, bubble chart, and demo info needs to update when a new subject id is selected.
2. Additionally, you are welcome to create any layout that you would like for your dashboard.
    * i.e. adding titles to both charts that update to reflect subject id selected.

## References and Acknowledgements 
* Learning Assistant Brandon Wong helped me to resolved some errors I received while creating the code (finding out that my variables weren't identified correctly and commenting out the bonus.js file in index.html as it was throwing an error). 
* Additionally, StackOverflow had useful examples for html clearing.