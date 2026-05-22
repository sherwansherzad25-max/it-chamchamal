function showToast(message, icon = "✅") {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2900);
}

function autoRequestNotification() {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
        setTimeout(() => {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("IT Chamchamal", { body: "ئێستا ئاگادارییەکان وەردەگریت", icon: "it-icon-final-192.png" });
                }
            });
        }, 3000);
    }
}

window.addEventListener('load', function () {
    autoRequestNotification();
    setTimeout(function () {
        var loader = document.getElementById('loading-screen');
        if (loader) { loader.classList.add('hidden'); setTimeout(() => loader.style.display = 'none', 500); }
    }, 1400);
    const savedGPASem = localStorage.getItem('gpa_selected_sem');
    if (savedGPASem) { document.getElementById('gpa-sem-select').value = savedGPASem; renderGrading(); }
});

const TELEGRAM_USERNAME = "sherwan25";
let currentSem = 1;
let currentShift = 'evening';
const APP_VERSION = "3.1";
let currentLang = 'ku';

const subjectList = {
    1: ["Logic Design","IT Fundamentals","Mathematics","English","Kurdology"],
    2: ["Database","English II","Network +","Programming","Web Design"],
    3: ["Web Programming","O.O.P","Database Management","Computer Network II","Operating System"],
    4: ["Mobile Application","Web Programming II","Visual Programming","Information Security","Project"]
};
const subColors = {
    'Logic Design':'#ef4444','IT Fundamentals':'#10b981','Mathematics':'#8b5cf6','English':'#f59e0b','Kurdology':'#475569',
    'Database':'#d97706','English II':'#f59e0b','Network +':'#3b82f6','Programming':'#8b5cf6','Web Design':'#14b8a6',
    'Web Programming':'#3b82f6','O.O.P':'#8b5cf6','Database Management':'#d97706','Computer Network II':'#10b981','Operating System':'#ef4444',
    'Web Programming II':'#3b82f6','Visual Programming':'#8b5cf6','Mobile Application':'#d97706','Information Security':'#ef4444','Project':'#10b981'
};

const translations = {
    ku: {
        dept:"بەشی ئایتی",menu:"لیست",institute:"پەیمانگای تەکنیکی چەمچەماڵ",deptSub:"بەشی تەکنەلۆژیای زانیاری (IT)",
        home:"🏠 سەرەکی",schedule:"📅 خشتەی هەفتانە",semesters:"📚 سمستەرەکان",about:"ℹ️ دەربارە",contact:"📞 پەیوەندی (Telegram)",setting:"زمان",alert:"🚨 ئاگاداری",
        welcomeTitle:"بەخێربێن خوێندکارانی ئازیزی بەشی تەکنەلۆژیای زانیاری (IT)",
        welcomeText:'بۆ گەیشتن بە هەر بەشێک، کرتەی <span class="hero-highlight" style="color: #fbbf24; text-shadow: 0 0 10px rgba(251,191,36,0.4);">" لیست "</span> بکە لە سەرەوە. ئەم بەشانەی خوارەوەت بۆ ئامادەکراوە:',
        semTitle:"بەشی سمستەرەکان:",semDesc1:"مەلزەمە، پرسیار، و فێرکاری بۆ هەموو وانەکان",
        schTitle:"خشتەی هەفتانە:",schDesc:"دەوامی بەیانیان و ئێوارن بۆ هەردوو گرووپ",
        thanks:"سوپاس بۆ <strong>(محمد اسماعیل)</strong> <span id=\"lang-and\">و</span> <strong>(محمد بێستون)</strong>",and:"و",helpers:"بۆ هاوکارییان لە دروستکردنی ئەم ویبسایتەدا",
        schedHeader:"📅 خشتەی هەفتانە (جەدۆل)",morning:"☀️ دەوامی بەیانیان",evening:"🌙 دەوامی ئێوارن",
        semBtn1:"سمستەری ١",semBtn2:"سمستەری ٢",semBtn3:"سمستەری ٣",semBtn4:"سمستەری ٤",
        tblNo:"ژمارە",tblSub:"بابەت",tblTime:"کات",tblTeacher:"مامۆستا",
        chooseSem:"هەڵبژاردنی سمستەر",cardSem1:"📚 سمستەری یەکەم",cardSem2:"📚 سمستەری دووەم",cardSem3:"📚 سمستەری سێیەم",cardSem4:"📚 سمستەری چوارەم",
        aboutTitle:"دەربارەی پڕۆژە",aboutText:"ئەم پڕۆژەیە هەوڵێکی تایبەتە بۆ کۆکردنەوەی هەموو پێداویستییەکانی خوێندکارانی بەشی تەکنەلۆژیای زانیاری (IT) لە پەیمانگای تەکنیکی چەمچەماڵ. ئامانجی سەرەکی ئاسانکارییە بۆ گەیشتن بە زانیارییەکان بە خێراترین کات.",
        dev:"گەشەپێدەر:",ver:"وەشان:",scan:"سکان بۆ هاوبەشکردن",created:"دروستکراوە لەلایەن خوێندکار:",footerHope:"بە هیوای سود گەیاندن بە هەموو خوێندكارانی بەشی ئایتی",copy:"بەردەوام لە نوێ كردنەوەدایە",visits:"📊 ژمارەی سەردانەکان",
        thSub:"ناوی وانە",thLec:"مەلزەمە",thQs:"پرسیار",thTut:"فێركاری",btnDl:"داگرتن",btnView:"بینین",btnVid:"🎥 ڤیدیۆ",
        menuExam:"⏳ کاتی تاقیکردنەوە",menuGpa:"🧮 هەژمارکردنی نمرە",examHeader:"کاتی ماوە بۆ تاقیکردنەوەکان",gpaHeader:"هەژمارکردنی نمرەکان"
    },
    en: {
        dept:"IT Department",menu:"Menu",institute:"Chamchamal Technical Institute",deptSub:"Information Technology (IT) Dept.",
        home:"🏠 Home",schedule:"📅 Weekly Schedule",semesters:"📚 Semesters",about:"ℹ️ About",contact:"📞 Contact (Telegram)",setting:"Language",alert:"🚨 Notice",
        welcomeTitle:"Welcome to IT Department – Chamchamal Technical Institute",
        welcomeText:'Click <span class="hero-highlight" style="color: #fbbf24; text-shadow: 0 0 10px rgba(251,191,36,0.4);">" Menu "</span> above to access any section. The following sections are available:',
        semTitle:"Semesters:",semDesc1:"Lecture notes, past questions, and tutorial videos for all subjects",
        schTitle:"Weekly Schedule:",schDesc:"Morning and Evening shift timetables for both groups",
        thanks:"Special thanks to",and:"and",helpers:"for their help building this website",
        schedHeader:"📅 Weekly Schedule",morning:"☀️ Morning Shift",evening:"🌙 Evening Shift",
        semBtn1:"Semester 1",semBtn2:"Semester 2",semBtn3:"Semester 3",semBtn4:"Semester 4",
        tblNo:"No",tblSub:"Subject",tblTime:"Time",tblTeacher:"Teacher",
        chooseSem:"Select Semester",cardSem1:"📚 Semester 1",cardSem2:"📚 Semester 2",cardSem3:"📚 Semester 3",cardSem4:"📚 Semester 4",
        aboutTitle:"About Project",aboutText:"This project gathers all study resources for IT students at Chamchamal Technical Institute. The main goal is quick access to information.",
        dev:"Developer:",ver:"Version:",scan:"Scan to Share",created:"Created by student:",footerHope:"Hoping to benefit all IT students",copy:"Continuously updated",visits:"📊 Total Visits",
        thSub:"Subject",thLec:"Notes",thQs:"Questions",thTut:"Tutorials",btnDl:"Download",btnView:"View",btnVid:"🎥 Video",
        menuExam:"⏳ Exam Timer",menuGpa:"🧮 GPA Calculator",examHeader:"Time Remaining for Exams",gpaHeader:"Grade Calculation"
    }
};

function toggleLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (lang === 'en') { document.body.classList.add('lang-en'); document.documentElement.dir = "ltr"; }
    else { document.body.classList.remove('lang-en'); document.documentElement.dir = "rtl"; }
    const map = {
        'lang-dept':t.dept,'lang-menu':t.menu,'lang-institute':t.institute,'lang-dept-sub':t.deptSub,
        'lang-home':t.home,'lang-schedule':t.schedule,'lang-semesters':t.semesters,'lang-about':t.about,'lang-contact':t.contact,
        'lang-setting':t.setting,'lang-alert':t.alert,
        'lang-welcome-title':t.welcomeTitle,'lang-sem-title':t.semTitle,'lang-sem-desc1':t.semDesc1,
        'lang-sch-title':t.schTitle,'lang-sch-desc':t.schDesc,'lang-thanks':t.thanks,'lang-and':t.and,'lang-helpers':t.helpers,
        'lang-sched-header':t.schedHeader,'lang-morning':t.morning,'lang-evening':t.evening,
        'lang-sem-btn1':t.semBtn1,'lang-sem-btn2':t.semBtn2,'lang-sem-btn3':t.semBtn3,'lang-sem-btn4':t.semBtn4,
        'lang-tbl-no':t.tblNo,'lang-tbl-sub':t.tblSub,'lang-tbl-time':t.tblTime,'lang-tbl-teacher':t.tblTeacher,
        'lang-choose-sem':t.chooseSem,'lang-card-sem1':t.cardSem1,'lang-card-sem2':t.cardSem2,'lang-card-sem3':t.cardSem3,'lang-card-sem4':t.cardSem4,
        'lang-about-title':t.aboutTitle,'lang-dev':t.dev,'lang-ver':t.ver,'lang-scan':t.scan,
        'lang-created':t.created,'lang-footer-hope':t.footerHope,'lang-copy':t.copy,'lang-visits':t.visits,
        'lang-menu-exam':t.menuExam,'lang-menu-gpa':t.menuGpa,'lang-exam-header':t.examHeader,'lang-gpa-header':t.gpaHeader
    };
    for (let id in map) {
        let el = document.getElementById(id); if (!el) continue;
        if (['lang-welcome-text','lang-about-text'].includes(id)) el.innerHTML = (id==='lang-about-text'?t.aboutText:t.welcomeText);
        else el.innerText = map[id];
    }
    const el2 = document.getElementById('lang-welcome-text'); if(el2) el2.innerHTML = t.welcomeText;
    const el3 = document.getElementById('lang-about-text'); if(el3) el3.innerText = t.aboutText;
    document.querySelectorAll('.th-sub').forEach(e=>e.innerText=t.thSub);
    document.querySelectorAll('.th-lec').forEach(e=>e.innerText=t.thLec);
    document.querySelectorAll('.th-qs').forEach(e=>e.innerText=t.thQs);
    document.querySelectorAll('.th-tut').forEach(e=>e.innerText=t.thTut);
    document.querySelectorAll('.btn-dl').forEach(e=>e.innerText=t.btnDl);
    document.querySelectorAll('.btn-view').forEach(e=>e.innerText=t.btnView);
    document.querySelectorAll('.btn-vid').forEach(e=>e.innerText=t.btnVid);
    closeNav();
}

