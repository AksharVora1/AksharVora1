<?php
/**
 * The template for displaying the header.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php generate_do_microdata( 'body' ); ?>>
	<?php
	/**
	 * wp_body_open hook.
	 *
	 * @since 2.3
	 */
	do_action( 'wp_body_open' ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- core WP hook.

	/**
	 * generate_before_header hook.
	 *
	 * @since 0.1
	 *
	 * @hooked generate_do_skip_to_content_link - 2
	 * @hooked generate_top_bar - 5
	 * @hooked generate_add_navigation_before_header - 5
	 */
	//do_action( 'generate_before_header' );

	/**
	 * generate_header hook.
	 *
	 * @since 1.3.42
	 *
	 * @hooked generate_construct_header - 10
	 */
	//do_action( 'generate_header' );

	/**
	 * generate_after_header hook.
	 *
	 * @since 0.1
	 *
	 * @hooked generate_featured_page_header - 10
	 */
	//do_action( 'generate_after_header' );
	?>

	<!-- Main header Code -->
    <section class="main-header-section">
        <div class="main-header-container">
            <div class="main-logo">
                <?php echo the_custom_logo(); ?>
            </div>
            <div class="profile-part">
                <select class="profile" name="profile" id="profile">
                    <option value="Jhon">Jhon</option>
                </select>
                <!-- <img src="images/profile-img.png" alt="profile-img"> -->
                <i class="fa fa-search"></i>
                <i class="fa fa-comment"></i>
                <i class="fa fa-bell"></i>
            </div>
        </div>
    </section>
    <!-- Header and NavBar Code -->
    <div class="nav-header">

        <?php 


        // get menu items 
         $menu_array = wp_get_nav_menu_items('Main Menu');
    
           //echo '<pre>'; print_r($menu_array); echo '<pre>'; exit('test'); 

        ?>
        <!-- NavBar Code -->
        <nav class="main-navbar">
        <a class="nav-item-close" href="javascript:;"><i class="fa fa-bars"></i>
                </a>
           
            <div class="nav-items" id="nav-items">   

               <!--  <a class="nav-item-close" href="javascript:;"><i class="fa fa-close"></i>
                </a> -->

                <?php foreach ($menu_array as $menu) { 
                    $menuid = $menu->ID;
                   // $menuicon = $menu->classes[0];

                    // check if menu is main menu
                    if($menu->menu_item_parent == 0) {

                   // global $wpdb;
                   // $menuicon = $wpdb->get_var("SELECT meta_value FROM wp_postmeta WHERE post_id='".$menuid."'");
                    $menuicon = get_post_meta( $menuid, 'menu-icons', true );
                    $icon = $menuicon['icon'];
                    //echo '<pre>'; print_r($menuicon); echo '<pre>'; 
                    //echo $icon;
                    //exit;
                 ?>

                <div class="nav-item"  data-attr="subDropdown<?php echo $menuid;?>"><i class="dashicons <?php echo $icon; ?>"></i>
                    <span class="second-layer">
                        <a href="<?php echo $menu->url; ?>"><?php echo $menu->post_title; ?></a>
                        <i class="fa fa-angle-right"></i>
                    </span>
                    </div>

                <?php  }  }?>

                <a class="nav-item-setting nav-item" href="#"><i class="fa fa-cog"></i>
                    <span class="second-layer">
                        <span>Settings</span>
                    </span>
                </a>
                
                
            </div>  
            
             <div class="dropdown" id="drop-down">
                <div class="dropdown-content">
                    <div class="dropdown-content-menus">

                        <?php foreach ($menu_array as $menu) { 
                             $menuid = $menu->ID;
                        ?>   
                            <ul class="sub-dropdown-menu" id="subDropdown<?php echo $menuid;?>">

                                <label><a href="<?php echo $menu->url; ?>"><?php echo $menu->post_title; ?></a></label>
                                <?php $lastparentmenu = $menu->ID; // store last recent main menu id

                                    foreach ($menu_array as $menu) {

                                        // get parent menu id
                                        $menuparent = $menu->menu_item_parent; 

                                        // check if menu parent id is same as recent last main menu
                                        if($menuparent == $lastparentmenu){
                                ?>
                                             <li class="sub-menu"><a href="<?php echo $menu->url; ?>"><?php echo $menu->post_title; ?></i></a></li>
                            
                                <?php } } ?>

                            </ul>

                         <?php  } ?>
                    </div>
                </div>
             </div>  

    

        </nav>


    </div>

	<div <?php generate_do_attr( 'page' ); ?>>
		<?php
		/**
		 * generate_inside_site_container hook.
		 *
		 * @since 2.4
		 */
		do_action( 'generate_inside_site_container' );
		?>
		<div <?php generate_do_attr( 'site-content' ); ?>>
			<?php
			/**
			 * generate_inside_container hook.
			 *
			 * @since 0.1
			 */
			do_action( 'generate_inside_container' );
