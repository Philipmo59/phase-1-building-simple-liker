// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'














// Your JavaScript code goes here!
const likes = document.getElementsByClassName("like")
const modal = document.getElementById("modal") 

for(let like of likes){
  like.addEventListener("click",() => mimicServerCall("http://mimicServer.example.com")
  .then(() => {
    if(like.className != "activated-heart")
  {
    like.innerHTML = "Like! "+ FULL_HEART;
    like.className = "activated-heart";
  }
    else if (like.className == "activated-heart") {
    like.innerHTML = "Like! "+ EMPTY_HEART
    like.className = ""
  }
  
})
  .catch(error => modal.className = ""),
  )
}
setTimeout(function(){
  modal.hidden = true},3000)



























//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}