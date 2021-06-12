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
      timer: 0
    },
    methods: {
      nextImage: function(){
        this.position++;

        if (this.position == this.images.length) {
          this.position = 0;
          this.resetPlay();
        }
      },
      prevImage: function(){
        this.position--;

        if (this.position < 0 ) {
          this.position = this.images.length - 1;
          this.resetPlay();
        }
      },
      selectSlide: function(i) {
        this.position = i;
        this.resetPlay();
      },
      resetPlay: function() {
        clearInterval(this.timer);
        this.play();
      },
      play: function() {
        let app = this;
        this.timer = setInterval(function() {
          app.nextImage();
        }, 2000);
      },
      created: function() {
        this.play();
      }
    }
  }
);
