<?php
// $Id:$

/**
 * @file
 * Support file for the CCK Content Taxonomy module.
 */

/**
 * Implementation of hook_node_import_fields().
 */
function content_taxonomy_node_import_fields($type) {
  $fields = array();
  
  foreach (node_import_cck_fields($type, 'content_taxonomy') as $fieldname => $fieldinfo) {
    foreach ($fieldinfo['columns'] as $colname => $colinfo) {
      $cck_fieldname = node_import_cck_name($fieldname, $colname);
      
      $fields[$cck_fieldname] = node_import_cck_field_defaults($fieldinfo);
      
      switch ($colname) {
        case 'value':
          $fields[$cck_fieldname]['title'] = $fieldinfo['widget']['label'];
          $fields[$cck_fieldname]['map_required'] = $fieldinfo['required'];
          break;
        
        default:
          $fields[$cck_fieldname]['title'] = t('Unsupported: ') . $fieldinfo['widget']['label'] .' - '. $colname;
          break;
      }
    }
  }
  
  return $fields;
} // function content_taxonomy_node_import_fields()

/**
 * Implementation of hook_node_import_values_alter().
 */
function content_taxonomy_node_import_values_alter(&$values, $type, $defaults, $options, $fields, $preview) {
  foreach (node_import_cck_fields($type, 'content_taxonomy') as $fieldname => $fieldinfo) {
    // place the following line in the validation function on the content_taxonomy module in order to determine
    // what the widget is expecting: drupal_set_message('<pre>Element: ' . print_r($element, TRUE) . '</pre>');
    // for example, I placed the above line in the content_taxonomy_tree_validate function in order to discover
    // the data structure that the validator expects. I assume the other widgets expect different structures.
    if ($fieldinfo['widget']['type'] == 'content_taxonomy_tree') {
      $vid = $fieldinfo['vid'];
      $terms = array();
      $results = array();
      foreach ($values[$fieldname] as $i => $value) {
        $term = taxonomy_get_term_by_name($value['value']);
        $tid = $term[0]->tid;
        $terms[$tid] = (array)$term[0];
        $children = taxonomy_get_children($tid, $vid);
        $terms[$tid]['children'] = $children;
        $parents = taxonomy_get_parents($tid);
        $terms[$tid]['parents'] = $parents;
      }
      //content_taxonomy_node_import_tree_adjust($terms, $converted);
      foreach ($terms as $term_id => $data) {
        if (empty($data['parents'])) {//we only want top level terms here
          $results['value'][$term_id] = array('checkbox' => $term_id);
          if (!empty($data['children'])) {//handle the children terms
            //recurse here
            content_taxonomy_node_import_tree_adjust($terms, $data, $results['value'][$term_id]['children']);
          }
          else {
            unset($terms[$term_id]);
          }
        }
      }
      $values[$fieldname] = $results;
    }
    else {//may need to make several of these into elseif for these widgets: content_taxonomy_autocomplete, ..._options, ..._select
      $vid = $fieldinfo['vid'];
      foreach ($values[$fieldname] as $i => $value) {
        $sql = "SELECT tid FROM {term_data} WHERE vid = %d AND LOWER(name) = '%s'";
        if ($tid = db_result(db_query($sql, $vid, drupal_strtolower($value['value'])))) {
          $values[$fieldname][$i]['value'] = $tid;
        }
        else {
          $values[$fieldname][$i]['value'] = '';
        }
      }
    }
  }
} // content_taxonomy_node_import_values_alter()

function content_taxonomy_node_import_tree_adjust(&$terms, &$data, &$results) {
  foreach ($data['children'] as $id => $contents) {
    if (key_exists($id, $terms)) {
      $results[$id] = array('checkbox' => $id);
      if (!empty($terms[$id]['children'])) {
        content_taxonomy_node_import_tree_adjust($terms, $terms[$id], $results[$id]['children']);
      }
      else {
        //unset the item from the terms list. this should be a leaf term.
        unset($terms[$id]);
      }
    }
  }
} // function content_taxonomy_node_import_tree_adjust()