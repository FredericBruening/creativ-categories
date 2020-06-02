<?php 
/**
* Hook HOOK_SMARTY_OUTPUTFILTER
*
* @global JTLSmarty $smarty
* @global Plugin $oPlugin
*/

if (Shop::getPageType() == 18) {

    $scripts = $oPlugin->cFrontendPfad . 'template/' . 'scripts.tpl';
    pq('#app')->after($smarty->fetch($scripts));

    $template = $oPlugin->cFrontendPfad . 'template/' . 'categories.tpl';

    $smarty->assign('creativ_path', $oPlugin->cFrontendPfadURL);

    pq('#content')->before(
        $smarty->fetch("{$oPlugin->cFrontendPfad}template/categories.tpl")
    );
}

