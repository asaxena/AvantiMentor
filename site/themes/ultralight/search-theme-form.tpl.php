<?php 
/**
 * $Id: search-theme-form.tpl.php 3 2010-08-06 17:17:56Z jackncoke $
 */

?>

<div id="search">
	<?php 
	  $search['search_theme_form'] = preg_replace('/<label(.*)>(.*)<\/label>\n/i', '', $search['search_theme_form']);
	  print $search['search_theme_form'];
	  print $search['submit'];
	  print $search['hidden'];
	?>
</div>