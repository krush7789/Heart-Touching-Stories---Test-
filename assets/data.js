/* All site content lives here. Every text is { en, hi }; leave one out and the site
   shows the other with an "Available in … only" note.
   SAMPLE CONTENT: stories, thoughts, coaching details and reel view counts are placeholders
   for the prototype. Replace with Vijay ji's real writing before launch. */

const SITE = {
  phone: '+91 94117 30873',
  wa: '919411730873',
  email: 'hearttouchingstorys5@gmail.com',
  topbar: {
    on: true,
    en: 'Alakh Niranjan · Jai Guru Gorakhnath',
    hi: 'अलख निरंजन · जय गुरु गोरखनाथ',
    link: { href: 'stories.html?cat=spiritual', en: 'Festival special: read stories of light and hope →', hi: 'त्योहार विशेष: रोशनी और उम्मीद की कहानियाँ पढ़ें →' },
  },
  stats: [
    { value: '17K+', en: 'Facebook family', hi: 'फेसबुक परिवार' },
    { value: { en: '7.3 lakh', hi: '7.3 लाख' }, en: 'views on one reel', hi: 'व्यूज़ एक रील पर' },
    { value: '56', en: 'Days of Seekh', hi: 'दिन की सीख' },
  ],
  social: {
    Facebook: 'https://www.facebook.com/hearttouchingstoryss',
    Instagram: 'https://www.instagram.com/hearttouching_storys/',
    YouTube: 'https://www.youtube.com/@hearttouchingsstorys',
    Pinterest: 'https://pin.it/2XN9u3iZh',
  },
};

const CATS = {
  relationships: { en: 'Relationships', hi: 'रिश्ते' },
  life: { en: 'Life Lessons', hi: 'जीवन की सीख' },
  motivation: { en: 'Motivation', hi: 'प्रेरणा' },
  spiritual: { en: 'Spiritual', hi: 'आध्यात्मिक' },
};

/* type: 'story' or 'blog'. pullAfter = paragraph index after which the pull quote appears.
   audio: path to Vijay ji's narration (player is hidden when empty). */
