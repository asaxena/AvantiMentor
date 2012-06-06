<?php
// $Id: linkedin-user-page.tpl.php,v 1.1.2.1 2010/09/21 17:20:40 bellesmanieres Exp $

/**
 * @file
 * Template file for LinkedIn profile as displayed on user page
 * Copy it to your theme's folder if you want to override it.
 *
 * Be sure to check and comply to  http://developer.linkedin.com/docs/DOC-1091 before tweaking.
 */

//print 'linkedin-user-page.tpl.php';
//print '<pre>';
//print_r($profile);
//print '</pre>';
?>
<div class="linkedin-profile">

  <?php if ($profile['picture-url']) : ?>
    <a href="<?php print $profile['public-profile-url']['value']; ?>" <?php if ($profile['first-name']['value'] || $profile['last-name']['value']) : ?> title="Public profile of <?php print $profile['first-name']['value'] . ' ' . $profile['last-name']['value']; ?> on www.linkedin.com."<?php endif; ?> >
        <img src="<?php print $profile['picture-url']['value']; ?>" alt="<?php print $profile['first-name']['value'] . ' ' . $profile['last-name']['value']; ?>" />
      </a>
  <?php endif; ?>

  <?php if ($profile['first-name']['value'] || $profile['last-name']['value']) : ?>
        <a href="<?php print $profile['public-profile-url']['value']; ?>" title="Public profile of <?php print $profile['first-name']['value'] . ' ' . $profile['last-name']['value']; ?> on www.linkedin.com.">
          <h2 class="linkedin-name"><?php print $profile['first-name']['value'] . ' ' . $profile['last-name']['value']; ?></h2>
        </a>
  <?php endif; ?>

        <ul>
    <?php foreach ($profile as $key => $value) : ?>
    <?php if ($value && !in_array($key, array ('picture-url', 'first-name', 'last-name'))) : ?>
            <li class="linkedin-<?php print $key; ?>"><?php print $value['name']; ?> : <?php print $value['value']; ?>
      <?php endif; ?>
      <?php endforeach; ?>
  </ul>

</div>

