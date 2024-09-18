let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  // shows the current step
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
