const base = "https://github.com/Scheyot2/media/raw/main/packs/";

module.exports = {
  sortSticker(endpoint, qt) {
    var n = Math.floor(Math.random() * qt) + 1;
    return `${base}${endpoint}/${n}.webp`;
  },
  anime() {
    return this.sortSticker("anime", 177);
  },
  coreana() {
    return this.sortSticker("coreana", 43);
  },
  desenho() {
    return this.sortSticker("desenho", 186);
  },
  emoji() {
    return this.sortSticker("emoji", 102);
  },
  engracadas() {
    return this.sortSticker("engracadas", 25);
  },
  meme() {
    return this.sortSticker("meme", 130);
  },
  raiva() {
    return this.sortSticker("raiva", 29);
  },
  roblox() {
    return this.sortSticker("roblox", 21);
  },
};
