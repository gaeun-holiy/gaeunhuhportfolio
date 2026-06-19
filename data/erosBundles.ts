export type ErosBundle = {
  bundle_id: string;
  body_part: string;
  scene_label: string;
  thumbnail: string;
  prompt_text: string;
  prompt_fidelity: number;
  character_continuity: number;
  location_continuity: number;
  naturalness: number;
  temporal_consistency: number;
  aesthetic_score: number;
};

// Edit these values when you want to adjust EROS bundle data or scores.
export const erosBundles: ErosBundle[] = [
  {
    "bundle_id": "B1",
    "body_part": "head",
    "scene_label": "S4  clips 1-2  TOTAL 14s",
    "thumbnail": "/images/b1.png",
    "prompt_text": "[beat] Laptop doom-declaration -> entering the interrogation room. SHOT 1 (0:00-0:08) INT (A), MS pushing slowly low across the dark table toward a slim matte-black laptop, 50mm, foreground obstruction (glossy table lip), faint step-print. The lens drifts low across the dark lacquered table toward a laptop open on the wood. On its screen the World Government Secretary-General stands at a podium, faintly euphoric; cold blue-white screen-glow the only light, pooling on the wood, falling off into deep shadow. Real screen flicker, heavy 35mm grain, no clean digital sheen. He declares catastrophe, throws his papers into the air, clenches a fist. SHOT 2 (0:08-0:14) INT (A), WS, 28mm, locked with faint drift. The whole cold room in one wide lonely frame: teal-green walls sinking into shadow, frosted windows glowing dirty amber. Fluorescent tube stutters overhead. EROS sits cuffed screen-RIGHT, sprawled low and crooked, wings folded and half-swallowed by dark. The DETECTIVE enters as a backlit silhouette, burgundy jacket almost black, drops a file screen-LEFT, sits, closes the laptop lid; the room drops a stop darker. No dialogue.",
    "prompt_fidelity": 80,
    "character_continuity": 98,
    "location_continuity": 64,
    "naturalness": 76,
    "temporal_consistency": 90,
    "aesthetic_score": 78
  },
  {
    "bundle_id": "B2",
    "body_part": "face",
    "scene_label": "S4  clips 3-5  TOTAL 14s",
    "thumbnail": "/images/b2.png",
    "prompt_text": "[beat] Eros close-up -> name -> photo of Earth. SHOT 1 (0:00-0:04) INT (A), ECU, 85mm, locked, shallow DOF, hard side-pool of light. Too close on EROS: a hard narrow pool rakes one side of his gaunt grime-smudged face, the healed scar across his nose catching light, the other half sinking into shadow. Dry pale faintly sweat-beaded skin, real pores and dirt; an unlit cigarette hangs from thin fingers; head tipped lazy and crooked, eyes half-lidded and bored. Soiled wing edge out of focus behind. Thick film grain. SHOT 2 (0:04-0:10) INT (A), OTS from Eros (screen-right) onto the DETECTIVE screen-left, 50mm, locked, line not crossed. Past the soft dark of Eros's bare shoulder, the DETECTIVE sits in the cold overhead pool, face half-shadowed, burgundy suede deep wine. Flat and low: name. EROS only slides his eyes over, insolent. The detective writes EROS in the name field, pen scratching. SHOT 3 (0:10-0:14) INT (A), insert CU, 50mm, slow push, reflection on glassy table. The detective's hand slides a satellite photo of Earth across the tabletop, dim mirror-image gliding in the wood. Cities burn from above, small ragged plumes of fire and smoke, grain heavy. No dialogue.",
    "prompt_fidelity": 90,
    "character_continuity": 90,
    "location_continuity": 70,
    "naturalness": 58,
    "temporal_consistency": 80,
    "aesthetic_score": 90
  },
  {
    "bundle_id": "B3",
    "body_part": "neck",
    "scene_label": "S4  clips 6-7  TOTAL 15s",
    "thumbnail": "/images/b3.png",
    "prompt_text": "[beat] Detective statistics briefing. SHOT 1 (0:00-0:08) INT (A), MCU, 50mm, locked, cold rim light, face half in shadow. The DETECTIVE under hard cold overhead, one side of his face lit, the other lost to shadow, thin cold rim along the jaw; tired skin with real texture, burgundy suede dark and matte. Eyes level on Eros, pressing the case, firm and even. SHOT 2 (0:08-0:15) INT (A), MCU, 50mm, very slow push-in. The push creeps in as he continues, frosted window glowing cold and dirty behind, grain alive in the shadows. Firm, controlled, building.",
    "prompt_fidelity": 75,
    "character_continuity": 77,
    "location_continuity": 46,
    "naturalness": 49,
    "temporal_consistency": 78,
    "aesthetic_score": 67
  },
  {
    "bundle_id": "B4",
    "body_part": "left_wing",
    "scene_label": "S4  clips 8-10  TOTAL 13s",
    "thumbnail": "/images/b4.png",
    "prompt_text": "[beat] Interesting statistics -> mention of Zeus -> a smile. SHOT 1 (0:00-0:04) INT (A), CU, 85mm, locked, shallow DOF, backlit by the frosted window. EROS backlit, a warm dirty halo of window-light behind his lank pink hair, face turned cold and half-dark toward camera; dry grimy skin, nose scar visible. Eyes drift lazily down to the photo, deadpan, bored. SHOT 2 (0:04-0:10) INT (A), MCU, 50mm, locked. The DETECTIVE exhales a tired sigh first, shoulders dropping, cold pool flat on his textured face. Then firm and even. SHOT 3 (0:10-0:13) INT (A), ECU, 100mm macro, locked, shallow DOF. Extreme detail on the corner of EROS's mouth: chapped lips, grime, grain, lifting into a faint thin crooked smile, half-lit. No dialogue.",
    "prompt_fidelity": 87,
    "character_continuity": 90,
    "location_continuity": 89,
    "naturalness": 95,
    "temporal_consistency": 80,
    "aesthetic_score": 90
  },
  {
    "bundle_id": "B5",
    "body_part": "right_wing",
    "scene_label": "S4  clips 11-13  TOTAL 15s",
    "thumbnail": "/images/b5.png",
    "prompt_text": "[beat] Detective's emotion rises -> wings spread. SHOT 1 (0:00-0:06) INT (A), MS across the table, 35mm, slight handheld, faint step-print. The DETECTIVE leans into the hard cold pool, light raking his tired face, burgundy suede deep in the dark; frustration breaking through, voice rising, firmer and louder, strained but not a full scream. SHOT 2 (0:06-0:09) INT (A), MCU, 35mm, slow push-in. He presses harder, voice up, jaw tight, a muscle working in his cheek, emotional but holding short of a scream, half his face in shadow. SHOT 3 (0:09-0:15) INT (A), MS pulling slightly wide, 35mm, slow, step-print smear. EROS slowly UNCOILS from his crooked slouch and rises for the first time; his huge soiled grimy wings UNFURL, dirty grey-tan matted feathers catching the flickering tube in cold hard glints, the span absurdly too wide for the room, throwing a vast ragged shadow up the teal wall. Grain and motion-smear on the unfurl. Wings stay SPREAD from here. No dialogue.",
    "prompt_fidelity": 87,
    "character_continuity": 75,
    "location_continuity": 98,
    "naturalness": 86,
    "temporal_consistency": 80,
    "aesthetic_score": 75
  },
  {
    "bundle_id": "B6",
    "body_part": "chest",
    "scene_label": "S4  clips 14-15  TOTAL 12s",
    "thumbnail": "/images/b6.png",
    "prompt_text": "[beat] Why did you do it (can't be bothered) -> riots existed before (fluent talk). SHOT 1 (0:00-0:05) INT (A), CU, 85mm, locked, half-shadowed. EROS standing in half-shadow, wings spread behind him, a low bored laugh, can't-be-bothered, smoke-less cigarette dangling; cold rim on his cheekbone, scar catching light, dry grimy skin and heavy grain. SHOT 2 (0:05-0:12) INT (A), MCU, 50mm, locked, slow drift. He flips on in an instant, sharp and fluent, leaning into the cold pool, eyes alive, talking circles, wings spread.",
    "prompt_fidelity": 70,
    "character_continuity": 78,
    "location_continuity": 80,
    "naturalness": 60,
    "temporal_consistency": 60,
    "aesthetic_score": 55
  },
  {
    "bundle_id": "B7",
    "body_part": "upper_torso",
    "scene_label": "S4  clips 16-17  TOTAL 14s",
    "thumbnail": "/images/b7.png",
    "prompt_text": "[beat] Crusades / Holocaust -> god, nation, homeland. SHOT 1 (0:00-0:08) INT (A), MS, 50mm, locked, dark table lip soft in the foreground. Articulate and relishing it, EROS spreads his thin grimy fingers as he lists, each passing through the hard pool of light and catching grain, wings spread behind him; the glossy table edge blurs the lower frame. SHOT 2 (0:08-0:14) INT (A), MCU drifting to a CU of his hand, 50mm, rack focus to the hand. He folds his fingers down one by one as focus racks off his half-lit face onto the dirty bony hand.",
    "prompt_fidelity": 63,
    "character_continuity": 79,
    "location_continuity": 86,
    "naturalness": 70,
    "temporal_consistency": 40,
    "aesthetic_score": 55
  },
  {
    "bundle_id": "B8",
    "body_part": "mid_torso",
    "scene_label": "S4  clip 18  TOTAL 6s",
    "thumbnail": "/images/b8.png",
    "prompt_text": "[beat] At the root there was love. SHOT 1 (0:00-0:06) INT (A), MCU, 50mm, locked, backlit, faint step-print as he settles. EROS half-silhouetted against the warm dirty window glow, wings spread and rimmed with light, face mostly shadow, grain thick. He settles, voice dropping, sinking from sharp back toward bored.",
    "prompt_fidelity": 40,
    "character_continuity": 87,
    "location_continuity": 25,
    "naturalness": 40,
    "temporal_consistency": 20,
    "aesthetic_score": 20
  },
  {
    "bundle_id": "B9",
    "body_part": "lower_torso",
    "scene_label": "S4  clips 20-22  TOTAL 15s",
    "thumbnail": "/images/b9.png",
    "prompt_text": "[beat] Cross-legged on the table -> 'it's favoritism'. SHOT 1 (0:00-0:05) INT (A), low-angle MS, 35mm, locked, looking up. EROS clambers up and sits CROSS-LEGGED on the table (not draped, not seductive, insolent and bored), looming over the detective, wings spread, the flickering panel haloing his lank hair; cold light carves his gaunt ribs and grimy torso, grain heavy. SHOT 2 (0:05-0:09) INT (A), OTS from Eros (screen-right) onto the DETECTIVE screen-left, 50mm, locked, line not crossed. Past Eros's crossed knee, the DETECTIVE sits guarded in the cold pool, half-lit, burgundy suede dark, tired skin and grain. SHOT 3 (0:09-0:15) INT (A), MS, 50mm, locked. EROS cross-legged on the table, almost tender then mocking, hard pool on his grimy face, grain and dirt.",
    "prompt_fidelity": 80,
    "character_continuity": 90,
    "location_continuity": 95,
    "naturalness": 87,
    "temporal_consistency": 78,
    "aesthetic_score": 90
  },
  {
    "bundle_id": "B10",
    "body_part": "waist",
    "scene_label": "S4  clips 23-24  TOTAL 11s",
    "thumbnail": "/images/b10.png",
    "prompt_text": "[beat] The other becomes the enemy -> a sneer. SHOT 1 (0:00-0:07) INT (A), MCU, 50mm, slow push-in, faces half in shadow. Fluent and quick, EROS leans down from his cross-legged perch into the push, half his grimy face lit, eyes glittering, smoke-less cigarette bobbing. SHOT 2 (0:07-0:11) INT (A), CU, 85mm, locked, shallow DOF. A scoff, the unlit cigarette at his chapped lips, cold rim light, dry skin and grain.",
    "prompt_fidelity": 89,
    "character_continuity": 90,
    "location_continuity": 90,
    "naturalness": 88,
    "temporal_consistency": 93,
    "aesthetic_score": 87
  }
];
