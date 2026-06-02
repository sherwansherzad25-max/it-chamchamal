function triggerHaptic() {
    try {
        if (navigator && navigator.vibrate) {
            navigator.vibrate(15);
        }
    } catch(e){}
}

function showToast(message, icon = "✅") {
    try {
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
    } catch(e){}
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

function forceHideLoader() {
    var loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    }
}

const TELEGRAM_USERNAME = "sherwan25";
let currentSem = 1;
let currentShift = 'evening';
const APP_VERSION = "3.2";
let currentLang = 'ku';

let isEndOfYear = false;
let endOfYearMessage = "";

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
        sideTheme: "🎨 ڕووکار و دیزاین",
        welcomeTitle:"بەخێربێن خوێندکارانی بەشی تەکنەلۆژیای زانیاری (IT)",
        welcomeText:'بۆ گەیشتن بە هەر بەشێک، کرتەی <span class="hero-highlight" style="color: #fbbf24; text-shadow: 0 0 10px rgba(251,191,36,0.4);">" لیست "</span> بکە لە سەرەوە. ئەم بەشانەت بۆ ئامادەکراوە:',
        semTitle:"بەشی سمستەرەکان:",semDesc1:"مەلزەمە، پرسیار، و فێرکاری بۆ هەموو وانەکان",
        schTitle:"خشتەی هەفتانە:",schDesc:"دەوامی بەیانیان و ئێوارن بۆ هەردوو گرووپ",
        thanks:"سوپاس بۆ <strong>(محمد اسماعیل)</strong> <span id=\"lang-and\">و</span> <strong>(محمد بێستون)</strong>",and:"و",helpers:"بۆ هاوکارییان لە دروستکردنی ئەم ویبسایتەدا",
        schedHeader:"📅 خشتەی هەفتانە",morning:"☀️ دەوامی بەیانیان",evening:"🌙 دەوامی ئێوارن",
        semBtn1:"سمستەری ١",semBtn2:"سمستەری ٢",semBtn3:"سمستەری ٣",semBtn4:"سمستەری ٤",
        tblNo:"ژمارە",tblSub:"بابەت",tblTime:"کات",tblTeacher:"مامۆستا",
        chooseSem:"هەڵبژاردنی سمستەر",cardSem1:"📚 سمستەری یەکەم",cardSem2:"📚 سمستەری دووەم",cardSem3:"📚 سمستەری سێیەم",cardSem4:"📚 سمستەری چوارەم",
        aboutTitle:"دەربارەی پڕۆژە",aboutText:"ئەم پڕۆژەیە هەوڵێکی تایبەتە بۆ کۆکردنەوەی هەموو پێداویستییەکانی خوێندکارانی بەشی تەکنەلۆژیای زانیاری (IT) لە پەیمانگای تەکنیکی چەمچەماڵ. ئامانجی سەرەکی ئاسانکارییە بۆ گەیشتن بە زانیارییەکان بە خێراترین کات.",
        dev:"گەشەپێدەر:",ver:"وەشان:",scan:"سکان بۆ هاوبەشکردن",created:"دروستکراوە لەلایەن خوێندکار:",footerHope:"بە هیوای سود گەیاندن بە هەموو خوێندكارانی بەشی ئایتی",copy:"بەردەوام لە نوێ كردنەوەدایە",visits:"📊 ژمارەی سەردانەکان",
        thSub:"ناوی وانە",thLec:"مەلزەمە",thQs:"پرسیار",thTut:"فێركاری",btnDl:"داگرتن",btnView:"بینین",btnVid:"🎥 ڤیدیۆ",
        menuExam:"⏳ کاتی تاقیکردنەوە",menuGpa:"🧮 هەژمارکردنی نمرە",examHeader:"کاتی ماوە بۆ تاقیکردنەوەکان",gpaHeader:"هەژمارکردنی نمرەکان",
        c1t:"ئەمڕۆی من",c1d:"وانە و کاتەکانی ئەمڕۆت",c2t:"١ · خشتەی هەفتانە",c2d:"وانەکانی ڕۆژانە بۆ هەردوو دەوام",
        c3t:"٢ · سمستەرەکان",c3d:"مەلزەمە، پرسیار و فێرکاری ڤیدیۆیی",
        c4t:"٣ · کاتی تاقیکردنەوە",c4d:"کاتژمێری ماوەی تاقیکردنەوە",c5t:"٤ · هەژمارکردنی نمرە",c5d:"کۆی نمرەکانت بزانە",
        c7t:"٥ · ڕووکار و دیزاین",c7d:"گۆڕینی ڕەنگ و تروسکەی ئەستێرە",
        navHome:"سەرەکی",navToday:"ئەمڕۆی من",navSch:"خشتە",navSem:"سمستەر",navExm:"كاتی تاقیکردنەوە",navGpa:"نمرە",navAbt:"دەربارە",
        tSetupT:"ئەمڕۆی من",tSetupD:"تکایە زانیارییەکانت بنووسە تا وانەکانی ئەمڕۆت بۆ ئامادە بکەم:",
        tNameL:"ناوت:",tNameP:"ناوت بنووسە...",tGenL:"ڕەگەز:",tSemL:"سمستەر:",tGrpL:"گرووپ:",tShiftL:"دەوام:",
        bMale:"👨 کوڕ",bFem:"👧 کچ",bMorn:"☀️ بەیانیان",bEve:"🌙 ئێوارن",bSaveT:"✅ پاشەکەوتکردن و بینینی ئەمڕۆ",bEditT:"⚙️ گۆڕینی زانیارییەکان"
    },
    en: {
        dept:"IT Department",menu:"Menu",institute:"Chamchamal Technical Institute",deptSub:"Information Technology (IT) Dept.",
        home:"🏠 Home",schedule:"📅 Weekly Schedule",semesters:"📚 Semesters",about:"ℹ️ About",contact:"📞 Contact (Telegram)",setting:"Language",alert:"🚨 Notice",
        sideTheme: "🎨 Themes & Design",
        welcomeTitle:"Welcome to IT Department – Chamchamal Technical Institute",
        welcomeText:'Click <span class="hero-highlight" style="color: #fbbf24; text-shadow: 0 0 10px rgba(251,191,36,0.4);">" Menu "</span> above to access any section. Available sections:',
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
        menuExam:"⏳ Exam Timer",menuGpa:"🧮 GPA Calculator",examHeader:"Time Remaining for Exams",gpaHeader:"Grade Calculation",
        c1t:"My Today",c1d:"Today's classes and times",c2t:"1 · Weekly Schedule",c2d:"Daily classes for both shifts",
        c3t:"2 · Semesters",c3d:"Notes, past questions and video tutorials",
        c4t:"3 · Exam Time",c4d:"Remaining exam countdown",c5t:"4 · GPA Calculator",c5d:"Calculate your total grades",
        c7t:"5 · Themes & Design",c7d:"Change colors and star animations",
        navHome:"Home",navToday:"My Today",navSch:"Schedule",navSem:"Semester",navExm:"Exams",navGpa:"Grades",navAbt:"About",
        tSetupT:"My Today",tSetupD:"Please enter your info to prepare today's classes:",
        tNameL:"Name:",tNameP:"Enter your name...",tGenL:"Gender:",tSemL:"Semester:",tGrpL:"Group:",tShiftL:"Shift:",
        bMale:"👨 Male",bFem:"👧 Female",bMorn:"☀️ Morning",bEve:"🌙 Evening",bSaveT:"✅ Save & View Today",bEditT:"⚙️ Change Information"
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
        'lang-setting':t.setting,'lang-alert':t.alert,'lang-side-theme':t.sideTheme,
        'lang-welcome-title':t.welcomeTitle,
        'lang-sched-header':t.schedHeader,'lang-morning':t.morning,'lang-evening':t.evening,
        'lang-sem-btn1':t.semBtn1,'lang-sem-btn2':t.semBtn2,'lang-sem-btn3':t.semBtn3,'lang-sem-btn4':t.semBtn4,
        'lang-tbl-no':t.tblNo,'lang-tbl-sub':t.tblSub,'lang-tbl-time':t.tblTime,'lang-tbl-teacher':t.tblTeacher,
        'lang-choose-sem':t.chooseSem,'lang-card-sem1':t.cardSem1,'lang-card-sem2':t.cardSem2,'lang-card-sem3':t.cardSem3,'lang-card-sem4':t.cardSem4,
        'lang-about-title':t.aboutTitle,'lang-dev':t.dev,'lang-ver':t.ver,'lang-scan':t.scan,
        'lang-created':t.created,'lang-footer-hope':t.footerHope,'lang-copy':t.copy,'lang-visits':t.visits,
        'lang-menu-exam':t.menuExam,'lang-menu-gpa':t.menuGpa,'lang-exam-header':t.examHeader,'lang-gpa-header':t.gpaHeader,
        'lang-c1-t':t.c1t,'lang-c1-d':t.c1d,'lang-c2-t':t.c2t,'lang-c2-d':t.c2d,
        'lang-c3-t':t.c3t,'lang-c3-d':t.c3d,'lang-c4-t':t.c4t,'lang-c4-d':t.c4d,'lang-c5-t':t.c5t,'lang-c5-d':t.c5d,
        'lang-c7-t':t.c7t,'lang-c7-d':t.c7d,
        'bnav-label-home':t.navHome,'bnav-label-today':t.navToday,'bnav-label-schedule':t.navSch,'bnav-label-semesters':t.navSem,'bnav-label-exam':t.navExm,'bnav-label-gpa':t.navGpa,'bnav-label-about':t.navAbt,
        'lang-today-setup-title':t.tSetupT,'lang-today-setup-desc':t.tSetupD,'lang-today-name-lbl':t.tNameL,'lang-today-gen-lbl':t.tGenL,
        'lang-today-sem-lbl':t.tSemL,'lang-today-grp-lbl':t.tGrpL,'lang-today-shift-lbl':t.tShiftL,
        'lang-btn-male':t.bMale,'lang-btn-female':t.bFem,'lang-btn-morn':t.bMorn,'lang-btn-eve':t.bEve,
        'lang-btn-savet':t.bSaveT,'lang-btn-editt':t.bEditT
    };

    for (let id in map) {
        let el = document.getElementById(id); if (!el) continue;
        el.innerText = map[id];
    }

    const el2 = document.getElementById('lang-welcome-text'); if(el2) el2.innerHTML = t.welcomeText;
    const el3 = document.getElementById('lang-about-text'); if(el3) el3.innerText = t.aboutText;
    const inp = document.getElementById('today-name'); if(inp) inp.placeholder = t.tNameP;

    document.querySelectorAll('.th-sub').forEach(e=>e.innerText=t.thSub);
    document.querySelectorAll('.th-lec').forEach(e=>e.innerText=t.thLec);
    document.querySelectorAll('.th-qs').forEach(e=>e.innerText=t.thQs);
    document.querySelectorAll('.th-tut').forEach(e=>e.innerText=t.thTut);
    document.querySelectorAll('.btn-dl').forEach(e=>e.innerText=t.btnDl);
    document.querySelectorAll('.btn-view').forEach(e=>e.innerText=t.btnView);
    document.querySelectorAll('.btn-vid').forEach(e=>e.innerText=t.btnVid);

    const todayMain = document.getElementById('today-main');
    if (todayMain && todayMain.style.display === 'block') { renderTodayMain(); }

    closeNav();
}

