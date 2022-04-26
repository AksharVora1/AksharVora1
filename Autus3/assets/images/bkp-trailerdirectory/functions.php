<?php
/**
 * GeneratePress child theme functions and definitions.
 *
 * Add your custom PHP in this file. 
 * Only edit this file if you have direct access to it on your server (to fix errors if they happen).
 */

function generatepress_child_enqueue_scripts() {
	if ( is_rtl() ) {
		wp_enqueue_style( 'generatepress-rtl', trailingslashit( get_template_directory_uri() ) . 'rtl.css' );
	}
}
add_action( 'wp_enqueue_scripts', 'generatepress_child_enqueue_scripts', 100 );


function custom_files() {
	
		wp_enqueue_style( 'custom',  get_stylesheet_directory_uri()  . '/css/custom.css?1.6.1' );
		wp_enqueue_script( 'custom',  get_stylesheet_directory_uri()  . '/js/script.js?1.9.10' );
	
}
add_action( 'wp_enqueue_scripts', 'custom_files', 100 );
