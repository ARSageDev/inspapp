document.addEventListener("DOMContentLoaded", function () {
    console.log("Inspection App is running!");

    // Inject content into the page
    document.body.innerHTML = `
        <h1>Inspection App</h1>
        <button id="startInspection">Start Inspection</button>
        <div id="inspectionForm" style="display: none;">
            <h2>Enter Inspection Details</h2>
            <input type="text" id="customerName" placeholder="Customer Name" />
            <input type="text" id="address" placeholder="Inspection Address" />
            <button id="submitInspection">Submit</button>
        </div>
    `;

    // Show form when button is clicked
    document.getElementById("startInspection").addEventListener("click", function () {
        document.getElementById("inspectionForm").style.display = "block";
    });

    // Handle form submission
    document.getElementById("submitInspection").addEventListener("click", function () {
        const customerName = document.getElementById("customerName").value;
        const address = document.getElementById("address").value;

        console.log("Submitting inspection for:", customerName, address);
        alert(`Inspection scheduled for ${customerName} at ${address}`);
    });
});
