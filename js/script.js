var app = new Vue(
  {
    el: "#app",
    data: {
      images: [
        {
          titolo: "archivio",
          img: "img/archivio.jpeg"
        },
        {
          titolo: "book",
          img: "img/book.png"
        },
        {
          titolo: "editorial",
          img: "img/polo.png"
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
