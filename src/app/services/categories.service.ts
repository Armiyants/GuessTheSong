import { Injectable } from '@angular/core';
import shortId from 'shortid';
import { Category } from '../models/common';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public selectedCategories: Category[];

  public round1Categories = [
    {
      name: 'Armenian',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round1/Armenian/tata_simonyan-anapati_arev.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Armenian/karmir_kapuyt_ciranaguyn.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Armenian/hayq-qami_pchi.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Armenian/razmik_amyan-chuni_ashxarhy_qez_nman.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Armenian/garik_sona-lusin.mp3',
          point: 60
        }
      ]
    },
    {
      name: 'Soundtracks',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round1/Soundtracks/fast-and-furious.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Soundtracks/gtnvac-eraz.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Soundtracks/rocky.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Soundtracks/pretty-women.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Soundtracks/harry-potter.mp3',
          point: 70
        }
      ]
    },
    {
      name: 'Old But Gold',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round1/OldButGold/abba-dancing_queen.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/OldButGold/bee_gees-stayin_alive.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/OldButGold/queen-the_show_must_go_on.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/OldButGold/mj-billie_jean.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/OldButGold/elvina_makaryan-mayramut.mp3',
          point: 40
        }
      ]
    },
    {
      name: 'Rock',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round1/Rock/soad-toxicity.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Rock/nirvana-smells_like_teen_spirit.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Rock/queen-bohemian_rhapsody.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Rock/eagles-hotel_california.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round1/Rock/leps-ryumka-vodki.mp3',
          point: 70
        }
      ]
    }
  ];

  public round2Categories = [
    {
      name: 'Yerevan Jan',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round2/YerevanJan/forsh-zbosanq_yerevanum.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/YerevanJan/haxverdyan-sa_yerevann_e.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/YerevanJan/tata-yerevans.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/YerevanJan/malkhas.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/YerevanJan/forsh-henc_ayspes_el_aprum_enq.mp3',
          point: 60
        }
      ]
    },
    {
      name: 'Rap',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round2/Rap/still_dre.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Rap/notorious_big-big_poppa.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Rap/2pac-changes.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Rap/misho-tsar.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Rap/eminem-my_name_is.mp3',
          point: 70
        }
      ]
    },
    {
      name: 'Jazz',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round2/Jazz/armstrong.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Jazz/summertime.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Jazz/nino.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Jazz/orbelyan.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/Jazz/hamasyan.mp3',
          point: 40
        }
      ]
    },
    {
      name: 'New Year',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round2/NewYear/abba-happy_new_year.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/NewYear/artur_grigoryan-nor_tari.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/NewYear/dzyunanush.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/NewYear/brenda_lee-rockin_around_the_christmas_tree.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round2/NewYear/jose_feliciano-feliz_navidad.mp3',
          point: 70
        }
      ]
    }
  ];

  public round3Categories = [
    {
      name: 'Love is all you need',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round3/loveSongs/charles_aznavour-she.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/loveSongs/just-the-two-of-us.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/loveSongs/put_your_head_on_my_shoulder.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/loveSongs/roxette-it_must_have_been_love.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/loveSongs/john_legend-all_of_me.mp3',
          point: 60
        }
      ]
    },
    {
      name: 'Cartoon',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round3/cartoon/under-the-sea.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/cartoon/vinnie-the-pooh.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/cartoon/pesnya-mamontyonka.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/cartoon/puy-puy.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/cartoon/lion-king.mp3',
          point: 70
        }
      ]
    },
    {
      name: 'Nasha Rasha',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round3/nashaRasha/russia-anthem.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/nashaRasha/bi2-rocknroll.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/nashaRasha/zemfira-iskala.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/nashaRasha/pugachova-alix_roz.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/nashaRasha/serov-ya_lyublyu_tebya.mp3',
          point: 40
        }
      ]
    },
    {
      name: 'Դ․ Ա․',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/round3/dandax/unbreak_my_heart.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/dandax/bee_gees.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/dandax/beyonce-halo.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/dandax/adele.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/round3/dandax/aguilera-hurt.mp3',
          point: 70
        }
      ]
    }
  ];

  public finalRoundCategories = [
    {
      name: 'Հայրենիք ',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/finalRound/hayreniq/karmir-kakachner.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/hayreniq/gini-lic.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/hayreniq/heros-txerq.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/hayreniq/paterazm.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/hayreniq/axpers-u-es.mp3',
          point: 60
        }
      ]
    },
    {
      name: 'Birthday Songs',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/finalRound/birthday/alegrova.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/birthday/mihran.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/birthday/armenchik.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/birthday/ardzaganq.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/birthday/kool-gang.mp3',
          point: 70
        }
      ]
    },
    {
      name: 'Old But Gold',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/finalRound/OldButGold/haddaway-what_is_love.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/OldButGold/shakira.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/OldButGold/one_way_ticket.mp3',
          point: 70
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/OldButGold/ketchup.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/OldButGold/aerosmith.mp3',
          point: 40
        }
      ]
    },
    {
      name: 'Classic',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/songs/finalRound/classic/symphony40.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/classic/beethoven.mp3',
          point: 60
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/classic/requiem.mp3',
          point: 50
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/classic/masquerade.mp3',
          point: 40
        },
        {
          id: shortId(),
          src: 'assets/songs/finalRound/classic/tchaikovsky.mp3',
          point: 70
        }
      ]
    }
  ];






  // public catergories: Category[] = [
  //   {
  //     name: 'Rap',
  //     id: shortId(),
  //     songs: [
  //       {
  //         id: shortId(),
  //         src: 'song1',
  //         point: 70
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song2',
  //         point: 30
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song3',
  //         point: 50
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song4',
  //         point: 40
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song5',
  //         point: 60
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Old Songs',
  //     id: shortId(),
  //     songs: [
  //       {
  //         id: shortId(),
  //         src: 'song1',
  //         point: 60
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song2',
  //         point: 30
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song3',
  //         point: 50
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song4',
  //         point: 70
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song5',
  //         point: 40
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Old Songs',
  //     id: shortId(),
  //     songs: [
  //       {
  //         id: shortId(),
  //         src: 'song1',
  //         point: 30
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song2',
  //         point: 50
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song3',
  //         point: 70
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song4',
  //         point: 40
  //       },
  //       {
  //         id: shortId(),
  //         src: 'song5',
  //         point: 60
  //       }
  //     ]
  //   }
  // ];

  constructor() { }

  // public getAllCategories(): Category[] {
  //   return this.catergories;
  // }
}