const STORIES = [
  {
    id: 'the-cracked-pot', type: 'story', cat: 'life', date: '2026-10-22', mins: 4, tags: ['kindness', 'self-worth'],
    title: { en: 'The Cracked Pot', hi: 'टूटा हुआ घड़ा' },
    sub: { en: 'A water-bearer, two pots and a path full of flowers.', hi: 'एक पनिहारा, दो घड़े और फूलों से भरा रास्ता।' },
    body: {
      en: [
        'Every morning, an old water-bearer in a hill village carried two clay pots on a pole across his shoulders. One pot was perfect. The other had a thin crack, and by the time he reached home it was only half full.',
        'For two years the cracked pot carried its shame quietly. One day it finally spoke: “I am sorry. Because of me, half of your hard work is wasted.”',
        'The old man smiled. “Did you notice the flowers on your side of the path? I knew about your crack, so I planted seeds there. Every day, as we walked back, you watered them. Without you, there would be no flowers for the temple.”',
        'The pot looked down at the path — and for the first time, it saw the colours it had been creating all along.',
      ],
      hi: [
        'पहाड़ के एक गाँव में एक बूढ़ा पनिहारा हर सुबह कंधे पर बाँस रखकर दो मिट्टी के घड़े ढोता था। एक घड़ा बिल्कुल सही था, दूसरे में एक पतली-सी दरार थी — घर पहुँचते-पहुँचते उसमें आधा ही पानी बचता।',
        'दो साल तक टूटा घड़ा चुपचाप अपनी शर्म ढोता रहा। एक दिन उससे रहा नहीं गया — “मुझे माफ़ कर दो। मेरी वजह से तुम्हारी आधी मेहनत बेकार जाती है।”',
        'बूढ़ा मुस्कुराया — “क्या तुमने अपनी तरफ़ के रास्ते पर खिले फूल देखे? मैं तुम्हारी दरार जानता था, इसलिए वहाँ बीज बो दिए। रोज़ लौटते समय तुम उन्हें सींचते रहे। तुम न होते, तो मंदिर के लिए फूल न होते।”',
        'घड़े ने रास्ते की ओर देखा — और पहली बार उसे वे रंग दिखे, जो वह अनजाने में रोज़ रचता आया था।',
      ],
    },
    pullAfter: 2,
    pull: { en: 'Without you, there would be no flowers for the temple.', hi: 'तुम न होते, तो मंदिर के लिए फूल न होते।' },
    lesson: { en: 'Our cracks are not our failures. Often, they are exactly where beauty grows.', hi: 'हमारी दरारें हमारी हार नहीं हैं। अक्सर वहीं से सुंदरता उगती है।' },
  },
  {
    id: 'one-starfish-at-a-time', type: 'story', cat: 'motivation', date: '2026-10-20', mins: 3, tags: ['hope', 'small steps'],
    title: { en: 'One Starfish at a Time', hi: 'एक-एक तारामछली' },
    sub: { en: 'Thousands on the shore, and one small girl who refused to give up.', hi: 'किनारे पर हज़ारों तारामछलियाँ और एक नन्ही लड़की जिसने हार नहीं मानी।' },
    body: {
      en: [
        'After a storm, thousands of starfish lay stranded on the beach, drying in the morning sun. A little girl walked among them, picking them up one by one and throwing them back into the sea.',
        'An old man watched her for a while and laughed. “There are thousands of them, beta. What difference can you possibly make?”',
        'She bent down, picked up another starfish and threw it into the waves. “It made a difference to that one,” she said.',
        'The old man stood quietly for a moment. Then he rolled up his sleeves and joined her.',
      ],
      hi: [
        'तूफ़ान के बाद समुद्र किनारे हज़ारों तारामछलियाँ पड़ी थीं, सुबह की धूप में सूखती हुईं। एक नन्ही लड़की उनके बीच चल रही थी — एक-एक को उठाती और वापस समुद्र में फेंक देती।',
        'एक बुज़ुर्ग कुछ देर देखते रहे, फिर हँस पड़े — “बेटा, यहाँ हज़ारों हैं। तुम्हारे ऐसा करने से क्या फ़र्क़ पड़ेगा?”',
        'लड़की ने झुककर एक और तारामछली उठाई और लहरों में फेंक दी — “इसके लिए तो फ़र्क़ पड़ गया।”',
        'बुज़ुर्ग एक पल चुप खड़े रहे। फिर उन्होंने आस्तीनें चढ़ाईं और उसके साथ जुट गए।',
      ],
    },
    pullAfter: 2,
    pull: { en: 'It made a difference to that one.', hi: 'इसके लिए तो फ़र्क़ पड़ गया।' },
    lesson: { en: 'You don’t have to change the whole world. Change one life today — that is enough to begin.', hi: 'पूरी दुनिया बदलना ज़रूरी नहीं। आज एक ज़िंदगी बदल दो — शुरुआत के लिए इतना काफ़ी है।' },
  },
  {
    id: 'a-glass-of-milk', type: 'story', cat: 'relationships', date: '2026-10-18', mins: 4, tags: ['kindness', 'gratitude'],
    title: { en: 'A Glass of Milk', hi: 'एक गिलास दूध' },
    sub: { en: 'A hungry student, a kind stranger, and a bill paid years later.', hi: 'एक भूखा छात्र, एक दयालु अजनबी, और बरसों बाद चुकाया गया बिल।' },
    body: {
      en: [
        'A poor student, selling books door to door to pay for his studies, knocked on a house one evening. He was so hungry that he decided to ask for a meal — but when a young woman opened the door, he lost his nerve and asked only for a glass of water.',
        'She saw the hunger in his eyes and brought him a large glass of milk instead. “How much do I owe you?” he asked. “Nothing,” she said. “Mother taught us never to take payment for a kindness.”',
        'Years later, the woman fell seriously ill and was brought to a big city hospital. The doctor who treated her — and saved her life — was that same student.',
        'When the bill came, she was afraid to open it. Across the bottom, in the doctor’s handwriting, were the words: “Paid in full with one glass of milk.”',
      ],
      hi: [
        'पढ़ाई का खर्च निकालने के लिए घर-घर किताबें बेचने वाला एक गरीब छात्र एक शाम एक दरवाज़े पर पहुँचा। भूख इतनी थी कि सोचा खाना माँग ले — पर जब एक युवती ने दरवाज़ा खोला, तो हिम्मत जवाब दे गई और उसने बस एक गिलास पानी माँगा।',
        'युवती ने उसकी आँखों में भूख पढ़ ली और पानी की जगह एक बड़ा गिलास दूध ले आई। “कितने पैसे दूँ?” उसने पूछा। “कुछ नहीं,” वह बोली, “माँ ने सिखाया है कि भलाई की कीमत नहीं लेते।”',
        'बरसों बाद वह महिला गंभीर रूप से बीमार पड़ी और शहर के बड़े अस्पताल लाई गई। जिस डॉक्टर ने उसका इलाज किया और उसकी जान बचाई — वह वही छात्र था।',
        'बिल आया तो वह उसे खोलने से डर रही थी। नीचे डॉक्टर की लिखावट में लिखा था — “पूरा भुगतान हो चुका है, एक गिलास दूध से।”',
      ],
    },
    pullAfter: 1,
    pull: { en: 'Mother taught us never to take payment for a kindness.', hi: 'माँ ने सिखाया है कि भलाई की कीमत नहीं लेते।' },
    lesson: { en: 'Kindness is never lost. It waits quietly, and returns when it is needed most.', hi: 'दया कभी खोती नहीं। वह चुपचाप इंतज़ार करती है और सबसे ज़रूरत के वक़्त लौट आती है।' },
  },
  {
    id: 'the-musk-deer', type: 'story', cat: 'spiritual', date: '2026-10-16', mins: 3, tags: ['inner light', 'Kabir'],
    title: { en: 'The Musk Deer', hi: 'कस्तूरी मृग' },
    sub: { en: 'A fragrance that led him everywhere — except inward.', hi: 'एक खुशबू जो उसे हर जगह ले गई — बस भीतर नहीं।' },
    body: {
      en: [
        'High in the Himalayan forests lived a young musk deer. One day he caught a fragrance so beautiful that he could think of nothing else. Where was it coming from?',
        'He searched under every rock and flower. He ran through valleys and across streams, sniffing every tree, until his legs grew weak and his heart grew tired.',
        'At last he lay down, exhausted, and rested his head against his own body. The fragrance was strongest there. It had been within him all along.',
        'Kabir Sahib put it simply: the musk lives in the deer itself, yet it wanders the forest searching. So too, the light we seek is already within us.',
      ],
      hi: [
        'हिमालय के ऊँचे जंगलों में एक युवा कस्तूरी मृग रहता था। एक दिन उसे ऐसी मनमोहक खुशबू आई कि वह और कुछ सोच ही नहीं पाया। आख़िर यह आ कहाँ से रही है?',
        'उसने हर पत्थर, हर फूल के नीचे खोजा। घाटियों में दौड़ा, नदियाँ पार कीं, हर पेड़ को सूँघा — जब तक उसके पैर थक नहीं गए और मन हार नहीं गया।',
        'आख़िर थककर वह लेट गया और अपना सिर अपने ही शरीर पर टिका दिया। खुशबू वहीं सबसे तेज़ थी। वह तो हमेशा से उसके भीतर ही थी।',
        'कबीर साहब ने कहा है — “कस्तूरी कुंडल बसै, मृग ढूँढै बन माहि।” वैसे ही, जिस प्रकाश को हम खोजते हैं, वह हमारे भीतर ही है।',
      ],
    },
    pullAfter: 2,
    pull: { en: 'It had been within him all along.', hi: 'वह तो हमेशा से उसके भीतर ही थी।' },
    lesson: { en: 'What you are searching for outside is already waiting inside you. Turn inward.', hi: 'जिसे तुम बाहर खोज रहे हो, वह तुम्हारे भीतर पहले से है। भीतर की ओर मुड़ो।' },
  },
  {
    id: 'the-unaccepted-gift', type: 'story', cat: 'life', date: '2026-10-14', mins: 3, tags: ['anger', 'Buddha'],
    title: { hi: 'जो उपहार लिया ही न जाए' },
    sub: { hi: 'अपमान का जवाब, बिना एक कटु शब्द कहे।' },
    body: {
      hi: [
        'एक बार एक व्यक्ति गौतम बुद्ध के पास आया और भरी सभा में उन्हें बुरा-भला कहने लगा। बुद्ध शांत बैठे सुनते रहे। जब वह थककर चुप हुआ, तो बुद्ध ने मुस्कुराकर पूछा —',
        '“अगर कोई तुम्हें उपहार दे और तुम उसे स्वीकार न करो, तो वह उपहार किसका रहेगा?”',
        'व्यक्ति ने झुँझलाकर कहा, “देने वाले का ही रहेगा।”',
        'बुद्ध बोले, “तो मैं तुम्हारी गालियाँ स्वीकार नहीं करता। वे तुम्हारे पास ही रहें।” वह व्यक्ति निरुत्तर हो गया, और उसी दिन से उसका जीवन बदलने लगा।',
      ],
    },
    pullAfter: 2,
    pull: { hi: 'मैं तुम्हारी गालियाँ स्वीकार नहीं करता।' },
    lesson: { hi: 'किसी के कटु शब्द तभी हमारे होते हैं, जब हम उन्हें स्वीकार करते हैं।' },
  },
  {
    id: 'the-elephant-and-the-rope', type: 'story', cat: 'motivation', date: '2026-10-12', mins: 3, tags: ['belief', 'courage'],
    title: { en: 'The Elephant and the Thin Rope', hi: 'हाथी और पतली रस्सी' },
    sub: { en: 'The strongest animal in the camp, held by a memory.', hi: 'शिविर का सबसे ताक़तवर जानवर, एक पुरानी याद से बँधा।' },
    body: {
      en: [
        'A man walking past a camp noticed a huge elephant tied by a thin rope to a small wooden peg. It could have pulled free in a second — yet it stood still.',
        '“Why doesn’t it break away?” he asked the trainer. The trainer smiled. “When it was a baby, we used the same rope. It tried and tried, but it was too small to break it. Now it simply believes it can’t.”',
        'The man walked on, thinking of all the thin ropes in his own life — old failures, old words, old fears — that he had never tested again.',
      ],
      hi: [
        'एक आदमी एक शिविर के पास से गुज़र रहा था। उसने देखा कि एक विशाल हाथी लकड़ी के छोटे-से खूँटे से एक पतली रस्सी के सहारे बँधा है। वह पल भर में आज़ाद हो सकता था — फिर भी चुपचाप खड़ा था।',
        '“यह रस्सी तोड़ता क्यों नहीं?” उसने महावत से पूछा। महावत मुस्कुराया — “जब यह बच्चा था, तब भी इसी रस्सी से बाँधते थे। इसने बहुत कोशिश की, पर तब तोड़ नहीं पाया। अब इसे बस यक़ीन है कि यह नहीं तोड़ सकता।”',
        'वह आदमी आगे बढ़ गया, अपने जीवन की उन पतली रस्सियों के बारे में सोचते हुए — पुरानी हारें, पुराने शब्द, पुराने डर — जिन्हें उसने फिर कभी परखा ही नहीं।',
      ],
    },
    pullAfter: 1,
    pull: { en: 'Now it simply believes it can’t.', hi: 'अब इसे बस यक़ीन है कि यह नहीं तोड़ सकता।' },
    lesson: { en: 'Many of our limits are only memories. Test them again — you may be stronger than you remember.', hi: 'हमारी कई सीमाएँ बस पुरानी यादें हैं। उन्हें फिर से परखो — शायद तुम याद से ज़्यादा मज़बूत हो।' },
  },
  {
    id: 'why-a-story-can-heal', type: 'blog', cat: 'life', date: '2026-10-21', mins: 3, tags: ['storytelling', 'healing'],
    title: { en: 'Why a Good Story Can Heal', hi: 'एक अच्छी कहानी मन को कैसे ठीक करती है' },
    sub: { en: 'Stories let us look at our own lives from a safe distance.', hi: 'कहानियाँ हमें अपने ही जीवन को सुरक्षित दूरी से देखने देती हैं।' },
    body: {
      en: [
        'When someone tells us what to do, we resist. When someone tells us a story, we lean in. A story lets us see our own pain in someone else’s life — from a safe distance.',
        'That is why our grandparents taught through stories. A child who will not listen to advice will remember the tale of the thirsty crow for the rest of their life.',
        'In counselling, too, a story is often the gentlest way to begin — not to teach, but to open a door. Once the heart feels understood, the conversation becomes easy.',
      ],
      hi: [
        'जब कोई हमें बताता है कि क्या करना है, तो मन विरोध करता है। जब कोई कहानी सुनाता है, तो हम ध्यान से सुनते हैं। कहानी हमें अपना ही दर्द किसी और के जीवन में — सुरक्षित दूरी से — दिखा देती है।',
        'इसीलिए हमारे दादा-दादी कहानियों से सिखाते थे। जो बच्चा सलाह नहीं सुनता, वह प्यासे कौवे की कहानी उम्र भर याद रखता है।',
        'मन की बात करते समय भी एक कहानी अक्सर सबसे कोमल शुरुआत होती है — सिखाने के लिए नहीं, एक दरवाज़ा खोलने के लिए। जब दिल को लगता है कि उसे समझा गया, तो बात अपने आप आसान हो जाती है।',
      ],
    },
    pullAfter: 0,
    pull: { en: 'A story lets us see our own pain in someone else’s life.', hi: 'कहानी हमें अपना ही दर्द किसी और के जीवन में दिखा देती है।' },
    lesson: { en: 'Before you give advice, try telling a story.', hi: 'सलाह देने से पहले एक कहानी सुनाकर देखिए।' },
  },
  {
    id: 'a-five-minute-morning', type: 'blog', cat: 'motivation', date: '2026-10-17', mins: 2, tags: ['habits', 'mornings'],
    title: { en: 'A Five-Minute Morning Practice', hi: 'सुबह के पाँच मिनट' },
    sub: { en: 'Three small steps to begin the day with a calm mind.', hi: 'शांत मन से दिन शुरू करने के तीन छोटे कदम।' },
    body: {
      en: [
        'Before you reach for your phone, sit up and take five slow breaths. Feel your feet on the floor. You are here, and the day has not yet asked anything of you.',
        'Next, name one thing you are grateful for — out loud if you can. It can be small: warm water, a parent’s voice, the light on the mountains.',
        'Finally, choose one kind thing you will do today. Just one. Small promises kept every morning slowly change a whole life.',
      ],
      hi: [
        'फ़ोन उठाने से पहले बैठिए और पाँच धीमी साँसें लीजिए। ज़मीन पर अपने पैरों को महसूस कीजिए। आप यहाँ हैं, और दिन ने अभी आपसे कुछ नहीं माँगा।',
        'फिर एक ऐसी चीज़ का नाम लीजिए जिसके लिए आप आभारी हैं — हो सके तो ज़ोर से। वह छोटी भी हो सकती है: गरम पानी, माँ की आवाज़, पहाड़ों पर पड़ती धूप।',
        'आख़िर में तय कीजिए कि आज एक भलाई का काम करेंगे। बस एक। रोज़ सुबह निभाए गए छोटे वादे धीरे-धीरे पूरा जीवन बदल देते हैं।',
      ],
    },
    pullAfter: 1,
    pull: { en: 'Small promises kept every morning slowly change a whole life.', hi: 'रोज़ सुबह निभाए गए छोटे वादे धीरे-धीरे पूरा जीवन बदल देते हैं।' },
    lesson: { en: 'Breathe, give thanks, choose one kindness.', hi: 'साँस लें, धन्यवाद दें, एक भलाई चुनें।' },
  },
  {
    id: 'what-our-elders-know', type: 'blog', cat: 'relationships', date: '2026-10-13', mins: 2, tags: ['family'],
    title: { en: 'What Our Elders Know' },
    sub: { en: 'The quiet wisdom we lose when we stop asking.' },
    body: {
      en: [
        'Every family has a library that no one visits: the memories of its elders. How they survived hard years, how they kept a marriage together, what they did when money ran out.',
        'Next time you visit your grandparents, put the phone away and ask one question: “What was the hardest year of your life, and how did you get through it?”',
        'You may hear the most important story you will ever be told.',
      ],
    },
    pullAfter: 0,
    pull: { en: 'Every family has a library that no one visits.' },
    lesson: { en: 'Ask before the stories are gone.' },
  },
];

