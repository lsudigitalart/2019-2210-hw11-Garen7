let people = []

function preload(){
   let names = ['Aarondito', 'Ace601', 'aheb157', 'Allendm656', 'asmi564', 'cnavo1', 'fredeerock', 'gabbykraemer', 'Garen7', 'GradyCham', 'Janna-kelly', 'jlanda2', 'juanyswany', 'mbushn1', 'myorek1', 'kathrynspahn', 'khoalitygoods', 'kkolder', 'R0bobot', 'SamanthaBerkholz', 'samblaeser', 'SCguerra', 'taybutler', 'TwilightAud']
   for(const name of names){
      people.push(loadJSON('https://api.github.com/users/'+name))
   }
}

function setup(){
   let size = 1
   while((innerHeight-innerHeight%(size+1))*(innerWidth-innerWidth%(size+1))*(size+1)**-2 >= 24){
      size++
   }
   createCanvas(0, 0)
   let element
   for(person of people){
      element = createImg(person.avatar_url)
      element.size(size, size)
   }
}
