let img = document.getElementById('id-speech-image');
      let lang = navigator.language || 'en-US';
      let speechRec;
      function setup() {
          speechRec = new p5.SpeechRec(lang, gotSpeech);
          
          speechRec.start();

          function gotSpeech() {
              collectedSpeech = speechRec.resultString;
              thisString = collectedSpeech.toLowerCase();
              console.log(thisString);
              if (thisString === 'hello' || thisString === 'hi') {
                  img.src = '{% static "signImages/Hello.jpg" %}';
              }
              else if (thisString==='assalamu alaikum') {
                  img.src = '{% static "signImages/assalamu_alaikum.jpg" %}';            
              }
              else if (thisString==='no') {
                  img.src = '{% static "signImages/No.jpg" %}';            
              }
              else if (thisString==='yes') {
                  img.src = '{% static "signImages/Yes.jpg" %}';            
              }
              else if (thisString==='thank you') {
                  img.src = '{% static "signImages/Thank_you.jpg" %}';            
              }
              else if (thisString==='family') {
                  img.src = '{% static "signImages/Family.jpg" %}';            
              }
          }
      }