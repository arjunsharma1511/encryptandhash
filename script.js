const challenges = [
  {id:'A1',m:'alpha',title:'Locked or fingerprinted?',desc:'Encrypted data can be returned to its original form when you have the right key.',q:'Which process is reversible: encryption or hashing?',a:['encryption'],h:'A locked box can be unlocked with a key.'},
  {id:'A2',m:'alpha',title:'The one-way street',desc:'A secure hash is designed to travel in one direction only.',q:'Which process is designed to be one-way?',a:['hashing','hash'],h:'Think “digital fingerprint,” not “locked box.”'},
  {id:'A3',m:'alpha',title:'What opens the box?',desc:'Encryption protects a secret by requiring something special to read it again.',q:'What is normally needed to decrypt encrypted data?',a:['key','a key','encryption key','decryption key'],h:'It is a three-letter word, like the object used on a door.'},
  {id:'A4',m:'alpha',title:'Check the download',desc:'Software websites publish hashes so you can verify that a download was not altered.',q:'Should you use encryption or hashing to check file integrity?',a:['hashing','hash'],h:'You compare fingerprints; you do not need to recover data.'},
  {id:'A5',m:'alpha',title:'Send a private message',desc:'Priya needs to send Ravi a message that Ravi can read, but strangers cannot.',q:'Should Priya use encryption or hashing?',a:['encryption','encrypt'],h:'Ravi needs to recover the original message.'},
  {id:'A6',m:'alpha',title:'Name the safe hash',desc:'MD5 is old and unsafe for security. SHA-256 is a modern hash taught in this lab.',q:'Which is safer for integrity: MD5 or SHA-256?',a:['sha-256','sha256','sha 256'],h:'Choose the answer with 256 in its name.'},
  {id:'B1',m:'bravo',title:'Caesar warms up',desc:'A Caesar cipher shifts every letter by the same amount. Shift each letter in KHOOR backward by 3.',q:'Decrypt KHOOR.',a:['hello'],h:'K→H, H→E, O→L.'},
  {id:'B2',m:'bravo',title:'Shift by one',desc:'This message was encrypted by moving each letter one step forward in the alphabet.',q:'Decrypt DZUFS.',a:['cyber'],h:'Move D back to C, Z back to Y…'},
  {id:'B3',m:'bravo',title:'The number line',desc:'Use A=1, B=2, C=3 … Z=26. Separate numbers are separate letters.',q:'Decode 8-1-19-8.',a:['hash'],h:'8=H and 1=A.'},
  {id:'B4',m:'bravo',title:'Read in the mirror',desc:'A reverse cipher simply writes the whole message backward.',q:'Decrypt NOITPYRCNE.',a:['encryption'],h:'Read the letters from right to left.'},
  {id:'B5',m:'bravo',title:'ROT13 patrol',desc:'ROT13 shifts letters by 13. Applying ROT13 twice restores the original.',q:'Decode FRPERG using ROT13.',a:['secret'],h:'F→S, R→E, P→C.'},
  {id:'B6',m:'bravo',title:'Binary byte',desc:'Computers store characters as bits. In 8-bit ASCII, 01000001 is a famous first letter.',q:'What capital letter is 01000001?',a:['a'],h:'It is the first letter of the alphabet.'},
  {id:'B7',m:'bravo',title:'Two-step relay',desc:'First reverse the text. Then shift every letter backward by 1.',q:'Decrypt ULFDP (reverse first, then shift -1).',a:['code'],h:'Reverse gives PDFLU. Then P→O, D→C, F→E, L→K, U→T—wait, that does not form a word. Try applying the shift first, then reverse the result.',note:'intentional-order'},
  {id:'C1',m:'charlie',title:'Fixed-size clue',desc:'SHA-256 always creates a 256-bit result, no matter whether the input is one word or a whole book.',q:'How many bits are in a SHA-256 hash?',a:['256','256 bits'],h:'The number is in the algorithm’s name.'},
  {id:'C2',m:'charlie',title:'Tiny change, huge effect',desc:'Changing one input character should produce a very different hash. This is called the avalanche effect.',q:'Does “cat” normally have the same hash as “Cat”? Answer yes or no.',a:['no','nope'],h:'Capital letters change the input bytes.'},
  {id:'C3',m:'charlie',title:'Length inspector',desc:'A SHA-256 hash is commonly displayed as 64 hexadecimal characters.',q:'How many hexadecimal characters are normally displayed for SHA-256?',a:['64','64 characters','64 hex characters'],h:'Each hex character represents 4 bits: 256 ÷ 4 = ?'},
  {id:'C4',m:'charlie',title:'Password storage',desc:'Good systems store a salted password hash instead of the original password.',q:'Should a website store your plain password or its hash?',a:['hash','its hash','password hash','hashed password'],h:'The one-way option is safer if the database leaks.'},
  {id:'C5',m:'charlie',title:'Add a pinch of salt',desc:'A salt is random data added before hashing. It makes identical passwords produce different stored hashes.',q:'What is the random data added before password hashing called?',a:['salt','a salt'],h:'It shares its name with a common table seasoning.'},
  {id:'C6',m:'charlie',title:'Match, not reverse',desc:'Login systems hash what you type and compare it with the stored hash. They do not decrypt the stored hash.',q:'At login, does the system compare hashes or decrypt a hash?',a:['compare hashes','compares hashes','compare','comparison'],h:'Secure hashes cannot be decrypted.'},
  {id:'D1',m:'delta',title:'Case file: leaked database',desc:'A database contains readable customer passwords. The team needs a safer design.',q:'What one-way process should replace plain password storage?',a:['hashing','hash','password hashing'],h:'Use the digital-fingerprint process.'},
  {id:'D2',m:'delta',title:'Case file: confidential grades',desc:'Teachers must save grades so authorized staff can later read the original values.',q:'Should the grade file be encrypted or hashed?',a:['encrypted','encryption','encrypt'],h:'Staff need the original information back.'},
  {id:'D3',m:'delta',title:'Case file: suspicious file',desc:'The expected SHA-256 begins 9A7B. Your downloaded file’s SHA-256 begins 1F20.',q:'Do the hashes match? Answer yes or no.',a:['no','nope'],h:'Compare the first four characters.'},
  {id:'D4',m:'delta',title:'Case file: lost key',desc:'A file was encrypted, but its only decryption key was lost.',q:'Can the team normally recover the original file without the key? Answer yes or no.',a:['no','nope'],h:'Encryption is reversible only when the correct key is available.'},
  {id:'D5',m:'delta',title:'Final transmission',desc:'Complete the central lesson of the whole operation.',q:'Fill both blanks: Encryption is ___; hashing is ___.',a:['reversible one-way','reversible one way','reversible, one-way','reversible, one way','reversible; one-way','reversible; one way'],h:'A lock can be opened. A fingerprint is designed to go in only one direction.'}
];

