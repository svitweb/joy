import i18n from 'i18next';

import img1 from '../../images/gameIllustrations/metaCards/1.webp';
import img2 from '../../images/gameIllustrations/metaCards/2.webp';
import img3 from '../../images/gameIllustrations/metaCards/3.webp';
import img4 from '../../images/gameIllustrations/metaCards/4.webp';
import img5 from '../../images/gameIllustrations/metaCards/5.webp';
import img6 from '../../images/gameIllustrations/metaCards/6.webp';
import img7 from '../../images/gameIllustrations/metaCards/7.webp';
import img8 from '../../images/gameIllustrations/metaCards/8.webp';
import img9 from '../../images/gameIllustrations/metaCards/9.webp';
import img10 from '../../images/gameIllustrations/metaCards/10.webp';
import img11 from '../../images/gameIllustrations/metaCards/11.webp';
import img12 from '../../images/gameIllustrations/metaCards/12.webp';
import img13 from '../../images/gameIllustrations/metaCards/13.webp';
import img14 from '../../images/gameIllustrations/metaCards/14.webp';
import img15 from '../../images/gameIllustrations/metaCards/15.webp';
import img16 from '../../images/gameIllustrations/metaCards/16.webp';
import img17 from '../../images/gameIllustrations/metaCards/17.webp';
import img18 from '../../images/gameIllustrations/metaCards/18.webp';
import img19 from '../../images/gameIllustrations/metaCards/19.webp';
import img20 from '../../images/gameIllustrations/metaCards/20.webp';
import img21 from '../../images/gameIllustrations/metaCards/21.webp';
import img22 from '../../images/gameIllustrations/metaCards/22.webp';
import img23 from '../../images/gameIllustrations/metaCards/23.webp';
import img24 from '../../images/gameIllustrations/metaCards/24.webp';
import img25 from '../../images/gameIllustrations/metaCards/25.webp';
import img26 from '../../images/gameIllustrations/metaCards/26.webp';
import img27 from '../../images/gameIllustrations/metaCards/27.webp';
import img28 from '../../images/gameIllustrations/metaCards/28.webp';
import img29 from '../../images/gameIllustrations/metaCards/29.webp';
import img30 from '../../images/gameIllustrations/metaCards/30.webp';
import img31 from '../../images/gameIllustrations/metaCards/31.webp';
import img32 from '../../images/gameIllustrations/metaCards/32.webp';
import img33 from '../../images/gameIllustrations/metaCards/33.webp';
import img34 from '../../images/gameIllustrations/metaCards/34.webp';
import img35 from '../../images/gameIllustrations/metaCards/35.webp';
import img36 from '../../images/gameIllustrations/metaCards/36.webp';
import img37 from '../../images/gameIllustrations/metaCards/37.webp';
import img38 from '../../images/gameIllustrations/metaCards/38.webp';
import img39 from '../../images/gameIllustrations/metaCards/39.webp';
import img40 from '../../images/gameIllustrations/metaCards/40.webp';
import img41 from '../../images/gameIllustrations/metaCards/41.webp';
import img42 from '../../images/gameIllustrations/metaCards/42.webp';
import img43 from '../../images/gameIllustrations/metaCards/43.webp';
import img44 from '../../images/gameIllustrations/metaCards/44.webp';
import img45 from '../../images/gameIllustrations/metaCards/45.webp';
import img46 from '../../images/gameIllustrations/metaCards/46.webp';

export const cardImages = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
	img26,
	img27,
	img28,
	img29,
	img30,
	img31,
	img32,
	img33,
	img34,
	img35,
	img36,
	img37,
	img38,
	img39,
	img40,
	img41,
	img42,
	img43,
	img44,
	img45,
	img46,
];

export const getQuestionsByType = (type) =>
	Array(30)
		.fill('')
		.map((val, index) => ({
			id: `${type}${index + 1}`,
			desc: i18n.t(`cards_questions.${type}.${index + 1}`),
		}));

export const getMetaCards = () =>
	Array(46)
		.fill('')
		.map((val, index) => ({
			id: `meta${index + 1}`,
			img: cardImages[index],
			type: 'meta',
			desc: i18n.t(`meta_cards.${index + 1}`),
		}));
