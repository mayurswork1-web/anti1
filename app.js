/**
 * Jesper Landberg Portfolio - Main Application (Bulletproof & High Fidelity)
 */

const PORTFOLIO_DATA = {
    "featured":  [
                     {
                         "id":  "JcrnbRQJQdOYHofW6w3fiw",
                         "slug":  "nathan-riley",
                         "title":  "Nathan Riley",
                         "description":  "Nathan is a UK-based digital creative specializing in art direction, surrealist 3D visuals, interactive experiences, and motion design.",
                         "link":  "https://www.nrly.co/",
                         "src":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                         "card":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/high.mp4",
                         "width":  2048,
                         "height":  1172
                     },
                     {
                         "id":  "acOFSemDSD-wZcJ-XFwgOA",
                         "slug":  "casa-di-solare",
                         "title":  "Casa Di Solare",
                         "description":  "Solare extends Nikolas Type‘s Font Catalogue with a timeless, hyper-useable quintessential variable font, suitable for a wide field of applications.",
                         "link":  "https://casadisolare.com/",
                         "src":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                         "card":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/high.mp4",
                         "width":  2048,
                         "height":  1204
                     },
                     {
                         "id":  "Pr4NlBi9Tvmpj0sqNaWAcg",
                         "slug":  "the-lookback",
                         "title":  "The Lookback",
                         "description":  "Digital capsule for Better Off® studio to document what inspired them and what they created over the last months/years.\n",
                         "link":  "https://tlb.betteroff.studio/",
                         "src":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                         "card":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/high.mp4",
                         "width":  1250,
                         "height":  720
                     },
                     {
                         "id":  "aEqXylDcT4aQfGv2MdxMpg",
                         "slug":  "book-of-happiness",
                         "title":  "Book of Happiness",
                         "description":  "Helping leaders keep themselves and their people happy and mentally healthy.",
                         "link":  "https://www.findworkhappiness.com/",
                         "src":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                         "card":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/high.mp4",
                         "width":  2048,
                         "height":  1114
                     },
                     {
                         "id":  "ITqEbGCzREu55NLijTbsDg",
                         "slug":  "dogelon-mars",
                         "title":  "Dogelon Mars",
                         "description":  "Follow the story of Dogelon Mars as he explores the greatest mysteries of the universe and seeks to return to the planet he once called home with the help of the friends he’s made during his intergalactic travels.",
                         "link":  "https://dogelonmars.com",
                         "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  3360,
                         "height":  2200
                     },
                     {
                         "id":  "UhD9sB0zSoCP_uEmcEz6oA",
                         "slug":  "gil-huybrecht",
                         "title":  "Gil Huybrecht",
                         "description":  "Gil Huybrecht is a Belgian digital designer and art director, based around Antwerp. He specializes in typography-heavy web design, art direction, interaction design, and branding.",
                         "link":  "https://gilhuybrecht.com",
                         "src":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                         "card":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/high.mp4",
                         "width":  1196,
                         "height":  720
                     },
                     {
                         "id":  "dyWJAjj0TmCUwYZtj9g8Lw",
                         "slug":  "discoveryland",
                         "title":  "Discoveryland",
                         "description":  "Partnered with Outpost and Discovery Land Company to create an immersive, storytelling brand experience that showcasing DLCs international portfolio and capabilities while acting as a seamless transition across their 23 properties. ",
                         "link":  "https://discoverylandco.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1372,
                         "height":  1029
                     },
                     {
                         "id":  "AMberUEYShGG6hrohzFjNA",
                         "slug":  "griflan",
                         "title":  "Griflan",
                         "description":  "Griflan is a creative studio at the intersection of design, strategy, and compelling storytelling, shaping brands that move culture and leave a lasting mark.",
                         "link":  "https://griflan.com",
                         "src":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                         "card":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/high.mp4",
                         "width":  1162,
                         "height":  720
                     }
                 ],
    "projects":  [
                     {
                         "id":  "Pr4NlBi9Tvmpj0sqNaWAcg",
                         "slug":  "the-lookback",
                         "title":  "The Lookback",
                         "description":  "Digital capsule for Better Off® studio to document what inspired them and what they created over the last months/years.\n",
                         "link":  "https://tlb.betteroff.studio/",
                         "src":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                         "card":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/high.mp4",
                         "width":  1250,
                         "height":  720,
                         "awards":  3,
                         "tags":  [
                                      {
                                          "title":  "BetterOff® Studio",
                                          "url":  "https://betteroff.studio/"
                                      },
                                      {
                                          "title":  "2026",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg",
                                            "card":  "https://image.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/01CbIdBLVCiUlQLMC8Ct3vq014VS02lwCaq/high.mp4",
                                            "width":  1250,
                                            "height":  720
                                        },
                                        {
                                            "src":  "https://image.mux.com/HofYkQ00DP02B202026iOjEsHVlOHoXqJB02y/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/HofYkQ00DP02B202026iOjEsHVlOHoXqJB02y/thumbnail.jpg",
                                            "card":  "https://image.mux.com/HofYkQ00DP02B202026iOjEsHVlOHoXqJB02y/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/HofYkQ00DP02B202026iOjEsHVlOHoXqJB02y/high.mp4",
                                            "width":  1620,
                                            "height":  1080
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656629-image-39.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656629-image-39.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656629-image-39.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1897
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656633-tlb4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1000
                                        }
                                    ]
                     },
                     {
                         "id":  "CKkeAKqbSU69ZpsoEJRpGg",
                         "slug":  "dothings",
                         "title":  "DoThings",
                         "description":  "New website for Creative agency DoThings. They\u0027re refined expertise lies in creating and harnessing desire, from lipsticks to buildings, from aspiring start-ups to established brands.",
                         "link":  "https://dothingsnyc.com/",
                         "src":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1500,
                         "height":  1501,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "DoThings",
                                          "url":  "https://dothingsnyc.com/"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656645-image-84.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1501
                                        },
                                        {
                                            "src":  "https://image.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/thumbnail.jpg",
                                            "card":  "https://image.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/vi01EDz6SgCaJhFpBpz7qeUoqmZHj9r3x/high.mp4",
                                            "width":  1582,
                                            "height":  1080
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656656-image-83.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656656-image-83.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656656-image-83.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  2106
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656663-image-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656663-image-2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656663-image-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1001
                                        },
                                        {
                                            "src":  "https://image.mux.com/tDmMyBorLlYpZ1JxKmZqHu6cRAy3Jeq6/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/tDmMyBorLlYpZ1JxKmZqHu6cRAy3Jeq6/thumbnail.jpg",
                                            "card":  "https://image.mux.com/tDmMyBorLlYpZ1JxKmZqHu6cRAy3Jeq6/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/tDmMyBorLlYpZ1JxKmZqHu6cRAy3Jeq6/high.mp4",
                                            "width":  1582,
                                            "height":  1080
                                        }
                                    ]
                     },
                     {
                         "id":  "Z1cK1mAeQKeqopvW0xs3GA",
                         "slug":  "53-west-53",
                         "title":  "53 West 53",
                         "description":  "New website for the 53West53 residential tower standing tall above MoMA.",
                         "link":  "https://53w53.com/",
                         "src":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1500,
                         "height":  947,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "DoThings",
                                          "url":  "https://dothingsnyc.com/"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656706-ny3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  947
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656714-ny2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656714-ny2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656714-ny2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1205
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656721-ny1.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656721-ny1.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656721-ny1.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1258
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656729-ny5.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656729-ny5.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656729-ny5.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1030
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656736-ny4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656736-ny4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656736-ny4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1250
                                        }
                                    ]
                     },
                     {
                         "id":  "ctRdk1LMQt-vrRF9ZY2hxg",
                         "slug":  "ross-masonr",
                         "title":  "Ross Mason®",
                         "description":  "New portfolio website for Ross Mason, designer from the UK doing 3D, Motion design and Art Direction.",
                         "link":  "https://iamrossmason.com/",
                         "src":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg",
                         "card":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/high.mp4",
                         "width":  1586,
                         "height":  1080,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg",
                                            "card":  "https://image.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/z3nRLshZzvZU01k8IMgQoQNNzICYrh77K/high.mp4",
                                            "width":  1586,
                                            "height":  1080
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656747-long.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656747-long.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656747-long.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1653
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656752-6.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656752-6.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656752-6.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1001
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656759-5.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656759-5.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656759-5.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1001
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656764-3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656764-3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656764-3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1001
                                        }
                                    ]
                     },
                     {
                         "id":  "JdoAJCbwT6-_NSLlRYraGA",
                         "slug":  "vuckotm",
                         "title":  "Vucko™",
                         "description":  "New website for Vucko, A motion partner building brand-led identities, systems, and applications.",
                         "link":  "https://vucko.co/",
                         "src":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg",
                         "card":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/high.mp4",
                         "width":  1586,
                         "height":  1080,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "Vucko™",
                                          "url":  null
                                      },
                                      {
                                          "title":  "2023",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg",
                                            "card":  "https://image.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/pDi8xyrUNS1S8A2ZHFs21rRtUjAMBh02E/high.mp4",
                                            "width":  1586,
                                            "height":  1080
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656775-vuc4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656775-vuc4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656775-vuc4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1273
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656783-vuc5.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656783-vuc5.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656783-vuc5.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1030
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656787-vuc2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656787-vuc2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656787-vuc2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1182
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656794-vuc3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656794-vuc3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656794-vuc3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  932
                                        }
                                    ]
                     },
                     {
                         "id":  "ZDSsdOoBRt-kU6yrpdRmbg",
                         "slug":  "ingrao",
                         "title":  "Ingrao",
                         "description":  "New portfolio website for Ingrao, an international architecture and design firm.",
                         "link":  "https://ingrao.jesperlandberg.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  2000,
                         "height":  1429,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "DoThings",
                                          "url":  "https://dothingsnyc.com/"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786214209-ingrao-thumb.webp?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  2000,
                                            "height":  1429
                                        }
                                    ]
                     },
                     {
                         "id":  "a1h8TcLfSu2f91NE21krKw",
                         "slug":  "111-west-57th-street",
                         "title":  "111 West 57th Street",
                         "description":  "111 West 57th Street gracefully rises above the original landmarked Steinway Hall building creating a new landmark on the iconic Manhattan skyline.",
                         "link":  "https://111w57.com/",
                         "src":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1500,
                         "height":  1000,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Outpost",
                                          "url":  "https://outpost.design/"
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656901-image-63.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1000
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656909-image-64.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656909-image-64.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656909-image-64.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1169
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656919-image-70.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656919-image-70.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656919-image-70.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1857
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656927-image-69.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656927-image-69.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656927-image-69.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1238
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656935-image-68.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656935-image-68.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656935-image-68.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  950
                                        }
                                    ]
                     },
                     {
                         "id":  "Ul8bEmakTG-_CXnYZ9cwAQ",
                         "slug":  "better-offr",
                         "title":  "Better Off®",
                         "description":  "New studio website for Better Off®, a studio providing premium quality creative at lean rates for growing business. Packaged as subscriptions or bundled projects.",
                         "link":  "https://betteroff.studio/",
                         "src":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1200,
                         "height":  867,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "BetterOff® Studio",
                                          "url":  "https://betteroff.studio/"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786208283-betteroff-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1200,
                                            "height":  867
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656942-bo1.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656942-bo1.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656942-bo1.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1000
                                        },
                                        {
                                            "src":  "https://image.mux.com/ci2q01VblaQnOmrfpNROOpEARTIbSImk2/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/ci2q01VblaQnOmrfpNROOpEARTIbSImk2/thumbnail.jpg",
                                            "card":  "https://image.mux.com/ci2q01VblaQnOmrfpNROOpEARTIbSImk2/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/ci2q01VblaQnOmrfpNROOpEARTIbSImk2/high.mp4",
                                            "width":  1586,
                                            "height":  1080
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656962-bo4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656962-bo4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656962-bo4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1045
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1785656969-bo3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1785656969-bo3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1785656969-bo3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1500,
                                            "height":  1606
                                        }
                                    ]
                     },
                     {
                         "id":  "WUhc1yJcT0Gmh2H71lU9QQ",
                         "slug":  "techspeed",
                         "title":  "Techspeed",
                         "description":  "TechSpeed’s rebrand reimagines outsourcing by combining cutting-edge technology with genuine human connection. A bold new identity, vibrant visual system, and highly interactive website balance technical expertise with the warmth and personality of its all-women-led team.",
                         "link":  "https://techspeed.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  3360,
                         "height":  2200,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "Griflan",
                                          "url":  "https://griflan.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207051-ts2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3360,
                                            "height":  2200
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207051-ts4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207051-ts4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207051-ts4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3360,
                                            "height":  2202
                                        },
                                        {
                                            "src":  "https://image.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/thumbnail.jpg",
                                            "card":  "https://image.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/Oj1mBZa5S4oFjdl009Jet4wfVy6mXbhMI/high.mp4",
                                            "width":  1600,
                                            "height":  1200
                                        },
                                        {
                                            "src":  "https://image.mux.com/6zKcsnr1vdsv01YdSEXg56EVGgjmoTQ5l/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/6zKcsnr1vdsv01YdSEXg56EVGgjmoTQ5l/thumbnail.jpg",
                                            "card":  "https://image.mux.com/6zKcsnr1vdsv01YdSEXg56EVGgjmoTQ5l/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/6zKcsnr1vdsv01YdSEXg56EVGgjmoTQ5l/high.mp4",
                                            "width":  2048,
                                            "height":  1210
                                        }
                                    ]
                     },
                     {
                         "id":  "JcrnbRQJQdOYHofW6w3fiw",
                         "slug":  "nathan-riley",
                         "title":  "Nathan Riley",
                         "description":  "Nathan is a UK-based digital creative specializing in art direction, surrealist 3D visuals, interactive experiences, and motion design.",
                         "link":  "https://www.nrly.co/",
                         "src":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                         "card":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/high.mp4",
                         "width":  2048,
                         "height":  1172,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "2023",
                                          "url":  null
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg",
                                            "card":  "https://image.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/qmEPTzOaDQBZL5258j01i2mMBkGh3G9BI/high.mp4",
                                            "width":  2048,
                                            "height":  1172
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207557-nathan-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1787,
                                            "height":  900
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207557-nathan-1.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1798,
                                            "height":  905
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207557-nathan-3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207557-nathan-3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207557-nathan-3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1792,
                                            "height":  904
                                        }
                                    ]
                     },
                     {
                         "id":  "ITqEbGCzREu55NLijTbsDg",
                         "slug":  "dogelon-mars",
                         "title":  "Dogelon Mars",
                         "description":  "Follow the story of Dogelon Mars as he explores the greatest mysteries of the universe and seeks to return to the planet he once called home with the help of the friends he’s made during his intergalactic travels.",
                         "link":  "https://dogelonmars.com",
                         "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  3360,
                         "height":  2200,
                         "awards":  3,
                         "tags":  [
                                      {
                                          "title":  "Griflan",
                                          "url":  "https://griflan.com"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3360,
                                            "height":  2200
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-1.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-1.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-1.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3360,
                                            "height":  2200
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-4.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-4.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-4.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3420,
                                            "height":  2201
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786207957-dogelon-3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786207957-dogelon-3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786207957-dogelon-3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3360,
                                            "height":  2200
                                        }
                                    ]
                     },
                     {
                         "id":  "dyWJAjj0TmCUwYZtj9g8Lw",
                         "slug":  "discoveryland",
                         "title":  "Discoveryland",
                         "description":  "Partnered with Outpost and Discovery Land Company to create an immersive, storytelling brand experience that showcasing DLCs international portfolio and capabilities while acting as a seamless transition across their 23 properties. ",
                         "link":  "https://discoverylandco.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1372,
                         "height":  1029,
                         "awards":  null,
                         "tags":  [
                                      {
                                          "title":  "Outpost",
                                          "url":  "https://outpost.design/"
                                      },
                                      {
                                          "title":  "2026",
                                          "url":  null
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786432901-dlc-thumbnail.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1372,
                                            "height":  1029
                                        },
                                        {
                                            "src":  "https://image.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/thumbnail.jpg",
                                            "card":  "https://image.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/BV6q01JxClCQwHfNI2sVS76jGjg5isqkq/high.mp4",
                                            "width":  1280,
                                            "height":  642
                                        },
                                        {
                                            "src":  "https://image.mux.com/wt002Ew1EVcKEXR5K4PkB9G5l1OoW9jiV/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/wt002Ew1EVcKEXR5K4PkB9G5l1OoW9jiV/thumbnail.jpg",
                                            "card":  "https://image.mux.com/wt002Ew1EVcKEXR5K4PkB9G5l1OoW9jiV/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/wt002Ew1EVcKEXR5K4PkB9G5l1OoW9jiV/high.mp4",
                                            "width":  1280,
                                            "height":  642
                                        }
                                    ]
                     },
                     {
                         "id":  "AMberUEYShGG6hrohzFjNA",
                         "slug":  "griflan",
                         "title":  "Griflan",
                         "description":  "Griflan is a creative studio at the intersection of design, strategy, and compelling storytelling, shaping brands that move culture and leave a lasting mark.",
                         "link":  "https://griflan.com",
                         "src":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                         "card":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/high.mp4",
                         "width":  1162,
                         "height":  720,
                         "awards":  3,
                         "tags":  [
                                      {
                                          "title":  "2026",
                                          "url":  null
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg",
                                            "card":  "https://image.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/9AaOR02f5lWzxopxZCg54ZRXsxGe4SSE7/high.mp4",
                                            "width":  1162,
                                            "height":  720
                                        },
                                        {
                                            "src":  "https://image.mux.com/Hb00nsAmF7R01kcTOmRr2tgpX3WjZkVYPN/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/Hb00nsAmF7R01kcTOmRr2tgpX3WjZkVYPN/thumbnail.jpg",
                                            "card":  "https://image.mux.com/Hb00nsAmF7R01kcTOmRr2tgpX3WjZkVYPN/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/Hb00nsAmF7R01kcTOmRr2tgpX3WjZkVYPN/high.mp4",
                                            "width":  1022,
                                            "height":  720
                                        },
                                        {
                                            "src":  "https://image.mux.com/F7soo79aHLgeYDtjug6X599kMSZoBja4/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/F7soo79aHLgeYDtjug6X599kMSZoBja4/thumbnail.jpg",
                                            "card":  "https://image.mux.com/F7soo79aHLgeYDtjug6X599kMSZoBja4/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/F7soo79aHLgeYDtjug6X599kMSZoBja4/high.mp4",
                                            "width":  1280,
                                            "height":  642
                                        }
                                    ]
                     },
                     {
                         "id":  "aEqXylDcT4aQfGv2MdxMpg",
                         "slug":  "book-of-happiness",
                         "title":  "Book of Happiness",
                         "description":  "Helping leaders keep themselves and their people happy and mentally healthy.",
                         "link":  "https://www.findworkhappiness.com/",
                         "src":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                         "card":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/high.mp4",
                         "width":  2048,
                         "height":  1114,
                         "awards":  4,
                         "tags":  [
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      },
                                      {
                                          "title":  "David Lubofsky",
                                          "url":  "https://www.davidlubofsky.com/"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg",
                                            "card":  "https://image.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/e79MwNWsJkhoNzhR02UVL3LRe1wexvcA9/high.mp4",
                                            "width":  2048,
                                            "height":  1114
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786210260-book-2.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786210260-book-2.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786210260-book-2.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1565,
                                            "height":  908
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786210260-book-3.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786210260-book-3.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786210260-book-3.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1568,
                                            "height":  906
                                        },
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786210260-book-1.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786210260-book-1.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786210260-book-1.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1571,
                                            "height":  906
                                        }
                                    ]
                     },
                     {
                         "id":  "QyCGuM0RQyq9H5ltVKURxg",
                         "slug":  "chris-wilcock",
                         "title":  "Chris Wilcock",
                         "description":  "",
                         "link":  "https://www.chriswilcock.co/",
                         "src":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1200,
                         "height":  1522,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786212214-chris-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1200,
                                            "height":  1522
                                        }
                                    ]
                     },
                     {
                         "id":  "atePe2y4TFCMFbbqHIT0Zw",
                         "slug":  "david-lubofsky",
                         "title":  "David Lubofsky",
                         "description":  "",
                         "link":  "https://www.davidlubofsky.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  3594,
                         "height":  1766,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786212398-david-thumb.png?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3594,
                                            "height":  1766
                                        }
                                    ]
                     },
                     {
                         "id":  "acOFSemDSD-wZcJ-XFwgOA",
                         "slug":  "casa-di-solare",
                         "title":  "Casa Di Solare",
                         "description":  "Solare extends Nikolas Type‘s Font Catalogue with a timeless, hyper-useable quintessential variable font, suitable for a wide field of applications.",
                         "link":  "https://casadisolare.com/",
                         "src":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                         "card":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/high.mp4",
                         "width":  2048,
                         "height":  1204,
                         "awards":  4,
                         "tags":  [
                                      {
                                          "title":  "Unseen",
                                          "url":  "https://unseen.co/"
                                      },
                                      {
                                          "title":  "2024",
                                          "url":  null
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg",
                                            "card":  "https://image.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/DrMKk9cqmTOu4Y4dJzCjEn5ny37s02001I/high.mp4",
                                            "width":  2048,
                                            "height":  1204
                                        },
                                        {
                                            "src":  "https://image.mux.com/R3vmn027401UtGEikdEo5clIi5MUU9aZs02/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/R3vmn027401UtGEikdEo5clIi5MUU9aZs02/thumbnail.jpg",
                                            "card":  "https://image.mux.com/R3vmn027401UtGEikdEo5clIi5MUU9aZs02/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/R3vmn027401UtGEikdEo5clIi5MUU9aZs02/high.mp4",
                                            "width":  1280,
                                            "height":  596
                                        },
                                        {
                                            "src":  "https://image.mux.com/iyDjwB2orEKXdIKP5u02RfT68xRnllt7a/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/iyDjwB2orEKXdIKP5u02RfT68xRnllt7a/thumbnail.jpg",
                                            "card":  "https://image.mux.com/iyDjwB2orEKXdIKP5u02RfT68xRnllt7a/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/iyDjwB2orEKXdIKP5u02RfT68xRnllt7a/high.mp4",
                                            "width":  1280,
                                            "height":  644
                                        }
                                    ]
                     },
                     {
                         "id":  "UhD9sB0zSoCP_uEmcEz6oA",
                         "slug":  "gil-huybrecht",
                         "title":  "Gil Huybrecht",
                         "description":  "Gil Huybrecht is a Belgian digital designer and art director, based around Antwerp. He specializes in typography-heavy web design, art direction, interaction design, and branding.",
                         "link":  "https://gilhuybrecht.com",
                         "src":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                         "thumb":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                         "card":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                         "video":  "https://stream.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/high.mp4",
                         "width":  1196,
                         "height":  720,
                         "awards":  1,
                         "tags":  [
                                      {
                                          "title":  "2026",
                                          "url":  null
                                      },
                                      {
                                          "title":  "Gil Huybrecht",
                                          "url":  "https://gilhuybrecht.com"
                                      }
                                  ],
                         "images":  [
                                        {
                                            "src":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg",
                                            "card":  "https://image.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/X3NsXaLph6rhK6M9kgi24PWL9vfH7SSf/high.mp4",
                                            "width":  1196,
                                            "height":  720
                                        },
                                        {
                                            "src":  "https://image.mux.com/g12oqAEfwFRDxmxiuH02yJsALmVkKqsKA/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/g12oqAEfwFRDxmxiuH02yJsALmVkKqsKA/thumbnail.jpg",
                                            "card":  "https://image.mux.com/g12oqAEfwFRDxmxiuH02yJsALmVkKqsKA/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/g12oqAEfwFRDxmxiuH02yJsALmVkKqsKA/high.mp4",
                                            "width":  1280,
                                            "height":  644
                                        },
                                        {
                                            "src":  "https://image.mux.com/ONW93srqx6kGfiHTKQtV2pkqByQY01nF01/thumbnail.jpg",
                                            "thumb":  "https://image.mux.com/ONW93srqx6kGfiHTKQtV2pkqByQY01nF01/thumbnail.jpg",
                                            "card":  "https://image.mux.com/ONW93srqx6kGfiHTKQtV2pkqByQY01nF01/thumbnail.jpg?width=1200\u0026height=630\u0026fit_mode=crop",
                                            "video":  "https://stream.mux.com/ONW93srqx6kGfiHTKQtV2pkqByQY01nF01/high.mp4",
                                            "width":  1280,
                                            "height":  604
                                        }
                                    ]
                     },
                     {
                         "id":  "Njfxb9wZS4KkNn60vTUUUQ",
                         "slug":  "fivepathways",
                         "title":  "Fivepathways",
                         "description":  "",
                         "link":  "https://fivepathways.com/",
                         "src":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1524,
                         "height":  898,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786215014-5p-thumb.png?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1524,
                                            "height":  898
                                        }
                                    ]
                     },
                     {
                         "id":  "FvcifpbxRJOIAh9wkA-FPw",
                         "slug":  "energy-park",
                         "title":  "Energy Park",
                         "description":  "",
                         "link":  "https://energy-park.outpost.design/",
                         "src":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1799,
                         "height":  906,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786215002-ep-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1799,
                                            "height":  906
                                        }
                                    ]
                     },
                     {
                         "id":  "d05dfcikQICxaCOVrMVLsQ",
                         "slug":  "outpost",
                         "title":  "Outpost",
                         "description":  "",
                         "link":  "https://outpost.design/",
                         "src":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1680,
                         "height":  1531,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786215135-op-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1680,
                                            "height":  1531
                                        }
                                    ]
                     },
                     {
                         "id":  "TA1spK0oTNSMkEAzWDqFeQ",
                         "slug":  "mew",
                         "title":  "Mew",
                         "description":  "",
                         "link":  "https://mew.xyz/",
                         "src":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  3376,
                         "height":  2200,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786215349-mew-thumb.jpg?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  3376,
                                            "height":  2200
                                        }
                                    ]
                     },
                     {
                         "id":  "f1tKe99jSPaudR8e7v_4_Q",
                         "slug":  "primland",
                         "title":  "Primland",
                         "description":  "",
                         "link":  "https://ownprimland.com",
                         "src":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                         "thumb":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                         "card":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                         "video":  null,
                         "width":  1952,
                         "height":  2440,
                         "awards":  null,
                         "tags":  [

                                  ],
                         "images":  [
                                        {
                                            "src":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=max\u0026w=1200",
                                            "thumb":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=max\u0026w=600",
                                            "card":  "https://www.datocms-assets.com/223669/1786215593-primland-thumb.avif?auto=format\u0026fit=crop\u0026h=630\u0026w=1200",
                                            "video":  null,
                                            "width":  1952,
                                            "height":  2440
                                        }
                                    ]
                     }
                 ]
}
;