function toggleLangMenu() {
    triggerHaptic();
    const menu = document.getElementById('lang-options');
    const arrow = document.getElementById('lang-arrow');
    const open = menu.style.display !== 'flex';
    menu.style.display = open ? 'flex' : 'none';
    if(arrow) arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0)';
}

function openNav() { triggerHaptic(); document.getElementById("mySidebar").style.width="280px"; document.getElementById("sidebarOverlay").style.display="block"; document.body.classList.add('sidebar-open'); }
function closeNav() { document.getElementById("mySidebar").style.width="0"; document.getElementById("sidebarOverlay").style.display="none"; document.body.classList.remove('sidebar-open'); }

function showSection(id) {
    triggerHaptic();
    document.querySelectorAll(".semester-content").forEach(el => el.style.display = "none");
    document.getElementById(id).style.display = "block";

    if (id === 'schedule-tab') initScheduleTab();
    if (id === 'today-tab') initTodayTab();

    window.scrollTo({top:0,behavior:'smooth'});
}

function setActiveNav(id) {
    triggerHaptic();
    document.querySelectorAll('.bnav-item').forEach(el => el.classList.remove('active'));
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
}

function checkUpdate() { if ('serviceWorker' in navigator) { navigator.serviceWorker.ready.then(reg => reg.update()); } }
if (localStorage.getItem("app_version") !== APP_VERSION) { localStorage.setItem("app_version",APP_VERSION); window.location.reload(true); }

function showTab(evt, id) {
    triggerHaptic();
    document.querySelectorAll(".semester-content").forEach(el=>el.style.display="none");
    document.querySelectorAll(".tab-btn").forEach(el=>el.classList.remove("active"));
    document.getElementById(id).style.display="block"; evt.currentTarget.classList.add("active");
}

function openInnerSem(semId) {
    triggerHaptic();
    document.querySelectorAll(".inner-sem-content").forEach(el=>el.style.display="none");
    document.getElementById(semId).style.display="block";
    document.getElementById(semId).scrollIntoView({behavior:'smooth'});
}

const THEMES = ['classic','dark','forest','ocean','rose','teal','aurora','sunset','cyber','golden'];

const themeHeaderColors = {
    'classic': '#1e3a8a',
    'dark':    '#0d1830',
    'forest':  '#15803d',
    'ocean':   '#6d28d9',
    'rose':    '#9f1239',
    'teal':    '#0f766e',
    'aurora':  '#1a0533',
    'sunset':  '#c2410c',
    'cyber':   '#050520',
    'golden':  '#78350f'
};

function applyTheme(name, isLoad = false) {
    if(!isLoad) triggerHaptic();
    THEMES.forEach(t => document.body.classList.remove('theme-'+t));
    if (name !== 'classic') document.body.classList.add('theme-'+name);
    localStorage.setItem('it_theme', name);
    document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
    const tc = document.getElementById('tc-'+name);
    if (tc) tc.classList.add('active');
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) metaThemeColor.setAttribute('content', themeHeaderColors[name] || '#1e3a8a');
}

function openThemePanel() { triggerHaptic(); document.getElementById('themePanel').classList.add('open'); document.getElementById('themeOverlay').classList.add('open'); }
function closeThemePanel() { document.getElementById('themePanel').classList.remove('open'); document.getElementById('themeOverlay').classList.remove('open'); }

