$(document).ready(function() {  

  function formValidation() {
    $('.send').prop('disabled', true); // disable 
    
    let isValid = {
      name: false,
      lastName: false,
      email: false,
      msg: false,
    };

    // print msg
    const msg = (_class, _field, _type) => {
      if(_type === 'valid'){
        $(_class).addClass('is-valid');
        $(_class).removeClass('is-invalid');
        $(`${_field} > .valid-feedback`).show();
        $(`${_field} > .invalid-feedback`).hide();
      }else{
        $(_class).addClass('is-invalid');
        $(_class).removeClass('is-valid');
        $(`${_field} > .invalid-feedback`).show();
        $(`${_field} > .valid-feedback`).hide();
      }
      return check(isValid);
    }  

    //  name and last name
    $('.form-name, .form-lastName').on('keypress', function() {
      if(!/[^a-zA-Z0-9]/.test($(this).val()) && $(this).val().length >= 4) {
        isValid.name = true;
        isValid.lastName = true;
        msg(this, '.name', 'valid');
      }else{
        msg(this, '.name', 'not-valid');
      }
    });

    $('.form-email').on('keypress', function() {
      const email = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      if(email.test($(this).val())){
        isValid.email = true;
        msg(this, '.form-email', 'valid');
      }else{
        msg(this, '.form-email', 'not-valid');
      }
    });

    $('.form-msg').on('keypress', function() {
      if($(this).val().length >= 10 && $(this).val().length <= 50){
        isValid.msg = true;
        msg(this, '.form-msg', 'valid');
      }else{
        msg(this, '.form-msg', 'not-valid');
      }
    });
    
    // checking if everything is valid
    const check = (_isValid) => {
      for(var o in _isValid)
          if(!_isValid[o]) return false;
      return $('.send').prop('disabled', false);
    }

  }
    const form = formValidation();
});