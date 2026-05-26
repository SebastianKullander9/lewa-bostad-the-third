import { StaticImageData } from "next/image";

// Glansbaggen imports
import Glansbaggen_badrum_001 from "@/public/projects/glansbaggen/Glansbaggen_badrum_001.webp";
import Glansbaggen_barnrum_001 from "@/public/projects/glansbaggen/Glansbaggen_barnrum_001.webp";
import Glansbaggen_exterior_1_002 from "@/public/projects/glansbaggen/Glansbaggen_exterior_1_002.webp";
import Glansbaggen_exterior_2_002 from "@/public/projects/glansbaggen/Glansbaggen_exterior_2_002.webp";
import Glansbaggen_exterior_3_002 from "@/public/projects/glansbaggen/Glansbaggen_exterior_3_002.webp";
import Glansbaggen_kok_001 from "@/public/projects/glansbaggen/Glansbaggen_kök_001.webp";
import Glansbaggen_kok_2_001 from "@/public/projects/glansbaggen/Glansbaggen_kök_2_001.webp";
import Glansbaggen_ovre_hall_001 from "@/public/projects/glansbaggen/Glansbaggen_Övre_hall_001.webp";
import Glansbaggen_sovrum_001 from "@/public/projects/glansbaggen/Glansbaggen_Sovrum_001.webp";
import Glansbaggen_vardagsrum_001 from "@/public/projects/glansbaggen/Glansbaggen_Vardagsrum_001.webp";

// Kummelnäshöjden imports
import Kummelnas_exterior_1_back_black_003 from "@/public/projects/kummelnashojden/Exterior_1_Back_Black_003.webp";
import Kummelnas_exterior_1_back_wood_003 from "@/public/projects/kummelnashojden/Exterior_1_Back_Wood_003.webp";
import Kummelnas_exterior_1_black_002 from "@/public/projects/kummelnashojden/Exterior_1_Black_002.webp";
import Kummelnas_exterior_1_wood_002 from "@/public/projects/kummelnashojden/Exterior_1_Wood_002.webp";
import Kummelnas_exterior_2_back_black_002 from "@/public/projects/kummelnashojden/Exterior_2_Back_Black_002.webp";
import Kummelnas_exterior_2_back_wood_002 from "@/public/projects/kummelnashojden/Exterior_2_Back_Wood_002.webp";
import Kummelnas_exterior_2_black_001 from "@/public/projects/kummelnashojden/Exterior_2_Black_001.webp";
import Kummelnas_exterior_2_wood_002 from "@/public/projects/kummelnashojden/Exterior_2_Wood_002.webp";
import Kummelnas_exterior_3_black_002 from "@/public/projects/kummelnashojden/Exterior_3_Black_002.webp";
import Kummelnas_exterior_3_wood_002 from "@/public/projects/kummelnashojden/Exterior_3_Wood_002.webp";
import Kummelnas_interior_1_002 from "@/public/projects/kummelnashojden/Interior_1_002.webp";
import Kummelnas_interior_2_002 from "@/public/projects/kummelnashojden/Interior_2_002.webp";
import Kummelnas_interior_3_002 from "@/public/projects/kummelnashojden/Interior_3_002.webp";
import Kummelnas_interior_4_002 from "@/public/projects/kummelnashojden/Interior_4_002.webp";
import Kummelnas_interior_5_003 from "@/public/projects/kummelnashojden/Interior_5_003.webp";
import Kummelnas_interior_6_002 from "@/public/projects/kummelnashojden/Interior_6_002.webp";
import Kummelnas_interior_7_002 from "@/public/projects/kummelnashojden/Interior_7_002.webp";

export interface ProjectImage {
    src: StaticImageData;
    alt: string;
}

export interface ProjectTextBlock {
    title: string;
    text: string;
}

export interface ProjectObjectInfo {
    title: string;
    value: string;
}

export interface Project {
    slug: string;
    title: string;
    location: string;
    status: string;
    textBlocks: ProjectTextBlock[];
    objectInfo: ProjectObjectInfo[];
    images: {
        thumbnail: ProjectImage;
        gallery: ProjectImage[];
    };
}

