<?php
/**
 * Plugin Name:       WordPress Plugin Template
 * Plugin URI:        http://example.com/wordpress-plugin-template-uri/
 * Description:       My wordpress plugin template descrription.
 * Version:           1.0.0
 * Author:            Your Name or Your Company
 * Author URI:        http://example.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wordpress-plugin-template
 * Domain Path:       /languages
 * 
 * @link              http://example.com
 * @since             1.0.0
 * @package           Wordpress_Plugin_Template
 */

if (!defined('WPINC')) {
	die;
}

if ( is_readable( plugin_dir_path( __FILE__ ) . 'vendor/autoload.php' ) ) {
    require plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';
}

/**
 * Plugin activation.
 */
if (!function_exists('activate_wordpress_plugin_template')) {
    function activate_wordpress_plugin_template() {
        require_once plugin_dir_path( __FILE__ ) . 'includes/class-wordpress-plugin-template-activator.php';
        Wordpress_Plugin_Template_Activator::activate();
    }
}
register_activation_hook( __FILE__, 'activate_wordpress_plugin_template' );

/**
 * Plugin deactivation.
 */
if (!function_exists('deacttivate_wordpress_plugin_template')) {
    function deactivate_wordpress_plugin_template() {
        require_once plugin_dir_path( __FILE__ ) . 'includes/class-wordpress-plugin-template-deactivator.php';
        Wordpress_Plugin_Template_Deactivator::deactivate();
    }
}
register_deactivation_hook( __FILE__, 'deactivate_wordpress_plugin_template' );