/* Thought of the Day: add a `date: 'YYYY-MM-DD'` to schedule one; otherwise they rotate daily. */
const THOUGHTS = [
  { en: 'A heart that forgives sleeps peacefully.', hi: 'जो दिल माफ़ कर देता है, वह चैन से सोता है।' },
  { en: 'Don’t compare your chapter one with someone else’s chapter twenty.', hi: 'अपनी कहानी के पहले अध्याय की तुलना किसी और के बीसवें अध्याय से मत कीजिए।' },
  { en: 'The light you are searching for is already burning within you.', hi: 'जिस प्रकाश को तुम खोज रहे हो, वह तुम्हारे भीतर पहले से जल रहा है।' },
  { en: 'Small kindnesses, repeated daily, become a beautiful life.', hi: 'रोज़ की छोटी-छोटी भलाइयाँ ही मिलकर एक सुंदर जीवन बनती हैं।' },
  { en: 'Silence is also an answer — often the wisest one.', hi: 'मौन भी एक उत्तर है — अक्सर सबसे समझदार।' },
  { en: 'Parents are the first gods we meet.', hi: 'माता-पिता वो पहले भगवान हैं जिनसे हम मिलते हैं।' },
  { en: 'Every sunrise is a new page. Write it with kindness.', hi: 'हर सूर्योदय एक नया पन्ना है। इसे प्रेम से लिखिए।' },
];

