{get_category_array categoryId=0 assign='categories'}

{if !empty($categories)}
    <link rel="stylesheet" href="{$creativ_path}css/creativ-categories.css">
    <div class="tw-w-full tw-mb-16 tw-grid tw-grid-cols-2 tw-gap-2 md:tw-grid-cols-4 md:tw-gap-4">
        {foreach name='categories' from=$categories item='category'}
            <a class="tw-group hover:tw-shadow tw-relative" href="{$category->getURL()}">
                <img class="tw-object-cover tw-h-full tw-w-full lozad" src="{$category->getImageURL()}"
                     alt="{$category->getName()}">
                <div class="tw-origin-center tw-transition-transform tw-tw-transform hover:tw-skew-x-3 tw-w-full tw-bg-blue-600 tw-bg-opacity-25 group-hover:tw-bg-opacity-75 tw-absolute tw-tracking-wider tw-bottom-0 tw-text-white tw-text-lg md:tw-text-4xl tw-text-center tw-font-semibold tw-py-2 md:tw-py-5 tw-px-3 tw-capitalize">
                    {$category->getName()}
                </div>
            </a>
        {/foreach}
    </div>
{/if}
