<?php 
/**
* Hook HOOK_SMARTY_OUTPUTFILTER
*
* @global JTLSmarty $smarty
* @global Plugin $oPlugin
*/

if (Shop::getPageType() == 18) {

    $scripts = $oPlugin->getPaths()->getFrontendPath() . 'template/' . 'scripts.tpl';
    pq('#app')->after($smarty->fetch($scripts));

    $template = $oPlugin->getPaths()->getFrontendPath() . 'template/' . 'categories.tpl';

    $smarty->assign('creativ_path', $oPlugin->getPaths()->getFrontendURL());

    pq('#content')->before(
        $smarty->fetch("{$oPlugin->getPaths()->getFrontendPath()}template/categories.tpl")
    );
}

