
$.ajax({
  url: '',
  method: 'GET',
  headers: {'Authorization': 'token ' + DATABASE_TOKEN },
  success: function(data, string, xhr){
    console.log(data);
  }
});