let starAnimId = null;
function applyStarField(on, isLoad = false) {
    localStorage.setItem('it_stars', on ? '1' : '0');
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    if (!on) {
        canvas.style.display='none';
        if(starAnimId){cancelAnimationFrame(starAnimId);starAnimId=null;}
        if(!isLoad) showToast(currentLang==='en'?'Stars Disabled':'ناچالاک کرا تروسکەی ئەستێرەکان', '❌');
        return;
    }
    canvas.style.display='block';
    if(!isLoad) showToast(currentLang==='en'?'Stars Enabled':'چالاككرا', '✨');
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

function initScheduleTab() {
    const stored = localStorage.getItem('today_profile');
    const schedTab = document.getElementById('schedule-tab');

    const oldUI = schedTab.querySelectorAll('.shift-selection, .sem-btn-row, #group-selection');

    let setupContainer = document.getElementById('sched-setup-container');
    if (!setupContainer) {
        setupContainer = document.createElement('div');
        setupContainer.id = 'sched-setup-container';
        const header = schedTab.querySelector('.section-header');
        header.parentNode.insertBefore(setupContainer, header.nextSibling);
    }

    if (stored) {
        setupContainer.style.display = 'none';
        oldUI.forEach(el => el.style.display = 'none');

        const p = JSON.parse(stored);
        renderScheduleDays(p.sem, p.shift, p.group);
    } else {
        oldUI.forEach(el => el.style.display = 'none');
        document.getElementById('daysArea').innerHTML = '';
        document.getElementById('schedule-box').style.display = 'none';
        document.getElementById('group-display-title').style.display = 'none';

        const setupForm = document.getElementById('today-setup');
        setupForm.style.display = 'block';
        setupContainer.appendChild(setupForm);
        setupContainer.style.display = 'block';
    }
}

function renderScheduleDays(sem, shift, group) {
    currentSem = sem;
    currentShift = shift;
    
    document.getElementById('group-display-title').style.display = 'block';

    const shiftText = shift==='morning' ? (currentLang==='en'?'Morning':'بەیانیان') : (currentLang==='en'?'Evening':'ئێوارن');
    const colors = {A:'#3b82f6',B:'#10b981',C:'#f59e0b'};
    
    document.getElementById('group-display-title').innerHTML = 
        `${shiftText} - سمستەری ${sem} - <span style="color:${colors[group]}">گرووپی ${group}</span>`;

    const dn = currentLang==='en'?['Sunday','Monday','Tuesday','Wednesday']:['یەکشەممە','دووشەممە','سێشەممە','چوارشەممە'];
    const dayColors = ['#8b5cf6','#3b82f6','#10b981','#d97706'];

    document.getElementById('daysArea').innerHTML = dn.map((n,i)=>
        `<button class="tab-btn" style="background:${dayColors[i]};color:white;border:none;margin:4px;" onclick="selectDay('${group}',${i+1},'${n}')">${n}</button>`
    ).join('');

    document.getElementById('daysArea').innerHTML += `<br><button onclick="resetTodayProfile();" style="margin-top:16px;padding:10px 20px;border-radius:14px;background:transparent;border:1.5px solid var(--border);color:var(--text-muted);font-family:var(--font);font-size:0.85rem;cursor:pointer;font-weight:600;">⚙️ گۆڕینی زانیارییەکان</button>`;

    document.getElementById('schedule-box').style.display = 'none';
    document.getElementById('schedule-body').innerHTML = '';
}

function setSem(s) {
    triggerHaptic();
    currentSem = s;
    document.querySelectorAll('.sem-btn').forEach(b=>b.classList.remove('active-btn'));
    const ab = document.getElementById('btn-sem-'+s); if(ab) ab.classList.add('active-btn');
    document.getElementById('group-selection').style.display='flex';
    document.getElementById('group-display-title').style.display='block';
    const btnC = document.getElementById('btn-grp-C');
    if (currentShift==='morning' && (currentSem===2||currentSem===4)) { if(btnC) btnC.style.display='inline-block'; }
    else { if(btnC) btnC.style.display='none'; }
    const shiftText = currentShift==='morning' ? (currentLang==='en'?'Morning':'بەیانیان') : (currentLang==='en'?'Evening':'ئێوارن');
    document.getElementById('group-display-title').innerHTML = `سمستەر ${s} - ${shiftText} - <span style="color:var(--secondary)">${currentLang==='en'?'Select Group':'گرووپ هەڵبژێرە'}</span>`;
    document.querySelectorAll('.grp-btn').forEach(b=>b.classList.remove('active-btn'));
    document.getElementById('daysArea').innerHTML=""; document.getElementById('schedule-box').style.display='none';
}

function selectShift(shift) {
    triggerHaptic();
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
    triggerHaptic();
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
    triggerHaptic();
    const body = document.getElementById('schedule-body'); if(!body) return; body.innerHTML='';
    const colors = {A:'#3b82f6',B:'#10b981',C:'#f59e0b'};
    const shiftText = currentShift==='morning'?(currentLang==='en'?'Morning':'بەیانیان'):(currentLang==='en'?'Evening':'ئێوارن');
    
    document.getElementById('group-display-title').innerHTML = `${shiftText} - سمستەری ${currentSem} - <span style="color:${colors[g]}">گرووپی ${g}</span> - ڕۆژی ${dayName}`;
    
    const subjectColors={'Logic Design':'#ef4444','English':'#f59e0b','IT Fundamentals':'#10b981','Mathematics':'#8b5cf6','Kurdology':'#475569','Web Programming':'#3b82f6','O.O.P':'#8b5cf6','Database Management':'#d97706','Database':'#d97706','Operating System':'#ef4444','Computer Network II':'#10b981','English II':'#f59e0b','Network +':'#3b82f6','Programming':'#8b5cf6','Web Design':'#14b8a6','Web Programming II':'#3b82f6','Visual Programming':'#8b5cf6','Mobile Application':'#d97706','Information Security':'#ef4444','Project':'#10b981'};
    if (scheduleData[currentShift]?.[currentSem]?.[g]?.[d]) {
        const lessons = scheduleData[currentShift][currentSem][g][d];
        if (lessons.length>0) {
            lessons.forEach(r=>{
                const sc = subjectColors[r[1]]||'#3b82f6';
                body.innerHTML += `<tr><td style="font-weight:800;">${r[0]}</td><td><span style="background:${sc};color:white;padding:5px 14px;border-radius:20px;font-weight:700;display:inline-block;">${r[1]}</span></td><td dir="ltr" style="font-weight:700;">${r[2]}</td><td style="font-size:0.88rem;color:var(--text-muted);">${r[3]}</td></tr>`;
            });
        } else { body.innerHTML = `<tr><td colspan="4" style="color:var(--text-muted);">${g==='C'?(currentLang==='en'?'No classes for Group C':'گرووپی C وانەی نییە لەم ڕۆژانەدا'):(currentLang==='en'?'No Class':'وانە نییە / No Class')}</td></tr>`; }
        document.getElementById('schedule-box').style.display='block';
    } else { body.innerHTML=`<tr><td colspan="4" style="color:var(--text-muted);">${currentLang==='en'?'No Info':'زانیاری نییە'}</td></tr>`; document.getElementById('schedule-box').style.display='block'; }
}

function requestNotifyPermission() {
    if (!('Notification' in window)) { alert(currentLang==='en'?"Device doesn't support notifications":"مۆبایلەکەت پشتگیری نۆتیفیکەیشن ناکات"); return; }
    Notification.requestPermission().then(p=>{
        if(p==="granted") { new Notification(currentLang==='en'?"Success!":"سەرکەوتوو بوو!",{body:currentLang==='en'?"You will receive alerts now":"ئێستا ئاگادارییەکانت پێ دەگات",icon:"it-icon-final-192.png"}); }
        else alert(currentLang==='en'?"Please allow notifications in settings.":"تکایە لە ڕێکخستنەکان ڕێگە بە نۆتیفیکەیشن بدە.");
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
                let alertMsg = (latestTitle.includes('تاقیکردنەوە') || latestTitle.includes('تاقیكردنەوە'))
                    ? "كاتی تاقیكردنەوە دانراوە، سەردانی ویب سایتەكە بكە"
                    : "ویب سایتەكە ئەپدەیت كرایەوە، سەردانی بكە";
                if('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then(reg => {
                        reg.showNotification("ئاگاداری نوێ | IT Chamchamal", {
                            body: alertMsg + "\n" + latestTitle,
                            icon: "it-icon-final-192.png",
                            badge: "it-icon-final-192.png",
                            tag: 'news-alert',
                            vibrate: [200, 100, 200]
                        });
                    });
                } else {
                    new Notification("ئاگاداری نوێ | IT Chamchamal", {
                        body: alertMsg + "\n" + latestTitle,
                        icon: "it-icon-final-192.png"
                    });
                }
                localStorage.setItem('last_news_title',latestTitle);
            } else if(!stored) localStorage.setItem('last_news_title',latestTitle);
        } else nc.innerHTML=currentLang==='en'?"No new alerts.":"هیچ هەواڵێکی نوێ نییە.";
    } catch(e) {}
}
setInterval(fetchNews, 60000);

