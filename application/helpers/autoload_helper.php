<?php
function settings($field) {
	$CI =& get_instance();

	$query = $CI->db
		->select($field)
		->from('tb_settings')
		->get();
	$data = $query->row_array();
	return $data[$field];
}

function usersLogin($field) {
	$CI =& get_instance();

	$id = $CI->session->userdata('idUsers');

	$query = $CI->db
		->select($field)
		->from('tb_users')
		->where('id', $id)
		->get();
	$data = $query->row_array();
	return $data[$field];
}

function post($field) {
	$CI =& get_instance();

	$form_post = $CI->input->post($field, true);
	return $form_post;
}

function getPost($field) {
	$CI =& get_instance();

	$form_post = $CI->input->get_post($field, true);
	return $form_post;
}