import { Currency, CurrencyRate, Expedition, Lodge, MigrationMonthData, WildlifeProfile } from '../types/safari';

export const CURRENCY_RATES: Record<Currency, CurrencyRate> = {
  USD: {
    symbol: '$',
    rate: 1,
    format: (amt) => `$${amt.toLocaleString('en-US')}`,
  },
  EUR: {
    symbol: '€',
    rate: 0.92,
    format: (amt) => `€${Math.round(amt * 0.92).toLocaleString('en-US')}`,
  },
  GBP: {
    symbol: '£',
    rate: 0.79,
    format: (amt) => `£${Math.round(amt * 0.79).toLocaleString('en-US')}`,
  },
  AUD: {
    symbol: 'A$',
    rate: 1.52,
    format: (amt) => `A$${Math.round(amt * 1.52).toLocaleString('en-US')}`,
  },
  ZAR: {
    symbol: 'R',
    rate: 18.4,
    format: (amt) => `R${Math.round(amt * 18.4).toLocaleString('en-US')}`,
  },
  VND: {
    symbol: '₫',
    rate: 25400,
    format: (amt) => `${Math.round(amt * 25400).toLocaleString('vi-VN')} ₫`,
  },
};

export const SAFARI_IMAGES = {
  hero: '/src/assets/images/hero_safari_migration_1792696402508.jpg',
  lodge: '/src/assets/images/safari_luxury_lodge_1792696402557.jpg',
  cheetah: '/src/assets/images/safari_wildlife_cheetah_1792696403203.jpg',
  balloon: '/src/assets/images/safari_balloon_sunrise_1792696403098.jpg',
};

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'great-migration-odyssey',
    title: 'The Great Migration & Mara Crossing Odyssey',
    titleVi: 'Hành trình Cuộc Đại Di Cư & Vượt Sông Mara Kỳ Vĩ',
    tagline: 'Witness two million herbivores defy apex river predators in the northern Serengeti and Maasai Mara.',
    taglineVi: 'Chiêm ngưỡng hai triệu linh dương và ngựa vằn vượt sông trước những kẻ săn mồi đỉnh cao.',
    region: 'East Africa',
    countries: ['Tanzania', 'Kenya'],
    durationDays: 8,
    durationNights: 7,
    priceUSD: 8450,
    featuredImage: SAFARI_IMAGES.hero,
    galleryImages: [SAFARI_IMAGES.hero, SAFARI_IMAGES.balloon, SAFARI_IMAGES.cheetah],
    wildlifeHighlights: ['Mara River Nile Crocodiles', 'Lion Prides', 'Cheetah Coalitions', 'Migration Herds', 'Black Rhinos'],
    landscapeType: 'Acacia savannah & riverine river crossings',
    bestMonths: ['July', 'August', 'September', 'October'],
    maxGroupSize: 6,
    comfortTier: 'Ultra-Luxe Signature',
    includedExperiences: [
      'Private modified 4x4 Land Cruiser with open pop-up roof',
      'Daily morning & twilight game tracking with Maasai master guide',
      'Bush sundowners & 5-course wilderness dining under acacia trees',
      'Internal bush charter flights between Arusha and Kogatende',
      'Full national park conservation fees and community conservancy permits'
    ],
    dailyItinerary: [
      {
        day: 1,
        title: 'Arrival in Arusha & Bush Flight to North Serengeti',
        titleVi: 'Đến Arusha & Bay thẳng vào Vùng Bắc Serengeti',
        description: 'Board a scenic light aircraft from Arusha bush airfield over the Great Rift Valley, touching down at Kogatende airstrip amid golden grasslands. First dusk game tracking drive en route to Bimau Mara Ridge Camp.',
        descriptionVi: 'Đáp chuyến bay ngắm cảnh từ Arusha qua Thung lũng Tách giãn Lớn, hạ cánh xuống đường băng Kogatende giữa đồng cỏ vàng.',
        lodge: 'Bimau North Serengeti Mobile Pavilion',
        meals: 'Dinner & Wine pairing',
        activities: ['Scenic bush flight', 'Golden hour game drive', 'Campfire welcome briefing']
      },
      {
        day: 2,
        title: 'Mara River Crossing Watch & Predator Tracking',
        titleVi: 'Theo dấu Điểm Vượt Sông Mara & Báo Săn',
        description: 'Full day along the iconic Mara River. Watch dramatic gatherings of wildebeest at crossing points #4 and #7, under the watchful gaze of colossal Nile crocodiles and resting lion prides.',
        descriptionVi: 'Trọn ngày quan sát các điểm vượt sông lịch sử của đàn linh dương và đàn cá sấu sông Nile.',
        lodge: 'Bimau North Serengeti Mobile Pavilion',
        meals: 'Full Bush Board & Champagne Sundowner',
        activities: ['All-day game tracking with bush picnic', 'Crossing monitoring', 'Night star-gaze astronomy']
      },
      {
        day: 3,
        title: 'Lamai Wedge & Hot Air Balloon Dawn Safari',
        titleVi: 'Vùng Lamai Wedge & Khinh Khí Cầu Bình Minh',
        description: 'Float quietly in a wicker basket as dawn paints the boundless savannah in amber and rose gold. Touch down for a silver-service champagne breakfast cooked on open embers in the wild.',
        descriptionVi: 'Bay lượn trên khinh khí cầu ngắm bình minh trên đồng cỏ bao la, thưởng thức bữa sáng champagne giữa thiên nhiên.',
        lodge: 'Bimau North Serengeti Mobile Pavilion',
        meals: 'Champagne Breakfast, Light Lunch, 4-Course Dinner',
        activities: ['Sunrise balloon expedition', 'Acacia bush breakfast', 'Afternoon leopard search']
      },
      {
        day: 4,
        title: 'Cross the Mara Border into Maasai Mara Private Conservancy',
        titleVi: 'Vượt Biên sang Khu Bảo tồn Tư nhân Maasai Mara',
        description: 'Transition into the secluded Mara North Conservancy. Enjoy nocturnal night game drives with infrared spotlighting — forbidden in the public reserve — to observe hunting leopards and aardwolves.',
        descriptionVi: 'Di chuyển sang khu bảo tồn riêng Mara North. Trải nghiệm tour đêm bằng đèn hồng ngoại độc quyền.',
        lodge: 'Bimau Mara Cliff Suite',
        meals: 'Full Bush Board & Fine Dining',
        activities: ['Private border clearance flight', 'Cultural elder encounter', 'Nocturnal predator drive']
      },
      {
        day: 5,
        title: 'Big Cat Territory & Walking Safari with Maasai Trackers',
        titleVi: 'Lãnh địa Mèo Lớn & Đi bộ Khám phá cùng Thợ săn Maasai',
        description: 'Walk on foot with an armed ranger and elder Maasai trackers, decoding animal spoor, medicinal bush botany, and tracking cheetah marks in the red soil.',
        descriptionVi: 'Đi bộ giữa thảo nguyên cùng kiểm lâm và già làng Maasai để học cách đọc dấu chân thú.',
        lodge: 'Bimau Mara Cliff Suite',
        meals: 'Full Bush Board',
        activities: ['Morning walking safari', 'Bushcraft & tracking lesson', 'Twilight hill sundowner']
      },
      {
        day: 6,
        title: 'The Mara Plains & Elephant Migration Corridors',
        titleVi: 'Đồng bằng Mara & Hành lang Voi rừng',
        description: 'Spend unhurried hours tracking large elephant matriarchal families and rare black rhinos grazing in the mist-shrouded valleys.',
        descriptionVi: 'Theo dõi các đàn voi rừng khổng lồ và tê giác đen quý hiếm ăn cỏ trong thung lũng sương mù.',
        lodge: 'Bimau Mara Cliff Suite',
        meals: 'Full Bush Board',
        activities: ['Extended photography drive', 'Plunge pool relaxation', 'Bush dinner with choir song']
      },
      {
        day: 7,
        title: 'Apex Predator Habitat & River Bluff Farewell Feast',
        titleVi: 'Vương quốc Kẻ Săn Mồi & Tiệc Chia Tay Thảo Nguyên',
        description: 'Final full day tracing the pride territories of the Musiara Marsh lions and tree-climbing leopards. Gala starlight dinner set around a roaring cedarwood fire.',
        descriptionVi: 'Ngày cuối cùng theo chân đàn sư tử đầm lầy Musiara danh tiếng và tiệc tối dưới bầu trời sao rực rỡ.',
        lodge: 'Bimau Mara Cliff Suite',
        meals: 'Gala Starlight Bush Barbecue',
        activities: ['Morning big cat search', 'Wildlife photography review with guide', 'Farewell gala banquet']
      },
      {
        day: 8,
        title: 'Final Bush Drive & Flight to Nairobi / Kilimanjaro',
        titleVi: 'Chuyến Xe Rừng Cuối Cùng & Bay về Nairobi',
        description: 'Early dawn birding and game drive followed by hot bush coffee. Scheduled charter flight to Wilson Airport in Nairobi with panoramic Rift Valley views.',
        descriptionVi: 'Lái xe ngắm chim buổi sớm, thưởng thức cà phê nóng trước khi bay về sân bay Wilson tại Nairobi.',
        lodge: 'Day room at Hemingway Nairobi (Included)',
        meals: 'Breakfast & Gourmet Lunch',
        activities: ['Sunrise drive', 'Charter flight to Nairobi', 'International transfer']
      }
    ]
  },
  {
    id: 'serengeti-ngorongoro-big-five',
    title: 'Serengeti Starlight & Ngorongoro Caldera Big Five',
    titleVi: 'Bầu Trời Sao Serengeti & Miệng Núi Lửa Ngorongoro',
    tagline: 'Descend 600 meters into the UNESCO volcanic caldera to find all Big Five in a single morning.',
    taglineVi: 'Hạ độ cao 600m xuống lòng chảo núi lửa cổ đại UNESCO để chiêm ngưỡng trọn vẹn Big Five.',
    region: 'Tanzania',
    countries: ['Tanzania'],
    durationDays: 7,
    durationNights: 6,
    priceUSD: 7200,
    featuredImage: SAFARI_IMAGES.lodge,
    galleryImages: [SAFARI_IMAGES.lodge, SAFARI_IMAGES.hero, SAFARI_IMAGES.cheetah],
    wildlifeHighlights: ['Black Rhino sanctuary', 'Caldera Lions', 'Giant Bull Elephants', 'Flamingo salt lakes', 'Leopards'],
    landscapeType: 'Volcanic caldera rim, golden plains & acacia woodland',
    bestMonths: ['January', 'February', 'March', 'June', 'July', 'December'],
    maxGroupSize: 6,
    comfortTier: 'Classic Luxury',
    includedExperiences: [
      'Ngorongoro Crater rim luxury suite with private fireplace and caldera views',
      'Private 4x4 safari vehicle with dedicated specialist driver-naturalist',
      'All crater descent fees and UNESCO preservation conservation levies',
      'Serengeti bush flight connections',
      'Gourmet picnics on the caldera floor by Hippo Pool'
    ],
    dailyItinerary: [
      {
        day: 1,
        title: 'Arusha to Manyara Escarpment & Ngorongoro Highlands',
        titleVi: 'Từ Arusha lên Cao nguyên Ngorongoro',
        description: 'Drive up the breathtaking Rift Valley escarpment through lush coffee plantations into the misty highland forest on the crater rim.',
        descriptionVi: 'Hành trình vượt dốc cao nguyên qua những đồn điền cà phê trù phú lên khu rừng nguyên sinh vành chảo miệng núi lửa.',
        lodge: 'Bimau Crater Rim Sanctuary',
        meals: 'Welcome Lunch & 3-Course Highland Dinner',
        activities: ['Scenic escarpment transfer', 'Crater rim sunset walk', 'Warm fire lounge briefing']
      },
      {
        day: 2,
        title: 'Dawn Descent into the Ngorongoro Lost World',
        titleVi: 'Bình minh Hạ xuống Lòng Chảo Ngorongoro Kỳ Bí',
        description: 'Drop through the morning clouds to the 260 sq km crater floor. Track endangered black rhinos, pride lions around Lake Magadi, and flamingo flocks.',
        descriptionVi: 'Xuống đáy miệng núi lửa rộng 260 km2 để tìm tê giác đen quý hiếm và bầy hồng hạc tuyệt mỹ.',
        lodge: 'Bimau Crater Rim Sanctuary',
        meals: 'Bush Breakfast by Hippo Pool & Gourmet Dinner',
        activities: ['6-hour caldera game drive', 'Hippo pool lakeside lunch', 'Maasai boma cultural talk']
      },
      {
        day: 3,
        title: 'Olduvai Gorge Heritage to Central Serengeti',
        titleVi: 'Từ Cái Nôi Nhân Loại Olduvai đến Trung tâm Serengeti',
        description: 'Stop at the Cradle of Humankind at Olduvai Gorge before driving onto the boundless plains of Seronera, known for high leopard and cheetah density.',
        descriptionVi: 'Thăm di tích tiền sử Olduvai Gorge trước khi tiến vào thung lũng Seronera ngập tràn báo hoa mai.',
        lodge: 'Bimau Serengeti Wilderness Pavilion',
        meals: 'Full Bush Board',
        activities: ['Anthropology site tour', 'Seronera river drive', 'Sundowners over rocky kopjes']
      },
      {
        day: 4,
        title: 'The Great Kopjes & Lion Territory Tracking',
        titleVi: 'Khối Đá Kopjes Hùng Vĩ & Lãnh Thổ Sư Tử',
        description: 'Explore Moru Kopjes, tracking solitary leopards draped on acacia limbs and resident lion prides sunbathing on granite outcrops.',
        descriptionVi: 'Khám phá Moru Kopjes, ngắm báo hoa mai nằm vắt vẻo trên cành cây keo và đàn sư tử sưởi nắng trên đá hoa cương.',
        lodge: 'Bimau Serengeti Wilderness Pavilion',
        meals: 'Full Bush Board',
        activities: ['Granite kopjes expedition', 'Ancient rock art viewing', 'Night audio bush listening session']
      },
      {
        day: 5,
        title: 'Serengeti Calving & Endless Plains Game',
        titleVi: 'Mùa Sinh Nở Đồng Bằng Serengeti',
        description: 'Follow massive herds of nursing wildebeest and playful zebra foals, monitored closely by packs of spotted hyenas and cheetahs.',
        descriptionVi: 'Theo dõi hàng ngàn linh dương con mới chào đời trên đồng cỏ, trong tầm mắt của linh cẩu và báo đốm.',
        lodge: 'Bimau Serengeti Wilderness Pavilion',
        meals: 'Full Bush Board',
        activities: ['Full-day predator tracking', 'Wilderness champagne toast', 'Starlight storytelling']
      },
      {
        day: 6,
        title: 'Sunrise Balloon Safari & Wilderness Farewell',
        titleVi: 'Khinh Khí Cầu Rạng Đông & Đêm Tiệc Thảo Nguyên',
        description: 'Glide above the early morning canopy as the sun breaks over the eastern horizon. Conclude the day with a secluded bush gala banquet.',
        descriptionVi: 'Bay bổng trên khinh khí cầu ngắm mặt trời nhô lên từ đường chân trời và dự tiệc nướng cao cấp giữa rừng đêm.',
        lodge: 'Bimau Serengeti Wilderness Pavilion',
        meals: 'Champagne Bush Breakfast & Gala Dinner',
        activities: ['Optional sunrise balloon flight', 'Afternoon cheetah tracking', 'Traditional fireside toast']
      },
      {
        day: 7,
        title: 'Seronera Flight to Kilimanjaro International',
        titleVi: 'Bay từ Seronera về Sân bay Quốc tế Kilimanjaro',
        description: 'Final morning coffee overlooking the savanna waterhole. Bush flight back to Kilimanjaro airport for your onward travel.',
        descriptionVi: 'Cà phê sáng bên đầm nước ngắm hươu cao cổ, trước khi bay về Kilimanjaro kết thúc hành trình.',
        lodge: 'Departure',
        meals: 'Hearty Breakfast',
        activities: ['Morning waterhole watch', 'Scenic return flight']
      }
    ]
  },
  {
    id: 'okavango-chobe-water-safari',
    title: 'Okavango Delta & Chobe River Wilderness Odyssey',
    titleVi: 'Đồng Bằng Sông Okavango & Dòng Sông Chobe Botswana',
    tagline: 'Glide in traditional wooden mokoro canoes through water lilies alongside swimming elephants and leopards.',
    taglineVi: 'Lướt thuyền gỗ mokoro truyền thống qua dòng nước trong vắt bên cạnh những đàn voi bơi lội.',
    region: 'Southern Africa',
    countries: ['Botswana'],
    durationDays: 7,
    durationNights: 6,
    priceUSD: 9800,
    featuredImage: SAFARI_IMAGES.cheetah,
    galleryImages: [SAFARI_IMAGES.cheetah, SAFARI_IMAGES.lodge, SAFARI_IMAGES.hero],
    wildlifeHighlights: ['Swimming Elephants', 'African Wild Dogs', 'Red Lechwe', 'Sitatunga', 'Hippos & Pel’s Fishing Owl'],
    landscapeType: 'Pristine labyrinth of papyrus lagoons, palm islands & floodplains',
    bestMonths: ['May', 'June', 'July', 'August', 'September', 'October'],
    maxGroupSize: 4,
    comfortTier: 'Ultra-Luxe Signature',
    includedExperiences: [
      'Helicopter door-off transfers over the delta channels with aerial photography',
      'Private poler for daily mokoro gliding through secret waterways',
      'Motorized boat sunset safaris on the Chobe River among 100+ elephant pods',
      'Exclusive private concession traversing rights with off-road permit',
      'All premium wines, spirits, and chef-curated delta fare'
    ],
    dailyItinerary: [
      {
        day: 1,
        title: 'Helicopter Flight from Maun into Deep Okavango',
        titleVi: 'Trực Thăng Từ Maun Bay Thẳng Vào Trung Tâm Okavango',
        description: 'Lift off from Maun in an open-door helicopter, flying low over snaking silver waterways and herds of red lechwe to Bimau Water Sanctuary.',
        descriptionVi: 'Trải nghiệm trực thăng mở cửa bay thấp trên những nhánh sông uốn lượn và đàn linh dương lechwe.',
        lodge: 'Bimau Okavango Water Sanctuary',
        meals: 'High Tea & 5-Course Island Dinner',
        activities: ['Scenic helicopter flight', 'Sunset champagne dock', 'Island evening walk']
      },
      {
        day: 2,
        title: 'Mokoro Canoe Trails & Foot Tracking on Palm Islands',
        titleVi: 'Đi Thuyền Mokoro & Đi Bộ Tìm Vết Thú Trên Đảo Cọ',
        description: 'Wake to birdsong and drift silently in a dug-out wooden canoe steered by a native poler. Stop on remote sandy islands for foot tracking.',
        descriptionVi: 'Lướt thuyền mokoro yên tĩnh không tiếng động cơ qua những rặng súng nước, ghé các đảo hoang dã tìm dấu chân thú.',
        lodge: 'Bimau Okavango Water Sanctuary',
        meals: 'Full Bush Board',
        activities: ['Mokoro water trail', 'Island botany & animal tracking', 'Starlit lantern dinner']
      },
      {
        day: 3,
        title: 'Predator Island & African Wild Dog Denning',
        titleVi: 'Đảo Thú Săn Mồi & Đàn Chó Hoang Châu Phi Hiếm Có',
        description: 'Dry-land 4x4 game drive on Chief’s Island searching for endangered African wild dogs during their high-speed morning hunts.',
        descriptionVi: 'Đi xe chuyên dụng trên đảo Chief tìm kiếm đàn chó hoang châu phi trong những cuộc săn mồi tốc độ kinh ngạc.',
        lodge: 'Bimau Okavango Water Sanctuary',
        meals: 'Full Bush Board',
        activities: ['Wild dog tracking', 'Delta fishing experience', 'Night spotlight drive']
      },
      {
        day: 4,
        title: 'Light Aircraft Flight to Chobe National Park & Savuti',
        titleVi: 'Bay Sang Vườn Quốc Gia Chobe & Thung Lũng Savuti',
        description: 'Fly northeast over the wilderness to Chobe. Check into your river-facing suite overlooking the majestic Chobe River water corridor.',
        descriptionVi: 'Chuyến bay ngắn đến Chobe - nơi có mật độ voi rừng tự nhiên lớn nhất thế giới.',
        lodge: 'Bimau Chobe River Bluff Lodge',
        meals: 'Full Bush Board',
        activities: ['Bush flight', 'Afternoon game drive along the riverfront', 'Sunken hide wildlife photography']
      },
      {
        day: 5,
        title: 'Chobe River Safari Boat & Giant Elephant Crossing',
        titleVi: 'Thuyền Safari Sông Chobe & Cảnh Voi Bơi Vượt Dòng',
        description: 'Cruise on a custom flat-bottom photographic boat equipped with 360-degree gimbal camera seats. Watch elephant families swim with trunks raised like snorkels.',
        descriptionVi: 'Đi thuyền chuyên dụng ngắm hàng chục con voi bơi vượt sông với chiếc vòi giơ cao như ống thở.',
        lodge: 'Bimau Chobe River Bluff Lodge',
        meals: 'Full Bush Board',
        activities: ['Photographic boat cruise', 'Close-range hippo & croc encounters', 'Riverside sundowners']
      },
      {
        day: 6,
        title: 'Savuti Marsh Lions & Ancient Baobabs',
        titleVi: 'Sư Tử Vùng Đầm Savuti & Những Cây Bao Báp Nghìn Năm',
        description: 'Track the legendary elephant-hunting lion prides of Savuti and visit mystical San rock paintings on the volcanic hills.',
        descriptionVi: 'Theo dấu đàn sư tử Savuti huyền thoại và chiêm ngưỡng những cây bao báp nghìn năm tuổi cùng tranh khắc đá cổ xưa.',
        lodge: 'Bimau Chobe River Bluff Lodge',
        meals: 'Full Bush Board & Private Wine Cellar Tasting',
        activities: ['Full-day Savuti marsh drive', 'Ancient baobab grove walk', 'Farewell braai feast']
      },
      {
        day: 7,
        title: 'Victoria Falls Extension or Flight to Johannesburg',
        titleVi: 'Chuyến Thăm Thác Victoria Hoặc Bay về Johannesburg',
        description: 'Morning tea with river mist. Cross to Victoria Falls for a scenic flight over "The Smoke That Thunders" or connect to Johannesburg.',
        descriptionVi: 'Thưởng thức trà sáng bên dòng sông sương sớm trước khi tiếp tục hành trình tới Thác Victoria hùng vĩ.',
        lodge: 'Departure',
        meals: 'Breakfast',
        activities: ['Morning riverfront view', 'Transfer to Kasane airport']
      }
    ]
  },
  {
    id: 'bwindi-gorilla-volcanoes',
    title: 'Gorilla Mist & Savanna Primates of the Rift',
    titleVi: 'Sương Mù Khỉ Đột Bwindi & Linh Trưởng Núi Lửa',
    tagline: 'Gaze into the amber eyes of a wild 200kg mountain gorilla silverback in the primordial Bwindi rain forest.',
    taglineVi: 'Nhìn vào đôi mắt hổ phách của khỉ đột lưng bạc 200kg trong khu rừng nhiệt đới nguyên sinh Bwindi.',
    region: 'East Africa',
    countries: ['Uganda', 'Rwanda'],
    durationDays: 6,
    durationNights: 5,
    priceUSD: 8900,
    featuredImage: SAFARI_IMAGES.lodge,
    galleryImages: [SAFARI_IMAGES.lodge, SAFARI_IMAGES.cheetah, SAFARI_IMAGES.hero],
    wildlifeHighlights: ['Mountain Gorillas', 'Golden Monkeys', 'Chimpanzees', 'Tree-climbing Lions of Ishasha', 'Albertine Endemic Birds'],
    landscapeType: 'Misty cloud forests, volcanic peaks & emerald valleys',
    bestMonths: ['June', 'July', 'August', 'December', 'January', 'February'],
    maxGroupSize: 4,
    comfortTier: 'Ultra-Luxe Signature',
    includedExperiences: [
      'Official Uganda Wildlife Authority Gorilla Trekking Permit ($800 value included)',
      '1-on-1 private porter and expert indigenous tracker team for every guest',
      'Luxury forest canopy villa with personal heated volcanic stone fireplace & butler',
      'Flight from Entebbe to Kihihi bush runway',
      'Ishasha tree-climbing lion tracking excursion'
    ],
    dailyItinerary: [
      {
        day: 1,
        title: 'Entebbe to Bwindi Cloud Forest via Kihihi Flight',
        titleVi: 'Bay từ Entebbe đến Kihihi & Rừng Bwindi',
        description: 'Fly over southwestern Uganda’s terraced emerald hills to Kihihi, then ascend into the UNESCO Bwindi Impenetrable Forest.',
        descriptionVi: 'Bay qua những ngọn đồi ruộng bậc thang xanh mướt đến Bwindi - Di sản Thế giới UNESCO.',
        lodge: 'Bimau Bwindi Canopy Sanctuary',
        meals: 'Lunch & Fireside Forest Feast',
        activities: ['Scenic bush flight', 'Forest mist walk', 'Volcano lodge check-in']
      },
      {
        day: 2,
        title: 'The Great Mountain Gorilla Trek Encounter',
        titleVi: 'Chuyến Trek Khỉ Đột Lưng Bạc Trọng Đại',
        description: 'Trek into the lush, tangle-vined rainforest with trackers. Spend one profound, unforgettable hour sitting quietly just meters from a wild mountain gorilla family.',
        descriptionVi: 'Đi bộ sâu vào rừng già cùng đội ngũ dẫn đường, dành một giờ đồng hồ lắng đọng ngắm gia đình khỉ đột hoang dã.',
        lodge: 'Bimau Bwindi Canopy Sanctuary',
        meals: 'Bush Trek Packed Lunch & Celebration 5-Course Dinner',
        activities: ['Mountain gorilla encounter', 'Post-trek deep tissue massage', 'Fireside ranger debrief']
      },
      {
        day: 3,
        title: 'Batwa Elder Trail & Forest Rainforest Canopy Walk',
        titleVi: 'Con Đường Thợ Rừng Batwa & Cầu Treo Tán Rừng',
        description: 'Learn ancient forest survival skills, honey harvesting, and bow-making from indigenous Batwa elders, followed by an afternoon birding canopy walk.',
        descriptionVi: 'Tìm hiểu tri thức rừng sâu, cách lấy mật ong rừng của người bản địa Batwa và đi dạo trên cầu treo ngọn cây.',
        lodge: 'Bimau Bwindi Canopy Sanctuary',
        meals: 'Full Board',
        activities: ['Indigenous cultural immersion', 'Canopy suspension walk', 'Sunset terrace tea']
      },
      {
        day: 4,
        title: 'Queen Elizabeth National Park & Tree-Climbing Lions',
        titleVi: 'Vườn Quốc Gia Queen Elizabeth & Sư Tử Leo Cây',
        description: 'Drive down to the Ishasha sector of Queen Elizabeth National Park to search for lions sleeping lazily on the broad limbs of giant fig trees.',
        descriptionVi: 'Xuống đồng bằng Ishasha tìm kiếm những đàn sư tử độc đáo có thói quen leo trèo nằm ngủ trên cành cây vả khổng lồ.',
        lodge: 'Bimau Ishasha River Camp',
        meals: 'Full Board',
        activities: ['Ishasha fig tree search', 'Kazinga channel boat safari', 'Bush barbecue']
      },
      {
        day: 5,
        title: 'Kazinga Channel Hippo Cruise & Chimpanzee Gorge',
        titleVi: 'Đi Thuyền Kazinga Ngắm Hà Mã & Hẻm Núi Tinh Tinh Kyambura',
        description: 'Morning boat safari along the Kazinga Channel hosting the highest concentration of hippos in Africa, followed by tracking wild chimpanzees in Kyambura Gorge.',
        descriptionVi: 'Đi thuyền trên kênh Kazinga nơi tập trung hà mã đông nhất châu Phi và tìm tinh tinh hoang dã ở hẻm Kyambura.',
        lodge: 'Bimau Ishasha River Camp',
        meals: 'Full Board',
        activities: ['Hippo cruise', 'Chimpanzee gorge tracking', 'Farewell campfire cocktail']
      },
      {
        day: 6,
        title: 'Return Bush Flight to Entebbe International',
        titleVi: 'Bay Trở Về Sân Bay Quốc Tế Entebbe',
        description: 'Final morning watching the mist lift from the savannah. Scheduled charter back to Entebbe for international connections.',
        descriptionVi: 'Ngắm nhìn sương sớm tan biến trên thảo nguyên trước khi bay về Entebbe kết thúc chuyến phiêu lưu.',
        lodge: 'Departure',
        meals: 'Breakfast',
        activities: ['Sunrise safari', 'Return scenic flight']
      }
    ]
  }
];