function toggleLangMenu() {
    const menu = document.getElementById('lang-options');
    const arrow = document.getElementById('lang-arrow');
    const open = menu.style.display !== 'flex';
    menu.style.display = open ? 'flex' : 'none';
    arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
}

function openNav() { document.getElementById("mySidebar").style.width="280px"; document.getElementById("sidebarOverlay").style.display="block"; document.body.classList.add('sidebar-open'); }
function closeNav() { document.getElementById("mySidebar").style.width="0"; document.getElementById("sidebarOverlay").style.display="none"; document.body.classList.remove('sidebar-open'); }

function showSection(id) {
    document.querySelectorAll(".semester-content").forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block";
    window.scrollTo({top:0,behavior:'smooth'});
}

function setActiveNav(id) {
    document.querySelectorAll('.bnav-item').forEach(el => el.classList.remove('active'));
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
}

function checkUpdate() { if ('serviceWorker' in navigator) { navigator.serviceWorker.ready.then(reg => reg.update()); } }
if (localStorage.getItem("app_version") !== APP_VERSION) { localStorage.setItem("app_version",APP_VERSION); window.location.reload(true); }

function showTab(evt, id) {
    document.querySelectorAll(".semester-content").forEach(el=>el.style.display="none");
    document.querySelectorAll(".tab-btn").forEach(el=>el.classList.remove("active"));
    document.getElementById(id).style.display="block"; evt.currentTarget.classList.add("active");
}

function openInnerSem(semId) {
    document.querySelectorAll(".inner-sem-content").forEach(el=>el.style.display="none");
    document.getElementById(semId).style.display="block";
    document.getElementById(semId).scrollIntoView({behavior:'smooth'});
}

const THEMES = ['classic','dark','forest','ocean','rose','teal'];

function applyTheme(name) {
    THEMES.forEach(t => document.body.classList.remove('theme-'+t));
    if (name !== 'classic') document.body.classList.add('theme-'+name);
    localStorage.setItem('it_theme', name);
    document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
    const tc = document.getElementById('tc-'+name);
    if (tc) tc.classList.add('active');
}

function openThemePanel() { document.getElementById('themePanel').classList.add('open'); document.getElementById('themeOverlay').classList.add('open'); }
function closeThemePanel() { document.getElementById('themePanel').classList.remove('open'); document.getElementById('themeOverlay').classList.remove('open'); }

let starAnimId = null;
function applyStarField(on) {
    localStorage.setItem('it_stars', on ? '1' : '0');
    const canvas = document.getElementById('starCanvas');
    if (!on) { 
        canvas.style.display='none'; 
        if(starAnimId){cancelAnimationFrame(starAnimId);starAnimId=null;} 
        showToast('ناچالاک کرا تروسکەی ئەستێرەکان', '❌');
        return; 
    }
    canvas.style.display='block';
    showToast('چالاککرا', '✨');
    startStars(canvas);
}

function startStars(canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    function resize() { canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (let i=0;i<120;i++) {
        stars.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*1.5+0.3, speed:Math.random()*0.3+0.1, opacity:Math.random() });
    }
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        stars.forEach(s => {
            s.opacity += (Math.random()-0.5)*0.03;
            s.opacity = Math.max(0.1, Math.min(0.9, s.opacity));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
            ctx.fillStyle = `rgba(200,220,255,${s.opacity})`;
            ctx.fill();
            s.y -= s.speed;
            if (s.y < -5) { s.y = canvas.height+5; s.x = Math.random()*canvas.width; }
        });
        starAnimId = requestAnimationFrame(draw);
    }
    draw();
}

