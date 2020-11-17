<?php

/**
 * Handler for plugin deactivation event
 * 
 * @since 1.0.0
 * 
 * @package Wordpress_Plugin_Template
 * @subpackage Wordpress_Plugin_Template/includes
 */
if (!class_exists('Wordpress_Plugin_Template_Deactivator')) {
	/**
	 * Handler for plugin deactivation event
	 * 
	 * @since 1.0.0
	 * 
	 * @package Wordpress_Plugin_Template
	 * @subpackage Wordpress_Plugin_Template/includes
	 */
	class Wordpress_Plugin_Template_Deactivator {

		/**
		 * @since 1.0.0
		 */
		public static function deactivate() {
			// Write to php logs file
			file_put_contents('php://stdout', "===> Wordpress_Plugin_Template_Deactivator::deactivate\n", FILE_APPEND);
		}
	}
}