<?php 
/**
 * $Id: node.tpl.php 3 2010-08-06 17:17:56Z jackncoke $
 */
?>

<div id="node-<?php print $node->nid; ?>" class="node-class <?php print $classes; ?>"><div class="node-inner">

  <?php print $picture; ?>

  <?php if (!$page): ?>
    <h2 class="title">
      <a href="<?php print $node_url; ?>" title="<?php print $title ?>"><?php print $title; ?></a>
    </h2>
  <?php endif; ?>

  <?php if ($unpublished): ?>
    <div class="unpublished"><?php print t('Unpublished'); ?></div>
  <?php endif; ?>

  <?php if ($submitted || $terms): ?>
    <div class="meta">
      <?php if ($submitted): ?>
        <div class="submitted">
          <?php print $submitted; ?>
        </div>
      <?php endif; ?>

      <?php if ($terms): ?>
        <div class="terms terms-inline"><?php print t(' in ') . $terms; ?></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>

  <div class="content">
    <?php print $content; ?>
  </div>

  <?php print $links; ?>

</div></div> <!-- /node-inner, /node -->
