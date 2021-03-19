const educationList =document.querySelector('#educations');
const form=document.querySelector('#add-education-form');
const organizationList = document.querySelector('#organizations');
const form3=document.querySelector('#add-organization-form');
const git =document.querySelector('#git');
const form4=document.querySelector('#edit-git-form')
const twitter =document.querySelector('#twitter');
const form5=document.querySelector('#edit-twitter-form')
const linkedin =document.querySelector('#linkedin');
const form6=document.querySelector('#edit-linkedin-form')
const form7=document.querySelector('#edit-desc-form')
const projectList = document.querySelector('#projects');
const form8=document.querySelector('#add-project-form')
function renderEducation(doc){
    let li = document.createElement('li');
    let school = document.createElement('span');
    let degree = document.createElement('span');
    let year_start = document.createElement('span');
    let year_end = document.createElement('span');
    let icon = document.createElement('span');
    icon.innerHTML= '<span class="iconify" data-icon="cil-school" data-inline="true" style="color: #4bffa5; height:2em;width:2em;  "></span>'

    let cross= document.createElement('span');

    
    li.setAttribute('data-id',doc.id);
    school.textContent = doc.data().school;
    degree.textContent = doc.data().degree;
    year_end.textContent=doc.data().year_end;
    year_start.textContent = doc.data().year_start+"-" +year_end.textContent;
    cross.textContent='x';
    cross.setAttribute('class','cross');
    li.appendChild(cross);
    li.appendChild(icon);
    li.appendChild(school);
    li.appendChild(degree);
    li.appendChild(year_start);


    educationList.appendChild(li);


    //delete data
    cross.addEventListener('click', (e) =>{
            e.stopPropagation();
            let id= e.target.parentElement.getAttribute('data-id');
            db.collection('educations').doc(id).delete();
            setTimeout(function(){
location.reload();
            },1000)
    })
}
    //saving data
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        db.collection('educations').add({
            school :form.school.value,
            degree:form.degree.value,
            year_start:form.year_start.value,
            year_end:form.year_end.value

        })
        form.school.value='';
        form.degree.value='';
        form.year_start.value='';
        form.year_end.value='';


    })

 db.collection('educations').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderEducation(doc)
    })


 })

 function renderProjects(doc){
  let li = document.createElement('li');
  let title = document.createElement('span');
  let year = document.createElement('span');
  let cross= document.createElement('span');
  let icon = document.createElement('span');
  
  li.setAttribute('data-id',doc.id);
  title.textContent = doc.data().title;
  year.textContent = doc.data().year;
  
  cross.textContent='x';
  cross.setAttribute('class','cross');
  li.appendChild(cross);
  li.appendChild(title);
  li.appendChild(year);
  


  projectList.appendChild(li);


  //delete data
  cross.addEventListener('click', (e) =>{
          e.stopPropagation();
          let id= e.target.parentElement.getAttribute('data-id');
          db.collection('projects').doc(id).delete();
          setTimeout(function(){
location.reload();
          },1000)
  })
}
  //saving data
  form8.addEventListener('submit',(e) =>{
      e.preventDefault();
      db.collection('projects').add({
          title :form8.title.value,
          year:form8.year.value
      

      })
      form8.title.value='';
      form8.year.value='';


  })

db.collection('projects').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderProjects(doc)
  })


})
 function renderOrganization(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let position = document.createElement('span');
  let year_start = document.createElement('span');
  let year_end = document.createElement('span');
  let cross= document.createElement('span');
  let icon = document.createElement('span');
  icon.innerHTML='<span class="iconify" data-icon="codicon:organization" data-inline="false" style="color: #4bffa5; height: 2em; width: 2em;"></span>'

  li.setAttribute('data-id',doc.id);
  name.textContent = doc.data().name;
  position.textContent = doc.data().position;
  year_end.textContent = doc.data().year_end;
  year_start.textContent = doc.data().year_start+"-" +year_end.textContent;
  cross.textContent='x';
    cross.setAttribute('class','cross');

    li.appendChild(cross);
li.appendChild(icon);
  li.appendChild(name);
  li.appendChild(position);
  li.appendChild(year_start);



  organizationList.appendChild(li);
  cross.addEventListener('click', (e) =>{
    e.stopPropagation();
    let id= e.target.parentElement.getAttribute('data-id');
    db.collection('organizations').doc(id).delete();
    setTimeout(function(){
      location.reload();
                  },1000)



})

}
 //saving data
 form3.addEventListener('submit',(e) =>{
  e.preventDefault();
  db.collection('organizations').add({
      name :form3.name.value,
      position:form3.position.value,
      year_start:form3.year_start.value,
      year_end:form3.year_end.value
     

  })
  console.log('added')
  form3.name.value='';
  form3.position.value='';
  form3.year_start.value='';
  form3.year_end.value='';
})
db.collection('organizations').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderOrganization(doc)
      
  })


})
function renderOthers(doc){
  let li = document.createElement('li');
  let value = document.createElement('span');
  
  li.setAttribute('data-id',doc.id);
  value.textContent = doc.data().value;
  
  li.appendChild(value);


  others.appendChild(li);
}
db.collection('others').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderOthers(doc)
  })


})

