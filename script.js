function calculateDays() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const businessDaysOnly = document.getElementById('business-days').checked;

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').innerText = "Por favor, selecione ambas as datas.";
        return;
    }

    let totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    let result = totalDays;

    if (businessDaysOnly) {
        result = 0;
        let currentDate = startDate;
        
        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Ignora domingos (0) e sábados (6)
                result++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    document.getElementById('result').innerText = `Total de dias: ${result}`;
}


document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