const scheduleData = {
    morning:{
        2:{'A':{1:[["١","Programming","8:30","م. هێشوو + هۆگر + ئاسۆ"],["٢","English II","10:30","م. خێڵان + بەرهەم"],["٣","Database","12:30","م. هەردی"]],2:[["١","Programming","8:30","م. هێشوو"],["٢","English II","10:30","م. خێڵان"],["٣","Database","12:30","م. هەردی"]],3:[["١","Network +","8:30","م. عومەر"],["٢","Web Design","10:30","م. مستەفا"]],4:[["١","Web Design","8:30","م. مستەفا+ئەمین+چیناز+نمە"],["٢","Network +","10:30","م. عومەر+گۆران+شیلان+یەحیا"]]},'B':{1:[["١","English II","8:30","م. خێڵان + بەرهەم"],["٢","Database","10:30","م. هەردی+ئەمین+هاوژین+نمە"],["٣","Programming","12:30","م. هێشوو + هۆگر + ئاسۆ"]],2:[["١","Database","8:30","م. هەردی"],["٢","Programming","10:30","م. هێشوو"],["٣","English II","12:30","م. خێڵان"]],3:[["١","Web Design","8:30","م. مستەفا"],["٢","Network +","10:30","م. عومەر"]],4:[["١","Web Design","10:30","م. مستەفا+ئەمین+چیناز+نمە"],["٢","Network +","12:30","م. عومەر+گۆران+شیلان+یەحیا"]]},'C':{1:[["١","Database","8:30","م. هەردی+ئەمین+هاوژین+نمە"],["٢","Programming","10:30","م. هێشوو + هۆگر + ئاسۆ"],["٣","English II","12:30","م. خێڵان + بەرهەم"]],2:[],3:[],4:[["١","Network +","8:30","م. عومەر+گۆران+شیلان+یەحیا"],["٢","Web Design","12:30","م. مستەفا+ئەمین+چیناز+نمە"]]}},
        4:{'A':{1:[["١","Web Programming II","8:30","م. زانیار"],["٢","Visual Programming","10:30","م. علی"],["٣","Project","12:30","-"]],2:[["١","Web Programming II","8:30","م. زانیار+چیناز+گۆران+نمە"],["٢","Mobile Application","10:30","م. ڕێبین+سامان+ئەمین"],["٣","Visual Programming","12:30","م. علی+هۆگر+ئاسۆ"]],3:[["١","Project","8:30","-"],["٢","Project","10:30","-"]],4:[["١","Mobile Application","8:30","م. ڕێبین"],["٢","Information Security","10:30","م. هەڵۆ"]]},'B':{1:[["١","Visual Programming","8:30","م. علی"],["٢","Web Programming II","10:30","م. زانیار"],["٣","Project","12:30","-"]],2:[["١","Mobile Application","8:30","م. ڕێبین+سامان+ئەمین"],["٢","Visual Programming","10:30","م. علی+هۆگر+ئاسۆ"],["٣","Web Programming II","12:30","م. زانیار+گۆران+چیناز+نمە"]],3:[["١","Project","8:30","-"],["٢","Project","10:30","-"]],4:[["١","Information Security","8:30","م. هەڵۆ"],["٢","Mobile Application","10:30","م. ڕێبین"]]},'C':{2:[["١","Visual Programming","8:30","م. علی+هۆگر+ئاسۆ"],["٢","Web Programming II","10:30","م. زانیار+گۆران+چیناز+نمە"],["٣","Mobile Application","12:30","م. ڕێبین+سامان+ئەمین"]],1:[],3:[],4:[]}}
    },
    evening:{
        1:{'A':{1:[["١","Logic Design","2:00","م. پشتیوان + هەڵكەوت"],["٢","English","4:00","م. بەرهەم"],["٣","IT Fundamentals","6:00","م.عمر+هۆگر+امین"]],2:[["١","Mathematics","2:00","م. سۆران"],["٢","Logic Design","4:00","م. پشتیوان"],["٣","IT Fundamentals","6:00","م. عمر"]],3:[["١","Kurdology","2:00","م. ڕێبین"],["٢","English","4:00","م. بەرهەم"],["٣","Kurdology","6:00","م. ڕێبین"]],4:[["١","IT Fundamentals","2:00","م. عمر"],["٢","IT Fundamentals","4:00","م. عمر+امین+هۆگر"]]},'B':{1:[["١","English","2:00","م. بەرهەم"],["٢","Logic Design","4:00","م. پشتیوان+هەڵكەوت"],["٣","IT Fundamentals","6:00","م.عمر+هۆگر+امین"]],2:[["١","Logic Design","2:00","م. پشتیوان"],["٢","Mathematics","4:00","م. سۆران"],["٣","IT Fundamentals","6:00","م. عمر"]],3:[["١","English","2:00","م. بەرهەم"],["٢","Kurdology","4:00","م. ڕێبین"],["٣","Kurdology","6:00","م. ڕێبین"]],4:[["١","IT Fundamentals","2:00","م. عمر"],["٢","IT Fundamentals","4:00","م. عمر+امین+هۆگر"]]}},
        2:{'A':{1:[["١","Programming","2:00","م. هێشوو + هۆگر + امین"],["٢","English","4:00","م. بەرهەم + خێڵان"],["٣","Network +","6:00","م.عمر"]],2:[["١","Programming","2:00","م. هێشوو"],["٢","English","4:00","م. بەرهەم + خێڵان"]],3:[["١","Network +","2:00","م. عمر + گۆران + شیلان"],["٢","Web Design","4:00","م. مستەفا + امین + چیناز"],["٣","Database","6:00","م. هەردی + امین + سامان"]],4:[["١","Database","2:00","م. هەردی"],["٢","Web Design","4:00","م. مستەفا"]]},'B':{1:[["١","English","2:00","م. بەرهەم + خێڵان"],["٢","Programming","4:00","م. هێشوو + هۆگر + امین"]],2:[["١","English","2:00","م. بەرهەم + خێڵان"],["٢","Programming","4:00","م. هێشوو"],["٣","Network +","6:00","م. عمر"]],3:[["١","Web Design","2:00","م. مستەفا + امین+ چیناز"],["٢","Network +","4:00","م. عمر + گۆران + شیلان"]],4:[["١","Web Design","2:00","م. مستەفا"],["٢","Database","4:00","م. هەردی"],["٣","Database","6:00","م. هەردی + امین + سامان"]]}},
        3:{'A':{1:[["١","Web Programming","2:00","م. زانیار"],["٢","O.O.P","4:00","م. علی"]],2:[["١","Database Management","2:00","م. محمد + امین"],["٢","Web Programming","4:00","م. زانیار + گۆران"]],3:[["١","Database","2:00","م. محمد"],["٢","O.O.P","4:00","م. علی + هۆگر + سامان"]],4:[["١","Operating System","2:00","م. ڕێبین"],["٢","Computer Network II","4:00","م. هەڵۆ"]]},'B':{1:[["١","Web Programming","2:00","م. زانیار"],["٢","O.O.P","4:00","م. علی"]],2:[["١","Database Management","2:00","م. محمد + امین"],["٢","Web Programming","4:00","م. زانیار + گۆران"]],3:[["١","Database","2:00","م. محمد"],["٢","O.O.P","4:00","م. علی + هۆگر + سامان"]],4:[["١","Operating System","2:00","م. ڕێبین"],["٢","Computer Network II","4:00","م. هەڵۆ"]]}},
        4:{'A':{1:[["١","Web Programming II","2:00","م. زانیار"],["٢","Visual Programming","4:00","م. علی"]],2:[["١","Mobile Application","2:00","م. ڕێبین+سامان+ئەمین"],["٢","Visual Programming","4:00","م. علی+هۆگر+نمە"],["٣","Web Programming II","6:00","م. زانیار+گۆران+چیناز"]],3:[["١","Project","2:00","-"],["٢","Project","4:00","-"]],4:[["١","Mobile Application","2:00","م. ڕێبین"],["٢","Information Security","4:00","م. هەڵۆ"]]},'B':{1:[["١","Web Programming II","2:00","م. زانیار"],["٢","Visual Programming","4:00","م. علی"]],2:[["١","Web Programming II","2:00","م. زانیار+گۆران+چیناز"],["٢","Mobile Application","4:00","م. ڕێبین+سامان+ئەمین"],["٣","Visual Programming","6:00","م. علی+هۆگر+نمە"]],3:[["١","Project","2:00","-"],["٢","Project","4:00","-"]],4:[["١","Mobile Application","2:00","م. ڕێبین"],["٢","Information Security","4:00","م. هەڵۆ"]]}}
    }
};

