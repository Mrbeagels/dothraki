var verbs, nouns, adjectives, adverbs, preposition,ponctuation, maj;
nouns = ["yer", "jalan", "atthirari", "anni", "shekh", "ma", "shieraki", "ase", "shafki ", "athdrivar","adakha","jin","zhoris","Ifas","maisi","yerit","Khal","Khaleesi","Hajas","M’athchomaroon","San "];
verbs = ["sek", "k’athjilari ", "vos", "vosecchi", "med", "nem", "nesa", "hash ", "yer ", "dothrae","athchomari","yeraan","asshekhqoyi ","hrakkarikh","vikeesi","chek","Vezhof","gech","Choyo","vitteya","es"];
adjectives = ["chek", "asshekh", "anha", "dothrak ", "chek ", "asshekh", "che ", "dothras ", "drivos", "athchomar","vezhvena","shieraki","gori","ha","yeraan","Ezas","eshna","gech","ahilee","vezhof","hrazef"];
adverbs = ["chomakea", "zhavorsa", "es", "havazhaan", "ki", "fin", "yeni", "shor", "tawakof", "armor","Ifak","Yer","chomoe","anna","Yer","zheanae","sekke","vazhak","yeraan","thirat","Hash","asti"];
preposition = ["vitteya", "fichas ", "jahakes ", "moon", "yer ", "anna ", "zisosh ", "disse", "acroz", "laz ","k’athijilari","atihak","yera","save","Varanno","vod ","chafaan","addrivat","choyo","chomak","vichomerak","vikeesi"];
ponctuation =["!","?",",",".",";",":","'"];
maj = ["Annithat","Arakh","Ath-davrazar","Caf","Chak","Chomokh","Chongolat ","Daeni","Davralat","Dech","Devesh", "Dirge","Diwelat","Dothrae","Dozgosor","Drane","Dranekh","Driv","Drivat","Charat","Awazar","Azho ","Ath-jilar","Ath-chom-ar chomakea","Assamvat","Ahhaqa","Affisae",]
// function randGen() {
//   return Math.floor(Math.random() * 6);
// }

function sentence() {
  var rand1 = Math.floor(Math.random()* 21);
  var rand2 = Math.floor(Math.random() * 21);
  var rand3 = Math.floor(Math.random() * 21);
  var rand4 = Math.floor(Math.random() * 21);
  var rand5 = Math.floor(Math.random() * 21);
  var rand6 = Math.floor(Math.random() * 21);
  var rand7 = Math.floor(Math.random() * 21);
  var rand8 = Math.floor(Math.random() * 21);
  var rand9 = Math.floor(Math.random() * 21);
  var rand10 = Math.floor(Math.random() * 7);
  var rand11 = Math.floor(Math.random() * 27);

  var content = maj[rand11] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + ponctuation[rand6] + " " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " " + adjectives[rand2] + " " + nouns[rand5] + " " + adjectives[rand3] + " " + adjectives[rand4] + " " + nouns[rand6] + "." + " " +adjectives[rand5] + " " + nouns[rand4] + " " + adverbs[rand6] + " " + verbs[rand3] + " " + nouns[rand2] + " " + adverbs[rand6] + " " + verbs[rand2] + " " + preposition[rand8] +"."+"<br> <br> "+ maj[rand1] + " " + nouns[rand5] + " " + adverbs[rand4] + " " + verbs[rand3] +ponctuation[rand10] + " " + nouns[rand3] + " " + adverbs[rand2] + " " + verbs[rand6] + " " + preposition[rand5] + " " + adjectives[rand4] + " " + nouns[rand7] + " " + adjectives[rand2] + " " + adjectives[rand1] + " " + nouns[rand1] + "." + " " +adjectives[rand3] + " " + nouns[rand1] + " " + adverbs[rand2] + " " + verbs[rand3] + " " + nouns[rand8] + " " + adverbs[rand5] + " " + verbs[rand6] + " " + preposition[rand3] + "" + adjectives[rand2] + " " + nouns[rand3] + " " + adverbs[rand5] + " " + verbs[rand1] +ponctuation[rand10] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " " + preposition[rand5] + " " + adjectives[rand6] + " " + nouns[rand1] + " " + adjectives[rand7] + " " + adjectives[rand3] + " " + nouns[rand4] + "." + " " +adjectives[rand10] + " " + nouns[rand9] + " " + adverbs[rand1] + " " + verbs[rand2] + " " + nouns[rand3] + " " + adverbs[rand4] + " " + verbs[rand5] + " " + preposition[rand6]+" "+ adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand2] + " " + verbs[rand4] +ponctuation[rand10] + " " + nouns[rand6] + " " + adverbs[rand1] + " " + verbs[rand2] + " " + preposition[rand3] + " " + adjectives[rand4] + " " + nouns[rand5] + " " + adjectives[rand10] + " " + adjectives[rand9] + " " + nouns[rand2] + "." + "<br> <br> " +maj[rand2] + " " + nouns[rand3] + " " + adverbs[rand10] + " " + verbs[rand6] + " " + nouns[rand1] + " " + adverbs[rand6] + " " + verbs[rand5] + " " + preposition[rand7] + "." + " "+
  maj[rand11] + " " + adverbs[rand5] + " " + verbs[rand6] + adjectives[rand10] + " " + nouns[rand1] + " " + adverbs[rand7] + " " + verbs[rand4] + ponctuation[rand10] + " " + nouns[rand6] + " " + adverbs[rand1] + " " + verbs[rand2] + " " + preposition[rand3] + " " +adjectives[rand5] + " " + nouns[rand6] + " " + adjectives[rand7] + " " + nouns[rand3]+" "+ adverbs[rand2] + " " + verbs[rand6] + " " +adjectives[rand1] + " " + nouns[rand2] + " " + nouns[rand1] + " " + adverbs[rand6] + " " +adjectives[rand7] + " " + nouns[rand4] + " "+ verbs[rand5] + " " + preposition[rand7] + ".";
  

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
  
};
sentence();

const copyButton = document.getElementById('btn-copy');
copyButton.addEventListener('click', (event)=> {
  const content = document.getElementById('sentence').textContent;
  navigator.clipboard.writeText(content);
})
