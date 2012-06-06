<?php 
$var = $content_profile->get_variables('profile');
?>
<table>
<tr>
	<td valign="top" width="160px"> 
	<?php

		print '<img width="100" src="'.$var['field_profilepic'][0]['filepath'].'"/>';
     ?>	

	</td>
	<td valign="top" halign="left"> 

<!--<b><h1><?php print $var['field_fname'][0]['value'].' '.$var['field_lname'][0]['value']; ?></b></h1><br>
-->

<?php
$term = taxonomy_get_term($var['field_act'][0]['value']); 
?>

<?php print $var['field_role'][0]['value'].$term->name; ?><br><br>
<p><em><?php print $var['field_aboutme'][0]['value'];  ?></em></p>
<?php print $profile['content_profile'] ?> 
</td>
</tr>
</table>

<?php //print '<pre>'. check_plain(print_r($profile, 1)) .'</pre>'; ?> 