async function fetchEndOfYear() {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2j8Z4JmuZ2Fq75MNmQ1siz3l9djVQqaIQhk9R9SrSbBx94k3zRfQHeuDpTx_SBW8ZYaWB0Bvxor7M/pub?gid=1624891721&single=true&output=csv";
    try {
        const r = await fetch(url, { cache: "no-store" });
        const text = await r.text();
        const rows = text.split(/\r?\n/);
        if (rows.length > 0) {
            const firstComma = rows[0].indexOf(',');
            const secondComma = rows[0].indexOf(',', firstComma + 1);
            if (firstComma !== -1 && secondComma !== -1) {
                const key = rows[0].substring(0, firstComma).trim();
                const boolVal = rows[0].substring(firstComma + 1, secondComma).trim();
                let msg = rows[0].substring(secondComma + 1).trim();
                if(msg.startsWith('"') && msg.endsWith('"')) msg = msg.substring(1, msg.length - 1);
                if(key === 'EndOfYear' && boolVal.toUpperCase() === 'TRUE') { isEndOfYear = true; endOfYearMessage = msg; }
                else isEndOfYear = false;
            }
        }
        const todayMain = document.getElementById('today-main');
        if (todayMain && todayMain.style.display === 'block') renderTodayMain();
    } catch(e) {}
}

let examIntervals=[];
async function checkExams() {
    const container = document.getElementById('exams-container');
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS2j8Z4JmuZ2Fq75MNmQ1siz3l9djVQqaIQhk9R9SrSbBx94k3zRfQHeuDpTx_SBW8ZYaWB0Bvxor7M/pub?output=csv&gid=1091649278";
    try {
        const r = await fetch(url, { cache: "no-store" });
        const csvText = await r.text();
        const rows = csvText.split(/\r?\n/).slice(1);

        examIntervals.forEach(clearInterval);
        examIntervals = [];
        if(container) container.innerHTML = "";

        let activeExams = [];
        rows.forEach(row => {
            let columns = row.split(',');
            if(columns.length >= 2) {
                let title = columns[0].replace(/(^"|"$)/g, '').trim();
                let dateVal = columns[1].replace(/(^"|"$)/g, '').trim();
                let timeVal = columns.length >= 3 && columns[2].trim() !== "" ? columns[2].replace(/(^"|"$)/g, '').trim() : "12:00 AM";
                if(title && dateVal) {
                    let dParts = dateVal.split(/[-\/]/);
                    if(dParts.length === 3) {
                        if(dParts[2].length === 4) dateVal = `${dParts[2]}-${dParts[1].padStart(2, '0')}-${dParts[0].padStart(2, '0')}`;
                        else if(dParts[0].length === 4) dateVal = `${dParts[0]}-${dParts[1].padStart(2, '0')}-${dParts[2].padStart(2, '0')}`;
                    }
                    let isPM = timeVal.toUpperCase().includes('PM');
                    let isAM = timeVal.toUpperCase().includes('AM');
                    let cleanTime = timeVal.replace(/AM|PM/i, '').trim();
                    let tParts = cleanTime.split(':');
                    let h = parseInt(tParts[0] || "0", 10);
                    let m = (tParts[1] || "00").padStart(2, '0');
                    let s = (tParts[2] || "00").padStart(2, '0');
                    if(isPM && h < 12) h += 12;
                    if(isAM && h === 12) h = 0;
                    let exDate = new Date(`${dateVal}T${h.toString().padStart(2, '0')}:${m}:${s}`);
                    if(!isNaN(exDate.getTime()) && exDate > new Date()) activeExams.push({ Title: title, dateObj: exDate });
                }
            }
        });

        activeExams.sort((a, b) => a.dateObj - b.dateObj);

        if(activeExams.length > 0) {
            activeExams.forEach(exam => {
                const divId = "timer-" + Math.random().toString(36).substr(2, 9);
                if(container) {
                    let lblDay = currentLang==='en'?"Days":"ڕۆژ", lblHr = currentLang==='en'?"Hrs":"کاژێر", lblMin = currentLang==='en'?"Min":"خولەک", lblSec = currentLang==='en'?"Sec":"چرکە";
                    container.innerHTML += `<div class="countdown-box"><h2 style="margin:0;font-size:1.05rem;color:#fbbf24;">${exam.Title}</h2><p style="margin:5px 0 8px;opacity:0.8;font-size:0.78rem;">${exam.dateObj.toLocaleString(currentLang==='en'?'en-US':'ku-IQ')}</p><div class="timer-row"><div class="timer-unit"><div class="timer-box" id="d-${divId}">00</div><div class="timer-label">${lblDay}</div></div><div class="timer-unit"><div class="timer-box" id="h-${divId}">00</div><div class="timer-label">${lblHr}</div></div><div class="timer-unit"><div class="timer-box" id="m-${divId}">00</div><div class="timer-label">${lblMin}</div></div><div class="timer-unit"><div class="timer-box" id="s-${divId}">00</div><div class="timer-label">${lblSec}</div></div></div></div>`;
                    startSpecificTimer(exam.dateObj, divId);
                }
            });
        } else {
            if(container) container.innerHTML = `<h3 style='text-align:center;opacity:0.5;color:var(--text);'>${currentLang==='en'?'No upcoming exams':'هیچ تاقیکردنەوەیەک نییە'}</h3>`;
        }

        let alertContainer = document.getElementById('today-exam-alerts');
        if (alertContainer) {
            if (activeExams.length > 0) {
                let alertsHTML = '';
                activeExams.forEach(exam => {
                    const diffTime = Math.abs(exam.dateObj - new Date());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    let timeText = diffDays === 1
                        ? (currentLang==='en'?"Tomorrow":"سبەی")
                        : diffDays === 0
                            ? (currentLang==='en'?"Today":"ئەمڕۆ")
                            : (currentLang==='en'?`${diffDays} days left`:`ماوە: ${diffDays} ڕۆژ`);
                    alertsHTML += `
                    <div style="
                        display:flex;align-items:center;gap:8px;
                        background:rgba(220,38,38,0.08);
                        border:1px solid rgba(220,38,38,0.25);
                        border-radius:10px;padding:8px 12px;
                        margin-bottom:6px;
                    ">
                        <span style="font-size:0.9rem;flex-shrink:0;">⚠️</span>
                        <span style="color:#dc2626;font-weight:700;font-size:0.78rem;flex-shrink:0;">${currentLang==='en'?'Exam:':'تاقیکردنەوە:'}</span>
                        <span style="font-weight:600;font-size:0.78rem;color:var(--text);flex:1;">${exam.Title}</span>
                        <span style="background:#dc2626;color:white;padding:2px 8px;border-radius:20px;font-size:0.7rem;font-weight:700;flex-shrink:0;white-space:nowrap;">${timeText}</span>
                    </div>`;
                });
                alertContainer.innerHTML = alertsHTML;
            } else {
                alertContainer.innerHTML = '';
            }
        }

    } catch(e) { console.error("Error fetching exams:", e); }
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
    let lblDaily = currentLang==='en'?"Daily":"ڕۆژانە", lblAtt = currentLang==='en'?"Absence":"نەهاتن", lblQuiz = currentLang==='en'?"Quiz":"کویز", lblRep = currentLang==='en'?"Report/Seminar":"ڕاپۆرت و سیمینار", lblMid = currentLang==='en'?"Midterm":"میدتێرم", lblFin = currentLang==='en'?"Final":"فایناڵ", lblStat = currentLang==='en'?"Please enter grades...":"تکایە نمرەکانت داخڵ بکە...", lblDel = currentLang==='en'?"🗑️ Clear this subject":"🗑️ سڕینەوەی ئەم بابەتە";
    subjects.forEach((sub,idx)=>{
        const color=subColors[sub]||'#3b82f6';
        container.innerHTML+=`<div class="grade-item"><button class="accordion" onclick="toggleAccordion(this)"><span class="subject-badge" style="background:${color};">${sub}</span><span id="score-${sem}-${idx}" style="font-size:0.78rem;opacity:0.5;">▼</span></button><div class="panel"><div class="gpa-input-row"><label>${lblDaily}</label><input type="number" min="0" max="50" id="daily-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>${lblAtt}</label><input type="number" min="0" max="50" id="attend-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>${lblQuiz}</label><input type="number" min="0" max="50" id="quiz-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>${lblRep}</label><input type="number" min="0" max="50" id="report-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row"><label>${lblMid}</label><input type="number" min="0" max="50" id="mid-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div class="gpa-input-row" style="border-top:1px solid var(--border);"><label style="color:${color};font-weight:800;">${lblFin}</label><input type="number" min="0" max="50" id="final-${sem}-${idx}" oninput="calcSub('${sem}',${idx})"></div><div id="status-${sem}-${idx}" style="text-align:center;padding:12px;font-size:0.88rem;font-weight:600;color:var(--text-muted);background:var(--surface2);margin:10px 0;border-radius:12px;line-height:1.7;border:1px solid var(--border);">${lblStat}</div><div class="clear-btns-container"><button class="btn-clear-sub" onclick="clearSubject('${sem}',${idx})">${lblDel}</button></div></div></div>`;
    });
    loadGrades();
}

