function removeElement() {
  document.getElementById('moveable').remove();
  document.getElementById('abMe').disabled = false;
  document.getElementById('mySkills').disabled = false;
  document.getElementById('myCV').disabled = false;
  document.getElementById('construct').disabled = false;
  document.getElementById('abMe').className = 'nes-btn';
  document.getElementById('mySkills').className = 'nes-btn';
  document.getElementById('myCV').className = 'nes-btn';
  document.getElementById('construct').className = 'nes-btn';
}
const aboutText = `Hallo, ich bin Ryan. Ich lerne derzeit Anwendungsentwicklung in Hamburg Deutschland bei der College Berufliche Weiterbildung GmbH.<br><br> Um meine Umschulung abzuschließen, muss ich vom 26.09.2022 bis 21.11.2023 ein Praktikum absolvieren. <br><br> Unter „Meine Skills“ kannst du sehen was ich bis zum Beginn meines Praktikums lernen werde.`;

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
    aboutMeTitle.innerHTML = `Über Mich <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
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
    mySkillsTitle.innerHTML = `Meine Skills <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let mySkillsDiv = document.createElement('div');
    mySkillsDiv.className = 'lists';
    mySkillsDiv.innerHTML = `<div class="lists">
    <ul class="nes-list is-disc">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
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
    myCVTitle.innerHTML = `Mein Lebenslauf <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let myCVP = document.createElement('div');
    myCVP.innerHTML = `<embed src="RyanCoulsonLebenslauf.pdf" height="750px" width="500px"/>`
    myCV.appendChild(myCVTitle);
    myCV.appendChild(myCVP);
    document.body.appendChild(myCV);
    drag();
    document.getElementById('myCV').disabled = true;
    document.getElementById('myCV').className = 'nes-btn is-disabled';
  }
}

function construction() {
  if (document.getElementById('moveable')) {
    removeElement();
    construction();
  } else {
    let construction = document.createElement('div');
    construction.className = 'nes-container with-title nes-pointer';
    construction.id = 'moveable';
    let constructionTitle = document.createElement('span');
    constructionTitle.className = 'title';
    constructionTitle.style = 'border: 3px solid black;';
    constructionTitle.innerHTML = `Aufbau <button type='button' onclick='removeElement()'><i class="nes-icon close is-small"></i></button>`;
    let constructionP = document.createElement('p');
    constructionP.innerHTML = `Diese Website befindet sich derzeit im Aufbau.<br><br> ToDo:<br> <ul><li>Responsive Design</li><li>Projektbereich</li><li>Animierter Hintergrund</li></ul>`;
    construction.appendChild(constructionTitle);
    construction.appendChild(constructionP);
    document.body.appendChild(construction);
    drag();
    document.getElementById('construct').disabled = true;
    document.getElementById('construct').className = 'nes-btn is-disabled';
  }
}
