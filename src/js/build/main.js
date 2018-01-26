(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

  function formValidation() {
    $('.send').prop('disabled', true); // disable 

    var isValid = {
      name: false,
      lastName: false,
      email: false,
      msg: false
    };

    // print msg
    var msg = function msg(_class, _field, _type) {
      if (_type === 'valid') {
        $(_class).addClass('is-valid');
        $(_class).removeClass('is-invalid');
        $(_field + ' > .valid-feedback').show();
        $(_field + ' > .invalid-feedback').hide();
      } else {
        $(_class).addClass('is-invalid');
        $(_class).removeClass('is-valid');
        $(_field + ' > .invalid-feedback').show();
        $(_field + ' > .valid-feedback').hide();
      }
      return check(isValid);
    };

    //  name and last name
    $('.form-name, .form-lastName').on('keypress', function () {
      if (!/[^a-zA-Z0-9]/.test($(this).val()) && $(this).val().length >= 4) {
        isValid.name = true;
        isValid.lastName = true;
        msg(this, '.name', 'valid');
      } else {
        msg(this, '.name', 'not-valid');
      }
    });

    $('.form-email').on('keypress', function () {
      var email = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      if (email.test($(this).val())) {
        isValid.email = true;
        msg(this, '.form-email', 'valid');
      } else {
        msg(this, '.form-email', 'not-valid');
      }
    });

    $('.form-msg').on('keypress', function () {
      if ($(this).val().length >= 10 && $(this).val().length <= 50) {
        isValid.msg = true;
        msg(this, '.form-msg', 'valid');
      } else {
        msg(this, '.form-msg', 'not-valid');
      }
    });

    // checking if everything is valid
    var check = function check(_isValid) {
      for (var o in _isValid) {
        if (!_isValid[o]) return false;
      }return $('.send').prop('disabled', false);
    };
  }
  var form = formValidation();
});

},{}]},{},[1]);
