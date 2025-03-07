const medicineData = {
    "Paracetamol | பாராசிடமால்": {
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paracetamol-skeletal.svg",
        "advantages": "Effective for fever and mild pain | காய்ச்சல் மற்றும் மெதுவான வலிக்கு பயனுள்ளது",
        "disadvantages": "Can cause liver damage in high doses | அதிக அளவில் உட்கொண்டால் கல்லீரல் சேதம் ஏற்படும்",
        "prevention": "Do not exceed 4g per day | நாளுக்கு 4 கிராம் மிகாமல் பயன்படுத்தவும்",
        "warning": "Avoid alcohol; not for children under 6 | மதுபானம் தவிர்க்கவும்; 6 வயதிற்கும் குறைந்த குழந்தைகளுக்கு இல்லை"
    },
        "Ibuprofen | ஐபுபுரோபென்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Ibuprofen.svg",
            "advantages": "Reduces pain, inflammation, and fever | வலி, வீக்கம், மற்றும் காய்ச்சலை குறைக்கும்",
            "disadvantages": "May cause stomach ulcers and kidney damage | வயிற்றுப்புண் மற்றும் சிறுநீரக பாதிப்பு ஏற்படலாம்",
            "prevention": "Take with food and stay hydrated | உணவுடன் உட்கொள்ளவும், நீர் அதிகமாக குடிக்கவும்",
            "warning": "Not for people with ulcers or kidney disease | வயிற்றுப்புண் அல்லது சிறுநீரக நோயாளிகளுக்கு இல்லை"
        },
        "Diclofenac | டைக்க்ளோபெனாக்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Diclofenac.svg",
            "advantages": "Effective for muscle, joint, and arthritis pain | தசை, மூட்டு, மற்றும் மூட்டு அழற்சிக்கான வலிக்கு சிறந்தது",
            "disadvantages": "Long-term use can increase heart risk | நீண்ட கால பயன்பாடு இதய நோய்களை அதிகரிக்கலாம்",
            "prevention": "Use only when needed; avoid if heart issues exist | தேவையானால் மட்டுமே பயன்படுத்தவும், இதயப் பிரச்சனை உள்ளவர்கள் தவிர்க்கவும்",
            "warning": "Not for heart patients or long-term use | இதய நோயாளிகளுக்கு மற்றும் நீண்ட கால பயன்பாட்டுக்கு இல்லை"
        },
        "Naproxen | நாப்ராக்சென்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Naproxen.svg",
            "advantages": "Strong pain relief for arthritis and menstrual cramps | மூட்டுவலி மற்றும் மாதவிடாய் வலிக்கு சிறந்தது",
            "disadvantages": "May increase blood pressure and stomach bleeding | இரத்த அழுத்தத்தை அதிகரிக்கலாம், வயிற்று இரத்தக்கசிவு ஏற்படலாம்",
            "prevention": "Monitor blood pressure; take with food | இரத்த அழுத்தத்தைக் கண்காணிக்கவும், உணவுடன் உட்கொள்ளவும்",
            "warning": "Not for people with high blood pressure or ulcers | உயர் இரத்த அழுத்தம் அல்லது வயிற்றுப்புண் உள்ளவர்கள் தவிர்க்கவும்"
        },
        "Aspirin | அஸ்பிரின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Aspirin_%28acetylsalicylic_acid%29.svg",
            "advantages": "Reduces pain, fever, and prevents heart attacks | வலி, காய்ச்சல் குறைக்கவும், இதய தாக்கத்தைக் குறைக்கவும் உதவும்",
            "disadvantages": "Can cause stomach bleeding and allergic reactions | வயிற்று இரத்தக்கசிவு மற்றும் ஒவ்வாமை ஏற்படலாம்",
            "prevention": "Avoid if you have ulcers; take low doses for heart health | வயிற்றுப்புண் உள்ளவர்கள் தவிர்க்கவும், இதய ஆரோக்கியத்திற்காக குறைந்த அளவில் பயன்படுத்தவும்",
            "warning": "Not for children with fever (Reye’s syndrome risk) | காய்ச்சலுடன் உள்ள குழந்தைகளுக்கு இல்லை (ரேயே நோய் அபாயம்)"
        },
        "Combiflam (Paracetamol + Ibuprofen) | காம்பிஃபிளாம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Paracetamol-skeletal.svg",
            "advantages": "Combines fever and pain relief | காய்ச்சல் மற்றும் வலிக்கு இரண்டையும் நிவாரணம் அளிக்கிறது",
            "disadvantages": "Can cause liver and kidney damage in overdose | அதிக அளவில் உட்கொண்டால் கல்லீரல் மற்றும் சிறுநீரக பாதிப்பு ஏற்படும்",
            "prevention": "Use short-term only; stay hydrated | குறுகிய காலத்திற்கே பயன்படுத்தவும், நீர் அதிகமாக குடிக்கவும்",
            "warning": "Avoid alcohol; not for long-term use | மதுபானம் தவிர்க்கவும்; நீண்ட காலம் பயன்படுத்தக் கூடாது"
        },
        "Moov (Topical Pain Relief) | மூவ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Methyl_salicylate.svg",
            "advantages": "Provides fast relief for muscle pain | தசை வலிக்கு விரைவான நிவாரணம் அளிக்கும்",
            "disadvantages": "May cause skin irritation or burning sensation | தோல் எரிச்சல் அல்லது சூடான உணர்வு ஏற்படலாம்",
            "prevention": "Apply a small amount; do not use on broken skin | சிறிதளவு மட்டும் தடவவும், புண்ணாகிய தோலில் பயன்படுத்த வேண்டாம்",
            "warning": "Do not apply on wounds or sensitive areas | காயங்களுக்கு அல்லது உணர்வுத்திறன் அதிகமான பகுதிகளில் பயன்படுத்த வேண்டாம்"
        },
        "Volini (Pain Relief Spray) | வோலினி": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Diclofenac-sodium.png",
            "advantages": "Quick relief for muscle and joint pain | தசை மற்றும் மூட்டு வலிக்காக விரைவில் செயல்படும்",
            "disadvantages": "May cause mild burning or allergic reaction | சிறிய எரிச்சல் அல்லது ஒவ்வாமை ஏற்படலாம்",
            "prevention": "Test on a small area before full use | முழுவதுமாக பயன்படுத்துவதற்கு முன்பு ஒரு சிறிய பகுதியில் பரிசோதிக்கவும்",
            "warning": "Do not spray near eyes or mouth | கண்கள் அல்லது வாயருகே தெளிக்க வேண்டாம்"
        },
        "Saridon (Aspirin + Caffeine) | சாரிடான்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Aspirin_%28acetylsalicylic_acid%29.svg",
            "advantages": "Effective for headaches and stress-related pain | தலைவலி மற்றும் மன அழுத்த வலிக்கு சிறந்தது",
            "disadvantages": "May cause insomnia and stomach irritation | தூக்கமின்மை மற்றும் வயிற்று எரிச்சல் ஏற்படலாம்",
            "prevention": "Avoid late evening use; take after food | இரவு நேரத்தில் தவிர்க்கவும், உணவுக்குப் பிறகு மட்டும் உட்கொள்ளவும்",
            "warning": "Not for people with high BP or anxiety issues | உயர் இரத்த அழுத்தம் அல்லது மனஅழுத்தம் உள்ளவர்கள் தவிர்க்கவும்"
        }
        ,
        "Cetirizine | செட்டிரிசின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cetirizine_structure.svg",
            "advantages": "Effective for allergies, sneezing, and runny nose | ஆல்‌ர்ஜி, ஆறுதல் மற்றும் மூக்கின் ஓட்டத்திற்கு பயனுள்ளது",
            "disadvantages": "Can cause drowsiness | தூக்கத்தன்மையை உண்டாக்கலாம்",
            "prevention": "Take at night if drowsiness occurs | தூக்கம் ஏற்படுமானால் இரவில் எடுக்கும்",
            "warning": "Avoid alcohol; not for pregnant women | மதுபானம் தவிர்க்கவும்; கர்ப்பிணி பெண்களுக்கு பயன்பாடில்லை"
        },
        "Loratadine | லோராடடின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Loratadine_chemical_structure.svg",
            "advantages": "Non-sedating antihistamine for allergies and cold | தூக்கத்தை குறைக்காத ஆல்‌ர்ஜி மற்றும் குளிர்ச்சிக்கு உதவுகிறது",
            "disadvantages": "Can cause mild headache or dry mouth | சிறு தலைவலி அல்லது வாய் உலர்த்தல் ஏற்படலாம்",
            "prevention": "Stay hydrated to prevent dryness | வாய் உலர்தலைத் தடுப்பதற்காக நீர் அதிகமாக குடிக்கவும்",
            "warning": "Do not use in severe liver disease | தீவிர கல்லீரல் நோயுடன் தவிர்க்கவும்"
        },
        "Dextromethorphan | டெக்ஸ்ட்ரோமிதோர்பேன்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Dextromethorphan.svg",
            "advantages": "Effective cough suppressant | கஷ்டம் நிறைந்த இருமல் கட்டுப்படுத்த உதவுகிறது",
            "disadvantages": "May cause dizziness or confusion | மயக்கம் அல்லது குழப்பம் ஏற்படலாம்",
            "prevention": "Do not drive after taking; avoid alcohol | எடுக்கும் பிறகு வாகனம் ஓட்டாதீர்கள்; மதுபானம் தவிர்க்கவும்",
            "warning": "Not for children under 6 | 6 வயதிற்கும் குறைந்த குழந்தைகளுக்கு பொருந்தாது"
        },
        "Ambroxol | அம்ப்ரோக்சோல்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ambroxol_structure.svg",
            "advantages": "Helps loosen mucus and clear the airways | இருமலையும் வாசனையும் களைக்க உதவுகிறது",
            "disadvantages": "May cause nausea or stomach discomfort | குமட்டல் அல்லது வயிற்று அலமாரி ஏற்படலாம்",
            "prevention": "Take with food to reduce stomach discomfort | வயிற்று எரிச்சலை குறைக்க உணவுடன் எடுத்துக்கொள்ளவும்",
            "warning": "Not for people with liver or kidney problems | கல்லீரல் மற்றும் சிறுநீரக பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Phenylephrine | பேனிலெஃப்ரின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Phenylephrine_structure.svg",
            "advantages": "Relieves nasal congestion | மூக்குக் கட்டுக்குழப்பம் குறைக்கிறது",
            "disadvantages": "May raise blood pressure | இரத்த அழுத்தத்தை உயர்த்தும்",
            "prevention": "Monitor blood pressure; avoid in hypertensive patients | இரத்த அழுத்தம் கண்காணிக்கவும், உயர் அழுத்தம் உள்ளவர்கள் தவிர்க்கவும்",
            "warning": "Avoid if you have heart disease or hypertension | இதய நோய்கள் அல்லது உயர் இரத்த அழுத்தம் உள்ளவர்கள் தவிர்க்கவும்"
        },
        "Guaifenesin | குவாஃபினசின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/73/Guaifenesin_structure.svg",
            "advantages": "Helps thin mucus and relieves chest congestion | கச்சா சாறுகளை மெல்லியதாக மாற்றி, மார்பு மிச்சியைக் குறைக்கிறது",
            "disadvantages": "May cause dizziness or stomach upset | மயக்கம் அல்லது வயிற்று மோசமாக்கல் ஏற்படலாம்",
            "prevention": "Drink plenty of water to help with mucus thinning | கச்சா சாறுகளைக் குறைக்க நீர் அதிகமாக குடிக்கவும்",
            "warning": "Not for people with severe breathing problems | தீவிர மூச்சுக்குழப்பம் உள்ளவர்கள் தவிர்க்கவும்"
        },
        "Benadryl (Diphenhydramine) | பெனாட்ரில்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Diphenhydramine_structure.svg",
            "advantages": "Good for treating runny nose, sneezing, and allergies | மூக்கின் ஓட்டம், ஆறுதல் மற்றும் ஆல்‌ர்ஜியை சிகிச்சை செய்கிறது",
            "disadvantages": "Causes drowsiness, dry mouth | தூக்கத்தை உண்டாக்கும், வாய் உலர்த்தல்",
            "prevention": "Take at night to avoid daytime drowsiness | இரவில் எடுக்கும், பகலிலான தூக்கத்தை தவிர்க்க",
            "warning": "Avoid in elderly and pregnant women | முதியவர்களுக்கு மற்றும் கர்ப்பிணி பெண்களுக்கு தவிர்க்கவும்"
        },
        "Menthol (Topical) | மெந்தால் (உடல் மெசூறல்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Menthol_2D_Skeletal.png",
            "advantages": "Relieves congestion and soothes sore throat | மூக்குக் கட்டுப்பாடு மற்றும் குமட்டல் சரி செய்ய உதவுகிறது",
            "disadvantages": "Can cause skin irritation if overused | அதிகமாக பயன்படுத்தினால் தோல் எரிச்சல் ஏற்படும்",
            "prevention": "Apply a small amount to skin; avoid mucous membranes | தோலின் ஒரு சிறிய பகுதியில் மட்டும் பயன்படுத்தவும், நரம்பு உறுப்பு பகுதிகளைத் தவிர்க்கவும்",
            "warning": "Do not apply near eyes or mouth | கண்கள் அல்லது வாயருகே பயன்படுத்த வேண்டாம்"
        }
        ,
        "Omeprazole | ஓமேப்ராஜோல்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Omeprazole_structure.svg",
            "advantages": "Reduces stomach acid, helps with acid reflux | வயிற்று அமிலத்தை குறைத்து, அமில உறுப்பு எதிர்ப்பு உதவுகிறது",
            "disadvantages": "Long-term use can cause vitamin B12 deficiency | நீண்ட கால பயன்பாட்டில் விட்டமின் B12 குறைபாடு ஏற்படும்",
            "prevention": "Use for short periods, take with food | குறுகிய காலத்தில் பயன்படுத்தவும், உணவுடன் எடுக்கும்",
            "warning": "Not for use in severe liver disease | தீவிர கல்லீரல் நோயுடன் தவிர்க்கவும்"
        },
        "Loperamide | லோபெரமைடை": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Loperamide.svg",
            "advantages": "Effective for controlling diarrhea | இடுப்பு சருமத்தை கட்டுப்படுத்துவதற்கான பயனுள்ளது",
            "disadvantages": "May cause constipation | செரிமான தடை ஏற்படலாம்",
            "prevention": "Use for short durations; stay hydrated | குறுகிய காலம் மட்டுமே பயன்படுத்தவும், நீர் அதிகமாக குடிக்கவும்",
            "warning": "Avoid in cases of fever or bloody diarrhea | காய்ச்சல் அல்லது இரத்தப்போக்கு உடனான இடுப்புகளுக்கு தவிர்க்கவும்"
        },
        "Ranitidine | ரனிடிடின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Ranitidine_chemical_structure.svg",
            "advantages": "Reduces stomach acid, helps with ulcers and GERD | வயிற்று அமிலத்தை குறைக்கிறது, அஜீரணங்கள் மற்றும் GERD-க்கு உதவுகிறது",
            "disadvantages": "May cause dizziness or headaches | மயக்கம் அல்லது தலைவலி ஏற்படலாம்",
            "prevention": "Take before meals; avoid alcohol | உணவுக்கு முன் எடுங்கள், மதுபானம் தவிர்க்கவும்",
            "warning": "Avoid in kidney or liver impairment | சிறுநீரக அல்லது கல்லீரல் பாதிப்பு உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Simethicone | சிமெத்திய்கோன்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Simethicone.svg",
            "advantages": "Relieves bloating and gas | உப்புமா மற்றும் வாயு குறைக்கிறது",
            "disadvantages": "May cause mild stomach upset | சிறு வயிற்று அலர்ஜி ஏற்படலாம்",
            "prevention": "Take after meals to relieve gas | உணவுக்குப் பிறகு எடுத்துக்கொள்ளவும்",
            "warning": "Avoid if you have any gastrointestinal blockage | பருக்காமலான குடல்தடை உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Antacids (Calcium Carbonate) | ஆண்டாசிட் (கால்சியம் கார்பனேட்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Calcium_carbonate.svg",
            "advantages": "Provides quick relief from heartburn and acid reflux | இதய எரிவை மற்றும் அமில உறுப்பு எதிர்ப்பு விரைவாக குறைக்கும்",
            "disadvantages": "Can cause constipation or kidney stones | செரிமான தடை அல்லது சிறுநீரக கல்லை ஏற்படுத்தலாம்",
            "prevention": "Take in moderation and stay hydrated | அளவுக்கு மிகாமல் உட்கொள்ளவும், நீர் அதிகமாக குடிக்கவும்",
            "warning": "Avoid in kidney disease or high calcium levels | சிறுநீரக நோய் அல்லது அதிக கால்சியம் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Magnesium Hydroxide | மக்னீசியம் ஹைட்ராக்சைடு": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/26/Magnesium_hydroxide_chemical_structure.svg",
            "advantages": "Helps with constipation and indigestion | செரிமான சிக்கல் மற்றும் இடுப்பு சருமத்திற்கு உதவுகிறது",
            "disadvantages": "Can cause diarrhea if overused | அதிகமாக பயன்படுத்தினால் இடுப்பு சருமம் ஏற்படும்",
            "prevention": "Use for short-term relief only | குறுகிய காலத்திற்கு மட்டுமே பயன்படுத்தவும்",
            "warning": "Not for people with kidney disease | சிறுநீரக நோயாளிகளுக்கு தவிர்க்கவும்"
        },
        "Pepto-Bismol (Bismuth Subsalicylate) | பெப்டோ-பிஸ்மோல் (பிஸ்மத் சப்சலிசிலேட்டின்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pepto-Bismol.svg",
            "advantages": "Relieves upset stomach, nausea, and diarrhea | வயிற்று அசலுவை, வாந்தி மற்றும் இடுப்பு சருமத்திற்கு உதவுகிறது",
            "disadvantages": "May cause a black tongue or stool | கருப்பு நாக்கு அல்லது மலமோசமான நிறம் ஏற்படலாம்",
            "prevention": "Use in moderation; stay hydrated | அளவுக்கு மிகாமல் பயன்படுத்தவும், நீர் அதிகமாக குடிக்கவும்",
            "warning": "Not for use in children with viral infections | வைரல் தொற்றுகள் உள்ள குழந்தைகளுக்கு பயன்பாடில்லை"
        },
        "Dicyclomine | டைசைக்ளோமைன்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dicyclomine_chemical_structure.svg",
            "advantages": "Helps with irritable bowel syndrome (IBS) and cramps | அவசரமான குடல் சிக்கல் (IBS) மற்றும் கம்பி வலிக்கு உதவுகிறது",
            "disadvantages": "May cause drowsiness and dry mouth | தூக்கத்தன்மை மற்றும் வாய் உலர்த்தல் ஏற்படலாம்",
            "prevention": "Take as prescribed; avoid in elderly | மருந்து பரிந்துரைக்கப்படுவதைப் போல எடுங்கள்; முதியவர்களுக்கு தவிர்க்கவும்",
            "warning": "Not for people with glaucoma or urinary problems | குளோகோமா அல்லது சிறுநீரக பிரச்சனைகள் உள்ளவர்கள் தவிர்க்கவும்"
        }
        
        ,
        
        "Diphenhydramine | டிபென்ஹைட்ராமின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/Diphenhydramine_2D_skeletal.png",
            "advantages": "Relieves allergy symptoms such as runny nose, sneezing, and itching | ஆல்‌ர்ஜி அடையாளங்களை, மூக்கின் ஓட்டம், ஆறுதல் மற்றும் ஊட்டினை குறைக்கிறது",
            "disadvantages": "Can cause drowsiness and dry mouth | தூக்கத்தன்மை மற்றும் வாய் உலர்த்தல் ஏற்படலாம்",
            "prevention": "Take before bedtime to avoid daytime drowsiness | பகலிலான தூக்கத்தை தவிர்க்க இரவில் எடுத்துக்கொள்ளவும்",
            "warning": "Avoid in elderly and pregnant women | முதியவர்களுக்கு மற்றும் கர்ப்பிணி பெண்களுக்கு தவிர்க்கவும்"
        },
        "Hydrocortisone Cream | ஹைட்ரோகோர்டிசோன் கிரீம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Prednisolone_and_hydrocortisone.svg",
            "advantages": "Effective for skin inflammation, rashes, and itching | தோல் எரிச்சல், விரிப்புகள் மற்றும் ஊட்டினுக்கு சிறந்த உதவி",
            "disadvantages": "Prolonged use can thin the skin | நீண்ட காலம் பயன்படுத்துவதால் தோல் முடிகிறது",
            "prevention": "Use sparingly and only for short periods | மிகுந்த அளவில் பயன்படுத்தாதீர்கள், குறுகிய காலத்திற்கு மட்டும் பயன்படுத்தவும்",
            "warning": "Avoid on broken or infected skin | உடைந்த அல்லது தொற்றிய தோலில் பயன்படுத்தாதீர்கள்"
        },
        "Loratadine | லோராடடின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Loratadine_chemical_structure.svg",
            "advantages": "Non-sedating antihistamine for seasonal allergies | தூக்கத்தை குறைக்காத ஆல்‌ர்ஜி மருந்து",
            "disadvantages": "Can cause headache or dry mouth | தலைவலி அல்லது வாய் உலர்த்தல் ஏற்படலாம்",
            "prevention": "Stay hydrated and avoid alcohol | நீர் அதிகமாக குடிக்கவும், மதுபானம் தவிர்க்கவும்",
            "warning": "Not for people with severe liver disease | தீவிர கல்லீரல் நோயுடன் தவிர்க்கவும்"
        },
        "Calamine Lotion | காலமைன் லோசன்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Calamine_lotion.svg",
            "advantages": "Relieves itching and skin irritation | தோல் ஊட்டினை மற்றும் எரிச்சலை குறைக்கிறது",
            "disadvantages": "May cause skin dryness with overuse | அதிகமாக பயன்படுத்தினால் தோல் உலர்த்தல் ஏற்படும்",
            "prevention": "Apply a thin layer; avoid broken skin | மென்மையான அடியில் பயன்படுத்தவும், உடைந்த தோலில் தவிர்க்கவும்",
            "warning": "Not for open wounds or severe rashes | திறந்த 상처 அல்லது தீவிர விரிப்புகளில் பயன்படுத்தக்கூடாது"
        },
        "Cetirizine | செட்டிரிசின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cetirizine_structure.svg",
            "advantages": "Effective for hay fever and seasonal allergies | காகித காற்று மற்றும் பருவ கால ஆல்‌ர்ஜிகளுக்கான சிறந்த உதவி",
            "disadvantages": "Can cause mild drowsiness or headache | சிறு தூக்கத்தை அல்லது தலைவலியை ஏற்படுத்தலாம்",
            "prevention": "Take at night if drowsiness occurs | தூக்கத்தை ஏற்படுத்தினால் இரவில் எடுத்துக்கொள்ளவும்",
            "warning": "Avoid alcohol; not for pregnant women | மதுபானம் தவிர்க்கவும்; கர்ப்பிணி பெண்களுக்கு பயன்பாடில்லை"
        },
        "Benzoyl Peroxide | பென்சோயல் பெராக்சைடு": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/27/Benzoyl_peroxide.svg",
            "advantages": "Effective for acne and skin blemishes | முக புண்கள் மற்றும் தோல் குறுக்கீடுகளுக்கு பயனுள்ளதாக",
            "disadvantages": "Can cause dryness or irritation | தோல் உலர்த்தல் அல்லது எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Use in small amounts, moisturize skin | சிறு அளவில் பயன்படுத்தவும், தோலை சதைப்படுத்தவும்",
            "warning": "Avoid excessive sun exposure | அதிகமான சூரியக்கதிர்வினை தவிர்க்கவும்"
        },
        "Aloe Vera Gel | ஆலோவேரா ஜெல்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Aloe_vera_leaf_2010.JPG",
            "advantages": "Soothes sunburn, cuts, and skin irritation | வெயில் பிரச்சனை, பட்டு மற்றும் தோல் எரிச்சலுக்கு உதவுகிறது",
            "disadvantages": "May cause allergic reactions in sensitive skin | உணர்ச்சி பரிசோதனையில் தோல் அலர்ஜி ஏற்படும்",
            "prevention": "Perform patch test before applying | பயன்படுத்துவதற்கு முன் சோதனை செய்யவும்",
            "warning": "Avoid use on broken skin | உடைந்த தோலில் பயன்படுத்த வேண்டாம்"
        },
        "Tea Tree Oil | டீ டிரி எண்ணெய்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Tea_tree_oil_bottle.jpg",
            "advantages": "Natural remedy for acne and fungal infections | மசக்கள் மற்றும் பூஞ்சை தொற்றுகளுக்கான இயற்கை மருந்து",
            "disadvantages": "Can irritate sensitive skin if undiluted | அரைச்சு இல்லாமல் பயன்படுத்தும் போது தோல் எரிச்சல் ஏற்படும்",
            "prevention": "Dilute with carrier oil before application | பயன்பாட்டுக்கு முன் தாங்கும் எண்ணெயுடன் அரைச்சு செய்யவும்",
            "warning": "Not for use in children under 2 years | 2 வயதுக்கு குறைந்த குழந்தைகளுக்கு பயன்பாடில்லை"
        },
        "Chlorpheniramine | க்ளோர்பெனிரமின்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Chlorpheniramine_skeletal.svg",
            "advantages": "Effective for hay fever and other allergic reactions | காகித காற்று மற்றும் பிற ஆல்‌ர்ஜிகளுக்கு உதவுகிறது",
            "disadvantages": "Can cause drowsiness, dry mouth, or dizziness | தூக்கத்தை, வாய் உலர்த்தல் அல்லது மயக்கம் ஏற்படுத்தலாம்",
            "prevention": "Take at night to reduce drowsiness | தூக்கத்தை குறைக்க இரவில் எடுத்துக்கொள்ளவும்",
            "warning": "Not for use in elderly or those with respiratory conditions | முதியவர்கள் அல்லது மூச்சு பிரச்சனைகள் உள்ளவர்கள் தவிர்க்கவும்"
        },
        "Allergy Nasal Sprays (Fluticasone) | ஆல்‌ர்ஜி நாசல் ஸ்ப்ரே (ஃப்ளூடிகசோன்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fluticasone_propionate_structure.svg",
            "advantages": "Reduces nasal congestion and inflammation | மூக்குக் கட்டுப்பாட்டை மற்றும் வீக்கம் குறைக்கும்",
            "disadvantages": "Can cause nosebleeds or irritation | மூக்கில் இரத்தக்கசிவு அல்லது எரிச்சல் ஏற்படும்",
            "prevention": "Use as directed and avoid overuse | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்தாதீர்கள்",
            "warning": "Avoid if you have untreated nasal or sinus infections | சிகிச்சை செய்யப்படாத மூக்கு அல்லது கழுத்து தொற்றுகளுடன் தவிர்க்கவும்"
        }
        
        ,
        
        "Vitamin C (Ascorbic Acid) | வைட்டமின் C (அஸ்கோர்பிக் அமிலம்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Ascorbic_acid_2D_skeletal.png",
            "advantages": "Boosts immune system, antioxidant, skin health | பிறவிச்சூழலை மேம்படுத்தி, உடலின் பாதுகாப்பு மற்றும் தோல் ஆரோக்கியத்திற்கு உதவுகிறது",
            "disadvantages": "Excess intake may cause stomach upset or kidney stones | அதிகம் எடுத்தால் வயிற்று அசலுவை அல்லது சிறுநீரக கல்லை ஏற்படும்",
            "prevention": "Limit dosage to recommended levels | பரிந்துரைக்கப்பட்ட அளவுக்கு மட்டுமே எடுத்துக்கொள்ளவும்",
            "warning": "Avoid if you have kidney disease | சிறுநீரக நோயுடன் தவிர்க்கவும்"
        },
        "Vitamin D | வைட்டமின் D": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/44/Vitamin_D3_3D_ball.png",
            "advantages": "Supports bone health, improves calcium absorption | எலும்பு ஆரோக்கியத்தை ஆதரித்து, கால்சியம் உறிஞ்சலை மேம்படுத்துகிறது",
            "disadvantages": "Excessive intake can cause toxicity or hypercalcemia | அதிகபட்சம் பயன்படுத்தினால் விஷத்தன்மை அல்லது அதிக கால்சியம் ஏற்படும்",
            "prevention": "Follow dosage instructions and monitor levels | மருந்தின் அளவுகளை பின்பற்றவும், அளவுகளை கண்காணிக்கவும்",
            "warning": "Not for use in people with high calcium levels or kidney problems | அதிக கால்சியம் அல்லது சிறுநீரக பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Vitamin B12 | வைட்டமின் B12": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vitamin_B12.svg",
            "advantages": "Boosts energy, supports brain function and nerve health | சக்தியை அதிகரித்து, மூளை செயல்பாடு மற்றும் நரம்பு ஆரோக்கியத்தை ஆதரிக்கிறது",
            "disadvantages": "Excess intake may cause headaches or dizziness | அதிகப்படியான பயன் தலைவலி அல்லது மயக்கம் ஏற்படுத்தும்",
            "prevention": "Ensure balanced intake from food sources and supplements | உணவு மூலமாக மற்றும் குறைந்த அளவில் மருந்துகள் மூலம் சமநிலை பருகுங்கள்",
            "warning": "Not for use in people with Leber's disease (genetic disorder) | லெபர் நோய் (வாழ்க்கை குறைந்த குறைபாடு) உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Fish Oil (Omega-3) | மீன் எண்ணெய் (ஓமேகா-3)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Omega-3_fatty_acid_structure.svg",
            "advantages": "Supports heart health, reduces inflammation, improves brain function | இதய ஆரோக்கியத்தை ஆதரித்து, வீக்கம் குறைக்கின்றது, மூளை செயல்பாட்டை மேம்படுத்துகிறது",
            "disadvantages": "May cause fishy aftertaste, digestive upset, or bad breath | மீன் சுவை, செரிமான அசலுவை அல்லது மோசமான மூக்குக்காற்றை ஏற்படுத்தலாம்",
            "prevention": "Take with meals to minimize aftertaste and upset | உணவுடன் எடுத்துக்கொள்ளவும்",
            "warning": "Not for use in people with fish allergies or blood thinners | மீன் அலர்ஜி அல்லது ரத்த தடுப்பு மருந்து பயன்படுத்துபவர்களுக்கு தவிர்க்கவும்"
        },
        "Calcium Supplements | கால்சியம் முக்கூடங்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/Calcium_ion.svg",
            "advantages": "Promotes bone and teeth health, prevents osteoporosis | எலும்பு மற்றும் பல் ஆரோக்கியத்தை மேம்படுத்துகிறது, ஒஸ்டியோபோரோசிஸ் தடுக்கும்",
            "disadvantages": "Excessive intake may lead to kidney stones or constipation | அதிகம் எடுத்தால் சிறுநீரக கல்லை அல்லது இடுப்பு சருமம் ஏற்படும்",
            "prevention": "Balance with magnesium and Vitamin D intake | மக்னீசியம் மற்றும் வைட்டமின் D உடனே எடுத்துக்கொள்ளவும்",
            "warning": "Avoid in people with kidney disease or high calcium levels | சிறுநீரக நோயாளிகள் அல்லது அதிக கால்சியம் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Magnesium Supplements | மக்னீசியம் முக்கூடங்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Magnesium_ion.svg",
            "advantages": "Helps with muscle function, reduces cramps, supports nerve function | தசை செயல்பாட்டை, கம்பி வலிகளை குறைக்கிறது, நரம்பு செயல்பாட்டை ஆதரிக்கிறது",
            "disadvantages": "May cause diarrhea or stomach upset | இடுப்பு சருமம் அல்லது வயிற்று அசலுவை ஏற்படுத்தலாம்",
            "prevention": "Take with food to minimize gastrointestinal effects | உணவுடன் எடுத்துக்கொள்ளவும், செரிமான பிரச்சனைகளை தவிர்க்க",
            "warning": "Not for use in people with kidney disease or heart conditions | சிறுநீரக நோயாளிகள் அல்லது இதய பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Iron Supplements | இரும்பு முக்கூடங்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Iron_sulfate.svg",
            "advantages": "Helps in treating iron-deficiency anemia, supports red blood cell production | இரும்பு குறைபாட்டை சரிசெய்ய உதவுகிறது, சிவப்பு ரத்தக்கணிகைகளை உருவாக்க உதவுகிறது",
            "disadvantages": "Excessive intake can cause constipation and stomach irritation | அதிகம் எடுத்தால் இடுப்பு சருமம் மற்றும் வயிற்று அசலுவை ஏற்படும்",
            "prevention": "Take with Vitamin C to enhance absorption, drink plenty of water | வைட்டமின் C உடன் எடுத்துக்கொள்வதும், அதிகமாக நீர் குடிப்பதும் உதவும்",
            "warning": "Avoid in children under 12 years of age | 12 வயதுக்கு குறைந்த குழந்தைகளுக்கு தவிர்க்கவும்"
        },
        "Multivitamins | மல்டிவிட்டமின்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Multivitamin_Supplements.jpg",
            "advantages": "Provides essential nutrients for overall health and wellness | உடல் ஆரோக்கியத்திற்கான தேவையான ஊட்டச்சத்துக்களை வழங்குகிறது",
            "disadvantages": "Excessive use may lead to vitamin toxicity | அதிகம் பயன்படுத்தினால் வைட்டமின் விஷத்தன்மை ஏற்படும்",
            "prevention": "Follow recommended dosage and maintain a balanced diet | பரிந்துரைக்கப்பட்ட அளவை பின்பற்றவும், சமநிலை உணவினை பின்பற்றவும்",
            "warning": "Avoid exceeding recommended daily intake | பரிந்துரைக்கப்பட்ட அன்றாட அளவை மீறாதீர்கள்"
        },
        "Probiotics | பிரொபயோடிக்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lactobacillus_helveticus_3D_structure.png",
            "advantages": "Supports gut health, improves digestion, boosts immune system | குடல் ஆரோக்கியத்தை மேம்படுத்துகிறது, செரிமானத்தை சரிசெய்கிறது, உடலின் பாதுகாப்பு திறன் மேம்படுத்துகிறது",
            "disadvantages": "May cause bloating or gas initially | ஆரம்பத்தில் உப்புமா அல்லது வாயு ஏற்படும்",
            "prevention": "Start with small doses and gradually increase | சிறு அளவுகளுடன் தொடங்கவும், படிப்படியாக அதிகரிக்கவும்",
            "warning": "Not for use in people with compromised immune systems | குறைபாட்டுக்குள்ள உடல் பாதுகாப்பு கொண்டவர்களுக்கு தவிர்க்கவும்"
        }
        
        ,
        
        "Artificial Tears | கைவிடப்பட்ட கண்ணீர்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Artificial_Tears_Bottle.jpg",
            "advantages": "Relieves dry eyes and irritation, lubricates the eye surface | உலர்ந்த கண்களை மற்றும் எரிச்சலை குறைக்கிறது, கண் மேற்பரப்பை திரேப்பாக செய்கிறது",
            "disadvantages": "Excessive use may cause eye irritation | அதிகம் பயன்படுத்துவதால் கண் எரிச்சல் ஏற்படும்",
            "prevention": "Use as needed, avoid overuse | தேவையானபோது பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Do not use if you have eye infections or open wounds | கண் தொற்றுகள் அல்லது திறந்த 상처 உள்ளவர்களுக்கு பயன்படுத்தக்கூடாது"
        },
        "Eye Drops (for Redness) | கண் திருப்புவதற்கான கண்ணீர் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Tetrahydrozoline_-_molecular_structure.svg",
            "advantages": "Reduces redness and irritation in the eyes | கண்களின் சிவப்பினை மற்றும் எரிச்சலை குறைக்கிறது",
            "disadvantages": "May cause rebound redness if overused | அதிகமாக பயன்படுத்தினால் மீண்டும் சிவப்பு ஏற்படும்",
            "prevention": "Use only for short periods | குறுகிய காலத்திற்கு மட்டுமே பயன்படுத்தவும்",
            "warning": "Avoid in individuals with glaucoma or eye conditions | குளோக்கோமா அல்லது கண் பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Antihistamine Eye Drops | ஆல்‌ர்ஜி கண் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Antihistamine_eye_drop_bottle.jpg",
            "advantages": "Relieves itching, redness, and watery eyes due to allergies | ஆல்‌ர்ஜி காரணமாக கண்களின் எரிச்சல், சிவப்பு மற்றும் நீர் ஓட்டத்தை குறைக்கிறது",
            "disadvantages": "Can cause dry eyes or mild irritation | உலர்ந்த கண்கள் அல்லது மென்மையான எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Use as directed and avoid overuse | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்தாதீர்கள்",
            "warning": "Avoid in children under 2 years | 2 வயதுக்கு குறைந்த குழந்தைகளுக்கு தவிர்க்கவும்"
        },
        "Ear Drops (for Earwax Removal) | காதுக்கான டிராப்ஸ் (காதுக்கு முடுக்கு நீக்குதல்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Ear_wax_removal_drop_bottle.jpg",
            "advantages": "Helps soften earwax for easy removal | காதுக்கான முடுக்கை மென்மையாக செய்ய உதவுகிறது, எளிதில் நீக்கமாகிறது",
            "disadvantages": "Excessive use may irritate the ear canal | அதிகமாக பயன்படுத்துவதால் காதின் குழாயை எரிச்சலுறுத்தலாம்",
            "prevention": "Use as needed, avoid overuse | தேவையானபோது பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Avoid use if you have a perforated eardrum or ear infection | காதின் திருப்பு அல்லது காதில் தொற்று இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Decongestant Nasal Drops (for blocked nose) | மூக்கு முடுக்கு திறக்கும் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Phenylephrine_chemical_structure.svg",
            "advantages": "Relieves nasal congestion and promotes easier breathing | மூக்கு முடுக்கை திறந்து, எளிதில் மூச்சு விட உதவுகிறது",
            "disadvantages": "May cause nasal irritation, dryness, or rebound congestion | மூக்கில் எரிச்சல், உலர்த்தல், அல்லது மீண்டும் முடுக்கு ஏற்படலாம்",
            "prevention": "Use only for short periods (3 days max) | குறுகிய காலத்திற்கு மட்டுமே பயன்படுத்தவும் (3 நாட்கள் அதிகமாக அல்ல)",
            "warning": "Avoid in individuals with high blood pressure, heart disease, or thyroid problems | உயர் ரத்த அழுத்தம், இதய நோய் அல்லது தைராய்டு பிரச்சனைகள் உள்ளவர்களுக்கு தவிர்க்கவும்"
        },
        "Otic Analgesic Ear Drops | காதின் வலி நிவாரண டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Otic_analgesic_drops.jpg",
            "advantages": "Provides temporary relief from ear pain and inflammation | காது வலி மற்றும் வீக்கத்திலிருந்து தற்காலிக நிவாரணம் அளிக்கிறது",
            "disadvantages": "May cause ear irritation or allergic reaction | காதில் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படும்",
            "prevention": "Use as directed, do not overuse | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Avoid in individuals with ear infections or damaged eardrum | காதில் தொற்றுகள் அல்லது காயம் ஏற்பட்ட காதுகளுக்கு பயன்படுத்தக்கூடாது"
        },
        "Lubricating Eye Drops | திரேப்பாக்கும் கண் டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lubricating_eyes_drops.jpg",
            "advantages": "Helps with dry eyes, irritation, and enhances comfort | உலர்ந்த கண்கள், எரிச்சல் மற்றும் வசதியை மேம்படுத்த உதவுகிறது",
            "disadvantages": "Can cause blurred vision temporarily | தற்காலிகமாக கண்ணோட்டம் மங்கல் ஏற்படும்",
            "prevention": "Use as needed, avoid contact with hands or unclean surfaces | தேவையானபோது பயன்படுத்தவும், கைகள் அல்லது மாசு செய்யப்பட்ட மேற்பரப்புகள் தவிர்க்கவும்",
            "warning": "Avoid if you have an eye infection or open wounds | கண் தொற்றுகள் அல்லது திறந்த 상த்திரப்புகளுக்கு பயன்படுத்த வேண்டாம்"
        },
        "Antibiotic Ear Drops | ஒவ்வாமை எதிர்ப்பு காது டிராப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Ear_infection_antibiotic_ear_drops.jpg",
            "advantages": "Treats ear infections and reduces bacterial growth | காது தொற்றுகளுக்கு சிகிச்சை அளித்து, பாலூட்டித் தொற்றுக்களை குறைக்கிறது",
            "disadvantages": "May cause allergic reaction or irritation | அலர்ஜி எதிரொலிகள் அல்லது எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Follow dosage instructions and avoid contamination | அளவு வழிமுறைகளை பின்பற்றவும், மாசுபாட்டை தவிர்க்கவும்",
            "warning": "Do not use if the eardrum is ruptured | காதின் திருப்பு கெட்டுவிட்டால் பயன்படுத்தக்கூடாது"
        }
        
        ,
        
        "Band-Aids | பாண்டு": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Plaster-Bandage.jpg",
            "advantages": "Helps cover small cuts, abrasions, and blisters, promotes healing | சிறிய கதிர்கள், சேதங்கள் மற்றும் கட்டிகளைக் காப்பாற்றி, குணப்படுத்த உதவுகிறது",
            "disadvantages": "May cause skin irritation or allergic reactions | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Clean the wound before applying, change regularly | பறவை மறைக்கப்படாமலான வியாதிகளுக்கு சரியான பராமரிப்புடன் மாற்றவும்",
            "warning": "Do not use on deep or infected wounds | ஆழமான அல்லது தொற்றுபட்ட 상처களில் பயன்படுத்தக்கூடாது"
        },
        "Antiseptic Creams | அண்டிசெப்டிக் கிரீம்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Antiseptic_cream.jpg",
            "advantages": "Helps prevent infection in minor cuts and abrasions | சிறிய கதிர்கள் மற்றும் சேதங்களில் தொற்றைத் தவிர்க்க உதவுகிறது",
            "disadvantages": "Can cause skin irritation or allergic reactions | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Apply a thin layer, avoid overuse | ஒரு சில அடுக்குகளுடன், அதிகபட்சம் பயன்பாட்டை தவிர்க்கவும்",
            "warning": "Do not use on large open wounds or deep cuts | பெரிதான திறந்த 상துக்கள் அல்லது ஆழமான குத்துகளில் பயன்படுத்த வேண்டாம்"
        },
        "Hydrocortisone Cream | ஹைட்ரோகார்டிசோன் கிரீம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Hydrocortisone_chemical_structure.svg",
            "advantages": "Reduces inflammation, itching, and swelling from minor skin irritation | சிறிய தோல் எரிச்சல், காய்ச்சல் மற்றும் வீக்கத்தை குறைக்கிறது",
            "disadvantages": "Excessive use may cause thinning of skin | அதிகமாக பயன்படுத்தும் போது தோல் மெல்லியதாக அமைகின்றது",
            "prevention": "Use sparingly, apply to affected areas only | பரிந்துரைக்கப்பட்ட அளவில் மட்டுமே பயன்படுத்தவும்",
            "warning": "Avoid long-term use on large areas of skin | பெரிய பரப்புகளில் நீண்டகாலம் பயன்படுத்த வேண்டாம்"
        },
        "Antiseptic Wipes | அண்டிசெப்டிக் வைப்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Antiseptic_wipes.jpg",
            "advantages": "Convenient for cleaning wounds, cuts, and hands | 상துக்கள், கதிர்கள் மற்றும் கைகளை சுத்தப்படுத்துவதற்கு எளிமையானது",
            "disadvantages": "May cause dryness or irritation if overused | அதிகமாக பயன்படுத்தினால் உலர்வு அல்லது எரிச்சல் ஏற்படும்",
            "prevention": "Use as directed, avoid excessive use | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Not for use on deep wounds or burns | ஆழமான 상துக்கள் அல்லது எரிச்சல்களில் பயன்படுத்தக் கூடாது"
        },
        "Burn Gel | எரிச்சல் ஜெல்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Burn_gel.jpg",
            "advantages": "Provides soothing relief from minor burns and sunburns | சிறிய எரிகை மற்றும் பருளிய எரிவுகளிலிருந்து நிவாரணத்தை தருகிறது",
            "disadvantages": "May cause skin irritation or allergic reaction | தோல் எரிச்சல் அல்லது அலர்ஜி எதிரொலிகள் ஏற்படலாம்",
            "prevention": "Apply to clean skin and avoid using on large burns | தூய்மையான தோலுக்கு பயன்படுத்தவும், பெரிய எரியினை தவிர்க்கவும்",
            "warning": "Do not use on open or severe burns | திறந்த அல்லது கடுமையான எரிகைகளில் பயன்படுத்தக்கூடாது"
        },
        "Gauze Pads | கௌஸ் பேட்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gauze_pads.jpg",
            "advantages": "Used to cover and absorb blood from cuts, wounds, or injuries | கதிர்கள், 상துக்கள் அல்லது காயங்களிலிருந்து இரத்தத்தை மூடுவதற்கும் உறிஞ்சுவதற்கும் பயன்படுகிறது",
            "disadvantages": "Can stick to the wound if not used with appropriate ointment | சரியான மருந்து சேர்க்கப்படாவிட்டால் 상துக்களில் சிக்கலாம்",
            "prevention": "Apply with antiseptic or ointment to prevent sticking | அண்டிசெப்டிக் அல்லது கிரீமுடன் சேர்க்கவும்",
            "warning": "Change regularly to avoid infection or sticking | தொற்றுகள் அல்லது சிக்கல் தடுக்கும் வழியில் மாறுதல் செய்யவும்"
        },
        "Thermometer | வெப்பநிலை அளவிலி": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Rectal_thermometer.png",
            "advantages": "Helps measure body temperature to detect fever | உடல் வெப்பத்தை அளக்க உதவுகிறது, காய்ச்சலை கண்டறிய உதவுகிறது",
            "disadvantages": "May provide inaccurate readings if not used properly | சரியான முறையில் பயன்படுத்தாவிட்டால் தவறான மதிப்பீடு வழங்கும்",
            "prevention": "Ensure proper use, follow manufacturer guidelines | சரியான முறையில் பயன்படுத்தவும், உற்பத்தியாளர் வழிமுறைகளை பின்பற்றவும்",
            "warning": "Do not use broken thermometers or mercury-based models | முறியடிக்கப்பட்ட வெப்பநிலை அளவிலிகள் அல்லது மர்கூரி அடிப்படையிலான மாடல்களை பயன்படுத்த வேண்டாம்"
        },
        "Cold Pack | குளிர் பேக்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Cold_packs.jpg",
            "advantages": "Reduces swelling, pain, and inflammation from injuries | காயங்களிலிருந்து வீக்கம், வலி மற்றும் வீக்கத்தை குறைக்கிறது",
            "disadvantages": "May cause frostbite or skin irritation if applied for too long | அதிக நேரம் பயன்படுத்தினால் ஜலனிலி அல்லது தோல் எரிச்சலை ஏற்படுத்தலாம்",
            "prevention": "Use for 15-20 minutes at a time, avoid direct skin contact | 15-20 நிமிடங்களுக்கு மட்டும் பயன்படுத்தவும், நேரடியாக தோலுக்கு தொடர்பு வேண்டாம்",
            "warning": "Do not apply directly to bare skin for extended periods | நீண்ட நேரத்திற்கு நேரடியாக தோலுக்கு பயன்படுத்தாதீர்கள்"
        },
        "First-Aid Tape | முதல் உதவி டேப்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/First-aid_tape.jpg",
            "advantages": "Helps secure bandages and gauze in place | பாண்டுகள் மற்றும் கௌஸ் பேட்ஸ்களை உறுதிப்படுத்த உதவுகிறது",
            "disadvantages": "Can cause skin irritation if too tight | மிகக் குறுக்கமான பயன்படுத்தியால் தோல் எரிச்சல் ஏற்படலாம்",
            "prevention": "Ensure it is not wrapped too tightly around wounds | காயங்களின் சுற்றிலும் மிகக் குறுக்கமாக கட்டாதீர்கள்",
            "warning": "Avoid using on sensitive skin areas | சேதமடைந்த அல்லது குறைந்த தோல் பகுதிகளில் பயன்படுத்த தவிர்க்கவும்"
        }
        
        ,
        
        "Dimenhydrinate (Dramamine) | டைமென்பிரிடினேட் (டிராமமின்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dimenhydrinate.svg",
            "advantages": "Helps prevent and treat motion sickness, nausea, and vomiting | பயண நோய்வயப்புக்கு தடுப்பு மற்றும் களங்கம், வாந்தி மற்றும் வியர்க்கல் குணமாக்குகிறது",
            "disadvantages": "May cause drowsiness, dry mouth, or blurred vision | தூக்கம், உலர்ந்த வாயும், அல்லது மங்கலான கண்ணோட்டம் ஏற்படும்",
            "prevention": "Take 30 minutes before travel, avoid alcohol | பயணத்திற்கு 30 நிமிடங்களுக்கு முன்பு எடுத்துக்கொள்ளவும், மது தவிர்க்கவும்",
            "warning": "Avoid if you have glaucoma or difficulty urinating | குளோக்கோமா அல்லது சிறுநீரின் கஷ்டம் இருந்தால் தவிர்க்கவும்"
        },
        "Meclizine (Bonine) | மெக்லிசின் (பொனின்)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meclizine.svg",
            "advantages": "Effective for preventing nausea, dizziness, and vomiting from motion sickness | பயண நோய் காரணமாக களங்கம், சுழற்சி மற்றும் வாந்தி தடுக்கும்",
            "disadvantages": "May cause dry mouth, drowsiness, and dizziness | உலர்ந்த வாயும், தூக்கம் மற்றும் சுழற்சி ஏற்படும்",
            "prevention": "Take 1 hour before travel, avoid alcohol | பயணத்திற்கு 1 மணிநேரம் முன் எடுத்துக்கொள்ளவும், மது தவிர்க்கவும்",
            "warning": "Not for children under 12 years | 12 வயதுக்குள்ள குழந்தைகளுக்கு பயன்படுத்தக்கூடாது"
        },
        "Scopolamine Patches | ஸ்கோபொலமின் படிகங்கள்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Scopolamine_chemical_structure.svg",
            "advantages": "Prevents and treats nausea, vomiting, and dizziness associated with motion sickness | பயண நோயினால் ஏற்படும் களங்கம், வாந்தி மற்றும் சுழற்சியை தடுக்கும்",
            "disadvantages": "Can cause dry mouth, blurred vision, and drowsiness | உலர்ந்த வாயும், மங்கலான கண்ணோட்டம், மற்றும் தூக்கம் ஏற்படும்",
            "prevention": "Apply patch behind ear 4 hours before travel, replace every 3 days | பயணத்திற்கு 4 மணிநேரம் முன் காது பின்னால் படிகத்தை பயன்படுத்தவும், 3 நாட்களுக்கு ஒரு முறை மாற்றவும்",
            "warning": "Avoid use if you have glaucoma or certain heart conditions | குளோக்கோமா அல்லது சில இதய பிரச்சனைகள் இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Ginger Supplements | இஞ்சி செரிமானம்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Ginger_root.jpg",
            "advantages": "Natural remedy for preventing nausea and vomiting from motion sickness | பயண நோயில் இருந்து களங்கம் மற்றும் வாந்தியை தவிர்க்க இயற்கை மருந்து",
            "disadvantages": "May cause heartburn or digestive upset in some people | சிலருக்கு மார்பு எரிச்சல் அல்லது செரிமான இடர்பாடு ஏற்படும்",
            "prevention": "Take before or during travel as directed | பயணத்திற்கு முன்பாக அல்லது பயணத்தின் போது பரிந்துரைக்கப்பட்டபடி எடுத்துக்கொள்ளவும்",
            "warning": "Not for people with gallstones or on blood-thinning medications | புற்றுநோய்கள் உள்ளவர்கள் அல்லது இரத்தம் சிறிது தடுப்பில் இருக்கும் மருந்துகள் பயன்படுகிறவர்களுக்கு தவிர்க்கவும்"
        },
        "Anti-Diarrheal (Loperamide) | அழுக்கு விரட்டும் மருந்து (லோபெரமைடு)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Loperamide_chemical_structure.svg",
            "advantages": "Effective in controlling diarrhea and reducing the frequency of bowel movements | உடல் தொற்று மற்றும் கழிப்பறை மேலாண்மையை குறைக்கும்",
            "disadvantages": "May cause constipation, dizziness, or abdominal discomfort | மலச்சிக்கல், சுழற்சி அல்லது வயிற்றில் வலி ஏற்படும்",
            "prevention": "Use only when needed, do not overuse | தேவையான போது மட்டுமே பயன்படுத்தவும், அதிகமாக பயன்படுத்த வேண்டாம்",
            "warning": "Do not use if you have a fever or blood in your stools | காய்ச்சல் அல்லது கழிப்பறையில் இரத்தம் இருந்தால் பயன்படுத்த வேண்டாம்"
        },
        "Probiotics | ப்ரோபயோடிக்ஸ்": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Probiotic_capsules.jpg",
            "advantages": "Supports digestive health and may help prevent travel-related digestive issues | செரிமான ஆரோக்கியத்தை ஆதரிக்கும் மற்றும் பயணத்துடன் தொடர்புடைய செரிமான பிரச்சனைகளைத் தவிர்க்க உதவும்",
            "disadvantages": "May cause mild bloating or gas in some people | சிலருக்கு சிறிது குடலிலுள்ள வீக்கம் அல்லது வாயுவை ஏற்படுத்தலாம்",
            "prevention": "Take daily before and during travel to maintain gut health | செரிமான ஆரோக்கியத்தை பராமரிக்க தினசரி எடுத்துக்கொள்ளவும்",
            "warning": "Consult a doctor before use if you have a weakened immune system | சுருங்கிய எதிர்ப்பு முறையை கொண்டிருக்கும் மனிதர்கள் பயன்பாட்டிற்கு முன் மருத்துவரிடம் ஆலோசனை பெற வேண்டும்"
        },
        "Electrolyte Replenishment (Oral Rehydration Salts) | எலக்ட்ரோலைட் மீளச்செலுத்துதல் (முகமாக நீர்ம பராமரிப்பு உப்பு)": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Oral_rehydration_salts.jpg",
            "advantages": "Helps restore electrolytes and fluids lost due to diarrhea, vomiting, or dehydration | உடல் தொற்று, வாந்தி அல்லது நீரிழிவு காரணமாக இழக்கப்பட்ட எலக்ட்ரோலைட்டுகளையும் திரவங்களையும் மீட்டெடுக்க உதவுகிறது",
            "disadvantages": "Excessive use may lead to an electrolyte imbalance | அதிக பயன்படுத்தினால் எலக்ட்ரோலைட் சமன்வயப்புக்கு காரணமாக அமைகிறது",
            "prevention": "Use as directed and hydrate regularly | பரிந்துரைக்கப்பட்டபடி பயன்படுத்தவும் மற்றும் நேரடியாக நீர்மம் தரவும்",
            "warning": "Not for use if you have kidney problems or heart disease | சிறுநீரகம் பிரச்சனைகள் அல்லது இதய நோய் இருந்தால் தவிர்க்கவும்"
        }
    };        

    let isTamil = true;

    function showSuggestions() {
        let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        let suggestionsDiv = document.getElementById("suggestions");
        suggestionsDiv.innerHTML = "";

        if (searchInput.length < 1) {
            suggestionsDiv.style.display = "none";
            return;
        }

        let matches = Object.keys(medicineData).filter(med => med.toLowerCase().includes(searchInput));

        if (matches.length === 0) {
            suggestionsDiv.style.display = "none";
            return;
        }

        matches.forEach(med => {
            let div = document.createElement("div");
            div.classList.add("suggestion-item");
            div.textContent = med;
            div.onclick = () => {
                document.getElementById("searchInput").value = med;
                suggestionsDiv.style.display = "none";
            };
            suggestionsDiv.appendChild(div);
        });

        suggestionsDiv.style.display = "block";
    }

    function searchMedicine() {
        document.getElementById("loadingSpinner").classList.add("active");
        document.getElementById("suggestions").style.display = "none";
        let searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "";

        let resultHTML = "";
        let medicineKey = Object.keys(medicineData).find(med => med.toLowerCase().includes(searchInput));

        if (medicineKey) {
            let data = medicineData[medicineKey];
            resultHTML += `<h3>${isTamil ? 'மருந்து விவரங்கள்' : 'Medicine Details'}</h3>
                <h2>${medicineData.name}</h2>    
                <img src="${data.image}" alt="Medicine Image">
                <p><strong>${isTamil ? 'peyar' : 'Name'}:</strong> ${data}</p>
                <p><strong>${isTamil ? 'நன்மைகள்' : 'Advantages'}:</strong> ${data.advantages}</p>
                <p><strong>${isTamil ? 'தவறுகள்' : 'Disadvantages'}:</strong> ${data.disadvantages}</p>
                <p><strong>${isTamil ? 'எச்சரிக்கை' : 'Warning'}:</strong> ${data.warning}</p>`;
        } else {
            resultHTML = `<p style='color:red;'>${isTamil ? 'மருந்து கிடைக்கவில்லை. வேறு முயற்சி செய்யவும்' : 'Medicine not found. Please try another.'}</p>`;
        }

        setTimeout(() => {
            document.getElementById("loadingSpinner").classList.remove("active");
            outputDiv.innerHTML = resultHTML;
        }, 1000);
    }

    function toggleLanguage() {
        isTamil = !isTamil;
        document.getElementById("title").textContent = isTamil ? 'மருந்து தேடல் / Medicine Search' : 'Medicine Search';
        document.getElementById("searchInput").placeholder = isTamil ? "மருந்தின் பெயரை உள்ளிடவும்" : "Enter medicine name";
        document.getElementById("problemInput").placeholder = isTamil ? "உங்கள் பிரச்சனை (விரும்பினால்)" : "Enter your problem (optional)";
        document.getElementById("searchBtn").textContent = isTamil ? "தேடுக" : "Search";
        document.getElementById("langBtn").textContent = isTamil ? "மொழியை மாற்றவும்" : "Change Language";
    }