// Correct B7 data: shift ULFDP backward first -> TKECO, reverse -> OCEKT (not CODE).
// Replace with a consistent beginner puzzle before rendering.
Object.assign(challenges.find(c=>c.id==='B7'),{desc:'First shift every letter backward by 1. Then reverse the result.',q:'Decrypt FEPD (shift -1, then reverse).',a:['code'],h:'F→E, E→D, P→O, D→C. Now read the result backward.'});

const storageKey='hash-cipher-lab-v1';
let solved=new Set(JSON.parse(localStorage.getItem(storageKey)||'[]'));
const grid=document.querySelector('#challengeGrid');

function esc(s){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function render(){
  grid.innerHTML=challenges.map((c,i)=>`<article class="challenge-card ${solved.has(c.id)?'solved':''}" data-mission="${c.m}" id="challenge-${c.id}">
    <span class="solved-badge">✓ FLAG CAPTURED</span><div class="challenge-top"><span class="challenge-id">${c.id} // ${c.m.toUpperCase()}</span><span class="challenge-points">${solved.has(c.id)?'COMPLETE':String(i+1).padStart(2,'0')+' OF 24'}</span></div>
    <h3>${esc(c.title)}</h3><p class="description">${esc(c.desc)}</p><div class="question-box"><p>${esc(c.q)}</p></div>
    <form class="answer-row" data-id="${c.id}"><label class="sr-only" for="answer-${c.id}">Answer to ${c.id}</label><input id="answer-${c.id}" autocomplete="off" placeholder="type answer…" ${solved.has(c.id)?'disabled':''}><button type="submit">SUBMIT</button></form>
    <button class="hint-toggle" type="button" aria-expanded="false">Need a hint?</button><p class="hint">INTEL: ${esc(c.h)}</p><p class="feedback" aria-live="polite"></p></article>`).join('');
  bindCards(); updateProgress();
}
function normalize(v){return v.toLowerCase().trim().replace(/\s+/g,' ').replace(/[.!?]$/,'');}
function bindCards(){
  document.querySelectorAll('.answer-row').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault(); const c=challenges.find(x=>x.id===form.dataset.id); const value=normalize(form.querySelector('input').value); const feedback=form.parentElement.querySelector('.feedback');
    if(c.a.some(a=>normalize(a)===value)){solved.add(c.id);localStorage.setItem(storageKey,JSON.stringify([...solved]));feedback.className='feedback success';feedback.textContent='Flag captured! Excellent work.';form.parentElement.classList.add('solved');form.querySelector('input').disabled=true;form.parentElement.querySelector('.challenge-points').textContent='COMPLETE';form.parentElement.querySelector('.solved-badge').style.display='block';updateProgress();}
    else{feedback.className='feedback error';feedback.textContent=value?'Not quite. Read the note or open the hint, then try again.':'Type an answer first.';}
  }));
  document.querySelectorAll('.hint-toggle').forEach(btn=>btn.addEventListener('click',()=>{const hint=btn.nextElementSibling;const open=hint.classList.toggle('open');btn.setAttribute('aria-expanded',open);btn.textContent=open?'Hide hint':'Need a hint?';}));
}
function updateProgress(){const n=solved.size,p=Math.round(n/challenges.length*100),left=challenges.length-n;document.querySelector('#progressText').textContent=`${n} / 24 FLAGS`;document.querySelector('#progressBar').style.width=p+'%';document.querySelector('#finishTitle').textContent=n===24?'Operation complete.':`${left} flag${left===1?'':'s'} remain.`;document.querySelector('#finishMessage').textContent=n===24?'You can now explain when to use encryption and when to use hashing.':n<6?'Start with Mission A. Every correct answer moves the bar.':n<19?'Good progress. Keep following the missions in order.':'Final stretch. Finish the case files to complete the lab.';document.querySelector('#certificateButton').disabled=n!==24;}

