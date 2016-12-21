function hover() {
  $('#gpic').mouseover(
    function() {
      $('#gcap').show();
    });
  $('#gpic').mouseout(
    function() {
      $('#gcap').hide();
    }
  );
  $('#sue').mouseover(
    function() {
      $('#sucap').show();
    });
  $('#sue').mouseout(
    function() {
      $('#sucap').hide();
    }
  );
  $('#step').mouseover(
    function() {
      $('#stcap').show();
    });
  $('#step').mouseout(
    function() {
      $('#stcap').hide();
    }
  );
  $('#bearcat').mouseover(
    function() {
      $('#bcap').show();
    });
  $('#bearcat').mouseout(
    function() {
      $('#bcap').hide();
    });

};

hover();
