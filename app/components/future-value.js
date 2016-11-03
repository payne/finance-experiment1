import Ember from 'ember';
// http://www.jimmylauzau.com/blog/2016/03/22/importing-node-modules-in-ember-js
import Finance from 'npm:financejs'
export default Ember.Component.extend({
  rate:0,
  cashFlow:1,
  numberOfPeriods:1,
  fv: Ember.computed(function() {
    // Question!  Why does this not update when the others do?
    var finance = new Finance(); // how to put this in a constructor?
    let rate = this.get('rate');
    let cashFlow = this.get('cashFlow');
    let numberOfPeriods = this.get('numberOfPeriods');
    return finance.FV(rate, cashFlow, numberOfPeriods);
  })
});
