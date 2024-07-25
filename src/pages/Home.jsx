/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container, ProductCard } from '../components'
import ImageSlider from '../components/main/ImageSlider';
import Categories from '../components/main/Categories';

function Home() {

    let dataAPI = [
        {
            "strategyMessage": "Pantry essentials!",
            "recommendedProducts": [
                {

                    "name": "National Iodized Salt 800 gr",
                    "type": "FOOD",
                    "size": "800g",
                    "price": {
                        "currency": "PKR",
                        "price": 65,
                        "formattedValue": "PKR65.00",
                        "discount": {
                            "price": 47,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR47.00",
                            "value": 28,
                            "minBuyingValue": "47.00"
                        },
                        "minBuyingValue": "65.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd5/h7e/49901976846366/4703_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd5/h7e/49901976846366/4703_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb1/ha4/9839848685598/4703_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb1/ha4/9839848685598/4703_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dalda Fortified Vtf Banaspati Poly Bag 1 lt (Pack of 5)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2415,
                        "formattedValue": "PKR2415.00",
                        "minBuyingValue": "2415.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd4/h49/9921898348574/36441_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd4/h49/9921898348574/36441_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf1/h18/9921897562142/36441_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf1/h18/9921897562142/36441_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h32/h15/9921897693214/36441_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h32/h15/9921897693214/36441_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hcc/h0e/9921897857054/36441_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hcc/h0e/9921897857054/36441_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h64/h0b/9921897955358/36441_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h64/h0b/9921897955358/36441_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6e/h43/9921898184734/36441_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6e/h43/9921898184734/36441_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                        "productUrl": {
                            "href": "/mafpak/en/vegetable-ghee/dalda-banaspati-pouch-1kgx5/p/36441",
                            "rel": "self",
                            "type": "GET",
                            "kind": "product"
                        },
                        "tracking": [
                            {
                                "href": "/api/v2/reporting?trackingUrl=https%3A//recs.richrelevance.com/rrserver/apiclick%3Fa%3D937ea72063db77c2%26cak%3De6ece8ccb94dea8b%26channelId%3De6ece8ccb94dea8b%26vg%3D8eddc5eb-6c47-4aff-e506-a7642d592b4d%26stid%3D1505938%26pti%3D9%26pa%3D51426%26pos%3D1%26p%3D36441%26s%3D301150116383%26u%3D%26rid%3D504-en%26lang%3Den%26mvtId%3D-1%26mvtTs%3D1721030241773",
                                "rel": "tracking",
                                "type": "GET",
                                "kind": "clickTrackingUrl"
                            },
                            {
                                "href": "/api/v2/reporting?trackingUrl=https%3A//recs.richrelevance.com/rrserver/apiclick%3Fa%3D937ea72063db77c2%26cak%3De6ece8ccb94dea8b%26channelId%3De6ece8ccb94dea8b%26vg%3D8eddc5eb-6c47-4aff-e506-a7642d592b4d%26stid%3D1505938%26pti%3D9%26pa%3D51426%26pos%3D1%26p%3D36441%26s%3D301150116383%26u%3D%26rid%3D504-en%26lang%3Den%26mvtId%3D-1%26mvtTs%3D1721030241773",
                                "rel": "tracking",
                                "type": "GET",
                                "kind": "addToCartTrackingUrl"
                            }
                        ],
                        "defaultImages": [
                            "https://cdn.mafrservices.com/sys-master-root/hd4/h49/9921898348574/36441_main.jpg?im=Resize=1700",
                            "https://cdn.mafrservices.com/sys-master-root/hf1/h18/9921897562142/36441_1.jpg?im=Resize=1700",
                            "https://cdn.mafrservices.com/sys-master-root/h32/h15/9921897693214/36441_2.jpg?im=Resize=1700",
                            "https://cdn.mafrservices.com/sys-master-root/hcc/h0e/9921897857054/36441_3.jpg?im=Resize=1700",
                            "https://cdn.mafrservices.com/sys-master-root/h64/h0b/9921897955358/36441_4.jpg?im=Resize=1700",
                            "https://cdn.mafrservices.com/sys-master-root/h6e/h43/9921898184734/36441_5.jpg?im=Resize=1700"
                        ]
                    },
                },
                {
                    "name": "National Refined Salt 800 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 65,
                        "formattedValue": "PKR65.00",
                        "discount": {
                            "price": 47,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR47.00",
                            "value": 28,
                            "minBuyingValue": "47.00"
                        },
                        "minBuyingValue": "65.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h94/h82/49901976977438/4704_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h94/h82/49901976977438/4704_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h81/hab/9839848882206/4704_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h81/hab/9839848882206/4704_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ]
                    },
                },
                {
                    "name": "National Biryani Recipe Mix 78 gr",
                    "type": "FOOD",
                    "size": "90g",
                    "price": {
                        "currency": "PKR",
                        "price": 250,
                        "formattedValue": "PKR250.00",
                        "discount": {
                            "price": 200,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR200.00",
                            "value": 20,
                            "minBuyingValue": "200.00"
                        },
                        "minBuyingValue": "250.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hea/he6/33005159186462/4711_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hea/he6/33005159186462/4711_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Cheetos Flamin Hot 46 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 56,
                        "formattedValue": "PKR56.00",
                        "minBuyingValue": "56.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/279986/279986_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/pim-content/PAK/media/product/279986/279986_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/279986/279986_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/pim-content/PAK/media/product/279986/279986_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lay&#39;s French Cheese Potato Chips 55 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 58,
                        "formattedValue": "PKR58.00",
                        "minBuyingValue": "58.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h14/hfa/33511558348830/257019_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h14/hfa/33511558348830/257019_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h54/hf6/33511558217758/257019_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h54/hf6/33511558217758/257019_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "National Tomato Ketchup 800 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 365,
                        "formattedValue": "PKR365.00",
                        "discount": {
                            "price": 329,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR329.00",
                            "value": 10,
                            "minBuyingValue": "329.00"
                        },
                        "minBuyingValue": "365.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h62/h02/13822357635102/4734_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h62/h02/13822357635102/4734_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h94/h0b/13822357209118/4734_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h94/h0b/13822357209118/4734_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3b/h0e/13822357176350/4734_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3b/h0e/13822357176350/4734_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc4/h04/13822357405726/4734_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc4/h04/13822357405726/4734_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {

                    "name": "National Biryani Recipe Mix 39 gr",
                    "type": "FOOD",
                    "size": "45g",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "discount": {
                            "price": 102,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR102.00",
                            "value": 22,
                            "minBuyingValue": "102.00"
                        },
                        "minBuyingValue": "130.00"
                    },

                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd2/h78/33005158006814/4706_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd2/h78/33005158006814/4706_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Knorr Tomato Ketchup Real Tomatoes 800 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 395,
                        "formattedValue": "PKR395.00",
                        "minBuyingValue": "395.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h49/h7f/50175425675294/271406_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h49/h7f/50175425675294/271406_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfc/h6d/50175425151006/271406_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hfc/h6d/50175425151006/271406_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Young&#39;S Mayonnaise Stand Up Pouch 1 lt",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 580,
                        "formattedValue": "PKR580.00",
                        "discount": {
                            "price": 501,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR501.00",
                            "value": 14,
                            "minBuyingValue": "501.00"
                        },
                        "minBuyingValue": "580.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9d/hcf/9839343861790/20875_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h9d/hcf/9839343861790/20875_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3e/hbe/9839343337502/20875_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3e/hbe/9839343337502/20875_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbc/hc5/9839343599646/20875_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hbc/hc5/9839343599646/20875_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {

                    "name": "Rafhan Dessert Strawberry Jelly 80 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 170,
                        "formattedValue": "PKR170.00",
                        "minBuyingValue": "170.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hba/h1f/49602739699742/42735_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hba/h1f/49602739699742/42735_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3f/h31/9839834791966/42735_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3f/h31/9839834791966/42735_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb7/h85/9839835119646/42735_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb7/h85/9839835119646/42735_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Knorr  Chatt Patta Noodle 200 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 190,
                        "formattedValue": "PKR190.00",
                        "minBuyingValue": "190.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284267/284267_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284267/284267_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lay&#39;s Masala Potato Chips 55 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 58,
                        "formattedValue": "PKR58.00",
                        "minBuyingValue": "58.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc3/h94/33511559594014/257021_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc3/h94/33511559594014/257021_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h82/h98/33511559462942/257021_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h82/h98/33511559462942/257021_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Knorr Noodles Chicken Family (Pack of 6)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 285,
                        "formattedValue": "PKR285.00",
                        "minBuyingValue": "285.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284269/284269_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284269/284269_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Young&rsquo;s Mayonnaise Pouch 500 ml",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 335,
                        "formattedValue": "PKR335.00",
                        "discount": {
                            "price": 288,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR288.00",
                            "value": 14,
                            "minBuyingValue": "288.00"
                        },
                        "minBuyingValue": "335.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha2/h03/9839341895710/20873_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha2/h03/9839341895710/20873_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hef/h14/9839341371422/20873_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hef/h14/9839341371422/20873_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h21/h0b/9839341633566/20873_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h21/h0b/9839341633566/20873_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "National Tomato Ketchup 400 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 210,
                        "formattedValue": "PKR210.00",
                        "discount": {
                            "price": 175,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR175.00",
                            "value": 17,
                            "minBuyingValue": "175.00"
                        },
                        "minBuyingValue": "210.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h92/h66/33150831067166/4732_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h92/h66/33150831067166/4732_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6c/h8b/11680392937502/4732_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6c/h8b/11680392937502/4732_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hae/hf1/11680393822238/4732_6.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hae/hf1/11680393822238/4732_6.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Ganj Sugar 1 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 180,
                        "formattedValue": "PKR180.00",
                        "discount": {
                            "price": 167,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR167.00",
                            "value": 7,
                            "minBuyingValue": "167.00"
                        },
                        "minBuyingValue": "180.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h46/h3d/13832817999902/190882_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h46/h3d/13832817999902/190882_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Aghaaz Cooking Oil Poly Bags 1 lt (Pack of 5)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2350,
                        "formattedValue": "PKR2350.00",
                        "minBuyingValue": "2350.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfc/h18/26929937547294/249433_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hfc/h18/26929937547294/249433_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he8/h63/26929933123614/249433_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he8/h63/26929933123614/249433_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h50/h62/26929936007198/249433_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h50/h62/26929936007198/249433_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "National Karahi Ghosht Recipe Mix 47 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "discount": {
                            "price": 102,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR102.00",
                            "value": 22,
                            "minBuyingValue": "102.00"
                        },
                        "minBuyingValue": "130.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h32/h8a/33005158531102/4709_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h32/h8a/33005158531102/4709_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lay&#39;s Yogurt &amp; Herb Potato Chips 55 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 58,
                        "formattedValue": "PKR58.00",
                        "minBuyingValue": "58.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfe/h6f/52740388192286/257020_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hfe/h6f/52740388192286/257020_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he1/h71/34752000917534/257020_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he1/h71/34752000917534/257020_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Sufi Special Banaspati 1kg (Pack of 5)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2490,
                        "formattedValue": "PKR2490.00",
                        "discount": {
                            "price": 2336,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR2336.00",
                            "value": 6,
                            "minBuyingValue": "2336.00"
                        },
                        "minBuyingValue": "2490.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h95/h10/13296451354654/36073_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h95/h10/13296451354654/36073_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h72/hdd/9921905098782/36073_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h72/hdd/9921905098782/36073_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h81/he3/9921905229854/36073_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h81/he3/9921905229854/36073_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha9/hea/9921905459230/36073_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha9/hea/9921905459230/36073_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h22/hf1/9921905623070/36073_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h22/hf1/9921905623070/36073_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "National Qorma Recipe Mix 86 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 250,
                        "formattedValue": "PKR250.00",
                        "discount": {
                            "price": 200,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR200.00",
                            "value": 20,
                            "minBuyingValue": "200.00"
                        },
                        "minBuyingValue": "250.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h76/h16/33005160890398/4712_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h76/h16/33005160890398/4712_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Rafhan Cornflour 275 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 185,
                        "formattedValue": "PKR185.00",
                        "minBuyingValue": "185.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h39/h27/49602739437598/42773_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h39/h27/49602739437598/42773_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2f/h05/11680443367454/42773_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h2f/h05/11680443367454/42773_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h09/h05/11680443662366/42773_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h09/h05/11680443662366/42773_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h30/h0c/11680443891742/42773_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h30/h0c/11680443891742/42773_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/haa/h5d/11680444153886/42773_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/haa/h5d/11680444153886/42773_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h7a/h64/11680444350494/42773_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h7a/h64/11680444350494/42773_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h39/h68/11680444481566/42773_6.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h39/h68/11680444481566/42773_6.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lay&#39;s Classic Potato Chips 55 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 58,
                        "formattedValue": "PKR58.00",
                        "minBuyingValue": "58.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd1/ha6/33511559004190/257022_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd1/ha6/33511559004190/257022_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4d/hf5/33511558807582/257022_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4d/hf5/33511558807582/257022_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Shangrila Synthetic Vinegar 800 ml",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 200,
                        "formattedValue": "PKR200.00",
                        "discount": {
                            "price": 166,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR166.00",
                            "value": 17,
                            "minBuyingValue": "166.00"
                        },
                        "minBuyingValue": "200.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h77/h2d/47473331929118/62901_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h77/h2d/47473331929118/62901_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1d/h73/9897182560286/62901_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h1d/h73/9897182560286/62901_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/heb/h7c/9897182822430/62901_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/heb/h7c/9897182822430/62901_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h26/hcf/9897183150110/62901_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h26/hcf/9897183150110/62901_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3a/hd6/9897183379486/62901_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3a/hd6/9897183379486/62901_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Sunridge Chakki Atta (Wheat Flour) 5 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 780,
                        "formattedValue": "PKR780.00",
                        "discount": {
                            "price": 726,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR726.00",
                            "value": 7,
                            "minBuyingValue": "726.00"
                        },
                        "minBuyingValue": "780.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf2/h2a/12198138937374/234285_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf2/h2a/12198138937374/234285_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h81/h35/12198138609694/234285_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h81/h35/12198138609694/234285_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Knorr Chicken Soup Cube 18 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 74,
                        "formattedValue": "PKR74.00",
                        "minBuyingValue": "74.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h36/h2b/49602633138206/230320_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h36/h2b/49602633138206/230320_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h03/h94/49602631729182/230320_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h03/h94/49602631729182/230320_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc5/hfb/13821973397534/230320_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc5/hfb/13821973397534/230320_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2d/hff/13821973495838/230320_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h2d/hff/13821973495838/230320_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Shangrila Tomato Ketchup Economy Pack 800 gr",
                    "type": "FOOD",
                    "size": "800 gr",
                    "price": {
                        "currency": "PKR",
                        "price": 391,
                        "formattedValue": "PKR391.00",
                        "discount": {
                            "price": 340,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR340.00",
                            "value": 13,
                            "minBuyingValue": "340.00"
                        },
                        "minBuyingValue": "391.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1c/h21/47040588054558/4925_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h1c/h21/47040588054558/4925_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h12/hd2/9897370910750/4925_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h12/hd2/9897370910750/4925_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he8/h82/9897371172894/4925_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he8/h82/9897371172894/4925_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h08/h76/9897371500574/4925_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h08/h76/9897371500574/4925_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h49/h72/9897371631646/4925_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h49/h72/9897371631646/4925_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Shan Special Bombay Biryani 130 gr",
                    "type": "FOOD",
                    "size": "120g",
                    "price": {
                        "currency": "PKR",
                        "price": 250,
                        "formattedValue": "PKR250.00",
                        "discount": {
                            "price": 209,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR209.00",
                            "value": 16,
                            "minBuyingValue": "209.00"
                        },
                        "minBuyingValue": "250.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h77/hc9/9839490859038/30453_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h77/hc9/9839490859038/30453_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha9/hbf/9839490596894/30453_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha9/hbf/9839490596894/30453_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Shan Shoop Instant Chattpata Noodles 65 gr (Pack of 4)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 260,
                        "formattedValue": "PKR260.00",
                        "discount": {
                            "price": 187,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR187.00",
                            "value": 28,
                            "minBuyingValue": "187.00"
                        },
                        "minBuyingValue": "260.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/heb/hda/45953697185822/231219_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/heb/hda/45953697185822/231219_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4c/h0a/12640102219806/231219_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4c/h0a/12640102219806/231219_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hdb/h14/12640102547486/231219_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hdb/h14/12640102547486/231219_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hac/h1b/12640102744094/231219_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hac/h1b/12640102744094/231219_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Rafhan Dessert Banana Jelly 80 gr",
                    "type": "FOOD",
                    "size": "80g",
                    "price": {
                        "currency": "PKR",
                        "price": 169,
                        "formattedValue": "PKR169.00",
                        "minBuyingValue": "169.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha1/h2a/49602739339294/42736_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha1/h2a/49602739339294/42736_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h61/h18/9839834005534/42736_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h61/h18/9839834005534/42736_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hdf/h1f/9839834267678/42736_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hdf/h1f/9839834267678/42736_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Ganj Sugar 2 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 360,
                        "formattedValue": "PKR360.00",
                        "discount": {
                            "price": 334,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR334.00",
                            "value": 7,
                            "minBuyingValue": "334.00"
                        },
                        "minBuyingValue": "360.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h31/he5/28692153368606/190883_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h31/he5/28692153368606/190883_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Ganj Sugar 5 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 890,
                        "formattedValue": "PKR890.00",
                        "discount": {
                            "price": 836,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR836.00",
                            "value": 6,
                            "minBuyingValue": "836.00"
                        },
                        "minBuyingValue": "890.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h65/h3f/13821816766494/190885_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h65/h3f/13821816766494/190885_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Mezan Cooking Oil Pillow Pouche 1 lt (Pack of 5)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2675,
                        "formattedValue": "PKR2675.00",
                        "discount": {
                            "price": 2347,
                            "endDate": "7/16/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR2347.00",
                            "value": 12,
                            "minBuyingValue": "2347.00"
                        },
                        "minBuyingValue": "2675.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb3/hf2/9839682355230/117636_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb3/hf2/9839682355230/117636_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb5/ha3/9839681372190/117636_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb5/ha3/9839681372190/117636_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h83/had/9839681634334/117636_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h83/had/9839681634334/117636_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h01/hb5/9839681896478/117636_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h01/hb5/9839681896478/117636_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hdb/hf9/9839682125854/117636_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hdb/hf9/9839682125854/117636_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                }
            ]
        },
        {
            "strategyMessage": "Top Deals",
            "recommendedProducts": [
                {
                    "name": "Nestle Bunyad powder milk 900 gr",
                    "type": "FOOD",
                    "size": "910g",
                    "price": {
                        "currency": "PKR",
                        "price": 1640,
                        "formattedValue": "PKR1640.00",
                        "discount": {
                            "price": 1455,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR1455.00",
                            "value": 11,
                            "minBuyingValue": "1455.00"
                        },
                        "minBuyingValue": "1640.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc3/h79/44555560910878/160556_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc3/h79/44555560910878/160556_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0a/h77/44555560878110/160556_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h0a/h77/44555560878110/160556_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd7/h3b/9839977201694/160556_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd7/h3b/9839977201694/160556_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/haf/h34/9839977431070/160556_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/haf/h34/9839977431070/160556_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Surf Excel Washing Powder Care 500 Gr.",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 299,
                        "formattedValue": "PKR299.00",
                        "minBuyingValue": "299.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h36/hf0/49602740420638/42853_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h36/hf0/49602740420638/42853_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbd/he9/49602740256798/42853_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hbd/he9/49602740256798/42853_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Nestle Everyday Powder Tea Whitener 850 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1950,
                        "formattedValue": "PKR1950.00",
                        "discount": {
                            "price": 1794,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR1794.00",
                            "value": 8,
                            "minBuyingValue": "1794.00"
                        },
                        "minBuyingValue": "1950.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h68/h85/28692154089502/38355_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h68/h85/28692154089502/38355_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h7c/h47/12640653082654/38355_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h7c/h47/12640653082654/38355_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf3/h50/12640653312030/38355_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf3/h50/12640653312030/38355_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha1/h51/12640653377566/38355_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha1/h51/12640653377566/38355_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Surf Excel Washing Powder 1 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 599,
                        "formattedValue": "PKR599.00",
                        "minBuyingValue": "599.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h43/h16/49602739929118/42851_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h43/h16/49602739929118/42851_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha9/h1c/49602739765278/42851_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha9/h1c/49602739765278/42851_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Nestle Nido Growth 900 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2190,
                        "formattedValue": "PKR2190.00",
                        "discount": {
                            "price": 1961,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR1961.00",
                            "value": 10,
                            "minBuyingValue": "1961.00"
                        },
                        "minBuyingValue": "2190.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb7/hdb/48032535412766/178653_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb7/hdb/48032535412766/178653_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc6/he1/48032535281694/178653_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc6/he1/48032535281694/178653_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Velvet Glow Jasmine &amp; Vitamin C, Glycerin Soap 3 in 1 Pack",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 360,
                        "formattedValue": "PKR360.00",
                        "minBuyingValue": "360.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hea/h24/62251292131358/143541_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hea/h24/62251292131358/143541_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h35/h8d/9839638183966/143541_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h35/h8d/9839638183966/143541_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h66/h83/9839638446110/143541_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h66/h83/9839638446110/143541_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha7/h7f/9839638577182/143541_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/ha7/h7f/9839638577182/143541_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd9/h75/9839638839326/143541_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd9/h75/9839638839326/143541_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Max Lemon Bar 270 gr (Pack of 2)",
                    "type": "FOOD",
                    "size": "540g",
                    "price": {
                        "currency": "PKR",
                        "price": 150,
                        "formattedValue": "PKR150.00",
                        "discount": {
                            "price": 127,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR127.00",
                            "value": 15,
                            "minBuyingValue": "127.00"
                        },
                        "minBuyingValue": "150.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h97/h4e/9839672852510/159497_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h97/h4e/9839672852510/159497_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf7/h40/9839672459294/159497_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf7/h40/9839672459294/159497_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd8/h4a/9839672721438/159497_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd8/h4a/9839672721438/159497_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Ariel Downy Detergent 900 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 599,
                        "formattedValue": "PKR599.00",
                        "discount": {
                            "price": 561,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR561.00",
                            "value": 6,
                            "minBuyingValue": "561.00"
                        },
                        "minBuyingValue": "599.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h54/hf0/49728164102174/189378_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h54/hf0/49728164102174/189378_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h60/hfe/11674911539230/189378_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h60/hfe/11674911539230/189378_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h90/hf7/11674911735838/189378_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h90/hf7/11674911735838/189378_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h11/hf0/11674911997982/189378_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h11/hf0/11674911997982/189378_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h86/h9b/11674912325662/189378_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h86/h9b/11674912325662/189378_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h08/h94/11674912587806/189378_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h08/h94/11674912587806/189378_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h37/h8d/11674912784414/189378_6.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h37/h8d/11674912784414/189378_6.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Soft Touch Soap Bar 145 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 360,
                        "formattedValue": "PKR360.00",
                        "minBuyingValue": "360.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hca/ha6/48727956717598/192005_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hca/ha6/48727956717598/192005_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/h0e/27844317118494/192005_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h9f/h0e/27844317118494/192005_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0a/h0f/27844317151262/192005_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h0a/h0f/27844317151262/192005_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Bonus Tristar Powder 1 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 230,
                        "formattedValue": "PKR230.00",
                        "discount": {
                            "price": 206,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR206.00",
                            "value": 10,
                            "minBuyingValue": "206.00"
                        },
                        "minBuyingValue": "230.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h23/h5f/12367557754910/37892_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h23/h5f/12367557754910/37892_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc5/hc7/9839539716126/37892_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc5/hc7/9839539716126/37892_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h44/hcf/9839539978270/37892_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h44/hcf/9839539978270/37892_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lipton Yellow Label Loose Black Tea 430 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1200,
                        "formattedValue": "PKR1200.00",
                        "minBuyingValue": "1200.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h16/h0d/47040588611614/42717_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h16/h0d/47040588611614/42717_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Sufi Sun Flower Cooking Oil Pouch 1 lt",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 546,
                        "formattedValue": "PKR546.00",
                        "discount": {
                            "price": 508,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR508.00",
                            "value": 7,
                            "minBuyingValue": "508.00"
                        },
                        "minBuyingValue": "546.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb6/hca/14159079112734/36092_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb6/hca/14159079112734/36092_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd2/hb8/9897074327582/36092_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd2/hb8/9897074327582/36092_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Brite Maximum Power 1 kg",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 580,
                        "formattedValue": "PKR580.00",
                        "discount": {
                            "price": 531,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR531.00",
                            "value": 8,
                            "minBuyingValue": "531.00"
                        },
                        "minBuyingValue": "580.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hca/h73/11680509984798/37882_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hca/h73/11680509984798/37882_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb8/h14/11680508084254/37882_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb8/h14/11680508084254/37882_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he8/h0d/11680508280862/37882_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he8/h0d/11680508280862/37882_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1a/h04/11680508543006/37882_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h1a/h04/11680508543006/37882_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb4/h05/11680508805150/37882_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hb4/h05/11680508805150/37882_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hdd/h54/11680509067294/37882_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hdd/h54/11680509067294/37882_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h45/h58/11680509165598/37882_6.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h45/h58/11680509165598/37882_6.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h7e/h62/11680509460510/37882_7.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h7e/h62/11680509460510/37882_7.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4c/h6c/11680509722654/37882_8.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4c/h6c/11680509722654/37882_8.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Velvet Touch Jasmine &amp; Almond Oil Soap 98 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 310,
                        "formattedValue": "PKR310.00",
                        "minBuyingValue": "310.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h53/h2f/49602620653598/107209_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h53/h2f/49602620653598/107209_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3f/he9/13039040921630/107209_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3f/he9/13039040921630/107209_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc0/hcb/13039041019934/107209_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc0/hcb/13039041019934/107209_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfe/hca/13039041085470/107209_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hfe/hca/13039041085470/107209_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1f/hbe/13039041413150/107209_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h1f/hbe/13039041413150/107209_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h71/hbd/13039041478686/107209_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h71/hbd/13039041478686/107209_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dalda Fortified Cooking Oil 3 lt",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1670,
                        "formattedValue": "PKR1670.00",
                        "discount": {
                            "price": 1575,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR1575.00",
                            "value": 6,
                            "minBuyingValue": "1575.00"
                        },
                        "minBuyingValue": "1670.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h85/h89/9839442165790/36446_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h85/h89/9839442165790/36446_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h8f/he5/9839441575966/36446_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h8f/he5/9839441575966/36446_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc0/hdb/9839441838110/36446_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hc0/hdb/9839441838110/36446_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                }
            ]
        },
        {
            "strategyMessage": "Beauty & Personal Care Top Sellers",
            "recommendedProducts": [
                {
                    "name": "Palmolive 5-In-1 Refreshing Glow Naturals Bar Soap 98 gr (Pack of 5)",
                    "type": "FOOD",
                    "size": "5G x100",
                    "price": {
                        "currency": "PKR",
                        "price": 475,
                        "formattedValue": "PKR475.00",
                        "discount": {
                            "price": 435,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR435.00",
                            "value": 8,
                            "minBuyingValue": "435.00"
                        },
                        "minBuyingValue": "475.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h84/h3a/14250680844318/241631_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h84/h3a/14250680844318/241631_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h55/h86/14250638802974/241631_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h55/h86/14250638802974/241631_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6a/h91/14250652467230/241631_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6a/h91/14250652467230/241631_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h49/h98/14250667147294/241631_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h49/h98/14250667147294/241631_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Radiant Glow Soap 130 gr (Pack of 3)",
                    "type": "FOOD",
                    "size": "130 gr (Pack of 3)",
                    "price": {
                        "currency": "PKR",
                        "price": 364,
                        "formattedValue": "PKR364.00",
                        "discount": {
                            "price": 328,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR328.00",
                            "value": 10,
                            "minBuyingValue": "328.00"
                        },
                        "minBuyingValue": "364.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hac/h51/14074966212638/241629_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hac/h51/14074966212638/241629_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Velvet Glow Jasmine 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "minBuyingValue": "130.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0b/h8d/49602636447774/245518_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h0b/h8d/49602636447774/245518_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd6/hd8/27450891173918/245518_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd6/hd8/27450891173918/245518_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Rose Glow 128 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "minBuyingValue": "130.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h98/h9a/49602636054558/245519_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h98/h9a/49602636054558/245519_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3b/he5/26432236716062/245519_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3b/he5/26432236716062/245519_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Soap 3 in 1",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 365,
                        "formattedValue": "PKR365.00",
                        "minBuyingValue": "365.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/223502/223502_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/pim-content/PAK/media/product/223502/223502_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h03/h29/46478459174942/223502_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h03/h29/46478459174942/223502_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Nourished Glow Lotus 128 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "minBuyingValue": "130.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3b/hf0/49602635628574/245520_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3b/hf0/49602635628574/245520_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hce/h2c/27133332520990/245520_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hce/h2c/27133332520990/245520_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Cool Odour Protection Antibacterial Soap 130 gr (Pack of 4)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 560,
                        "formattedValue": "PKR560.00",
                        "minBuyingValue": "560.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h19/h4f/27713865678878/244445_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h19/h4f/27713865678878/244445_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbe/hee/26432223838238/244445_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hbe/hee/26432223838238/244445_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Capri Moisturising Honey And Milk Protein Soap Yellow 150 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 435,
                        "formattedValue": "PKR435.00",
                        "discount": {
                            "price": 359,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR359.00",
                            "value": 17,
                            "minBuyingValue": "359.00"
                        },
                        "minBuyingValue": "435.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h25/h7c/14491778285598/238959_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h25/h7c/14491778285598/238959_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf9/hb8/14066102927390/238959_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf9/hb8/14066102927390/238959_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4a/he7/14066114854942/238959_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4a/he7/14066114854942/238959_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Fresh Glow Water Lily Scent 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 130,
                        "formattedValue": "PKR130.00",
                        "minBuyingValue": "130.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0a/hfa/49602635366430/245521_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h0a/hfa/49602635366430/245521_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he3/h2e/27133331963934/245521_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he3/h2e/27133331963934/245521_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Original Antibacterial Bar Soap 130 gr (Pack of 4)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 560,
                        "formattedValue": "PKR560.00",
                        "minBuyingValue": "560.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h38/haf/27713864925214/237394_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h38/haf/27713864925214/237394_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he0/h24/13822310514718/237394_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he0/h24/13822310514718/237394_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h62/h1d/13822310776862/237394_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h62/h1d/13822310776862/237394_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Refreshing Glow Citrus Soap 98 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 277,
                        "formattedValue": "PKR277.00",
                        "discount": {
                            "price": 251,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR251.00",
                            "value": 9,
                            "minBuyingValue": "251.00"
                        },
                        "minBuyingValue": "277.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfa/ha6/27082847223838/241630_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hfa/ha6/27082847223838/241630_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h53/ha4/27082847191070/241630_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h53/ha4/27082847191070/241630_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Flawless Glow Soap 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 128,
                        "formattedValue": "PKR128.00",
                        "discount": {
                            "price": 117,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR117.00",
                            "value": 9,
                            "minBuyingValue": "117.00"
                        },
                        "minBuyingValue": "128.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2b/h59/14074966474782/241628_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h2b/h59/14074966474782/241628_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Colgate Maximun Cavity Protection Toothpaste 150 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 300,
                        "formattedValue": "PKR300.00",
                        "minBuyingValue": "300.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf9/h8c/50949727846430/37938_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf9/h8c/50949727846430/37938_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4d/h89/9839515402270/37938_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4d/h89/9839515402270/37938_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Natural Moisture Care Soap 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 128,
                        "formattedValue": "PKR128.00",
                        "discount": {
                            "price": 117,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR117.00",
                            "value": 9,
                            "minBuyingValue": "117.00"
                        },
                        "minBuyingValue": "128.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6a/h58/14074966409246/241627_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6a/h58/14074966409246/241627_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Velvet Glow Jasmine 98 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 110,
                        "formattedValue": "PKR110.00",
                        "minBuyingValue": "110.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hef/hf0/49602737700894/245524_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hef/hf0/49602737700894/245524_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h85/hc9/47245222608926/245524_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h85/hc9/47245222608926/245524_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dove Original Soap 135 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 430,
                        "formattedValue": "PKR430.00",
                        "minBuyingValue": "430.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he9/h1e/14074973159454/67151_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he9/h1e/14074973159454/67151_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Antibacterial Bar Soap 170 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 530,
                        "formattedValue": "PKR530.00",
                        "minBuyingValue": "530.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf8/hcf/49512297332766/262773_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf8/hcf/49512297332766/262773_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h09/hd3/49512297267230/262773_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h09/hd3/49512297267230/262773_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Care Trio 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 330,
                        "formattedValue": "PKR330.00",
                        "minBuyingValue": "330.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h77/h56/14074953793566/209298_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h77/h56/14074953793566/209298_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Refreshing Moisture With Citrus&nbsp; Cream Soap 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 128,
                        "formattedValue": "PKR128.00",
                        "discount": {
                            "price": 117,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR117.00",
                            "value": 9,
                            "minBuyingValue": "117.00"
                        },
                        "minBuyingValue": "128.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/hce/14085591728158/241625_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h9f/hce/14085591728158/241625_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6e/hd8/14085591466014/241625_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6e/hd8/14085591466014/241625_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h5d/hd5/14085591531550/241625_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h5d/hd5/14085591531550/241625_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Rose Glow Rose 98 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 100,
                        "formattedValue": "PKR100.00",
                        "minBuyingValue": "100.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbf/hf7/49602737504286/245525_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hbf/hf7/49602737504286/245525_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Nature 100 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 95,
                        "formattedValue": "PKR95.00",
                        "minBuyingValue": "95.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hff/hb3/27133330161694/245400_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hff/hb3/27133330161694/245400_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/had/h4c/27133329899550/245400_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/had/h4c/27133329899550/245400_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Nature 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 115,
                        "formattedValue": "PKR115.00",
                        "minBuyingValue": "115.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h95/ha9/49602634743838/245516_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h95/ha9/49602634743838/245516_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1b/ha3/49602634579998/245516_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h1b/ha3/49602634579998/245516_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3e/ha9/49602634711070/245516_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h3e/ha9/49602634711070/245516_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive White With Natural Milk Naturals Soap 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 128,
                        "formattedValue": "PKR128.00",
                        "discount": {
                            "price": 117,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR117.00",
                            "value": 9,
                            "minBuyingValue": "117.00"
                        },
                        "minBuyingValue": "128.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h7e/hba/16703523061790/241624_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h7e/hba/16703523061790/241624_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Nourished Glow Lotus 98 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 110,
                        "formattedValue": "PKR110.00",
                        "minBuyingValue": "110.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd0/hfb/49602635071518/245522_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd0/hfb/49602635071518/245522_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h70/h3c/27133331570718/245522_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h70/h3c/27133331570718/245522_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Safeguard Pure White Antibacterial Soap Jumbo Size 175 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 555,
                        "formattedValue": "PKR555.00",
                        "discount": {
                            "price": 527,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR527.00",
                            "value": 5,
                            "minBuyingValue": "527.00"
                        },
                        "minBuyingValue": "555.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h60/haf/12179640746014/226887_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h60/haf/12179640746014/226887_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd4/h60/12179639992350/226887_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd4/h60/12179639992350/226887_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h13/h9e/12179640221726/226887_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h13/h9e/12179640221726/226887_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd0/ha4/12179640418334/226887_3.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd0/ha4/12179640418334/226887_3.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hee/hc3/10223872016414/226887_4.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hee/hc3/10223872016414/226887_4.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h56/hee/10223871885342/226887_5.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h56/hee/10223871885342/226887_5.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd8/he6/10223871623198/226887_6.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hd8/he6/10223871623198/226887_6.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Naturals Radiant Glow Soap 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 128,
                        "formattedValue": "PKR128.00",
                        "discount": {
                            "price": 117,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR117.00",
                            "value": 9,
                            "minBuyingValue": "117.00"
                        },
                        "minBuyingValue": "128.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he0/hca/14085591859230/241626_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he0/hca/14085591859230/241626_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Total 130 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 115,
                        "formattedValue": "PKR115.00",
                        "minBuyingValue": "115.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0e/hfb/49602635005982/245514_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h0e/hfb/49602635005982/245514_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6e/ha2/49602634514462/245514_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h6e/ha2/49602634514462/245514_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2d/ha6/49602634645534/245514_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h2d/ha6/49602634645534/245514_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Care 98 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 95,
                        "formattedValue": "PKR95.00",
                        "minBuyingValue": "95.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h66/hfb/49602635038750/245399_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h66/hfb/49602635038750/245399_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/heb/h1a/26432233996318/245399_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/heb/h1a/26432233996318/245399_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h93/hac/49602634809374/245399_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h93/hac/49602634809374/245399_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Savannah Classic Beauty Soap 125 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 120,
                        "formattedValue": "PKR120.00",
                        "discount": {
                            "price": 102,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR102.00",
                            "value": 15,
                            "minBuyingValue": "102.00"
                        },
                        "minBuyingValue": "120.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h27/h23/33511556251678/256863_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h27/h23/33511556251678/256863_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h68/h1f/33511556120606/256863_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h68/h1f/33511556120606/256863_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Embrace Maxi Essentials 16 Pads",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 600,
                        "formattedValue": "PKR600.00",
                        "discount": {
                            "price": 451,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR451.00",
                            "value": 25,
                            "minBuyingValue": "451.00"
                        },
                        "minBuyingValue": "600.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h64/he0/49835466260510/267101_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h64/he0/49835466260510/267101_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h93/hd9/49835466063902/267101_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h93/hd9/49835466063902/267101_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h52/hdd/49835466194974/267101_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h52/hdd/49835466194974/267101_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Natural Moisturizing Glow with Chamomile+ Vitamin E 165 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 165,
                        "formattedValue": "PKR165.00",
                        "discount": {
                            "price": 150,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR150.00",
                            "value": 9,
                            "minBuyingValue": "150.00"
                        },
                        "minBuyingValue": "165.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h89/h8e/11678174248990/230001_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h89/h8e/11678174248990/230001_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h03/he0/11678173986846/230001_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h03/he0/11678173986846/230001_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Palmolive Naturals Radiant Glow with Milk + Rose Petals 165 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 165,
                        "formattedValue": "PKR165.00",
                        "discount": {
                            "price": 150,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR150.00",
                            "value": 9,
                            "minBuyingValue": "150.00"
                        },
                        "minBuyingValue": "165.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h81/he7/11678173724702/230002_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h81/he7/11678173724702/230002_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hce/hf8/11678173200414/230002_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hce/hf8/11678173200414/230002_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4f/hf1/11678173462558/230002_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h4f/hf1/11678173462558/230002_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Cool Soap 85 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 370,
                        "formattedValue": "PKR370.00",
                        "minBuyingValue": "370.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h67/h84/26432224886814/244444_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/h67/h84/26432224886814/244444_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf4/h91/26432224493598/244444_1.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/hf4/h91/26432224493598/244444_1.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he5/h8b/26432224624670/244444_2.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he5/h8b/26432224624670/244444_2.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Liquid Active Fresh 1 lt",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 800,
                        "formattedValue": "PKR800.00",
                        "minBuyingValue": "800.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/he5/h2c/49602624552990/183389_main.jpg?im=Resize=200",
                                "type": "GET",
                                "kind": "image",
                                "properties": {
                                    "format": "plpThumbnail",
                                    "url": "https://cdn.mafrservices.com/sys-master-root/he5/h2c/49602624552990/183389_main.jpg?im=Resize=200",
                                    "imageType": "GALLERY"
                                }
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Original Antibacterial Bar Soap 85 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 370,
                        "formattedValue": "PKR370.00",
                        "minBuyingValue": "370.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h18/h34/13822311039006/237391_main.jpg?im=Resize=200",

                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1f/h24/13822310580254/237391_1.jpg?im=Resize=200",

                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h53/h17/13822310907934/237391_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Total 98 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 95,
                        "formattedValue": "PKR95.00",
                        "minBuyingValue": "95.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hef/h9a/49602636021790/245401_main.jpg?im=Resize=200",

                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h53/h43/49602633859102/245401_1.jpg?im=Resize=200",

                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h64/h46/49602633924638/245401_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Always Maxi Thick Extra Long 26 pcs",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1315,
                        "formattedValue": "PKR1315.00",
                        "discount": {
                            "price": 1171,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR1171.00",
                            "value": 11,
                            "minBuyingValue": "1171.00"
                        },
                        "minBuyingValue": "1315.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h5d/hd0/12639887917086/182951_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h5e/h63/12639886835742/182951_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf0/hb5/12639887196190/182951_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha0/hc9/12639887720478/182951_3.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2a/h6d/10753690566686/182951_4.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd5/hd4/46045497393182/182951_5.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Safeguard Pure White Antibacterial Soap Jumbo Size 175 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 190,
                        "formattedValue": "PKR190.00",
                        "discount": {
                            "price": 174,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR174.00",
                            "value": 8,
                            "minBuyingValue": "174.00"
                        },
                        "minBuyingValue": "190.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h04/h98/12179640090654/226886_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3c/h64/12179639894046/226886_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2f/hc0/10223872147486/226886_2.jpg?im=Resize=200",
                                "type": "GET",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h67/hf1/10223871950878/226886_3.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h40/hea/10223871721502/226886_4.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc9/he0/10223871492126/226886_5.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/hdc/10223871328286/226886_6.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Soap Lemon Fresh 100 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 95,
                        "formattedValue": "PKR95.00",
                        "minBuyingValue": "95.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/245402/245402_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hce/hfe/49602635137054/245402_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf9/hf6/49602635431966/245402_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Safeguard Pure White Soap 125 gr (Pack of 3)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 435,
                        "formattedValue": "PKR435.00",
                        "discount": {
                            "price": 415,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR415.00",
                            "value": 5,
                            "minBuyingValue": "415.00"
                        },
                        "minBuyingValue": "435.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h51/h28/9839838724126/203421_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hf0/h38/9839838265374/203421_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h20/h32/9839838461982/203421_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Lux Allure Bar Nourished Glow 100 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 165,
                        "formattedValue": "PKR165.00",
                        "minBuyingValue": "165.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h58/he7/62496191283230/277549_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Savannah Bright &amp; Beautiful Beauty Bar 125 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 110,
                        "formattedValue": "PKR110.00",
                        "discount": {
                            "price": 95,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR95.00",
                            "value": 14,
                            "minBuyingValue": "95.00"
                        },
                        "minBuyingValue": "110.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc5/h33/33511556710430/256869_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha3/h2d/33511556579358/256869_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Dettol Skin Care Soap 130 gr (Pack of 4)",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 560,
                        "formattedValue": "PKR560.00",
                        "minBuyingValue": "560.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/hb5/27713864761374/237396_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h63/h8b/26929320624158/237396_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Total Protect Soap 162 gr",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 140,
                        "formattedValue": "PKR140.00",
                        "minBuyingValue": "140.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hfa/hcc/61746412290078/277547_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h91/hc9/61746412191774/277547_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                    "isRecommendable": true
                },
                {
                    "name": "Lifebuoy Germ Protection Hand Wash 170 ml",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 160,
                        "formattedValue": "PKR160.00",
                        "minBuyingValue": "160.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hcf/hc9/46478871134238/261543_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h79/h5c/46478870020126/261543_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Lifebuoy Hand Wash Mild Care 450 ml",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 430,
                        "formattedValue": "PKR430.00",
                        "minBuyingValue": "430.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h13/h2d/49602632679454/228303_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h01/h97/49602631663646/228303_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h33/h8d/49602631925790/228303_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6b/hc3/11693745864734/228303_3.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/h8e/11678080237598/228303_4.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h20/h87/11678080499742/228303_5.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h03/hc0/11693745963038/228303_6.jpg?im=Resize=200",
                            }
                        ],
                    },
                    "isRecommendable": true
                },
                {
                    "name": "Always Maxi Thick Extra Long Value Pack ",
                    "type": "FOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 820,
                        "formattedValue": "PKR820.00",
                        "discount": {
                            "price": 740,
                            "endDate": "7/19/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR740.00",
                            "value": 10,
                            "minBuyingValue": "740.00"
                        },
                        "minBuyingValue": "820.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9b/h2f/46437870141470/111807_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4d/h39/10223879782430/111807_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h24/h35/10223879618590/111807_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbe/h2e/10223879454750/111807_3.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h56/h2b/10223879356446/111807_4.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hea/h9a/46045502275614/111807_5.jpg?im=Resize=200",
                            }
                        ],
                    },
                }
            ]
        },
        {
            "strategyMessage": "Top Sellers from Samsung",
            "recommendedProducts": [
                {
                    "name": "Samsung UHD 4K TV CU7000 55 Inch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 165000,
                        "formattedValue": "PKR165000.00",
                        "discount": {
                            "price": 154999,
                            "endDate": "7/17/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR154999.00",
                            "value": 6,
                            "minBuyingValue": "154999.00"
                        },
                        "minBuyingValue": "165000.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h13/h17/51758750269470/274641_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h6f/hde/51758749614110/274641_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hee/he5/51758749876254/274641_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Samsung UHD 4K TV CU7000 65 Inch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 220000,
                        "formattedValue": "PKR220000.00",
                        "discount": {
                            "price": 199999,
                            "endDate": "7/17/2024, 6:59:00 PM",
                            "type": "percentage",
                            "formattedValue": "PKR199999.00",
                            "value": 9,
                            "minBuyingValue": "199999.00"
                        },
                        "minBuyingValue": "220000.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc7/h71/51758748565534/274640_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h78/h63/51758748106782/274640_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb6/h6e/51758748499998/274640_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Samsung UHD 4K TV CU7000 50 Inch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 142500,
                        "formattedValue": "PKR142500.00",
                        "minBuyingValue": "142500.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/hd7/51758749417502/274642_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h55/h7f/51758748958750/274642_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/ha1/hd4/51758749351966/274642_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Samsung UHD 4K TV CU7000 43 Inch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 109500,
                        "formattedValue": "PKR109500.00",
                        "minBuyingValue": "109500.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd9/hbd/51758745976862/274102_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h26/hcf/51758745452574/274102_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h87/hbe/51758745911326/274102_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                    "isRecommendable": true
                },
                {
                    "name": "Samasung QLED 4K Q70C TV 55 Inch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 284999,
                        "formattedValue": "PKR284999.00",
                        "minBuyingValue": "284999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hff/h11/51758747844638/274633_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h09/h01/51758747353118/274633_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h2f/h0b/51758747648030/274633_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                }
            ]
        },
        {
            "strategyMessage": "Packed With Features",
            "recommendedProducts": [
                {
                    "name": "Tecno Spark Go 2024 Smartphone 4GB RAM 64GB ROM Mystery White",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 21999,
                        "formattedValue": "PKR21999.00",
                        "minBuyingValue": "21999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h22/h9c/61765020581918/279272_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Vivo Y03 Smartphone 64GB RAM 4GB ROM Gem Green",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 24999,
                        "formattedValue": "PKR24999.00",
                        "minBuyingValue": "24999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/282369/282369_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Tecno Pova 5 Pro Samrtphone 8GB RAM 256GB ROM Dark Illusion",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 46999,
                        "formattedValue": "PKR46999.00",
                        "minBuyingValue": "46999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h3a/hfe/61765021302814/279285_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Vivo Y03 Smartphone 64GB RAM 4GB ROM Gem Green",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 24999,
                        "formattedValue": "PKR24999.00",
                        "minBuyingValue": "24999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/282368/282368_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "YOLO Fortuner Pro The Next Big Thing Smart Watch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 8499,
                        "formattedValue": "PKR8499.00",
                        "minBuyingValue": "8499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h25/h89/49707200151582/268444_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hae/hfd/49707198840862/268444_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h45/haf/49707199037470/268444_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Vivo Y100 Smartphone 256GB ROM 8GB RAM Crystal Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 59999,
                        "formattedValue": "PKR59999.00",
                        "minBuyingValue": "59999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284333/1717959604/284333_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284333/1717959604/284333_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284333/1717959604/284333_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Audionic Airbuds 4",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 2999,
                        "formattedValue": "PKR2999.00",
                        "minBuyingValue": "2999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/248343/248343_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "YOLO Thunder Sleek. Seamless. Iconic Class that stands apart Smart Watch",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 6999,
                        "formattedValue": "PKR6999.00",
                        "minBuyingValue": "6999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/heb/hd6/49707266342942/268442_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h36/h8c/49707200086046/268442_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h9f/h81/49707265949726/268442_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Sparx Neo 7 Ultra Smartphone 6GB RAM 128GB ROM Luxury Gold",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 25499,
                        "formattedValue": "PKR25499.00",
                        "minBuyingValue": "25499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h19/h22/52005218680862/277462_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Sparx Edge 20 Pro Smartphomr 8GB RAM 256GB ROM Twilight Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 52499,
                        "formattedValue": "PKR52499.00",
                        "minBuyingValue": "52499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h19/ha6/61765025366046/279963_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "SMART WATCH ISW 31 ITEL",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 8999,
                        "formattedValue": "PKR8999.00",
                        "minBuyingValue": "8999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h4d/ha1/49707199463454/268102_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h40/hff/49707198775326/268102_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Zero Wave Z Earbuds Brown",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 4249,
                        "formattedValue": "PKR4249.00",
                        "minBuyingValue": "4249.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284256/1717956003/284256_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284256/1717956003/284256_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284256/1717956003/284256_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284256/1717956003/284256_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Yolo Smart Watch Pro",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 7900,
                        "formattedValue": "PKR7900.00",
                        "minBuyingValue": "7900.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/268440/268440_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Sparx Neo 7 Ultra Smartphone 6GB RAM 128GB ROM Golden Haze",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 25499,
                        "formattedValue": "PKR25499.00",
                        "minBuyingValue": "25499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd6/h28/52005218877470/277461_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Itel Super Fast Charger ICW 201E 20W",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1649,
                        "formattedValue": "PKR1649.00",
                        "minBuyingValue": "1649.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h53/hca/61886110236702/271937_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "AUX CABLE ROGER AX-111 AUDIONIC",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 259,
                        "formattedValue": "PKR259.00",
                        "minBuyingValue": "259.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h1e/ha7/48966933708830/254868_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Audionic Spark S-10 Power Bank 10000mAh Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 3250,
                        "formattedValue": "PKR3250.00",
                        "minBuyingValue": "3250.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284264/1717956003/284264_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284264/1717956003/284264_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284264/1717956003/284264_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Yolo Yolex Smartwatch Golden",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 13999,
                        "formattedValue": "PKR13999.00",
                        "minBuyingValue": "13999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284500/1717959604/284500_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284500/1717959604/284500_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284500/1717959604/284500_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284500/1717959604/284500_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Itel Fast Charger ICW 181E 18W QC3.0 ",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1150,
                        "formattedValue": "PKR1150.00",
                        "minBuyingValue": "1150.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/had/h32/61886109843486/271936_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Yolo AP Smartwatch Gray",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 13500,
                        "formattedValue": "PKR13500.00",
                        "minBuyingValue": "13500.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284501/1717959604/284501_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284501/1717959604/284501_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284501/1717959604/284501_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Sparx Edge 20 Pro Smartphomr 8GB RAM 256GB ROM Sparkling Blue",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 52499,
                        "formattedValue": "PKR52499.00",
                        "minBuyingValue": "52499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hd7/he9/61765026512926/279964_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Yolo Yiller Smartwatch Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 10500,
                        "formattedValue": "PKR10500.00",
                        "minBuyingValue": "10500.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284502/1717959604/284502_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284502/1717959604/284502_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284502/1717959604/284502_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Zero Pulse Z Earbuds Blue Coffee",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 4699,
                        "formattedValue": "PKR4699.00",
                        "minBuyingValue": "4699.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284246/1717956003/284246_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284246/1717956003/284246_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284246/1717956003/284246_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284246/1717956003/284246_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Zero Meta Smartwatch Silver",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 7999,
                        "formattedValue": "PKR7999.00",
                        "minBuyingValue": "7999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284259/1717956003/284259_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284259/1717956003/284259_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284259/1717956003/284259_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284259/1717956003/284259_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "FASTER FC-11QC Fast Wall Charger 20W Qualcomm QC 3.0A",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1250,
                        "formattedValue": "PKR1250.00",
                        "minBuyingValue": "1250.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h5c/hcc/49707266015262/268734_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hbe/h96/49707199791134/268734_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/haf/h90/49707199922206/268734_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h26/h86/49707200217118/268734_3.jpg?im=Resize=200",
                            }
                        ],
                        "productUrl": {
                            "href": "/mafpak/en/chargers-cables-convertors/charger-fc-qc-11-micro-20w-faster/p/268734",
                            "rel": "self",
                            "type": "GET",
                            "kind": "product"
                        },
                    },
                },
                {
                    "name": "Zero Meta Smartwatch Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 7999,
                        "formattedValue": "PKR7999.00",
                        "minBuyingValue": "7999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284258/1717956003/284258_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284258/1717956003/284258_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284258/1717956003/284258_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284258/1717956003/284258_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Dany Data Cable SI150 C-Lightng",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 599,
                        "formattedValue": "PKR599.00",
                        "minBuyingValue": "599.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/262913/262913_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Faster USB Travel Charger 3.0 1 USB Port QC-99  White",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1120,
                        "formattedValue": "PKR1120.00",
                        "minBuyingValue": "1120.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hde/h3f/9916855877662/222720_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h17/he1/11672478253086/222720_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hb1/hda/11672478416926/222720_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Itel Wireless Airbuds KT-01 White",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 3199,
                        "formattedValue": "PKR3199.00",
                        "minBuyingValue": "3199.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h5f/hd2/27631044526110/251486_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Zero Atom Zdots Earbuds Snow White",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 4499,
                        "formattedValue": "PKR4499.00",
                        "minBuyingValue": "4499.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284239/1717956003/284239_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284239/1717956003/284239_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284239/1717956003/284239_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Dany Airdots 200 Curve Pro Blue",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 3200,
                        "formattedValue": "PKR3200.00",
                        "minBuyingValue": "3200.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284261/1717956003/284261_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284261/1717956003/284261_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/284261/1717956003/284261_2.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Faster 2.4A Fast Micro &amp; Iphone Car Charger with dual Ultra-Fast USB Charging Ports White",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 1765,
                        "formattedValue": "PKR1765.00",
                        "minBuyingValue": "1765.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h8b/hd9/9916941172766/218911_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h77/hc0/12167856291870/218911_1.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "CHARGER S-80 TYP-C 2 PORT AUDIONIC",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 549,
                        "formattedValue": "PKR549.00",
                        "minBuyingValue": "549.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h37/ha1/48966938099742/259411_main.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h10/h4f/48966937772062/259411_1.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h0e/h52/48966937837598/259411_2.jpg?im=Resize=200",
                            },
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hcd/h55/48966937968670/259411_3.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Sparx Neo 8 Plus Smartphone 4GB RAM 64GB ROM Glitter Gold",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 21999,
                        "formattedValue": "PKR21999.00",
                        "minBuyingValue": "21999.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/hc3/hf4/61765021073438/279846_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Dany Standard-Iphone Cable SI-100 Black",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 209,
                        "formattedValue": "PKR209.00",
                        "minBuyingValue": "209.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/sys-master-root/h19/h7f/26756955209758/248950_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                },
                {
                    "name": "Itel USB Charger ICW-101E 2A",
                    "type": "NONFOOD",
                    "price": {
                        "currency": "PKR",
                        "price": 799,
                        "formattedValue": "PKR799.00",
                        "minBuyingValue": "799.00"
                    },
                    "links": {
                        "images": [
                            {
                                "rel": "assets",
                                "href": "https://cdn.mafrservices.com/pim-content/PAK/media/product/271935/271935_main.jpg?im=Resize=200",
                            }
                        ],
                    },
                }
            ]
        }
    ]


    return (
        <>
            <section className='h-52  w-full my-6 
            '>
                <ImageSlider />
            </section>

            <section className='h-auto pb-4  w-full mb-6 bg-white 
            '>
                <Categories />
            </section>

            <section className='h-auto pb-4 w-full mb-6 bg-white section'>
                <div className='w-auto h-auto p-5 bg-gray-100'>
                    <div className='text-gray-700 text-2xl pl-2 mb-4'>
                        <p>{dataAPI.length > 0 && dataAPI[0].strategyMessage}</p>
                    </div>
                    <ProductCard data={dataAPI} initialVisibleCount={12} i={0} />
                </div>
            </section>

            <section className='h-auto pb-4 w-full mb-6 bg-white section'>
                <div className='w-auto h-auto p-5 bg-gray-100'>
                    <div className='text-gray-700 text-2xl pl-2 mb-4'>
                        <p>{dataAPI.length > 0 && dataAPI[1].strategyMessage}</p>
                    </div>
                    <ProductCard data={dataAPI} initialVisibleCount={12} i={1} />
                </div>
            </section>

            <section className='h-auto pb-4 w-full mb-6 bg-white section'>
                <div className='w-auto h-auto p-5 bg-gray-100'>
                    <div className='text-gray-700 text-2xl pl-2 mb-4'>
                        <p>{dataAPI.length > 0 && dataAPI[2].strategyMessage}</p>
                    </div>
                    <ProductCard data={dataAPI} initialVisibleCount={12} i={2} />
                </div>
            </section>

            <section className='h-auto pb-4 w-full mb-6 bg-white section'>
                <div className='w-auto h-auto p-5 bg-gray-100'>
                    <div className='text-gray-700 text-2xl pl-2 mb-4'>
                        <p>{dataAPI.length > 0 && dataAPI[3].strategyMessage}</p>
                    </div>
                    <ProductCard data={dataAPI} initialVisibleCount={12} i={3} />
                </div>
            </section>

            <section className='h-auto pb-4 w-full mb-6 bg-white section'>
                <div className='w-auto h-auto p-5 bg-gray-100'>
                    <div className='text-gray-700 text-2xl pl-2 mb-4'>
                        <p>{dataAPI.length > 0 && dataAPI[4].strategyMessage}</p>
                    </div>
                    <ProductCard data={dataAPI} initialVisibleCount={12} i={4} />
                </div>
            </section>

        </>
    )
}

export default Home