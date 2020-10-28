const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    // add() {
    //   this.counter = this.counter + 1;
    // },
    // reduce() {
    //   this.counter = this.counter - 1;
    // }

    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },

  }
});

app.mount('#events');