export const LODGES: Lodge[] = [
  {
    id: 'mara-cliff-suite',
    name: 'Bimau Mara Cliff Suite',
    location: 'Mara North Conservancy, Kenya',
    country: 'Kenya',
    description: 'Perched high on a granite escarpment overlooking the Mara River basin, with panoramic floor-to-ceiling canvas, heated copper plunge pools, and open starlight decks.',
    descriptionVi: 'Tọa lạc trên đỉnh vách đá granite nhìn xuống dòng sông Mara, với bể bơi nước ấm riêng, nội thất gỗ tếch cao cấp và giường ngắm sao ngoài trời.',
    image: SAFARI_IMAGES.lodge,
    highlights: ['Infinity heated plunge pool', 'Private vintage Land Cruiser', 'Dedicated Maasai butler', 'Off-grid solar 100%'],
    suiteCount: 8,
    coordinates: "1° 14' 32\" S, 35° 08' 21\" E",
    ecoFeatures: ['Zero single-use plastic', 'Solar thermal heating', 'On-site greywater wetland filtration']
  },
  {
    id: 'serengeti-mobile-pavilion',
    name: 'Bimau Serengeti Migration Pavilion',
    location: 'Kogatende & Seronera, Tanzania',
    country: 'Tanzania',
    description: 'An elegant, eco-nomadic luxury tented camp designed to shift position twice yearly, positioning guests directly in the heart of the million-strong migration herds.',
    descriptionVi: 'Khu lều bạt du mục sinh thái xa xỉ di chuyển hai lần một năm để luôn đặt du khách ngay tâm điểm của đàn di cư 2 triệu con.',
    image: SAFARI_IMAGES.hero,
    highlights: ['Direct herd proximity', 'Hand-stitched vintage canvas', 'Open-air bush baths', 'Silently powered by solar batteries'],
    suiteCount: 10,
    coordinates: "1° 34' 12\" S, 34° 51' 44\" E",
    ecoFeatures: ['Zero-impact footprint', 'Portable solar array', 'Local ranger artisan craft furnishings']
  },
  {
    id: 'okavango-water-sanctuary',
    name: 'Bimau Okavango Water Sanctuary',
    location: 'Moremi Tongue, Okavango Delta, Botswana',
    country: 'Botswana',
    description: 'Raised on reclaimed timber stilts above clear papyrus channels, offering private mokoro canoe docks, open-air rainforest showers, and wild elephant walkways beneath.',
    descriptionVi: 'Xây dựng trên các cột gỗ trên đầm nước Okavango trong vắt, có bến thuyền mokoro riêng và lối đi cho đàn voi hoang dã bên dưới.',
    image: SAFARI_IMAGES.cheetah,
    highlights: ['Private mokoro canoe dock', 'Door-off heli pad access', 'Night audio hydrophones', 'Wine cellar in the reeds'],
    suiteCount: 6,
    coordinates: "19° 17' 04\" S, 23° 21' 58\" E",
    ecoFeatures: ['100% bio-degradable lodge supplies', 'Reverse osmosis water filtration', 'Local community co-ownership']
  }
];

