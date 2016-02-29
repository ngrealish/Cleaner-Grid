$.fn.CleanerGrid = function() {
		var remainingPercent = 0;
    return this.each(function() {
        var numRows = $(this).children().length;
				var numWidthRows = 0;
				var totalPercent = 0;
				var classes, percent, pixels, totalWidth, child;
				$(this).children().each(function(){ 	
					child = $(this);			//Each Column
					classes = $(this).attr('class').split(" ");		//If the column has 'pc' make that column the right width
					for(var i = 0; i < classes.length; i++){
						if(/^pc-/.test(classes[i])){
							percent = parseFloat(("."+classes[i].replace("pc-", ""))*100).toFixed(5);
							numWidthRows++;
						} else if(/^px-/.test(classes[i])){
							pixels = classes[i].replace("px-", "");
							totalWidth = $(this).closest('.grid-row').width();
							percent = parseFloat((pixels/totalWidth)*100).toFixed(5);
							numWidthRows++;
						} else {
							percent = 0;	
						}
						totalPercent = (parseFloat(totalPercent) + parseFloat(percent));
					}
					$(this).css({"width":percent+"%"});
					if(!percent) {
						$(this).addClass("noWidth");	
					}
				});
				remainingPercent = (100-totalPercent)/(numRows - numWidthRows);
				$(this).find('.noWidth').each(function(){
					$(this).css({"width":remainingPercent+"%"});
					$(this).removeClass('noWidth');
				});
    });
};