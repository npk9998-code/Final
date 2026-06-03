// دالة التنقل بين الأقسام
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// انتظام عمل الكود بعد تحميل الصفحة الكامل
document.addEventListener('DOMContentLoaded', () => {
    
    // --- إدارة قسم العقارات ---
    const propertyForm = document.getElementById('property-form');
    const propertiesList = document.getElementById('properties-list');

    if (propertyForm && propertiesList) {
        propertyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('prop-title').value;
            const price = document.getElementById('prop-price').value;
            const type = document.getElementById('prop-type').value;

            const li = document.createElement('li');
            li.innerHTML = `<span><strong>${title}</strong></span> <span>${Number(price).toLocaleString()} ريال (${type})</span>`;
            propertiesList.appendChild(li);

            propertyForm.reset();
        });
    }

    // --- إدارة قسم حاسبة الاستثمار ---
    const calcForm = document.getElementById('calc-form');
    const calcResult = document.getElementById('calc-result');

    if (calcForm && calcResult) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const principal = parseFloat(document.getElementById('invest-amount').value);
            const rate = parseFloat(document.getElementById('invest-rate').value) / 100;
            const years = parseInt(document.getElementById('invest-years').value);

            // معادلة الفائدة المركبة المستوحاة من مبادئ الـ CME-1
            const futureValue = principal * Math.pow((1 + rate), years);
            const profit = futureValue - principal;

            calcResult.style.display = 'block';
            calcResult.innerHTML = `
                <p style="margin: 5px 0;">إجمالي المبلغ بعد ${years} سنوات: <strong>${futureValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ريال</strong></p>
                <p style="margin: 5px 0;">صافي أرباح الاستثمار: <span style="color: green; font-weight: bold;">+${profit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ريال</span></p>
            `;
        });
    }
});