function setSem(s) {
    currentSem = s;
    document.querySelectorAll('.sem-btn').forEach(b=>b.classList.remove('active-btn'));
    const ab = document.getElementById('btn-sem-'+s); if(ab) ab.classList.add('active-btn');
    document.getElementById('group-selection').style.display='flex';
    document.getElementById('group-display-title').style.display='block';
    const btnC = document.getElementById('btn-grp-C');
    if (currentShift==='morning' && (currentSem===2||currentSem===4)) { if(btnC) btnC.style.display='inline-block'; }
    else { if(btnC) btnC.style.display='none'; }
    const shiftText = currentShift==='morning' ? (currentLang==='en'?'Morning':'بەیانیان') : (currentLang==='en'?'Evening':'ئێوارن');
    document.getElementById('group-display-title').innerHTML = `سمستەر ${s} - ${shiftText} - <span style="color:var(--secondary)">${currentLang==='en'?'Select Group':'گروپ هەڵبژێرە'}</span>`;
    document.querySelectorAll('.grp-btn').forEach(b=>b.classList.remove('active-btn'));
    document.getElementById('daysArea').innerHTML=""; document.getElementById('schedule-box').style.display='none';
}

function selectShift(shift) {
    currentShift = shift;
    document.querySelector('.shift-btn.morning')?.classList.remove('active');
    document.querySelector('.shift-btn.evening')?.classList.remove('active');
    if(shift==='morning') document.querySelector('.shift-btn.morning')?.classList.add('active');
    else document.querySelector('.shift-btn.evening')?.classList.add('active');
    document.getElementById('group-selection').style.display='none';
    document.getElementById('group-display-title').style.display='none';
    document.getElementById('daysArea').innerHTML=""; document.getElementById('schedule-box').style.display='none';
}

function selectGroup(g) {
    const colors = {A:'#3b82f6',B:'#10b981',C:'#f59e0b'};
    document.querySelectorAll('.grp-btn').forEach(b=>b.classList.remove('active-btn'));
    const ag = document.getElementById('btn-grp-'+g); if(ag) ag.classList.add('active-btn');
    const shiftText = currentShift==='morning'?(currentLang==='en'?'Morning':'بەیانیان'):(currentLang==='en'?'Evening':'ئێوارن');
    document.getElementById('group-display-title').innerHTML = `سمستەر ${currentSem} - ${shiftText} - <span style="color:${colors[g]}">Group ${g}</span>`;
    const dn = currentLang==='en'?['Sunday','Monday','Tuesday','Wednesday']:['یەکشەممە','دووشەممە','سێشەممە','چوارشەممە'];
    const dayColors = ['#8b5cf6','#3b82f6','#10b981','#d97706'];
    document.getElementById('daysArea').innerHTML = dn.map((n,i)=>`<button class="tab-btn" style="background:${dayColors[i]};color:white;border:none;margin:4px;" onclick="selectDay('${g}',${i+1},'${n}')">${n}</button>`).join('');
}

