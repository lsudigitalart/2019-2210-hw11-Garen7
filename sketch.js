function preload(){
   khoal = loadJSON('https://api.github.com/users/khoalitygoods')
   janna = loadJSON('https://api.github.com/users/Janna-kelly')
}

function setup(){
   createImg(khoal.avatar_url)
   createImg(janna.avatar_url)
}