function renderGitHub(doc){
  let li = document.createElement('li');
  let GitHub = document.createElement('span');
  
  li.setAttribute('data-id',doc.id);
  GitHub.textContent = doc.data().GitHub;
  
  li.appendChild(GitHub);
  document.getElementById('gitlink').setAttribute('href', GitHub.textContent);


  git.appendChild(li);
}


db.collection('others').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderGitHub(doc)
  })


})


function renderTwitter(doc){
  let li = document.createElement('li');
  let Twitter = document.createElement('span');
  
  li.setAttribute('data-id',doc.id);
  Twitter.textContent = doc.data().Twitter;
  
  li.appendChild(Twitter);
  document.getElementById('twitlink').setAttribute('href',  Twitter.textContent );


  twitter.appendChild(li);
}
db.collection('others').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderTwitter(doc)
  })


})

function renderLinkedIn(doc){
  let li = document.createElement('li');
  let LinkedIn = document.createElement('span');
  
  li.setAttribute('data-id',doc.id);
  LinkedIn.textContent = doc.data().LinkedIn;
      document.getElementById('linklink').setAttribute('href', LinkedIn.textContent );

  li.appendChild(LinkedIn);


  linkedin.appendChild(li);

}
db.collection('others').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
      renderLinkedIn(doc)
  })


})
form4.addEventListener('submit',(e) =>{
  e.preventDefault();
  db.collection('others').doc('links').update({
      GitHub :form4.new_gitlink.value
     
  })
  form4.new_gitlink.value='';
})
form5.addEventListener('submit',(e) =>{
  e.preventDefault();
  db.collection('others').doc('links').update({
      Twitter :form5.new_twitterlink.value
     
  })
  form5.new_twitterlink.value='';
})

form6.addEventListener('submit',(e) =>{
  e.preventDefault();
  db.collection('others').doc('links').update({
      LinkedIn :form6.new_linkedinlink.value
     
  })
  form6.new_linkedinlink.value='';
})

form7.addEventListener('submit',(e) =>{
  e.preventDefault();
  db.collection('others').doc('intro').update({
      value :form7.new_desc.value
     
  })
  form7.new_desc.value='';
})

 
 var messages=["A dreamer","A believer", "A visionary"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =3.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function on(){
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function openForm3() {
    document.getElementById("myForm3").style.display = "block";
  }
  
  function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
  }
  function on3() {
      document.getElementById("overlay3").style.display = "block";
    }
    
    function off3() {
      document.getElementById("overlay3").style.display = "none";
    }
    function openForm4() {
      document.getElementById("myForm4").style.display = "block";
    }
    
    function closeForm4() {
      document.getElementById("myForm4").style.display = "none";
    }
    function on4() {
        document.getElementById("overlay4").style.display = "block";
      }
      
      function off4() {
        document.getElementById("overlay4").style.display = "none";
      }
      function openForm5() {
        document.getElementById("myForm5").style.display = "block";
      }
      
      function closeForm5() {
        document.getElementById("myForm5").style.display = "none";
      }
      function on5() {
          document.getElementById("overlay5").style.display = "block";
        }
        
        function off5() {
          document.getElementById("overlay5").style.display = "none";
        }
        function openForm6() {
          document.getElementById("myForm6").style.display = "block";
        }
        
        function closeForm6() {
          document.getElementById("myForm6").style.display = "none";
        }
        function on6() {
            document.getElementById("overlay6").style.display = "block";
          }
          
          function off6() {
            document.getElementById("overlay6").style.display = "none";
          }
          function openForm7() {
            document.getElementById("myForm7").style.display = "block";
          }
          
          function closeForm7() {
            document.getElementById("myForm7").style.display = "none";
          }
          function on7() {
              document.getElementById("overlay7").style.display = "block";
            }
            
            function off7() {
              document.getElementById("overlay7").style.display = "none";
            }
            function openForm8() {
              document.getElementById("myForm8").style.display = "block";
            }
            
            function closeForm8() {
              document.getElementById("myForm8").style.display = "none";
            }
            function on8() {
                document.getElementById("overlay8").style.display = "block";
              }
              
              function off8() {
                document.getElementById("overlay8").style.display = "none";
              }
  

         function reload(){ 
            setTimeout(function(){
              location.reload();
                          },1000)
                        }
