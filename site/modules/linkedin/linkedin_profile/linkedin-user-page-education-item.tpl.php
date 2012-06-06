<?php
// $Id: linkedin-user-page-education-item.tpl.php,v 1.1.2.1 2010/09/21 17:20:40 bellesmanieres Exp $

/**
 * @file
 * Template file for LinkedIn "Education" item as displayed on user page
 * Copy it to your theme's folder if you want to override it.
 *
 * Be sure to check and comply to  http://developer.linkedin.com/docs/DOC-1091 before tweaking.
 */
//print 'linkedin-user-page-education-item.tpl.php';
//print '<pre>';
//print_r($education);
//print '</pre>';
?>
<div class="linkedin-education">

  <p>
    <?php print $education['degree'] ?>
    <?php if ($education['field-of-study']) : ?>
      <?php print t('in') . ' ' . $education['field-of-study']; ?>
    <?php endif; ?>
    <?php if ($education['school-name']) : ?>
      <?php print t('at') . ' ' . $education['school-name']; ?>
    <?php endif; ?>
    <?php if($education['start-date']['year'] || $education['end-date']['year']) : ?>
      <span class="linkedin-education-years">
      <?php print ' ('; ?>
      <?php print $education['start-date']['year']; ?>
        <?php if($education['start-date']['year'] && $education['end-date']['year']) : ?>
          <?php print '-'; ?>
        <?php endif; ?>
      <?php print $education['end-date']['year']; ?>
      <?php print ')'; ?>
      </span>
    <?php endif; ?>
  </p>

  <div class="linkedin-education-notes">
    <?php print $education['notes']; ?>
  </div>

  <div class="linkedin-education-activities">
    <?php print $education['activities']; ?>
  </div>

</div>

