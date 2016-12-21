function hover() {
  $('#gnodiv').mouseover(
    function() {
      $('#gcap').show();
    });
  $('#gnodiv').mouseout(
    function() {
      $('#gcap').hide();
    }
  );
  $('#micdiv').mouseover(
    function() {
      $('#bcap').show();
    });
  $('#micdiv').mouseout(
    function() {
      $('#bcap').hide();
    }
  );
  $('#suediv').mouseover(
    function() {
      $('#suecap').show();
    });
  $('#suediv').mouseout(
    function() {
      $('#suecap').hide();
    }
  );
  $('#stepdiv').mouseover(
    function() {
      $('#stcap').show();
    });
  $('#stepdiv').mouseout(
    function() {
      $('#stcap').hide();
    });

};

hover();
