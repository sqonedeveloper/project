<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title><?php echo $title;?></title>
   <link rel="icon" type="image/png" href="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/favicon.png" />
   <?php
   echo css_tag([
      'assets/plugins/bootstrap/css/bootstrap.min.css',
      'assets/css/icons/font-awesome/css/fontawesome-all.min.css',
      'assets/css/icons/themify-icons/themify-icons.min.css',
      'assets/css/icons/material-design-iconic-font/css/materialdesignicons.min.css',
      'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700',
      'assets/css/spinners.min.css',
      'assets/css/animate.css',
      'assets/css/style.min.css',
      'assets/css/colors/blue.min.css'
   ]);
   echo @$internalCss;
   echo '<style>';
   echo $this->minify->css('assets/css/custom.css');
   echo '</style>';
   echo '<!--[if lt IE 9]>';
   echo script_tag([
      'assets/js/html5shiv.js',
      'assets/js/respond.min.js'
   ]);
   echo '<![endif]-->';
   ?>
</head>
<body class="fix-header fix-sidebar card-no-border">
   <div id="root"></div>
   <!-- <div id="main-wrapper">
      <?php
      /* echo loadFile('AdminPanel/TopBar');
      echo loadFile('AdminPanel/Navigation');
      echo '<div class="page-wrapper">';
      echo $contents;
      echo '</div>';
      echo loadFile('AdminPanel/Footer'); */
      ?>
   </div> -->
   <?php
   echo script_tag([
      'assets/plugins/jquery/jquery.min.js',
      'assets/plugins/popper/popper.min.js',
      'assets/plugins/bootstrap/js/bootstrap.min.js',
      'assets/js/jquery.slimscroll.js',
      'assets/js/waves.js',
      'assets/js/sidebarmenu.js',
      'assets/plugins/sticky-kit-master/dist/sticky-kit.min.js',
      'assets/plugins/sparkline/jquery.sparkline.min.js',
      'assets/js/custom.js'
   ]);
   echo @$internalJs;
   echo '<script>';
   echo 'var baseUrl = "'.$this->config->item('base_url').'",';
   echo 'indexPage = "'.$this->config->item('index_page').'",';
   echo 'siteUrl = baseUrl+(indexPage !== "" ? indexPage+"/" : ""),';
   echo 'segment = '.json_encode($this->uri->segment_array()).',';
   echo 'pageType = "'.@$pageType.'";';
   echo @$footerJs;
   echo '</script>';
   echo script_tag([
      'http://localhost:8080/vendor.bundle.js',
      'http://localhost:8080/main.bundle.js'
   ]);
   ?>
</body>
</html>