export const MIGRATION_CALENDAR: MigrationMonthData[] = [
  {
    month: 'January',
    monthVi: 'Tháng 1',
    region: 'Southern Serengeti & Ndutu Plains',
    eventTitle: 'Calving Season Begins & Predator Frenzy',
    eventTitleVi: 'Mùa Sinh Nở Bắt Đầu & Săn Mồi Đỉnh Cao',
    description: 'Over 8,000 wildebeest calves born daily on the mineral-rich Ndutu short-grass plains. Cheetahs, lions, and hyenas stalk the edges of the nursery herds.',
    descriptionVi: 'Hơn 8.000 linh dương con sinh ra mỗi ngày trên đồng cỏ Ndutu. Báo săn và sư tử rình rập ở cự ly gần.',
    animalCount: '1.8 Million Wildebeest & 400,000 Zebras',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau Ndutu Seasonal Camp', 'Kusini Sanctuary'],
    mapHotspot: { x: 52, y: 76, name: 'Ndutu & South Serengeti' }
  },
  {
    month: 'February',
    monthVi: 'Tháng 2',
    region: 'Ndutu Plains & Ngorongoro Buffer',
    eventTitle: 'Apex Nursery & Cheetah Hunting Coalitions',
    eventTitleVi: 'Thời Điểm Sinh Nở Cao Nhất & Báo Săn Hợp Sức',
    description: 'The peak of the synchronization calving. Tens of thousands of young animals run within minutes of birth across endless horizons.',
    descriptionVi: 'Đỉnh cao mùa sinh nở đồng loạt. Hàng chục ngàn con non học chạy chỉ sau vài phút chào đời.',
    animalCount: '2 Million Herbivores',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau Ndutu Seasonal Camp'],
    mapHotspot: { x: 55, y: 78, name: 'Ndutu Plains' }
  },
  {
    month: 'March',
    monthVi: 'Tháng 3',
    region: 'South-Central Serengeti',
    eventTitle: 'Herds Muster for the Great Trek Northward',
    eventTitleVi: 'Tập Hợp Quân Đoàn Tiến Về Phía Bắc',
    description: 'As grasses deplete, the immense herds assemble into columns stretching up to 40 kilometers long, beginning their relentless march north.',
    descriptionVi: 'Khi cỏ cạn kiệt, các đàn tập hợp thành những dải di chuyển dài tới 40km tiến dần lên phía bắc.',
    animalCount: '1.9 Million Herbivores',
    predatorActivity: 'High',
    recommendedCamps: ['Bimau Seronera Valley Pavilion'],
    mapHotspot: { x: 50, y: 64, name: 'Moru Kopjes & Seronera' }
  },
  {
    month: 'April',
    monthVi: 'Tháng 4',
    region: 'Central Serengeti & Western Corridor',
    eventTitle: 'Green Season Rutting & Dramatic Skies',
    eventTitleVi: 'Mùa Động Dực & Bầu Trời Thảo Nguyên Tráng Lệ',
    description: 'The great rut begins with male wildebeest battling for territory amid emerald-green landscapes and cinematic afternoon thunderclouds. Very few travelers.',
    descriptionVi: 'Mùa sinh sản rộn rã trên thảo nguyên xanh biếc, vắng bóng đám đông du khách và thích hợp cho nhiếp ảnh nghệ thuật.',
    animalCount: '1.8 Million',
    predatorActivity: 'High',
    recommendedCamps: ['Bimau Seronera Ridge'],
    mapHotspot: { x: 42, y: 55, name: 'Western Corridor Approach' }
  },
  {
    month: 'May',
    monthVi: 'Tháng 5',
    region: 'Western Corridor & Grumeti River',
    eventTitle: 'The Grumeti River Gauntlet',
    eventTitleVi: 'Thử Thách Vượt Dòng Sông Grumeti',
    description: 'Herds gather on the banks of the Grumeti River. Giant river crocodiles wait in deep pools as the first courageous animals leap into the current.',
    descriptionVi: 'Đàn thú tập trung bên bờ sông Grumeti đối đầu với những đàn cá sấu khổng lồ rình rập ở các vũng nước sâu.',
    animalCount: '1.7 Million',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau Grumeti River Retreat'],
    mapHotspot: { x: 34, y: 46, name: 'Grumeti River Banks' }
  },
  {
    month: 'June',
    monthVi: 'Tháng 6',
    region: 'Grumeti River & Ikorongo Reserve',
    eventTitle: 'Grumeti Crossings & Northward Surge',
    eventTitleVi: 'Vượt Dòng Grumeti & Đợt Sóng Tiến Lên Phía Bắc',
    description: 'Massive crossings continue across the Grumeti. The columns continue pushing northward toward the remote and pristine Kogatende region.',
    descriptionVi: 'Những đợt vượt sông quy mô tiếp diễn. Đàn thú tiếp tục tiến về vùng bắc Kogatende hoang sơ.',
    animalCount: '1.7 Million',
    predatorActivity: 'High',
    recommendedCamps: ['Bimau Grumeti River Retreat', 'Bimau North Pavilion'],
    mapHotspot: { x: 38, y: 38, name: 'Ikorongo & North Seronera' }
  },
  {
    month: 'July',
    monthVi: 'Tháng 7',
    region: 'Northern Serengeti & Mara River Banks',
    eventTitle: 'First Epic Mara River Crossings',
    eventTitleVi: 'Những Cuộc Vượt Sông Mara Lịch Sử Đầu Tiên',
    description: 'The spectacle begins. Immense clouds of dust rise as herds plunge down sheer river bluffs into the rushing, crocodile-filled Mara River.',
    descriptionVi: 'Cảnh tượng vĩ đại nhất: Bụi mù mịt khi hàng ngàn con linh dương lao mình xuống vách đá sông Mara cuộn sóng.',
    animalCount: '1.8 Million',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau North Serengeti Mobile Pavilion'],
    mapHotspot: { x: 48, y: 22, name: 'Kogatende & Mara River' }
  },
  {
    month: 'August',
    monthVi: 'Tháng 8',
    region: 'Northern Serengeti & Maasai Mara',
    eventTitle: 'Peak Mara River Crossings & Predator Showdowns',
    eventTitleVi: 'Đỉnh Điểm Vượt Sông Mara & Cuộc Đấu Sinh Tồn',
    description: 'The golden hour of safari. Daily crossings take place across multiple points along the Kenya-Tanzania border with non-stop predator engagement.',
    descriptionVi: 'Thời khắc vàng của safari: các cuộc vượt sông diễn ra hàng ngày ở cả hai bên biên giới Kenya và Tanzania.',
    animalCount: '2 Million Herds across borders',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau North Serengeti Mobile Pavilion', 'Bimau Mara Cliff Suite'],
    mapHotspot: { x: 50, y: 16, name: 'Mara River Crossings #4-#7' }
  },
  {
    month: 'September',
    monthVi: 'Tháng 9',
    region: 'Maasai Mara Reserve & Conservancies',
    eventTitle: 'Mara Green Plains Carpeted in Wildlife',
    eventTitleVi: 'Thảo Nguyên Mara Ngập Tràn Muông Thú',
    description: 'The herds graze across the lush open plains of the Maasai Mara. Prime season for lion pride interactions and exceptional cheetah coalition chases.',
    descriptionVi: 'Các đàn thú gặm cỏ trên đồng cỏ bao la của Maasai Mara, mùa lý tưởng nhất để xem báo săn tăng tốc bắt mồi.',
    animalCount: '1.9 Million in Mara ecosystem',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau Mara Cliff Suite'],
    mapHotspot: { x: 52, y: 12, name: 'Maasai Mara Core Triangle' }
  },
  {
    month: 'October',
    monthVi: 'Tháng 10',
    region: 'Maasai Mara & North Serengeti',
    eventTitle: 'Final Reverse River Crossings',
    eventTitleVi: 'Những Đợt Vượt Sông Ngược Dòng Về Nam',
    description: 'With brief rains beginning in the south, herds start crossing the Mara River southward in reverse, providing dramatic second-chance crossing sights.',
    descriptionVi: 'Khi những cơn mưa đầu mùa gọi về phương nam, các đàn thú bắt đầu bơi ngược sông Mara trở về Tanzania.',
    animalCount: '1.8 Million',
    predatorActivity: 'High',
    recommendedCamps: ['Bimau Mara Cliff Suite', 'Bimau North Pavilion'],
    mapHotspot: { x: 49, y: 20, name: 'Mara River Southbound' }
  },
  {
    month: 'November',
    monthVi: 'Tháng 11',
    region: 'Eastern Serengeti & Lobo Hills',
    eventTitle: 'The Southbound Lightning Trek',
    eventTitleVi: 'Đoàn Quân Di Cư Nhanh Về Phương Nam',
    description: 'Herds travel rapidly down the eastern flank through Lobo and Gol Mountains following fresh rain showers and sweet young grasses.',
    descriptionVi: 'Đoàn thú di chuyển nhanh chóng dọc theo sườn đông qua Lobo và rặng núi Gol đón những cơn mưa ngọt lành.',
    animalCount: '1.8 Million',
    predatorActivity: 'High',
    recommendedCamps: ['Bimau Lobo Wilderness Camp'],
    mapHotspot: { x: 62, y: 44, name: 'Lobo Hills & East Serengeti' }
  },
  {
    month: 'December',
    monthVi: 'Tháng 12',
    region: 'Southern Serengeti & Ndutu Edge',
    eventTitle: 'Arrival on the Sweet Short Grass Plains',
    eventTitleVi: 'Trở Về Miền Cỏ Ngọt Phương Nam',
    description: 'The migration closes its 1,000-kilometer annual loop, arriving back in Southern Serengeti to feed, mate, and prepare for the new calving cycle.',
    descriptionVi: 'Cuộc đại di cư khép lại vòng lặp 1.000km, trở lại đồng bằng phía Nam để chuẩn bị cho chu kỳ sinh nở kế tiếp.',
    animalCount: '1.9 Million',
    predatorActivity: 'Extreme',
    recommendedCamps: ['Bimau Ndutu Seasonal Camp'],
    mapHotspot: { x: 54, y: 72, name: 'Ndutu South Plains' }
  }
];

