import { Chart } from "@/components/ui/chart"
// Translations
const translations = {
  fr: {
    hero_title: "Bienvenue à Ghaiba News",
    hero_subtitle: "Votre source d'information sur le gouvernement et les prix de l'olivier",
    photos_title: "Photos du Gouvernement",
    photo_1: "Siège du gouvernement de Ghaiba",
    photo_2: "Réunion des officials gouvernementaux",
    photo_3: "Vue panoramique de Ghaiba",
    photo_4: "Les oliviers de Ghaiba",
    price_title: "Suivi des Prix de l'Olivier",
    current_price: "Prix Actuel",
    daily_change: "Variation",
    weekly_high: "Prix Max",
    weekly_low: "Prix Min",
    date: "Date",
    price: "Prix (DZD/kg)",
    change: "Variation",
    news_title: "Actualités",
    news_cat_1: "Politique",
    news_cat_2: "Agriculture",
    news_cat_3: "Infrastructure",
    news_cat_4: "Éducation",
    news_1_title: "Nouvelle Initiative de Développement",
    news_1_desc:
      "Le gouvernement de Ghaiba lance une nouvelle initiative pour stimuler le développement économique local...",
    news_2_title: "Récolte Record d'Olives",
    news_2_desc:
      "Cette année enregistre une production exceptionnelle d'olives avec une augmentation de 35% par rapport à l'année précédente...",
    news_3_title: "Projet de Routes Nouvelles",
    news_3_desc:
      "Un ambitieux projet d'infrastructure visant à améliorer la connectivité routière entre les villages de Ghaiba...",
    news_4_title: "Amélioration des Écoles Locales",
    news_4_desc:
      "Des fonds ont été alloués pour la rénovation et l'amélioration des installations scolaires dans la région...",
    footer_text: "© 2025 Ghaiba News. Tous droits réservés.",
  },
  ar: {
    hero_title: "أهلا بك في أخبار غيبة",
    hero_subtitle: "مصدرك للمعلومات حول حكومة غيبة وأسعار الزيتون",
    photos_title: "صور حكومية",
    photo_1: "مقر حكومة غيبة",
    photo_2: "اجتماع المسؤولين الحكوميين",
    photo_3: "مناظر بانورامية لغيبة",
    photo_4: "بساتين الزيتون بغيبة",
    price_title: "متابعة أسعار الزيتون",
    current_price: "السعر الحالي",
    daily_change: "التغيير",
    weekly_high: "أعلى سعر",
    weekly_low: "أقل سعر",
    date: "التاريخ",
    price: "السعر (دينار/كغ)",
    change: "التغيير",
    news_title: "الأخبار",
    news_cat_1: "سياسة",
    news_cat_2: "زراعة",
    news_cat_3: "بنية تحتية",
    news_cat_4: "تعليم",
    news_1_title: "مبادرة تنموية جديدة",
    news_1_desc: "تطلق حكومة غيبة مبادرة جديدة لتحفيز التطور الاقتصادي المحلي...",
    news_2_title: "حصاد قياسي للزيتون",
    news_2_desc: "تسجل هذه السنة إنتاجاً استثنائياً من الزيتون بزيادة 35% عن السنة السابقة...",
    news_3_title: "مشروع طرق جديدة",
    news_3_desc: "مشروع بنية تحتية طموح يهدف إلى تحسين الربط الطرقي بين قرى غيبة...",
    news_4_title: "تحسين المدارس المحلية",
    news_4_desc: "تم تخصيص أموال لتجديد وتحسين المنشآت المدرسية في المنطقة...",
    footer_text: "© 2025 أخبار غيبة. جميع الحقوق محفوظة.",
  },
}

// Price data for the chart
const priceData = [
  { date: "21 Nov", price: 43.5 },
  { date: "22 Nov", price: 44.2 },
  { date: "23 Nov", price: 43.8 },
  { date: "24 Nov", price: 45.1 },
  { date: "25 Nov", price: 44.9 },
  { date: "26 Nov", price: 45.5 },
]

let chart = null
let currentLanguage = "fr"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initLanguage()
  initCharts()
  populatePriceTable()
  setupLanguageButtons()
})

// Language switching
function initLanguage() {
  const saved = localStorage.getItem("language") || "fr"
  currentLanguage = saved
  updateLanguage(currentLanguage)
}

function setupLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      currentLanguage = this.dataset.lang
      localStorage.setItem("language", currentLanguage)
      updateLanguage(currentLanguage)
    })
  })
}

function updateLanguage(lang) {
  const html = document.documentElement
  const dir = lang === "ar" ? "rtl" : "ltr"
  const langAttr = lang === "ar" ? "ar" : "fr"

  html.dir = dir
  html.lang = langAttr

  // Update language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.lang === lang) {
      btn.classList.add("active")
    }
  })

  // Update i18n elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Redraw chart with new language
  if (chart) {
    chart.destroy()
    initCharts()
  }
}

// Chart initialization
function initCharts() {
  const ctx = document.getElementById("priceChart")
  if (!ctx) return

  const labels = priceData.map((d) => d.date)
  const data = priceData.map((d) => d.price)

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: currentLanguage === "ar" ? "سعر الزيتون (دينار/كغ)" : "Prix de l'Olivier (DZD/kg)",
          data: data,
          borderColor: "#8B7500",
          backgroundColor: "rgba(139, 117, 0, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "#8B7500",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            font: { size: 14, weight: "bold" },
            padding: 15,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          min: 40,
          max: 50,
          ticks: {
            font: { size: 12 },
            callback: (value) => value + " DZD",
          },
        },
        x: {
          ticks: {
            font: { size: 12 },
          },
        },
      },
    },
  })
}

// Populate price table
function populatePriceTable() {
  const tbody = document.getElementById("priceTableBody")
  tbody.innerHTML = ""

  priceData.forEach((item, index) => {
    const row = document.createElement("tr")
    const change =
      index === 0 ? 0 : (((item.price - priceData[index - 1].price) / priceData[index - 1].price) * 100).toFixed(2)
    const changeClass = change >= 0 ? "positive" : "negative"
    const changeSymbol = change >= 0 ? "+" : ""

    row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.price} DZD</td>
            <td class="${changeClass}">${changeSymbol}${change}%</td>
        `
    tbody.appendChild(row)
  })
}
