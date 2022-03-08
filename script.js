$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.hunger-button').click(clickedHungerButton);
    $('.stepon-button').click(clicksteponButton);
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"My Pet Name", weight:"??", happiness:"??", TimeSteppedOn:"??"};
    pet_info['name'] = "Purplebeard";
    pet_info['weight'] = 50;
    pet_info['happiness'] = 0;
    pet_info['hunger'] = 5;
    pet_info['stepon'] = 0;
  
    function clickedTreatButton() {
      // Pet Happiness
      pet_info['happiness']= pet_info['happiness'] + 2;
      // Increase pet weight
      pet_info['weight']= pet_info['weight'] + 2; //treat only increases weight by 2
      var audio = document.getElementById("audio4");
      audio.play();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] = pet_info['happiness'] + 5;
      // Decrease pet weight
      pet_info['weight']--;
      var audio = document.getElementById("audio1");
      audio.play();
      // alert("Throw me the ball again!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
     // Decrease pet happiness
      pet_info['happiness']--;
      // Decrease pet weight
      pet_info['weight']--;
      var audio = document.getElementById("audio2");
      audio.play();
      // alert("Time to go for a swim!");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info['weight'] < 0 ){
        pet_info['weight'] = 0;
      }
      if(pet_info['happiness'] < 0 ){
        pet_info['happiness'] = 0;
      }
      if(pet_info['hunger'] < 0 ){
        pet_info['hunger'] = 0;
      }
      if(pet_info['stepon'] < 0 ){
        pet_info['stepon'] = 0;
      }
    }
    
    function clickedHungerButton() {
      // Increase pet weight
      pet_info['weight'] = pet_info['weight'] + 3; //weight increases by 3
      var audio = document.getElementById("audio4");
      audio.play();
      // alert("Thanks, delicious!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clicksteponButton() {
      pet_info['stepon']++;
      var audio = document.getElementById("audio3");
      audio.play();
      // alert("OW, that hurt!");
      checkAndUpdatePetInfoInHtml();

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.hunger').text(pet_info['hunger']);
      $('.stepon').text(pet_info['stepon']);
    }
  