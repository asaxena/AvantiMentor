<?php
// $Id: linkedin-user-page-positions.tpl.php,v 1.1.2.1 2010/09/21 17:20:40 bellesmanieres Exp $

/**
 * @file
 * Template file for LinkedIn "Positions" items as displayed on user page
 * Copy it to your theme's folder if you want to override it.
 *
 * Be sure to check and comply to  http://developer.linkedin.com/docs/DOC-1091 before tweaking.
 */
//print 'linkedin-user-page-positions.tpl.php';
//print '<pre>';
//print_r($positions);
//print '</pre>';
?>
<div class="linkedin-positions">
  <ul>
<?php foreach ($positions as $position) : ?>
      <li><?php print $position; ?></li>
<?php endforeach; ?>
  </ul>
</div>