function toggleAccordion(btn) { triggerHaptic(); btn.classList.toggle("active-accordion"); var p=btn.nextElementSibling; p.style.maxHeight=p.style.maxHeight?null:p.scrollHeight+"px"; }

function calcSub(sem,idx, isLoading = false) {
    const getVal=id=>{const el=document.getElementById(id);let v=el.value;if(v==="")return null;if(v<0){el.value=0;return 0;}return parseFloat(v);};
    const d=getVal(`daily-${sem}-${idx}`),a=getVal(`attend-${sem}-${idx}`),q=getVal(`quiz-${sem}-${idx}`),r=getVal(`report-${sem}-${idx}`),m=getVal(`mid-${sem}-${idx}`),f=getVal(`final-${sem}-${idx}`);
    let current=0;
    if(d!==null)current+=d;if(a!==null)current+=a;if(q!==null)current+=q;if(r!==null)current+=r;if(m!==null)current+=m;
    let msg="";
    let hasReached25 = false;
    let hasReached50Final = false;

    if(current>50) msg=currentLang==='en'?"<b style='color:#ef4444'>Error! Score exceeds 50.</b>":"<b style='color:#ef4444'>هەڵە! کۆی سەعی نابێت لە ٥٠ زیاتر بێت.</b>";
    else if(f!==null&&f>50) msg=currentLang==='en'?"<b style='color:#ef4444'>Error! Final exceeds 50.</b>":"<b style='color:#ef4444'>هەڵە! نمرەی فایناڵ نابێت لە ٥٠ زیاتر بێت.</b>";
    else {
        let lblTotal = currentLang==='en'?"Total (No Final):":"کۆی سەعی (بێ فایناڵ):";
        msg=`<div style="margin-bottom:5px;">${lblTotal} <span style="color:var(--primary);font-size:1.1rem;font-weight:800;">${current}</span></div>`;
        let missing=[];
        if(d===null)missing.push(currentLang==='en'?"Daily":"ڕۆژانە");if(a===null)missing.push(currentLang==='en'?"Absence":"نەهاتن");if(q===null)missing.push(currentLang==='en'?"Quiz":"کویز");if(r===null)missing.push(currentLang==='en'?"Report":"ڕاپۆرت");if(m===null)missing.push(currentLang==='en'?"Midterm":"میدتێرم");
        if(missing.length>0&&current<50) msg+=`<div style="color:#d97706;font-size:0.82rem;margin-top:4px;font-weight:600;">💡 ${currentLang==='en'?'Try getting marks in':'هەوڵبدە لە'} (${missing.join(currentLang==='en'?' and ':' و ')}) ${currentLang==='en'?'':'نمرە بەدەست بهێنیت'}</div>`;

        if(current<25) msg+=`<br><span style="color:#ef4444;font-weight:800;">⚠️ ${currentLang==='en'?'Danger! Score is very low.':'مەترسی! نمرەی سەعیت زۆر کەمە.'}</span>`;
        else if(current<35) { msg+=`<br><span style="color:#d97706;">${currentLang==='en'?'Good, but still at risk.':'باشە، بەڵام هێشتا مەترسی هەیە.'}</span>`; if(current >= 25) hasReached25 = true; }
        else if(current<50) { msg+=`<br><span style="color:#059669;font-weight:700;">🌟 ${currentLang==='en'?'Excellent!':'ئاستت نایابە!'}</span>`; if(current >= 25) hasReached25 = true; }
        else { msg+=`<br><span style="color:#10b981;font-weight:700;">🏆 ${currentLang==='en'?'Perfect effort! Only final left.':'سەعی تەواو! تەنها فایناڵ ماوە.'}</span>`; if(current >= 25) hasReached25 = true; }

        if(f!==null) {
            let final=current+f;
            let lblFinTotal = currentLang==='en'?"Overall Score:":"کۆی گشتی:";
            msg=`<div style="font-size:1.1rem;margin-bottom:6px;">${lblFinTotal} <span style="color:var(--text);font-weight:900;">${final}</span></div>`;
            if(final>100) msg+=`<span style="color:#ef4444">${currentLang==='en'?'Error! Exceeds 100.':'هەڵە! لە ١٠٠ تێپەڕی کرد.'}</span>`;
            else if(final>=50) { msg+=`<span style="color:#10b981;font-weight:700;">🎉 ${currentLang==='en'?'Congrats, you passed!':'پیرۆزە دەرچوویت!'}</span>`; if(final>=85) msg+=` <span style="color:#f59e0b">${currentLang==='en'?'High Level!':'ئاستێکی بەرز!'}</span>`; hasReached50Final = true; }
            else msg+=`<span style="color:#ef4444">😢 ${currentLang==='en'?'Unfortunately, you failed.':'بەداخەوە کەوتویت.'}</span>`;
        }
    }
    const sd=document.getElementById(`status-${sem}-${idx}`);
    if(sd) { sd.innerHTML=msg; }
    if(sd) { const p=sd.closest('.panel'); if(p && p.style.maxHeight) p.style.maxHeight=p.scrollHeight+"px"; }

    if (!isLoading) {
        saveGrades();
        const lastScore25 = sessionStorage.getItem(`confetti_25_${sem}_${idx}`);
        const lastScore50 = sessionStorage.getItem(`confetti_50_${sem}_${idx}`);
        if (hasReached50Final && lastScore50 !== 'true') { triggerConfetti('big'); sessionStorage.setItem(`confetti_50_${sem}_${idx}`, 'true'); }
        else if (hasReached25 && !hasReached50Final && lastScore25 !== 'true') { triggerConfetti('small'); sessionStorage.setItem(`confetti_25_${sem}_${idx}`, 'true'); }
        if (!hasReached25) sessionStorage.removeItem(`confetti_25_${sem}_${idx}`);
        if (!hasReached50Final) sessionStorage.removeItem(`confetti_50_${sem}_${idx}`);
    }
}

