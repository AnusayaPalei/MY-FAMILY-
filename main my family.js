var album=["https://comps.canstockphoto.com/i-love-my-family-illustration_csp27634623.jpg","Jeje.jpeg","Ma.jpeg","U Baba.jpeg","Bou.jpeg","Baba.jpeg","Mama.jpeg","Aunty.jpeg","Uncle.jpeg","Sai.jpeg","Shree.jpeg","Me.jpeg"];
var names=["My Family🥰","Grand Father","Grand Mother","Grandpa","Grandma","Papa","Mummy","Aunty","Uncle","Brother","Sister","Me"];
var i=0;
function next(){
document.getElementById("img1").src=album[i];
i++;
if(i==12){
i=0;
}
}