<?php 
/**
* Hook HOOK_SMARTY_OUTPUTFILTER
*
* @global JTLSmarty $smarty
* @global Plugin $oPlugin
*/

if (Shop::getPageType() == 28 && pq('#inquiry-form')->count()) {

    $scripts = $oPlugin->cFrontendPfad . 'template/' . 'scripts.tpl';
    pq('#app')->after($smarty->fetch($scripts));
}

