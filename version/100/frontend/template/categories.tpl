{get_manufacturers assign='manufacturers'}


{if !empty($manufacturers)}
    <link rel="stylesheet" href="{$oPlugin->cFrontendPfadURL}css/creativ-categories.css">

    <div class="tw-w-full">
        {get_category_array categoryId=0 assign='categories'}
            <div class="w-full my-6 flex flex-wrap justify-center">
                {foreach name='categories' from=$categories item='category'}
                    {if !in_array(strtolower($category->cName), ['themen', 'hakro', 'stanley/stella'])}
                        <a class="w-1/2 md:w-1/3 px-2 py-2 sm:px-6 sm:py-6" href="{$category->cURLFull}">
                            <img class="lozad object-cover w-full rounded-lg" data-src="{$category->cBildURL}"
                                 alt="{$category->cName}">
                            <div class="text-gray-800 md:text-xl text-center font-semibold py-5 px-3">
                                {$category->cName}
                            </div>
                        </a>
                    {/if}
                {/foreach}
            </div>
    </div>

{/if}
