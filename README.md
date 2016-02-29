<h1># Cleaner-Grid</h1>
A javascript grid system allowing for any size column inside of any size column.

Use:

link Cleaner Grid:
  <script type="text/javascript" src="/path/to/cleaner-grid.js"></script>
  
On Document Ready, initiate Cleaner Grid on any row containing columns:
  $(function(){
    $('.your-row').CleanerGrid();
  });
  
Without specifying any widths on the columns, Cleaner Grid will divide the number of columns by 100 to get an even percent among all columns.

If you'd like to have a column have a specific width, add a percent class or pixel class:
For Percent, use: "pc-##"
For Pixels, use: "px-##"

Example:
<div class="your-col pc-50">...</div> <!--This will yield a column with 50% width in the row-->
<div class="your-col px-75">...</div> <!--This will yield a column that is 75px in the row -->
