<?php
/**
 * Plugin Admin Area
 * 
 * @since 1.0.0
 * 
 * @todo Change to Your plugin package name
 * @package Wordpress_Plugin_Template
 * @subpackage Wordpress_Plugin_Template/admin
 */

/**
 * @todo Rename to Your plugin specific class name
 */
if (!class_exists('Wordpress_Plugin_Template_Admin')) {

	/**
	 * Plugin Admin Area
	 * @since 1.0.0
	 * 
	 * @todo Change to Your plugin package name
	 * @package Wordpress_Plugin_Template
	 * @subpackage Wordpress_Plugin_Template/admin
	 */
	class Wordpress_Plugin_Template_Admin {

		/**
		 * The ID of the plugin.
		 * 
		 * @since 1.0.0
		 * @var string $plugin_name The ID of this plugin.
		 */
		private $plugin_name;

		/**
		 * The version of this plugin.
		 * 
		 * @since 1.0.0
		 * @var string $plugin_version The version of this plugin.
		 */
		private $plugin_version;

		public function __construct($plugin_name, $plugin_version) {
			$this->plugin_name = $plugin_name;
			$this->plugin_version = $plugin_version;
		}

		/**
		 * Register the stylesheets for the admin area.
		 * 
		 * @since 1.0.0
		 * 
		 * @todo Rename to Your specific admin css file.
		 */
		public function enqueue_styles() {
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/admin-wordpress-plugin-template.min.css', array(), $this->plugin_version, 'all' );
		}
	
		/**
		 * Register the javascrips for the admin area.
		 * 
		 * @since 1.0.0
		 * 
		 * @todo Rename to Your specific admin scripts file.
		 */
		public function enqueue_scripts() {
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/admin-wordpress-plugin-template.min.js', array( 'jquery' ), $this->plugin_version, false );
		}
	}
}