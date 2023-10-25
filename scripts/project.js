/*Final project proposal

Using the API at https://api.fda.gov/food/enforcement.json?limit=10 Links to an external site. my purpose is to create a web application that will fetch the data from the API regard FDA food recalls. The application will parse through the data and sort it according to city, state, reason for recall, recall report date, product type, and quantity.*/

document.addEventListener("DOMContentLoaded", function() {

    // Declare and initialize global variables
    const recallElement = document.querySelector("#results");
    //console.log(recallElement);
    let recallList = [];

    const reset = () => {
        recallElement.innerHTML = "";
    }

    const displayRecalls = (recalls) => {
        recalls.forEach(recall => {
            let article = document.createElement("article");

            const recallEventId = document.createElement("h3");
            recallEventId.textContent = `Event ID: ${recall.event_id}`;

            const cityElement = document.createElement("p");
            cityElement.textContent = `City: ${recall.city}`;

            const stateElement = document.createElement("p");
            stateElement.textContent = `State: ${recall.state}`;

            const reasonElement = document.createElement("p");
            reasonElement.textContent = `Reason: ${recall.reason_for_recall}`;

            const reportDateElement = document.createElement("p");
            reportDateElement.textContent = `Report Date: ${recall.report_date}`;

            const productTypeElement = document.createElement("p");
            productTypeElement.textContent = `Product Type: ${recall.product_type}`;

            const productQuantityElement = document.createElement("p");
            productQuantityElement.textContent = `Product Quantity: ${recall.product_quantity}`;

            const productDescriptionElement = document.createElement("p");
            productDescriptionElement.textContent = `Product Description: ${recall.product_description}`;             

            article.appendChild(recallEventId);
            article.appendChild(cityElement);
            article.appendChild(stateElement);
            article.appendChild(reasonElement);
            article.appendChild(reportDateElement);
            article.appendChild(productTypeElement);
            article.appendChild(productQuantityElement);
            article.appendChild(productDescriptionElement);
            
            recallElement.appendChild(article);
        });
    }

    const getRecalls = async () => {
        try {
            const response = await fetch ("https://api.fda.gov/food/enforcement.json?limit=10");
            if (response.ok) {
                const data = await response.json();
                recallList = data.results;
                console.log("Recall data:", recallList);
                displayRecalls(recallList);
            } else {
                console.error("Failed to fetch data. ");
            }
        } catch (error) {
            console.error("Error:", error);
        } 
    }

/* sortBy Function */ 
    const sortBy = (recalls) => {
        reset();
        const selectedSortOption = document.querySelector("#sortBy").value;
        switch (selectedSortOption) {
            case "city":
                recalls.sort((a, b) => {
                    return a.city.localeCompare(b.city);
                });
                break;
            case "state":
                recalls.sort((a, b) => {
                    return a.state.localeCompare(b.state);
                });
                break;
            case "reasonForRecall":
                recalls.sort((a, b) => {
                    return a.reason_for_recall.localeCompare(b.reason_for_recall);
                });
                break;
            case "ReportDate":
                recalls.sort((a, b) => {
                    const dateA = new Date(a.report_date);
                    const dateB = new Date(b.report_date);
                    return dateB - dateA;
                });
                break;
            case "productType":
                recalls.sort((a, b) => {
                    return a.product_type.localeCompare(b.product_type);
                });
                break;
            case "productQuantity": 
                recalls.sort((a, b) => {
                    return a.product_quantity.localeCompare(b.product_quantity);
                });
                break; 
            case "productDescription":
                recalls.sort((a, b) => {
                    return a.product_type.localeCompare(b.product_type);
                });
                break;
            case "all":
                break;
        };
        displayRecalls(recalls);
    };
    
/* Event Listener */
    document.querySelector("#sortBy").addEventListener ("change", () => {sortBy(recallList)
    });

    getRecalls();

    });