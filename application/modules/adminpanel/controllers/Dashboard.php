<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends AdminPanel {

   public function __construct() {
      parent::__construct();
   }

   public function index() {
      $this->data = [
         'title' => 'Dashboard'
      ];

      $this->load->view('AdminPanel', $this->data);
   }

}