// State management
const state = {
  currentView: 'featured', // 'featured' | 'full'
  isDragging: false,
  startX: 0,
  currentX: 0,
  targetX: 0,
  minX: 0,
  maxX: 0,
  velocity: 0,
  lastX: 0,
  lastTime: performance.now(),
  activeProject: null,
  mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 },
  hoverPreview: { active: false, x: 0, y: 0, targetX: 0, targetY: 0 }
};

// Safe DOM lookup
const el = (id) => document.getElementById(id);

/* ==========================================================================
   1. Initialize WebGL Fluid Mesh / Shader Canvas (GLSL ES 1.0 Compliant)
   ========================================================================== */
function initWebGL() {
  try {
    const canvas = el('glCanvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not available; using clean dark canvas');
      return;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = (position + 1.0) * 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Strictly standard GLSL ES 1.0 shader (vec3 requires 3 arguments)
    const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uVelocity;
      varying vec2 vUv;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        vec2 p = uv - vec2(0.5, 0.5);
        p.x *= aspect;

        vec2 m = (uMouse / uResolution) - vec2(0.5, 0.5);
        m.x *= aspect;

        float dist = length(p - m);
        float ripple = sin(dist * 16.0 - uTime * 2.0) * 0.015 * exp(-dist * 2.0);
        float velEffect = abs(uVelocity) * 0.0006;

        float grain = fract(sin(dot(uv + vec2(uTime * 0.005, uTime * 0.005), vec2(12.9898, 78.233))) * 43758.5453) * 0.012;
        vec3 col = vec3(0.01, 0.01, 0.012);
        col += vec3(ripple + velEffect, ripple + velEffect, ripple + velEffect);
        col += vec3(grain, grain, grain);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uResLoc = gl.getUniformLocation(program, 'uResolution');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');
    const uVelLoc = gl.getUniformLocation(program, 'uVelocity');

    let startTime = performance.now();
    function renderGL() {
      const time = (performance.now() - startTime) * 0.001;
      gl.uniform1f(uTimeLoc, time);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, state.mouse.x * window.devicePixelRatio, (window.innerHeight - state.mouse.y) * window.devicePixelRatio);
      gl.uniform1f(uVelLoc, state.velocity);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(renderGL);
    }
    requestAnimationFrame(renderGL);
  } catch (err) {
    console.warn('WebGL ambient failed gracefully:', err);
  }
}

