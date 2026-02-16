const provinceData = {
    "سیستان و بلوچستان": {
        projects: [
            {
                id: 1,
                name: "شهر جدید شارمار",
                location: "شهر ارومیه، خیابان امام",
                date: "۱۴۰۲/۰۵/۱۵ - ۱۴۰۳/۰۲/۳۰",
                link: "https://example.com/news1"
            },
            {
                id: 2,
                name: "احداث سد بارون",
                location: "شهرستان خوی",
                date: "۱۴۰۱/۰۳/۰۱ - ۱۴۰۳/۰۶/۳۰",
                link: "https://example.com/news2"
            }
        ]
    },
    "تهران": {
        projects: [
            {
                id: 3,
                name: "شهرداری منطقه 7",
                location: "شهر تهران، منطقه ۲ و ۵",
                date: "۱۴۰۰/۰۱/۱۵ - ۱۴۰۲/۱۲/۳۰",
                link: "https://example.com/news3"
            },
            {
                id: 4,
                name: "شهرداری منطقه 12",
                location: "شهر جدید پردیس",
                date: "۱۴۰۱/۰۷/۰۱ - ۱۴۰۳/۰۹/۳۰",
                link: "https://example.com/news4"
            },
            {
                id: 5,
                name: "شهرداری قرچک",
                location: "شهر جدید پردیس",
                date: "۱۴۰۱/۰۷/۰۱ - ۱۴۰۳/۰۹/۳۰",
                link: "https://example.com/news5"
            },
            {
                id: 6,
                name: "شهرداری نصیرشهر",
                location: "شهر جدید پردیس",
                date: "۱۴۰۱/۰۷/۰۱ - ۱۴۰۳/۰۹/۳۰",
                link: "https://example.com/news6"
            }
        ]
    },
    "یزد": {
        projects: [
            {
                id: 7,
                name: "شهرداری یزد",
                location: "میدان نقش جهان",
                date: "۱۴۰۲/۰۴/۰۱ - ۱۴۰۳/۰۳/۳۱",
                link: "https://example.com/news7"
            }
        ]
    },
    "مرکزی": {
        projects: [
            {
                id: 8,
                name: "شهرداری ساوه",
                location: "فرودگاه بین‌المللی شیراز",
                date: "۱۴۰۱/۰۵/۰۱ - ۱۴۰۳/۱۱/۳۰",
                link: "https://example.com/news8"
            }
        ]
    },
    "گلستان": {
        projects: [
            {
                id: 9,
                name: "شهرداری گرگان",
                location: "مشهد مقدس",
                date: "۱۴۰۰/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news9"
            }
        ]
    },
    "گیلان": {
        projects: [
            {
                id: 10,
                name: "شهرداری اسالم",
                location: "فرودگاه بین‌المللی شیراز",
                date: "۱۴۰۱/۰۵/۰۱ - ۱۴۰۳/۱۱/۳۰",
                link: "https://example.com/news10"
            }
        ]
    },
    "مازندران": {
        projects: [
            {
                id: 11,
                name: "شهرداری سرخورد",
                location: "فرودگاه بین‌المللی شیراز",
                date: "۱۴۰۱/۰۵/۰۱ - ۱۴۰۳/۱۱/۳۰",
                link: "https://example.com/news11"
            }
        ]
    },
    "آذربایجان شرقی": {
        projects: [
            {
                id: 12,
                name: "شهرداری میانه",
                location: "فرودگاه بین‌المللی شیراز",
                date: "۱۴۰۱/۰۵/۰۱ - ۱۴۰۳/۱۱/۳۰",
                link: "https://example.com/news12"
            }
        ]
    },
    "آذربایجان غربی": {
        projects: [
            {
                id: 13,
                name: "پروژه نمونه آذربایجان غربی",
                location: "ارومیه",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news13"
            }
        ]
    },
    "خراسان": {
        projects: [
            {
                id: 14,
                name: "پروژه نمونه خراسان",
                location: "مشهد",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news14"
            }
        ]
    },
    "هرمزگان": {
        projects: [
            {
                id: 15,
                name: "پروژه نمونه هرمزگان",
                location: "بندرعباس",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news15"
            }
        ]
    },
    "بوشهر": {
        projects: [
            {
                id: 16,
                name: "پروژه نمونه بوشهر",
                location: "بوشهر",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news16"
            }
        ]
    },
    "فارس": {
        projects: [
            {
                id: 17,
                name: "پروژه نمونه فارس",
                location: "شیراز",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news17"
            }
        ]
    },
    "کرمان": {
        projects: [
            {
                id: 18,
                name: "پروژه نمونه کرمان",
                location: "کرمان",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news18"
            }
        ]
    },
    "سمنان": {
        projects: [
            {
                id: 19,
                name: "پروژه نمونه سمنان",
                location: "سمنان",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news19"
            }
        ]
    },
    "اصفهان": {
        projects: [
            {
                id: 20,
                name: "پروژه نمونه اصفهان",
                location: "اصفهان",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news20"
            }
        ]
    },
    "چهارمحال و بختیاری": {
        projects: [
            {
                id: 21,
                name: "پروژه نمونه چهارمحال",
                location: "شهرکرد",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news21"
            }
        ]
    },
    "کهکیلویه و بویراحمد": {
        projects: [
            {
                id: 22,
                name: "پروژه نمونه کهکیلویه",
                location: "یاسوج",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news22"
            }
        ]
    },
    "خوزستان": {
        projects: [
            {
                id: 23,
                name: "پروژه نمونه خوزستان",
                location: "اهواز",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news23"
            }
        ]
    },
    "لرستان": {
        projects: [
            {
                id: 24,
                name: "پروژه نمونه لرستان",
                location: "خرم‌آباد",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news24"
            }
        ]
    },
    "ایلام": {
        projects: [
            {
                id: 25,
                name: "پروژه نمونه ایلام",
                location: "ایلام",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news25"
            }
        ]
    },
    "قم": {
        projects: [
            {
                id: 26,
                name: "پروژه نمونه قم",
                location: "قم",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news26"
            }
        ]
    },
    "کرمانشاه": {
        projects: [
            {
                id: 27,
                name: "پروژه نمونه کرمانشاه",
                location: "کرمانشاه",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news27"
            }
        ]
    },
    "همدان": {
        projects: [
            {
                id: 28,
                name: "پروژه نمونه همدان",
                location: "همدان",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news28"
            }
        ]
    },
    "قزوین": {
        projects: [
            {
                id: 29,
                name: "پروژه نمونه قزوین",
                location: "قزوین",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news29"
            }
        ]
    },
    "کردستان": {
        projects: [
            {
                id: 30,
                name: "پروژه نمونه کردستان",
                location: "سنندج",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news30"
            }
        ]
    },
    "زنجان": {
        projects: [
            {
                id: 31,
                name: "پروژه نمونه زنجان",
                location: "زنجان",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news31"
            }
        ]
    },
    "اردبیل": {
        projects: [
            {
                id: 32,
                name: "پروژه نمونه اردبیل",
                location: "اردبیل",
                date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                link: "https://example.com/news32"
            }
        ]
    }
};
        // متغیرهای جهانی
        let currentProvince = "";
        // نمایش پاپ‌آپ
        function showPopup(provinceName) {
            currentProvince = provinceName;
            const popupOverlay = document.getElementById('popupOverlay');
            const popupTitle = document.getElementById('popupTitle');
            popupTitle.textContent = `استان ${provinceName}`;
            updateProjectsList();
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        // بستن پاپ‌آپ
        function closePopup() {
            const popupOverlay = document.getElementById('popupOverlay');
            popupOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        // به‌روزرسانی لیست پروژه‌ها
        function updateProjectsList() {
            const projectsList = document.getElementById('projectsList');
            // پاک کردن لیست قبلی
            projectsList.innerHTML = '';
            const province = provinceData[currentProvince];
            if (province && province.projects.length > 0) {
                province.projects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.className = 'project-item';
                    // ایجاد دکمه لینک خبر
                    let linkButton = '';
                    if (project.link) {
                        linkButton = `<a href="${project.link}" target="_blank" class="news-link-btn">مشاهده خبر</a>`;
                    } else {
                        linkButton = `<button class="news-link-btn disabled" disabled>لینک موجود نیست</button>`;
                    }
                    projectItem.innerHTML = `
                        <h4>${project.name}</h4>
                        <p>${project.location}</p>
                        <small>${project.date}</small>
                        ${linkButton}
                    `;
                    projectsList.appendChild(projectItem);
                });
            } else {
                projectsList.innerHTML = '<div class="no-data">هیچ پروژه‌ای ثبت نشده است</div>';
            }
        }
        // اضافه کردن کلیک‌ها به استان‌ها
        document.addEventListener('DOMContentLoaded', function() {
            const provinces = document.querySelectorAll('.path-city');
            provinces.forEach(province => {
                province.addEventListener('click', function() {
                    // پیدا کردن نام استان از متن نزدیک
                    const textElement = this.nextElementSibling;
                    let provinceName = "";
                    if (textElement && textElement.classList.contains('province-text')) {
                        provinceName = textElement.textContent.trim();
                    }
                    // اگر استان در داده‌ها وجود ندارد، پیام نشان بده
                    if (!provinceData[provinceName]) {
                        provinceName = textElement.textContent.trim();
                        // ایجاد داده نمونه
                        if (!provinceData[provinceName]) {
                            provinceData[provinceName] = {
                                projects: [{
                                    id: 99,
                                    name: "پروژه نمونه",
                                    location: "مرکز استان",
                                    date: "۱۴۰۲/۰۱/۰۱ - ۱۴۰۳/۱۲/۲۹",
                                    link: "https://example.com/default"
                                }]
                            };
                        }
                    }
                    showPopup(provinceName);
                });
            });
            // بستن پاپ‌آپ با کلیک خارج از آن
            document.getElementById('popupOverlay').addEventListener('click', function(e) {
                if (e.target === this) {
                    closePopup();
                }
            });
            // بستن پاپ‌آپ با کلید ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closePopup();
                }
            });
        });
