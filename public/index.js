new Vue({
  el: '#quiz-app',

  data() {
    return {
      questions: []
    };
  },

  mount() {
    fetch('git push heroku master/api/test').then(response => {
      response.json().then(data => {
        this.questions = data;
      });
    });
  }
});
