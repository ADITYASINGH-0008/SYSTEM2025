const scriptURL = "https://script.google.com/macros/s/AKfycbwGzkYr-sDq_JIEwf12dnBMDvHRt2dU2LmNwVsd2W2Zl0d7WQX4FEjckRnnFilPyL7F_w/exec";

document.getElementById('payrollForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        employeeId: document.getElementById('employeeId').value,
        employeeName: document.getElementById('employeeName').value,
        checkIn: document.getElementById('checkIn').value,
        checkOut: document.getElementById('checkOut').value,
        overtime: document.getElementById('overtime').value,
        deductions: document.getElementById('deductions').value,
        baseSalary: document.getElementById('baseSalary').value,
        finalSalary: calculateSalary()
    };

    const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert('Payment slip generated and saved successfully!');
    } else {
        alert('Error saving data!');
    }
});

function calculateSalary() {
    const base = parseFloat(document.getElementById('baseSalary').value);
    const overtime = parseFloat(document.getElementById('overtime').value) * 150;
    const deductions = parseFloat(document.getElementById('deductions').value);
    return base + overtime - deductions;
}
