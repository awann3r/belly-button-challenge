//get URL with data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// fetch the JSON data and log it
d3.json(url).then(function(data){
    console.log(data);
}); 

//initialize the dashboard
function initialize() {
    //select dropdown menu with D3
    let dropdown = d3.select("#selDataset");

    //get names from samples data and populate the dropdown menu
    d3.json(url).then((data) => {
        //variable for sample names
        let names = data.names;

        //add to dropdown menu
        names.forEach((name) => {
            dropdown.append("option").attr("value", name).text(name);
        });

        //set first sample on list
        let first_sample = names[0];
        console.log(first_sample);

        //call init function to make the demogrpahic panel, bar chart, and bubble chart
        createBar(first_sample);
        createBubble(first_sample);
        createDemos(first_sample);
    });
};

//create the bar chart
function createBar(selectedValue){
    //fetch the JSON data
    d3.json(url).then((data) => {
        console.log(data);

        //create an array of sample objects
        let sampleData = data.samples;

        //create a filter that matches selected sample id
        let filteredData = sampleData.filter(sample => sample.id === selectedValue);

        //store first index of array
        let first_result = filteredData[0];

        //display the top 10 OTUs
        let sample_values = first_result.sample_values.slice(0,10);
        let otu_ids = first_result.otu_ids.slice(0,10);
        let otu_labels = first_result.otu_labels.slice(0,10);
        console.log(sample_values, otu_ids, otu_labels);
        
        //create trace of data for bar chart
        let trace1 = {
            x: sample_values.reverse(),
            y: otu_ids.map(item => `OTU ${item}`).reverse(),
            text: otu_labels.reverse(),
            type: 'bar',
            orientation: 'h'
        };

        //apply layout to bar chart
        let layout = {
            title: `Top 10 OTUs Present in ${selectedValue}`
        };

        //plot the bar using Plotly
        Plotly.newPlot("bar", [trace1], layout);
    });
};

//create a bubble chart
function createBubble(selectedValue){
    //fetch the JSON data
    d3.json(url).then((data) => {
        console.log(data);

        //create an array of sample objects
        let sampleData = data.samples;

        //create a filter that matches selected sample id
        let filteredData = sampleData.filter(sample => sample.id === selectedValue);

        //store first index of array
        let first_result = filteredData[0];

        //display the top 10 OTUs
        let sample_values = first_result.sample_values.slice(0,10);
        let otu_ids = first_result.otu_ids.slice(0,10);
        let otu_labels = first_result.otu_labels.slice(0,10);
        console.log(sample_values, otu_ids, otu_labels);
        
        //create trace of data for bar chart
        let trace2 = {
            x: otu_ids.reverse(),
            y: sample_values.reverse(),
            text: otu_labels.reverse(),
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids
            }
        };

        //apply layout to bar chart
        let layout = {
            title: `Bacteria Count in ${selectedValue}`,
            xaxis: {title: "OTU ID"}
        };

        //plot the bar using Plotly
        Plotly.newPlot("bubble", [trace2], layout);
    });
};

function createDemos(selectedValue){
    //fetch the JSON data
    d3.json(url).then((data) => {
        
        //create array of demographic info from metadata
        let demo_info = data.metadata;

        //create a filter that matches selected sample id
        let filteredDemo = demo_info.filter(sample => sample.id == selectedValue);

        //store first index of array
        let result = filteredDemo[0];

        //clear out previous entries setting the text to a blank string
        let demo_data = d3.select("#sample-metadata").html("");

        //Object.entries() is a built-in method in JavaScript 
        //returns an array of a given object's own enumerable property [key, value]
        //iterate through the entries and append to h4
        Object.entries(result).forEach(([key, value]) => {
            console.log(key,value);
            //select the demographic info html section with d3 and append new key-value pair
            demo_data.append('h6').text(`${key}: ${value}`);
        });
        
    });
};

// //define the function when the dropdown detects a change (function name as defined in index.html)
function optionChanged(value){
    //log the value for debug
    console.log(value);
    createBar(value);
    createBubble(value);
    createDemos(value);
};

initialize();
