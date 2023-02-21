  function toggleDiv(div_id,show_id,hide_id,x){
    if (x>1){
      $(div_id).show('blind');
      $(show_id).hide();
      $(hide_id).show();
    } 
    else {
      $(div_id).hide('blind');
      $(hide_id).hide();
      $(show_id).show();
    }
  };