/* ==========================================================================
   2. Render Featured Cards
   ========================================================================== */
function renderFeaturedCards() {
  const container = el('cardsTrack');
  if (!container) return;
  container.innerHTML = '';

  const featured = PORTFOLIO_DATA.featured || [];
  featured.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-slug', item.slug);

    // Calculate exact width matching the aspect ratio and height
    const ratio = item.width / item.height;
    card.style.aspectRatio = `${item.width} / ${item.height}`;
    card.style.width = `calc(43.5vh * ${ratio})`;

    const posterUrl = item.card || item.thumb || item.src;
    let mediaHtml = `
      <img 
        src="${posterUrl}" 
        alt="${item.title}" 
        class="card-poster-img"
        loading="eager" 
      />
    `;

    if (item.video) {
      mediaHtml += `
        <video 
          src="${item.video}" 
          poster="${posterUrl}" 
          loop 
          muted 
          playsinline 
          preload="auto"
          autoplay
          class="card-video"
        ></video>
      `;
    }

    card.innerHTML = `
      <div class="card-media-wrap">
        ${mediaHtml}
      </div>
      <div class="card-overlay"></div>
      <div class="card-info">
        <span class="card-title">${item.title}</span>
        <span class="card-indicator">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      if (Math.abs(state.velocity) > 1.5) return;
      openProjectDetail(item.slug);
    });

    container.appendChild(card);
  });

  updateTrackBounds();
}

/* ==========================================================================
   3. Render Full Index List
   ========================================================================== */
function renderFullIndex() {
  const container = el('projectListTable');
  if (!container) return;
  container.innerHTML = '';

  const projects = PORTFOLIO_DATA.projects || [];
  projects.forEach((proj, idx) => {
    const row = document.createElement('div');
    row.className = 'project-row';
    row.setAttribute('data-slug', proj.slug);

    const indexNum = String(idx + 1).padStart(2, '0');
    const tagsText = (proj.tags || []).map(t => t.title).filter(Boolean).join(' · ');
    const awardBadge = proj.awards ? `${proj.awards}× Awards` : '';

    row.innerHTML = `
      <div class="row-index">${indexNum}</div>
      <div class="row-title">
        <span>${proj.title}</span>
      </div>
      <div class="row-tags">${tagsText}</div>
      <div class="row-award">${awardBadge}</div>
      <div class="row-arrow">↗</div>
    `;

    row.addEventListener('mouseenter', () => showHoverPreview(proj));
    row.addEventListener('mouseleave', () => hideHoverPreview());
    row.addEventListener('click', () => openProjectDetail(proj.slug));

    container.appendChild(row);
  });
}

function showHoverPreview(proj) {
  const preview = el('hoverPreviewCard');
  if (!preview) return;

  const imgSrc = proj.card || proj.thumb || proj.src;
  if (proj.video) {
    preview.innerHTML = `<video src="${proj.video}" autoplay loop muted playsinline></video>`;
  } else {
    preview.innerHTML = `<img src="${imgSrc}" alt="${proj.title}" />`;
  }

  state.hoverPreview.active = true;
  preview.classList.add('visible');
}

function hideHoverPreview() {
  const preview = el('hoverPreviewCard');
  if (!preview) return;
  state.hoverPreview.active = false;
  preview.classList.remove('visible');
}

/* ==========================================================================
   4. Carousel Controls & Inertia Engine
   ========================================================================== */
function updateTrackBounds() {
  const track = el('cardsTrack');
  if (!track) return;
  const padding = window.innerWidth >= 650 ? 50 : 20;
  const totalWidth = track.scrollWidth || 2000;
  const viewWidth = window.innerWidth;
  state.maxX = padding;
  state.minX = Math.min(0, viewWidth - totalWidth - padding * 2);
}

function setupCarouselControls() {
  const wrapper = el('cardsTrackWrapper');
  if (!wrapper) return;

  // Mouse drag
  wrapper.addEventListener('mousedown', (e) => {
    state.isDragging = true;
    state.startX = e.clientX;
    state.lastX = e.clientX;
    state.lastTime = performance.now();
    wrapper.classList.add('is-dragging');
  });

  window.addEventListener('mousemove', (e) => {
    state.mouse.targetX = e.clientX;
    state.mouse.targetY = e.clientY;

    if (state.hoverPreview.active) {
      state.hoverPreview.targetX = e.clientX + 20;
      state.hoverPreview.targetY = e.clientY;
    }

    if (!state.isDragging) return;
    const now = performance.now();
    const dt = Math.max(1, now - state.lastTime);
    const deltaX = e.clientX - state.lastX;

    state.targetX += deltaX * 1.1;
    state.velocity = (deltaX / dt) * 16.0;

    state.lastX = e.clientX;
    state.lastTime = now;
  });

  window.addEventListener('mouseup', () => {
    if (state.isDragging) {
      state.isDragging = false;
      wrapper.classList.remove('is-dragging');
    }
  });

  // Touch drag
  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    state.isDragging = true;
    state.startX = e.touches[0].clientX;
    state.lastX = e.touches[0].clientX;
    state.lastTime = performance.now();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!state.isDragging || e.touches.length !== 1) return;
    const now = performance.now();
    const dt = Math.max(1, now - state.lastTime);
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - state.lastX;

    state.targetX += deltaX * 1.1;
    state.velocity = (deltaX / dt) * 16.0;

    state.lastX = clientX;
    state.lastTime = now;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    state.isDragging = false;
  });

  // Wheel scrolling (both horizontal & vertical)
  window.addEventListener('wheel', (e) => {
    if (state.currentView !== 'featured') return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    state.targetX -= delta * 0.9;
    state.velocity -= delta * 0.05;
  }, { passive: true });

  window.addEventListener('resize', updateTrackBounds);
}

// Animation loop
function animate() {
  const track = el('cardsTrack');

  // Lerp Carousel
  if (state.currentView === 'featured' && track) {
    if (!state.isDragging) {
      state.targetX += state.velocity;
      state.velocity *= 0.92;
      if (Math.abs(state.velocity) < 0.01) state.velocity = 0;
    }

    // Elastic boundary constraints
    if (state.targetX > state.maxX) {
      state.targetX += (state.maxX - state.targetX) * 0.15;
    } else if (state.targetX < state.minX) {
      state.targetX += (state.minX - state.targetX) * 0.15;
    }

    state.currentX += (state.targetX - state.currentX) * 0.085;
    track.style.transform = `translate3d(${state.currentX}px, 0, 0)`;

    // Subtle tilt/skew effect on movement
    const skew = Math.max(-5.5, Math.min(5.5, state.velocity * 0.22));
    const cards = track.children;
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `skewX(${skew}deg)`;
    }
  }

  // Smooth Cursor Lerp
  state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.2;
  state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.2;
  const cursor = el('cursorDot');
  if (cursor) {
    cursor.style.left = `${state.mouse.x}px`;
    cursor.style.top = `${state.mouse.y}px`;
  }

  // Hover preview lerp
  const preview = el('hoverPreviewCard');
  if (state.hoverPreview.active && preview) {
    state.hoverPreview.x += (state.hoverPreview.targetX - state.hoverPreview.x) * 0.15;
    state.hoverPreview.y += (state.hoverPreview.targetY - state.hoverPreview.y) * 0.15;
    preview.style.left = `${state.hoverPreview.x}px`;
    preview.style.top = `${state.hoverPreview.y}px`;
  }

  requestAnimationFrame(animate);
}

/* ==========================================================================
   5. Project Detail View
   ========================================================================== */
function openProjectDetail(slug) {
  const project = (PORTFOLIO_DATA.projects || []).find(p => p.slug === slug) || 
                  (PORTFOLIO_DATA.featured || []).find(p => p.slug === slug);
  if (!project) return;

  state.activeProject = project;
  const detail = el('projectDetailView');
  if (!detail) return;

  const tagsHtml = project.tags && project.tags.length > 0 ? `
    <div class="meta-group">
      <span class="meta-group-title">Collaborators</span>
      <div class="meta-group-content">
        ${project.tags.map(t => t.url ? `<a href="${t.url}" target="_blank" rel="noopener">${t.title}</a>` : `<span>${t.title}</span>`).join('')}
      </div>
    </div>
  ` : '';

  const awardsHtml = project.awards ? `
    <div class="meta-group">
      <span class="meta-group-title">Recognition</span>
      <div class="meta-group-content" style="color: var(--accent-gold);">
        ${project.awards}× Awards
      </div>
    </div>
  ` : '';

  const liveLinkHtml = project.link ? `
    <a href="${project.link}" target="_blank" rel="noopener" class="live-site-link">
      <span>Visit website</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  ` : '';

  let galleryHtml = '';
  const mediaList = project.images && project.images.length > 0 ? project.images : [project];
  mediaList.forEach(m => {
    if (m.video) {
      galleryHtml += `
        <div class="gallery-item" style="aspect-ratio: ${m.width} / ${m.height};">
          <video src="${m.video}" poster="${m.card || m.thumb}" autoplay loop muted playsinline></video>
        </div>
      `;
    } else if (m.src) {
      galleryHtml += `
        <div class="gallery-item" style="aspect-ratio: ${m.width} / ${m.height};">
          <img src="${m.src}" alt="${project.title}" loading="lazy" />
        </div>
      `;
    }
  });

  detail.innerHTML = `
    <div class="detail-top-nav">
      <button type="button" class="back-btn" id="detailBackBtn">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Back</span>
      </button>
      <span class="label" style="opacity: 0.5;">Project Overview</span>
    </div>

    <div class="detail-content">
      <div class="detail-header">
        <h1 class="detail-title">${project.title}</h1>
        ${project.description ? `<p class="detail-description">${project.description}</p>` : ''}
      </div>

      <div class="detail-meta-strip">
        ${tagsHtml}
        ${awardsHtml}
        ${liveLinkHtml}
      </div>

      <div class="detail-gallery">
        ${galleryHtml}
      </div>
    </div>
  `;

  detail.classList.add('is-open');
  detail.scrollTop = 0;

  const backBtn = el('detailBackBtn');
  if (backBtn) backBtn.addEventListener('click', closeProjectDetail);
}

function closeProjectDetail() {
  const detail = el('projectDetailView');
  if (detail) detail.classList.remove('is-open');
  state.activeProject = null;
}

/* ==========================================================================
   6. View Switcher (Featured / Full)
   ========================================================================== */
function setView(view) {
  if (state.currentView === view) return;
  state.currentView = view;

  const btnFeatured = el('switchFeatured');
  const btnFull = el('switchFull');
  const fullView = el('fullIndexView');
  const stage = el('mainStage');

  if (view === 'featured') {
    if (btnFeatured) btnFeatured.classList.add('active');
    if (btnFull) btnFull.classList.remove('active');
    if (fullView) fullView.classList.remove('is-active');
    if (stage) stage.style.display = 'block';
  } else {
    if (btnFull) btnFull.classList.add('active');
    if (btnFeatured) btnFeatured.classList.remove('active');
    if (fullView) fullView.classList.add('is-active');
    if (stage) stage.style.display = 'none';
  }
}

/* ==========================================================================
   7. Modals: Profile & Newsletter
   ========================================================================== */
function setupModals() {
  // Brand link resets to home
  const brand = el('brandLink');
  if (brand) {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      setView('featured');
      closeProjectDetail();
      el('profileModal')?.classList.remove('is-open');
      el('newsletterModal')?.classList.remove('is-open');
    });
  }

  // Profile modal
  const profBtn = el('profileBtn');
  const profModal = el('profileModal');
  const closeProf = el('closeProfileBtn');
  if (profBtn && profModal) {
    profBtn.addEventListener('click', () => profModal.classList.add('is-open'));
    if (closeProf) closeProf.addEventListener('click', () => profModal.classList.remove('is-open'));
    profModal.addEventListener('click', (e) => {
      if (e.target === profModal) profModal.classList.remove('is-open');
    });
  }

  // Newsletter modal
  const newsBtn = el('newsletterBtn');
  const newsModal = el('newsletterModal');
  const closeNews = el('closeNewsletterBtn');
  if (newsBtn && newsModal) {
    newsBtn.addEventListener('click', () => newsModal.classList.add('is-open'));
    if (closeNews) closeNews.addEventListener('click', () => newsModal.classList.remove('is-open'));
    newsModal.addEventListener('click', (e) => {
      if (e.target === newsModal) newsModal.classList.remove('is-open');
    });
  }

  // Newsletter Form
  const form = el('newsletterForm');
  const status = el('newsletterStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value || !input.value.includes('@')) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = '#ff6b6b';
        return;
      }
      status.textContent = 'Thank you for subscribing!';
      status.style.color = '#51cf66';
      input.value = '';
      setTimeout(() => {
        newsModal?.classList.remove('is-open');
        status.textContent = '';
      }, 1800);
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectDetail();
      profModal?.classList.remove('is-open');
      newsModal?.classList.remove('is-open');
    }
  });
}

/* ==========================================================================
   8. Bootstrapping
   ========================================================================== */
function init() {
  try {
    initWebGL();
  } catch (e) {
    console.warn(e);
  }

  try {
    renderFeaturedCards();
    renderFullIndex();
    setupCarouselControls();
    setupModals();

    const switchFeat = el('switchFeatured');
    const switchFull = el('switchFull');
    if (switchFeat) switchFeat.addEventListener('click', () => setView('featured'));
    if (switchFull) switchFull.addEventListener('click', () => setView('full'));

    // Dismiss loader smoothly
    setTimeout(() => {
      const loader = el('loaderOverlay');
      if (loader) {
        loader.classList.add('is-hidden');
        setTimeout(() => loader.remove(), 600);
      }
    }, 400);

    animate();
  } catch (err) {
    console.error('Fatal initialization error:', err);
    // Guarantee loader removal even if an error occurs
    const loader = el('loaderOverlay');
    if (loader) loader.remove();
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
