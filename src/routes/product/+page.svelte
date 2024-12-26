<script lang="ts">
	const products = [
		{
			name: '홈타운 200g 500g 복숭아, 리치, 초콜릿 산미 좋은 커피 에스프레소, 핸드드립 원두',
			price: '16,500',
			link: '/faabscoffee/products/6445988066',
			originalPrice: '33,000',
			img: 'https://shop-phinf.pstatic.net/20240805_259/17228398051351FBUf_JPEG/5199798124076162_592734690.jpg?type=f295_381'
		},
		{
			name: '파브스 커피 크리스마스 블렌드 원두 커피 : 촛불 Candle Light',
			price: '13,000',
			link: '/faabscoffee/products/11264116387',
			originalPrice: '23,000',
			img: 'https://shop-phinf.pstatic.net/20241219_250/1734588484036Hzyyg_PNG/181833152063668_2016915069.png?type=f295_381'
		},
		{
			name: '콜롬비아 엘디비소 게이샤 세미워시드 아나에로빅 100g 200g 원두 커피 파브스',
			price: '15,000',
			link: '/faabscoffee/products/11191778068',
			originalPrice: '26,500',
			img: 'https://shop-phinf.pstatic.net/20241211_115/1733911865527iX8IU_JPEG/10399241753143014_2102791954.JPG?type=f295_381'
		},
		{
			name: '파브스 커피 블랜드 3종 10개입 드립백커피',
			price: '17,500',
			link: '/faabscoffee/products/11125574268',
			originalPrice: '20,000',
			img: 'https://shop-phinf.pstatic.net/20240420_262/1713588081510uGuVN_JPEG/114723924215840801_1234554721.jpg?type=f295_381'
		},
		{
			name: '에티오피아 시다마 벤사 G1 내추럴 200g 원두 커피',
			price: '13,000',
			link: '/faabscoffee/products/10974106162',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20241008_95/1728381001221P9hv1_JPEG/3999027700173000_1571899649.JPG?type=f295_381'
		},
		{
			name: '파파빈 키링 : 파브스 커피 원두 아크릴 키링',
			price: '5,500',
			link: '/faabscoffee/products/10669602090',
			originalPrice: '8,500',
			img: 'https://shop-phinf.pstatic.net/20240730_78/1722328779229i7z0g_JPEG/1913716531499922_1377432726.jpg?type=f295_381'
		},
		{
			name: '예맨원두 100g : 구름위에서 생산되는 예맨 알 하드르 피코랏 디 진테제 커피 라이트 로스팅 يمان الحضر',
			price: '33,500',
			link: '/faabscoffee/products/10649365914',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20241211_39/1733911819625dR4wA_JPEG/68044650754295125_57925027.JPG?type=f295_381'
		},
		{
			name: '100g 대회 콩| 에콰도르 엘도라도 SL28 그레인프로백 발효 96시간 워시드 | 2024 KNBC 대회빈 대회콩 초코 빌카문도',
			price: '19,000',
			link: '/faabscoffee/products/9952393772',
			originalPrice: '100,000',
			img: 'https://shop-phinf.pstatic.net/20240216_229/1708027815611sX2hi_JPEG/109163714287926268_253356345.jpg?type=f295_381'
		},
		{
			name: '파브스 커피 블렌드 원두 3종 즐기기',
			price: '7,000',
			link: '/faabscoffee/products/8590129671',
			originalPrice: '90,000',
			img: 'https://shop-phinf.pstatic.net/20240319_116/1710846786845YWS9p_JPEG/111982570561329048_1466763128.jpg?type=f295_381'
		},
		{
			name: '모건타운 블렌드 500g, 1kg 밀크 초콜릿, 오렌지, 견과 고소함',
			price: '25,000',
			link: '/faabscoffee/products/7479865078',
			originalPrice: '28,000',
			img: 'https://shop-phinf.pstatic.net/20240508_209/17151033791683j5Az_JPEG/116239277862586366_1244475028.jpg?type=f295_381'
		},
		{
			name: '파브스커피 커핑볼, 커핑컵 FAABS CUPPING 220ml',
			price: '10,000',
			link: '/faabscoffee/products/7422053305',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20230825_37/1692972321203cHVwz_JPEG/43047858551049721_1122660293.jpg?type=f295_381'
		},
		{
			name: '디카페인 드립백 커피 10ea 1box',
			price: '17,500',
			link: '/faabscoffee/products/7279390852',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20221001_258/1664562393855qiQ1u_JPEG/65698173572020074_1441679448.JPG?type=f295_381'
		},
		{
			name: '파브스 커피 밀크글라스 250ml (8.5oz) 머그컵',
			price: '15,000',
			link: '/faabscoffee/products/7121271220',
			originalPrice: '18,000',
			img: 'https://shop-phinf.pstatic.net/20220916_6/1663274749622kBTVO_JPEG/64410583344607646_833858727.jpeg?type=f295_381'
		},
		{
			name: '커피1kg 복숭아, 리치향 원두 : 파브스 커피 홈타운 블렌드',
			price: '49,000',
			link: '/faabscoffee/products/6878890406',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20240805_57/1722839656337eYith_JPEG/9576876215484112_78358220.jpg?type=f295_381'
		},
		{
			name: '디카페인 원두 200g/500g/1kg 콜롬비아 수프리모  water EA Decaf coffee bean /  임산부 커피, 카페인없는 원두, 당일로스팅커피, 핸드드립',
			price: '14,000',
			link: '/faabscoffee/products/6005680107',
			originalPrice: '34,000',
			img: 'https://shop-phinf.pstatic.net/20240508_234/1715104155256yYI4D_JPEG/116239997961364944_211631956.jpg?type=f295_381'
		},
		{
			name: '파브스 다크 블렌딩 원두 200g /에스프레소 커피납품',
			price: '12,000',
			link: '/faabscoffee/products/5708718882',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20240924_226/1727146945241E9wjD_JPEG/13042776272649006_1772633250.jpg?type=f295_381'
		},
		{
			name: '파브스커피 모건타운 블렌딩 200g 고소한 원두 가정용 머신 핸드드립 선물/라떼 에스프레소',
			price: '12,500',
			link: '/faabscoffee/products/5698108189',
			originalPrice: '',
			img: 'https://shop-phinf.pstatic.net/20240508_79/1715104858819UyqIb_JPEG/116240757528589803_1089254217.jpg?type=f295_381'
		}
	];
</script>

<div class="container">
	<ul class="grid grid-cols-4 gap-8">
		{#each products as product}
			<li>
				<a href={`https://smartstore.naver.com${product.link}`} target="_blank">
					<img src={product.img} />
					<div>{product.name}</div>
					<div class="flex gap-2">
						{product.price}
						{product.originalPrice}
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