export const WILDLIFE_PROFILES: WildlifeProfile[] = [
  {
    id: 'lion',
    commonName: 'African Lion',
    swahiliName: 'Simba',
    scientificName: 'Panthera leo',
    category: 'Big 5',
    bestSpots: ['Serengeti Seronera Valley', 'Maasai Mara Musiara Marsh', 'Ngorongoro Crater Floor'],
    sightingLikelihood: 'Guaranteed',
    behaviorFact: 'Pride males sleep up to 20 hours per day under shady acacia branches to conserve explosive energy for night hunts.',
    behaviorFactVi: 'Sư tử đầu đàn có thể ngủ tới 20 giờ mỗi ngày để tích lũy năng lượng bùng nổ cho các cuộc đi săn đêm.'
  },
  {
    id: 'leopard',
    commonName: 'African Leopard',
    swahiliName: 'Chui',
    scientificName: 'Panthera pardus pardus',
    category: 'Big 5',
    bestSpots: ['Seronera Riverine Woodlands', 'Moremi Okavango Islands', 'Samburu Ewaso Nyiro'],
    sightingLikelihood: 'Very High',
    behaviorFact: 'Incredible arboreal strength allows leopards to hoist impalas and gazelles weighing twice their body weight into tree forks.',
    behaviorFactVi: 'Sức mạnh leo trèo phi thường cho phép báo hoa mai kéo con mồi nặng gấp đôi cơ thể lên chạc cây cao để tránh linh cẩu.'
  },
  {
    id: 'cheetah',
    commonName: 'Cheetah',
    swahiliName: 'Duma',
    scientificName: 'Acinonyx jubatus',
    category: 'Predator',
    bestSpots: ['Ndutu Short Grass Plains', 'Mara North Conservancy', 'Central Serengeti Plains'],
    sightingLikelihood: 'Very High',
    behaviorFact: 'Accelerates from 0 to 100 km/h in under 3 seconds, using its semi-retractable claws as athletic sprinting cleats.',
    behaviorFactVi: 'Tăng tốc từ 0 đến 100 km/h chỉ trong chưa đầy 3 giây, móng vuốt bán co rút hoạt động như đinh giày điền kinh.'
  },
  {
    id: 'rhino',
    commonName: 'Eastern Black Rhino',
    swahiliName: 'Kifaru',
    scientificName: 'Diceros bicornis michaeli',
    category: 'Big 5',
    bestSpots: ['Ngorongoro Crater Floor', 'Ol Pejeta Conservancy', 'Serengeti Moru Rhino Sanctuary'],
    sightingLikelihood: 'High',
    behaviorFact: 'Possesses a prehensile hooked upper lip designed specifically to strip thorny acacia browse and succulents.',
    behaviorFactVi: 'Sở hữu môi trên hình móc linh hoạt để tước các nhánh cây keo đầy gai và thực vật mọng nước.'
  },
  {
    id: 'elephant',
    commonName: 'African Bush Elephant',
    swahiliName: 'Tembo',
    scientificName: 'Loxodonta africana',
    category: 'Big 5',
    bestSpots: ['Chobe Riverfront', 'Amboseli Marshlands', 'Tarangire Baobab Valley'],
    sightingLikelihood: 'Guaranteed',
    behaviorFact: 'Communicates through low-frequency infrasound rumbles that vibrate through the ground for over 10 kilometers.',
    behaviorFactVi: 'Giao tiếp bằng sóng hạ âm tần số thấp truyền qua lòng đất xa hơn 10km mà tai người không thể nghe thấy.'
  },
  {
    id: 'mountain-gorilla',
    commonName: 'Mountain Gorilla',
    swahiliName: 'Ngagi',
    scientificName: 'Gorilla beringei beringei',
    category: 'Primate',
    bestSpots: ['Bwindi Impenetrable National Park', 'Volcanoes National Park'],
    sightingLikelihood: 'Guaranteed',
    behaviorFact: 'Shares 98.3% DNA with humans. Dominant silverbacks construct fresh foliage nests each evening on the forest floor.',
    behaviorFactVi: 'Chia sẻ 98,3% bộ gen với con người. Khỉ đột lưng bạc làm tổ lá tươi mới mỗi buổi tối để ngủ.'
  }
];

