<?php

/**
 * Handler for plugin activation event
 * 
 * @since 1.0.0
 * 
 * @package Wordpress_Plugin_Template
 * @subpackage Wordpress_Plugin_Template/includes
 */
if (!class_exists('Wordpress_Plugin_Template_Activator')) {
	/**
	 * Handler for plugin activation event
	 * 
	 * @since 1.0.0
	 * 
	 * @package Wordpress_Plugin_Template
	 * @subpackage Wordpress_Plugin_Template/includes
	 */
	class Wordpress_Plugin_Template_Activator {

		/**
		 * @since 1.0.0
		 */
		public static function activate() {
			// Write to php logs file
			file_put_contents('php://stdout', "===> Wordpress_Plugin_Template_Activator::activate\n", FILE_APPEND);
		}
	}
}