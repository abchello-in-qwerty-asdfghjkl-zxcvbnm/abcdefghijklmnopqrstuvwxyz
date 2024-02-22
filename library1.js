// Define a function to create the form
function createFormInDiv(divId) {
    // Check if the div with the given ID exists
    var formDiv = document.getElementById(divId);
    if (formDiv) {
        // Create form element
        var form = document.createElement("form");
        form.setAttribute("id", "myForm");

        // Create div for each input field
        var fields = ["Name", "Email", "Mobile No", "Password"];
        fields.forEach(function(field) {
            var div = document.createElement("div");
            div.classList.add("form-group");

            // Create label
            var label = document.createElement("label");
            label.textContent = field + ":";

            // Create input
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", field.toLowerCase().replace(/\s/g, ''));
            input.classList.add("form-control");

            // Append label and input to the div
            div.appendChild(label);
            div.appendChild(input);

            // Append the div to the form
            form.appendChild(div);
        });

        // Add basic CSS styling to form elements
        form.style.marginTop = "20px";
        form.style.padding = "20px";
        form.style.border = "1px solid #ccc";
        form.style.borderRadius = "5px";

        // Append the form to the div
        formDiv.appendChild(form);
    } else {
        console.error("Div with ID '" + divId + "' not found.");
    }
}

createFormInDiv("form_div")

// Usage example:
// Assuming you have a div with ID "myDiv" in your HTML file
// <div id="myDiv"></div>
// You can call the function like this:
// createFormInDiv("myDiv");