export const CONSERVATION_INITIATIVES = [
  {
    title: 'Rhino Guardian Patrols',
    titleVi: 'Biệt Đội Bảo Vệ Tê Giác Đen',
    metric: '100% Zero-Poaching',
    metricVi: '100% Không Săn Bắn Trái Phép',
    description: 'We fund dedicated ranger squads, satellite GPS tracking transmitters, and K9 tracking dogs protecting vulnerable black rhino breeding corridors in Tanzania and Kenya.',
    descriptionVi: 'Chúng tôi tài trợ trực tiếp cho các đội kiểm lâm, thiết bị định vị vệ tinh và chó nghiệp vụ K9 bảo vệ tê giác đen.'
  },
  {
    title: 'Maasai Tracker Guild & Education',
    titleVi: 'Hội Thợ Săn & Giáo Dục Maasai',
    metric: '92% Indigenous Guides',
    metricVi: '92% Hướng Dẫn Viên Bản Địa',
    description: 'Rather than importing guides, all Bimau lead naturalists are native Maasai, Samburu, and Batwa elders whose generational wisdom powers our wildlife tracking.',
    descriptionVi: 'Toàn bộ chuyên gia tự nhiên của Bimau đều là con em của các bộ tộc Maasai, Samburu và Batwa với kho tàng tri thức ngàn đời.'
  },
  {
    title: 'Clean Water & Solar Clinics',
    titleVi: 'Nước Sạch & Y Tế Năng Lượng Mặt Trời',
    metric: '14 Savannah Villages',
    metricVi: '14 Bản Làng Thảo Nguyên',
    description: 'For every guest journey booked, 5% goes directly to solar water desalination boreholes and mobile veterinary dispensaries in community buffer zones.',
    descriptionVi: 'Mỗi chuyến đi đóng góp 5% chi phí cho các giếng khoan nước sạch năng lượng mặt trời và trạm y tế lưu động cho cộng đồng.'
  }
];

