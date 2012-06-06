<?php
// $Id: views-view-fields.tpl.php,v 1.6 2008/09/24 22:48:21 merlinofchaos Exp $
/**
 * @file views-view-fields.tpl.php
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->separator: an optional separator that may appear before a field.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>

<?php

//dsm(array_keys($fields));

?>

<div>
	<div style="width:200px; display:inline-block; vertical-align:top;">
		<?php print $fields['picture']->content; ?>
	</div>
	<div style="display:inline-block;">
		<table style="width:100%;" cellpadding="0" cellspacing="0">
			<tr>
    <td>father name</td>
    <td><?php print $fields['field_father_name_value']->content; ?></td>
  </tr>
  <tr>
    <td>mother name</td>
    <td><?php print $fields['field_mother_name_value']->content; ?></td>
  </tr>
  <tr>
    <td>guardian name</td>
    <td><?php print $fields['field_guardian_name_value']->content; ?></td>
  </tr>
  <tr>
    <td>annual income</td>
    <td><?php print $fields['field_annual_income_value']->content; ?></td>
  </tr>
  <tr>
    <td>category</td>
    <td><?php print $fields['field_category_value']->content; ?></td>
  </tr>
  <tr>
    <td>date</td>
    <td><?php print $fields['field_date_value']->content; ?></td>
  </tr>
  <tr>
    <td>class year</td>
    <td><?php print $fields['field_class_year_value']->content; ?></td>
  </tr>
  <tr>
    <td>school college</td>
    <td><?php print $fields['field_school_college_value']->content; ?></td>
  </tr>
  <tr>
    <td>hometown</td>
    <td><?php print $fields['field_hometown_value']->content; ?></td>
  </tr>
  <tr>
    <td>currently living</td>
    <td><?php print $fields['field_currently_living_value']->content; ?></td>
  </tr>
  <tr>
    <td>school name</td>
    <td><?php print $fields['field_school_name_value']->content; ?></td>
  </tr>
  <tr>
    <td>address</td>
    <td><?php print $fields['field_address_value']->content; ?></td>
  </tr>
  <tr>
    <td>school name 1</td>
    <td><?php print $fields['field_school_name_value_1']->content; ?></td>
  </tr>
  <tr>
    <td>mark</td>
    <td><?php print $fields['field_mark_value']->content; ?></td>
  </tr>
  <tr>
    <td>city</td>
    <td><?php print $fields['field_city_value']->content; ?></td>
  </tr>
  <tr>
    <td>phone number</td>
    <td><?php print $fields['field_phone_number_value']->content; ?></td>
  </tr>
  <tr>
    <td>schools studied</td>
    <td><?php print $fields['field_schools_studied_value']->content; ?></td>
  </tr>
  <tr>
    <td>stream</td>
    <td><?php print $fields['field_stream_value']->content; ?></td>
  </tr>
  <tr>
    <td>languages known</td>
    <td><?php print $fields['field_languages_known_value']->content; ?></td>
  </tr>
  <tr>
    <td>passing year</td>
    <td><?php print $fields['field_passing_year_value']->content; ?></td>
  </tr>
  <tr>
    <td>board</td>
    <td><?php print $fields['field_board_value']->content; ?></td>
  </tr>
  <tr>
    <td>favourite subject</td>
    <td><?php print $fields['field_favourite_subject_value']->content; ?></td>
  </tr>
  <tr>
    <td>intoduction</td>
    <td><?php print $fields['field_intoduction_value']->content; ?></td>
  </tr>
  <tr>
    <td>distinctions</td>
    <td><?php print $fields['field_distinctions_value']->content; ?></td>
  </tr>
  <tr>
    <td>ambition</td>
    <td><?php print $fields['field_ambition_value']->content; ?></td>
  </tr>
  <tr>
    <td>hobbies</td>
    <td><?php print $fields['field_hobbies_value']->content; ?></td>
  </tr>
  <tr>
    <td>company</td>
    <td><?php print $fields['field_company_value']->content; ?></td>
  </tr>
  <tr>
    <td>duration</td>
    <td><?php print $fields['field_duration_value']->content; ?></td>
  </tr>
  <tr>
    <td>year</td>
    <td><?php print $fields['field_year_value']->content; ?></td>
  </tr>
  <tr>
    <td>position</td>
    <td><?php print $fields['field_position_value']->content; ?></td>
  </tr>
  <tr>
    <td>key responsibility</td>
    <td><?php print $fields['field_key_responsibility_value']->content; ?></td>
  </tr>
  <tr>
    <td>work done</td>
    <td><?php print $fields['field_work_done_value']->content; ?></td>
  </tr>
  <tr>
    <td>work experience company</td>
    <td><?php print $fields['field_work_experience_company_value']->content; ?></td>
  </tr>
  <tr>
    <td>work experience duration</td>
    <td><?php print $fields['field_work_experience_duration_value']->content; ?></td>
  </tr>
  <tr>
    <td>work experience year</td>
    <td><?php print $fields['field_work_experience_year_value']->content; ?></td>
  </tr>
  <tr>
    <td>work experience position</td>
    <td><?php print $fields['field_work_experience_position_value']->content; ?></td>
  </tr>
  <tr>
    <td>work experience workdone</td>
    <td><?php print $fields['field_work_experience_workdone_value']->content; ?></td>
  </tr>
  <tr>
    <td>work key responsibility</td>
    <td><?php print $fields['field_work_key_responsibility_value']->content; ?></td>
  </tr>
  <tr>
    <td>exam name</td>
    <td><?php print $fields['field_exam_name_value']->content; ?></td>
  </tr>
  <tr>
    <td>fellow year</td>
    <td><?php print $fields['field_fellow_year_value']->content; ?></td>
  </tr>
  <tr>
    <td>test marks</td>
    <td><?php print $fields['field_test_marks_value']->content; ?></td>
  </tr>
  <tr>
    <td>fellow impression</td>
    <td><?php print $fields['field_fellow_impression_value']->content; ?></td>
  </tr>
  <tr>
    <td>select mentor</td>
    <td><?php print $fields['field_select_mentor_value']->content; ?></td>
  </tr>
  <tr>
    <td>selection date</td>
    <td><?php print $fields['field_selection_date_value']->content; ?></td>
  </tr>
  <tr>
    <td>selection city</td>
    <td><?php print $fields['field_selection_city_value']->content; ?></td>
  </tr>
  <tr>
    <td>selection location</td>
    <td><?php print $fields['field_selection_location_value']->content; ?></td>
  </tr>
  	</table>
	</div>
</div>
