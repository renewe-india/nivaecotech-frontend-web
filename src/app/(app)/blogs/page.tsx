import { Create, NavigateBefore, NavigateNext } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ArticleProps {
    date: string
    title: string
    content: string
    imageUrl: string
    readMoreUrl: string
}
const Blogs = () => {
    const articles = [
        {
            date: '2024-06-03',
            title: 'CAPEX Solar Projects: Empowering Manufacturing Businesses',
            content:
                'In the CAPEX (Capital Expenditure) model for solar installations, the consumer pays the total upfront cost for the solar system. This ownership grants access to tax benefits and depreciation advantages. While the initial investment is higher, energy savings allow consumers to recover it within 5-6 years. In contrast, the *OPEX* (Operational Expenditure) model shifts responsibility to a third party, who sets up and maintains the solar plant. Consumers pay only for the electricity, enjoying risk-free power at negotiated tariffs. After the agreed tenure, ownership of the solar plant transfers to the consumer at no additional cost. 🌞🔆',
            imageUrl:
                '/blogs/capex-solar-projects-empowering-manufacturing-businesses.jpg',
            readMore:
                '/blogs/capex-solar-projects-empowering-manufacturing-businesses',
        },
        {
            date: '2024-06-10',
            title: 'Solar Simplified: A Comprehensive Guide to Turnkey EPC Services in India',
            content:
                'As India embraces renewable energy, solar power stands at the forefront of sustainable solutions. For clients seeking hassle-free solar installations, Turnkey EPC (Engineering, Procurement, and Construction) services offer a streamlined approach.',
            imageUrl: '/blogs/turnkey-epc-services.jpg',
            readMore: '/blogs/turnkey-epc-services',
        },
        {
            date: '2024-06-17',
            title: 'Investing in Tomorrow: How Turnkey EPC Projects Shape India',
            content:
                'India’s trajectory towards becoming an infrastructural powerhouse is increasingly being shaped by the strategic implementation of turnkey Engineering, Procurement, and Construction (EPC) projects. These comprehensive ventures represent a symbiosis of innovation, efficiency, and foresight, where a single entity orchestrates the intricate dance of designing, procuring materials, and constructing large-scale projects.',
            imageUrl: '/blogs/investing-in-tomorrow.jpg',
            readMore: '/blogs/investing-in-tomorrow',
        },
    ]

    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/card/about-2.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <div className="flex flex-row align-items-center justify-between gap-10">
                        <h1 className="display-3 text-white  animated slideInDown">
                            Blogs
                        </h1>
                        <Link href="/blogs/create" className="no-underline">
                            <div className="sm:flex sm:items-end sm:justify-end ">
                                <div className=" flex flex-row rounded-full lg:rounded-xl block bg-[#ffffff] bg-opacity-60 hover:bg-white px-4 lg:px-5 py-3 ">
                                    <Create
                                        fontSize="inherit"
                                        sx={{ color: '#000000' }}
                                    />
                                    <div className=" hidden lg:flex text-center text-sm font-bold  text-gray-900">
                                        Create New blog
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="py-5">
                <div className="">
                    <section>
                        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {articles.map((article, index) => (
                                    <Article
                                        key={index}
                                        date={article.date}
                                        title={article.title}
                                        content={article.content}
                                        imageUrl={article.imageUrl}
                                        readMoreUrl={article.readMore}
                                    />
                                ))}
                            </div>
                        </div>
                        <ol className="flex justify-center gap-1 text-xs font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900">
                                    <span className="sr-only">Prev Page</span>
                                    <NavigateBefore fontSize="small" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="no-underline block size-8 rounded no-underline border-blue-600 bg-theme1-light text-center leading-8 text-white">
                                    1
                                </a>
                            </li>

                            <li className="block size-8 rounded  border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                2
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block size-8 rounded no-underline border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                    3
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block size-8 rounded no-underline border border-gray-100 bg-white text-center leading-8 text-gray-900">
                                    4
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900">
                                    <span className="sr-only">Next Page</span>
                                    <NavigateNext fontSize="small" />
                                </a>
                            </li>
                        </ol>
                    </section>
                </div>
            </div>
        </>
    )
}

const Article: React.FC<ArticleProps> = ({
    date,
    title,
    content,
    imageUrl,
    readMoreUrl,
}) => {
    return (
        <article className="flex rounded-3xl bg-white transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime={date}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                    <span>{new Date(date).getFullYear()}</span>
                    <span className="w-px flex-1 bg-gray-900/10" />
                    <span>
                        {new Date(date).toLocaleString('default', {
                            month: 'short',
                            day: 'numeric',
                        })}
                    </span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <Image
                    alt=""
                    src={imageUrl}
                    width={800}
                    height={800}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#" className="no-underline">
                        <h3 className="font-bold uppercase text-gray-900">
                            {title}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {content}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link
                        href={readMoreUrl}
                        className="no-underline rounded-xl block bg-textSecondary hover:bg-theme2-light mb-2 mr-2 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition ">
                        Read Blog
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Blogs
