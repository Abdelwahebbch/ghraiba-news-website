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
    slider_prev: "Photo précédente",
    slider_next: "Photo suivante",
    slider_pause: "Mettre en pause le diaporama",
    slider_play: "Reprendre le diaporama",
    slider_region: "Photos du Gouvernement",
    slider_dot: "Aller à la diapositive",
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
    slider_prev: "الصورة السابقة",
    slider_next: "الصورة التالية",
    slider_pause: "إيقاف العرض التلقائي",
    slider_play: "استئناف العرض التلقائي",
    slider_region: "صور حكومية",
    slider_dot: "الذهاب إلى الشريحة",
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
let slider = null

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initLanguage()
  if (typeof Chart !== "undefined") {
    initCharts()
  }
  populatePriceTable()
  setupLanguageButtons()
  initSlider()
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

  // Update slider aria labels for i18n
  updateSliderAriaLabels(lang)

  // Redraw chart with new language
  if (chart && typeof Chart !== "undefined") {
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

// Slider/Carousel functionality
function initSlider() {
  const sliderEl = document.querySelector(".slider")
  if (!sliderEl) return

  slider = {
    element: sliderEl,
    track: sliderEl.querySelector(".slider-track"),
    slides: sliderEl.querySelectorAll(".slide"),
    prevBtn: sliderEl.querySelector(".slider-btn-prev"),
    nextBtn: sliderEl.querySelector(".slider-btn-next"),
    dots: sliderEl.querySelectorAll(".slider-dot"),
    autoplayBtn: sliderEl.querySelector(".slider-autoplay-btn"),
    currentIndex: 0,
    autoplayInterval: null,
    isPlaying: sliderEl.dataset.autoplay === "true",
    interval: parseInt(sliderEl.dataset.interval, 10) || 5000,
    touchStartX: 0,
    touchEndX: 0,
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) {
    slider.isPlaying = false
  }

  setupSliderControls()
  setupKeyboardNavigation()
  setupTouchSwipe()
  setupAutoplayPauseOnInteraction()
  setupVisibilityChange()

  if (slider.isPlaying) {
    startAutoplay()
  }

  updateSliderAriaLabels(currentLanguage)
}

function setupSliderControls() {
  // Previous/Next buttons
  slider.prevBtn.addEventListener("click", () => {
    goToSlide(slider.currentIndex - 1)
  })

  slider.nextBtn.addEventListener("click", () => {
    goToSlide(slider.currentIndex + 1)
  })

  // Dot indicators
  slider.dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index)
    })
  })

  // Autoplay toggle button
  slider.autoplayBtn.addEventListener("click", toggleAutoplay)
}

function setupKeyboardNavigation() {
  slider.element.addEventListener("keydown", (e) => {
    const isRTL = document.documentElement.dir === "rtl"

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault()
        goToSlide(isRTL ? slider.currentIndex + 1 : slider.currentIndex - 1)
        break
      case "ArrowRight":
        e.preventDefault()
        goToSlide(isRTL ? slider.currentIndex - 1 : slider.currentIndex + 1)
        break
      case "Home":
        e.preventDefault()
        goToSlide(0)
        break
      case "End":
        e.preventDefault()
        goToSlide(slider.slides.length - 1)
        break
    }
  })
}

function setupTouchSwipe() {
  slider.element.addEventListener(
    "touchstart",
    (e) => {
      slider.touchStartX = e.changedTouches[0].screenX
    },
    { passive: true }
  )

  slider.element.addEventListener(
    "touchend",
    (e) => {
      slider.touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    },
    { passive: true }
  )
}

function handleSwipe() {
  const threshold = 50
  const diff = slider.touchStartX - slider.touchEndX
  const isRTL = document.documentElement.dir === "rtl"

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swipe left
      goToSlide(isRTL ? slider.currentIndex - 1 : slider.currentIndex + 1)
    } else {
      // Swipe right
      goToSlide(isRTL ? slider.currentIndex + 1 : slider.currentIndex - 1)
    }
  }
}

function setupAutoplayPauseOnInteraction() {
  // Pause on hover
  slider.element.addEventListener("mouseenter", () => {
    if (slider.isPlaying) {
      pauseAutoplay()
    }
  })

  slider.element.addEventListener("mouseleave", () => {
    if (slider.isPlaying) {
      startAutoplay()
    }
  })

  // Pause on focus within
  slider.element.addEventListener("focusin", () => {
    if (slider.isPlaying) {
      pauseAutoplay()
    }
  })

  slider.element.addEventListener("focusout", (e) => {
    if (slider.isPlaying && !slider.element.contains(e.relatedTarget)) {
      startAutoplay()
    }
  })
}

function setupVisibilityChange() {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseAutoplay()
    } else if (slider.isPlaying) {
      startAutoplay()
    }
  })
}

function goToSlide(index) {
  const totalSlides = slider.slides.length

  // Handle wrapping
  if (index < 0) {
    index = totalSlides - 1
  } else if (index >= totalSlides) {
    index = 0
  }

  slider.currentIndex = index
  slider.track.style.transform = `translateX(-${index * 100}%)`

  // Update RTL direction
  if (document.documentElement.dir === "rtl") {
    slider.track.style.transform = `translateX(${index * 100}%)`
  }

  // Update dots
  slider.dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index)
    dot.setAttribute("aria-selected", i === index ? "true" : "false")
  })

  // Update aria-live region
  slider.track.setAttribute("aria-live", "polite")
  setTimeout(() => {
    slider.track.setAttribute("aria-live", "off")
  }, 1000)
}

function startAutoplay() {
  if (slider.autoplayInterval) {
    clearInterval(slider.autoplayInterval)
  }
  slider.autoplayInterval = setInterval(() => {
    goToSlide(slider.currentIndex + 1)
  }, slider.interval)
}

function pauseAutoplay() {
  if (slider.autoplayInterval) {
    clearInterval(slider.autoplayInterval)
    slider.autoplayInterval = null
  }
}

function toggleAutoplay() {
  slider.isPlaying = !slider.isPlaying

  const pauseIcon = slider.autoplayBtn.querySelector(".pause-icon")
  const playIcon = slider.autoplayBtn.querySelector(".play-icon")

  if (slider.isPlaying) {
    startAutoplay()
    pauseIcon.style.display = "block"
    playIcon.style.display = "none"
    slider.autoplayBtn.setAttribute("aria-label", translations[currentLanguage].slider_pause)
  } else {
    pauseAutoplay()
    pauseIcon.style.display = "none"
    playIcon.style.display = "block"
    slider.autoplayBtn.setAttribute("aria-label", translations[currentLanguage].slider_play)
  }
}

function updateSliderAriaLabels(lang) {
  if (!slider) return

  const t = translations[lang]

  // Update slider region label
  slider.element.setAttribute("aria-label", t.slider_region || t.photos_title)

  // Update navigation buttons
  slider.prevBtn.setAttribute("aria-label", t.slider_prev)
  slider.nextBtn.setAttribute("aria-label", t.slider_next)

  // Update dots
  slider.dots.forEach((dot, i) => {
    dot.setAttribute("aria-label", `${t.slider_dot} ${i + 1}`)
  })

  // Update autoplay button
  if (slider.isPlaying) {
    slider.autoplayBtn.setAttribute("aria-label", t.slider_pause)
  } else {
    slider.autoplayBtn.setAttribute("aria-label", t.slider_play)
  }
}
