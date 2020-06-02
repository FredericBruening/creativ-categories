{get_category_array categoryId=0 assign='categories'}

{if !empty($categories)}
    <link rel="stylesheet" href="{$creativ_path}css/creativ-categories.css">
    <div class="creativ-categories">
        {foreach name='categories' from=$categories item='category'}
            <a class="category tw-group" href="{$category->cURLFull}">
                <img src="{$category->cBildURL}"
                     alt="{$category->cName}">
                <div class="name">
                    {$category->cName}
                </div>
            </a>
        {/foreach}
    </div>
{/if}
