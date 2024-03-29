<?php

// $Id: linkedin_profile.pages.inc,v 1.1.2.2 2010/12/20 19:59:48 bellesmanieres Exp $ 
/*
 * @file Pages callbacks and form builder functions for Linkedin Profile module.
 */

/*
 * Implementation of hook_linkedin_admin_page()
 * Add our settings to the main Linkedin settings page.
 */

function linkedin_profile_linkedin_admin_page() {
  $form = array();

  //User profile settings
  $form['linkedin_profile'] = array(
    '#description' => t('Let users display informations from their LinkedIn profile.'),
    '#title' => t('User profile integration'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['linkedin_profile']['user_page'] = array(
    '#description' => t('Enable users to display their LinkedIn profile page on their local user page.'),
    '#title' => t('User page'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['linkedin_profile']['user_page']['linkedin_profile_user_page_enabled'] = array(
    '#type' => 'select',
    '#title' => 'Profile display',
    '#options' => array(
      '0' => t('Disabled'),
      '1' => t('Tab'),
      '2' => t('User page'),
      '3' => t('Block'),
      '4' => t('Hidden'),
    ),
    '#default_value' => variable_get('linkedin_profile_user_page_enabled', '0'),
    '#description' =>
    '<ul><li>' .
    t("Tab : will create a new tab containing the profile on the user's page") . '</li><li>' .
    t("User page : will display the profile amongst other elements on the user's page") . '</li><li>' .
    t("Block : will create a block containg the profile. Note you still have to activate it on the Blocks' admin page") . '</li><li>' .
    t('Hidden : Will not output anything, but make the data available as an array under $user->linkedin for theming') .
    '</li></ul>'
  );

  $form['linkedin_profile']['user_page']['linkedin_profile_user_page_weight'] = array(
    '#type' => 'textfield',
    '#title' => t('Profile item weight'),
    '#maxlength' => 4,
    '#size' => 2,
    '#description' => t('"User Page" display only. Changing this value will make the profile display move below or after other elements on the user page. E.g. setting this to 100 will make it the very last element.'),
    '#default_value' => variable_get('linkedin_profile_user_page_weight', 2),
  );

  $form['linkedin_profile']['user_page']['linkedin_profile_user_page_fields'] = array(
    '#type' => 'fieldset',
    '#title' => t('LInkedIn fields'),
    '#description' => t('Choose what fields to retrieve from a user LinkedIn profile.'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['linkedin_profile']['user_page']['linkedin_profile_user_page_fields']['warning'] = array(
    '#type' => 'markup',
    '#value' =>
    '<ul>' .
    '<li>' . t('Be sure to take aknowledgement of what you are allowed to do with that data by checking the "Business and Legal" documents at http://developer.linkedin.com/community/apis?view=documents') . '</li>' .
    '<li>' . t('Description of each field is available at http://developer.linkedin.com/docs/DOC-1061.') . '</li>' .
    '<li>' . t('Also, please note that the visibility of each field depends on the relation between the viewing and the viewed user at Linkedin and his visibilty settings : be careful when theming the output.') . '<li>' .
    '<li>' . t('And last, output might be buggy for some of them, and will probably need some theming work.') . '<li>' .
    '</ul>',
  );
  $fields = _linkedin_list_fields('auth');
  $options = array();
  foreach ($fields as $field) {
    $options[$field] = $field;
  }
  $form['linkedin_profile']['user_page']['linkedin_profile_user_page_fields']['linkedin_profile_user_page_linkedin_fields'] = array(
    '#type' => 'checkboxes',
    '#default_value' => _linkedin_profile_vget_user_page_linkedin_fields(),
    '#options' => $options,
  );

  $form['#submit'][] = 'linkedin_profile_admin_submit';
  return $form;
}

/*
 * Additionnal submit for Linkedin admin page.
 * Rebuild menu router to avoid problems when switching display from/to tab
 */

function linkedin_profile_admin_submit(&$form_state) {
  menu_rebuild();
}

/*
 * Implementation of hook_linkedin_user_settings_page
 * Add our settings to user/%user/edit/linkedin
 */

function linkedin_profile_linkedin_user_settings_page($form_state, $account) {
  $form = array();
  if (variable_get('linkedin_profile_user_page_enabled', '0') > 0 && user_access('display LinkedIn profile')) {
    $form['linkedin_profile_user_page_enabled'] = array(
      '#type' => 'checkbox',
      '#default_value' => isset($account->linkedin_profile_user_page_enabled) ? $account->linkedin_profile_user_page_enabled : '0',
      '#title' => t('Display an abstract of your LinkedIn page on your current profile page'),
    );
  }
  return $form;
}

/*
 * Page callback for user profile linkedin tab
 */

function linkedin_profile_display($account) {
  $profile = $account->linkedin;
  if (!$profile['error-code']) {
    return theme('linkedin_profile_user_page', $account->linkedin);
  }
}