function selectDay(g, d, dayName) {
    const body = document.getElementById('schedule-body'); if(!body) return; body.innerHTML='';
    const colors = {A:'#3b82f6',B:'#10b981',C:'#f59e0b'};
    const shiftText = currentShift==='morning'?(currentLang==='en'?'Morning':'بەیانیان'):(currentLang==='en'?'Evening':'ئێوارن');
    document.getElementById('group-display-title').innerHTML = `سمستەر ${currentSem} - ${shiftText} - <span style="color:${colors[g]}">Group ${g}</span> - ${dayName}`;
    const subjectColors={'Logic Design':'#ef4444','English':'#f59e0b','IT Fundamentals':'#10b981','Mathematics':'#8b5cf6','Kurdology':'#475569','Web Programming':'#3b82f6','O.O.P':'#8b5cf6','Database Management':'#d97706','Database':'#d97706','Operating System':'#ef4444','Computer Network II':'#10b981','English II':'#f59e0b','Network +':'#3b82f6','Programming':'#8b5cf6','Web Design':'#14b8a6','Web Programming II':'#3b82f6','Visual Programming':'#8b5cf6','Mobile Application':'#d97706','Information Security':'#ef4444','Project':'#10b981'};
    if (scheduleData[currentShift]?.[currentSem]?.[g]?.[d]) {
        const lessons = scheduleData[currentShift][currentSem][g][d];
        if (lessons.length>0) {
            lessons.forEach(r=>{
                const sc = subjectColors[r[1]]||'#3b82f6';
                body.innerHTML += `<tr><td style="font-weight:800;">${r[0]}</td><td><span style="background:${sc};color:white;padding:5px 14px;border-radius:20px;font-weight:700;display:inline-block;">${r[1]}</span></td><td dir="ltr" style="font-weight:700;">${r[2]}</td><td style="font-size:0.88rem;color:var(--text-muted);">${r[3]}</td></tr>`;
            });
        } else { body.innerHTML = `<tr><td colspan="4" style="color:var(--text-muted);">${g==='C'?'گرووپی C وانەی نییە لەم ڕۆژانەدا':'وانە نییە / No Class'}</td></tr>`; }
        document.getElementById('schedule-box').style.display='block';
    } else { body.innerHTML='<tr><td colspan="4" style="color:var(--text-muted);">زانیاری نییە / No Info</td></tr>'; document.getElementById('schedule-box').style.display='block'; }
}

function requestNotifyPermission() {
    if (!('Notification' in window)) { alert("مۆبایلەکەت پشتگیری نۆتیفیکەیشن ناکات"); return; }
    Notification.requestPermission().then(p=>{
        if(p==="granted") { new Notification("سەرکەوتوو بوو!",{body:"ئێستا ئاگادارییەکانت پێ دەگات",icon:"it-icon-final-192.png"}); }
        else alert("تکایە لە ڕێکخستنەکان ڕێگە بە نۆتیفیکەیشن بدە.");
    });
}

async function fetchNews() {
    const nc = document.getElementById('news-list'); if(!nc) return;
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2j8Z4JmuZ2Fq75MNmQ1siz3l9djVQqaIQhk9R9SrSbBx94k3zRfQHeuDpTx_SBW8ZYaWB0Bvxor7M/pub?output=csv&gid=0";
    try {
        const r = await fetch(url,{cache:"no-store"});
        const csv = await r.text();
        const rows = csv.split(/\r?\n/).slice(1);
        if(rows.length>0 && rows[0].trim()!=="") {
            let html="",latestTitle="";
            rows.forEach((row,i)=>{
                const fc=row.indexOf(','); if(fc===-1) return;
                const t=row.substring(0,fc).replace(/(^"|"$)/g,'').trim();
                const d=row.substring(fc+1).replace(/(^"|"$)/g,'').trim();
                if(i===0) latestTitle=t;
                html+=` <span style="margin-left:80px;display:inline-block;"> <b>• ${t}</b> : ${d} </span> `;
            });
            nc.innerHTML=html+html;
            const stored=localStorage.getItem('last_news_title');
            if(stored!==latestTitle && Notification.permission==="granted") {
                if('serviceWorker' in navigator) { navigator.serviceWorker.ready.then(reg=>reg.showNotification("ئاگاداری نوێ | IT",{body:latestTitle,icon:"it-icon-final-192.png",tag:'news-alert'})); }
                else new Notification("ئاگاداری نوێ | IT",{body:latestTitle,icon:"it-icon-final-192.png"});
                localStorage.setItem('last_news_title',latestTitle);
            } else if(!stored) localStorage.setItem('last_news_title',latestTitle);
        } else nc.innerHTML="هیچ هەواڵێکی نوێ نییە.";
    } catch(e) { console.error(e); }
}
setInterval(fetchNews, 60000);

let examIntervals=[];
async function checkExams() {
    const container=document.getElementById('exams-container');
    const url="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2j8Z4JmuZ2Fq75MNmQ1siz3l9djVQqaIQhk9R9SrSbBx94k3zRfQHeuDpTx_SBW8ZYaWB0Bvxor7M/pub?output=csv&gid=1091649278";
    try {
        const r=await fetch(url,{cache:"no-store"});
        const csvText=await r.text();
        const rows=csvText.split(/\r?\n/).slice(1);
        examIntervals.forEach(clearInterval); examIntervals=[]; container.innerHTML="";
        let activeExams=[];
        rows.forEach(row=>{
            let columns=row.split(',');
            if(columns.length>=2) {
                let title=columns[0].replace(/(^"|"$)/g,'').trim();
                let dateVal=columns[1].replace(/(^"|"$)/g,'').trim();
                let timeVal=columns.length>=3&&columns[2].trim()!==""?columns[2].replace(/(^"|"$)/g,'').trim():"12:00 AM";
                if(title&&dateVal) {
                    let dParts=dateVal.split(/[-\/]/);
                    if(dParts.length===3) {
                        if(dParts[2].length===4) dateVal=`${dParts[2]}-${dParts[1].padStart(2,'0')}-${dParts[0].padStart(2,'0')}`;
                        else if(dParts[0].length===4) dateVal=`${dParts[0]}-${dParts[1].padStart(2,'0')}-${dParts[2].padStart(2,'0')}`;
                    }
                    let isPM=timeVal.toUpperCase().includes('PM'); let isAM=timeVal.toUpperCase().includes('AM');
                    let cleanTime=timeVal.replace(/AM|PM/i,'').trim(); let tParts=cleanTime.split(':');
                    let h=parseInt(tParts[0]||"0",10); let m=(tParts[1]||"00").padStart(2,'0'); let s=(tParts[2]||"00").padStart(2,'0');
                    if(isPM&&h<12) h+=12; if(isAM&&h===12) h=0;
                    let exDate=new Date(`${dateVal}T${h.toString().padStart(2,'0')}:${m}:${s}`);
                    if(!isNaN(exDate.getTime())&&exDate>new Date()) activeExams.push({Title:title,dateObj:exDate});
                }
            }
        });
        activeExams.sort((a,b)=>a.dateObj-b.dateObj);
        if(activeExams.length>0) {
            activeExams.forEach(exam=>{
                const divId="timer-"+Math.random().toString(36).substr(2,9);
                container.innerHTML+=`<div class="countdown-box"><h2 style="margin:0;font-size:1.05rem;color:#fbbf24;">${exam.Title}</h2><p style="margin:5px 0 8px;opacity:0.8;font-size:0.78rem;">${exam.dateObj.toLocaleString('ku-IQ')}</p><div class="timer-row"><div class="timer-unit"><div class="timer-box" id="d-${divId}">00</div><div class="timer-label">ڕۆژ</div></div><div class="timer-unit"><div class="timer-box" id="h-${divId}">00</div><div class="timer-label">کاژێر</div></div><div class="timer-unit"><div class="timer-box" id="m-${divId}">00</div><div class="timer-label">خولەک</div></div><div class="timer-unit"><div class="timer-box" id="s-${divId}">00</div><div class="timer-label">چرکە</div></div></div></div>`;
                startSpecificTimer(exam.dateObj,divId);
            });
        } else { container.innerHTML="<h3 style='text-align:center;opacity:0.5;color:var(--text);'>هیچ تاقیکردنەوەیەک نییە</h3>"; }
    } catch(e) { console.error(e); }
}

