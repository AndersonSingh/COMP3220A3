$(document).ready(function() {
  $("#consultancyView").hide();
  $("#clientServicesView").hide();
  $("#marketingSalesView").hide();
  $("#technicalServicesShowHide").click(function(){
      $("#consultancyView").hide();
      $("#clientServicesView").hide();
      $("#marketingSalesView").hide();
  });

  $("#consultancyShowHide").click(function(){
      $("#technicalServicesView").hide();
      $("#clientServicesView").hide();
      $("#marketingSalesView").hide();
  });

  $("#clientServicesShowHide").click(function(){
      $("#technicalServicesView").hide();
      $("#consultancyView").hide();
      $("#marketingSalesView").hide();
  });

  $("#marketingSalesShowHide").click(function(){
      $("#technicalServicesView").hide();
      $("#consultancyView").hide();
      $("#clientServicesView").hide();
  });
});
