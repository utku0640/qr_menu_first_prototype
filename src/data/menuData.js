import pastry from "./pastry";
import sweets from "./sweets";
import soups from "./soups";

const menuData = [
  {
    id: 0,
    name: "Ara Sıcaklar",
    image:
      "https://i20.haber7.net/resize/1300x788//haber/haber7/photos/2021/20/ara_sicak_nedir_ve_ara_sicak_nasil_yapilir_en_kolay_ara_sicak_tarifleri_1621415820_5234.jpg",
    forQuery: pastry,
  },

  {
    id: 1,
    name: "Tatlılar",
    image:
      "https://img-s1.onedio.com/id-622e5afab3bea8541154d04c/rev-0/w-600/h-337/f-jpg/s-b872f2ece6faa7a210036e5ea6eb2baec87d9f91.jpg",
    forQuery: sweets,
  },
  {
    id: 2,
    name: "Hamur İşi",
    image:
      "https://i.lezzet.com.tr/images-xxlarge-secondary/sahur-icin-hamurisi-tarifi-50363f51-c631-4925-bae7-5061d3190afb",
    forQuery: pastry,
  },
  {
    id: 3,
    name: "Çorbalar",
    image:
      "https://iasbh.tmgrup.com.tr/97b233/650/344/0/161/1152/765?u=https://isbh.tmgrup.com.tr/sbh/2020/02/14/lokanta-usulu-mercimek-corbasi-tarifi-mercimek-corbasi-nasil-yapilir-1581683224567.jpg",
    forQuery: soups,
  },
  {
    id: 4,
    name: "İçecekler",
    image:
      "https://www.drtaneryavuz.com/wp-content/uploads/2019/09/%C3%87ocuklar-%C4%B0%C3%A7in-Sa%C4%9Fl%C4%B1kl%C4%B1-%C4%B0%C3%A7ecekler.jpg",
    forQuery: soups,
  },
  {
    id: 5,
    name: "Başlangıçlar",
    image:
      "https://i.nefisyemektarifleri.com/2023/01/17/geleneksel-turk-yemekleri-medari-iftiharimiz.jpg",
    forQuery: soups,
  },
];

export default menuData;
