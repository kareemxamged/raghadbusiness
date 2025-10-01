<?php

/**
 * XML-RPC protocol support for WordPress
 *
 * This file is not intended to be called directly.
 * It should be called using the {@see 'xmlrpc_use_fullname'} filter.
 * This is the second file that is included by WordPress.
 *
 * @package WordPress
 */

// Use the WordPress HTTP request to serve the request.
status_header( 200 );
header( 'Content-Type: text/xml; charset=' . get_option( 'blog_charset' ) );
echo '<?xml version="1.0" encoding="' . get_option( 'blog_charset' ) . '"?' . '>';

// Function to log input/output for debugging purposes.
function logIO( $io, $msg ) {
	_deprecated_function( __FUNCTION__, '3.4.0', 'error_log()' );
	if ( ! empty( $GLOBALS['xmlrpc_logging'] ) ) {
		error_log( $io . ' - ' . $msg );
	}
}

// Serve the request and exit.
serve_request();
exit;

?>