document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.key === "I" && (e.keyCode == 73 || e.keyCode == 74))) {
        e.preventDefault();
    }
});
  
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

let devToolsOpen = false; // لتحديد إذا كانت أدوات المطورين مفتوحة
let cssHidden = false; // لتحديد إذا تم إخفاء الـ CSS
let alertBox = null;

// التحقق من فتح أدوات المطورين عبر مراقبة الفرق بين "outer" و "inner" في نافذة المتصفح
const checkDevTools = () => {
    const threshold = 160; // العتبة التي تحدد ما إذا كانت أدوات المطورين مفتوحة
    const widthThreshold = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
    
    // إذا كانت أدوات المطورين مفتوحة ولم نقم بإخفاء الـ CSS بعد
    if (widthThreshold && !devToolsOpen) {
        devToolsOpen = true;
        
        // إذا لم يكن الـ CSS مخفيًا بالفعل، نقوم بإخفائه
        if (!cssHidden) {
            hideCSS();
        }
        
        // عرض رسالة التحذير
        alertBox = alert('أدوات المطورين مفتوحة! سيتم إعادة تحميل الصفحة.');

        // بعد الضغط على "OK" في التحذير، يتم إعادة تحميل الصفحة
        window.location.reload();
    }
    
    // إذا تم إغلاق أدوات المطورين (العودة إلى الحجم الطبيعي للنافذة)
    if (!widthThreshold && devToolsOpen) {
        devToolsOpen = false;
        console.log('أدوات المطورين تم إغلاقها.');
    }
};

// إخفاء الـ CSS داخل الصفحة
const hideCSS = () => {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        const sheet = styleSheets[i];
        try {
            // محاولة إخفاء جميع ملفات الـ CSS عن طريق تغيير القيم
            if (sheet.href) {
                sheet.disabled = true; // تعطيل الـ CSS
            }
        } catch (e) {
            // في حالة وجود أي أخطاء (مثل الوصول إلى ملفات محلية غير ممكنة)
            console.log('مشكلة في تعطيل الـ CSS:', e);
        }
    }
    cssHidden = true;
};

// التحقق كل ثانية
setInterval(checkDevTools, 1000);