export const projectData: Project[] = [
    {
        slug: "glansbaggen",
        title: "Glansbaggen",
        location: "Tumba",
        status: "Genomförd",
        textBlocks: [
            {
                title: "Rubrik om projektet xxxxx",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta risus dolor, ac tempus nulla efficitur 
                    et. Nulla suscipit aliquet blandit. Aliquam erat volutpat. Vestibulum congue tincidunt pretium. Etiam metus nisl, laoreet
                     a volutpat quis, auctor nec tortor. Suspendisse efficitur, lorem eu porta placerat, turpis ipsum suscipit turpis, eu suscipit
                      elit sapien placerat est. Curabitur auctor nulla maximus hendrerit egestas. Curabitur orci velit, vehicula ac tortor at, 
                      bibendum bibendum metus.`,
            },
            {
                title: "Området",
                text: `Fågelbyn är en växande stadsdel med familjevänlig karaktär, bara 10 minuter från Tumba
                    Centrum. Utanför dörren finns allt som behövs för en bekväm vardag: förskola, restauranger
                    och butiker men också stora grönområden kring Lida naturreservat.`,
            },
        ],
        objectInfo: [
            {
                title: "Byggstart",
                value: "2026",
            },
            {
                title: "Inflyttning",
                value: "2027",
            },
            {
                title: "Antal bostäder",
                value: "12 radhus",
            },
            {
                title: "Antal rum",
                value: "6 RoK",
            },
        ],
        images: {
            thumbnail: {
                src: Glansbaggen_vardagsrum_001,
                alt: "Exteriör av Glansbaggen",
            },
            gallery: [
                { src: Glansbaggen_exterior_1_002, alt: "Exteriör av Glansbaggen" },
                { src: Glansbaggen_exterior_2_002, alt: "Exteriör av Glansbaggen" },
                { src: Glansbaggen_exterior_3_002, alt: "Exteriör av Glansbaggen" },
                { src: Glansbaggen_vardagsrum_001, alt: "Vardagsrum i Glansbaggen" },
                { src: Glansbaggen_kok_001, alt: "Kök i Glansbaggen" },
                { src: Glansbaggen_kok_2_001, alt: "Kök i Glansbaggen" },
                { src: Glansbaggen_badrum_001, alt: "Badrum i Glansbaggen" },
                { src: Glansbaggen_barnrum_001, alt: "Barnrum i Glansbaggen" },
                { src: Glansbaggen_sovrum_001, alt: "Sovrum i Glansbaggen" },
                { src: Glansbaggen_ovre_hall_001, alt: "Övre hall i Glansbaggen" },
            ],
        },
    },
    {
        slug: "kummelnashojden",
        title: "Kummelnäshöjden",
        location: "Nacka",
        status: "Planerad",
        textBlocks: [
            {
                title: "Ett hem att längta till",
                text: `Välkommen till Kummelnäshöjden – ett unikt bostadsprojekt i hjärtat av Kummelnäs, Nacka.
                    Med högt och soligt läge på Bågvägen utvecklar vi 14 stilfulla parhus och 6 charmiga
                    minivillor. Perfekt för dig som vill bo nära skärgården men ändå ha staden inom räckhåll.
                    Bostäderna är moderna med tidlös arkitektur, genomtänkta planlösningar och hållbara
                    materialval. De karakteriseras av generösa ljusinsläpp, öppna sällskapsytor och smarta
                    lösningar för hela familjens behov.`,
            },
            {
                title: "Området",
                text: `Kummelnäs är en av Nackas mest eftertraktade pärlor – omgivet av hav, naturreservat och
                    småbåtshamnar. Här bor du med skogspromenader, badvikar och lugnet som vardag,
                    samtidigt som du når Slussen på under 30 minuter.`,
            },
        ],
        objectInfo: [
            {
                title: "Byggstart",
                value: "2025",
            },
            {
                title: "Inflyttning",
                value: "2025",
            },
            {
                title: "Antal bostäder",
                value: "14 parhus och 6 studiohus",
            },
            {
                title: "Antal rum",
                value: "6 RoK",
            },
        ],
        images: {
            thumbnail: {
                src: Kummelnas_interior_2_002,
                alt: "Exteriör av Kummelnäshöjden",
            },
            gallery: [
                { src: Kummelnas_exterior_1_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_1_black_002, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_1_back_wood_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_1_back_black_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_2_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_2_black_001, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_2_back_wood_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_2_back_black_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_3_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_3_black_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_interior_1_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_2_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_3_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_4_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_5_003, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_6_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_7_002, alt: "Interiör av Kummelnäshöjden" },
            ],
        },
    },
    {
        slug: "kringlan",
        title: "Kringlan",
        location: "Tyresö",
        status: "Planerad",
        textBlocks: [
            {
                title: "Xxxxxxxxx xxxxx",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta risus dolor, ac tempus nulla efficitur 
                    et. Nulla suscipit aliquet blandit. Aliquam erat volutpat. Vestibulum congue tincidunt pretium. Etiam metus nisl, laoreet
                    a volutpat quis, auctor nec tortor. Suspendisse efficitur, lorem eu porta placerat, turpis ipsum suscipit turpis, eu suscipit
                    elit sapien placerat est. Curabitur auctor nulla maximus hendrerit egestas. Curabitur orci velit, vehicula ac tortor at, 
                    bibendum bibendum metus.`,
            },
            {
                title: "Området",
                text: `Din nya adress Kringelkroken 2 har det bästa av två världar. Här bor du med naturen inpå
                    knuten och samtidigt på bekvämt avstånd till Tyresö Centrum med ett stort utbud av
                    butiker, restauranger och service. Bara några hundra meter från din dörr sträcker ett stort
                    naturreservat ut sig med motionsslingor, skidspår, badsjöar, bondgårdar och äventyrliga
                    friluftsaktiviteter för hela familjen.`,
            },
        ],
        objectInfo: [
            {
                title: "Byggstart",
                value: "2026",
            },
            {
                title: "Inflyttning",
                value: "2027",
            },
            {
                title: "Antal bostäder",
                value: "14 parhus och 7 studiohus",
            },
            {
                title: "Antal rum",
                value: "6 RoK",
            },
        ],
        images: {
            thumbnail: {
                src: Glansbaggen_exterior_2_002,
                alt: "Exteriör av Kummelnäshöjden",
            },
            gallery: [
                { src: Kummelnas_exterior_1_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_1_black_002, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_1_back_wood_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_1_back_black_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_2_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_2_black_001, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_2_back_wood_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_2_back_black_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_3_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_3_black_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_interior_1_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_2_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_3_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_4_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_5_003, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_6_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_7_002, alt: "Interiör av Kummelnäshöjden" },
            ],
        },
    },
    {
        slug: "ark44",
        title: "ARK44",
        location: "Nacka",
        status: "Planerad",
        textBlocks: [
            {
                title: "Xxxxx xxx xxxxx",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta risus dolor, ac tempus nulla efficitur 
                    et. Nulla suscipit aliquet blandit. Aliquam erat volutpat. Vestibulum congue tincidunt pretium. Etiam metus nisl, laoreet
                    a volutpat quis, auctor nec tortor. Suspendisse efficitur, lorem eu porta placerat, turpis ipsum suscipit turpis, eu suscipit
                    elit sapien placerat est. Curabitur auctor nulla maximus hendrerit egestas. Curabitur orci velit, vehicula ac tortor at, 
                    bibendum bibendum metus.`,
            },
            {
                title: "Området",
                text: `Kummelnäs är en av Nackas mest eftertraktade pärlor – omgivet av hav, naturreservat och
                    småbåtshamnar. Här bor du med skogspromenader, badvikar och lugnet som vardag,
                    samtidigt som du når Slussen på under 30 minuter.`,
            },
        ],
        objectInfo: [
            {
                title: "Byggstart",
                value: "2026/2027",
            },
            {
                title: "Inflyttning",
                value: "2027",
            },
            {
                title: "Antal bostäder",
                value: "44 xxxx och xxxxx",
            },
            {
                title: "Antal rum",
                value: "5–6 RoK",
            },
        ],
        images: {
            thumbnail: {
                src: Kummelnas_exterior_2_wood_002,
                alt: "Exteriör av Kummelnäshöjden",
            },
            gallery: [
                { src: Kummelnas_exterior_1_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_1_black_002, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_1_back_wood_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_1_back_black_003,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_2_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_2_black_001, alt: "Exteriör av Kummelnäshöjden" },
                {
                    src: Kummelnas_exterior_2_back_wood_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                {
                    src: Kummelnas_exterior_2_back_black_002,
                    alt: "Bakre exteriör av Kummelnäshöjden",
                },
                { src: Kummelnas_exterior_3_wood_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_exterior_3_black_002, alt: "Exteriör av Kummelnäshöjden" },
                { src: Kummelnas_interior_1_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_2_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_3_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_4_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_5_003, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_6_002, alt: "Interiör av Kummelnäshöjden" },
                { src: Kummelnas_interior_7_002, alt: "Interiör av Kummelnäshöjden" },
            ],
        },
    },
];
