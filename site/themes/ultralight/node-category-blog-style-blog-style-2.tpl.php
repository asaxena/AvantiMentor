<?php 
/**
 * $Id: node-category-blog-style-blog-style-2.tpl.php 3 2010-08-06 17:17:56Z jackncoke $
 */

?>
<div id="node-<?php print $node->nid; ?>" class="blog-style-2 <?php print $zebra; ?>">
	<div class="node-inner">



    <h2 class="title">
      <a href="<?php print $node_url; ?>" title="<?php print $title ?>"><?php print $title; ?></a>
    </h2>
    
	<div class="submitted"><?php print $submitted;?></div>
	


  <?php if ($unpublished): ?>
    <div class="unpublished"><?php print t('Unpublished'); ?></div>
  <?php endif; ?>

	
	<?php $blogimage = $node->field_blog_images[0]['filepath']; // CCK BLOG IMAGE FIELD YOU CAN CHANGE WHAT EVER YOU NEED
				$blogimage_alt = $node->field_blog_images[0][data]['alt']; // - IMAGE ALT
				$blogimage_title = $node->field_blog_images[0][data]['title']; // - IMAGE TITLE
	?>
	
	<div class="blog-style-2-image">
  <?php print theme('imagecache','px310',$blogimage,$blogimage_alt,$blogimage_title); // IMAGECACHE MODULE
  ?>
  </div>

  <div class="content">
    <?php print $content; ?>
  </div>


  <?php   print $links;   ?>
  <div style="clear:both;"></div>

</div></div> <!-- /node-inner, /node -->