function startSpecificTimer(date,id) {
    const int=setInterval(()=>{
        const now=new Date().getTime(); const dist=date.getTime()-now;
        if(dist<0){clearInterval(int);return;}
        const d=Math.floor(dist/(1000*60*60*24)),h=Math.floor((dist%(1000*60*60*24))/(1000*60*60)),m=Math.floor((dist%(1000*60*60))/(1000*60)),s=Math.floor((dist%(1000*60))/1000);
        const pad=n=>n<10?"0"+n:n;
        if(document.getElementById(`d-${id}`)){document.getElementById(`d-${id}`).innerText=pad(d);document.getElementById(`h-${id}`).innerText=pad(h);document.getElementById(`m-${id}`).innerText=pad(m);document.getElementById(`s-${id}`).innerText=pad(s);}
    },1000);
    examIntervals.push(int);
}

function renderGrading() {
    const sem=document.getElementById('gpa-sem-select').value;
    const subjects=subjectList[sem]||[];
    localStorage.setItem('gpa_selected_sem',sem);
    const container=document.getElementById('grading-container'); container.innerHTML="";
    subjects.forEach((sub,idx)=>{
        const color=subColors[sub]||'#3b82f6';
        container.innerHTML+=`<div class="grade-item"><button class="accordion" onclick="toggleAccordion(this)"><span class="subject-badge" style="background:${color};">${sub}</span><span id="score-${sem}-${idx}" style="font-size:0.78rem;opacity:0.5;">▼</span></button><div class="panel"><div class="gpa-input-row"><label>ڕۆژانە</label><input type="number" min="0" max="50" id="daily-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>نەهاتن</label><input type="number" min="0" max="50" id="attend-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>کویز</label><input type="number" min="0" max="50" id="quiz-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>ڕاپۆرت و سیمینار</label><input type="number" min="0" max="50" id="report-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>میدتێرم</label><input type="number" min="0" max="50" id="mid-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row" style="border-top:1px solid var(--border);"><label style="color:${color};font-weight:800;">فایناڵ</label><input type="number" min="0" max="50" id="final-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div id="status-${sem}-${idx}" style="text-align:center;padding:12px;font-size:0.88rem;font-weight:600;color:var(--text-muted);background:var(--surface2);margin:10px 0;border-radius:12px;line-height:1.7;border:1px solid var(--border);">تکایە نمرەکانت داخڵ بکە...</div><div class="clear-btns-container"><button class="btn-clear-sub" onclick="clearSubject('${sem}',${idx})">🗑️ سڕینەوەی ئەم بابەتە</button></div></div></div>`;
    });
    loadGrades();
}

function toggleAccordion(btn) { btn.classList.toggle("active-accordion"); var p=btn.nextElementSibling; p.style.maxHeight=p.style.maxHeight?null:p.scrollHeight+"px"; }

