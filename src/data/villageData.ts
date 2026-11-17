export type DestinationCategory = 'Semua' | 'Alam' | 'Edukasi' | 'Panorama' | 'Menginap';

export interface DestinationItem {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, 'Semua'>;
  image: string;
  alt: string;
  duration: string;
  ticketPrice: number;
  elevation: string;
  openHours: string;
  shortDesc: string;
  highlights: string[];
  mapPosition: { x: number; y: number };
  walkFromGate: string;
  accessNote: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  pricePerPerson: number;
  unitLabel: string;
  minPeople: number;
  duration: string;
  featuredLabel?: string;
  image: string;
  alt: string;
  includes: string[];
  suitableFor: string;
}

export type GalleryCategory = 'Semua' | 'Alam' | 'Budaya & Kopi' | 'Penginapan';

export interface GalleryPhoto {
  id: string;
  title: string;
  spot: string;
  category: Exclude<GalleryCategory, 'Semua'>;
  image: string;
  alt: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  visitorName: string;
  originCity: string;
  packageTaken: string;
  visitMonth: string;
  rating: number;
  quote: string;
}

export interface CityRouteGuide {
  city: string;
  travelTime: string;
  distance: string;
  routeNote: string;
}

export const WHATSAPP_NUMBER = '6281228457910';

