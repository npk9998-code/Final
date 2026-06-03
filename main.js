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
            li.innerHTML = `<strong>${title}</strong> - ${Number(price).toLocaleString()} ريال (${type})`;
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

            calcResult.innerHTML = `
                <p>إجمالي المبلغ المستحق بعد ${years} سنوات: <strong>${futureValue.toFixed(2).toLocaleString()} ريال</strong></p>
                <p>صافي أرباح الاستثمار: <span style="color: green;">+${profit.toFixed(2).toLocaleString()} ريال</span></p>
            `;
        });
    }
}); // تم إغلاق القوس والدالة بشكل صحيح هنا لتفادي خطأ الـ SyntaxError
