import { getLocalStorageItem, setLocalStorageItem } from '../../services/Helper';
import i18n from 'i18next';

import img1 from '../../images/gameIllustrations/metaCards/1.jpg';
import img2 from '../../images/gameIllustrations/metaCards/2.jpg';
import img3 from '../../images/gameIllustrations/metaCards/3.jpg';
import img4 from '../../images/gameIllustrations/metaCards/4.jpg';
import img5 from '../../images/gameIllustrations/metaCards/5.jpg';
import img6 from '../../images/gameIllustrations/metaCards/6.jpg';
import img7 from '../../images/gameIllustrations/metaCards/7.jpg';
import img8 from '../../images/gameIllustrations/metaCards/8.jpg';
import img9 from '../../images/gameIllustrations/metaCards/9.jpg';
import img10 from '../../images/gameIllustrations/metaCards/10.jpg';
import img11 from '../../images/gameIllustrations/metaCards/11.jpg';
import img12 from '../../images/gameIllustrations/metaCards/12.jpg';
import img13 from '../../images/gameIllustrations/metaCards/13.jpg';
import img14 from '../../images/gameIllustrations/metaCards/14.jpg';
import img15 from '../../images/gameIllustrations/metaCards/15.jpg';
import img16 from '../../images/gameIllustrations/metaCards/16.jpg';
import img17 from '../../images/gameIllustrations/metaCards/17.jpg';
import img18 from '../../images/gameIllustrations/metaCards/18.jpg';
import img19 from '../../images/gameIllustrations/metaCards/19.jpg';
import img20 from '../../images/gameIllustrations/metaCards/20.jpg';
import img21 from '../../images/gameIllustrations/metaCards/21.jpg';
import img22 from '../../images/gameIllustrations/metaCards/22.jpg';
import img23 from '../../images/gameIllustrations/metaCards/23.jpg';
import img24 from '../../images/gameIllustrations/metaCards/24.jpg';
import img25 from '../../images/gameIllustrations/metaCards/25.jpg';
import img26 from '../../images/gameIllustrations/metaCards/26.jpg';
import img27 from '../../images/gameIllustrations/metaCards/27.jpg';
import img28 from '../../images/gameIllustrations/metaCards/28.jpg';
import img29 from '../../images/gameIllustrations/metaCards/29.jpg';
import img30 from '../../images/gameIllustrations/metaCards/30.jpg';
import img31 from '../../images/gameIllustrations/metaCards/31.jpg';
import img32 from '../../images/gameIllustrations/metaCards/32.jpg';
import img33 from '../../images/gameIllustrations/metaCards/33.jpg';
import img34 from '../../images/gameIllustrations/metaCards/34.jpg';
import img35 from '../../images/gameIllustrations/metaCards/35.jpg';
import img36 from '../../images/gameIllustrations/metaCards/36.jpg';
import img37 from '../../images/gameIllustrations/metaCards/37.jpg';
import img38 from '../../images/gameIllustrations/metaCards/38.jpg';
import img39 from '../../images/gameIllustrations/metaCards/39.jpg';
import img40 from '../../images/gameIllustrations/metaCards/40.jpg';

const cardImages = [
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
];

export const getQuestionsByType = (type) =>
	Array(3)
		.fill('')
		.map((val, index) => ({
			id: `${type}${index + 1}`,
			desc: i18n.t(`cards_questions.${type}.${index + 1}`),
		}));

export const getMetaCards = () =>
	Array(40)
		.fill('')
		.map((val, index) => ({
			id: `meta${index + 1}`,
			img: cardImages[index],
			type: 'meta',
			desc: i18n.t(`meta_questions.${index + 1}`),
		}));