export const VILLAGE_INFO = {
  name: 'Desa Wisata Lereng Asri',
  shortName: 'Lereng Asri',
  address: 'Jl. Raya Lereng Selatan KM 8, Kec. Ungaran Barat, Kab. Semarang, Jawa Tengah',
  coordinatesLabel: '-7.1865° LS, 110.3542° BT',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-7.1865,110.3542',
  openHours: 'Setiap hari · 05.30 – 17.30 WIB (Homestay 24 jam)',
  heroImage: '/src/assets/images/hero_lereng_asri_1794886931992.jpg',
  heroAlt: 'Pemandangan lembah hijau Desa Wisata Lereng Asri saat matahari terbit dengan anjungan bambu menghadap kebun teh dan pegunungan',
};

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'curug-bening',
    name: 'Curug Bening Lereng',
    category: 'Alam',
    image: '/src/assets/images/dest_air_terjun_1794886932146.jpg',
    alt: 'Air terjun jernih Curug Bening Lereng yang mengalir di tebing batu berlumut dengan kolam hijau alami',
    duration: '15 menit jalan kaki',
    ticketPrice: 15000,
    elevation: '1.120 mdpl',
    openHours: '07.00 – 16.30 WIB',
    shortDesc:
      'Air terjun alami berair jernih dan sejuk dengan jalur setapak batu yang aman untuk keluarga serta anak-anak.',
    highlights: ['Jalur paving & pegangan bambu', 'Kolam dangkal aman bermain air', 'Gazebo istirahat & ruang bilas bersih'],
    mapPosition: { x: 22, y: 34 },
    walkFromGate: '15 menit jalan santai dari parkir utama',
    accessNote: 'Jalur setapak tertata rapi, cocok untuk keluarga dan lansia.',
  },
  {
    id: 'kebun-teh',
    name: 'Teras Kebun Teh Asri',
    category: 'Edukasi',
    image: '/src/assets/images/dest_kebun_teh_1794886932917.jpg',
    alt: 'Hamparan terasering kebun teh hijau dengan jembatan bambu dan pendopo di lereng gunung',
    duration: '10 menit dari gerbang',
    ticketPrice: 12000,
    elevation: '1.180 mdpl',
    openHours: '06.00 – 17.00 WIB',
    shortDesc:
      'Jembatan bambu sepanjang hamparan teh hijau organik dengan sesi edukasi petik daun teh bersama warga desa.',
    highlights: ['Jalur bambu ramah foto & sejuk', 'Edukasi petik pucuk teh pagi', 'Gratis seduhan teh hangat lokal'],
    mapPosition: { x: 46, y: 46 },
    walkFromGate: '10 menit jalan kaki melalui jalur landai',
    accessNote: 'Tersedia kendaraan antar-jemput desa (odong-odong wisata) dari area parkir.',
  },
  {
    id: 'kampung-kopi',
    name: 'Kampung Kopi & Pendopo Joglo',
    category: 'Edukasi',
    image: '/src/assets/images/dest_kampung_kopi_1794886934336.jpg',
    alt: 'Pendopo kayu joglo tradisional dengan sajian kopi arabika hangat dan kudapan desa menghadap perbukitan',
    duration: '5 menit dari parkir',
    ticketPrice: 20000,
    elevation: '1.050 mdpl',
    openHours: '08.00 – 20.00 WIB',
    shortDesc:
      'Pusat ramah-tamah warga desa tempat mencicipi kopi arabika sangrai tradisional dan makanan khas pegunungan.',
    highlights: ['Belajar sangrai kopi wajan tanah liat', 'Cicip singkong keju & tempe mendoan', 'Pendopo luas & mushola bersih'],
    mapPosition: { x: 64, y: 65 },
    walkFromGate: '5 menit dari gerbang utama',
    accessNote: 'Akses datar ramah kursi roda dan kereta dorong bayi.',
  },
  {
    id: 'bukit-sunrise',
    name: 'Bukit Pandang Fajar',
    category: 'Panorama',
    image: '/src/assets/images/dest_bukit_sunrise_1794886934481.jpg',
    alt: 'Gardu pandang kayu di puncak Bukit Pandang Fajar menghadap lautan awan saat matahari terbit',
    duration: '20 menit jalan kaki',
    ticketPrice: 15000,
    elevation: '1.280 mdpl',
    openHours: '05.00 – 17.30 WIB',
    shortDesc:
      'Gardu pandang kayu menghadap lautan awan pagi dan gugusan gunung di timur tanpa perlu pendakian berat.',
    highlights: ['Pemandangan matahari terbit 360°', 'Bangku kayu luas untuk rombongan', 'Warung sarapan hangat buka pukul 05.00'],
    mapPosition: { x: 76, y: 24 },
    walkFromGate: '20 menit jalur tangga landai atau 5 menit naik ojek wisata',
    accessNote: 'Disarankan tiba sebelum pukul 05.45 WIB untuk menikmati kabut pagi.',
  },
  {
    id: 'pinus-senja',
    name: 'Bumi Perkemahan Pinus Senja',
    category: 'Menginap',
    image: '/src/assets/images/galeri_camping_api_1794886934609.jpg',
    alt: 'Tenda glamping kanvas bernuansa hangat di antara pohon pinus pada sore hari',
    duration: '8 menit dari parkir',
    ticketPrice: 25000,
    elevation: '1.150 mdpl',
    openHours: '24 jam (Check-in 14.00 WIB)',
    shortDesc:
      'Kawasan hutan pinus teduh dengan tenda keluarga berdekatan kayu, lampu hangat, dan kamar mandi air hangat.',
    highlights: ['Tenda dek kayu lengkap kasur & selimut', 'Toilet bersih & air hangat 24 jam', 'Area api unggun aman untuk keluarga'],
    mapPosition: { x: 35, y: 74 },
    walkFromGate: '8 menit dari area parkir utama',
    accessNote: 'Mobil keluarga bisa menurunkan barang langsung di dekat pos kemah.',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'jelajah-pagi',
    title: 'Paket Jelajah Pagi',
    subtitle: 'Setengah Hari · Santai & Segar',
    pricePerPerson: 85000,
    unitLabel: '/orang',
    minPeople: 2,
    duration: '06.00 – 10.30 WIB',
    image: '/src/assets/images/dest_kebun_teh_1794886932917.jpg',
    alt: 'Wisatawan berjalan santai di jalur bambu kebun teh Lereng Asri pada pagi hari',
    includes: [
      'Tiket masuk Bukit Pandang Fajar & Teras Kebun Teh',
      'Pemandu lokal ramah berpengalaman',
      '1x sarapan ringan: teh tubruk / kopi & gorengan hangat',
      'Parkir kendaraan gratis di pos utama',
    ],
    suitableFor: 'Pasangan, keluarga kecil, dan tamu akhir pekan',
  },
  {
    id: 'seharian-komplit',
    title: 'Paket Seharian Komplit',
    subtitle: 'Seharian Penuh · Paling Banyak Dipilih',
    pricePerPerson: 165000,
    unitLabel: '/orang',
    minPeople: 2,
    duration: '07.30 – 16.00 WIB',
    featuredLabel: 'Pilihan Favorit Wisatawan',
    image: '/src/assets/images/dest_air_terjun_1794886932146.jpg',
    alt: 'Wisatawan menikmati kesegaran air terjun Curug Bening Lereng',
    includes: [
      'Akses semua 4 destinasi utama termasuk Curug Bening',
      'Makan siang prasmanan masakan kampung di Pendopo Joglo',
      'Kelas singkat petik teh & seduh kopi lereng gunung',
      'Dokumentasi foto perjalanan & minuman selamat datang',
    ],
    suitableFor: 'Liburan keluarga, reuni sahabat, dan tamu luar kota',
  },
  {
    id: 'menginap-keluarga',
    title: 'Paket Menginap & Kemah Pinus',
    subtitle: '2 Hari 1 Malam · Tidur Nyaman di Alam',
    pricePerPerson: 385000,
    unitLabel: '/orang',
    minPeople: 4,
    duration: '2 Hari 1 Malam',
    featuredLabel: 'Cocok untuk Libur Panjang',
    image: '/src/assets/images/galeri_camping_api_1794886934609.jpg',
    alt: 'Area glamping Pinus Senja saat senja dengan lampu tenda hangat',
    includes: [
      '1 malam di Tenda Glamping Pinus atau Homestay Joglo Warga',
      '3x makan rumahan (malam, sarapan pagi, dan makan siang)',
      'Sesi api unggun malam dengan jagung bakar & wedang jahe',
      'Pemandu trekking fajar ke Bukit Pandang & Curug Bening',
    ],
    suitableFor: 'Keluarga dengan anak-anak dan rombongan sahabat',
  },
  {
    id: 'rombongan-edukasi',
    title: 'Paket Rombongan & Outbound',
    subtitle: 'Minimal 15 Orang · Sekolah & Kantor',
    pricePerPerson: 140000,
    unitLabel: '/orang',
    minPeople: 15,
    duration: '08.00 – 15.30 WIB',
    image: '/src/assets/images/dest_kampung_kopi_1794886934336.jpg',
    alt: 'Suasana hangat di Pendopo Joglo Desa Wisata Lereng Asri untuk acara rombongan',
    includes: [
      'Sewa Pendopo Utama lengkap pengeras suara & proyektor',
      'Permainan kekompakan ramah alam di lapangan rumput',
      'Edukasi pertanian lereng gunung & pengolahan kopi desa',
      '1x makan siang kotak/prasmanan dan 2x kudapan tradisional',
    ],
    suitableFor: 'Rombongan sekolah, komunitas, dan gathering kantor',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Matahari Terbit dari Anjungan Bambu',
    spot: 'Gerbang Lembah Lereng Asri',
    category: 'Alam',
    image: '/src/assets/images/hero_lereng_asri_1794886931992.jpg',
    alt: 'Pemandangan pagi hari di anjungan bambu dengan latar pegunungan berkabut',
    caption: 'Suasana pukul 05.45 WIB saat kabut tipis mulai terangkat dari perkebunan teh.',
  },
  {
    id: 'gal-2',
    title: 'Kolam Alami Curug Bening',
    spot: 'Curug Bening Lereng',
    category: 'Alam',
    image: '/src/assets/images/dest_air_terjun_1794886932146.jpg',
    alt: 'Air terjun jernih dikelilingi tumbuhan pakis hijau',
    caption: 'Air pegunungan yang jernih dan sejuk sepanjang tahun, aman untuk bermain air di tepian.',
  },
  {
    id: 'gal-3',
    title: 'Jalur Bambu Kebun Teh',
    spot: 'Teras Kebun Teh Asri',
    category: 'Alam',
    image: '/src/assets/images/dest_kebun_teh_1794886932917.jpg',
    alt: 'Jembatan bambu membelah kebun teh hijau di lereng gunung',
    caption: 'Jalur pejalan kaki dari bambu petung yang terawat, nyaman dilalui tanpa sepatu gunung khusus.',
  },
  {
    id: 'gal-4',
    title: 'Ngopi Pagi Bersama Warga Desa',
    spot: 'Kampung Kopi & Pendopo Joglo',
    category: 'Budaya & Kopi',
    image: '/src/assets/images/dest_kampung_kopi_1794886934336.jpg',
    alt: 'Warga desa tersenyum ramah menyajikan kopi hangat di pendopo kayu',
    caption: 'Keramahan tuan rumah kampung yang menyambut wisatawan dengan kopi arabika panen sendiri.',
  },
  {
    id: 'gal-5',
    title: 'Lautan Awan Bukit Pandang',
    spot: 'Bukit Pandang Fajar',
    category: 'Alam',
    image: '/src/assets/images/dest_bukit_sunrise_1794886934481.jpg',
    alt: 'Wisatawan menikmati lautan awan pagi dari dek kayu puncak bukit',
    caption: 'Pemandangan awan pagi yang kerap muncul pada pukul 05.30 – 07.00 WIB di musim kemarau.',
  },
  {
    id: 'gal-6',
    title: 'Senja Hangat di Hutan Pinus',
    spot: 'Bumi Perkemahan Pinus Senja',
    category: 'Penginapan',
    image: '/src/assets/images/galeri_camping_api_1794886934609.jpg',
    alt: 'Tenda glamping kanvas menyala hangat di bawah pohon pinus saat senja',
    caption: 'Tenda berdekatan kayu dengan penerangan hangat dan kasur tebal agar tidur tetap nyenyak.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    visitorName: 'Ibu Ratna Kusumawardani',
    originCity: 'Semarang',
    packageTaken: 'Paket Seharian Komplit · 5 Orang',
    visitMonth: 'Oktober 2026',
    rating: 5.0,
    quote:
      'Kami membawa orang tua dan dua anak kecil, alhamdulillah jalannya tertata rapi dan tidak curam. Masakan kampung di pendopo enak sekali, pemandunya juga sangat sabar memandu foto keluarga.',
  },
  {
    id: 'testi-2',
    visitorName: 'Bapak Hendra Wijaya',
    originCity: 'Yogyakarta',
    packageTaken: 'Paket Menginap & Kemah Pinus · 4 Orang',
    visitMonth: 'September 2026',
    rating: 4.9,
    quote:
      'Awalnya ragu camping bersama anak SD, ternyata tendanya pakai alas kayu bersih, selimutnya tebal, dan toiletnya ada air hangat. Malam hari api unggun ditemani wedang jahe hangat, sangat berkesan.',
  },
  {
    id: 'testi-3',
    visitorName: 'Siti Nurhaliza & Rekan Kerja',
    originCity: 'Salatiga',
    packageTaken: 'Paket Rombongan & Outbound · 24 Orang',
    visitMonth: 'Agustus 2026',
    rating: 5.0,
    quote:
      'Pemesanan lewat WhatsApp langsung dibalas cepat oleh pengelola desa dengan rincian harga yang transparan. Tidak ada biaya tambahan mendadak saat di lokasi. Sangat direkomendasikan untuk acara kantor.',
  },
];

export const ROUTE_GUIDES: CityRouteGuide[] = [
  {
    city: 'Dari Kota Semarang',
    travelTime: '± 45 menit',
    distance: '28 km',
    routeNote: 'Melalui Tol Ungaran keluar Gerbang Ungaran, lalu ikuti arah Gunungpati – Lereng Selatan (jalan beraspal mulus dua arah).',
  },
  {
    city: 'Dari Kota Salatiga',
    travelTime: '± 35 menit',
    distance: '22 km',
    routeNote: 'Melalui jalan raya Bawen – Ungaran, belok ke jalur wisata lereng di Simpang Tiga Pasar Babadan.',
  },
  {
    city: 'Dari Yogyakarta / Solo',
    travelTime: '± 1 jam 45 menit',
    distance: '85 km',
    routeNote: 'Keluar Tol Bawen ke arah utara menuju Ungaran Selatan. Tersedia papan petunjuk kayu Desa Wisata Lereng Asri.',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
