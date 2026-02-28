# ReadingAssignments
Articles of the Week with accessibility features (Text to Speech, Definitions, Text Features, Numbered Paragraphs, Prompt Hints, Annotations Abilities, Claim Evidence Reasoning, Critical Thinking, and Vocabulary 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article of the Week: Stress Less, Listen More</title>
    <style>
        /* --- CORE THEME: CYBERPUNK NEON --- */
        :root {
            --bg-dark: #0d0e15;
            --panel-dark: #1a1c29;
            --text-main: #e2e8f0;
            --text-muted: #a0aec0;
            --neon-cyan: #00f3ff;
            --neon-purple: #bc13fe;
            --neon-pink: #ff007f;
            --highlight-color: #ffea00;
            --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            --font-size-base: 18px;
        }

        /* --- HIGH CONTRAST OVERRIDES --- */
        body.high-contrast {
            --bg-dark: #ffffff;
            --panel-dark: #ffffff;
            --text-main: #000000;
            --text-muted: #333333;
            --neon-cyan: #0000ee;
            --neon-purple: #551a8b;
            --neon-pink: #d90000;
            --highlight-color: #ffff00;
        }
        body.high-contrast .container {
            box-shadow: none;
            border: 2px solid #000;
        }

        /* --- DYSLEXIA FONT OVERRIDE --- */
        body.dyslexia-font {
            --font-main: 'Comic Sans MS', 'Arial', sans-serif !important;
        }

        body {
            font-family: var(--font-main);
            font-size: var(--font-size-base);
            background-color: var(--bg-dark);
            color: var(--text-main);
            margin: 0;
            padding: 40px 20px;
            line-height: 1.8;
            transition: background-color 0.3s, color 0.3s;
        }

        /* Progress Bar */
        #progress-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 6px;
            background: rgba(255,255,255,0.1); z-index: 9999;
        }
        #progress-bar {
            height: 100%; width: 0%;
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
        }

        /* Reading Ruler */
        #reading-ruler {
            display: none; position: fixed; left: 0; width: 100%; height: 40px;
            background: rgba(0, 243, 255, 0.15); border-top: 2px solid var(--neon-cyan);
            border-bottom: 2px solid var(--neon-cyan); pointer-events: none;
            z-index: 9998; transform: translateY(-50%);
        }

        .container {
            max-width: 1100px; margin: 0 auto; background-color: var(--panel-dark);
            padding: 40px; border-radius: 12px; box-shadow: 0 0 25px rgba(188, 19, 254, 0.15);
        }

        /* Accessibility Panel */
        .access-panel {
            display: flex; flex-wrap: wrap; gap: 10px; background: rgba(255,255,255,0.05);
            padding: 15px; border-radius: 8px; margin-bottom: 25px; justify-content: center;
            border: 1px dashed var(--neon-cyan);
        }
        .access-btn {
            background: transparent; color: var(--text-main); border: 1px solid var(--neon-purple);
            padding: 5px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;
        }
        .access-btn:hover, .access-btn.active { background: var(--neon-purple); color: #fff; }

        h1, h2, h3 { color: var(--neon-cyan); margin-bottom: 10px; }
        h1 { border-bottom: 2px solid var(--neon-cyan); padding-bottom: 10px; }
        h2 { color: var(--neon-purple); border-bottom: 1px solid var(--neon-purple); }
        .author-line { font-style: italic; color: var(--text-muted); margin-bottom: 20px; }

        .header-info {
            display: flex; justify-content: space-between; gap: 15px;
            background: rgba(0, 243, 255, 0.05); padding: 15px; border-radius: 8px; font-weight: bold; margin-bottom: 20px;
        }
        .header-info input {
            background: transparent; border: none; border-bottom: 2px solid var(--neon-cyan);
            color: var(--text-main); font-size: 1.1rem; outline: none; font-family: inherit;
        }

        /* Textareas & Ghost Divs */
        textarea {
            width: 100%; background-color: #ffffff; color: #000000; border: 3px solid var(--neon-purple);
            border-radius: 6px; padding: 12px; font-family: inherit; font-size: 1rem;
            resize: none; overflow: hidden; box-sizing: border-box; min-height: 60px;
        }
        
        .print-box {
            display: none; white-space: pre-wrap; font-family: inherit; font-size: 1rem;
            line-height: 1.8; color: black; background: white;
        }

        /* Side-by-Side Grid */
        .article-row {
            display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-bottom: 40px; align-items: flex-start;
        }
        .article-text p { margin-top: 0; margin-bottom: 15px; }
        .para-num { color: var(--neon-pink); font-weight: bold; margin-right: 5px; }

        /* Embedded Elements */
        .embedded-box {
            background: rgba(0, 243, 255, 0.05); border: 1px solid var(--neon-cyan);
            padding: 20px; border-radius: 8px; margin: 20px 0;
        }
        .btn {
            background: transparent; color: var(--neon-cyan); border: 2px solid var(--neon-cyan);
            padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; margin-top: 10px;
        }
        .btn:hover { background: var(--neon-cyan); color: #000; }
        .tts-btn {
            background: transparent; border: 1px solid var(--neon-pink); color: var(--neon-pink);
            border-radius: 4px; cursor: pointer; margin-right: 8px; padding: 2px 5px;
        }

        /* Hints & Feedback */
        .hint-box {
            display: none; background: rgba(255, 0, 127, 0.1); padding: 15px;
            border-left: 3px solid var(--neon-pink); margin: 10px 0; font-size: 0.95rem;
        }
        .feedback-msg { margin-top: 10px; font-weight: bold; display: none; padding: 10px; border-radius: 5px; }
        .feedback-correct { background: rgba(0, 255, 0, 0.1); color: #00cc00; border: 1px solid #00cc00; }
        .feedback-incorrect { background: rgba(255, 0, 0, 0.1); color: #ff3333; border: 1px solid #ff3333; }

        img { max-width: 100%; border-radius: 8px; border: 2px solid var(--neon-cyan); margin: 15px 0; }
        .highlighted { background-color: var(--highlight-color); color: #000; cursor: pointer; border-radius: 3px; }
        #highlight-popup { display: none; position: absolute; background: var(--highlight-color); color: black; padding: 6px 12px; border-radius: 5px; font-weight: bold; cursor: pointer; z-index: 1000; }

        /* --- PDF EXPORT (THE GHOST DIV FIX) --- */
        @media print {
            body, .container { background: #fff !important; color: #000 !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; width: 100% !important; }
            h1, h2, h3, p, span, div { color: #000 !important; text-shadow: none !important; border-color: #000 !important; }
            
            /* Keep Grid Side-by-Side */
            .article-row { 
                display: grid !important; 
                grid-template-columns: 2fr 1fr !important; 
                page-break-inside: avoid !important; 
                align-items: start !important;
            }
            
            /* Hide real textareas, show Ghost Divs to allow infinite stretching */
            textarea { display: none !important; }
            .print-box { 
                display: block !important; 
                border: 2px solid #000 !important; 
                padding: 12px !important;
                border-radius: 6px !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            
            .btn, .tts-btn, .access-panel, #progress-container, #reading-ruler { display: none !important; }
            .hint-box { display: block !important; border: 1px solid #000 !important; }
            img { max-width: 80% !important; display: block; margin: 0 auto; }
        }
    </style>
</head>
<body> 
<div id="lock-screen" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--bg-dark); z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h2 style="color: var(--neon-cyan); margin-bottom: 20px;">Class Assignment Locked</h2>
    <p style="color: var(--text-muted); margin-bottom: 20px;">Please enter the class passcode to begin.</p>
    <input type="password" id="pass-input" placeholder="Enter Passcode..." style="padding: 12px; font-size: 1.2rem; border: 3px solid var(--neon-purple); border-radius: 8px; background: #000; color: #fff; text-align: center; margin-bottom: 15px; outline: none;">
    <button class="btn" style="font-size: 1.2rem;" onclick="checkPassword()">Unlock</button>
    <p id="pass-error" style="color: var(--neon-pink); display: none; font-weight: bold; margin-top: 15px;">Incorrect Passcode. Try again.</p>
</div>

<div id="progress-container"><div id="progress-bar"></div></div>
<div id="reading-ruler"></div>
<div id="highlight-popup">Highlight</div>

<div id="dict-modal" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:var(--panel-dark); padding:20px; border:2px solid var(--neon-cyan); z-index:2000; border-radius:8px; text-align:center;">
    <h3 id="dict-word" style="margin-top:0;">Word</h3>
    <p id="dict-def">Loading...</p>
    <button class="btn" onclick="document.getElementById('dict-modal').style.display='none'">Close</button>
</div>

<div class="container" id="assignment-container">
    
    <div class="access-panel">
        <span style="color: var(--text-muted); line-height: 2;">Accessibility:</span>
        <button class="access-btn" onclick="adjustFontSize(-2)">A-</button>
        <button class="access-btn" onclick="adjustFontSize(2)">A+</button>
        <button class="access-btn" id="btn-dyslexia" onclick="toggleDyslexia()">Dyslexia Font</button>
        <button class="access-btn" id="btn-contrast" onclick="toggleContrast()">High Contrast</button>
        <button class="access-btn" id="btn-ruler" onclick="toggleRuler()">Reading Ruler</button>
    </div>

    <div class="header-info">
        <div>Name: <input type="text" id="student-name" class="auto-save-input" placeholder="Type here..."></div>
        <div>Period: <input type="text" id="student-period" class="auto-save-input" size="5"></div>
        <div>Date: <span id="auto-date"></span></div>
    </div>

    <h1>Article of the Week: Stress Less, Listen More</h1>
    <p class="author-line">Can music really help reduce our stress? | By Carlos Ramirez, Aenews.org</p>

    <div class="embedded-box">
        <strong>CCSS 9th Grade ELA Standards:</strong>
        <br>• RI.9-10.1: Cite strong textual evidence.
        <br>• RI.9-10.4: Determine meaning of words/phrases.
        <br>• W.9-10.1: Write arguments using valid reasoning.
    </div>

    <h2>Pre-reading Engagement</h2>
    <p>How does music play a role in your daily life, and do you feel it affects your mood?</p>
    <textarea id="journal-response" class="auto-save-input" placeholder="Type your thoughts here..."></textarea>
    
    <hr style="border-color: #333; margin: 40px 0;">
    <h2>Reading & Annotations</h2>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-bottom: 10px;">
        <h3 style="margin:0;">Article Text</h3>
        <h3 style="margin:0; color: var(--neon-purple);">T4: Talk To The Text</h3>
    </div>

    <div class="article-row">
        <div class="article-text savable-content" id="content-block-1">
            <p><button class="tts-btn">🔊</button><span class="para-num">[1]</span> At any given moment when you press play on your favorite song, your body might already be starting to relax. Music is more than just entertainment, it can actually lower our stress levels.</p>
            <img src="https://loremflickr.com/800/400/headphones,relax" alt="Relaxing with music">
            <p><button class="tts-btn">🔊</button><span class="para-num">[2]</span> In a world where stress has become a part of the daily life for students, workers, and family, something as accessible as music could be one of the most powerful tools to help manage it.</p>
            <p><button class="tts-btn">🔊</button><span class="para-num">[3]</span> Stress has become increasingly common in our everyday routines. With academic pressure and the rise of social media, many people experience mental health issues.</p>
            <p><button class="tts-btn">🔊</button><span class="para-num">[4]</span> According to ANA (American Nurses Association), “When you incorporate more music into your life, it can help relieve anxiety, provide an emotional release, help you focus on the present moment, pull away from stressors, encourage creativity, and increase connection.”</p>
        </div>
        <textarea id="t4-box-1" class="auto-save-input" placeholder="Notes for paragraphs 1-4..."></textarea>
    </div>

    <div class="article-row">
        <div class="article-text savable-content" id="content-block-2">
            <p><button class="tts-btn">🔊</button><span class="para-num">[5]</span> Not only does music improve our mental health, but it also allows us to build strong connections with others who find similar music taste, therefore causing stronger bonds and relations thanks to music.</p>
            
            <div class="embedded-box">
                <h3 style="color: var(--neon-cyan);">The 5Cs: Collaboration & Connection</h3>
                <p>Based on paragraph 5, how can discovering someone has the same music taste as you help build a stronger relationship?</p>
                <button class="btn" onclick="nextHint('five-c')">💡 Need a Hint?</button>
                <div id="five-c-hint-1" class="hint-box"><strong>Level 1 Hint:</strong> Think about what having the same music taste says about your personality or the things you value.</div>
                <div id="five-c-hint-2" class="hint-box"><strong>Level 2 Hint:</strong> Start with: "Discovering similar music tastes helps build stronger relationships because..."</div>
                <textarea id="five-c-response" class="auto-save-input" style="margin-top: 15px;" placeholder="Type your 5Cs response here..."></textarea>
            </div>

            <p><button class="tts-btn">🔊</button><span class="para-num">[6]</span> Music has also been proven to help patients with dementia to remember certain aspects about their earlier lives.</p>
            <p><button class="tts-btn">🔊</button><span class="para-num">[7]</span> Another benefit is how music helps emotionally. It can serve as a healthy outlet to process our feelings when feeling anxious, overwhelmed, or even just mentally drained.</p>
        </div>
        <textarea id="t4-box-2" class="auto-save-input" placeholder="Notes for paragraphs 5-7..."></textarea>
    </div>

    <div class="article-row">
        <div class="article-text savable-content" id="content-block-3">
            <img src="https://loremflickr.com/800/400/music,students" alt="Students and music">
            <p><button class="tts-btn">🔊</button><span class="para-num">[8]</span> After polling 118 people, 116 said that music does help improve our mental health... People from different age demographics and people who represent different music genres were polled. This means that 98% of people found music to be relieving.</p>
            
            <div class="embedded-box">
                <h3 style="color: var(--neon-cyan);">Vocabulary Focus</h3>
                <p>Based on the context in paragraph 8, what does the word <strong>demographics</strong> most likely refer to?</p>
                <label><input type="radio" name="vocab" class="auto-save-input" id="vocab-a" onchange="checkVocab(this, false)"> A) Types of musical instruments</label><br>
                <label><input type="radio" name="vocab" class="auto-save-input" id="vocab-b" onchange="checkVocab(this, true)"> B) Sections of a population categorized by age or background</label><br>
                <label><input type="radio" name="vocab" class="auto-save-input" id="vocab-c" onchange="checkVocab(this, false)"> C) The emotional feelings created by a song</label><br>
                <label><input type="radio" name="vocab" class="auto-save-input" id="vocab-d" onchange="checkVocab(this, false)"> D) Medical surveys used in hospitals</label>
                
                <div id="vocab-feedback" class="feedback-msg"></div>
            </div>

            <p><button class="tts-btn">🔊</button><span class="para-num">[9]</span> Unlike expensive therapy sessions or wellness programs, music is very cost effective and accessible to nearly everyone with a phone or a radio.</p>
        </div>
        <textarea id="t4-box-3" class="auto-save-input" placeholder="Notes for paragraphs 8-9..."></textarea>
    </div>

    <div class="article-row">
        <div class="article-text savable-content" id="content-block-4">
            <p><button class="tts-btn">🔊</button><span class="para-num">[10]</span> As stress continues to rise in our society, it is important that we explore affordable strategies to manage it. Music is not a permanent solution, but it can help reduce stress.</p>
            <p><button class="tts-btn">🔊</button><span class="para-num">[11]</span> From classical music to R&B to pop, the right music at the right time can help manage our mental health.</p>
            <p><button class="tts-btn">🔊</button><span class="para-num">[12]</span> In a time where stress feels unavoidable, maybe the solution isn’t always complicated, sometimes it’s as easy as pressing play.</p>
        </div>
        <textarea id="t4-box-4" class="auto-save-input" placeholder="Notes for paragraphs 10-12..."></textarea>
    </div>

    <hr style="border-color: #333; margin: 40px 0;">

    <h2>Claim-Evidence-Reasoning (CER)</h2>
    <p><strong>Prompt:</strong> Based on the text, does music have a significant positive impact on mental health and stress management?</p>
    
    <button class="btn" onclick="nextHint('cer')" style="margin-bottom: 10px; border-color: var(--neon-pink); color: var(--neon-pink);">💡 CER Hints</button>
    <div id="cer-hint-1" class="hint-box"><strong>Level 1 Support (Sentence Frames):</strong> <br>Claim: Based on the article, music...<br>Evidence: The text states, "..."<br>Reasoning: This proves that...</div>
    <div id="cer-hint-2" class="hint-box"><strong>Level 2 Support (Evidence Options):</strong><br>Option A: "When you incorporate more music... it can help relieve anxiety..." (Para 4)<br>Option B: "...98% of people found music to be relieving..." (Para 8)</div>

    <textarea id="cer-response" class="auto-save-input" placeholder="Type your complete CER response here..."></textarea>

    <hr style="border-color: #333; margin: 40px 0;">

    <h2>Critical-Thinking Connection</h2>
    <p>Create a critical-thinking question to connect what you learned about music and stress to your real-world environment (e.g., your school or family).</p>
    <textarea id="critical-thinking" class="auto-save-input" placeholder="Write your question here..."></textarea>

    <div style="text-align: center; margin-top: 50px;">
        <button class="btn" style="font-size: 1.3rem; padding: 15px 50px;" onclick="exportPDF()">📥 Final Submit (Save as PDF)</button>
    </div>

</div>

<script>
// --- PASSCODE LOGIC ---
    function checkPassword() {
        // Change 'music123' to whatever you want your password to be!
        const correctPassword = "music"; 
        const userInput = document.getElementById('pass-input').value.trim().toLowerCase();
        
        if (userInput === correctPassword) {
            document.getElementById('lock-screen').style.display = 'none';
            // Start the progress bar and other visual features only after unlock
            document.body.style.overflow = "auto"; 
        } else {
            document.getElementById('pass-error').style.display = 'block';
            document.getElementById('pass-input').value = ""; // clear the box
        }
    }
    // Lock scrolling while the screen is active
    document.body.style.overflow = "hidden";
    document.getElementById('auto-date').innerText = new Date().toLocaleDateString();

    // --- ACCESSIBILITY PANEL ---
    let currentFontSize = 18;
    function adjustFontSize(change) {
        currentFontSize += change;
        document.body.style.setProperty('--font-size-base', currentFontSize + 'px');
    }

    function toggleDyslexia() {
        document.body.classList.toggle('dyslexia-font');
        document.getElementById('btn-dyslexia').classList.toggle('active');
    }

    function toggleContrast() {
        document.body.classList.toggle('high-contrast');
        document.getElementById('btn-contrast').classList.toggle('active');
    }

    // Reading Ruler
    let rulerActive = false;
    const ruler = document.getElementById('reading-ruler');
    function toggleRuler() {
        rulerActive = !rulerActive;
        ruler.style.display = rulerActive ? 'block' : 'none';
        document.getElementById('btn-ruler').classList.toggle('active');
    }
    document.addEventListener('mousemove', (e) => {
        if (rulerActive) ruler.style.top = e.clientY + 'px';
    });

    // --- PROGRESS BAR ---
    window.onscroll = function() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        document.getElementById("progress-bar").style.width = ((winScroll / height) * 100) + "%";
    };

    // --- TEXTAREA AUTO-EXPAND ---
    function autoExpand(field) {
        field.style.height = 'inherit';
        field.style.height = (field.scrollHeight + 5) + 'px';
    }
    document.querySelectorAll('textarea').forEach(el => {
        el.addEventListener('input', function() { autoExpand(this); });
    });

    // --- LOCALSTORAGE AUTO-SAVE ---
    const STORAGE_KEY = 'aotw_music_stress_v3';
    function saveToLocalStorage() {
        const data = { inputs: {}, highlights: {} };
        document.querySelectorAll('.auto-save-input').forEach(el => {
            if (el.type === 'radio' || el.type === 'checkbox') data.inputs[el.id] = el.checked;
            else data.inputs[el.id] = el.value;
        });
        document.querySelectorAll('.savable-content').forEach(el => data.highlights[el.id] = el.innerHTML);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            if(data.highlights) {
                for (const [id, html] of Object.entries(data.highlights)) {
                    if (document.getElementById(id)) document.getElementById(id).innerHTML = html;
                }
            }
            if(data.inputs) {
                for (const [id, val] of Object.entries(data.inputs)) {
                    const el = document.getElementById(id);
                    if (el) {
                        if (el.type === 'radio' || el.type === 'checkbox') el.checked = val;
                        else { el.value = val; if (el.tagName === 'TEXTAREA') autoExpand(el); }
                    }
                }
            }
        }
    }
    document.querySelectorAll('.auto-save-input').forEach(el => el.addEventListener('input', saveToLocalStorage));
    window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

    // --- PROGRESSIVE HINTS ---
    let hintClicks = { 'five-c': 0, 'cer': 0 };
    function nextHint(section) {
        hintClicks[section]++;
        let hintEl = document.getElementById(`${section}-hint-${hintClicks[section]}`);
        if (hintEl) hintEl.style.display = 'block';
    }

    // --- INTERACTIVE VOCAB FEEDBACK ---
    function checkVocab(radioBtn, isCorrect) {
        let fb = document.getElementById('vocab-feedback');
        fb.style.display = 'block';
        if (isCorrect) {
            fb.className = 'feedback-msg feedback-correct';
            fb.innerHTML = "<strong>Correct! ✓</strong> The text says 'people from different age demographics... were polled', meaning they broke the population down by age categories.";
        } else {
            fb.className = 'feedback-msg feedback-incorrect';
            fb.innerHTML = "<strong>Incorrect. ✗</strong> Look closely at the context clues: 'people from different age demographics'. It refers to categories of people, not instruments or feelings.";
        }
        saveToLocalStorage();
    }

    // --- HIGHLIGHT & TTS ---
    const highlightPopup = document.getElementById('highlight-popup');
    const container = document.getElementById('assignment-container');
    container.addEventListener('mouseup', function(e) {
        let sel = window.getSelection().toString().trim();
        if (sel.length > 0 && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
            highlightPopup.style.display = 'block';
            highlightPopup.style.left = e.pageX + 'px';
            highlightPopup.style.top = (e.pageY - 40) + 'px';
        } else highlightPopup.style.display = 'none';
    });
    document.addEventListener('mousedown', (e) => { if(e.target.id !== 'highlight-popup') highlightPopup.style.display = 'none'; });

    highlightPopup.addEventListener('mousedown', function(e) {
        e.preventDefault(); 
        let range = window.getSelection().getRangeAt(0);
        let span = document.createElement('span');
        span.className = 'highlighted';
        try { range.surroundContents(span); saveToLocalStorage(); } catch(err) { alert("Highlight within one paragraph at a time."); }
        window.getSelection().removeAllRanges();
        highlightPopup.style.display = 'none';
    });

    document.addEventListener('click', function(e) {
        // Unhighlight
        if (e.target.classList.contains('highlighted')) {
            let parent = e.target.parentNode;
            while(e.target.firstChild) parent.insertBefore(e.target.firstChild, e.target);
            parent.removeChild(e.target);
            saveToLocalStorage();
        }
        // TTS
        if (e.target.classList.contains('tts-btn')) {
            let btn = e.target;
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel(); 
                if (btn.innerText === '⏹️') { btn.innerText = '🔊'; return; }
            }
            document.querySelectorAll('.tts-btn').forEach(b => b.innerText = '🔊');
            let text = btn.parentElement.innerText.replace('🔊', '').replace('⏹️', '').replace(/\[\d+\]/g, '').trim();
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => { btn.innerText = '🔊'; };
            btn.innerText = '⏹️'; 
            window.speechSynthesis.speak(utterance);
        }
    });

    // --- CLICK TO DEFINE ---
    const dictModal = document.getElementById('dict-modal');
    container.addEventListener('dblclick', async function(e) {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        let sel = window.getSelection().toString().trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        if (sel.length > 0 && sel.indexOf(' ') === -1) {
            document.getElementById('dict-word').innerText = sel;
            document.getElementById('dict-def').innerText = "Fetching...";
            dictModal.style.display = 'block';
            try {
                let res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + sel);
                if(res.ok) {
                    let data = await res.json();
                    document.getElementById('dict-def').innerText = data[0].meanings[0].definitions[0].definition;
                } else document.getElementById('dict-def').innerText = "Not found.";
            } catch(err) { document.getElementById('dict-def').innerText = "Network error."; }
        }
    });

    // --- REFINED PDF EXPORT (THE GHOST DIV FIX) ---
    function exportPDF() {
        // 1. Freeze text inputs so they print
        document.querySelectorAll('input[type="text"]').forEach(el => el.setAttribute('value', el.value));
        
        // 2. Create Ghost Divs for all Textareas
        document.querySelectorAll('textarea').forEach(el => {
            let div = document.createElement('div');
            div.className = 'print-box';
            // Use innerText and fallback to a space if empty so the box still renders
            div.innerText = el.value || " "; 
            el.parentNode.insertBefore(div, el.nextSibling);
        });

        // 3. Short timeout to let the browser process the new DOM elements before opening print dialog
        setTimeout(() => {
            window.print();
        }, 300);
    }

    // 4. Clean up Ghost Divs immediately after the print dialog closes
    window.addEventListener('afterprint', () => {
        document.querySelectorAll('.print-box').forEach(el => el.remove());
    });
</script>

</body>
</html>
