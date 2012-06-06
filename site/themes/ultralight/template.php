<?php
/**
 * $Id: template.php 3 2010-08-06 17:17:56Z jackncoke $
 * 
 */
//drupal_rebuild_theme_registry();

drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/jquery.corner.min.js');
drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/jquery.cycle.min.js');

drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/cufon-yui.js');
drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/quicksand.font.js');


/* superfish */
drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/superfish.js');
drupal_add_css(drupal_get_path('theme','ultralight'). '/css/superfish.css', 'theme', 'all');
drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/jquery.hoverIntent.min.js');
drupal_add_js(drupal_get_path('theme', 'ultralight') . '/js/supersubs.js');

// Get custom Theme style #default style1.css
drupal_add_css(drupal_get_path('theme', 'ultralight') .'/css/style1.css','theme', 'all');

function ultralight_preprocess_page(&$vars) {
  $menu = menu_navigation_links("navigation");
  $vars['custom_admin_menu'] = theme('links', $menu, array('class'=>'admin-menu'));
    
}

  if ((arg(0) == 'admin')) {
  	drupal_add_css(drupal_get_path('theme', 'ultralight') .'/css/admin-style.css','theme', 'all');
  }


function ultralight_preprocess_search_theme_form(&$vars, $hook) {
  // Note that in order to theme a search block you should rename this function
  // 'search_block_form' instead of 'search_theme_form' in the customizations
  // bellow.

  // Modify elements of the search form
  $vars['form']['search_theme_form']['#title'] = t('');
 
  // Set a default value for the search box
  $vars['form']['search_theme_form']['#value'] = t('Search');
 
  // Add a custom class and placeholder text to the search box
  $vars['form']['search_theme_form']['#attributes'] = array('class' => 'normal-search-box',
                                                              'onfocus' => "if (this.value == 'ultralight Search box') {this.value = '';}",
                                                              'onblur' => "if (this.value == '') {this.value = 'ultralight Search box';}");
 
  // Change the text on the submit button
  //$vars['form']['submit']['#value'] = t('Go');

  // Rebuild the rendered version (search form only, rest remains unchanged)
  unset($vars['form']['search_theme_form']['#printed']);
  $vars['search']['search_theme_form'] = drupal_render($vars['form']['search_theme_form']);

  $vars['form']['submit']['#type'] = 'image_button';
  $vars['form']['submit']['#src'] = path_to_theme() . '/images/search-btn.png';
  
  $vars['form']['submit']['#attributes'] = array('class'=>'search-button');
   
  // Rebuild the rendered version (submit button, rest remains unchanged)
  unset($vars['form']['submit']['#printed']);
  $vars['search']['submit'] = drupal_render($vars['form']['submit']);

  // Collect all form elements to make it easier to print the whole form.
  $vars['search_form'] = implode($vars['search']);
}

// USER LOGIN FORM
function get_user_login_form() {
  $form_id = 'user_login';
  $form = array();
  $form['name'] = array(
    '#type' => 'textfield',
    '#maxlength' => USERNAME_MAX_LENGTH,
    '#required' => TRUE,
    '#value' => 'user name',
    '#attributes' => array('tabindex' => '1','class' => 'user-input-text',
  																					 'onfocus' => "if (this.value == 'user name') {this.value = '';} $(this).addClass('user-name-hover')",
  																					 'onblur' => "if (this.value == '') {this.value = 'user name';} $(this).removeClass('user-name-hover')")
  );
  $form['pass'] = array(
    '#type' => 'password',
    '#required' => TRUE,
    '#value' => 'password',
    '#attributes' => array('tabindex' => '2','class' => 'user-input-text',
  																					 'onfocus' => "$(this).addClass('user-pass-hover')",
  																					 'onblur' => "$(this).removeClass('user-pass-hover')")
  );
  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Log in'),
    '#weight' => 2,
    '#attributes' => array('tabindex' => '3')
  );
  
  
  $form['#validate'] = user_login_default_validators();
  $form['#build_id'] = sprintf('form-%s', md5(uniqid(mt_rand(), TRUE)));
  $form_state = array();
  drupal_prepare_form($form_id, $form, $form_state);
  drupal_process_form($form_id, $form, $form_state);
  $out = new stdClass;
  $out->form_start =
    sprintf("<form method='post' accept-charset='UTF-8' action='%s'>",
    url('user/login'));
  $out->form_end = "</form>";
  $out->name = drupal_render($form['name']);
  $out->pass = drupal_render($form['pass']);
  $out->submit =
    drupal_render($form['form_id']) .
    drupal_render($form['form_build_id']) .
    drupal_render($form['submit']);
  return $out;
}

/**
 * CONTACT FORM
 */
function ultralight_preprocess_contact_mail_page(&$vars){
	$vars['form']['name']['#attributes'] = array('class'=>'contact-input-text',
																								'onfocus' => "$(this).addClass('contact-input-text-hover')",
																								'onblur' => "$(this).removeClass('contact-input-text-hover')") ;
	$vars['form']['mail']['#attributes'] = array('class'=>'contact-input-text',
																								'onfocus' => "$(this).addClass('contact-input-text-hover')",
																								'onblur' => "$(this).removeClass('contact-input-text-hover')") ;
	$vars['form']['subject']['#attributes'] = array('class'=>'contact-input-text',
																								'onfocus' => "$(this).addClass('contact-input-text-hover')",
																								'onblur' => "$(this).removeClass('contact-input-text-hover')") ;
	
	
	$vars['form']['message']['#resizable'] = false;
	$vars['form']['message']['#cols'] = 70 ;
	$vars['form']['message']['#rows'] = 20 ;
	$vars['form']['message']['#attributes'] = array('class'=>'contact-message-text',
																									'onfocus' => "$(this).addClass('contact-message-text-hover')",
																									'onblur' => "$(this).removeClass('contact-message-text-hover')") ;
	$vars['contact_form'] = drupal_render($vars['form']);
	$vars['contact_firep'] = $vars['form'];


}


/* blog style catcher */
function ultralight_preprocess_node(&$vars) {
  if (module_exists('path')) {
    $alias = drupal_get_path_alias(str_replace('/edit','',$_GET['q']));
    if ($alias != $_GET['q']) {
      $suggestions = array();
      $template_filename = 'node';
      foreach (explode('/', $alias) as $path_part) {
        $template_filename = $template_filename . '-' . $path_part;
        $suggestions[] = $template_filename;
      }
      $vars['template_files'] = $suggestions;
    }
  } 
}

function ultralight_theme(){
  return array(
    'contact_mail_page' => array(
      'arguments' => array('form' => NULL),
      'template' => 'contact-mail-page',
    ),
    'user_login_block' => array(
     'arguments' => array('form' => NULL),
     'template' => 'login-block')
  );
}





?>
