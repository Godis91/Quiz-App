new Vue({
  el: '#quiz-app',

  data() {
    return {
      questions: []
    };
  },

  mount() {
    fetch('/api/test').then(response => {
      response.json().then(data => {
        this.questions = data;
      });
    });
  }
});