function triggerConfetti(type) {
    try {
        if (typeof confetti === 'function') {
            triggerHaptic();
            if (type === 'small') { confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 }, colors: ['#34d399', '#fcd34d'] }); }
            else if (type === 'big') {
                var duration = 2000; var end = Date.now() + duration;
                (function frame() {
                    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#3b82f6', '#10b981', '#f59e0b'] });
                    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#3b82f6', '#10b981', '#f59e0b'] });
                    if (Date.now() < end) requestAnimationFrame(frame);
                }());
            }
        }
    } catch(e){}
}

function saveGrades() {
    try {
        const inputs = document.querySelectorAll('#grading-container input');
        let data = JSON.parse(localStorage.getItem('it_chamchamal_grades') || '{}');
        let changed = false;
        inputs.forEach(i => { if (data[i.id] !== i.value && i.value !== "") { changed = true; } data[i.id] = i.value; });
        localStorage.setItem('it_chamchamal_grades', JSON.stringify(data));
        if (changed) showToast(currentLang==='en'?"Grades saved":"نمرەکەت پاشەکەوت کرا", "💾");
    } catch(e){}
}

function loadGrades() {
    try {
        const saved=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}');
        for(let id in saved){
            let el=document.getElementById(id);
            if(el){ el.value=saved[id]; let p=id.split('-'); if(p.length>=3) calcSub(p[1],p[2], true); }
        }
    } catch(e){}
}

function clearSubject(sem,idx) {
    let msg = currentLang==='en'?"Are you sure you want to clear grades for this subject?":"دڵنیای لە سڕینەوەی نمرەکانی ئەم بابەتە؟";
    if(!confirm(msg)) return;
    try {
        let data=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}');
        ['daily','attend','quiz','report','mid','final'].forEach(f=>{let id=`${f}-${sem}-${idx}`;if(document.getElementById(id))document.getElementById(id).value="";delete data[id];});
        localStorage.setItem('it_chamchamal_grades',JSON.stringify(data));
        document.getElementById(`status-${sem}-${idx}`).innerHTML=currentLang==='en'?"Please enter grades...":"تکایە نمرەکانت داخڵ بکە...";
        sessionStorage.removeItem(`confetti_25_${sem}_${idx}`);
        sessionStorage.removeItem(`confetti_50_${sem}_${idx}`);
    } catch(e){}
}

function resetSemesterGrades() {
    const sem=document.getElementById('gpa-sem-select').value;
    let msg = currentLang==='en'?`Are you sure you want to clear all grades for semester ${sem}?`:`دڵنیای لە سڕینەوەی هەموو نمرەکانی سمستەری ${sem}؟`;
    if(!confirm(msg)) return;
    try {
        let data=JSON.parse(localStorage.getItem('it_chamchamal_grades')||'{}');
        Object.keys(data).forEach(k=>{if(k.includes(`-${sem}-`))delete data[k];});
        localStorage.setItem('it_chamchamal_grades',JSON.stringify(data));
        renderGrading();
    } catch(e){}
}

function animateValue(obj, start, end, duration) {
    if(!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.textContent = String(current).padStart(7, '0');
        if (progress < 1) { window.requestAnimationFrame(step); }
        else { obj.textContent = String(end).padStart(7, '0'); }
    };
    window.requestAnimationFrame(step);
}

async function initVisitorCounter() {
    const counterEl = document.getElementById('visitor-counter');
    if(!counterEl) return;
    try {
        const res=await fetch('https://api.counterapi.dev/v1/itchamchamal/visits/up');
        const data=await res.json();
        let n=(data.count||0)+2651;
        animateValue(counterEl, 0, n, 1500);
    } catch(e) { animateValue(counterEl, 0, 2651, 1500); }
}

function updateClock() {
    try {
        const now=new Date(); let h=now.getHours(); const m=String(now.getMinutes()).padStart(2,'0'); const s=String(now.getSeconds()).padStart(2,'0');
        const ap=h>=12?'PM':'AM'; h=h%12||12;
        const el=document.getElementById('liveClock'); if(el) el.textContent=`${h}:${m}:${s} ${ap}`;
    } catch(e){}
}

let classAlertTimeouts = [];

function scheduleClassAlerts() {
    classAlertTimeouts.forEach(clearTimeout);
    classAlertTimeouts = [];

    const stored = localStorage.getItem('today_profile');
    if (!stored) return;
    const p = JSON.parse(stored);

    const dayIdx = getTodayDayIndex();
    if (dayIdx === null) return;

    const lessons = scheduleData[p.shift]?.[parseInt(p.sem)]?.[p.group]?.[dayIdx];
    if (!lessons || lessons.length === 0) return;

    lessons.forEach(r => {
        const cleanTime = r[2].replace(/AM|PM/i, '').trim();
        const timeParts = cleanTime.split(':');
        let h = parseInt(timeParts[0] || "0", 10);
        let m = parseInt(timeParts[1] || "0", 10);
        const isPM = r[2].toUpperCase().includes('PM');
        const isAM = r[2].toUpperCase().includes('AM');
        if (isPM && h < 12) h += 12;
        if (isAM && h === 12) h = 0;
        if (!isPM && !isAM) {
            if (p.shift === 'evening' && h < 12) h += 12;
        }

        const alertTime = new Date();
        alertTime.setHours(h, m - 5, 0, 0);

        const now = new Date();
        const diff = alertTime.getTime() - now.getTime();

        if (diff > 0) {
            const timeout = setTimeout(() => {
                sendClassNotification(r[1], r[2]);
            }, diff);
            classAlertTimeouts.push(timeout);
        }
    });
}

function sendClassNotification(subjectName, classTime) {
    showToast(
        currentLang === 'en'
            ? `⏰ 5 min left: ${subjectName}`
            : `⏰ ٥ خولەک ماوە: ${subjectName}`,
        '📚'
    );

    if (Notification.permission === 'granted') {
        const title = currentLang === 'en' ? '⏰ Class in 5 Minutes!' : '⏰ ٥ خولەک ماوە بۆ وانەکەت!';
        const body  = currentLang === 'en'
            ? `${subjectName} starts at ${classTime}`
            : `${subjectName} — دەستپێدەکات لە کاتی ${classTime}`;

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification(title, {
                    body:    body,
                    icon:    'it-icon-final-192.png',
                    badge:   'it-icon-final-192.png',
                    tag:     'class-alert-' + subjectName,
                    vibrate: [200, 100, 200, 100, 200],
                    requireInteraction: true
                });
            });
        } else {
            new Notification(title, { body: body, icon: 'it-icon-final-192.png' });
        }
    }
}

