// بيانات الاقتباسات
const quotes = [
  {
    text: "“ابدأ من جديد، لا أحد يمنعك من أن تكون أفضل.”",
    author: "مصدر مجهول"
  },
  {
    text: "“اعتنِ بنفسك، فأنت مشروعك الأهم.”",
    author: "مصدر مجهول"
  },
  {
    text: "“السعادة قرار يبدأ من داخلك.”",
    author: "مصدر مجهول"
  },
  {
    text: "“في كل مرة تنهض فيها بعد سقوطك، أنت أقوى.”",
    author: "مصدر مجهول"
  },
  {
    text: "“اهدأ، فكل شيء سيأتي في وقته الجميل.”",
    author: "مصدر مجهول"
  }
];

let currentQuoteIndex = 0;

// تحديث الاقتباس
function updateQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const dots = document.querySelectorAll(".progress-dot");
  
  quote.style.opacity = 0;
  author.style.opacity = 0;
  
  setTimeout(() => {
    quote.textContent = quotes[currentQuoteIndex].text;
    author.textContent = quotes[currentQuoteIndex].author;
    
    quote.style.opacity = 1;
    author.style.opacity = 1;
    
    // تحديث نقاط التقدم
    dots.forEach((dot, index) => {
      if (index === currentQuoteIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }, 300);
}

// الاقتباس التالي
function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  updateQuote();
}

// الاقتباس السابق
function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  updateQuote();
}

// تغيير تلقائي للاقتباسات
setInterval(nextQuote, 8000);

// التنقل في القائمة على الجوال
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// تأثير التمرير على شريط التنقل
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
    }
  }
});