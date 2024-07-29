import { Container } from '../index'
import { Link } from 'react-router-dom'

function Categories() {

    let categoriesData = [
        {
            name: "Men",
            slug: "/fasion/men",
            image: "https://edenrobe.com/cdn/shop/collections/22.12.12_edenrobe_Icon_MenSherwani_MOBDSK_320x_crop_center.jpg?v=1716555259"
        },
        {
            name: "Women",
            slug: "/fasion/women",
            image: "https://edenrobe.com/cdn/shop/collections/Icon_4_320x_crop_center.webp?v=1703754757"
        },
        {
            name: "Girls",
            slug: "/fasion/girls",
            image: "https://edenrobe.com/cdn/shop/collections/22.8.15_edenrobe_Icon_GirlsBottoms_MOBDSK_320x_crop_center.jpg?v=1700480425"
        },
        {
            name: "Boys",
            slug: "/fasion/boys",
            image: "https://edenrobe.com/cdn/shop/collections/23.2.18_edenrobe_Icon_boystops_MOBDSK_320x_crop_center.jpg?v=1717594957"
        },
        {
            name: "Changing & Bathing",
            slug: "/baby-products/changing-and-bathing",
            image: "https://cdn.mafrservices.com/sys-master-root/h78/h04/49656073650206/247874_main.jpg?im=Resize=1700?im="
        },
        {
            name: "Feeding Accessories",
            slug: "/baby-products/feeding-accessories",
            image: "https://cdn.mafrservices.com/sys-master-root/hc6/h00/52412748365854/275049_main.jpg?im=Resize=1700?im="
        },
        {
            name: "Cleaning Supplies",
            slug: "/cleaning-and-Household/cleaning-upplies",
            image: "https://cdnprod.mafretailproxy.com/assets/images/Cleaning_and_Household_22adf6d4dd.png"
        },
        {
            name: "Disposable Tableware",
            slug: "/cleaning-and-Household/disposable-tableware",
            image: "https://cdn.mafrservices.com/pim-content/PAK/media/product/276878/276878_main.jpg?im=Resize=1700?im="
        },
        {
            name: "Mobile Accessories",
            slug: "/phone-and-accessories/mobile-accessories",
            image: "https://cdn.mafrservices.com/sys-master-root/h5f/hd2/27631044526110/251486_main.jpg?im=Resize=1700?im="
        },
        {
            name: "Smartphones & Wearables",
            slug: "/phone-and-ccessories/smartphones-and-wearables",
            image: "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_T0R1qrJ9b01Z8UryXDjIpPmao3fTi2TJjV93Tlu0.jpg"
        },

    ]

    return (
        <>
            <Container>
                <div className='border-b-2 pb-2 pt-4  text-3xl font-josefin text-gray-800 '>Categories</div>
                <div className='w-full pt-4 flex justify-center items-center '>
                    <div className='max-w-4xl h-auto flex gap-10  py-4 flex-wrap'>
                        {
                            categoriesData.map((data, k) => (
                                <Link key={k} to={`categories${data.slug}`} className='h-48 w-36 group'>
                                    <div className='h-36 w-36 rounded-xl overflow-hidden flex justify-center items-center '>
                                        <img src={data.image} alt="" className='h-24 cursor-pointer object-contain group-hover:scale-125 duration-200' />
                                    </div >
                                    <div className='h-12 w-36 flex items-center justify-center hover:cursor-pointer '>
                                        <p className='font-thin text-center'>{data.name}</p>
                                    </div >
                                </Link>

                            ))
                        }

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Categories