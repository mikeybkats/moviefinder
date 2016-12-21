$('.team').hide();

function aboutus() {
  $('#abouth1').click(function() {
    $('.team').show();
    $('#abouth1').hide();
  });

}
// ^^^^^^^the code above is not needed, just trying something out


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
aboutus();
hover();
