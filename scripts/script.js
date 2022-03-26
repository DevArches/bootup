function removeElement() {
  document.getElementById('moveable').remove();
  document.getElementById('abMe').disabled = false;
  document.getElementById('mySkills').disabled = false;
  document.getElementById('myCV').disabled = false;
  document.getElementById('abMe').className = 'nes-btn';
  document.getElementById('mySkills').className = 'nes-btn';
  document.getElementById('myCV').className = 'nes-btn';
}
const aboutText = `Hi, I'm Ryan. I'm currently learning App-Development in Hamburg Germany at College Berufliche Weiterbildung GmbH.<br><br> To finish my studies I need to complete a Praktikum starting 26.09.2022. <br><br> Under "My Skills" you can see what I will learn by the time my Praktikum starts.`;

function aboutMe() {
  if (document.getElementById('moveable')) {
    removeElement();
    aboutMe();
  } else {
    let aboutMe = document.createElement('div');
    aboutMe.className = 'nes-container with-title nes-pointer';
    aboutMe.id = 'moveable';
    let aboutMeTitle = document.createElement('span');
    aboutMeTitle.className = 'title';
    aboutMeTitle.style = 'border: 3px solid black;';
    aboutMeTitle.innerHTML = `About Me <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let aboutMeP = document.createElement('p');
    aboutMeP.innerHTML = aboutText;
    aboutMe.appendChild(aboutMeTitle);
    aboutMe.appendChild(aboutMeP);
    document.body.appendChild(aboutMe);
    drag();
    document.getElementById('abMe').disabled = true;
    document.getElementById('abMe').className = 'nes-btn is-disabled';
  }
}
function mySkills() {
  if (document.getElementById('moveable')) {
    removeElement();
    mySkills();
  } else {
    let mySkills = document.createElement('div');
    mySkills.className = 'nes-container with-title nes-pointer';
    mySkills.id = 'moveable';
    let mySkillsTitle = document.createElement('span');
    mySkillsTitle.className = 'title';
    mySkillsTitle.style = 'border: 3px solid black;';
    mySkillsTitle.innerHTML = `My Skills <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let mySkillsDiv = document.createElement('div');
    mySkillsDiv.className = 'lists';
    mySkillsDiv.innerHTML = `<div class="lists">
    <ul class="nes-list is-disc">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MongoDB</li>
      <li>Linux</li>
      <li>GitHub</li>
      <li>Java*</li>
      <li>PHP*</li>
    </ul>
    <p>* not yet completed in Umschulung</p>
  </div>`;
    mySkills.appendChild(mySkillsTitle);
    mySkills.appendChild(mySkillsDiv);
    console.log(mySkills);
    document.body.appendChild(mySkills);
    drag();
    document.getElementById('mySkills').disabled = true;
    document.getElementById('mySkills').className = 'nes-btn is-disabled';
  }
}

function myCV() {
  if (document.getElementById('moveable')) {
    removeElement();
    myCV();
  } else {
    let myCV = document.createElement('div');
    myCV.className = 'nes-container with-title nes-pointer';
    myCV.id = 'moveable';
    let myCVTitle = document.createElement('span');
    myCVTitle.className = 'title';
    myCVTitle.style = 'border: 3px solid black;';
    myCVTitle.innerHTML = `My CV <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let myCVP = document.createElement('p');
    myCVP.innerHTML = `<embed src="RyanCoulsonLebenslauf.pdf" height="750px" width="500px"/>`
    myCV.appendChild(myCVTitle);
    myCV.appendChild(myCVP);
    document.body.appendChild(myCV);
    drag();
    document.getElementById('myCV').disabled = true;
    document.getElementById('myCV').className = 'nes-btn is-disabled';
  }
}

