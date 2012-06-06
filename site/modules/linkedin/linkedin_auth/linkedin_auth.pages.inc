<?php

// $Id: linkedin_auth.pages.inc,v 1.1.2.2 2011/01/04 17:16:55 bellesmanieres Exp $ 
/*
 * @file Pages callbacks and form builder functions for Linkedin Profile module
 */

/* Implementation of hook_linkedin_admin_page
 * Add our settings to the main Linkedin settings page
 */

function linkedin_auth_linkedin_admin_page() {
  $form = array();
  $form['linkedin_auth'] = array(
    '#description' => t('Let users login using their LinkedIn account once they have tied it to their local account'),
    '#title' => t('LinkedIn authentication'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['linkedin_auth']['linkedin_auth_login_link_on_block'] = array(
    '#type' => 'checkbox',
    '#title' => 'Display LinkedIn login link on login block form',
    '#default_value' => variable_get('linkedin_auth_login_link_on_block', '0'),
  );
  $form['linkedin_auth']['linkedin_auth_login_link_on_page'] = array(
    '#type' => 'checkbox',
    '#title' => 'Display LinkedIn login link on login page form',
    '#default_value' => variable_get('linkedin_auth_login_link_on_page', '0'),
  );
  $form['linkedin_auth']['linkedin_auth_login_block'] = array(
    '#type' => 'checkbox',
    '#title' => 'Provides a seperate "Linkedin login block"',
    '#default_value' => variable_get('linkedin_auth_login_block', '0'),
  );

  return $form;
}