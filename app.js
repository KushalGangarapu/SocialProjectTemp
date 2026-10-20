/**
 * Seeing Myself: A Social Identity Inquiry | Exhibition Interactive Engine
 * Curated for Social Justice 12 (Kushal)
 * Features: Dynamic Intersectional Matrix, Interactive Artifact Controllers,
 * Provenance Dialog Modal, and Reading Progress Tracker.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. EVIDENCE ARCHIVE DATABASE (12 ARTIFACTS)
  // =========================================================================

  const PROVENANCE_ARCHIVE = {
    'ses-pc': {
      id: 'EVIDENCE 1',
      date: 'Grade 8 (Origin) & 2024 (Build)',
      title: 'Custom PC Workstation (Core i7-13700K & RTX 4070 SUPER)',
      text: 'Personal photo sitting with component boxes for my custom workstation (Kushal_Desktop). My passion began in Grade 8 leading to a year of asking my parents while watching PC-building and hardware benchmark videos. When peers see the completed 2024 build, they assume I am "rich as hell," but the money spent hides the surface appearance.',
      significance: 'How high-performance technology projects an illusion of being rich as hell, completely detaching the object from the parental labor and single-income financial stretch that funded it.'
    },
    'ses-overtime': {
      id: 'EVIDENCE 2',
      date: 'SYSTEM SPECS // 2024',
      title: 'Evidence 2: Windows System Specifications',
      text: 'Windows 11 Device Specifications readout for Kushal_Desktop (Intel Core i7-13700K, 32GB RAM, RTX 4070 SUPER). After over a year of asking, my parents finally said "screw it" and bought the parts, hoping buying the PC would end my obsession with build videos, but they couldn\'t have been more wrong. Even with weeks spent trying to cut costs, high-tier hardware remains a heavy financial burden on a single-income household.',
      significance: 'Finished technology often masks the economic strain absorbed by working-class immigrant parents to support a child\'s aspirations.'
    },
    'rel-pilgrimage': {
      id: 'EVIDENCE 1',
      date: 'Age 2 (Family Ancestral Temple)',
      title: 'Me Being Bald: Childhood Tonsure Photo (Ancestral Temple)',
      text: 'Personal photo taken at age 2 after having my head shaved at our family\'s ancestral temple in India. In Hindu tradition, this ceremony (Chūdakarana) represents cultural roots, family continuity, and blessings.',
      significance: 'Connecting me to my religion through the traditional ceremonies and customs followed by my family across generations.'
    },
    'rel-tonsure-rec': {
      id: 'EVIDENCE 2',
      date: 'December 30, 2024 (Age 15)',
      title: 'Me at Various Temples: Tirupati Pilgrimage & Family Solidarity',
      text: 'Authentic photograph taken on December 30, 2024, showing 15-year-old Kushal dressed in a traditional dhoti (veshti) standing with his parents outside the sacred Tirumala Tirupati temple. While my personal stance is as close to an atheist as one can get while remaining culturally Hindu, I proudly wear traditional attire and participate in temple pilgrimages out of love for my parents.',
      significance: 'Visual evidence of finding the fine point where religion and logic coexist: participating in sacred rituals as an emotional language of family care rather than strict religious rules.'
    },
    'lang-primer': {
      id: 'EVIDENCE 1',
      date: 'Elementary School (Chennai, Tamil Nadu)',
      title: 'Old Textbooks: Tamil Schooling & Learning Different Languages',
      text: 'Photograph of my Standard 4 Tamil textbooks ("தமிழ்" and "தமிழ் இலக்கணம்", Tamil literature and grammar) from my schooling in Chennai, Tamil Nadu. While my family has ancestral roots in Andhra Pradesh and speaks Telugu at home, we lived in Chennai where I studied Tamil in school. These books represent the multilingual reality of my South Indian upbringing before moving to Canada.',
      significance: 'Preserving our native Telugu mother tongue daily at home while highlighting multilingual schooling in Chennai before immigrating to Canada.'
    },
    'lang-cbsa-rec': {
      id: 'EVIDENCE 2',
      date: 'August 2018 (YVR Arrival)',
      title: 'Arriving in Canada: Multilingual Adaptation & Lived Realities',
      text: 'Personal photo arriving in Canada in 2018 with my mother, reuniting with my father who had immigrated ahead of us in 2016. For two years, my mom had to figure everything out on her own in Chennai, including school drop-offs, teaching me, and running the household before our family was finally reunited in British Columbia.',
      significance: 'Personal record of immigration, overcoming language assumptions in Canada, and navigating multilingual identity.'
    },
    'ability-chart-rec': {
      id: 'EVIDENCE 1',
      date: 'POST-OP SQUINT SURGERY // AGE 3-4',
      title: 'Evidence 1: Eye Surgery Recovery Photo',
      text: 'Primary artifact documenting temporary physical impairment and sensory loss. Following strabismus surgery, visual acuity was severely compromised for about seven days, requiring dark environments and physical guidance to navigate basic domestic spaces.',
      significance: 'Tangible record of childhood physical vulnerability, temporary sensory impairment, and the baseline reality of total reliance on caregivers.'
    },
    'ability-care-log': {
      id: 'EVIDENCE 2',
      date: 'FAMILY PHOTO // DUAL REALITY',
      title: 'Evidence 2: Family Support & The Internal Burden',
      text: 'Visual record of the family care network. It represents both the physical interdependence necessary to go through childhood medical recovery, and the socio-economic context of a single-income immigrant household where silent, self-imposed psychological pressures and the desire to validate family sacrifices develop.',
      significance: 'Clearly separates physical caregiving from the completely separate, internalized mental stress carried in a single-income household.'
    },
    'age-license-rec': {
      id: 'EVIDENCE 1',
      date: 'Province of BC: Class 7L Driver\'s Licence',
      title: 'Driver\'s Licence & Institutional Proof of Maturity',
      text: 'Personal photograph of my authentic BC Class 7L Driver\'s Licence from ICBC. In Canadian society, turning 16 and passing the driver\'s knowledge test is seen as a significant milestone where friends express celebration and society expects teens to be "magically mature." However, bureaucratic cards do not deliver wisdom; they merely give the freedom to drive with parental supervision.',
      significance: 'How society and institutions use arbitrary age cutoffs like 16 or Grade 12 to assume maturity overnight.'
    },
    'age-transit-rec': {
      id: 'EVIDENCE 2',
      date: 'Family Photo: Young vs. Now',
      title: 'Family Photo Young vs. Now & Parents Withholding Problems',
      text: 'Personal photograph of our family comparing young versus present-day appearances. When looking at this photograph, one can see the gradual growth process of me and, to a great extent, the whole family. Looking at young photos and then comparing them to the present makes one realize that growing up is a slow process. Although society considers a learner\'s permit and turning 16 as a sign of instant maturity, the actual process is slower as seen through the gradual changes in my body image.',
      significance: 'Visually captures growth throughout the years and contrasts societal assumptions of instant maturity at 16 with gradual maturity at home.'
    },
    'gender-polaroid': {
      id: 'EVIDENCE 1',
      date: 'Family Photo: Age 2-3',
      title: 'Hand-me-down Collared Frock (Age 2-3)',
      text: 'Personal photo at age 2-3 wearing a black-and-cream patterned collared frock with pocket ribbons passed down from an elder female cousin. In our family, clothes are shared among cousins as a means of domestic economy. Relatives still joke about it occasionally, but at that young age, no one was concerned with gender binaries.',
      significance: 'Visual evidence that clothing has no innate gender and that toddlers are free from societal gender policing.'
    },
    'gender-suit-rec': {
      id: 'EVIDENCE 2',
      date: 'Family Photo: Original Wearer',
      title: 'Cousin Wearing the Original Frock',
      text: 'Family photo of my elder female cousin wearing the black-and-cream patterned collared frock with pocket ribbons before it was passed down to me. With the two comparative photographs, one can easily realize that clothes have no inherent gender. The fabric and patterns are used for utility before society makes assumptions about gender roles.',
      significance: 'Connects childhood hand-me-downs to class concepts on learned gender roles, relative teasing, and self-representation in daily interactions.'
    }
  };

  // =========================================================================
  // 2. CHAPTER 2: INTERACTIVE FAITH LENS TOGGLE
  // =========================================================================

  const lensTabs = document.querySelectorAll('.lens-tab');
  const lensExplanation = document.getElementById('lens-explanation');

  lensTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      lensTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const lens = tab.getAttribute('data-lens');
      if (lensExplanation) {
        if (lens === 'faith') {
          lensExplanation.innerHTML = `<strong>Family Tradition:</strong> Rituals like temple ceremonies are an important part of our culture, family history, and community support.`;
        } else {
          lensExplanation.innerHTML = `<strong>Personal Skepticism:</strong> Close to atheist while culturally remaining Hindu. Participating in rituals is out of love for family rather than religious rules.`;
        }
      }
    });
  });

  // =========================================================================
  // 3. CHAPTER 4: SQUINT SURGERY BLUR SIMULATOR
  // =========================================================================

  const btnToggleOcclusion = document.getElementById('btn-toggle-occlusion');
  const eyeSurgeryCanvas = document.getElementById('eye-surgery-canvas');
  const occlusionBtnText = document.getElementById('occlusion-btn-text');

  if (btnToggleOcclusion && eyeSurgeryCanvas) {
    btnToggleOcclusion.addEventListener('click', () => {
      const isOccluded = eyeSurgeryCanvas.classList.toggle('occluded');
      btnToggleOcclusion.setAttribute('aria-pressed', isOccluded ? 'true' : 'false');

      if (isOccluded) {
        if (occlusionBtnText) occlusionBtnText.textContent = 'Restore Clear Vision';
        btnToggleOcclusion.style.backgroundColor = '#9c381e';
      } else {
        if (occlusionBtnText) occlusionBtnText.textContent = 'Simulate Post-Op Squint Blur & Sensitivity';
        btnToggleOcclusion.style.backgroundColor = '#111111';
      }
    });
  }

  // =========================================================================
  // 4. CHAPTER 5: AGE AUTONOMY PARADOX AUDIT
  // =========================================================================

  const paradoxBtns = document.querySelectorAll('.paradox-btn');
  const paradoxTextBox = document.getElementById('paradox-text-box');

  paradoxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      paradoxBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const side = btn.getAttribute('data-side');
      if (paradoxTextBox) {
        if (side === 'state') {
          paradoxTextBox.innerHTML = `<strong>Society's View (16 &amp; Driver's License):</strong> Society and peers treat turning 16 and passing the Class 7L permit as a magical threshold, suddenly expecting adult responsibility overnight.`;
        } else {
          paradoxTextBox.innerHTML = `<strong>Domestic Incremental Change (Family):</strong> Maturity was a slow, continuous change: as I grew older, my parents felt comfortable sharing our real struggles, such as being unable to buy a house after 8 years in Canada on a single income. <em>"Well, I'm an adult if the situation we're talking about needs me to be an adult, and a child otherwise."</em>`;
        }
      }
    });
  });

  // =========================================================================
  // 5. CHAPTER 6: GENDER EXPECTATIONS LENS
  // =========================================================================

  const btnTogglePerformativity = document.getElementById('btn-toggle-performativity');
  const performativityNote = document.getElementById('performativity-note');

  if (btnTogglePerformativity && performativityNote) {
    let lensActive = false;

    btnTogglePerformativity.addEventListener('click', () => {
      lensActive = !lensActive;
      btnTogglePerformativity.setAttribute('aria-pressed', lensActive ? 'true' : 'false');

      if (lensActive) {
        btnTogglePerformativity.textContent = 'Show Childhood Frock Reality';
        btnTogglePerformativity.style.backgroundColor = '#9c381e';
        performativityNote.innerHTML = '"Gender Expectations Analysis: Society conditions young boys to perform rigid masculinity under peer pressure, whereas wearing comfortable hoodies and focusing on character rejects those restrictive stereotypes."';
        performativityNote.style.color = '#9c381e';
      } else {
        btnTogglePerformativity.textContent = 'Apply Gender Expectations Analysis Lens';
        btnTogglePerformativity.style.backgroundColor = '#111111';
        performativityNote.innerHTML = '"Childhood Reality: At age 2-3, clothes were passed down out of practical domestic frugality. Toddlers do not police gender boundaries; clothing is purely functional and comfortable."';
        performativityNote.style.color = '#1e3656';
      }
    });
  }

  // =========================================================================
  // 6. INTERSECTIONALITY LABORATORY & DYNAMIC MATRIX
  // =========================================================================

  const selectPrimary = document.getElementById('matrix-primary');
  const selectSecondary = document.getElementById('matrix-secondary');
  const synthesisVector = document.getElementById('synthesis-vector');
  const synthesisScholar = document.getElementById('synthesis-scholar');
  const synthesisTitle = document.getElementById('synthesis-title');
  const synthesisLived = document.getElementById('synthesis-lived');
  const synthesisSystemic = document.getElementById('synthesis-systemic');
  const synthesisDefense = document.getElementById('synthesis-defense');

  const INTERSECTION_DATA = {
    'ses-age': {
      vector: 'ECONOMIC SACRIFICE & FAMILY TRANSPARENCY',
      scholar: 'FAMILY FINANCES & GROWING UP',
      title: 'SES × Age: Adolescent Hardware Passion vs 8 Years of Single-Income Realities',
      lived: 'From my passion starting in Grade 8, seeing over a year of asking my parents for PC parts watching build videos, to when they actually bought it in 2024, people assumed I was "rich as hell." In actuality, it was a big financial sacrifice for our single-income family. As I grew older, my parents became more transparent about our financial struggles and inability to even buy a house after 8 years in Canada on a single income. Learning this taught me what it means to be economically sacrificing.',
      systemic: 'Working-class immigrant youth often navigate a complex reality: having access to digital tools while gradually learning the steep economic costs absorbed by parents in silence. Maturity develops when generational silence is replaced with economic transparency.',
      defense: '"Growing up isn\'t about buying expensive things; it\'s understanding what your parents gave up to support you."'
    },
    'ses-ability': {
      vector: 'PHYSICAL CARE & SEPARATE INTERNAL STRESS',
      scholar: 'PHYSICAL CARE & INVISIBLE MENTAL BURDEN',
      title: 'SES × Ability: Physical Caregiving vs. The Separate Mental Burden of a Single-Income Home',
      lived: 'Recovering from my squint surgery at age 3 to 4 required intense physical care from my parents: being spoon-fed, guided by the forearm, and shielded from light. Yet the lasting stress I experienced was completely separate: the quiet, invisible mental burden of living in a single-income household, feeling guilty asking for anything, self-censoring my needs to protect my parents, and pushing myself to succeed in school to validate their sacrifices.',
      systemic: 'In our class Access and Equity units, we analyzed how ability includes both physical health and mental bandwidth. In a single-income immigrant family, parents absorb the physical toll of recovery without outside help, while children quietly internalize the economic stress, demonstrating that both physical and mental well-being are deeply tied to socioeconomic stability.',
      defense: '"True care means understanding that physical recovery requires a helping hand, while mental well-being requires relieving invisible financial stress."'
    },
    'ses-language': {
      vector: 'FAMILY SEPARATION & LANGUAGE STEREOTYPES',
      scholar: 'LANGUAGE PRESERVATION & IMMIGRATION JOURNEYS',
      title: 'SES × Language: The 2-Year Separation and Resisting Language Stereotypes',
      lived: 'My dad immigrated to Canada first in 2016, leaving my mom all alone in Chennai until 2018, juggling school runs, teaching me, and managing the home. In Canada, we speak Telugu daily at home. Yet in Canadian society, they constantly assume all Indians speak Hindi or Punjabi, overlooking regional languages like Telugu and South Indian origins.',
      systemic: 'Immigration processes often split families across borders, placing heavy emotional burdens on mothers managing households alone. In Canada, society flattens diverse South Asian cultures into stereotypes, assuming everyone speaks Hindi or Punjabi, erasing distinct regional identities like the Telugu language.',
      defense: '"Speaking our own language at home keeps our culture alive instead of letting stereotypes define who we are."'
    },
    'ses-religion': {
      vector: 'FAMILY REALITY & CULTURAL PEACE',
      scholar: 'CULTURAL COMMUNITY & IMMIGRANT FAMILIES',
      title: 'SES × Religion: Ancestral Devotion amidst Single-Income Realities',
      lived: 'My childhood tonsure happened at my family ancestral temple in India, and at age fifteen, I stood with my parents at the sacred Tirumala Tirupati temple in a traditional dhoti. In Canada, navigating a single-income household where buying a home is out of reach, cultural and spiritual gatherings are safe places where we feel we belong. Even though I am close to an atheist, I participate in ceremonies as they bring peace and emotional comfort to my hardworking parents.',
      systemic: 'For immigrant families living on a single income where buying a home is out of reach, cultural and religious traditions offer a vital sense of belonging, emotional safety, and community care against feelings of isolation.',
      defense: '"Temple visits and family traditions give working parents a place of peace, no matter how tough money gets."'
    },
    'ses-gender': {
      vector: 'PRACTICAL CHOICES VS. SHOWING OFF GENDER ROLES',
      scholar: 'PRACTICAL CHOICES OVER GENDER TRENDS',
      title: 'SES × Gender: Hand-Me-Down Stuff vs. Masculine Ideology',
      lived: 'Wearing my older cousin\'s black-and-cream patterned frock at age 2-3 was due mostly to saving money and it being funny: reusing children\'s clothing made economic sense. Today, I wear casual hoodies and ignore fashion trends. Choosing personal authenticity over expensive male fashion brands or masculine dressing is an economic and personal choice.',
      systemic: 'Society pressures teenage boys to buy expensive brand-name clothes to perform a tough, status-driven masculinity. Choosing comfortable hoodies and focusing on character rather than expensive trends rejects that financial pressure and allows authentic self-expression.',
      defense: '"You don\'t need expensive clothes or tough guy trends to feel confident in who you are."'
    },
    'religion-age': {
      vector: 'FAMILY CLOSENESS & RESPECT',
      scholar: 'RESPECT, REASON & FAMILY CLOSENESS',
      title: 'Religion × Age: The Age 2 Ancestral Tonsure & Tirupati Pilgrimage to Near-Atheist Solidarity',
      lived: 'At age 2, I had my head shaved at our family ancestral temple in India and at 15 I stood with my parents at Tirumala Tirupati temple in a traditional dhoti, yet as I grew older I adopted a philosophical stance as close as one can get to atheist without being one, culturally still Hindu while actively participating in rituals simply because my family do, and choosing love and family solidarity over conflict.',
      systemic: 'Ageism often sees adolescent skepticism as a kind of disrespectful generational rebellion, yet choosing to participate in rituals out of love for parents demonstrates that one can practice cultural identity as a kind of mutual care.',
      defense: '"Being mature doesn\'t mean fighting your parents over religion; it means supporting them because you love them."'
    },
    'religion-language': {
      vector: 'REGIONAL HERITAGE & LINGUISTIC DIVERSITY',
      scholar: 'SOUTH INDIAN HERITAGE & DIVERSE IDENTITIES',
      title: 'Religion × Language: South Indian Sacred Traditions vs. Language Stereotypes',
      lived: 'My ancestral temple rituals and home traditions are rooted in Andhra Pradesh and Chennai, where our family speaks the Telugu language at home and I studied Tamil and Hindi in school. In Canada, society routinely assumes all Indian faith and culture is expressed through the Hindi or Punjabi languages. Maintaining our traditions preserves the unique South Indian character of our heritage.',
      systemic: 'Dominant cultural narratives equate Hinduism with North Indian, Hindi-centric traditions. Honoring regional mother tongues like Telugu within religious practices resists having all our cultures lumped into one stereotype.',
      defense: '"Practicing our traditions in Telugu reminds us that South Asian culture is way bigger than just Hindi or Punjabi."'
    },
    'religion-ability': {
      vector: 'MUTUAL SUPPORT & PHYSICAL CARE',
      scholar: 'CARING FOR FAMILY & UNDERSTANDING VULNERABILITY',
      title: 'Religion × Ability: Bodily Rituals and Physical Vulnerability',
      lived: 'Both my childhood tonsure ritual at age 2 and my squint surgery at age 3 to 4 involved physical vulnerability and completely relying on my parents for physical care. While religious tradition connects bodily rituals with sacred blessings, the experience of post-op recovery taught me the reality of human interdependence and the necessity of care.',
      systemic: 'Ableism stigmatizes bodily dependence, while traditional community structures recognize the fragility of the body. Focusing on accessible environments and family care networks demonstrates that vulnerability is a universal condition connecting all humans.',
      defense: '"Needing help when your body is weak isn\'t a flaw; taking care of each other is what makes us human."'
    },
    'religion-gender': {
      vector: 'FAMILY LOVE & FREEDOM OF EXPRESSION',
      scholar: 'EARLY FREEDOM FROM GENDER ROLES',
      title: 'Religion × Gender: The Toddler Patterned Frock and Ancestral Acceptance',
      lived: 'When I wore my cousin\'s black-and-cream patterned frock at toddler age, relatives met it with gentle affection, and similarly, my tonsure at ancestral temple as a toddler never drew any gender policing. Growing up in a culture that allowed me to be myself without forcing toxic masculine stereotypes upon me demonstrated early cultural freedom.',
      systemic: 'Before society teaches children strict gender roles, families prioritize practical care and comfort over rigid expectations. Witnessing young children\'s natural freedom from gender stereotyping demonstrates that such restrictive expectations are not innate, but learned.',
      defense: '"Little kids don\'t care about boy or girl clothes; family love accepts you before society teaches you stereotypes."'
    },
    'language-ability': {
      vector: 'ACCESSIBILITY & COMFORT IN FAMILIAR LANGUAGE',
      scholar: 'COMFORT IN FAMILIAR LANGUAGE & ACCESSIBILITY',
      title: 'Language × Ability: Post-Op Disorientation and Communicative Reliance',
      lived: 'When my squint surgery left me with severe optical blur, I could not read or orient visually. In that disoriented state, hearing my parents speak familiar Telugu was my primary anchor of safety and comfort. Familiar language is a lifeline when you temporarily cannot see.',
      systemic: 'Access to care requires communicative equity. When individuals experience physical impairment, language barriers make feeling isolated much worse, highlighting the importance of culturally and linguistically safe care.',
      defense: '"When surgery left me unable to see, hearing my parents speak Telugu was what made me feel safe."'
    },
    'language-age': {
      vector: 'PASSING DOWN HERITAGE ACROSS GENERATIONS',
      scholar: 'PRESERVING HERITAGE ACROSS GENERATIONS',
      title: 'Language × Age: Preserving Telugu across 8 Years of Canadian Life',
      lived: 'Living in Canada for eight years, English naturally became my language for school and public life. Yet, Telugu remains our daily language at home. As I grew older and my parents started confiding in me about our family challenges, those deep conversations happened in Telugu, making our mother tongue the vehicle for real adult connection.',
      systemic: 'Immigrant youth often lose their heritage tongue within one generation under English assimilation. Maintaining a mother tongue through adolescence strengthens intergenerational solidarity.',
      defense: '"Speaking Telugu at home keeps me connected to my roots while growing up in Canada."'
    },
    'language-gender': {
      vector: "A MOTHER'S CARE & FAMILY STRENGTH",
      scholar: "A MOTHER'S SACRIFICE & FAMILY STRENGTH",
      title: 'Language × Gender: The Solo Mother\'s Labor during 2016-2018',
      lived: 'My dad came to Canada in 2016, leaving my mom and me in Chennai until we joined him in 2018. During those two years of separation, my mother managed everything alone, teaching me, running errands, and guiding my early schooling. The Telugu language I speak today was nurtured through her maternal care and patience while figuring out life in transit.',
      systemic: 'Care work and language socialization are disproportionately done by women in immigrant families. Understanding mothers as the primary people passing down our culture and language exposes the gendered division of domestic labor in migration.',
      defense: '"My mother kept our language and family together during the two years my dad was in Canada."'
    },
    'ability-age': {
      vector: 'RELYING ON EACH OTHER VS. AGE EXPECTATIONS',
      scholar: 'DISABILITY AWARENESS & ADOLESCENCE',
      title: 'Ability × Age: Squint Surgery Dependency vs. The "Magically Mature" 16 Myth',
      lived: 'At age 16, society treats a Class 7L permit as a badge of sudden independence. Yet, reflecting on my squint surgery at age 3-4 (being spoon-fed and guided by the arm) makes me recognize what people with permanent disabilities face daily, especially dealing with people who constantly drag them down or criticize them. Independence is an illusion at any age.',
      systemic: 'Ageism and ableism both measure human dignity by unassisted productivity. Society celebrates independent mobility while patronizing and marginalizing those who need daily accommodations.',
      defense: '"Being seventeen doesn\'t mean you never need help; everyone relies on others to get through life."'
    },
    'ability-gender': {
      vector: 'HONEST VULNERABILITY VS. ACTING TOUGH',
      scholar: 'HONEST VULNERABILITY VS. STEREOTYPES',
      title: 'Ability × Gender: Recovering from Surgery vs. The Pressure to Never Show Weakness',
      lived: 'During my squint surgery recovery, I experienced complete physical reliance: being spoon-fed and guided by the arm. Traditional masculinity demands that boys never show weakness or need assistance. Having a supportive environment allowed me to process that vulnerability openly, unburdened by toxic masculine pressures.',
      systemic: 'Society conditions boys to hide their pain and act tough, rejecting assistance, which severely impacts disabled and aging men. Embracing vulnerability as natural dismantles the myth of the invincible, emotionless male.',
      defense: '"Asking for help and admitting pain doesn\'t make you weak; it takes real courage."'
    },
    'gender-age': {
      vector: 'GENDER EXPECTATIONS & PRACTICAL FRUGALITY',
      scholar: 'AUTHENTIC CHARACTER OVER GENDER EXPECTATIONS',
      title: 'Gender × Age: Toddler Patterned Frock to Casual Hoodies and Authentic Character',
      lived: 'At age 2-3, I wore my older female cousin\'s hand-me-down black-and-cream patterned collared frock with pocket ribbons purely for practical saving money and since it was amusing, yet relatives still tease me affectionately about it. Today, I dress in casual hoodies and focus on who I am rather than performing male stereotypes. My school and home environments have allowed me to be whatever I want without feeling pressured by gender expectations.',
      systemic: 'As we discussed in our class units on Nurture (learned behaviour) and the Cycle of Oppression, gender stereotypes are taught by society as we grow older rather than being natural. Having supportive home and school environments allows young people to reject restrictive male stereotypes and live authentically.',
      defense: '"From a cousin\'s dress at age two to hoodies at seventeen, who you are matters more than fitting into gender boxes."'
    }
  };

  function updateIntersectionOutput() {
    if (!selectPrimary || !selectSecondary) return;

    const p = selectPrimary.value;
    const s = selectSecondary.value;

    if (p === s) {
      if (synthesisTitle) synthesisTitle.textContent = 'Please choose two different identity categories to investigate their intersections.';
      if (synthesisVector) synthesisVector.textContent = 'CHOOSE TWO DIFFERENT IDENTITIES';
      if (synthesisScholar) synthesisScholar.textContent = 'INTERSECTION INQUIRY';
      if (synthesisLived) synthesisLived.textContent = 'Choose two different identities above to investigate how they intersect in my life and relate directly to what we\'ve been learning in class.';
      if (synthesisSystemic) synthesisSystemic.textContent = 'Kimberlé Crenshaw\'s intersectionality framework demonstrates that single-dimension analyses ignore how different social forces overlap and compound.';
      if (synthesisDefense) synthesisDefense.textContent = '"No single identity explains a person\'s whole experience. Understanding happens at the intersections."';
      return;
    }

    const key = `${p}-${s}`;
    const reverseKey = `${s}-${p}`;

    const data = INTERSECTION_DATA[key] || INTERSECTION_DATA[reverseKey] || {
      vector: 'INTERSECTING IDENTITIES',
      scholar: 'INTERSECTIONALITY & CONNECTED IDENTITIES',
      title: `${selectPrimary.options[selectPrimary.selectedIndex].text} × ${selectSecondary.options[selectSecondary.selectedIndex].text}`,
      lived: 'These two lived identities connect in daily life, showing how outward perception in one category interacts with lived experience in another.',
      systemic: 'Social power structures do not operate in silos; institutions and cultural norms affect individuals across multiple aspects of identity simultaneously.',
      defense: '"True social justice inquiry demands examining how these intersecting forces simultaneously grant advantage while demanding social conformity."'
    };

    if (synthesisVector) synthesisVector.textContent = `INTERSECTION FOCUS: ${data.vector}`;
    if (synthesisScholar) synthesisScholar.textContent = `KEY THEME: ${data.scholar}`;
    if (synthesisTitle) synthesisTitle.textContent = data.title;
    if (synthesisLived) synthesisLived.textContent = data.lived;
    if (synthesisSystemic) synthesisSystemic.textContent = data.systemic;
    if (synthesisDefense) synthesisDefense.textContent = data.defense;
  }

  if (selectPrimary && selectSecondary) {
    selectPrimary.addEventListener('change', updateIntersectionOutput);
    selectSecondary.addEventListener('change', updateIntersectionOutput);
    updateIntersectionOutput();
  }

  // =========================================================================
  // 7. ACCESSIBLE ARCHIVAL PROVENANCE DIALOG MODAL
  // =========================================================================

  const dialog = document.getElementById('provenance-dialog');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');
  const dialogDismissBtn = document.getElementById('dialog-dismiss-btn');
  const dialogAccessionId = document.getElementById('dialog-accession-id');
  const dialogAccessionDate = document.getElementById('dialog-accession-date');
  const dialogEvidenceTitle = document.getElementById('dialog-evidence-title');
  const dialogEvidenceText = document.getElementById('dialog-evidence-text');
  const dialogRubricNote = document.getElementById('dialog-rubric-note');

  document.querySelectorAll('.inspect-record-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const recordKey = btn.getAttribute('data-record');
      const record = PROVENANCE_ARCHIVE[recordKey];

      if (record && dialog) {
        if (dialogAccessionId) dialogAccessionId.textContent = record.id;
        if (dialogAccessionDate) dialogAccessionDate.textContent = record.date;
        if (dialogEvidenceTitle) dialogEvidenceTitle.textContent = record.title;
        if (dialogEvidenceText) dialogEvidenceText.textContent = record.text;
        if (dialogRubricNote) dialogRubricNote.textContent = record.significance || record.rubric;

        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          dialog.setAttribute('open', '');
        }
      }
    });
  });

  function closeProvenanceDialog() {
    if (dialog) {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
    }
  }

  if (dialogCloseBtn) dialogCloseBtn.addEventListener('click', closeProvenanceDialog);
  if (dialogDismissBtn) dialogDismissBtn.addEventListener('click', closeProvenanceDialog);

  // Click outside dialog backdrop to dismiss
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );

      if (!inDialog) {
        closeProvenanceDialog();
      }
    });
  }

  // =========================================================================
  // 8. READING PROGRESS TRACKER & QUICK NAV HIGHLIGHTER
  // =========================================================================

  const progressBar = document.getElementById('progress-bar');
  const sections = document.querySelectorAll('section.chapter-stage, article.prologue-canvas');
  const navPills = document.querySelectorAll('.pill-link');

  window.addEventListener('scroll', () => {
    // 1. Reading progress bar
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }

    // 2. Active nav link highlight
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (winScroll >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navPills.forEach(pill => {
      const target = pill.getAttribute('href').replace('#', '');
      if (target === currentId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }, { passive: true });

});