/* Guru Gorakhnath Ji Ki Seekh — one day per poster. Day text lives in seekh-days.js as
   { title: {en,hi}, body: {en:[…],hi:[…]}, lesson: {en,hi} }; poster images in public/seekh/pages/.
   Days without text show a placeholder. The newest (= total) is labelled "New". */
const SEEKH = {
  total: 56,
  editions: {},
};

const COACHING = [
  {
    id: 'life', icon: 'compass',
    name: { en: 'Life Coaching', hi: 'जीवन कोचिंग' },
    who: { en: 'For anyone feeling stuck, lost or ready for a fresh start.', hi: 'उन सबके लिए जो अटका हुआ, भटका हुआ या नई शुरुआत के लिए तैयार महसूस करते हैं।' },
    points: {
      en: ['Find clarity on what you truly want', 'Build daily habits that last', 'Let go of old fears and patterns'],
      hi: ['जानिए आप सच में क्या चाहते हैं', 'ऐसी आदतें बनाइए जो टिकें', 'पुराने डर और ढर्रों को छोड़िए'],
    },
  },
  {
    id: 'business', icon: 'book',
    name: { en: 'Business Coaching', hi: 'व्यापार कोचिंग' },
    who: { en: 'For small business owners and young professionals.', hi: 'छोटे व्यापारियों और युवा पेशेवरों के लिए।' },
    points: {
      en: ['Set clear goals and priorities', 'Stay motivated through setbacks', 'Lead your team with values'],
      hi: ['साफ़ लक्ष्य और प्राथमिकताएँ तय करें', 'मुश्किल समय में भी हौसला बनाए रखें', 'मूल्यों के साथ टीम का नेतृत्व करें'],
    },
  },
  {
    id: 'relationships', icon: 'heart',
    name: { en: 'Relationship Coaching', hi: 'रिश्तों की कोचिंग' },
    who: { en: 'For couples, parents and families who want to understand each other better.', hi: 'उन दंपतियों, माता-पिता और परिवारों के लिए जो एक-दूसरे को बेहतर समझना चाहते हैं।' },
    points: {
      en: ['Talk without blame', 'Heal old hurts together', 'Rebuild trust step by step'],
      hi: ['बिना दोष दिए बात करें', 'पुराने ज़ख़्म साथ मिलकर भरें', 'धीरे-धीरे भरोसा फिर से बनाएँ'],
    },
  },
];
/* Shared by all programmes until the client gives per-programme details */
const COACHING_FACTS = {
  format: { en: '1:1 · Online or in Dehradun', hi: '1:1 · ऑनलाइन या देहरादून में' },
  sessions: { en: '4 sessions · 60 min', hi: '4 सेशन · 60 मिनट' },
  price: { en: 'On request', hi: 'संपर्क करें' },
};

