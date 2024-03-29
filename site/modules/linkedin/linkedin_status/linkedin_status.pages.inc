<?php

// $Id: linkedin_status.pages.inc,v 1.1.2.4 2011/01/04 18:16:24 bellesmanieres Exp $ 
/*
 * Implementation of hook_linkedin_admin_page
 * Add our settings to the main Linkedin settings page
 */
function linkedin_status_linkedin_admin_page() {
  $form = array();

  $form['linkedin_status'] = array(
    '#description' => t('Enable users to update their LinkedIn user status when performing following actions.'),
    '#title' => t('Status update'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['linkedin_status']['node_types'] = array(
    '#description' => t('Let users update their status when creating/editing nodes of these types.'),
    '#title' => t('Node types'),
    '#type' => 'fieldset',
  );
  $types = node_get_types();
  foreach ($types as $type) {
    $form['linkedin_status']['node_types']['linkedin_status_enabled_' . $type->type] = array(
      '#type' => 'checkbox',
      '#prefix' => '<div class="linkedin-checkbox-toggle">',
      '#suffix' => '</div>',
      '#title' => $type->name,
      '#default_value' => variable_get('linkedin_status_enabled_' . $type->type, '0'),
    );
    $form['linkedin_status']['node_types']['linkedin_status_default_format_' . $type->type] = array(
      '#type' => 'textfield',
      '#prefix' => '<div class="linkedin-hidden">',
      '#suffix' => '</div>',
      '#title' => t('Default format string'),
      '#maxlength' => 140,
      '#description' => t('Text that will be posted to Linked In. You can use !url, !title, !user, and !site as replacement text.'),
      '#default_value' => variable_get('linkedin_status_default_format_' . $type->type, 'Posted "!title" on !site : !url'),
    );
  }
  if (module_exists('signup')) {
    $form['linkedin_status']['event_signup'] = array(
      '#description' => t('Let users update their status when signing up to events.'),
      '#title' => t('Users signup'),
      '#type' => 'fieldset',
    );
    $form['linkedin_status']['event_signup']['linkedin_status_enabled_event_signup'] = array(
      '#type' => 'checkbox',
      '#title' => 'Enable',
      '#default_value' => variable_get('linkedin_status_enabled_event_signup', '0'),
    );
    $form['linkedin_status']['event_signup']['linkedin_status_default_format_event_signup'] = array(
      '#type' => 'textfield',
      '#title' => t('Default format string'),
      '#maxlength' => 140,
      '#description' => t('Text that will be posted to Linked In. You can use !url, !title, !user, and !site as replacement text.'),
      '#default_value' => variable_get('linkedin_status_default_format_event_signup', 'Posted "!title" on !site : !url'),
    );
  }

  //Enable status update on comments
  if (module_exists('comment')) {
    $form['linkedin_status']['comment'] = array(
      '#description' => t('Let users update their status when adding comments to a Linkedin enabled node.'),
      '#title' => t('Comments'),
      '#type' => 'fieldset',
    );
    $form['linkedin_status']['comment']['linkedin_status_enabled_comment'] = array(
      '#type' => 'checkbox',
      '#title' => 'Enable',
      '#default_value' => variable_get('linkedin_status_enabled_comment', '0'),
    );
    $form['linkedin_status']['comment']['linkedin_status_default_format_comment'] = array(
      '#type' => 'textfield',
      '#title' => t('Default format string'),
      '#maxlength' => 140,
      '#description' => t('Text that will be posted to Linked In. You can use !url, !title, !user, and !site as replacement text.'),
      '#default_value' => variable_get('linkedin_status_default_format_comment', 'Commented on  "!title" on !site : !url'),
    );
  }

  return $form;
}

/*
 * Implementation of hook_linkedin_user_settings_page
 * Add our settings to user/%user/edit/linkedin
 */

function linkedin_status_linkedin_user_settings_page($form_state, $account) {
  $form = array();
  if (user_access('update LinkedIn status')) {
//check if linkedin status update is enabled for at least one content type
    $types = node_get_types();
    $type = new stdClass();
    $type->type = 'event_signup';
    $types[] = $type;
    $type->type = 'comment';
    $types[] = $type;
    foreach ($types as $type) {
      if (variable_get('linkedin_status_enabled_' . $type->type, '0' == '1')) {
        //if true add related option
        $form['linkedin_status_enabled_by_default'] = array(
          '#type' => 'checkbox',
          '#default_value' => isset($account->linkedin_status_enabled_by_default) ? $account->linkedin_status_enabled_by_default : '0',
          '#title' => t('By default, on actions such as posting content, update your LinkedIn status'),
          '#description' => t('(You can always bypass this setting individually)'),
        );
        break;
      }
    }
  }
  return $form;
}

/*
 * Form that will appear on places where users can update their linkedin status (node edit, signup, ...)
 */

function linkedin_status_update_form($form_state, $user, $node) {
// set up the state of the checkbox in the form
  if ($user->linkedin_status_enabled_by_default == 1 && !isset($node->nid)) {
    $checked = 1;
  }
  else {
    $checked = 0;
  }

//prepare the form base checkbox
  $form['linkedin_status'] = array(
    '#type' => 'fieldset',
    '#title' => t('Post to LinkedIn'),
    '#tree' => TRUE,
  );
  $form['linkedin_status']['posting'] = array(
    '#type' => 'checkbox',
    '#id' => 'linkedin-status-posting',
    '#default_value' => $checked,
  );
  $form['linkedin_status']['posting']['#title'] = t('Announce on LinkedIn');

//check if user can post to LinkedIn. No need to load all the following if the form is to be disabled anyway
  $check = linkedin_get_profile_fields($user->uid, array('id'));
  if (!isset($check['id'])) {//disabling form for users who have not yet authorised our site and link them to the right place
    $form['linkedin_status']['posting']['#disabled'] = TRUE;
    $form['linkedin_status']['posting']['#prefix'] = '<p>' . t('You must first authorize this feature in your user profile : !url', array('!url' => l($user->name, 'user/' . $user->uid . '/edit/linkedin'))) . '</p>';
  }
  else { //user can post
    $form['#title'] = $node->title;
    $form['#url'] = url('node/' . $node->nid, array('absolute' => TRUE));
    $form['#user'] = $user->name;
    $form['#site'] = variable_get('site_name', $base_url);

//add textfield is user has perm.
    if (user_access('use custom status text')) {
// two lines of js for hiding the texfield if checkbox is unchecked.
      drupal_add_js(drupal_get_path('module', 'linkedin_status') . '/linkedin_status.js', 'module');
      $form['linkedin_status']['status'] = array(
        '#type' => 'textfield',
        '#default_value' => variable_get('linkedin_status_default_format_' . $node->type, ''),
        '#description' => t('This text will be set as your current status on linkedin. You can use !title, !url, !user and !site as replacement text.'),
        '#id' => 'linkedin-status-textfield',
      );
    }
    else {
      $form['linkedin_status']['status'] = array(
        '#type' => 'hidden',
        '#value' => variable_get('linkedin_status_default_format_' . $node->type, ''),
      );
    }
  }
  return $form;
}

/*
 * Submit for user posting their status
 */

function linkedin_status_update_form_submit($form, &$form_state) {

  if ($form_state['values']['linkedin_status']['posting'] == '1' && !empty($form_state['values']['linkedin_status']['status']) && user_access('update LinkedIn status')) {

    if ($form['linkedin']) {//for forms on node edit page
      $prefix = $form['linkedin'];
    }
    elseif ($form['collapse']['signup_user_form']['linkedin']) { //for forms on event signup
      $prefix = $form['collapse']['signup_user_form']['linkedin'];
    }
    else { //shouldn't occur, something is wrong !!!!
      drupal_set_message('Linkedin module has a serious problem! Please file an issue at http://drupal.org/project/linkedin');
      return;
    }
    if (!empty($form_state['values']['nid'])) {
      $placeholders = array(
        '!title' => $prefix['#title'],
        '!url' => $prefix['#url'],
        '!user' => $prefix['#user'],
        '!site' => $prefix['#site'],
      );

      global $user;

      $status = strtr($form_state['values']['linkedin_status']['status'], $placeholders);
      linkedin_put_profile_field($user->uid, $status, 'current-status');
      drupal_set_message(t('Posted to LinkedIn'));
    }
  }
}