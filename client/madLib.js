import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './madLib.html';

Template.madLib.onCreated(function helloOnCreated() {
});

Template.madLib.helpers({
});

Template.madLib.events({
  'submit form'(event, instance) {
    event.preventDefault();
    let exclamation = event.target.exclaim1.value;
    let adverb = event.target.adverb1.value;
    let noun = event.target.noun1.value;
    let verb = event.target.verb1.value;

    let madLib = `"${exclamation}!" you say, as you ${adverb} jump onto your ` + 
      `${noun} and ${verb} into the sunset.`;

    console.log(madLib);
  }
});
