$.fn.CleanerGrid = function() {
	var remainingPercent = 0;
  return this.each(function() {
    var numRows = $(this).children().length;
		var numWidthRows = 0;
		var totalPercent = 0;
		var totalWidth = $(this).width();
		var classes, percent, pixels;
		$(this).children().each(function(){ 
			if($(this).attr('class')){
				classes = $(this).attr('class').split(" ");
				for(var i = 0; i < classes.length; i++){
					if(/^pc-/.test(classes[i])){
						percent = parseFloat(("."+classes[i].replace("pc-", ""))*100).toFixed(5);
						numWidthRows++;
						$(this).css({"width":percent+"%"});
					} else if(/^px-/.test(classes[i])){
						pixels = classes[i].replace("px-", "");
						percent = (pixels/totalWidth)*100;
						numWidthRows++;
						$(this).css({"width":pixels+"px"});
					} else {
						percent = 0;	
					}
					totalPercent = (parseFloat(totalPercent) + parseFloat(percent));
				}
			}
		});
		remainingPercent = (100-totalPercent)/(numRows-numWidthRows);
		$(this).children().each(function(){
			var styles = $(this).attr('style');
			var hasWidth = false;
			if(!styles){
				$(this).css({"width":remainingPercent+"%"});	
			} else {
				styles = styles.split(";");
				for(var i = 0; i < styles.length-1; i++){
					var style = styles[i].split(":")[0].trim();
					if(style === "width"){
						hasWidth = true;	
						i = styles.length+1;
					} else {
						hasWidth = false;
					}
				}
				if(hasWidth === false){
					$(this).css({"width":remainingPercent+"%"});	
				}
			}
		});
  });
};