window.addEventListener('load', function () {
    setTimeout(forceHideLoader, 4000);
    try { autoRequestNotification(); } catch(e){}
    try { fetchNews(); } catch(e){}
    try { fetchEndOfYear(); } catch(e){}
    try { initVisitorCounter(); } catch(e){}
    try { checkUpdate(); } catch(e){}
    try {
        const savedGPASem = localStorage.getItem('gpa_selected_sem');
        if (savedGPASem) { const sel = document.getElementById('gpa-sem-select'); if(sel) sel.value = savedGPASem; }
        renderGrading();
    } catch(e){}
    try {
        const savedTheme = localStorage.getItem('it_theme') || 'classic';
        applyTheme(savedTheme, true);
    } catch(e){}
    try {
        const savedStars = localStorage.getItem('it_stars');
        if (savedStars === null || savedStars === '1') applyStarField(true, true);
        else applyStarField(false, true);
    } catch(e){}
    try { checkExams(); } catch(e){}
    try { setInterval(updateClock,1000); updateClock(); } catch(e){}
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err=>console.log('SW Failed',err));
}

let todayGender = null;
let todayGroup = null;
let todayShiftSel = null;

function selectGender(g) {
    triggerHaptic();
    todayGender = g;
    ['male','female'].forEach(x => {
        const b = document.getElementById('gbtn-'+x);
        if(!b) return;
        b.style.background = x===g ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)';
        b.style.border = x===g ? '2px solid white' : '2px solid rgba(255,255,255,0.3)';
        b.style.transform = x===g ? 'scale(1.03)' : 'scale(1)';
    });
}

function selectTodayGroup(g) {
    triggerHaptic();
    todayGroup = g;
    ['A','B','C'].forEach(x => {
        const b = document.getElementById('tgbtn-'+x);
        if(!b) return;
        b.style.background = x===g ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)';
        b.style.border = x===g ? '2px solid white' : '2px solid rgba(255,255,255,0.3)';
        b.style.transform = x===g ? 'scale(1.03)' : 'scale(1)';
    });
}

function selectTodayShift(s) {
    triggerHaptic();
    todayShiftSel = s;
    ['morning','evening'].forEach(x => {
        const b = document.getElementById('tsbtn-'+x);
        if(!b) return;
        b.style.background = x===s ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)';
        b.style.border = x===s ? '2px solid white' : '2px solid rgba(255,255,255,0.3)';
        b.style.transform = x===s ? 'scale(1.03)' : 'scale(1)';
    });
}

function saveTodayProfile() {
    const name = document.getElementById('today-name')?.value?.trim();
    const sem  = document.getElementById('today-sem')?.value;
    if(!name)          { showToast(currentLang==='en'?'Please enter your name':'تکایە ناوت بنووسە', '⚠️'); return; }
    if(!todayGender)   { showToast(currentLang==='en'?'Please select gender':'تکایە ڕەگەزت دیاری بکە', '⚠️'); return; }
    if(!todayGroup)    { showToast(currentLang==='en'?'Please select group':'تکایە گرووپت هەڵبژێرە', '⚠️'); return; }
    if(!todayShiftSel) { showToast(currentLang==='en'?'Please select shift':'تکایە دەوامت هەڵبژێرە', '⚠️'); return; }
    
    const profile = { name, gender: todayGender, sem, group: todayGroup, shift: todayShiftSel };
    localStorage.setItem('today_profile', JSON.stringify(profile));
    
    showToast(currentLang==='en'?'Profile Saved! ✨':'زانیارییەکانت پاشەکەوت کرا! ✨', '✅');
    
    setTimeout(() => {
        if (document.getElementById('schedule-tab').style.display === 'block') {
            initScheduleTab();
        } else {
            renderTodayMain();
        }
        scheduleClassAlerts();
    }, 600);
}

function resetTodayProfile() {
    triggerHaptic();
    localStorage.removeItem('today_profile');
    classAlertTimeouts.forEach(clearTimeout);
    classAlertTimeouts = [];
    
    todayGender = null; todayGroup = null; todayShiftSel = null;
    ['male','female'].forEach(x => {
        const b = document.getElementById('gbtn-'+x);
        if(b) { b.style.background='rgba(255,255,255,0.1)'; b.style.border='2px solid rgba(255,255,255,0.3)'; b.style.transform='scale(1)'; }
    });
    ['A','B','C'].forEach(x => {
        const b = document.getElementById('tgbtn-'+x);
        if(b) { b.style.background='rgba(255,255,255,0.1)'; b.style.border='2px solid rgba(255,255,255,0.3)'; b.style.transform='scale(1)'; }
    });
    ['morning','evening'].forEach(x => {
        const b = document.getElementById('tsbtn-'+x);
        if(b) { b.style.background='rgba(255,255,255,0.1)'; b.style.border='2px solid rgba(255,255,255,0.3)'; b.style.transform='scale(1)'; }
    });

    if (document.getElementById('schedule-tab').style.display === 'block') {
        initScheduleTab();
    } else {
        document.getElementById('today-setup').style.display = 'block';
        document.getElementById('today-main').style.display  = 'none';
    }
}

function getTodayGreeting(name, gender) {
    const h = new Date().getHours();
    let timeWord, emoji;
    if (currentLang === 'en') {
        if      (h >= 5  && h < 12) { timeWord = 'Good Morning';   emoji = '🌤️'; }
        else if (h >= 12 && h < 17) { timeWord = 'Good Afternoon'; emoji = '☀️'; }
        else if (h >= 17 && h < 21) { timeWord = 'Good Evening';   emoji = '🌇'; }
        else                        { timeWord = 'Good Night';     emoji = '🌙'; }
        const title = gender === 'male' ? 'Mr.' : 'Ms.';
        return { greeting: `${timeWord}, ${title} ${name}!`, emoji };
    } else {
        if      (h >= 5  && h < 12) { timeWord = 'بەیانی باش';    emoji = '🌤️'; }
        else if (h >= 12 && h < 17) { timeWord = 'نیوەڕۆت باش';  emoji = '☀️'; }
        else if (h >= 17 && h < 21) { timeWord = 'ئێوارەت باش';  emoji = '🌇'; }
        else                        { timeWord = 'شەوت باش';     emoji = '🌙'; }
        const title = gender === 'male' ? 'کاک' : 'خاتوو';
        return { greeting: `${timeWord}، ${title} ${name}!`, emoji };
    }
}

function getTodayDayIndex() {
    const jsDay = new Date().getDay();
    const map = { 0:1, 1:2, 2:3, 3:4 };
    return map[jsDay] !== undefined ? map[jsDay] : null;
}

