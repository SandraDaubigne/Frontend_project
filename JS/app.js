     
//Mammafunktionen

    //------Lägga till föremål---//
    function addItemToList(){
        const item = document.getElementById('todo').value,
           list = document.getElementById('list'),
           li = document.createElement('li'),
           label = document.createElement('label'),
           select = document.createElement('input'),
           button = document.createElement('button'),
           textNode = document.createTextNode(item);
       
           //-----Markera föremål som färdiga.---//
           select.setAttribute("type","checkbox"); 
           select.setAttribute("class","box");
           button.setAttribute("class","delete");
           label.setAttribute("class", "box-label" );
       
           //Kan bara ha ett id per lista
           //label för att få klickfunktionen så att chekcboxen fungerar
           //Gör ett uuid för select som input använder sen.
           let d = new Date();
           select.setAttribute("id", d);
           label.setAttribute("for", d);       
       
           writeFromScript();
           
           //-----Ta bort föremål------- //      
           button.addEventListener("click", function(){    
           list.removeChild(li);
           list.removeChild(select);
           });  
       
           function writeFromScript(){
               list.appendChild(li);
               // upptänkte att om det är nåt som ska vara
               //förälder sen så måste de skapas innan
               //barnet skapas för att hamna i rätt ordning
               li.appendChild(select);
               li.appendChild(label);
               li.appendChild(textNode);
               li.appendChild(button);   
           
               event.preventDefault();   
           }
       
          //Se hur många ofärdiga föremål som återstår ("X items left").
           select.addEventListener("click", function(){ 
       
               let items = document.querySelectorAll('input[type="checkbox"]:not(:checked).box').length;
               document.getElementById("left").innerHTML = items;
               // alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
            });
       
       
       }//Slut på mamma funktion
       
           //------Markera alla föremål som färdiga/ofärdiga.--//
           function selectAll(source) {
               let checkboxes = document.getElementsByClassName('box');
               for(let i=0, n=checkboxes.length; i<n; i++) {
               checkboxes[i].checked = source.checked;
               }
           }
       
           function showAll(){
               let texts = document.querySelectorAll('li');
                   for(let i = 0; i<texts.length; i++){ 
                       let txt = texts[i];
                       texts[i].style.display = "grid";
                   }      
           }
       
           function active(){
               let texts = document.querySelectorAll('li');
               let boxes = document.querySelectorAll('.box');
                    
                   for(let i = 0; i<boxes.length; i++){
                       let box = boxes[i];
                       if(box.checked){
                        texts[i].style.display = "none";  
                       }
                   }
       
           }   
           
       
           function completed(){
               let texts = document.querySelectorAll('li');
               let boxes = document.querySelectorAll('.box');
                    
                   for(let i = 0; i<boxes.length; i++){
                       let box = boxes[i];
                       if(box.checked){
                        
                       }else{
                         texts[i].style.display = "none";   
                       }
                   }
       
           } 
           
           function removeCompleted(){
                   let texts = document.querySelectorAll('li');
                   let boxes = document.querySelectorAll('.box');
                    
                   for(let i = 0; i<boxes.length; i++){
                       let box = boxes[i];
                       let txt = texts[i];
                       if(box.checked){
                           box.parentNode.removeChild(box);
                           txt.parentNode.removeChild(txt);
                       }
                   }
           }
       
           
       
           
       