function calcSub(sem,idx, isLoading = false) {
    const getVal=id=>{const el=document.getElementById(id);let v=el.value;if(v==="")return null;if(v<0){el.value=0;return 0;}return parseFloat(v);};
    const d=getVal(`daily-${sem}-${idx}`),a=getVal(`attend-${sem}-${idx}`),q=getVal(`quiz-${sem}-${idx}`),r=getVal(`report-${sem}-${idx}`),m=getVal(`mid-${sem}-${idx}`),f=getVal(`final-${sem}-${idx}`);
    let current=0;
    if(d!==null)current+=d;if(a!==null)current+=a;if(q!==null)current+=q;if(r!==null)current+=r;if(m!==null)current+=m;
    let msg="";
    if(current>50) msg="<b style='color:#ef4444'>هەڵە! کۆی سەعی نابێت لە ٥٠ زیاتر بێت.</b>";
    else if(f!==null&&f>50) msg="<b style='color:#ef4444'>هەڵە! نمرەی فایناڵ نابێت لە ٥٠ زیاتر بێت.</b>";
    else {
        msg=`<div style="margin-bottom:5px;">کۆی سەعی (بێ فایناڵ): <span style="color:var(--primary);font-size:1.1rem;font-weight:800;">${current}</span></div>`;
        let missing=[];
        if(d===null)missing.push("ڕۆژانە");if(a===null)missing.push("نەهاتن");if(q===null)missing.push("کویز");if(r===null)missing.push("ڕاپۆرت");if(m===null)missing.push("میدتێرم");
        if(missing.length>0&&current<50) msg+=`<div style="color:#d97706;font-size:0.82rem;margin-top:4px;font-weight:600;">💡 هەوڵبدە لە (${missing.join(' و ')}) نمرە بەدەست بهێنیت</div>`;
        if(current<25) msg+=`<br><span style="color:#ef4444;font-weight:800;">⚠️ مەترسی! نمرەی سەعیت زۆر کەمە.</span>`;
        else if(current<35) msg+=`<br><span style="color:#d97706;">باشە، بەڵام هێشتا مەترسی هەیە.</span>`;
        else if(current<50) msg+=`<br><span style="color:#059669;font-weight:700;">🌟 ئاستت نایابە!</span>`;
        else msg+=`<br><span style="color:#10b981;font-weight:700;">🏆 سەعی تەواو! تەنها فایناڵ ماوە.</span>`;
        if(f!==null) {
            let final=current+f;
            msg=`<div style="font-size:1.1rem;margin-bottom:6px;">کۆی گشتی: <span style="color:var(--text);font-weight:900;">${final}</span></div>`;
            if(final>100) msg+=`<span style="color:#ef4444">هەڵە! لە ١٠٠ تێپەڕی کرد.</span>`;
            else if(final>=50) { msg+=`<span style="color:#10b981;font-weight:700;">🎉 پیرۆزە دەرچوویت!</span>`; if(final>=85) msg+=` <span style="color:#f59e0b">ئاستێکی بەرز!</span>`; }
            else msg+=`<span style="color:#ef4444">😢 بەداخەوە کەوتویت.</span>`;
        }
    }
    const sd=document.getElementById(`status-${sem}-${idx}`); sd.innerHTML=msg;
    const p=sd.closest('.panel'); if(p.style.maxHeight) p.style.maxHeight=p.scrollHeight+"px";
    
    // لێرەدا ڕێگری دەکەین لەوەی کاتی لۆدبوون نامەکە دەربکات
    if (!isLoading) {
        saveGrades();
    }
}

function saveGrades() { 
    const inputs = document.querySelectorAll('#grading-container input'); 
    let data = JSON.parse(localStorage.getItem('it_chamchamal_grades') || '{}'); 
    let changed = false;
    
    inputs.forEach(i => {
        if (data[i.id] !== i.value && i.value !== "") {
            changed = true;
        }
        data[i.id] = i.value;
    });
    
    localStorage.setItem('it_chamchamal_grades', JSON.stringify(data)); 
    
    if (changed) {
        showToast("نمرەکەت پاشەکەوت کرا", "💾");
    }
}

function loadGrades() { const saved=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}'); for(let id in saved){let el=document.getElementById(id);if(el){el.value=saved[id];let p=id.split('-');if(p.length>=3)calcSub(p[1],p[2], true);}} }

function clearSubject(sem,idx) {
    if(!confirm("دڵنیای لە سڕینەوەی نمرەکانی ئەم بابەتە؟")) return;
    let data=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}');
    ['daily','attend','quiz','report','mid','final'].forEach(f=>{let id=`${f}-${sem}-${idx}`;if(document.getElementById(id))document.getElementById(id).value="";delete data[id];});
    localStorage.setItem('it_chamchamal_grades',JSON.stringify(data));
    document.getElementById(`status-${sem}-${idx}`).innerHTML="تکایە نمرەکانت داخڵ بکە...";
}

function resetSemesterGrades() {
    const sem=document.getElementById('gpa-sem-select').value;
    if(!confirm(`دڵنیای لە سڕینەوەی هەموو نمرەکانی سمستەری ${sem}؟`)) return;
    let data=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}');
    Object.keys(data).forEach(k=>{if(k.includes(`-${sem}-`))delete data[k];});
    localStorage.setItem('it_chamchamal_grades',JSON.stringify(data));
    renderGrading();
}

async function initVisitorCounter() {
    try {
        const res=await fetch('https://api.counterapi.dev/v1/itchamchamal/visits/up');
        const data=await res.json();
        let n=(data.count||0)+2651;
        document.getElementById('visitor-counter').textContent=String(n).padStart(7,'0');
    } catch(e) { document.getElementById('visitor-counter').textContent=String(2651).padStart(7,'0'); }
}

function updateClock() {
    const now=new Date(); let h=now.getHours(); const m=String(now.getMinutes()).padStart(2,'0'); const s=String(now.getSeconds()).padStart(2,'0');
    const ap=h>=12?'PM':'AM'; h=h%12||12;
    const el=document.getElementById('liveClock'); if(el) el.textContent=`${h}:${m}:${s} ${ap}`;
}

window.onload = function() {
    fetchNews(); initVisitorCounter(); checkUpdate();
    const savedTheme = localStorage.getItem('it_theme') || 'dark';
    applyTheme(savedTheme);
    const savedStars = localStorage.getItem('it_stars');
    if (savedStars === null || savedStars === '1') applyStarField(true);
    else applyStarField(false);
    checkExams(); renderGrading(); setInterval(updateClock,1000); updateClock();
};

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(err=>console.log('SW Failed',err)); }