function getTodayDayName(jsDay) {
    if (currentLang === 'en') {
        const names = { 0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday' };
        return names[jsDay] || '';
    } else {
        const names = { 0:'یەکشەممە', 1:'دووشەممە', 2:'سێشەممە', 3:'چوارشەممە', 4:'پێنجشەممە', 5:'هەینی', 6:'شەممە' };
        return names[jsDay] || '';
    }
}

function renderTodayMain() {
    const stored = localStorage.getItem('today_profile');
    if(!stored) {
        document.getElementById('today-setup').style.display = 'block';
        document.getElementById('today-main').style.display  = 'none';
        return;
    }
    const p = JSON.parse(stored);
    document.getElementById('today-setup').style.display = 'none';
    document.getElementById('today-main').style.display  = 'block';

    const { greeting, emoji } = getTodayGreeting(p.name, p.gender);
    const shiftLabel = p.shift === 'morning'
        ? (currentLang==='en'?'Morning Shift ☀️':'دەوامی بەیانیان ☀️')
        : (currentLang==='en'?'Evening Shift 🌙':'دەوامی ئێوارن 🌙');
    const greetBox = document.getElementById('today-greeting-box');

    if(greetBox) {
        let lblSem = currentLang==='en'?"Semester":"سمستەری";
        greetBox.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
        greetBox.innerHTML = `
            <div style="font-size:2.2rem;margin-bottom:8px;">${emoji}</div>
            <div style="color:white;font-size:1.18rem;font-weight:900;margin-bottom:6px;line-height:1.4;">${greeting}</div>
            <div style="color:rgba(255,255,255,0.72);font-size:0.82rem;font-weight:600;">${lblSem} ${p.sem} &nbsp;·&nbsp; Group ${p.group} &nbsp;·&nbsp; ${shiftLabel}</div>
        `;
    }

    const box = document.getElementById('today-schedule-box');
    if(!box) return;

    if (isEndOfYear) {
        box.innerHTML = `
        <div style="text-align:center;padding:32px 20px;background:var(--surface);border-radius:20px;border:1.5px solid var(--border);">
            <div style="font-size:2.8rem;margin-bottom:12px;">🎉</div>
            <div style="color:var(--text);font-size:1.05rem;line-height:1.7;font-weight:700;">${endOfYearMessage}</div>
        </div>`;
        return;
    }

    const jsDay   = new Date().getDay();
    const dayName = getTodayDayName(jsDay);
    const dayIdx  = getTodayDayIndex();

    if(dayIdx === null) {
        box.innerHTML = `
        <div style="text-align:center;padding:32px 20px;background:var(--surface);border-radius:20px;border:1.5px solid var(--border);">
            <div style="font-size:2.4rem;margin-bottom:12px;">🎉</div>
            <div style="font-weight:900;font-size:1.12rem;color:var(--text);margin-bottom:8px;">${dayName} — ${currentLang==='en'?"It's a holiday, enjoy!":"ئەمڕؤ پشووە بەخۆشی بەسەری بەرە!"}</div>
            <div style="color:var(--text-muted);font-size:0.88rem;line-height:1.6;">${currentLang==='en'?"No classes today, take a rest 😎":"ئەمڕۆ وانە نییە، ئیستراحەت بکە 😎"}</div>
        </div>`;
        return;
    }

    const todayColors = {
        'Logic Design':'#ef4444','IT Fundamentals':'#10b981','Mathematics':'#8b5cf6',
        'English':'#f59e0b','Kurdology':'#475569','Database':'#d97706','English II':'#f59e0b',
        'Network +':'#3b82f6','Programming':'#8b5cf6','Web Design':'#14b8a6',
        'Web Programming':'#3b82f6','O.O.P':'#8b5cf6','Database Management':'#d97706',
        'Computer Network II':'#10b981','Operating System':'#ef4444',
        'Web Programming II':'#3b82f6','Visual Programming':'#8b5cf6',
        'Mobile Application':'#d97706','Information Security':'#ef4444','Project':'#10b981'
    };

    const lessons = scheduleData[p.shift]?.[parseInt(p.sem)]?.[p.group]?.[dayIdx];
    const now     = new Date();
    let lblTodayClass = currentLang==='en'?"Today's Classes":"وانەکانی ئەمڕۆ";

    let html = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="background:linear-gradient(135deg,var(--primary),var(--secondary));color:white;padding:5px 16px;border-radius:20px;font-size:0.85rem;font-weight:700;">📅 ${dayName}</span>
        <span style="color:var(--text-muted);font-size:0.82rem;font-weight:600;">${lblTodayClass}</span>
    </div>`;

    if(!lessons || lessons.length === 0) {
        html += `
        <div style="text-align:center;padding:26px;background:var(--surface);border-radius:16px;border:1.5px dashed var(--border);">
            <div style="font-size:1.8rem;margin-bottom:8px;">📭</div>
            <div style="color:var(--text-muted);font-weight:700;">${currentLang==='en'?`No classes today for Group ${p.group}`:`ئەمڕۆ وانەی نییە بۆ گرووپ ${p.group}`}</div>
        </div>`;
    } else {
        let lblNow  = currentLang==='en'?"⬤ NOW":"⬤ ئێستا";
        let lblPast = currentLang==='en'?"Done":"تەواوبوو";

        lessons.forEach(r => {
            const cleanTime = r[2].replace(/AM|PM/i, '').trim();
            const timeParts = cleanTime.split(':');
            const lessonStart = new Date();
            let h = parseInt(timeParts[0] || "0", 10);
            let m = parseInt(timeParts[1] || "0", 10);
            let isPM = r[2].toUpperCase().includes('PM');
            let isAM = r[2].toUpperCase().includes('AM');
            if (isPM && h < 12) h += 12;
            if (isAM && h === 12) h = 0;
            if (!isPM && !isAM) {
                if (p.shift === 'evening' && h < 12) h += 12;
                if (p.shift === 'morning' && h > 0 && h <= 5) h += 12;
            }
            lessonStart.setHours(h, m, 0, 0);
            const lessonEnd = new Date(lessonStart.getTime() + 2 * 60 * 60 * 1000);
            const isNow  = now >= lessonStart && now < lessonEnd;
            const isPast = now >= lessonEnd;
            const c = todayColors[r[1]] || '#3b82f6';

            html += `
            <div style="
                background:var(--surface);border-radius:16px;
                border:1.5px solid ${isNow ? c : 'var(--border)'};
                padding:14px 16px;margin-bottom:10px;
                display:flex;align-items:center;gap:14px;
                ${isNow  ? 'box-shadow:0 0 0 3px '+c+'28;' : ''}
                ${isPast ? 'opacity:0.52;' : ''}
                transition:all 0.3s;
            ">
                <div style="width:50px;height:50px;border-radius:14px;background:${c}1a;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <span style="color:${c};font-weight:900;font-size:0.8rem;" dir="ltr">${r[2]}</span>
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">
                        <span style="background:${c};color:white;padding:4px 12px;border-radius:20px;font-size:0.82rem;font-weight:700;white-space:nowrap;">${r[1]}</span>
                        ${isNow  ? `<span style="background:#10b981;color:white;padding:3px 9px;border-radius:10px;font-size:0.72rem;font-weight:700;">${lblNow}</span>` : ''}
                        ${isPast ? `<span style="background:var(--surface2);color:var(--text-muted);padding:3px 9px;border-radius:10px;font-size:0.72rem;border:1px solid var(--border);">${lblPast}</span>` : ''}
                    </div>
                    <div style="font-size:0.78rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r[3]}</div>
                </div>
            </div>`;
        });
    }

    box.innerHTML = html;
}

function initTodayTab() {
    const setupForm = document.getElementById('today-setup');
    const todayTab = document.getElementById('today-tab');
    const todayMain = document.getElementById('today-main');
    todayTab.insertBefore(setupForm, todayMain);

    const stored = localStorage.getItem('today_profile');
    if(stored) {
        const p = JSON.parse(stored);
        const nameEl = document.getElementById('today-name');
        const semEl  = document.getElementById('today-sem');
        if(nameEl) nameEl.value = p.name  || '';
        if(semEl)  semEl.value  = p.sem   || '1';
        if(p.gender) selectGender(p.gender);
        if(p.group)  selectTodayGroup(p.group);
        if(p.shift)  selectTodayShift(p.shift);
        renderTodayMain();
        scheduleClassAlerts();
    } else {
        document.getElementById('today-setup').style.display = 'block';
        document.getElementById('today-main').style.display  = 'none';
    }
}
