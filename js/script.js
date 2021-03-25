var app = new Vue(
  {
    el: "#app",
    data: {
      images: [
        {
          titolo: "lago",
          img: "img/lago.jpeg"
        },
        {
          titolo: "mare",
          img: "img/mare.jpeg"
        },
        {
          titolo: "montagna",
          img: "img/lago.jpeg"
        }
      ],
      position: 0
    },
    methods: {
      nextImage: function(){
        this.position++;

        if (this.position > this.images.length) {
          this.position = 0;
        }
      },
      prevImage: function(){
        this.position--;

        if (this.position < 0 ) {
          this.position = this.images.length - 1;
        }
      },
    }
  }
);
