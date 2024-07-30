import BlogDate from '@/components/BlogDate'
import EditorOutput from '@/components/EditorJsOutput'
import React from 'react'
const content = {
    title: 'this is my new blog ',
    content: {
        time: 1722156808805,
        blocks: [
            {
                id: 'Ew-DJkIWdQ',
                type: 'paragraph',
                data: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
            },
            {
                id: 'aJ46AfFFHP',
                type: 'list',
                data: {
                    style: 'ordered',
                    items: [
                        'Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum sem ultricies sem porttitor diam aenean nam accumsan. Tempus aliquam laoreet pharetra, montes lacus ut.&nbsp;',
                        'Mauris erat tincidunt duis porttitor; conubia ultricies sed taciti. Integer semper nulla laoreet aliquam hac eget.',
                        '&nbsp;Ac curabitur porta, dignissim sapien purus erat. Mollis maximus eget inceptos gravida praesent elit hendrerit; nam tellus.',
                        'Auctor vulputate ipsum mi scelerisque pellentesque massa metus leo. Netus phasellus diam massa maecenas, lectus ex facilisi malesuada.',
                    ],
                },
            },
            {
                id: 'tWdQ80O7xr',
                type: 'list',
                data: {
                    style: 'unordered',
                    items: [
                        'Eu auctor quis aptent iaculis curabitur netus natoque lacinia conubia. Libero nam ridiculus in nullam, vivamus venenatis. Dis in pharetra dis cras integer consequat. Orci mollis non conubia ultrices dis odio nunc tempus. Consectetur bibendum aptent taciti cras sociosqu venenatis massa. Dictumst dui rutrum scelerisque id; rhoncus tempus. Fusce primis nisl in fermentum ligula primis. Accumsan feugiat dictum lorem proin egestas pulvinar taciti posuere. Penatibus adipiscing hendrerit potenti sapien montes parturient.',
                    ],
                },
            },
            {
                id: 'QzAvBmxMbN',
                type: 'list',
                data: {
                    style: 'unordered',
                    items: [
                        'Pretium fringilla habitant class etiam, eleifend vestibulum arcu fringilla. Facilisis vel habitasse netus morbi egestas. Malesuada aptent mattis nec dis laoreet malesuada lacus pretium inceptos. Imperdiet luctus urna neque feugiat vestibulum cras interdum torquent ultrices. Eros duis mauris lectus a pretium ipsum adipiscing lacinia. Tempor penatibus ante diam tempus in himenaeos laoreet praesent erat. Ex faucibus mi curabitur urna parturient non enim consequat. Congue dolor etiam nulla vehicula habitant. Mollis sociosqu tempus accumsan venenatis purus varius felis non. Curae adipiscing est, urna diam nostra tristique dolor.',
                    ],
                },
            },
        ],
        version: '2.30.2',
    },
}
function page() {
    return (
        <>
            <div className="px-4"></div>
            <div className="mx-auto max-w-screen-2xl ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <div className="px-4 text-center">
                            <hr className="w-full h-3 mx-auto bg-black border-0 rounded dark:bg-gray-700" />
                            <div className="flex flex-row items-center gap-10">
                                <h1 className="display-4 text-gray-900 animated slideInDown">
                                    {content.title}
                                </h1>
                            </div>
                            <hr className="w-full h-3 mx-auto bg-black border-0 rounded dark:bg-gray-700" />
                        </div>
                        <BlogDate timestamp={content.content.time} />
                        <div className="p-10 ">
                            <EditorOutput content={content.content} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
