const modalBtn = document.querySelector ( ".log-btn");
  console.log(modalBtn.textContent);


const modal = document.querySelector (".modal-overlay");
  console.log (modal.textContent)

const OffBtn = document.querySelector (".modal-off");
  console.log (OffBtn.textContent);

modalBtn.addEventListener( "click" , function () {
   console.log ("button clicked");
   modal.classList.remove("hidden");
});
 OffBtn.addEventListener ( "click" , function() {
     console.log ("button clicked");
     modal.classList.add("hidden");
 });

 modal.addEventListener ( "click" , function() {
     console.log ("button clicked");
     modal.classList.add("hidden");
 });

  