var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://image.shutterstock.com/z/stock-vector-an-indian-fat-old-happy-grandmother-wearing-a-saree-is-standing-with-a-stick-in-her-hand-for-1233826615.jpg" , "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://cdn1.vectorstock.com/i/1000x1000/48/80/character-of-mother-standing-design-vector-13874880.jpg"];
var names = ["Family Book","Jeje(Grandpa)","Jhunumaa(Grandma)" ,"Papa(Father)", "Sanvi Mohanty(Me)", "Mama(Mother)"];
var i = 0;
function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
 
 var updatedImage = images[i];

 var updatedName = names [i] ;

}
}
