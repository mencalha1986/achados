window.PRECOS_CONFERIDOS_EM = "14/10/2026";
// Produtos do site achadosuteisporai.com.br
// - categoria: "tecnologia" | "cozinha" | "organizacao" | "limpeza"
// - destaque: true no produto que aparece grande no topo (só um)
// - aPartir: true quando o produto tem variações com preços diferentes (mostra "a partir de")
// - shopId/itemId: código do anúncio na Shopee (usado pra atualizar preço automaticamente)
// - a ordem da lista é a ordem de exibição (mais novos primeiro)
window.CATEGORIAS = [
  { id: "tecnologia",  nome: "Tecnologia",  icone: "📱" },
  { id: "cozinha",     nome: "Cozinha",     icone: "🍳" },
  { id: "organizacao", nome: "Organização", icone: "🗂️" },
  { id: "limpeza",     nome: "Limpeza",     icone: "🧽" }
];

window.PRODUTOS = [
  {
    "nome": "Ampliador de tela 3D para celular",
    "chamada": "Transforme o celular numa telona",
    "descricao": "Filme, série, futebol e chamada de vídeo bem maiores. Não precisa de bateria nem de fio. Ótimo presente de Natal pra pais e avós.",
    "preco": "16,99",
    "img": "img/lupa2.webp",
    "link": "https://s.shopee.com.br/AAHu8dfQke",
    "selo": "+80 mil vendidos",
    "categoria": "tecnologia",
    "destaque": true,
    "shopId": "461633669",
    "itemId": "14241654483"
  },
  {
    "nome": "Suporte de parede multifuncional (celular e controle)",
    "chamada": "Celular carregando sem ficar no chão",
    "preco": "9,90",
    "img": "img/suporte1.webp",
    "link": "https://s.shopee.com.br/6VOdV4FaxG",
    "selo": "+100 mil vendidos",
    "categoria": "organizacao",
    "shopId": "832040275",
    "itemId": "23096150316",
    "aPartir": true
  },
  {
    "nome": "Organizador de pia com porta-pano e ganchos",
    "chamada": "Pia organizada sem furar nada",
    "preco": "21,90",
    "img": "img/pia1.webp",
    "link": "https://s.shopee.com.br/6fi3hOVwwo",
    "selo": "+1 mil vendidos",
    "categoria": "organizacao",
    "shopId": "988030305",
    "itemId": "22198885114"
  },
  {
    "nome": "Organizador giratório 360° multiuso",
    "chamada": "Pega tudo sem bagunçar o armário",
    "preco": "29,90",
    "img": "img/girat1.webp",
    "link": "https://s.shopee.com.br/7KxkUbpoUl",
    "selo": "+2 mil vendidos",
    "categoria": "organizacao",
    "shopId": "969488461",
    "itemId": "47511766124"
  },
  {
    "nome": "Kit 7 organizadores de gaveta em acrílico",
    "chamada": "Gaveta bagunçada nunca mais",
    "preco": "24,90",
    "img": "img/gaveta1.webp",
    "link": "https://s.shopee.com.br/2BFeL8Qg6S",
    "selo": "+2 mil vendidos",
    "categoria": "organizacao",
    "shopId": "455996615",
    "itemId": "21859949673",
    "aPartir": true
  },
  {
    "nome": "Mini processador sem fio 250ml",
    "chamada": "Pica alho e cebola em 5 segundos",
    "preco": "23,88",
    "img": "img/proc1.webp",
    "link": "https://s.shopee.com.br/AKbM2iw8y3",
    "selo": "+3 mil vendidos",
    "categoria": "cozinha",
    "shopId": "832036467",
    "itemId": "18931705150"
  },
  {
    "nome": "Batedor/mixer elétrico 2 em 1 recarregável",
    "chamada": "Cappuccino cremoso em 10 segundos",
    "preco": "18,69",
    "img": "img/mixer2.webp",
    "link": "https://s.shopee.com.br/3B8BVXo5i0",
    "selo": "+10 mil vendidos",
    "categoria": "cozinha",
    "shopId": "415175805",
    "itemId": "22392992790"
  },
  {
    "nome": "Cozedor de ovos elétrico a vapor",
    "chamada": "Ovo cozido perfeito sem vigiar a panela",
    "preco": "29,98",
    "img": "img/ovos2.webp",
    "link": "https://s.shopee.com.br/6q1TsH14Ws",
    "selo": "+10 mil vendidos",
    "categoria": "cozinha",
    "shopId": "1531826276",
    "itemId": "23199020709",
    "aPartir": true
  },
  {
    "nome": "Fatiador de legumes Kitop",
    "chamada": "Couve fininha igual de restaurante",
    "preco": "19,90",
    "img": "img/fati1.webp",
    "link": "https://s.shopee.com.br/6VOdTgjrkM",
    "selo": "+6 mil vendidos",
    "categoria": "cozinha",
    "shopId": "386191827",
    "itemId": "11674191849"
  },
  {
    "nome": "Mini soprador a jato 130.000 RPM recarregável",
    "chamada": "Mini soprador que limpa tudo",
    "preco": "45,59",
    "img": "img/soprador1.webp",
    "link": "https://s.shopee.com.br/5fpWSfxntD",
    "selo": "Nota 4,8",
    "categoria": "tecnologia",
    "shopId": "1102604016",
    "itemId": "58211751477"
  },
  {
    "nome": "Kit clips organizadores de fios autoadesivos",
    "chamada": "Chega de fio bagunçado atrás dos móveis",
    "preco": "11,48",
    "img": "img/fios.webp",
    "link": "https://s.shopee.com.br/4fwz2Mh2S9",
    "selo": "+1 mil/mês",
    "categoria": "organizacao",
    "shopId": "1532748455",
    "itemId": "50113505774",
    "aPartir": true
  },
  {
    "nome": "Torneira gourmet inox com chuveirinho 360°",
    "chamada": "Pia com cara de cozinha gourmet",
    "preco": "25,88",
    "img": "img/torneira.webp",
    "link": "https://s.shopee.com.br/5q8uyeNGqH",
    "selo": "+3 mil vendidos",
    "categoria": "cozinha",
    "shopId": "1007375842",
    "itemId": "23892527526",
    "aPartir": true
  },
  {
    "nome": "Desentupidor de pia, vaso e caixa de gordura",
    "chamada": "Pia entupida? Resolve sem encanador",
    "preco": "17,99",
    "img": "img/desentupidor.webp",
    "link": "https://s.shopee.com.br/1B81zdWys",
    "selo": "+20 mil vendidos",
    "categoria": "limpeza",
    "shopId": "751932079",
    "itemId": "23594951442",
    "aPartir": true
  },
  {
    "nome": "10 ganchos adesivos transparentes",
    "chamada": "Pendure tudo sem furar a parede",
    "preco": "14,85",
    "img": "img/ganchos.webp",
    "link": "https://s.shopee.com.br/3Vl09OVY38",
    "selo": "+20 mil vendidos",
    "categoria": "organizacao",
    "shopId": "1007375842",
    "itemId": "22898052964"
  },
  {
    "nome": "Carregador portátil 10.000mAh com cabo embutido",
    "chamada": "Nunca mais fique com 0% de bateria",
    "preco": "31,99",
    "img": "img/powerbank.webp",
    "link": "https://s.shopee.com.br/3B89jsOqSq",
    "selo": "+20 mil vendidos",
    "categoria": "tecnologia",
    "shopId": "406969593",
    "itemId": "22498946021"
  }
];
