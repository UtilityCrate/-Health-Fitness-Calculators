
function calculateDueDate() {
    const lmpInput = document.getElementById("lmpDate").value;

    if (!lmpInput) {
        alert("Please enter the date of your last menstrual period.");
        return;
    }

    const lmpDate = new Date(lmpInput);
    
    // Add 280 days (40 weeks) to LMP to get due date
    const dueDate = new Date(lmpDate);
    dueDate.setDate(dueDate.getDate() + 280);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dueDate.toLocaleDateString('en-IN', options);

    document.getElementById("dueDateResult").innerHTML = `
        <p><strong>Estimated Due Date:</strong> <span class="text-pink-700 font-semibold">${formattedDate}</span></p>
    `;
}