export const PACKING_ITEMS = [
  {
    category: 'Attire & Bush Layers',
    items: [
      'Neutral-toned safari shirts & trousers (khaki, olive, sand, beige — strictly avoid dark blue & black which attract tsetse flies)',
      'Lightweight thermal fleece or down jacket for crisp dawn & twilight game drives (temperatures drop to 10°C / 50°F)',
      'Wide-brimmed sun hat with chin strap for open 4x4 vehicles',
      'Comfortable lightweight hiking shoes or broken-in trail boots with wool socks'
    ]
  },
  {
    category: 'Optics & Photography Kit',
    items: [
      'High-quality 8x42 or 10x42 binoculars (essential for each traveler)',
      'Camera body with telephoto zoom (100-400mm or 70-200mm recommended)',
      'Soft beanbag for stabilizing heavy camera lenses on the Land Cruiser roof bar',
      'Dust-proof camera wraps or zip-bags to protect sensor during dry savannah drives'
    ]
  },
  {
    category: 'Luggage & Bush Flights',
    items: [
      'Strict 15 kg (33 lbs) soft-sided duffel bag limit including carry-on for internal bush planes (hard suitcases cannot fit in aircraft pods)',
      'Universal power bank and extra camera batteries (cold mornings deplete battery life faster)',
      'Yellow fever vaccination booklet (mandatory if transiting through endemic zones)'
    ]
  }
];
