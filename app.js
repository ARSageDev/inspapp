document.addEventListener("DOMContentLoaded", function () {
    console.log("Inspection App is running!");

    // Inject form into page
    document.body.innerHTML = `
        <h1>Inspection App</h1>
        <button id="startInspection">Start Inspection</button>
        <div id="inspectionForm" style="display: none;">
            <h2>Enter Inspection Details</h2>
            <input type="text" id="customerName" placeholder="Customer Name" />
            <input type="text" id="address" placeholder="Inspection Address" />
            <button id="submitInspection">Submit</button>
        </div>
        <h2>Scheduled Inspections</h2>
        <ul id="inspectionList"></ul>
    `;

    // Show form when button is clicked
    document.getElementById("startInspection").addEventListener("click", function () {
        document.getElementById("inspectionForm").style.display = "block";
    });

    // Handle form submission
    document.getElementById("submitInspection").addEventListener("click", function () {
        const customerName = document.getElementById("customerName").value;
        const address = document.getElementById("address").value;

        if (!customerName || !address) {
            alert("Please fill out all fields!");
            return;
        }

        fetch('/submit-inspection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerName, address })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadInspections();
        })
        .catch(error => console.error("Error submitting inspection:", error));
    });

    // Function to load and display inspections
    function loadInspections() {
        fetch('/inspections')
            .then(response => response.json())
            .then(inspections => {
                const inspectionList = document.getElementById("inspectionList");
                inspectionList.innerHTML = "";
                inspections.forEach(inspection => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${inspection.customerName} - ${inspection.address}`;
                    inspectionList.appendChild(listItem);
                });
            })
            .catch(error => console.error("Error loading inspections:", error));
    }

    loadInspections();
});
