
export interface DataJSON {
  [key: string]: {
    id: number;
    name: string;
    symbol: string;
    category: string;
    description: string;
    slug: string;
    logo: string;
    subreddit: string;
    notice: string;
    tags: string[];
    'tag-names': string[];
    'tag-groups': string[];
    urls: {};
    platform: any;
    date_added: string;
    twitter_username: string;
    is_hidden: number;
    date_launched: string | null;
    contract_address: [];
    self_reported_circulating_supply: any;
    self_reported_tags: any;
    self_reported_market_cap: any;
    infinite_supply: boolean;
  }
}



//     notice: '',
//     tags: [],
//     'tag-names': [],
//     'tag-groups': [],
//     urls: {},
//     platform: null,
//     date_added: '2010-07-13T00:00:00.000Z',
//     twitter_username: '',
//     is_hidden: 0,
//     date_launched: '2010-07-13T00:00:00.000Z',
//     contract_address: [],
//     self_reported_circulating_supply: null,
//     self_reported_tags: null,
//     self_reported_market_cap: null,
//     infinite_supply: false,


  export interface currency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string;
    tags: string[];
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    infinite_supply: boolean;
    platform?: any;
    cmc_rank: number;
    self_reported_circulating_supply?: any;
    self_reported_market_cap?: any;
    tvl_ratio?: any;
    last_updated: string;
    quote: Quote;
  }
  
  interface Quote {
    EUR: EUR;
  }
  
  interface EUR {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    tvl?: any;
    last_updated: string;
  }
  
  export interface Ticker {
    timestamp: string;
    price: number;
    volume_24h: number;
    market_cap: number;
  }



  // max_supply: 21000000,
  // circulating_supply: 19645193,
  // total_supply: 19645193,
  // infinite_supply: false,
  // platform: null,
  // cmc_rank: 1,
  // self_reported_circulating_supply: null,
  // self_reported_market_cap: null,
  // tvl_ratio: null,
  // last_updated: '2024-03-05T09:45:00.000Z',
  // quote: {
  //   EUR: {
  //     price: 61172.17695743709,
  //     volume_24h: 69278106372.44798,
  //     volume_change_24h: 80.6251,
  //     percent_change_1h: -0.48405293,
  //     percent_change_24h: 1.68774533,
  //     percent_change_7d: 17.06519156,
  //     percent_change_30d: 54.71398276,
  //     percent_change_60d: 50.57066489,
  //     percent_change_90d: 51.40362093,
  //     market_cap: 1201739222559.0044,
  //     market_cap_dominance: 52.3011,
  //     fully_diluted_market_cap: 1284615716106.177,
  //     tvl: null,
  //     last_updated: '2024-03-05T09:45:04.000Z',
  //   },
  // },