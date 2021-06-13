var app = new Vue(
  {
    el: "#app",
    data: {
      images: [
        {
          titolo: "microscopio",
          img: "img/bio1.jpg"
        },
        {
          titolo: "book",
          img: "img/book.png"
        },
        {
          titolo: "editorial",
          img: "img/polo.png"
        },
        {
          titolo: "microscopio",
          img: "img/bio2.jpg"
        },
        {
          titolo: "microscopio",
          img: "img/bio3.jpg"
        },
        {
          titolo: 'commedesgarcon',
          img: "img/katemoss.jpeg"
        },
        {
          titolo: "microscopio",
          img: "img/bio4.jpg"
        }
      ],
      position: 0,
      autoplay: 0
    },
    mounted: function(){
      this.autoplay = setInterval(this.nextImage, 2000)
    },
    methods: {
      nextImage: function(){
        this.position++;

        if (this.position >= this.images.length) {
          this.position = 0;
        }
      },
      prevImage: function(){
        this.position--;

        if (this.position < 0 ) {
          this.position = this.images.length - 1;
        }
      },
      resetAutoplay: function(){
        clearInterval(this.autoplay);
      },
      clickNextImage: function(){
        this.nextImage();
        clearInterval(this.autoplay);
      },
      clickPrevImage: function(){
        this.prevImage();
        clearInterval(this.autoplay);
      },
      selectImage: function(i) {
        this.position = i;
        clearInterval(this.autoplay);
      },
    }
  }
);
