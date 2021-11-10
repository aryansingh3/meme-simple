function update_image(){
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    img.src = window.URL.createObjectURL(file);
  }
  
  function update_text(){
    var text = document.getElementById("user_text");
    var meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
  }
  function update_text1(){
    var text = document.getElementById("user_text2");
    var next_meme = document.getElementById("next_meme");
    next_meme.innerHTML = user_text2.value;
  }