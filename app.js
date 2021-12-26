function getRandom(){
    var myArray = ['"SIIIUUUU!"', '"Tu amor me hace fuerte, tu odio me hace imparable."', '"Quizás me odian porque soy muy bueno."', '"Algunos fans me abuchean y silban porque soy guapo, rico y buen jugador. Me envidian."', '"Yo sé que al que le gusta el fútbol, le gusto yo."', '"El talento no lo es todo. Lo puedes tener desde la cuna, pero es necesario aprender el oficio para ser el mejor."', '"¿Por qué mentir? No voy a ser un hipócrita y decir lo opuesto a lo que pienso, como hacen otros."', '"Demasiada humildad es un defecto."'];
    var random = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("message").innerHTML=random;
}