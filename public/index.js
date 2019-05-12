new Vue({
  el: '#quiz-app',

  data() {
    return {
      questions: []
    };
  },

  mount() {
    fetch('http://localhost:4000/api/test').then(response => {
      response.json().then(data => {
        this.questions = data;
      });
    });
  }
});