const THERAPY = [
  { id: 'individual', icon: 'chat', name: { en: 'Individual', hi: 'व्यक्तिगत' }, desc: { en: 'A private 1:1 conversation about whatever is weighing on your heart.', hi: 'जो भी बात मन पर बोझ बनी है, उस पर एक निजी 1:1 बातचीत।' }, len: { en: '50 min', hi: '50 मिनट' } },
  { id: 'couple-family', icon: 'heart', name: { en: 'Couple / Family', hi: 'दंपति / परिवार' }, desc: { en: 'A guided space for two or more people to listen and be heard.', hi: 'दो या अधिक लोगों के लिए ऐसा माहौल जहाँ सब सुनें और सुने जाएँ।' }, len: { en: '75 min', hi: '75 मिनट' } },
  { id: 'online', icon: 'play', name: { en: 'Online video', hi: 'ऑनलाइन वीडियो' }, desc: { en: 'Talk from the comfort of your home, wherever you are.', hi: 'आप जहाँ भी हों, अपने घर के आराम से बात करें।' }, len: { en: '50 min', hi: '50 मिनट' } },
];

const FAQ = [
  { q: { en: 'Are sessions confidential?', hi: 'क्या सेशन गोपनीय हैं?' }, a: { en: 'Yes. What you share stays between you and Vijay ji.', hi: 'हाँ। आप जो साझा करते हैं, वह आपके और विजय जी के बीच ही रहता है।' } },
  { q: { en: 'Can sessions be in Hindi?', hi: 'क्या सेशन हिंदी में हो सकते हैं?' }, a: { en: 'Yes — in Hindi, English or a mix of both, whatever feels natural to you.', hi: 'हाँ — हिंदी, अंग्रेज़ी या दोनों में, जैसे आपको सहज लगे।' } },
  { q: { en: 'How do I book?', hi: 'बुक कैसे करें?' }, a: { en: 'Choose a session and fill the short form. It opens WhatsApp with your request ready, so you can confirm a time directly with Vijay ji.', hi: 'सेशन चुनें और छोटा-सा फ़ॉर्म भरें। आपका अनुरोध WhatsApp में तैयार खुल जाएगा, ताकि आप सीधे विजय जी से समय तय कर सकें।' } },
];

/* Reels open on Facebook (no video loads on this site). View counts: update from Facebook. */
const REELS = [
  { url: 'https://www.facebook.com/reel/2389833404766303/', views: 730000 },
  { url: 'https://www.facebook.com/reel/1500335705067584/', views: 13000 },
  { url: 'https://www.facebook.com/reel/1543227423702619/', views: 659 },
  { url: 'https://www.facebook.com/reel/2003655463509200/', views: 400 },
  { url: 'https://www.facebook.com/reel/766595336352160/', views: 170 },
];

/* Real quotes with permission only — the section stays hidden while this is empty. */
const TESTIMONIALS = [];
