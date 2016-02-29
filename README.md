# Cleaner-Grid
### A jquery grid system which replaces traditional css classes

_Usage_

First, Download and Link Cleaner Grid into your project under jQuery
```HTML
<script type="text/javascript" src="path/to/jquery-#.#.#.js"></script>
<script type="text/javascript" src="path/to/cleaner-grid.js"></script>
```
On Document Ready, initiate Cleaner Grid on any row containing columns:
```javascript  
$(function(){
  $('.your-row').CleanerGrid();
});
```

Make sure your columns are floated.  It has been left out of the javascript for responsive solutions.  In the responsive world, sometimes you will want to float something to the right on a desktop view because you want it to be above other elements in a mobile view.  **Make sure you float your columns properly.** If you do not need to worry about specific floats, just add float:left to your columns.  Also to get all columns to be the same height, use `display:flex;` on the desired row.

```css
.your-row {
  display:flex;
}
.your-row > * {
  float:left;
}
```

Specify widths on containers (columns) in your row **_(optional)_**

> Without specifying any widths on the columns, Cleaner Grid will divide the number of columns by 100 to get an even percent among all columns.

If you'd like to have a column have a specific width, add a percent class or pixel class:

For Percent, use: "**pc-##**" 

> When using Percents, the number you use will always have a decimal place in the second position.  This renders `pc-100` as `10.0%`.  the maximum percentage you can use is `99.999~%`.  If you want the column to be 100%, do not specify a width and only allow a single column.  Another example is if you'd like `33.333%`, you would use `pc-33333`.  

For Pixels, use: "**px-##**"

Example:
```HTML
<div class="grid-row invoice-lower">
  <div class="col">#</div>
  <div class="col pc-80">This column will be 80% of the row's width</div>
  <div class="col px-50">This column will be a static 50px at all times</div>
  <div class="col">#</div>
  <div class="col pc-10">This column will be 10% of the row's width</div>
  <div class="col">#</div>
</div>
<!-- All columns with the # sign in them will be the same width.  In this case, each of those columns will be 1.52174% assuming the grid-row is 920px wide.  
  80% + 10% = 90%
  50px = 5.4347%
  90% + 5.4347 = 95.4347%
  100% - 95.4347% = 4.5653%
  4.5653% / 3 (number of columns that do not have percentages) = 1.52174% --> 
```

**You must make sure that you do not go over 100%.** Strange things will happen to your placement.  You can use this inside of a row, inside of a column, inside of a column's column, etc. 

Note: Possibly a pure Javascript version coming.  Not sure how much traction this will gain.

Note: Possible responsive version, allowing for breakpoints coming.