document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');document.querySelectorAll('.challenge-card').forEach(card=>card.classList.toggle('hidden',tab.dataset.filter!=='all'&&card.dataset.mission!==tab.dataset.filter));}));
document.querySelector('#resetButton').addEventListener('click',()=>{if(confirm('Reset all captured flags and the timer?')){localStorage.removeItem(storageKey);localStorage.removeItem(storageKey+'-timer');solved.clear();location.reload();}});

let remaining=Number(localStorage.getItem(storageKey+'-timer')||4500),tick=null;
function showTime(){const min=Math.floor(remaining/60),sec=remaining%60;document.querySelector('#timer').textContent=`${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;}
document.querySelector('#timerButton').addEventListener('click',()=>{if(tick){clearInterval(tick);tick=null;document.querySelector('#timerLabel').textContent='RESUME';return;}document.querySelector('#timerLabel').textContent='PAUSE';tick=setInterval(()=>{if(remaining>0){remaining--;localStorage.setItem(storageKey+'-timer',remaining);showTime();}else{clearInterval(tick);tick=null;document.querySelector('#timerLabel').textContent='TIME';}},1000);});
showTime();
const dialog=document.querySelector('#certificateDialog');
document.querySelector('#certificateButton').addEventListener('click',()=>{document.querySelector('#certificateDate').textContent=new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});dialog.showModal();});
document.querySelector('#printButton').addEventListener('click',()=>window.print());
render();
