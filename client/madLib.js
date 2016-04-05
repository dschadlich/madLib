import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './madLib.html';

Template.madLib.onCreated(function helloOnCreated() {
});

Template.madLib.helpers({

});

Template.madLib.events({
  'click #submit-button'(event, instance) {
    event.preventDefault();
    console.log ("Hello World!");
  }
});
