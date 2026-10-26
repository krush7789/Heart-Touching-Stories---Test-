/* Motivational Stories — from public/Motivational Stories/Motivational Stories.pdf.
   `pages` = the PDF page(s) showing the story (repeats and the other-language poster are listed
   together); each page's image is public/Motivational Stories/pages/page-NN.jpg.
   Text transcribed from the posters; where a poster is in one language, the other is a translation. */
const MS_ADDED = '2026-10-26'; // date added to the site (same for all, so PDF order is kept)
const msStory = (pages, cat, tags, s) => {
  pages = [].concat(pages);
  return { id: `ms-${pages[0]}`, type: 'story', cat, date: MS_ADDED, mins: Math.max(1, Math.round(s.body.en.join(' ').split(' ').length / 180)), tags, pdf: { file: 'public/Motivational Stories/Motivational Stories.pdf', pages, img: p => `public/Motivational Stories/pages/page-${String(p).padStart(2, '0')}.jpg` }, ...s };
};

STORIES.push(
  msStory(1, 'life', ['choices', 'hope'], {
    title: { en: 'Life Is Your Choice', hi: 'जीवन आपकी पसंद है' },
    sub: { en: 'Choose what you build…', hi: 'चुनिए, आप क्या बनाते हैं…' },
    body: {
      en: [
        '<b>Build this in life:</b> <b>Hope</b> — believe that better days are coming. <b>Positivity</b> — focus on good, attract good. <b>Purity</b> — keep your thoughts, words and actions clean and true.',
        '<b>Or destroy it with:</b> <b>Hopelessness</b> — give up and lose your inner strength. <b>Negativity</b> — see the bad in everything. <b>Impurity</b> — impure thoughts and words create distance and pain.',
        'Every choice shapes your tomorrow. What you build today becomes your life forever.',
        'Choose peace. Choose kindness. Choose growth.',
      ],
      hi: [
        '<b>जीवन में यह बनाइए:</b> <b>आशा</b> — विश्वास रखिए कि अच्छे दिन आने वाले हैं। <b>सकारात्मकता</b> — अच्छाई पर ध्यान दीजिए, अच्छाई को आकर्षित कीजिए। <b>पवित्रता</b> — अपने विचार, शब्द और कर्म साफ़ और सच्चे रखिए।',
        '<b>या इनसे इसे नष्ट कर दीजिए:</b> <b>निराशा</b> — हार मान लेना और भीतर की ताक़त खो देना। <b>नकारात्मकता</b> — हर चीज़ में बुराई देखना। <b>अपवित्रता</b> — अशुद्ध विचार और शब्द दूरी और दर्द पैदा करते हैं।',
        'हर चुनाव आपके आने वाले कल को आकार देता है। जो आप आज बनाते हैं, वही हमेशा के लिए आपका जीवन बन जाता है।',
        'शांति चुनिए। दया चुनिए। विकास चुनिए।',
      ],
    },
    lesson: { en: 'Build hope. Build positivity. Build purity. Build a life you are proud of.', hi: 'आशा बनाइए। सकारात्मकता बनाइए। पवित्रता बनाइए। ऐसा जीवन बनाइए जिस पर आपको गर्व हो।' },
  }),
  msStory([2, 29], 'relationships', ['happiness', 'friendship'], {
    title: { en: 'Two Old Men Talking: “Happiness”', hi: 'दो बूढ़े आदमी बात करते हुए: “ख़ुशी”' },
    sub: { en: 'Two old friends, a sunset, and what really made life happy.', hi: 'दो पुराने दोस्त, ढलता सूरज, और वह चीज़ जिसने सच में जीवन को ख़ुश बनाया।' },
    body: {
      en: [
        'One old man said to his old friend, with a gentle smile: “You know, happiness was never about what we achieved or how we tried to hold on to it. It was always about <i>who</i> walked with us through the journey.”',
        'The other nodded slowly: “Yes… because joy isn’t in the things we gather, it’s in the people who never let us feel alone. The ones who stay… in silence, in laughter, in tears.”',
        'And together, they agreed.',
      ],
      hi: [
        'एक बूढ़े आदमी ने अपने पुराने दोस्त से हल्की मुस्कान के साथ कहा — “जानते हो, ख़ुशी कभी इस बारे में नहीं थी कि हमने क्या हासिल किया या उसे थामे रखने की कितनी कोशिश की। वह हमेशा इस बारे में थी कि इस सफ़र में <i>कौन</i> हमारे साथ चला।”',
        'दूसरे ने धीरे से सिर हिलाया — “हाँ… क्योंकि आनंद उन चीज़ों में नहीं जो हम जमा करते हैं, बल्कि उन लोगों में है जिन्होंने हमें कभी अकेला महसूस नहीं होने दिया। जो साथ रहते हैं… ख़ामोशी में, हँसी में, आँसुओं में।”',
        'और दोनों इस बात पर सहमत हो गए।',
      ],
    },
    lesson: { en: 'Happiness isn’t something we chase; it’s something that blossoms when life is shared with the right hearts.', hi: 'ख़ुशी कोई ऐसी चीज़ नहीं जिसके पीछे भागा जाए; वह तब खिलती है जब जीवन सही दिलों के साथ बाँटा जाता है।' },
  }),
  msStory(3, 'life', ['peace', 'ego'], {
    title: { en: 'Choose Peace Over Ego', hi: 'अहंकार नहीं, शांति चुनिए' },
    sub: { en: 'Peace heals, ego destroys.', hi: 'शांति घाव भरती है, अहंकार नष्ट करता है।' },
    body: {
      en: [
        '<b>Choose peace:</b> a calm mind, compassion, understanding, forgiveness, inner strength, true happiness. Peace makes you stronger from within and brings light to your life and others.',
        '<b>Ego leads to:</b> stress, broken relationships, lack of respect, endless conflicts, unhappiness, regret. Ego may satisfy you for a moment, but it steals your peace forever.',
        'Let go of ego, hold on to peace. You don’t need to be right all the time. You just need to be at peace.',
      ],
      hi: [
        '<b>शांति चुनिए:</b> शांत मन, करुणा, समझ, क्षमा, भीतर की ताक़त, सच्ची ख़ुशी। शांति आपको भीतर से मज़बूत बनाती है और आपके व औरों के जीवन में रोशनी लाती है।',
        '<b>अहंकार का नतीजा:</b> तनाव, टूटते रिश्ते, सम्मान की कमी, कभी न ख़त्म होने वाले झगड़े, दुख, पछतावा। अहंकार पल भर को संतुष्ट कर सकता है, पर हमेशा के लिए आपकी शांति छीन लेता है।',
        'अहंकार छोड़िए, शांति थामिए। हर समय सही होना ज़रूरी नहीं। बस मन का शांत होना ज़रूरी है।',
      ],
    },
    lesson: { en: 'Peace is always the better choice. Choose wisely. Live peacefully.', hi: 'शांति हमेशा बेहतर चुनाव है। समझदारी से चुनिए। शांति से जीइए।' },
  }),
  msStory([4, 31, 32], 'life', ['present moment', 'children'], {
    title: { en: 'Two Old Men Talking: Who Is Wiser?', hi: 'दो बूढ़े आदमी आपस में बात करते हुए' },
    sub: { en: 'Children or adults — who really knows how to live?', hi: 'बच्चे या वयस्क — जीना असल में कौन जानता है?' },
    body: {
      en: [
        'One old man said to his old friend: “One day I was wondering who is wiser — <b>children</b> or <b>adults</b>.',
        '<b>Adults’</b> minds are usually full of worries about the past and hopes for the future. Because of this, they can’t fully live the present moment, and they never even try to understand it.',
        'On the other hand, <b>children</b> don’t spend much time thinking about what is going to happen next. They give their full attention to the present, and because of this they can enjoy every moment to the fullest.',
        'What do you think? Who is wiser, children or adults?”',
        'The other old man smiled and said: “You are right, but I don’t have the right words to explain it.”',
        'The first friend nodded and said: “Let’s wait and see what everyone else thinks about it.”',
      ],
      hi: [
        'एक बूढ़े आदमी ने अपने पुराने दोस्त से कहा — “एक दिन, मैं सोच रहा था कि कौन समझदार है — <b>“बच्चे”</b> या <b>“वयस्क”</b>।',
        '<b>वयस्कों</b> का दिमाग अक्सर अतीत की चिंताओं और भविष्य की उम्मीदों से भरा होता है। इस वजह से, वे वर्तमान क्षण को पूरी तरह से जी नहीं पाते और ना ही कभी समझने की कोशिश करते हैं।',
        'और दूसरी ओर, <b>बच्चे</b> इस बारे में सोचने में ज़्यादा समय नहीं लगाते कि आगे क्या होने वाला है। वे अपना पूरा ध्यान वर्तमान पर देते हैं, और इस वजह से, वे हर पल का भरपूर आनंद ले पाते हैं।',
        'तुम क्या सोचते हो? कौन समझदार है, बच्चे या वयस्क?”',
        'दूसरे बुज़ुर्ग ने मुस्कुराते हुए कहा — “तुम सही हो, लेकिन मेरे पास इसे समझाने के लिए सही शब्द नहीं हैं।”',
        'पहले दोस्त ने सिर हिलाते हुए कहा — “आइए इंतज़ार करें और देखें कि बाकी सब इस बारे में क्या सोचते हैं।”',
      ],
    },
    lesson: { en: 'Live the present moment fully, the way children do — that is where joy lives.', hi: 'बच्चों की तरह वर्तमान क्षण को पूरी तरह जीइए — आनंद वहीं बसता है।' },
  }),
  msStory(5, 'spiritual', ['kindness', 'Sanatan'], {
    title: { en: 'Kindness', hi: 'दया' },
    sub: { en: 'The greatest wealth is not what you own.', hi: 'सबसे बड़ी संपत्ति धन नहीं।' },
    body: {
      en: ['“The greatest wealth is not what you own, but how many hearts feel lighter because of your kindness.”'],
      hi: ['“सबसे बड़ी संपत्ति धन नहीं, बल्कि वे दिल हैं जो आपकी दया से हल्के हो जाते हैं।”'],
    },
    lesson: { en: 'That is the spirit of Sanatan.', hi: 'यही सनातन की भावना है।' },
  }),
  msStory(6, 'motivation', ['time', 'purpose'], {
    title: { en: 'Time Never Comes Back', hi: 'बीता समय कभी लौटकर नहीं आता' },
    sub: { en: 'Spend it with purpose…', hi: 'इसे मक़सद के साथ बिताइए…' },
    body: {
      en: [
        '<b>Invest your time in:</b> learning, family, reading, prayer, self-growth, helping others. Every minute invested in yourself creates a better tomorrow.',
        '<b>Or waste it on:</b> endless scrolling, anger, gossip, laziness, excuses, regret. Every minute wasted is a part of life you can never get back.',
        'Your future is being created by what you do today. Time doesn’t wait for anyone. Use it wisely before it becomes a memory.',
      ],
      hi: [
        '<b>अपना समय इनमें लगाइए:</b> सीखना, परिवार, पढ़ना, प्रार्थना, आत्म-विकास, दूसरों की मदद। ख़ुद पर लगाया हर मिनट एक बेहतर कल बनाता है।',
        '<b>या इनमें बर्बाद कीजिए:</b> बेमतलब स्क्रॉल करना, ग़ुस्सा, चुगली, आलस, बहाने, पछतावा। बर्बाद किया हर मिनट ज़िंदगी का वह हिस्सा है जो कभी वापस नहीं मिलता।',
        'आपका भविष्य उसी से बन रहा है जो आप आज करते हैं। समय किसी का इंतज़ार नहीं करता। इसके याद बन जाने से पहले इसका समझदारी से उपयोग कीजिए।',
      ],
    },
    lesson: { en: 'Value your time. Value your life. Make every moment meaningful.', hi: 'अपने समय की क़द्र कीजिए। अपने जीवन की क़द्र कीजिए। हर पल को सार्थक बनाइए।' },
  }),
  msStory(7, 'spiritual', ['truth', 'Sanatan'], {
    title: { en: 'Truth Is the Foundation of Righteous Action', hi: 'सत्य ही कर्म का आसन है' },
    sub: { en: 'And that is Sanatan — the Eternal Dharma.', hi: 'और यही सनातन है।' },
    body: {
      en: ['“Truth is the foundation of righteous action, and that is Sanatan (the Eternal Dharma).”'],
      hi: ['“सत्य ही कर्म का आसन है। और यही सनातन है॥”'],
    },
    lesson: { en: 'Let every action stand on truth — that is the eternal way.', hi: 'हर कर्म सत्य पर टिका हो — यही सनातन मार्ग है।' },
  }),
  msStory(8, 'life', ['kindness', 'purpose'], {
    title: { en: 'Life Is Very Short', hi: 'जीवन बहुत छोटा है' },
    sub: { en: 'Live it with purpose…', hi: 'इसे मक़सद के साथ जीइए…' },
    body: {
      en: [
        '<b>Live it with:</b> happiness, love, kindness, gratitude, compassion. Build a life that brings peace to your heart and smiles to others.',
        '<b>Or live it with:</b> sadness, deceit, dishonesty, hatred, hurtful words, conflict. A life filled with negativity only brings regret and darkness.',
        'The choice is always yours. Whatever you do, do it in a way that you are proud of tomorrow.',
      ],
      hi: [
        '<b>इसे इनके साथ जीइए:</b> ख़ुशी, प्रेम, दया, कृतज्ञता, करुणा। ऐसा जीवन बनाइए जो आपके दिल को शांति और दूसरों को मुस्कान दे।',
        '<b>या इनके साथ जीइए:</b> उदासी, छल, बेईमानी, नफ़रत, चुभते शब्द, झगड़ा। नकारात्मकता से भरा जीवन सिर्फ़ पछतावा और अंधेरा लाता है।',
        'चुनाव हमेशा आपका है। जो भी करें, ऐसे करें कि कल आपको उस पर गर्व हो।',
      ],
    },
    lesson: { en: 'Choose wisely. Choose kindness. Make your life beautiful.', hi: 'समझदारी से चुनिए। दया चुनिए। अपने जीवन को सुंदर बनाइए।' },
  }),
  msStory(9, 'motivation', ['overthinking', 'action'], {
    title: { en: 'Life Isn’t Meant to Be Spent Overthinking', hi: 'ज़िंदगी ज़्यादा सोचने के लिए नहीं है' },
    sub: { en: 'It’s meant to be lived.', hi: 'यह जीने के लिए है।' },
    body: {
      en: [
        'Life isn’t meant to be spent overthinking — it’s meant to be lived.',
        'If your heart truly wants something, don’t keep waiting. Do it today.',
      ],
      hi: [
        'ज़िंदगी ज़्यादा सोचने में बिताने के लिए नहीं है — यह जीने के लिए है।',
        'अगर आपका दिल सच में कुछ चाहता है, तो इंतज़ार मत करते रहिए। आज ही कीजिए।',
      ],
    },
    lesson: { en: 'Don’t let time slip away until all that’s left is regret.', hi: 'समय को ऐसे हाथ से मत निकलने दीजिए कि बाद में सिर्फ़ पछतावा बचे।' },
  }),
  msStory(10, 'motivation', ['hope', 'patience'], {
    title: { en: 'Storms Only Come for a While', hi: 'दौर हवाओं का रहता है' },
    sub: { en: 'Life is just like the weather.', hi: 'ज़िंदगी भी बिल्कुल मौसम की तरह है।' },
    body: {
      en: [
        '“The breeze stays; storms only come for a little while…” Life is just like the weather. Sometimes everything feels as if it is falling apart… relationships change, loved ones drift away, and even dreams start to look blurred.',
        'But remember… “Storms never last forever.” They only come to teach us how strong our roots are. Just as the sky clears again after every storm, life too brings a new morning after every hard phase.',
        'If there are tears in your eyes today, believe… tomorrow these same eyes will shine with hope. So don’t give up. Have a little more patience, a little more faith, because…',
        '“The breeze stays; storms only come for a little while.”',
      ],
      hi: [
        '“दौर हवाओं का रहता है, आँधियाँ तो सिर्फ़ कुछ देर के लिए आती हैं…” ज़िंदगी भी बिल्कुल मौसम की तरह है। कभी सब कुछ बिखरता हुआ महसूस होता है… रिश्ते बदल जाते हैं, अपने दूर हो जाते हैं, और सपने भी धुंधले लगने लगते हैं।',
        'लेकिन याद रखिए… “आँधियाँ कभी हमेशा नहीं रहतीं।” वे सिर्फ़ हमें यह सिखाने आती हैं कि हमारी जड़ें कितनी मज़बूत हैं। जिस तरह हर तूफ़ान के बाद आसमान फिर से साफ़ हो जाता है, उसी तरह हर कठिन दौर के बाद ज़िंदगी भी एक नई सुबह लेकर आती है।',
        'अगर आज आपकी आँखों में आँसू हैं, तो यक़ीन रखिए… कल इन्हीं आँखों में उम्मीद की चमक भी होगी। इसलिए हार मत मानिए। थोड़ा और धैर्य रखिए, थोड़ा और विश्वास रखिए, क्योंकि…',
        '“दौर हवाओं का रहता है, आँधियाँ तो सिर्फ़ कुछ देर के लिए आती हैं।” ❤️',
      ],
    },
    lesson: { en: 'After every dark night, the sun surely rises.', hi: 'हर अँधेरी रात के बाद सूरज ज़रूर उगता है।' },
  }),
  msStory([11, 27], 'life', ['self-worth', 'friendship'], {
    title: { en: 'Two Old Men Talking: Every Person Is a Diamond', hi: 'दो बूढ़े आदमी बात करते हुए: हर इंसान एक हीरा है' },
    sub: { en: 'A diamond never tries to shine… it just shines by being itself.', hi: 'हीरा चमकने की कोशिश नहीं करता… वह बस ख़ुद होकर चमकता है।' },
    body: {
      en: [
        'Two old men sat together on a park bench in the calm of the morning. The sun was rising gently, and golden rays touched the earth like blessings. Birds were singing softly, and the air carried a fresh fragrance of new beginnings.',
        '<b>1.</b> One of the men bent down, picked up a small stone, and said thoughtfully: “You know, life is like a diamond. Imagine five people looking at the same diamond. Each one will notice something different.”',
        '<b>2.</b> The other man, curious, leaned closer: “What do you mean?” he asked in a gentle voice.',
        '<b>3.</b> The first old man smiled and began to explain: “One person will see the <i>sparkle</i> — the shine that steals the heart. Another will notice the <i>shape</i> — round, square, heart… its design. Someone else will look for the <i>clarity</i> — checking if there are cracks or marks. Another will focus on the <i>size</i> — how big or small it looks. And one will see the <i>colours</i> — the rainbow light dancing inside.” He paused, as the sunlight reflected in his eyes. “Strange, isn’t it? One diamond, but everyone sees it differently.”',
        '<b>4.</b> The second old man nodded slowly, his heart warmed by the morning glow: “Yes… just like people. Every person is also a diamond. Some shine with kindness, some with wisdom, some with joy, and some with hidden colours of love — which appear only when touched by the right light.”',
        '<b>5.</b> The first man looked at the rising sun and said softly: “That’s the secret. We only need to recognise our own shine. The more a person understands himself, the more light he spreads into the lives of others. A diamond never tries to shine… it just shines by being itself.”',
        '<b>6.</b> And as both men sat quietly, the morning sun rose higher, filling the world with golden light. Their hearts felt peaceful, as if life itself had whispered:',
      ],
      hi: [
        'सुबह की शांति में दो बुज़ुर्ग पार्क की एक बेंच पर साथ बैठे थे। सूरज धीरे-धीरे उग रहा था और सुनहरी किरणें आशीर्वाद की तरह धरती को छू रही थीं। पंछी धीमे-धीमे गा रहे थे और हवा में नई शुरुआत की ताज़ा ख़ुशबू थी।',
        '<b>१.</b> उनमें से एक ने झुककर एक छोटा-सा पत्थर उठाया और सोचते हुए कहा — “जानते हो, ज़िंदगी एक हीरे की तरह है। सोचो, पाँच लोग एक ही हीरे को देख रहे हैं। हर किसी को उसमें कुछ अलग दिखेगा।”',
        '<b>२.</b> दूसरे ने उत्सुक होकर पास झुकते हुए धीमी आवाज़ में पूछा — “तुम्हारा मतलब क्या है?”',
        '<b>३.</b> पहला बुज़ुर्ग मुस्कुराया और समझाने लगा — “एक को उसकी <i>चमक</i> दिखेगी — जो दिल चुरा लेती है। दूसरा उसका <i>आकार</i> देखेगा — गोल, चौकोर, दिल जैसा… उसकी बनावट। कोई उसकी <i>साफ़ी</i> परखेगा — कहीं दरार या दाग़ तो नहीं। कोई उसके <i>आकार-प्रकार</i> पर ध्यान देगा — कितना बड़ा या छोटा दिखता है। और कोई उसके <i>रंग</i> देखेगा — भीतर नाचती इंद्रधनुषी रोशनी।” वह रुका, उसकी आँखों में धूप झिलमिला रही थी। “अजीब है न? हीरा एक, पर हर कोई उसे अलग देखता है।”',
        '<b>४.</b> दूसरे बुज़ुर्ग ने धीरे से सिर हिलाया, सुबह की रोशनी से उसका दिल गर्म हो उठा — “हाँ… बिल्कुल इंसानों की तरह। हर इंसान भी एक हीरा है। कोई दया से चमकता है, कोई समझदारी से, कोई ख़ुशी से, और कोई प्रेम के छिपे रंगों से — जो सही रोशनी पड़ने पर ही दिखते हैं।”',
        '<b>५.</b> पहले ने उगते सूरज की ओर देखते हुए धीरे से कहा — “यही राज़ है। हमें बस अपनी चमक पहचाननी है। इंसान ख़ुद को जितना समझता है, उतनी ही रोशनी वह दूसरों की ज़िंदगी में फैलाता है। हीरा चमकने की कोशिश नहीं करता… वह बस ख़ुद होकर चमकता है।”',
        '<b>६.</b> और जब दोनों चुपचाप बैठे रहे, सुबह का सूरज और ऊपर चढ़ आया और दुनिया सुनहरी रोशनी से भर गई। उनके दिलों में ऐसी शांति थी, मानो ज़िंदगी ने ख़ुद धीरे से कहा हो —',
      ],
    },
    pullAfter: 3,
    pull: { en: 'Strange, isn’t it? One diamond, but everyone sees it differently.', hi: 'अजीब है न? हीरा एक, पर हर कोई उसे अलग देखता है।' },
    lesson: { en: '“Every person is a diamond… It only needs to recognise its own shine.”', hi: '“हर इंसान एक हीरा है… बस उसे अपनी चमक पहचाननी है।”' },
  }),
  msStory(12, 'spiritual', ['patience', 'faith'], {
    title: { en: 'Trust God’s Timing', hi: 'भगवान के समय पर भरोसा रखिए' },
    sub: { en: 'When you’ve done your best and the rest is beyond your control…', hi: 'जब आप अपना सबसे अच्छा कर चुके हों और बाक़ी आपके हाथ में न हो…' },
    body: {
      en: ['When you’ve done your best and the rest is beyond your control… be patient. Trust God’s timing. 🙏'],
      hi: ['जब आप अपना सबसे अच्छा कर चुके हों और बाक़ी आपके बस में न हो… तो धैर्य रखिए। भगवान के समय पर भरोसा रखिए। 🙏'],
    },
    lesson: { en: 'What is meant for you will never pass you by.', hi: 'जो आपके लिए बना है, वह कभी आपसे दूर नहीं जाएगा।' },
  }),
  msStory(13, 'life', ['truths', 'gratitude'], {
    title: { en: 'A Few Unspoken Truths of Life That Directly Touch the Heart…', hi: 'जीवन के कुछ अनकहे सच, जो सीधे दिल को छू जाते हैं…' },
    sub: { en: 'Some things cannot be seen, yet they leave a profound impact on life…', hi: 'कुछ चीज़ें दिखती नहीं, फिर भी जीवन पर गहरा असर छोड़ जाती हैं…' },
    body: {
      en: [
        'Some things cannot be seen, yet they leave a profound impact on life…',
        'Lies have no legs, yet they travel a very long distance. Truth’s voice is soft, yet one day the whole world will hear it. Time has no hands, yet it gives the biggest slap of all.',
        'Hatred has no age limit, yet it can remain alive for centuries. Ego has no weight, yet carrying it is the heaviest burden of all. Books don’t speak, yet they give life’s greatest knowledge.',
        'Trust has no wall, yet the sound of its breaking tears the heart apart. The past has no feet, yet it follows our every step. Worries have no wings, yet they make a person fall from sky to earth.',
        'Prayers have no tongue, yet they directly reach God’s court. Love is invisible, yet it becomes the greatest reason to live life.',
      ],
      hi: [
        'कुछ चीज़ें दिखाई नहीं देतीं, फिर भी जीवन पर गहरा असर छोड़ जाती हैं…',
        'झूठ के पैर नहीं होते, फिर भी वह बहुत दूर तक चला जाता है। सच की आवाज़ धीमी होती है, फिर भी एक दिन सारी दुनिया उसे सुनती है। समय के हाथ नहीं होते, फिर भी वह सबसे बड़ा थप्पड़ मारता है।',
        'नफ़रत की कोई उम्र नहीं होती, फिर भी वह सदियों तक ज़िंदा रह सकती है। अहंकार का कोई वज़न नहीं होता, फिर भी उसे ढोना सबसे भारी बोझ है। किताबें बोलती नहीं, फिर भी जीवन का सबसे बड़ा ज्ञान देती हैं।',
        'भरोसे की कोई दीवार नहीं होती, फिर भी उसके टूटने की आवाज़ दिल चीर देती है। अतीत के पैर नहीं होते, फिर भी वह हमारे हर कदम के साथ चलता है। चिंताओं के पंख नहीं होते, फिर भी वे इंसान को आसमान से ज़मीन पर गिरा देती हैं।',
        'प्रार्थनाओं की ज़ुबान नहीं होती, फिर भी वे सीधे भगवान के दरबार तक पहुँचती हैं। प्रेम दिखाई नहीं देता, फिर भी वह जीने की सबसे बड़ी वजह बन जाता है।',
      ],
    },
    lesson: { en: 'Therefore… leave behind what has passed, be grateful for what you have received, and leave what is to come in God’s hands. ❤️🙏', hi: 'इसलिए… जो बीत गया उसे पीछे छोड़िए, जो मिला उसके लिए आभारी रहिए, और जो आने वाला है उसे भगवान के हाथों में छोड़ दीजिए। ❤️🙏' },
  }),
  msStory(14, 'life', ['innocence', 'strength'], {
    title: { en: '“The Price of Innocence”', hi: '“मासूमियत की क़ीमत”' },
    sub: { en: 'When innocence gets hurt again and again…', hi: 'जब मासूमियत बार-बार चोट खाती है…' },
    body: {
      en: ['When innocence gets hurt again and again, it may become quiet…'],
      hi: ['जब मासूमियत बार-बार चोट खाती है, तो वह चुप हो सकती है…'],
    },
    lesson: { en: 'But with every pain, life makes it wiser and stronger.', hi: 'पर हर दर्द के साथ ज़िंदगी उसे और समझदार और मज़बूत बना देती है।' },
  }),
  msStory(15, 'spiritual', ['love', 'surrender'], {
    title: { en: 'Love Is Surrender', hi: 'प्रेम ही समर्पण है' },
    sub: { en: 'And surrender is life.', hi: 'और समर्पण ही जीवन है।' },
    body: {
      en: ['“Love is the purest form of surrender, and in surrender, life finds its true meaning.”'],
      hi: ['“प्रेम ही समर्पण है। और समर्पण ही जीवन है॥”'],
    },
    lesson: { en: 'Love is surrender, and surrender is life.', hi: 'प्रेम ही समर्पण है, और समर्पण ही जीवन है।' },
  }),
  msStory(16, 'motivation', ['solitude', 'strength'], {
    title: { en: '“Sometimes, Being Alone Is How You Become Your Strongest Self”', hi: '“कभी-कभी अकेलापन ही आपको सबसे मज़बूत बनाता है”' },
    sub: { en: 'The silent classroom of solitude.', hi: 'एकांत की ख़ामोश कक्षा।' },
    body: {
      en: ['“Sometimes, being alone is how you become your strongest self.”'],
      hi: ['“कभी-कभी अकेले रहकर ही आप अपना सबसे मज़बूत रूप बनते हैं।”'],
    },
    lesson: { en: 'It is the silent classroom where wisdom is learned, strength is built, and dreams are created.', hi: 'यह वह ख़ामोश कक्षा है जहाँ समझ सीखी जाती है, ताक़त बनती है और सपने गढ़े जाते हैं।' },
  }),
  msStory(17, 'relationships', ['silence', 'trust'], {
    title: { en: '“Silent Connection”', hi: '“ख़ामोश रिश्ता”' },
    sub: { en: 'Sometimes silence tells a story louder than words.', hi: 'कभी-कभी ख़ामोशी शब्दों से ज़्यादा ऊँची आवाज़ में कहानी कहती है।' },
    body: {
      en: ['Sometimes emotions hide behind quiet moments, sometimes silence tells a story louder than words.'],
      hi: ['कभी-कभी भावनाएँ ख़ामोश पलों के पीछे छिप जाती हैं, कभी-कभी ख़ामोशी शब्दों से ज़्यादा ऊँची आवाज़ में कहानी कह देती है।'],
    },
    lesson: { en: 'Just hold on to time and trust, for what’s meant to be yours will always find its way to you.', hi: 'बस समय और भरोसे को थामे रखिए, क्योंकि जो आपका होना है, वह हमेशा आप तक अपना रास्ता ढूँढ ही लेता है।' },
  }),
  msStory(18, 'spiritual', ['Ramayana', 'words', 'emotions'], {
    title: { en: '“The Lesson Within a Line — From the Ramayana”', hi: '“एक पंक्ति में छिपी सीख — रामायण से”' },
    sub: { en: 'Destruction never begins with words — it begins with the emotion behind them.', hi: 'विनाश कभी शब्दों से शुरू नहीं होता — वह उनके पीछे छिपी भावना से शुरू होता है।' },
    body: {
      en: [
        'When the heart is filled with love, even harsh words feel like blessings. But when the heart burns with anger, even the sweetest words can hurt deeply.',
        'The palace of Ayodhya once shimmered with joy and love. Queen Kaikeyi was the light of that palace — her laughter filled the air, her kindness warmed every heart. King Dasharatha adored her deeply.',
        'Whenever Kaikeyi smiled and said, “My lord, will you grant me something?” Dasharatha would laugh softly and reply, “Ask for anything, Kaikeyi — even my life, if you wish.”',
        'The same words… simple, tender, filled with affection and trust. Those words carried the fragrance of love — a bond that connected two souls.',
        'But one day… everything changed. When the whisper of jealousy entered Kaikeyi’s ears through Manthara’s venom, the sweetness in her heart began to fade. The same Kaikeyi, once a symbol of love, was now clouded by anger and desire.',
        'She spoke again — “My lord, you gave me a promise…” But this time, her voice was firm, not soft; her tone carried not love, but demand; not devotion, but authority.',
        'The words were the same — but the emotion had changed, and so did their destiny.',
        'Those very words, once filled with affection, became the reason for separation — a king’s heart shattered, a father wept, and a beloved son walked away to the forest.',
      ],
      hi: [
        'जब दिल प्रेम से भरा हो, तो कड़वे शब्द भी आशीर्वाद लगते हैं। पर जब दिल ग़ुस्से में जल रहा हो, तो सबसे मीठे शब्द भी गहरी चोट दे सकते हैं।',
        'कभी अयोध्या का महल ख़ुशी और प्रेम से जगमगाता था। रानी कैकेयी उस महल की रोशनी थीं — उनकी हँसी हवा में घुली रहती, उनकी दया हर दिल को गर्माहट देती। राजा दशरथ उन्हें बहुत चाहते थे।',
        'जब भी कैकेयी मुस्कुराकर कहतीं, “स्वामी, क्या आप मुझे कुछ देंगे?” दशरथ धीरे से हँसकर जवाब देते, “कुछ भी माँग लो, कैकेयी — चाहो तो मेरे प्राण भी।”',
        'वही शब्द… सरल, कोमल, स्नेह और भरोसे से भरे। उन शब्दों में प्रेम की ख़ुशबू थी — एक ऐसा बंधन जो दो आत्माओं को जोड़ता था।',
        'पर एक दिन… सब बदल गया। जब मंथरा के ज़हर के ज़रिए ईर्ष्या की फुसफुसाहट कैकेयी के कानों तक पहुँची, तो उनके दिल की मिठास फीकी पड़ने लगी। वही कैकेयी, जो कभी प्रेम का प्रतीक थीं, अब क्रोध और इच्छा के बादलों से घिर गईं।',
        'उन्होंने फिर कहा — “स्वामी, आपने मुझे एक वचन दिया था…” पर इस बार उनकी आवाज़ कोमल नहीं, कठोर थी; उनके स्वर में प्रेम नहीं, माँग थी; भक्ति नहीं, अधिकार था।',
        'शब्द वही थे — पर भावना बदल चुकी थी, और उसके साथ उनका भाग्य भी।',
        'वही शब्द, जो कभी स्नेह से भरे थे, बिछड़ने का कारण बन गए — एक राजा का दिल टूट गया, एक पिता रो पड़ा, और एक प्यारा पुत्र वन को चला गया।',
      ],
    },
    pullAfter: 6,
    pull: { en: 'The words were the same — but the emotion had changed.', hi: 'शब्द वही थे — पर भावना बदल चुकी थी।' },
    lesson: { en: 'The words remained unchanged, but the feeling behind them turned the palace of love into a home of sorrow.', hi: 'शब्द नहीं बदले, पर उनके पीछे की भावना ने प्रेम के महल को दुख का घर बना दिया।' },
  }),
  msStory(19, 'motivation', ['pain', 'growth'], {
    title: { en: 'Why Does Life Feel So Hard Sometimes?', hi: 'ज़िंदगी कभी-कभी इतनी मुश्किल क्यों लगती है?' },
    sub: { en: 'Pain isn’t your enemy.', hi: 'दर्द आपका दुश्मन नहीं है।' },
    body: {
      en: ['Why does life feel so hard sometimes?', 'Pain isn’t your enemy.'],
      hi: ['ज़िंदगी कभी-कभी इतनी मुश्किल क्यों लगती है?', 'दर्द आपका दुश्मन नहीं है।'],
    },
    lesson: { en: 'It’s the silent teacher that shapes who you are. ✨', hi: 'वह एक ख़ामोश शिक्षक है जो आपको गढ़ता है। ✨' },
  }),
  msStory(20, 'relationships', ['honesty', 'kindness'], {
    title: { en: 'Two Old Men Talking: The Real Magic of Life', hi: 'दो बूढ़े आदमी बात करते हुए: ज़िंदगी का असली जादू' },
    sub: { en: '“Live every moment with true honesty, and witness the beautiful magic of love and kindness.”', hi: '“हर पल सच्ची ईमानदारी से जीइए, और प्रेम व दया का सुंदर जादू देखिए।”' },
    body: {
      en: [
        '<b>1.</b> The first old friend smiled gently and asked: “Friend, do you know what the real magic of life is?”',
        '<b>2.</b> The second friend looked at him curiously: “What?”',
        '<b>3.</b> The first friend’s voice became soft: “When you stay with people from a true heart, without any show… no ego, no fake promises… only honesty and kindness.”',
        '<b>4.</b> The second friend stayed silent for a moment, then asked quietly: “Then?”',
        '<b>5.</b> The first friend looked at the children laughing nearby and smiled: “Then relationships don’t feel like a burden… they become peace.”',
      ],
      hi: [
        '<b>१.</b> पहले पुराने दोस्त ने हल्की मुस्कान के साथ पूछा — “यार, पता है लाइफ़ का असली मैजिक क्या है?”',
        '<b>२.</b> दूसरे दोस्त ने उत्सुकता से उसकी ओर देखा — “क्या?”',
        '<b>३.</b> पहले दोस्त की आवाज़ नरम हो गई — “जब तुम बिना दिखावे के, सच्चे दिल से लोगों के साथ रहते हो… न ईगो, न झूठे वादे… सिर्फ़ ईमानदारी और दया।”',
        '<b>४.</b> दूसरा दोस्त एक पल चुप रहा, फिर धीरे से पूछा — “फिर?”',
        '<b>५.</b> पहले दोस्त ने पास में हँसते बच्चों की ओर देखा और मुस्कुराया — “फिर रिश्ते बोझ नहीं लगते… सुकून बन जाते हैं।”',
      ],
    },
    lesson: { en: 'The cool evening air carried their words softly through the park, as if life itself was reminding everyone that true happiness lives in honesty, love and kindness.', hi: 'शाम की ठंडी हवा उनके शब्दों को धीरे-धीरे पार्क में बिखेर रही थी, मानो ज़िंदगी ख़ुद सबको याद दिला रही हो कि सच्ची ख़ुशी ईमानदारी, प्रेम और दया में बसती है।' },
  }),
  msStory(21, 'life', ['power', 'compassion'], {
    title: { en: 'Two Old Men Talking: “The Loss of Power and Pride”', hi: 'दो बूढ़े आदमी बात करते हुए: “ताक़त और गर्व का खोना”' },
    sub: { en: 'America did not lose power by weakness, but by losing care and kindness.', hi: 'अमेरिका ने कमज़ोरी से नहीं, बल्कि परवाह और दया खोकर ताक़त खोई।' },
    body: {
      en: [
        'America did not lose power by weakness, but by losing care and kindness. True power returns when people feel loved, heard, respected, and when humanity and faith come first.',
        '<b>1.</b> The first old man said softly: “You know, Trump believed America was losing its hold… its strength, its pride. He felt the world no longer respected America like before.”',
        '<b>2.</b> The second old man nodded: “Yes… I think deep inside, he truly wanted to bring that power back. That’s why when he came to power, he didn’t wait.”',
        '<b>3.</b> The first old man: “He acted fast. Borders, jobs, trade, military — strong decisions everywhere. His heart kept saying, ‘America must stand tall again.’”',
        '<b>4.</b> The second old man: “But my friend… power is not only about being strong. Sometimes power needs patience. It needs listening… and understanding people’s pain.”',
        '<b>5.</b> The first old man: “True… some of his decisions were too hard, too fast. Not right for everyone.”',
        '<b>6.</b> The second old man: “That’s why some people felt safe and protected. But others felt hurt… ignored… divided.”',
        '<b>7.</b> The first old man: “So his story is not about right or wrong, is it?”',
        '<b>8.</b> The second old man: “No… it’s the story of a man who saw his country slipping and tried to pull it back — with force instead of balance, with courage but less compassion.”',
        '<b>9.</b> The first old man: “In the end, we learn one thing…”',
        '<b>10.</b> The second old man: “Yes…”',
      ],
      hi: [
        'अमेरिका ने कमज़ोरी से ताक़त नहीं खोई, बल्कि परवाह और दया खोकर खोई। सच्ची ताक़त तब लौटती है जब लोग ख़ुद को प्यार किया हुआ, सुना हुआ और सम्मानित महसूस करें, और जब इंसानियत और आस्था सबसे पहले हों।',
        '<b>१.</b> पहले बुज़ुर्ग ने धीरे से कहा — “जानते हो, ट्रंप को लगता था कि अमेरिका अपनी पकड़ खो रहा है… अपनी ताक़त, अपना गर्व। उन्हें लगता था कि दुनिया अब अमेरिका का पहले जैसा सम्मान नहीं करती।”',
        '<b>२.</b> दूसरे बुज़ुर्ग ने सिर हिलाया — “हाँ… मुझे लगता है, भीतर ही भीतर वे सच में वह ताक़त वापस लाना चाहते थे। इसीलिए सत्ता में आते ही उन्होंने इंतज़ार नहीं किया।”',
        '<b>३.</b> पहले बुज़ुर्ग — “उन्होंने तेज़ी से क़दम उठाए। सीमाएँ, नौकरियाँ, व्यापार, सेना — हर जगह सख़्त फ़ैसले। उनका दिल कहता रहा, ‘अमेरिका को फिर से सिर ऊँचा करके खड़ा होना होगा।’”',
        '<b>४.</b> दूसरे बुज़ुर्ग — “पर मेरे दोस्त… ताक़त सिर्फ़ मज़बूत होने का नाम नहीं। कभी-कभी ताक़त को धैर्य चाहिए। सुनना चाहिए… और लोगों का दर्द समझना चाहिए।”',
        '<b>५.</b> पहले बुज़ुर्ग — “सच है… उनके कुछ फ़ैसले बहुत सख़्त, बहुत जल्दबाज़ी वाले थे। सबके लिए सही नहीं थे।”',
        '<b>६.</b> दूसरे बुज़ुर्ग — “इसीलिए कुछ लोगों ने ख़ुद को सुरक्षित महसूस किया। पर कुछ को चोट पहुँची… वे अनदेखे… बँटे हुए महसूस करने लगे।”',
        '<b>७.</b> पहले बुज़ुर्ग — “तो उनकी कहानी सही या ग़लत की नहीं है, है न?”',
        '<b>८.</b> दूसरे बुज़ुर्ग — “नहीं… यह एक ऐसे इंसान की कहानी है जिसने अपने देश को फिसलते देखा और उसे वापस खींचने की कोशिश की — संतुलन की जगह ज़ोर से, हिम्मत के साथ पर कम करुणा से।”',
        '<b>९.</b> पहले बुज़ुर्ग — “आख़िर में हम एक ही बात सीखते हैं…”',
        '<b>१०.</b> दूसरे बुज़ुर्ग — “हाँ…”',
      ],
    },
    lesson: { en: 'True power is not only in control, but in unity, wisdom and heart.', hi: 'सच्ची ताक़त सिर्फ़ नियंत्रण में नहीं, बल्कि एकता, समझदारी और दिल में है।' },
  }),
  msStory(22, 'motivation', ['pain', 'wisdom'], {
    title: { en: 'The Silent Teacher', hi: 'ख़ामोश शिक्षक' },
    sub: { en: 'An old man, a young boy and a stone thrown into the river.', hi: 'एक बूढ़ा आदमी, एक छोटा लड़का और नदी में फेंका गया एक पत्थर।' },
    body: {
      en: [
        'An old man and a young boy sat quietly by the riverbank. The boy’s eyes were heavy with unshed tears. He whispered, “Why does life hurt so much, Grandpa? Why can’t it be easier?”',
        'The old man picked up a stone and threw it into the water. Ripples spread wide, disturbing the calm surface.',
        'He said softly, “Do you see this, child? Pain is like this stone. When it falls, it shatters the peace of our heart. But with every ripple, the river learns to absorb it, until the surface becomes calm again.”',
        'The boy looked at him with questioning eyes.',
        'The old man smiled gently: “Pain is not your enemy. It is the silent teacher who carves you, who breaks your illusions, and when it reaches its peak, it forces you to see life from a new perspective. Without pain, we would never grow. Without struggle, we would never become strong enough to carry the light of wisdom.”',
        'The boy closed his eyes and let the words sink deep into his heart. For the first time, he felt his pain wasn’t his weakness, but the very path to becoming who he was meant to be.',
      ],
      hi: [
        'एक बूढ़ा आदमी और एक छोटा लड़का नदी किनारे चुपचाप बैठे थे। लड़के की आँखें रुके हुए आँसुओं से भारी थीं। उसने फुसफुसाकर पूछा, “दादाजी, ज़िंदगी इतना दर्द क्यों देती है? यह आसान क्यों नहीं हो सकती?”',
        'बूढ़े ने एक पत्थर उठाया और पानी में फेंक दिया। लहरें दूर तक फैल गईं और शांत सतह हिल उठी।',
        'उन्होंने धीरे से कहा, “देख रहे हो, बेटा? दर्द इस पत्थर जैसा है। जब यह गिरता है, तो दिल की शांति बिखेर देता है। पर हर लहर के साथ नदी उसे अपने भीतर समा लेना सीखती है, जब तक कि सतह फिर से शांत न हो जाए।”',
        'लड़के ने सवाल भरी आँखों से उन्हें देखा।',
        'बूढ़े ने प्यार से मुस्कुराकर कहा, “दर्द तुम्हारा दुश्मन नहीं है। वह एक ख़ामोश शिक्षक है जो तुम्हें तराशता है, तुम्हारे भ्रम तोड़ता है, और जब अपनी चरम सीमा पर पहुँचता है, तो तुम्हें ज़िंदगी को एक नई नज़र से देखने पर मजबूर करता है। दर्द के बिना हम कभी बढ़ते नहीं। संघर्ष के बिना हम इतने मज़बूत नहीं बनते कि समझ की रोशनी उठा सकें।”',
        'लड़के ने आँखें बंद कीं और उन शब्दों को दिल की गहराई में उतरने दिया। पहली बार उसे लगा कि उसका दर्द उसकी कमज़ोरी नहीं, बल्कि वही रास्ता है जो उसे वह बनाएगा जो उसे बनना है।',
      ],
    },
    pullAfter: 2,
    pull: { en: 'Pain is not your enemy. It is the silent teacher who carves you.', hi: 'दर्द तुम्हारा दुश्मन नहीं है। वह एक ख़ामोश शिक्षक है जो तुम्हें तराशता है।' },
    lesson: { en: 'Life teaches its greatest lessons through pain. And when pain reaches its highest peak, it transforms into wisdom that makes us better equipped for the journey ahead.', hi: 'ज़िंदगी अपनी सबसे बड़ी सीख दर्द के ज़रिए देती है। और जब दर्द अपनी चरम सीमा पर पहुँचता है, तो वह समझ में बदल जाता है जो हमें आगे के सफ़र के लिए और तैयार कर देती है।' },
  }),
  msStory(23, 'life', ['destiny', 'reading'], {
    title: { en: 'Reader and Writer of Our Own Destiny', hi: 'अपनी किस्मत के पाठक और लेखक' },
    sub: { en: 'We all keep “reading” our own life story every single day.', hi: 'हम सब हर दिन अपनी ज़िंदगी की कहानी “पढ़ते” रहते हैं।' },
    body: {
      en: ['We all keep “reading” our own life story every single day — sometimes in the form of success, sometimes in the form of struggle, sometimes with smiles, and sometimes with tears.'],
      hi: ['हम सब हर दिन अपनी ज़िंदगी की कहानी “पढ़ते” रहते हैं — कभी कामयाबी के रूप में, कभी संघर्ष के रूप में, कभी मुस्कानों के साथ, और कभी आँसुओं के साथ।'],
    },
    lesson: { en: 'Because — man is the reader and writer of his own destiny.', hi: 'क्योंकि — इंसान अपनी किस्मत का पाठक भी है और लेखक भी।' },
  }),
  msStory(24, 'motivation', ['unity', 'Sardar Patel', 'India'], {
    title: { en: 'Two Old Men Talking: Unity', hi: 'दो बूढ़े आदमी बात करते हुए: एकता' },
    sub: { en: '“Unity is not built by force, but by courage, wisdom and vision.”', hi: '“एकता ज़ोर से नहीं, बल्कि हिम्मत, समझदारी और दूरदृष्टि से बनती है।”' },
    body: {
      en: [
        'The morning breeze was cool. Two old men sat quietly on a park bench, watching pigeons fly together in the sky.',
        '<b>1.</b> The first old man said softly: “Do you remember 31 October 1947? On his birthday, Sardar Vallabhbhai Patel was not celebrating… he was busy uniting a broken India.”',
        '<b>2.</b> The second old man nodded deeply: “Yes… at that time, more than 560 princely states were free to join India or stay separate. Many doubted it was even possible to bring them together.”',
        '<b>3.</b> The first old man’s voice grew strong: “But Patel, with his courage and determination, convinced almost all the kings and rulers to sign the <i>Instrument of Accession</i>. He didn’t use threats… he used trust, wisdom and an iron will.”',
        '<b>4.</b> The second old man looked at the pigeons in the sky: “And because of him, India became one nation. Without Patel, perhaps this land would have been divided into hundreds of pieces.”',
      ],
      hi: [
        'सुबह की हवा ठंडी थी। दो बुज़ुर्ग पार्क की बेंच पर चुपचाप बैठे आसमान में साथ उड़ते कबूतरों को देख रहे थे।',
        '<b>१.</b> पहले बुज़ुर्ग ने धीरे से कहा — “याद है 31 अक्टूबर 1947? अपने जन्मदिन पर सरदार वल्लभभाई पटेल जश्न नहीं मना रहे थे… वे एक टूटे हुए भारत को जोड़ने में लगे थे।”',
        '<b>२.</b> दूसरे बुज़ुर्ग ने गहराई से सिर हिलाया — “हाँ… उस समय 560 से ज़्यादा रियासतें भारत में मिलने या अलग रहने के लिए आज़ाद थीं। बहुतों को शक था कि उन्हें एक साथ लाना मुमकिन भी है।”',
        '<b>३.</b> पहले बुज़ुर्ग की आवाज़ मज़बूत हो गई — “पर पटेल ने अपनी हिम्मत और लगन से लगभग सभी राजाओं और शासकों को <i>विलय पत्र (Instrument of Accession)</i> पर दस्तख़त करने के लिए मना लिया। उन्होंने धमकियों का नहीं… भरोसे, समझदारी और लौह इच्छाशक्ति का सहारा लिया।”',
        '<b>४.</b> दूसरे बुज़ुर्ग ने आसमान में कबूतरों की ओर देखा — “और उन्हीं की वजह से भारत एक राष्ट्र बना। पटेल न होते, तो शायद यह धरती सैकड़ों टुकड़ों में बँट जाती।”',
      ],
    },
    lesson: { en: 'Both old men watched as the pigeons circled above, flying as one flock in the blue sky.', hi: 'दोनों बुज़ुर्ग देखते रहे कि कबूतर ऊपर चक्कर लगा रहे थे, नीले आसमान में एक झुंड बनकर उड़ते हुए।' },
  }),
  msStory(25, 'motivation', ['truth', 'courage', 'Gandhi'], {
    title: { en: 'Two Old Men Talking: The Dawn of Freedom', hi: 'दो बूढ़े आदमी बात करते हुए: आज़ादी की सुबह' },
    sub: { en: '“Truth and courage may face humiliation for a moment, but in the end, they create the dawn of freedom.”', hi: '“सच और हिम्मत को पल भर अपमान झेलना पड़ सकता है, पर आख़िर में वही आज़ादी की सुबह लाते हैं।”' },
    body: {
      en: [
        'It was a quiet morning. Two old men were sitting on a park bench, watching the sun rise slowly through the trees. The soft light filled the air with peace.',
        '<b>1.</b> The first old man said softly: “Do you remember the night of 7 June 1893 in South Africa? Gandhi was just 24 years old when he was thrown out of a train at Pietermaritzburg station… simply because of his skin colour.”',
        '<b>2.</b> The second old man sighed: “Yes… it was freezing cold that night. He sat shivering at the railway platform, humiliated. But instead of breaking down, he made a decision that changed history.”',
        '<b>3.</b> The first old man’s eyes shone as he whispered: “He chose ‘truth and non-violence’ as his weapons. That single night gave birth to ‘Satyagraha’… and later it became the soul of India’s freedom struggle.”',
        '<b>4.</b> The second old man looked at the rising sun: “It’s amazing, isn’t it? One painful night became the light for millions. Even today, that story reminds us — our darkest moments can become our greatest strength.”',
      ],
      hi: [
        'शांत सुबह थी। दो बुज़ुर्ग पार्क की बेंच पर बैठे पेड़ों के बीच से धीरे-धीरे उगते सूरज को देख रहे थे। हल्की रोशनी ने हवा को सुकून से भर दिया था।',
        '<b>१.</b> पहले बुज़ुर्ग ने धीरे से कहा — “याद है दक्षिण अफ़्रीका की 7 जून 1893 की वह रात? गांधी जी सिर्फ़ 24 साल के थे जब उन्हें पीटरमैरित्ज़बर्ग स्टेशन पर ट्रेन से बाहर फेंक दिया गया… सिर्फ़ उनकी चमड़ी के रंग की वजह से।”',
        '<b>२.</b> दूसरे बुज़ुर्ग ने आह भरी — “हाँ… उस रात कड़ाके की ठंड थी। वे अपमानित होकर रेलवे प्लेटफ़ॉर्म पर काँपते हुए बैठे रहे। पर टूटने की जगह उन्होंने एक ऐसा फ़ैसला लिया जिसने इतिहास बदल दिया।”',
        '<b>३.</b> पहले बुज़ुर्ग की आँखें चमक उठीं, उन्होंने फुसफुसाकर कहा — “उन्होंने ‘सत्य और अहिंसा’ को अपना हथियार चुना। उसी एक रात ने ‘सत्याग्रह’ को जन्म दिया… और बाद में वही भारत के स्वतंत्रता संग्राम की आत्मा बना।”',
        '<b>४.</b> दूसरे बुज़ुर्ग ने उगते सूरज की ओर देखा — “कमाल है न? एक दर्द भरी रात लाखों के लिए रोशनी बन गई। आज भी वह कहानी याद दिलाती है — हमारे सबसे अँधेरे पल हमारी सबसे बड़ी ताक़त बन सकते हैं।”',
      ],
    },
    lesson: { en: 'The two old men sat silently as the sun rose higher, painting the sky golden.', hi: 'दोनों बुज़ुर्ग चुपचाप बैठे रहे और सूरज ऊपर चढ़ता गया, आसमान को सुनहरा रंगता हुआ।' },
  }),
  msStory(26, 'life', ['nature', 'children', 'respect'], {
    title: { en: 'Two Old Men Talking: Beauty Even in the Smallest Puddle', hi: 'दो बूढ़े आदमी बात करते हुए: सबसे छोटे गड्ढे में भी सुंदरता' },
    sub: { en: '“Beauty everywhere — even in the smallest puddle.”', hi: '“हर जगह सुंदरता — सबसे छोटे पानी के गड्ढे में भी।”' },
    body: {
      en: [
        'Two old friends were sitting on a park bench. The air was filled with the dampness after rain and the fragrance of wet soil.',
        '<b>1.</b> The first old man smiled and said: “Today I heard something strange, yet very beautiful. I was walking down the road when I saw two little boys standing near some puddles. One boy said — ‘Look… water has made its home on the road. But roads are for vehicles. Why shouldn’t someone file a case against water for sitting in the wrong place?’”',
        '<b>2.</b> The second old man laughed, then became thoughtful: “Children’s words feel so innocent, yet so true. And what did the other boy say?”',
        '<b>3.</b> The first old man recalled: “His friend quietly replied — ‘Maybe water isn’t wrong. It doesn’t want to stay here forever. It only comes because we don’t keep our drains clean, and we don’t build good roads. If we give it a way, water will flow away silently.’”',
        '<b>4.</b> The second old man’s eyes lit up: “Wow! What a deep thought the child spoke. The fault isn’t water’s — it’s ours.”',
        '<b>5.</b> The first old man looked up at the sky and continued: “And then that boy looked into the puddle and said — ‘See how clearly the clouds are reflected here. It’s as if the sky has descended to the ground.’ Then he whispered — ‘Maybe water only comes to remind us that if we respect nature, it will show us beauty everywhere — even in the smallest puddle.’”',
        '<b>6.</b> Both old men stayed silent for a while. Then gently, the second old man said: “It’s true, my friend… life is also like water. Give it respect and the right bond, and it will always reflect beauty in every situation.”',
      ],
      hi: [
        'दो पुराने दोस्त पार्क की बेंच पर बैठे थे। हवा में बारिश के बाद की नमी और भीगी मिट्टी की ख़ुशबू थी।',
        '<b>१.</b> पहले बुज़ुर्ग ने मुस्कुराकर कहा — “आज मैंने एक अजीब, पर बहुत सुंदर बात सुनी। मैं सड़क पर चल रहा था, तो देखा दो छोटे लड़के पानी के गड्ढों के पास खड़े थे। एक लड़का बोला — ‘देखो… पानी ने सड़क पर अपना घर बना लिया है। पर सड़कें तो गाड़ियों के लिए हैं। ग़लत जगह बैठने के लिए कोई पानी पर केस क्यों नहीं करता?’”',
        '<b>२.</b> दूसरे बुज़ुर्ग हँस पड़े, फिर सोच में डूब गए — “बच्चों की बातें कितनी मासूम लगती हैं, फिर भी कितनी सच्ची। और दूसरे लड़के ने क्या कहा?”',
        '<b>३.</b> पहले बुज़ुर्ग ने याद करते हुए कहा — “उसके दोस्त ने धीरे से जवाब दिया — ‘शायद पानी ग़लत नहीं है। वह यहाँ हमेशा नहीं रहना चाहता। वह तो इसलिए आता है क्योंकि हम नालियाँ साफ़ नहीं रखते और अच्छी सड़कें नहीं बनाते। अगर हम उसे रास्ता दें, तो पानी चुपचाप बह जाएगा।’”',
        '<b>४.</b> दूसरे बुज़ुर्ग की आँखें चमक उठीं — “वाह! बच्चे ने कितनी गहरी बात कह दी। ग़लती पानी की नहीं — हमारी है।”',
        '<b>५.</b> पहले बुज़ुर्ग ने आसमान की ओर देखते हुए आगे कहा — “और फिर उस लड़के ने गड्ढे में झाँककर कहा — ‘देखो, बादल यहाँ कितने साफ़ दिख रहे हैं। जैसे आसमान ज़मीन पर उतर आया हो।’ फिर उसने फुसफुसाकर कहा — ‘शायद पानी हमें यह याद दिलाने आता है कि अगर हम प्रकृति का सम्मान करें, तो वह हमें हर जगह सुंदरता दिखाएगी — सबसे छोटे गड्ढे में भी।’”',
        '<b>६.</b> दोनों बुज़ुर्ग कुछ देर चुप रहे। फिर दूसरे बुज़ुर्ग ने धीरे से कहा — “सच है, मेरे दोस्त… ज़िंदगी भी पानी जैसी है। उसे सम्मान और सही रिश्ता दो, तो वह हर हाल में सुंदरता ही दिखाएगी।”',
      ],
    },
    lesson: { en: 'And both old men smiled, watching the children walking away, their footsteps splashing in puddles — carrying innocence and a hidden lesson within them.', hi: 'और दोनों बुज़ुर्ग मुस्कुरा दिए, जाते हुए बच्चों को देखते हुए, जिनके क़दम गड्ढों में छपाक कर रहे थे — अपने भीतर मासूमियत और एक छिपी सीख लिए हुए।' },
  }),
  msStory(28, 'relationships', ['parenting', 'values', 'children'], {
    title: { en: 'Two Old Men Talking: “Little Eyes, Big Lessons”', hi: 'दो बूढ़े आदमी बात करते हुए: “नन्ही आँखें, बड़ी सीख”' },
    sub: { en: 'Children watch us more than they listen to us.', hi: 'बच्चे हमारी बातें सुनने से ज़्यादा हमें देखते हैं।' },
    body: {
      en: [
        'Two old men sat together on a park bench, speaking softly…',
        '<b>1.</b> One of them began to share a memory from long ago: “Years back, I had neighbours. I often heard them speak bitterly about others when they were alone with their family. It was like pouring poison into the air of their home.” He paused, looking thoughtful. “But one day, I was sitting at their house. While we were talking, the wife said something that stayed with me forever. She told me, ‘We always give our children good values. We want to raise them with humanity, so we teach them kindness and respect.’”',
        '<b>2.</b> The old man’s eyes softened as he continued: “For a moment, I was lost in thought. I wondered — do children really learn only from what we teach them? Or do they learn more from what we do in front of them?”',
        '<b>3.</b> The second old man smiled gently: “Yes, that is true. Children watch us more than they listen to us. The real lesson for them is not in our words, but in our actions. If we live with love, they will grow with love. If we live with bitterness, they will carry bitterness.”',
        '<b>4.</b> The first man nodded slowly: “Exactly. That day, I understood something important. If we truly wish to raise children with humanity, then we ourselves must live with humanity. Because little eyes are always watching, and little hearts are always learning.”',
      ],
      hi: [
        'दो बुज़ुर्ग पार्क की बेंच पर साथ बैठे धीमे-धीमे बातें कर रहे थे…',
        '<b>१.</b> उनमें से एक ने बहुत पुरानी एक याद सुनानी शुरू की — “बरसों पहले मेरे कुछ पड़ोसी थे। मैं अक्सर सुनता था कि जब वे अपने परिवार के साथ अकेले होते, तो दूसरों के बारे में कड़वी बातें करते। जैसे अपने ही घर की हवा में ज़हर घोल रहे हों।” वे रुके, सोच में डूबे। “पर एक दिन मैं उनके घर बैठा था। बातों-बातों में पत्नी ने कुछ ऐसा कहा जो हमेशा के लिए मेरे साथ रह गया। उन्होंने कहा, ‘हम अपने बच्चों को हमेशा अच्छे संस्कार देते हैं। हम उन्हें इंसानियत के साथ बड़ा करना चाहते हैं, इसलिए उन्हें दया और सम्मान सिखाते हैं।’”',
        '<b>२.</b> बुज़ुर्ग की आँखें नरम हो गईं, उन्होंने आगे कहा — “एक पल को मैं सोच में खो गया। मैंने सोचा — क्या बच्चे सच में सिर्फ़ वही सीखते हैं जो हम उन्हें सिखाते हैं? या वे उससे ज़्यादा उससे सीखते हैं जो हम उनके सामने करते हैं?”',
        '<b>३.</b> दूसरे बुज़ुर्ग धीरे से मुस्कुराए — “हाँ, यह सच है। बच्चे हमारी बातें सुनने से ज़्यादा हमें देखते हैं। उनके लिए असली सीख हमारे शब्दों में नहीं, हमारे कर्मों में है। अगर हम प्रेम से जिएँगे, तो वे प्रेम के साथ बड़े होंगे। अगर हम कड़वाहट से जिएँगे, तो वे कड़वाहट लेकर चलेंगे।”',
        '<b>४.</b> पहले बुज़ुर्ग ने धीरे से सिर हिलाया — “बिल्कुल। उस दिन मैंने एक ज़रूरी बात समझी। अगर हम सच में बच्चों को इंसानियत के साथ बड़ा करना चाहते हैं, तो हमें ख़ुद इंसानियत से जीना होगा। क्योंकि नन्ही आँखें हमेशा देख रही होती हैं, और नन्हे दिल हमेशा सीख रहे होते हैं।”',
      ],
    },
    pullAfter: 2,
    pull: { en: 'Children watch us more than they listen to us.', hi: 'बच्चे हमारी बातें सुनने से ज़्यादा हमें देखते हैं।' },
    lesson: { en: 'And with that, both men sat quietly, watching the sunset, their hearts filled with peace and a gentle smile. 🌅💖', hi: 'और इसके बाद दोनों बुज़ुर्ग चुपचाप बैठे ढलता सूरज देखते रहे, उनके दिल सुकून और एक हल्की मुस्कान से भरे थे। 🌅💖' },
  }),
  msStory(30, 'motivation', ['gratitude', 'failure'], {
    title: { en: 'The Power of Gratitude', hi: 'कृतज्ञता की ताक़त' },
    sub: { en: 'Aman stopped asking “Why me?” and started saying “Thank you.”', hi: 'अमन ने “मैं ही क्यों?” पूछना छोड़कर “धन्यवाद” कहना शुरू किया।' },
    body: {
      en: [
        'Aman always felt life was unfair. Every failure felt like the end — when he didn’t get his dream job, when his business idea failed, and when friends drifted away. He felt frustrated and full of doubt.',
        'One evening, sitting alone in a park, he saw an old man feeding birds. The man smiled and said, “Life changes when you stop asking, ‘Why me?’ and start saying, ‘Thank you.’” Aman was confused.',
        'The man continued, “I lost my business years ago. I could have given up, but instead, I focused on what I still had — my health, my family, and the chance to start again. Gratitude saved me.”',
        'Aman decided to try. He started small — feeling thankful for a warm bed, a home-cooked meal, and a new day to try again. Slowly, his failures became lessons. His struggles made him stronger. Instead of feeling empty, he started feeling happy and hopeful.',
        'Over time, everything changed. New opportunities came, his relationships improved, and even in difficult times, he felt at peace.',
      ],
      hi: [
        'अमन को हमेशा लगता था कि ज़िंदगी उसके साथ नाइंसाफ़ी करती है। हर नाकामी अंत जैसी लगती — जब उसे सपनों की नौकरी नहीं मिली, जब उसका बिज़नेस आइडिया फ़ेल हो गया, और जब दोस्त दूर हो गए। वह झुंझलाहट और शक से भरा रहता।',
        'एक शाम, पार्क में अकेले बैठे हुए उसने एक बुज़ुर्ग को पंछियों को दाना डालते देखा। बुज़ुर्ग ने मुस्कुराकर कहा, “ज़िंदगी तब बदलती है जब तुम ‘मैं ही क्यों?’ पूछना छोड़कर ‘धन्यवाद’ कहना शुरू करते हो।” अमन उलझन में पड़ गया।',
        'बुज़ुर्ग ने आगे कहा, “बरसों पहले मेरा बिज़नेस डूब गया था। मैं हार मान सकता था, पर मैंने उस पर ध्यान दिया जो मेरे पास अब भी था — मेरी सेहत, मेरा परिवार, और फिर से शुरू करने का मौक़ा। कृतज्ञता ने मुझे बचा लिया।”',
        'अमन ने कोशिश करने का फ़ैसला किया। उसने छोटी शुरुआत की — एक गर्म बिस्तर, घर के बने खाने, और फिर से कोशिश करने के लिए मिले नए दिन के लिए शुक्रगुज़ार होना। धीरे-धीरे उसकी नाकामियाँ सबक बन गईं। उसके संघर्षों ने उसे मज़बूत बनाया। ख़ालीपन की जगह वह ख़ुश और उम्मीद से भरा महसूस करने लगा।',
        'समय के साथ सब कुछ बदल गया। नए मौक़े आए, उसके रिश्ते बेहतर हुए, और मुश्किल समय में भी उसे सुकून महसूस होता।',
      ],
    },
    pullAfter: 1,
    pull: { en: 'Life changes when you stop asking, ‘Why me?’ and start saying, ‘Thank you.’', hi: 'ज़िंदगी तब बदलती है जब तुम ‘मैं ही क्यों?’ पूछना छोड़कर ‘धन्यवाद’ कहना शुरू करते हो।' },
    lesson: { en: 'Because life doesn’t have to be perfect — it just needs to be appreciated.', hi: 'क्योंकि ज़िंदगी का परफ़ेक्ट होना ज़रूरी नहीं — बस उसकी क़द्र होनी चाहिए।' },
  }),
  msStory([33, 34], 'relationships', ['family', 'love'], {
    title: { en: 'Two Old Men Talking — Part Two: What Does “Family” Mean?', hi: 'दो बूढ़े आदमी आपस में बात करते हुए — भाग दो: “परिवार” का मतलब' },
    sub: { en: 'Family isn’t just about blood relations.', hi: 'परिवार सिर्फ़ ख़ून के रिश्तों तक सीमित नहीं होता।' },
    body: {
      en: [
        'One old man said to his old friend: “Until someone responds to the earlier discussion, may I ask you something? What does ‘family’ mean to you?”',
        'The other old friend replied: “Family is where you respect each other’s feelings and support one another in every aspect of life, without thinking too much about yourself. It’s about love, care, and sharing happiness with those around you. Family isn’t just about blood relations; it’s about the people who create a circle of love and belonging. Sadly, in today’s world, many have forgotten this. People go through the motions of life, but they don’t truly understand what they’re doing or why they’re doing it.”',
        'The first old friend nodded thoughtfully and said: “Let’s wait and see what others think about this.”',
      ],
      hi: [
        'एक पुराने दोस्त ने कहा — “जब तक कोई पिछले विषय पर जवाब नहीं देता, क्या मैं आपसे कुछ पूछ सकता हूँ? आपके लिए ‘परिवार’ का क्या मतलब है?”',
        'दूसरे बुज़ुर्ग ने मुस्कुराते हुए कहा — “परिवार वो है जहाँ हम एक-दूसरे की भावनाओं की इज़्ज़त करें और हर समय एक-दूसरे का साथ दें, बिना ख़ुद के बारे में ज़्यादा सोचे। परिवार प्यार, देखभाल और ख़ुशी बाँटने का नाम है। यह सिर्फ़ ख़ून के रिश्तों तक सीमित नहीं होता, बल्कि वो लोग भी परिवार बन जाते हैं जो हमें अपनापन और प्यार देते हैं। आज के समय में लोग इसे भूलते जा रहे हैं। वे बस ज़िंदगी जी रहे हैं, लेकिन यह नहीं समझते कि वे क्या कर रहे हैं और क्यों कर रहे हैं।”',
        'पहले दोस्त ने सिर हिलाते हुए कहा — “चलो, देखते हैं कि बाक़ी लोग इस पर क्या सोचते हैं।”',
      ],
    },
    lesson: { en: 'Family is love, care and sharing happiness — the people who give us belonging, not only those who share our blood.', hi: 'परिवार प्यार, देखभाल और ख़ुशी बाँटने का नाम है — वे लोग जो हमें अपनापन देते हैं, सिर्फ़ ख़ून के रिश्ते नहीं।' },
  }),
  msStory(35, 'life', ['poverty', 'humanity'], {
    title: { en: 'Two Old Men Talking — Part One: Who Is the Best?', hi: 'दो बूढ़े आदमी बात करते हुए — भाग एक: सबसे अच्छा कौन?' },
    sub: { en: 'Billions of people, millions in poverty — and leaders busy proving they are the best.', hi: 'अरबों लोग, करोड़ों ग़रीबी में — और नेता यह साबित करने में लगे कि वे सबसे अच्छे हैं।' },
    body: {
      en: [
        'One old man said to his old friend: “There are around 8.1 billion people living on Earth, and approximately 140–175 million families are living in extreme poverty. Yet, leaders of various groups around the world are busy trying to prove that their group is the best. They ignore the people in their own groups who are living below the poverty line. Everyone seems ready to fight each other for survival, all the while thinking they are the best or among the richest in the world. How funny is that?” He laughed: “Hahaha!”',
        'The other old friend replied: “This is none of our business. We’ve already lived our lives, and we’re at the end of the road.”',
        'Then the first old man said: “Let’s wait and see how people deal with this business.”',
      ],
      hi: [
        'एक बूढ़े आदमी ने अपने पुराने दोस्त से कहा — “धरती पर लगभग 8.1 अरब लोग रहते हैं, और क़रीब 14 से 17.5 करोड़ परिवार घोर ग़रीबी में जी रहे हैं। फिर भी दुनिया भर में अलग-अलग समूहों के नेता यह साबित करने में लगे हैं कि उनका समूह सबसे अच्छा है। वे अपने ही समूह के उन लोगों को अनदेखा करते हैं जो ग़रीबी रेखा से नीचे जी रहे हैं। हर कोई ज़िंदा रहने के लिए एक-दूसरे से लड़ने को तैयार दिखता है, और साथ ही यह सोचता है कि वही सबसे अच्छा या दुनिया के सबसे अमीरों में है। कितनी मज़ेदार बात है, है न?” वह हँस पड़ा — “हाहाहा!”',
        'दूसरे पुराने दोस्त ने जवाब दिया — “यह हमारा काम नहीं है। हम अपनी ज़िंदगी जी चुके हैं, और अब रास्ते के आख़िरी छोर पर हैं।”',
        'फिर पहले बुज़ुर्ग ने कहा — “चलो, देखते हैं लोग इस मामले को कैसे सँभालते हैं।”',
      ],
    },
    lesson: { en: 'Before proving who is the best, care for the people in your own circle who are struggling to survive.', hi: 'कौन सबसे अच्छा है, यह साबित करने से पहले अपने ही दायरे के उन लोगों की परवाह कीजिए जो जीने के लिए जूझ रहे हैं।' },
  }),
  msStory(36, 'spiritual', ['life', 'death', 'contentment'], {
    title: { en: 'A Beautiful Conversation Between Death and Life', hi: 'मृत्यु और जीवन के बीच एक सुंदर बातचीत' },
    sub: { en: '“I am Death, and I will come, this is certain.”', hi: '“मैं मृत्यु हूँ, और मैं आऊँगी, यह तय है।”' },
    body: {
      en: [
        'One day, Death says to Life, “I am Death, and I will come, this is certain. No one can stop it. But until I arrive, live each moment to the fullest, find happiness in whatever you have, and be content. Because this life is very short, and we never truly know when it will end.”',
        'Life calmly replies, “I am Life, and I do not come so easily. I will do what feels right to me, and I will follow my own path.”',
        'Death responds, “In time, you will understand, because time teaches everything and you will do what needs to be done. But if you don’t understand, you won’t be able to fully enjoy this life. I will make you understand, but that moment will be your last moment in this life.”',
      ],
      hi: [
        'एक दिन मृत्यु ने जीवन से कहा, “मैं मृत्यु हूँ, और मैं आऊँगी, यह तय है। कोई इसे रोक नहीं सकता। पर जब तक मैं न आऊँ, हर पल को भरपूर जियो, जो कुछ तुम्हारे पास है उसी में ख़ुशी ढूँढो, और संतोष रखो। क्योंकि यह जीवन बहुत छोटा है, और हम कभी सच में नहीं जानते कि यह कब ख़त्म हो जाएगा।”',
        'जीवन ने शांति से जवाब दिया, “मैं जीवन हूँ, और मैं इतनी आसानी से नहीं मिलता। मैं वही करूँगा जो मुझे सही लगे, और अपने रास्ते पर चलूँगा।”',
        'मृत्यु ने कहा, “समय के साथ तुम समझ जाओगे, क्योंकि समय सब कुछ सिखा देता है और तुम वही करोगे जो करना ज़रूरी है। पर अगर तुम नहीं समझे, तो इस जीवन का पूरा आनंद नहीं ले पाओगे। मैं तुम्हें समझा दूँगी, पर वह पल इस जीवन में तुम्हारा आख़िरी पल होगा।”',
      ],
    },
    pullAfter: 1,
    pull: { en: 'Live each moment to the fullest… because this life is very short.', hi: 'हर पल को भरपूर जियो… क्योंकि यह जीवन बहुत छोटा है।' },
    lesson: { en: 'Don’t wait for the last moment to understand life. Live fully, be content, and find happiness in what you have — today.', hi: 'जीवन को समझने के लिए आख़िरी पल का इंतज़ार मत कीजिए। भरपूर जीइए, संतोष रखिए, और जो पास है उसी में ख़ुशी ढूँढिए — आज ही।' },
  }),
);
