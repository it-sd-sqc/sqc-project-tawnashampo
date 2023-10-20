DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS illustrations;

CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE illustrations (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL
);

INSERT INTO chapters (title) VALUES
('CHAPTER I. The Mother of
Heroes'),
('CHAPTER II. In the Beginning'),
('CHAPTER III. The
Foster-mother'),
('CHAPTER IV. First Steps'),
('CHAPTER V. Youth beside the Downs'),
('CHAPTER VI. The Ordeal of the
Ring'),
('CHAPTER VII. Revelations'),
('CHAPTER VIII. Finn Walks
Alone'),
('CHAPTER IX. The Heart of
Tara'),
('CHAPTER X. A Transition
Stage'),
('CHAPTER XI. A Sea Change'),
('CHAPTER XII. The Parting of the
Ways'),
('CHAPTER XIII. An Adventure by
Night'),
('CHAPTER XIV. The Southern Cross
Circus'),
('CHAPTER XV. The Making of a Wild
Beast'),
('CHAPTER XVI. Martyrdom'),
('CHAPTER XVII. Freedom'),
('CHAPTER XVIII. Too Late'),
('CHAPTER XIX. The Domestic
Lure'),
('CHAPTER XX. The Sunday Hunt'),
('CHAPTER XXI. Three Dingoes went
a-walking'),
('CHAPTER XXII. A Break-up in
Arcadia'),
('CHAPTER XXIII. The Outcast'),
('CHAPTER XXIV. A Lone
Bachelor'),
('CHAPTER XXV. Mated'),
('CHAPTER XXVI. The Pack and its
Masters'),
('CHAPTER XXVII. Single
Combat'),
('CHAPTER XXVIII. Domestic Life in
the Mountain Den'),
('CHAPTER XXIX. Tragedy in the
Mountain Den'),
('CHAPTER XXX. The Exodus'),
('CHAPTER XXXI. The Trail of
Man'),
('CHAPTER XXXII. In the Last
Ditch'),
('CHAPTER XXXIII. Back from the
Wild');

INSERT INTO illustrations (description) VALUES
('THE MAN HAD HIS BACK TO THE WITHERED
IRON-BARK NOW'),
('FINN AND HIS FOSTER-MOTHER'),
('TARA SMILED BROADLY, AND STRETCHED OUT
HER FORE-LEGS ON THE GROUND'),
('THE GATE LEADING INTO THE YARD OPENED,
AND BILL APPEARED'),
('FINN''S TEETH SANK DEEP'),
('THE NEXT INSTANT SAW THE PROFESSOR
FLUNG BACK AT LENGTH AGAINST THE BARS OF THE CAGE'),
('WAS LOST IN THE SHADOW OF THE MAIN
TENT'),
('SPURRING HIS HORSE FORWARD'),
('HE WAS BACKING GRADUALLY TOWARDS A
BOULDER BESIDE THE TRAIL'),
('FINN WAS STANDING ROYALLY ERECT'),
('FINN''S TOWERING FORM STOOD OUT CLEARLY
IN THE MOONLIGHT'),
('HE SLUNG THE WALLABY OVER HIS SHOULDER
AND SET OUT FOR THE MOUNTAIN'),
('SCRAMBLING AND SLIDING DOWN THE HIGH
BANKS OF A RIVER-BED'),
('THEY SETTLED WITHIN A DOZEN PACES OF
HIS RECUMBENT FIGURE'),
('FOUR MEN WERE RIDING TOGETHER THROUGH
THE LOW BURNT-UP SCRUB'),
('THE WOLFHOUND RAISED HIS BEARDED
MUZZLE, AND SOFTLY LICKED THE MASTER''S THIN BROWN HAND');

