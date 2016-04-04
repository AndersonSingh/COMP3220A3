$(document).ready(function() {
  $("#aggregatesView").hide();
  $("#fibremeshView").hide();
  $("#flowableView").hide();
  $("#preMixedShowHide").click(function(){
      $("#aggregatesView").hide();
      $("#fibremeshView").hide();
      $("#flowableView").hide();
  });

  $("#aggregatesShowHide").click(function(){
      $("#preMixedView").hide();
      $("#fibremeshView").hide();
      $("#flowableView").hide();
  });

  $("#fibremeshShowHide").click(function(){
      $("#preMixedView").hide();
      $("#flowableView").hide();
      $("#aggregatesView").hide();
  });

  $("#flowableShowHide").click(function(){
      $("#preMixedView").hide();
      $("#aggregatesView").hide();
      $("#fibremeshView").hide();
  });
});
